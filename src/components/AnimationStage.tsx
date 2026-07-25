import { useEffect, useRef, useState } from 'react'
import type { AnimationItem } from '../types'

interface AnimationStageProps {
  item: AnimationItem
  paused?: boolean
  speed?: number
  theme?: 'paper' | 'dark' | 'blue' | 'pink'
  compact?: boolean
  replayKey?: number
  /** 画面外に出たら自動停止する(一覧のカードのみ有効化) */
  observeVisibility?: boolean
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
  observeVisibility = false,
}: AnimationStageProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const hostRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(!observeVisibility)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const root = host.shadowRoot ?? host.attachShadow({ mode: 'open' })
    root.innerHTML = `<style>${item.css}</style>${item.html}`
  }, [item, replayKey])

  useEffect(() => {
    if (!observeVisibility) return
    const stage = stageRef.current
    if (!stage) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: '200px',
    })
    observer.observe(stage)
    return () => observer.disconnect()
  }, [observeVisibility])

  useEffect(() => {
    const root = hostRef.current?.shadowRoot
    if (!root) return
    const shouldPlay = !paused && inView
    for (const animation of root.getAnimations()) {
      animation.playbackRate = speed
      if (shouldPlay) animation.play()
      else animation.pause()
    }
  }, [paused, speed, replayKey, inView])

  return (
    <div
      ref={stageRef}
      className={`animation-stage stage-${theme}${compact ? ' is-compact' : ''}`}
      aria-label={`${item.title}のアニメーションプレビュー`}
    >
      <div ref={hostRef} className="stage-shadow-host" />
    </div>
  )
}
