/* ===========================================================
   Firebase 設定 (いいね・コメント・確認済みフラグを全端末で共有するために使用)
   ===========================================================
   設定手順:
   1. https://console.firebase.google.com/ で無料のFirebaseプロジェクトを作成
   2. 「Firestore Database」を有効化(本番モードで作成し、下記のセキュリティ
      ルールを設定してください。README.md の「共有機能のセットアップ」参照)
   3. 「Authentication」→「Sign-in method」で「匿名」を有効化
   4. プロジェクトの設定 → 全般 → マイアプリ → ウェブアプリを追加し、
      表示された firebaseConfig の値を下の FIREBASE_CONFIG にそのまま貼り付け
   5. このファイルを保存してデプロイすれば、全端末でいいね・コメント・
      確認済みフラグがリアルタイムに共有されます。

   ここに書く値(apiKey等)は公開しても問題ありません。実際のアクセス制御は
   Firestoreのセキュリティルール側で行います。

   FIREBASE_CONFIG を設定しない(apiKeyが "YOUR_API_KEY" のままの)場合は、
   これまで通りこの端末のブラウザ内(localStorage)にのみデータが保存され、
   他の端末とは共有されません。
   =========================================================== */

var FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
