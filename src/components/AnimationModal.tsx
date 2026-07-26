import { useEffect, useState } from 'react'
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Code2,
  Heart,
  Hash,
  Pause,
  Play,
  RefreshCw,
  X,
} from 'lucide-react'
import { getUsageGuidance } from '../data/usageGuidance'
import type { AnimationItem } from '../types'
import { AnimationStage } from './AnimationStage'

interface AnimationModalProps {
  item: AnimationItem
  favorite: boolean
  tourMode: boolean
  onFavorite: () => void
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
  onToggleTour: () => void
}

type CodeTab = 'html' | 'css'
type Theme = 'paper' | 'dark' | 'blue' | 'pink'

const themeLabels: Record<Theme, string> = {
  paper: '生成り',
  dark: 'ダーク',
  blue: 'ブルー',
  pink: 'ピンク',
}

function isWideWorkspace() {
  return window.matchMedia('(min-width: 1200px)').matches
}

export function AnimationModal({
  item,
  favorite,
  tourMode,
  onFavorite,
  onClose,
  onPrevious,
  onNext,
  onToggleTour,
}: AnimationModalProps) {
  const [paused, setPaused] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [theme, setTheme] = useState<Theme>('paper')
  const [tab, setTab] = useState<CodeTab>('css')
  const [codeOpen, setCodeOpen] = useState(isWideWorkspace)
  const [copied, setCopied] = useState(false)
  const [referenceCopied, setReferenceCopied] = useState(false)
  const [replayKey, setReplayKey] = useState(0)
  const { useCases, avoidCases } = getUsageGuidance(item)

  useEffect(() => {
    setPaused(false)
    setTab('css')
    setCodeOpen(isWideWorkspace())
    setCopied(false)
    setReferenceCopied(false)
    setReplayKey((value) => value + 1)
  }, [item.id])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      const target = event.target as HTMLElement
      const isFormControl = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName)
      if (isFormControl) return

      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
      if (event.key === ' ') {
        event.preventDefault()
        setPaused((value) => !value)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onNext, onPrevious])

  const code = tab === 'html' ? item.html : item.css

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  async function copyReference() {
    const reference = `${item.referenceId} ${item.title}`
    try {
      await navigator.clipboard.writeText(reference)
      setReferenceCopied(true)
      window.setTimeout(() => setReferenceCopied(false), 1600)
    } catch {
      setReferenceCopied(false)
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className={`detail-modal editorial-workspace${codeOpen ? ' is-code-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="modal-header workspace-header">
          <div className="workspace-heading">
            <div className="modal-title-meta">
              <button type="button" className="reference-copy" onClick={copyReference}>
                {referenceCopied ? <Check size={14} /> : <Hash size={14} />}
                {referenceCopied ? '参照をコピー済み' : item.referenceId}
              </button>
              <span className="workspace-category">{item.category}</span>
              <span className="workspace-trigger">{item.trigger}</span>
            </div>
            <h2 id="detail-title">{item.title}</h2>
          </div>
          <div className="modal-header-actions">
            <button
              type="button"
              className={`text-icon-button${tourMode ? ' is-active' : ''}`}
              onClick={onToggleTour}
            >
              {tourMode ? <Pause size={17} /> : <Play size={17} />}
              {tourMode ? '眺める停止' : '眺める'}
            </button>
            <button
              type="button"
              className={`icon-button modal-favorite${favorite ? ' is-active' : ''}`}
              onClick={onFavorite}
              aria-label={favorite ? 'お気に入りから外す' : 'お気に入りに追加'}
            >
              <Heart size={19} fill={favorite ? 'currentColor' : 'none'} />
            </button>
            <button type="button" className="icon-button" onClick={onClose} aria-label="閉じる">
              <X size={21} />
            </button>
          </div>
        </header>

        <div className="detail-layout workspace-layout">
          <div className="detail-preview-column workspace-main">
            <div className="editorial-intro">
              <span>BEST FOR</span>
              <p>{useCases[0]}</p>
            </div>

            <AnimationStage
              item={item}
              paused={paused}
              speed={speed}
              theme={theme}
              replayKey={replayKey}
            />

            <div className="preview-controls workspace-controls">
              <div className="playback-controls">
                <button
                  type="button"
                  className="control-button"
                  onClick={() => setPaused((value) => !value)}
                >
                  {paused ? <Play size={17} /> : <Pause size={17} />}
                  {paused ? '再生' : '停止'}
                </button>
                <button
                  type="button"
                  className="control-button"
                  onClick={() => setReplayKey((value) => value + 1)}
                >
                  <RefreshCw size={17} />
                  もう一度
                </button>
              </div>
              <label className="speed-control">
                <span>速度 {speed.toFixed(1)}×</span>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={speed}
                  onChange={(event) => setSpeed(Number(event.target.value))}
                />
              </label>
              <div className="theme-picker" aria-label="プレビュー背景を変更">
                <span>背景</span>
                {(['paper', 'dark', 'blue', 'pink'] as Theme[]).map((value) => (
                  <button
                    type="button"
                    key={value}
                    className={`theme-swatch swatch-${value}${theme === value ? ' is-active' : ''}`}
                    onClick={() => setTheme(value)}
                    aria-label={`${themeLabels[value]}背景`}
                    title={`${themeLabels[value]}背景`}
                  />
                ))}
              </div>
            </div>

            <div className="detail-description editorial-details">
              <div className="editorial-summary">
                <span>ABOUT THIS MOTION</span>
                <p>{item.description}</p>
                <div className="tag-list" aria-label="タグ">
                  {item.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              </div>

              <div className="usage-guidance">
                <section className="usage-block usage-fit" aria-labelledby={`${item.id}-fit-title`}>
                  <h3 id={`${item.id}-fit-title`}><span aria-hidden="true">◎</span>向いている場面</h3>
                  <ul>
                    {useCases.map((useCase) => (
                      <li key={useCase}>{useCase}</li>
                    ))}
                  </ul>
                </section>
                <section className="usage-block usage-avoid" aria-labelledby={`${item.id}-avoid-title`}>
                  <h3 id={`${item.id}-avoid-title`}><span aria-hidden="true">△</span>向いていない場面</h3>
                  <ul>
                    {avoidCases.map((avoidCase) => (
                      <li key={avoidCase}>{avoidCase}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <aside className="motion-accessibility-note" aria-label="動きを減らす設定について">
                <strong>動きを減らす設定</strong>
                <p>
                  動きを停止・簡略化しても、状態や情報が欠けない代替表示を用意してください。
                  この図鑑では各サンプルに対応方針を設定しています。
                </p>
              </aside>

              {(item.note || item.browserNote) && (
                <div className="implementation-notes">
                  {item.note && <p className="detail-note">{item.note}</p>}
                  {item.browserNote && <p className="detail-note detail-browser-note">{item.browserNote}</p>}
                </div>
              )}

              <button
                type="button"
                className="code-panel-toggle"
                onClick={() => setCodeOpen((value) => !value)}
                aria-expanded={codeOpen}
                aria-controls="animation-code-panel"
              >
                <Code2 size={18} />
                {codeOpen ? 'コードを閉じる' : 'コードを見る'}
              </button>
            </div>
          </div>

          {codeOpen && (
            <aside className="code-panel workspace-code-panel" id="animation-code-panel">
              <div className="code-toolbar">
                <div className="code-tabs" role="tablist" aria-label="コードの種類">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={tab === 'css'}
                    className={tab === 'css' ? 'is-active' : ''}
                    onClick={() => setTab('css')}
                  >
                    CSS
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={tab === 'html'}
                    className={tab === 'html' ? 'is-active' : ''}
                    onClick={() => setTab('html')}
                  >
                    HTML
                  </button>
                </div>
                <div className="code-toolbar-actions">
                  <button type="button" className="copy-button" onClick={copyCode}>
                    {copied ? <Check size={17} /> : <Clipboard size={17} />}
                    {copied ? 'コピー済み' : 'コピー'}
                  </button>
                  <button
                    type="button"
                    className="code-close-button"
                    onClick={() => setCodeOpen(false)}
                    aria-label="コードパネルを閉じる"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
              <pre>
                <code>{code}</code>
              </pre>
            </aside>
          )}
        </div>

        <footer className="modal-footer workspace-footer">
          <button type="button" className="nav-button" onClick={onPrevious}>
            <ChevronLeft size={18} />
            前へ
          </button>
          <span>← → で移動　Spaceで再生・停止</span>
          <button type="button" className="nav-button" onClick={onNext}>
            次へ
            <ChevronRight size={18} />
          </button>
        </footer>
      </section>
    </div>
  )
}
