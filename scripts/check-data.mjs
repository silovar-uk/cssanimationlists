// アニメーションデータの整合性を検証する。npm run build の前段(prebuild)で実行される。
// TypeScriptを直接読み込むため、esbuildでその場にトランスパイルしてimportする。
import esbuild from 'esbuild'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataEntry = path.join(__dirname, '../src/data/animations.ts')

// types.ts の AnimationCategory / Trigger と同期させること
const VALID_CATEGORIES = [
  '登場・退場', 'ローディング・進捗', 'フィードバック', 'ボタン・リンク',
  'フォーム入力', 'ナビゲーション・開閉', '文字・テキスト', '注目・バッジ',
  '背景・装飾', 'スクロール連動',
]
const VALID_TRIGGERS = ['ループ', '一度だけ', 'ホバー', '状態変化', 'スクロール']
const VALID_DIFFICULTIES = ['かんたん', 'ふつう', 'しっかり']
const VALID_COSTS = ['軽い', '注意']

// 公開済みID(CSS-001〜CSS-020)の id との対応。変更・再利用しないルールを機械的に保証する
const PINNED_REFERENCE_IDS = {
  'CSS-001': 'bounce-ball',
  'CSS-002': 'pulse-ring',
  'CSS-003': 'orbit-dots',
  'CSS-004': 'floating-card',
  'CSS-005': 'typing-text',
  'CSS-006': 'shimmer-text',
  'CSS-007': 'reveal-lines',
  'CSS-008': 'flip-card',
  'CSS-009': 'jelly-button',
  'CSS-010': 'ripple-button',
  'CSS-011': 'loader-bars',
  'CSS-012': 'spinner',
  'CSS-013': 'gradient-wave',
  'CSS-014': 'confetti',
  'CSS-015': 'notification-bell',
  'CSS-016': 'skeleton',
  'CSS-017': 'marquee',
  'CSS-018': 'blob',
  'CSS-019': 'checkbox',
  'CSS-020': 'heartbeat',
}

const errors = []

function fail(referenceId, message) {
  errors.push(`${referenceId ?? '(不明)'}: ${message}`)
}

async function loadAnimations() {
  const result = await esbuild.build({
    entryPoints: [dataEntry],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'neutral',
    target: 'es2022',
  })
  const code = result.outputFiles[0].text
  const dataUrl = `data:text/javascript;base64,${Buffer.from(code).toString('base64')}`
  const mod = await import(dataUrl)
  return mod.animations
}

function checkKeyframeReferences(item) {
  const declared = [...item.css.matchAll(/@keyframes\s+([a-zA-Z0-9_-]+)/g)].map((m) => m[1])
  for (const name of declared) {
    const occurrences = item.css.split(name).length - 1
    if (occurrences < 2) {
      fail(item.referenceId, `@keyframes ${name} が宣言されているが、animationプロパティから参照されていない`)
    }
  }
}

const animations = await loadAnimations()

if (!Array.isArray(animations) || animations.length === 0) {
  console.error('animations 配列が空、または読み込めませんでした')
  process.exit(1)
}

const seenIds = new Set()
const seenReferenceIds = new Set()

for (const item of animations) {
  // 1. id の重複
  if (seenIds.has(item.id)) fail(item.referenceId, `id "${item.id}" が重複している`)
  seenIds.add(item.id)

  // 2. referenceId の形式と重複
  if (!/^CSS-\d{3}$/.test(item.referenceId)) {
    fail(item.referenceId, `referenceId の形式が CSS-NNN ではない`)
  }
  if (seenReferenceIds.has(item.referenceId)) fail(item.referenceId, 'referenceId が重複している')
  seenReferenceIds.add(item.referenceId)

  // 3. 公開済みIDの固定
  const pinnedId = PINNED_REFERENCE_IDS[item.referenceId]
  if (pinnedId && pinnedId !== item.id) {
    fail(item.referenceId, `公開済みIDのid対応が変更されている(期待値: ${pinnedId}, 実際: ${item.id})`)
  }

  // 4. 列挙値
  if (!VALID_CATEGORIES.includes(item.category)) fail(item.referenceId, `未定義のcategory "${item.category}"`)
  if (!VALID_TRIGGERS.includes(item.trigger)) fail(item.referenceId, `未定義のtrigger "${item.trigger}"`)
  if (!VALID_DIFFICULTIES.includes(item.difficulty)) fail(item.referenceId, `未定義のdifficulty "${item.difficulty}"`)
  if (!VALID_COSTS.includes(item.cost)) fail(item.referenceId, `未定義のcost "${item.cost}"`)

  // 5. 必須テキストフィールド
  if (!item.html?.trim()) fail(item.referenceId, 'html が空')
  if (!item.css?.trim()) fail(item.referenceId, 'css が空')
  if (!item.reducedMotion?.trim()) fail(item.referenceId, 'reducedMotion が空')

  // 6. animation または transition を含むこと
  if (!/\banimation\s*:|\btransition\s*:/.test(item.css)) {
    fail(item.referenceId, 'css に animation / transition プロパティが見つからない')
  }

  // 7. @keyframes の参照漏れ
  checkKeyframeReferences(item)
}

// 公開済みIDが欠落していないか(削除・変更されていないか)
for (const [referenceId, id] of Object.entries(PINNED_REFERENCE_IDS)) {
  if (!seenReferenceIds.has(referenceId)) {
    fail(referenceId, `公開済みIDが失われている(期待されるid: ${id})`)
  }
}

if (errors.length > 0) {
  console.error(`データ検証エラー: ${errors.length}件\n`)
  for (const message of errors) console.error(`  - ${message}`)
  process.exit(1)
}

console.log(`データ検証OK: ${animations.length}件`)
