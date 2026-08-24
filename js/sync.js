/* ===========================================================
   いいね・コメント・確認済みフラグの同期レイヤー。
   js/firebase-config.js に有効な設定がある場合は Firestore を使い、
   全端末でリアルタイムに共有する。設定がない場合はこの端末の
   localStorage のみで動作する(従来動作へのフォールバック)。
   =========================================================== */

var Sync = (function () {
  "use strict";

  var STORAGE_KEY = "folklore-math-review-state-v1";

  var cloudEnabled = false;
  var db = null;
  var myUid = null;
  var changeListeners = [];

  var localState = loadLocalState();
  // cloudState.studies[id] = { likes: [uid, ...], checked: boolean }
  // cloudState.comments[id] = [{ id, text, time, uid }, ...]
  var cloudState = { studies: {}, comments: {} };

  function loadLocalState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { likes: {}, checked: {}, comments: {} };
      var parsed = JSON.parse(raw);
      return {
        likes: parsed.likes || {},
        checked: parsed.checked || {},
        comments: parsed.comments || {},
      };
    } catch (e) {
      return { likes: {}, checked: {}, comments: {} };
    }
  }

  function saveLocalState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(localState));
    } catch (e) {
      /* localStorage unavailable; state stays in-memory for this session */
    }
  }

  function notifyChange() {
    changeListeners.forEach(function (fn) {
      fn();
    });
  }

  function onChange(fn) {
    changeListeners.push(fn);
  }

  function isCloudConfigured() {
    return (
      typeof FIREBASE_CONFIG !== "undefined" &&
      FIREBASE_CONFIG.apiKey &&
      FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY" &&
      typeof firebase !== "undefined"
    );
  }

  function init() {
    if (!isCloudConfigured()) {
      cloudEnabled = false;
      notifyChange();
      return;
    }
    try {
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.firestore();
      firebase.auth().onAuthStateChanged(function (user) {
        if (!user) return;
        myUid = user.uid;
        cloudEnabled = true;
        subscribeStudies();
        subscribeComments();
        notifyChange();
      });
      firebase.auth().signInAnonymously().catch(function (err) {
        console.error("Firebase anonymous sign-in failed:", err);
        cloudEnabled = false;
        notifyChange();
      });
    } catch (e) {
      console.error("Firebase init failed:", e);
      cloudEnabled = false;
      notifyChange();
    }
  }

  function subscribeStudies() {
    db.collection("studies").onSnapshot(
      function (snapshot) {
        var next = {};
        snapshot.forEach(function (doc) {
          var data = doc.data();
          next[doc.id] = {
            likes: data.likes || [],
            checked: !!data.checked,
          };
        });
        cloudState.studies = next;
        notifyChange();
      },
      function (err) {
        console.error("studies subscription error:", err);
      }
    );
  }

  function subscribeComments() {
    db.collectionGroup("comments").onSnapshot(
      function (snapshot) {
        var next = {};
        snapshot.forEach(function (doc) {
          var studyId = doc.ref.parent.parent.id;
          if (!next[studyId]) next[studyId] = [];
          var data = doc.data();
          next[studyId].push({
            id: doc.id,
            text: data.text,
            time: data.time,
            uid: data.uid,
          });
        });
        Object.keys(next).forEach(function (id) {
          next[id].sort(function (a, b) {
            return a.time - b.time;
          });
        });
        cloudState.comments = next;
        notifyChange();
      },
      function (err) {
        console.error("comments subscription error:", err);
      }
    );
  }

  function isLiked(id) {
    if (cloudEnabled) {
      var s = cloudState.studies[id];
      return !!(s && myUid && s.likes.indexOf(myUid) !== -1);
    }
    return !!localState.likes[id];
  }

  function likeCount(id) {
    if (cloudEnabled) {
      var s = cloudState.studies[id];
      return s ? s.likes.length : 0;
    }
    return localState.likes[id] ? 1 : 0;
  }

  function isChecked(id) {
    if (cloudEnabled) {
      var s = cloudState.studies[id];
      return !!(s && s.checked);
    }
    return !!localState.checked[id];
  }

  function getComments(id) {
    if (cloudEnabled) {
      return cloudState.comments[id] || [];
    }
    return (localState.comments[id] || []).map(function (c, i) {
      return { id: String(i), text: c.text, time: c.time, uid: null };
    });
  }

  function toggleLike(id) {
    if (cloudEnabled) {
      var ref = db.collection("studies").doc(id);
      var op = isLiked(id)
        ? firebase.firestore.FieldValue.arrayRemove(myUid)
        : firebase.firestore.FieldValue.arrayUnion(myUid);
      ref.set({ likes: op }, { merge: true }).catch(function (err) {
        console.error("toggleLike failed:", err);
      });
      return;
    }
    localState.likes[id] = !localState.likes[id];
    saveLocalState();
    notifyChange();
  }

  function toggleChecked(id) {
    if (cloudEnabled) {
      var ref = db.collection("studies").doc(id);
      ref.set({ checked: !isChecked(id) }, { merge: true }).catch(function (err) {
        console.error("toggleChecked failed:", err);
      });
      return;
    }
    localState.checked[id] = !localState.checked[id];
    saveLocalState();
    notifyChange();
  }

  function addComment(id, text) {
    if (cloudEnabled) {
      db.collection("studies")
        .doc(id)
        .collection("comments")
        .add({ text: text, time: Date.now(), uid: myUid })
        .catch(function (err) {
          console.error("addComment failed:", err);
        });
      return;
    }
    if (!localState.comments[id]) localState.comments[id] = [];
    localState.comments[id].push({ text: text, time: Date.now() });
    saveLocalState();
    notifyChange();
  }

  function deleteComment(id, commentId) {
    if (cloudEnabled) {
      db.collection("studies")
        .doc(id)
        .collection("comments")
        .doc(commentId)
        .delete()
        .catch(function (err) {
          console.error("deleteComment failed:", err);
        });
      return;
    }
    var idx = parseInt(commentId, 10);
    if (!localState.comments[id]) return;
    localState.comments[id].splice(idx, 1);
    saveLocalState();
    notifyChange();
  }

  function canDeleteComment(comment) {
    if (!cloudEnabled) return true;
    return !!(comment.uid && myUid && comment.uid === myUid);
  }

  function isCloudEnabled() {
    return cloudEnabled;
  }

  return {
    init: init,
    onChange: onChange,
    isLiked: isLiked,
    likeCount: likeCount,
    isChecked: isChecked,
    getComments: getComments,
    toggleLike: toggleLike,
    toggleChecked: toggleChecked,
    addComment: addComment,
    deleteComment: deleteComment,
    canDeleteComment: canDeleteComment,
    isCloudEnabled: isCloudEnabled,
  };
})();
