(function () {
  "use strict";

  var STORAGE_KEY = "folklore-math-review-state-v1";

  /** @type {{likes: Object<string, boolean>, checked: Object<string, boolean>, comments: Object<string, Array<{text:string, time:number}>>}} */
  var state = loadState();

  var activeSubjects = new Set();
  var activeModels = new Set();
  var unreadOnly = false;
  var currentModalId = null;

  function loadState() {
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

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* localStorage unavailable; state stays in-memory for this session */
    }
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return (
        {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[c] || c
      );
    });
  }

  function linkify(url) {
    if (!url) return '<span class="detail-value">未登録</span>';
    var safe = escapeHtml(url);
    return (
      '<a href="' + safe + '" target="_blank" rel="noopener noreferrer">' + safe + "</a>"
    );
  }

  /* ---------------- Filter panel setup ---------------- */

  function uniqueSorted(list) {
    return Array.from(new Set(list)).sort(function (a, b) {
      return a.localeCompare(b, "ja");
    });
  }

  function buildFilterChips() {
    var subjects = uniqueSorted(STUDIES.map(function (s) { return s.subjectCategory; }));
    var models = uniqueSorted(STUDIES.map(function (s) { return s.modelCategory; }));

    renderChipGroup("subjectFilters", subjects, activeSubjects, "subjectCategory");
    renderChipGroup("modelFilters", models, activeModels, "modelCategory");
  }

  function renderChipGroup(containerId, values, activeSet, field) {
    var container = document.getElementById(containerId);
    container.innerHTML = "";
    values.forEach(function (value) {
      var count = STUDIES.filter(function (s) { return s[field] === value; }).length;
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip" + (activeSet.has(value) ? " active" : "");
      btn.innerHTML =
        escapeHtml(value) + '<span class="chip-count">' + count + "</span>";
      btn.addEventListener("click", function () {
        if (activeSet.has(value)) {
          activeSet.delete(value);
        } else {
          activeSet.add(value);
        }
        renderChipGroup(containerId, values, activeSet, field);
        renderList();
      });
      container.appendChild(btn);
    });
  }

  /* ---------------- Card list ---------------- */

  function getFilteredStudies() {
    return STUDIES.filter(function (s) {
      if (unreadOnly && state.checked[s.id]) return false;
      if (activeSubjects.size && !activeSubjects.has(s.subjectCategory)) return false;
      if (activeModels.size && !activeModels.has(s.modelCategory)) return false;
      return true;
    }).sort(function (a, b) {
      return a.year - b.year;
    });
  }

  function renderList() {
    var list = getFilteredStudies();
    var container = document.getElementById("cardList");
    var emptyMsg = document.getElementById("emptyMessage");
    container.innerHTML = "";

    emptyMsg.hidden = list.length !== 0;

    list.forEach(function (study) {
      container.appendChild(buildCard(study));
    });

    updateStats();
  }

  function buildCard(study) {
    var isChecked = !!state.checked[study.id];
    var isLiked = !!state.likes[study.id];
    var commentCount = (state.comments[study.id] || []).length;

    var card = document.createElement("article");
    card.className = "study-card" + (isChecked ? " is-checked" : "");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", study.titleJa + " の詳細を開く");

    card.innerHTML =
      '<div class="card-top">' +
      '<div class="card-badges">' +
      '<span class="badge badge-year">' + escapeHtml(study.year) + "年</span>" +
      '<span class="badge badge-subject">' + escapeHtml(study.subjectCategory) + "</span>" +
      '<span class="badge badge-model">' + escapeHtml(study.modelCategory) + "</span>" +
      "</div>" +
      (isChecked ? '<span class="checked-flag">確認済み</span>' : "") +
      "</div>" +
      '<h3 class="card-title-ja">' + escapeHtml(study.titleJa) + "</h3>" +
      '<p class="card-title-original">' + escapeHtml(study.titleOriginal) + "</p>" +
      '<p class="card-authors">' + escapeHtml(study.authors) + "</p>" +
      '<p class="card-summary">' + escapeHtml(study.summary) + "</p>" +
      '<div class="card-bottom">' +
      '<button type="button" class="like-btn' + (isLiked ? " liked" : "") + '" data-action="like" data-id="' + study.id + '">' +
      '<span class="like-icon">' + (isLiked ? "♥" : "♡") + "</span>" +
      '<span class="like-count">' + likeLabel(study, isLiked) + "</span>" +
      "</button>" +
      '<span class="comment-count">💬 ' + commentCount + "</span>" +
      "</div>";

    card.addEventListener("click", function (e) {
      if (e.target.closest('[data-action="like"]')) return;
      openModal(study.id);
    });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        if (e.target.closest('[data-action="like"]')) return;
        e.preventDefault();
        openModal(study.id);
      }
    });

    var likeBtn = card.querySelector('[data-action="like"]');
    likeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleLike(study.id);
    });

    return card;
  }

  function likeLabel(study, isLiked) {
    return isLiked ? "いいね済み" : "いいね";
  }

  function toggleLike(id) {
    state.likes[id] = !state.likes[id];
    saveState();
    renderList();
    if (currentModalId === id) renderModal(id);
  }

  function toggleChecked(id) {
    state.checked[id] = !state.checked[id];
    saveState();
    renderList();
    if (currentModalId === id) renderModal(id);
  }

  function updateStats() {
    var total = STUDIES.length;
    var checkedCount = STUDIES.filter(function (s) { return state.checked[s.id]; }).length;
    var shown = getFilteredStudies().length;
    document.getElementById("statsText").textContent =
      "全" + total + "件中 " + shown + "件を表示 / 確認済み " + checkedCount + "件";
  }

  /* ---------------- Modal / detail ---------------- */

  function findStudy(id) {
    return STUDIES.filter(function (s) { return s.id === id; })[0];
  }

  function openModal(id) {
    currentModalId = id;
    renderModal(id);
    var modal = document.getElementById("detailModal");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    currentModalId = null;
    var modal = document.getElementById("detailModal");
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function renderModal(id) {
    var study = findStudy(id);
    if (!study) return;
    var isChecked = !!state.checked[study.id];
    var isLiked = !!state.likes[study.id];
    var comments = state.comments[study.id] || [];

    var body = document.getElementById("modalBody");
    body.innerHTML =
      '<div class="modal-meta-row">' +
      '<span class="badge badge-year">' + escapeHtml(study.year) + "年</span>" +
      '<span class="badge badge-subject">' + escapeHtml(study.subjectCategory) + "</span>" +
      '<span class="badge badge-model">' + escapeHtml(study.modelCategory) + "</span>" +
      "</div>" +
      "<h2>" + escapeHtml(study.titleJa) + "</h2>" +
      '<p class="modal-original-title">' + escapeHtml(study.titleOriginal) + " (" + escapeHtml(study.originalLang) + ")</p>" +

      section("著者", escapeHtml(study.authors)) +
      section("研究の概要", escapeHtml(study.summary)) +
      section("用いられた数理モデルの概要", escapeHtml(study.mathModelSummary)) +
      section("結論", escapeHtml(study.conclusion)) +
      section("今後の課題", escapeHtml(study.futureIssues)) +
      section("論文のURL", linkify(study.url)) +

      '<div class="modal-actions">' +
      '<button type="button" class="like-btn' + (isLiked ? " liked" : "") + '" data-action="modal-like">' +
      '<span class="like-icon">' + (isLiked ? "♥" : "♡") + "</span><span>" + likeLabel(study, isLiked) + "</span>" +
      "</button>" +
      '<button type="button" class="check-toggle' + (isChecked ? " checked" : "") + '" data-action="modal-check">' +
      (isChecked ? "✓ 確認済み" : "未確認 (クリックで確認済みにする)") +
      "</button>" +
      "</div>" +

      '<div class="comment-section">' +
      '<span class="detail-label">コメント (' + comments.length + ")</span>" +
      '<ul class="comment-list" id="commentList"></ul>' +
      '<form class="comment-form" id="commentForm">' +
      '<textarea class="comment-input" id="commentInput" placeholder="コメントを入力..." maxlength="2000"></textarea>' +
      '<button type="submit" class="comment-submit">投稿</button>' +
      "</form>" +
      "</div>";

    renderCommentList(study.id);

    body.querySelector('[data-action="modal-like"]').addEventListener("click", function () {
      toggleLike(study.id);
    });
    body.querySelector('[data-action="modal-check"]').addEventListener("click", function () {
      toggleChecked(study.id);
    });
    body.querySelector("#commentForm").addEventListener("submit", function (e) {
      e.preventDefault();
      var input = document.getElementById("commentInput");
      var text = input.value.trim();
      if (!text) return;
      addComment(study.id, text);
      input.value = "";
    });
  }

  function section(label, valueHtml) {
    return (
      '<div class="detail-section">' +
      '<span class="detail-label">' + escapeHtml(label) + "</span>" +
      '<p class="detail-value">' + valueHtml + "</p>" +
      "</div>"
    );
  }

  function renderCommentList(id) {
    var comments = state.comments[id] || [];
    var listEl = document.getElementById("commentList");
    if (!listEl) return;
    listEl.innerHTML = "";
    if (!comments.length) {
      var empty = document.createElement("li");
      empty.className = "comment-empty";
      empty.textContent = "まだコメントはありません。";
      listEl.appendChild(empty);
      return;
    }
    comments.forEach(function (comment, index) {
      var li = document.createElement("li");
      li.className = "comment-item";
      var date = new Date(comment.time);
      li.innerHTML =
        '<div class="comment-item-head">' +
        '<span class="comment-time">' + date.toLocaleString("ja-JP") + "</span>" +
        '<button type="button" class="comment-delete" data-index="' + index + '">削除</button>' +
        "</div>" +
        '<p class="comment-text"></p>';
      li.querySelector(".comment-text").textContent = comment.text;
      li.querySelector(".comment-delete").addEventListener("click", function () {
        state.comments[id].splice(index, 1);
        saveState();
        renderCommentList(id);
        renderList();
        var body = document.getElementById("modalBody");
        var label = body.querySelector(".comment-section .detail-label");
        if (label) label.textContent = "コメント (" + state.comments[id].length + ")";
      });
      listEl.appendChild(li);
    });
  }

  function addComment(id, text) {
    if (!state.comments[id]) state.comments[id] = [];
    state.comments[id].push({ text: text, time: Date.now() });
    saveState();
    renderCommentList(id);
    renderList();
    var body = document.getElementById("modalBody");
    var label = body.querySelector(".comment-section .detail-label");
    if (label) label.textContent = "コメント (" + state.comments[id].length + ")";
  }

  /* ---------------- Filter panel open/close (mobile drawer) ---------------- */

  function setPanelOpen(open) {
    var panel = document.getElementById("filterPanel");
    var overlay = document.getElementById("overlay");
    var toggle = document.getElementById("menuToggle");
    panel.classList.toggle("open", open);
    overlay.classList.toggle("visible", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  /* ---------------- Init ---------------- */

  function init() {
    buildFilterChips();
    renderList();

    document.getElementById("unreadOnly").addEventListener("change", function (e) {
      unreadOnly = e.target.checked;
      renderList();
    });

    document.getElementById("resetFilters").addEventListener("click", function () {
      activeSubjects.clear();
      activeModels.clear();
      unreadOnly = false;
      document.getElementById("unreadOnly").checked = false;
      buildFilterChips();
      renderList();
    });

    document.getElementById("menuToggle").addEventListener("click", function () {
      var isOpen = document.getElementById("filterPanel").classList.contains("open");
      setPanelOpen(!isOpen);
    });
    document.getElementById("overlay").addEventListener("click", function () {
      setPanelOpen(false);
    });

    document.getElementById("modalClose").addEventListener("click", closeModal);
    document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
