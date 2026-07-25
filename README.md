# CSS MOTION — CSSアニメーション図鑑

CSSアニメーションを、実際に動くプレビューとコードのセットで探せるReact製ライブラリです。

## 主な機能

- 20種類のCSSアニメーションをカードで常時プレビュー
- キーワード、タグ、カテゴリー、難易度による検索・分類
- ランダム表示と自動鑑賞モード
- アニメーションごとの再生・停止、速度変更、背景変更
- HTML／CSSコードのコピー
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

## アニメーションの追加

1. `src/types.ts` の `PreviewKind` にプレビュー名を追加
2. `src/data/animations.ts` にデータを追加
3. `src/components/AnimationStage.tsx` にプレビュー用HTMLを追加
4. `src/styles.css` にプレビュー用CSSとキーフレームを追加

データ例：

```ts
{
  id: 'slide-up',
  referenceId: 'CSS-021',
  title: 'スライドアップ',
  description: '下から滑らかに登場する動き。',
  category: '登場・退場',
  tags: ['登場', 'transform', 'opacity'],
  difficulty: 'かんたん',
  preview: 'slide-up',
  html: '<div class="slide-up">HELLO</div>',
  css: '...',
}
```

## 公開

`main` ブランチへ反映すると、GitHub ActionsがViteをビルドし、GitHub Pagesへデプロイします。

公開先想定：

```text
https://silovar-uk.github.io/cssanimationlists/
```
