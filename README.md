# CSS MOTION — CSSアニメーション図鑑

CSSアニメーションを、実際に動くプレビューとコードのセットで探せるReact製ライブラリです。

## 主な機能

- CSSアニメーションをカードでプレビュー(画面外に出ると自動停止)
- キーワード、タグ、カテゴリー、トリガー、難易度による検索・分類
- ランダム表示と自動鑑賞モード
- アニメーションごとの再生・停止、速度変更、背景変更(Web Animations APIで制御)
- HTML／CSSコードのコピー。プレビューはコピーされるコードと同一のソースから描画される(Shadow DOM)
- お気に入りのブラウザ保存
- スマートフォン対応
- GitHub Pages対応

## 参照ID

各アニメーションには、引用・共有用の固定IDを割り当てています。

- 表記例：`CSS-001 バウンドボール`
- IDだけで検索可能
- 詳細画面のIDボタンから「ID＋名称」をコピー可能
- `#CSS-001` の形式で個別アニメーションへ直接リンク可能

公開済みIDは変更・再利用しません。アニメーションを削除した場合も欠番として残し、新規追加時は末尾の次番号を使います。

## ローカル起動

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
npm run preview
```

`npm run build` の前段で `npm run check:data`(データ検証)が自動実行されます。
単体で実行する場合は次のコマンドを使います。

```bash
npm run check:data
```

## アニメーションの追加

`src/data/animations.ts` に1件追加するだけです。プレビューは `html` / `css` から
Shadow DOM で直接描画されるため、他ファイルの編集は不要です。

データ例：

```ts
{
  id: 'slide-up',
  referenceId: 'CSS-021',
  title: 'スライドアップ',
  description: '下から滑らかに登場する動き。',
  category: '登場・退場',
  trigger: '一度だけ',
  tags: ['登場', 'transform', 'opacity'],
  difficulty: 'かんたん',
  cost: '軽い',
  html: '<div class="slide-up">HELLO</div>',
  css: `.slide-up { animation: slide-up .5s both; }
@keyframes slide-up { from { opacity: 0; transform: translateY(24px); } }`,
  reducedMotion: '.slide-up { animation: none; }',
}
```

参照ID(`referenceId`)は、その時点で使われている末尾の次番号を使います。
公開済みIDは変更・再利用しません。

`category` / `trigger` / `difficulty` / `cost` は `src/types.ts` で定義された値のみ使用できます。
`npm run check:data` が、未定義の値やID重複、`@keyframes` の参照漏れなどを検出します。

## 公開

`main` ブランチへ反映すると、GitHub ActionsがViteをビルドし、GitHub Pagesへデプロイします。

公開先想定：

```text
https://silovar-uk.github.io/cssanimationlists/
```
