import type { CSSProperties } from 'react'
import type { PreviewKind } from '../types'

interface AnimationStageProps {
  kind: PreviewKind
  paused?: boolean
  speed?: number
  theme?: 'paper' | 'dark' | 'blue' | 'pink'
  compact?: boolean
  replayKey?: number
}


const baseDurations: Record<PreviewKind, number> = {
  'bounce-ball': 0.8,
  'pulse-ring': 1.6,
  'orbit-dots': 1.5,
  'floating-card': 2.4,
  'typing-text': 2.4,
  'shimmer-text': 2,
  'reveal-lines': 1.8,
  'flip-card': 2.8,
  'jelly-button': 1.8,
  'ripple-button': 1.6,
  'loader-bars': 0.8,
  spinner: 0.8,
  'gradient-wave': 4,
  confetti: 2,
  'notification-bell': 1.8,
  skeleton: 1.5,
  marquee: 5,
  blob: 4,
  checkbox: 1.4,
  heartbeat: 1.4,
}

type MotionStyle = CSSProperties & {
  '--duration'?: string
  '--play-state'?: 'running' | 'paused'
}

export function AnimationStage({
  kind,
  paused = false,
  speed = 1,
  theme = 'paper',
  compact = false,
  replayKey = 0,
}: AnimationStageProps) {
  const style: MotionStyle = {
    '--duration': `${baseDurations[kind] / speed}s`,
    '--play-state': paused ? 'paused' : 'running',
  }

  return (
    <div
      key={`${kind}-${replayKey}`}
      className={`animation-stage stage-${theme}${compact ? ' is-compact' : ''}`}
      style={style}
      aria-label={`${kind}のアニメーションプレビュー`}
    >
      {renderPreview(kind)}
    </div>
  )
}

function renderPreview(kind: PreviewKind) {
  switch (kind) {
    case 'bounce-ball':
      return <div className="demo-bounce-ball" />
    case 'pulse-ring':
      return <span className="demo-pulse-dot" />
    case 'orbit-dots':
      return (
        <div className="demo-orbit">
          <i />
          <i />
          <i />
        </div>
      )
    case 'floating-card':
      return <article className="demo-floating-card">HELLO</article>
    case 'typing-text':
      return <p className="demo-typing">CSS makes motion.</p>
    case 'shimmer-text':
      return <strong className="demo-shimmer">SHIMMER</strong>
    case 'reveal-lines':
      return (
        <div className="demo-reveal-lines">
          <span>Make it clear.</span>
          <span>Make it move.</span>
          <span>Make it memorable.</span>
        </div>
      )
    case 'flip-card':
      return (
        <div className="demo-flip-card">
          <div className="demo-flip-inner">
            <div className="demo-flip-front">FRONT</div>
            <div className="demo-flip-back">BACK</div>
          </div>
        </div>
      )
    case 'jelly-button':
      return <button className="demo-jelly-button">CLICK</button>
    case 'ripple-button':
      return <button className="demo-ripple-button">SEND</button>
    case 'loader-bars':
      return (
        <div className="demo-loader-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      )
    case 'spinner':
      return <div className="demo-spinner" />
    case 'gradient-wave':
      return <div className="demo-gradient-wave" />
    case 'confetti':
      return (
        <div className="demo-confetti">
          {Array.from({ length: 10 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
      )
    case 'notification-bell':
      return (
        <div className="demo-bell">
          <span aria-hidden="true">🔔</span>
          <b>3</b>
        </div>
      )
    case 'skeleton':
      return (
        <div className="demo-skeleton">
          <i />
          <div>
            <span />
            <span />
          </div>
        </div>
      )
    case 'marquee':
      return (
        <div className="demo-marquee">
          <div>CSS MOTION · CSS MOTION · CSS MOTION ·</div>
        </div>
      )
    case 'blob':
      return <div className="demo-blob" />
    case 'checkbox':
      return (
        <div className="demo-checkmark">
          <span />
        </div>
      )
    case 'heartbeat':
      return <div className="demo-heartbeat">♥</div>
  }
}
