# Review

民俗学×数理モデルの既存研究レビュー

「民俗学 × 数理モデル」の交差領域にある実在の研究48件を管理するための
静的Webアプリです。ビルド不要・バックエンド不要で、ブラウザで
`index.html` を開くだけで動作します。

## 使い方

```
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

もしくは GitHub Pages 等の静的ホスティングにそのまま配置しても動作します。

## 機能

- 各研究について以下を表示
  - 論文タイトル（日本語訳 / 原語）
  - 研究の概要
  - 著者名
  - 用いられた数理モデルの概要
  - 結論
  - 今後の課題
  - 論文のURL
  - 発表年
- 研究ごとに「いいね」
- 研究ごとにコメント投稿・削除
- 研究ごとに「確認済み」フラグの切り替え
- Firebase設定済みの場合、いいね・コメント・確認済みフラグをスマホ・iPad・
  PCなど全端末でリアルタイムに共有（未設定時はこの端末のみ）
- 「未確認のみ表示」フィルター
- 「扱う対象」「数理モデル」カテゴリによる複数選択フィルター
- スマホ最適化（下からせり上がるフィルタードロワー・詳細モーダル）
  かつPCでも見やすいレスポンシブなカードグリッド
- ダークテーマ、配色は 藍色 / オレンジ / 黒 / グレー / 白 のみで構成
- フォントは Meiryo（メイリオ）を優先指定（未インストール環境ではOS標準の
  ゴシック体にフォールバック）

## データについて

`js/data.js` に48件の研究データを格納しています。

「いいね」「コメント」「確認済み」フラグは、`js/firebase-config.js` に
Firebaseプロジェクトの設定を入力すると **Firestore経由でスマホ・iPad・PC等
すべての端末間でリアルタイムに共有されます**（下記「共有機能のセットアップ」
参照）。未設定の場合はこれまで通りブラウザの `localStorage` にのみ保存され、
その端末だけで完結します（他の端末とは共有されません）。画面右上の
バッジ（🔗 端末間で共有中 / 💾 この端末のみ）で現在の状態を確認できます。

新しい研究を追加する場合は `js/data.js` の配列に同じ形式のオブジェクトを
追加してください。

## 共有機能のセットアップ（いいね・コメント・確認済みフラグを全端末で共有する）

無料のFirebaseプロジェクトを使って、いいね・コメント・確認済みフラグを
スマホ・iPad・PCなど全端末でリアルタイムに共有できます。

1. https://console.firebase.google.com/ にアクセスし、Googleアカウントで
   無料のプロジェクトを新規作成する
2. 左メニュー「構築」→「Firestore Database」→「データベースの作成」
   - ロケーションは任意（例: `asia-northeast1` 東京）
   - モードは「本番環境モード」を選択
3. 「ルール」タブを開き、以下のセキュリティルールに置き換えて公開する

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /studies/{studyId} {
         allow read: if true;
         allow write: if request.auth != null;

         match /comments/{commentId} {
           allow read: if true;
           allow create: if request.auth != null
                          && request.resource.data.uid == request.auth.uid;
           allow delete: if request.auth != null
                          && resource.data.uid == request.auth.uid;
           allow update: if false;
         }
       }
     }
   }
   ```

   （閲覧は誰でも可能、書き込みは匿名認証を経た利用者のみ、コメントの削除は
   投稿者本人の端末からのみ行えるようにする設定です）

4. 左メニュー「構築」→「Authentication」→「Sign-in method」で
   「匿名」プロバイダを有効にする
5. 左メニュー「プロジェクトの設定」（歯車アイコン）→「全般」→
   「マイアプリ」で「</> (ウェブ)」を選んでアプリを追加し、表示された
   `firebaseConfig` の値を `js/firebase-config.js` の `FIREBASE_CONFIG` に
   そのまま貼り付ける
6. コミット・デプロイすれば完了。画面右上に「🔗 端末間で共有中」と表示され、
   以降はいいね・コメント・確認済みフラグが全端末でリアルタイムに同期されます

`js/firebase-config.js` に書く値（apiKey等）はクライアント側の識別子であり
公開しても問題ありません。実際のアクセス制御は上記のFirestoreセキュリティ
ルールが担っています。

Firebaseの無料枠（Sparkプラン）で個人・小規模チームの利用であれば十分
まかなえます。

## ディレクトリ構成

```
index.html            エントリーポイント
css/style.css         スタイル（ダークテーマ）
js/data.js            研究データ（48件）
js/firebase-config.js Firebase設定（共有機能を使う場合に編集）
js/sync.js            いいね・コメント・確認済みフラグの同期レイヤー
                       (Firestore / localStorage フォールバックを吸収)
js/app.js             表示・フィルターのロジック
```
