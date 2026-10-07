# LIFE QUEST 3D

React・TypeScript・Vite・Three.js・React Three Fiber・drei・Zustand で作る、オリジナルの20マス人生すごろく。外部モデル、バックエンド、認証キーは不要です。

## 開発

Node.js 22 以上推奨。

```sh
npm install
npm run dev
```

サイコロを振る → 1マスずつ移動 → イベントを確認／選択 → 20マス目で人生結果。結果画面から完全リスタートできます。ドラッグでカメラ回転、ホイールでズーム。「キャラクターに追従」でカメラの注視点を切り替えます。

```sh
npm test
npm run build
npm run preview
```

## 公開

Vercel にリポジトリをインポートし、Framework を Vite、Build Command を `npm run build`、Output Directory を `dist` に指定。環境変数は不要です。Google Fonts に接続できない場合はシステムフォントになります。

## 拡張

- タイトルとコース・年齢: `src/data/board.ts`（position は x / y / z）
- マス別イベント候補と選択肢: `src/data/events.ts`
- 進行状態・ステータス・結果計算: `src/store/gameStore.ts`
- 手続き生成したジオラマとキャラクター: `src/components/GameScene.tsx`

幸福度・健康は0〜100、所持金・経験は0以上。イベントは確定ボタンで適用され、移動／イベント中の追加ロールは状態管理側でも拒否します。サウンド、セーブ、分岐、マルチプレイヤーはこの試作版には含みません。
