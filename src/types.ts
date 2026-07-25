export type AnimationCategory =
  | '登場・退場'
  | 'ローディング・進捗'
  | 'フィードバック'
  | 'ボタン・リンク'
  | 'フォーム入力'
  | 'ナビゲーション・開閉'
  | '文字・テキスト'
  | '注目・バッジ'
  | '背景・装飾'
  | 'スクロール連動'

export type Trigger = 'ループ' | '一度だけ' | 'ホバー' | '状態変化' | 'スクロール'

export type Difficulty = 'かんたん' | 'ふつう' | 'しっかり'

/** 軽い = transform / opacity / filter のみで動く。注意 = レイアウトや塗りの再計算を伴う */
export type Cost = '軽い' | '注意'

export type PreviewKind =
  | 'bounce-ball'
  | 'pulse-ring'
  | 'orbit-dots'
  | 'floating-card'
  | 'typing-text'
  | 'shimmer-text'
  | 'reveal-lines'
  | 'flip-card'
  | 'jelly-button'
  | 'ripple-button'
  | 'loader-bars'
  | 'spinner'
  | 'gradient-wave'
  | 'confetti'
  | 'notification-bell'
  | 'skeleton'
  | 'marquee'
  | 'blob'
  | 'checkbox'
  | 'heartbeat'

export interface AnimationItem {
  id: string
  referenceId: string
  title: string
  description: string
  category: AnimationCategory
  trigger: Trigger
  tags: string[]
  difficulty: Difficulty
  cost: Cost
  preview: PreviewKind
  html: string
  css: string
  /** prefers-reduced-motion: reduce のときにコピー用コードへ連結する代替スタイル */
  reducedMotion: string
  /** 対応状況に注意が要る場合のみ記載(animation-timeline など) */
  browserNote?: string
  note?: string
}
