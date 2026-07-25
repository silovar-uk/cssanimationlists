import { useState } from 'react'
import { Check, Code2, Heart, Maximize2, Pause, Play } from 'lucide-react'
import type { AnimationItem } from '../types'
import { AnimationStage } from './AnimationStage'

interface AnimationCardProps {
  item: AnimationItem
  favorite: boolean
  paused: boolean
  onFavorite: () => void
  onPause: () => void
  onOpen: () => void
}

export function AnimationCard({
  item,
  favorite,
  paused,
  onFavorite,
  onPause,
  onOpen,
}: AnimationCardProps) {
  const [referenceCopied, setReferenceCopied] = useState(false)

  async function copyReference() {
    try {
      await navigator.clipboard.writeText(`${item.referenceId} ${item.title}`)
      setReferenceCopied(true)
      window.setTimeout(() => setReferenceCopied(false), 1400)
    } catch {
      setReferenceCopied(false)
    }
  }

  return (
    <article className="animation-card" id={item.referenceId}>
      <div className="card-preview-wrap">
        <AnimationStage kind={item.preview} paused={paused} compact />
        <div className="card-float-actions">
          <button
            type="button"
            className={`icon-button${favorite ? ' is-active' : ''}`}
            onClick={onFavorite}
            aria-label={favorite ? 'お気に入りから外す' : 'お気に入りに追加'}
          >
            <Heart size={18} fill={favorite ? 'currentColor' : 'none'} />
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={onPause}
            aria-label={paused ? '再生する' : '一時停止する'}
          >
            {paused ? <Play size={18} /> : <Pause size={18} />}
          </button>
        </div>
      </div>

      <div className="card-content">
        <div className="card-meta-row">
          <button
            type="button"
            className="reference-id"
            onClick={copyReference}
            aria-label={`${item.referenceId} ${item.title}をコピー`}
          >
            {referenceCopied && <Check size={11} />}
            {referenceCopied ? 'コピー済み' : item.referenceId}
          </button>
          <span className="category-label">{item.category}</span>
          <span className={`difficulty difficulty-${item.difficulty}`}>{item.difficulty}</span>
        </div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="tag-list" aria-label="タグ">
          {item.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
        <button type="button" className="card-open-button" onClick={onOpen}>
          <Code2 size={17} />
          コードを見る
          <Maximize2 size={15} />
        </button>
      </div>
    </article>
  )
}
