import { useEffect, useRef } from 'react'
import type { AnimationItem } from '../types'

interface AnimationStageProps {
  item: AnimationItem
  paused?: boolean
  speed?: number
  theme?: 'paper' | 'dark' | 'blue' | 'pink'
  compact?: boolean
  replayKey?: number
}

/**
 * html/css をそのまま Shadow DOM に描画する。表示される動きと、
 * 利用者がコピーするコードが常に同一のソースになる。
 */
export function AnimationStage({
  item,
  paused = false,
  speed = 1,
  theme = 'paper',
  compact = false,
  replayKey = 0,
}: AnimationStageProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const root = host.shadowRoot ?? host.attachShadow({ mode: 'open' })
    root.innerHTML = `<style>${item.css}</style>${item.html}`
  }, [item, replayKey])

  useEffect(() => {
    const root = hostRef.current?.shadowRoot
    if (!root) return
    for (const animation of root.getAnimations()) {
      animation.playbackRate = speed
      if (paused) animation.pause()
      else animation.play()
    }
  }, [paused, speed, replayKey])

  return (
    <div
      className={`animation-stage stage-${theme}${compact ? ' is-compact' : ''}`}
      aria-label={`${item.title}のアニメーションプレビュー`}
    >
      <div ref={hostRef} className="stage-shadow-host" />
    </div>
  )
}
