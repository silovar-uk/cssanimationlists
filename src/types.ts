export type AnimationCategory =
  | '登場・退場'
  | '強調・反応'
  | 'ローディング'
  | '文字'
  | '背景・装飾'
  | 'UIパーツ'

export type Difficulty = 'かんたん' | 'ふつう' | 'しっかり'

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
  tags: string[]
  difficulty: Difficulty
  preview: PreviewKind
  html: string
  css: string
  note?: string
}
