import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  ArrowDownAZ,
  Dice5,
  Eye,
  Heart,
  Pause,
  Search,
  Sparkles,
  X,
} from 'lucide-react'
import { AnimationCard } from './components/AnimationCard'
import { AnimationModal } from './components/AnimationModal'
import { animations } from './data/animations'
import type { AnimationCategory, Difficulty, Trigger } from './types'

const FAVORITES_KEY = 'css-motion-favorites'
const categories: Array<'すべて' | AnimationCategory> = [
  'すべて',
  '登場・退場',
  'ローディング・進捗',
  'フィードバック',
  'ボタン・リンク',
  'フォーム入力',
  'ナビゲーション・開閉',
  '文字・テキスト',
  '注目・バッジ',
  '背景・装飾',
  'スクロール連動',
]

const triggers: Array<'すべて' | Trigger> = [
  'すべて',
  'ループ',
  '一度だけ',
  'ホバー',
  '状態変化',
  'スクロール',
]

const difficultyRank: Record<Difficulty, number> = {
  かんたん: 0,
  ふつう: 1,
  しっかり: 2,
}

type SortMode = 'おすすめ' | '名前順' | '難易度順'

export default function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('すべて')
  const [trigger, setTrigger] = useState<(typeof triggers)[number]>('すべて')
  const [sortMode, setSortMode] = useState<SortMode>('おすすめ')
  const [favoriteOnly, setFavoriteOnly] = useState(false)
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]') as string[])
    } catch {
      return new Set()
    }
  })
  const [pausedIds, setPausedIds] = useState<Set<string>>(new Set())
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [tourMode, setTourMode] = useState(false)

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]))
  }, [favorites])

  useEffect(() => {
    const syncFromHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1))
      if (!hash || hash === 'top') {
        setSelectedId(null)
        return
      }
      const matched = animations.find(
        (item) => item.referenceId.toLowerCase() === hash.toLowerCase() || item.id === hash,
      )
      if (matched) setSelectedId(matched.id)
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  useEffect(() => {
    if (!selectedId) return
    const item = animations.find((animation) => animation.id === selectedId)
    if (!item) return
    const nextHash = `#${item.referenceId}`
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}${nextHash}`)
    }
  }, [selectedId])

  const visibleAnimations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const filtered = animations.filter((item) => {
      const matchesCategory = category === 'すべて' || item.category === category
      const matchesTrigger = trigger === 'すべて' || item.trigger === trigger
      const matchesFavorite = !favoriteOnly || favorites.has(item.id)
      const searchableText = [
        item.referenceId,
        item.title,
        item.description,
        item.category,
        item.trigger,
        item.difficulty,
        ...item.tags,
      ]
        .join(' ')
        .toLowerCase()
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery)
      return matchesCategory && matchesTrigger && matchesFavorite && matchesQuery
    })

    if (sortMode === '名前順') {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title, 'ja'))
    }
    if (sortMode === '難易度順') {
      return [...filtered].sort(
        (a, b) => difficultyRank[a.difficulty] - difficultyRank[b.difficulty],
      )
    }
    return filtered
  }, [category, trigger, favoriteOnly, favorites, query, sortMode])

  const selectedItem = useMemo(
    () => animations.find((item) => item.id === selectedId) ?? null,
    [selectedId],
  )

  const modalSequence = visibleAnimations.length > 0 ? visibleAnimations : animations

  const selectRelative = useCallback(
    (offset: number) => {
      if (!selectedId) return
      const currentIndex = modalSequence.findIndex((item) => item.id === selectedId)
      const safeIndex = currentIndex === -1 ? 0 : currentIndex
      const nextIndex = (safeIndex + offset + modalSequence.length) % modalSequence.length
      setSelectedId(modalSequence[nextIndex].id)
    },
    [modalSequence, selectedId],
  )

  const openRandom = useCallback(() => {
    const pool = visibleAnimations.length > 0 ? visibleAnimations : animations
    const candidates = pool.length > 1 ? pool.filter((item) => item.id !== selectedId) : pool
    const item = candidates[Math.floor(Math.random() * candidates.length)]
    setSelectedId(item.id)
  }, [selectedId, visibleAnimations])

  useEffect(() => {
    if (!tourMode) return
    const timer = window.setInterval(() => selectRelative(1), 4300)
    return () => window.clearInterval(timer)
  }, [selectRelative, tourMode])

  function toggleFavorite(id: string) {
    setFavorites((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function togglePaused(id: string) {
    setPausedIds((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function startTour() {
    if (!selectedId) openRandom()
    setTourMode(true)
  }

  function closeModal() {
    setSelectedId(null)
    setTourMode(false)
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
  }

  function clearFilters() {
    setQuery('')
    setCategory('すべて')
    setTrigger('すべて')
    setFavoriteOnly(false)
    setSortMode('おすすめ')
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CSSアニメーション図鑑 トップへ">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            <strong>CSS MOTION</strong>
            <small>ANIMATION LIBRARY</small>
          </span>
        </a>
        <nav className="header-actions" aria-label="主要メニュー">
          <button type="button" className="header-link" onClick={startTour}>
            <Eye size={18} />
            眺める
          </button>
          <button
            type="button"
            className={`header-link${favoriteOnly ? ' is-active' : ''}`}
            onClick={() => setFavoriteOnly((value) => !value)}
          >
            <Heart size={18} fill={favoriteOnly ? 'currentColor' : 'none'} />
            お気に入り
            {favorites.size > 0 && <span>{favorites.size}</span>}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15} /> 見て、試して、持ち帰る。</span>
            <h1>
              CSSアニメーションを、
              <em>動く図鑑</em>に。
            </h1>
            <p>
              気になる動きを探して、速度や背景を試して、そのままコードをコピー。
              目的がなくても、ただ眺めて楽しめるコレクションです。
            </p>
            <div className="hero-buttons">
              <button type="button" className="primary-button" onClick={openRandom}>
                <Dice5 size={19} />
                ランダムで見る
              </button>
              <button type="button" className="secondary-button" onClick={startTour}>
                <Eye size={19} />
                自動で眺める
              </button>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-orbit hero-orbit-one"><i /></div>
            <div className="hero-orbit hero-orbit-two"><i /></div>
            <div className="hero-orbit hero-orbit-three"><i /></div>
            <div className="hero-center">CSS</div>
            <span className="hero-star star-one">✦</span>
            <span className="hero-star star-two">✦</span>
          </div>
        </section>

        <section className="library-section" aria-labelledby="library-title">
          <div className="library-heading">
            <div>
              <span className="section-number">01 / LIBRARY</span>
              <h2 id="library-title">アニメーション一覧</h2>
            </div>
            <p>
              <strong>{visibleAnimations.length}</strong> / {animations.length}件を表示
            </p>
          </div>

          <div className="filter-panel">
            <label className="search-box">
              <Search size={20} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="ID・名前・タグ・用途で検索"
                aria-label="アニメーションを検索"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} aria-label="検索語を消す">
                  <X size={17} />
                </button>
              )}
            </label>

            <div className="filter-toolbar">
              <div className="category-chips" aria-label="カテゴリーで絞り込む">
                {categories.map((value) => (
                  <button
                    type="button"
                    key={value}
                    className={category === value ? 'is-active' : ''}
                    onClick={() => setCategory(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
              <label className="sort-select">
                <ArrowDownAZ size={17} />
                <select
                  value={sortMode}
                  onChange={(event) => setSortMode(event.target.value as SortMode)}
                  aria-label="並び順"
                >
                  <option>おすすめ</option>
                  <option>名前順</option>
                  <option>難易度順</option>
                </select>
              </label>
            </div>

            <div className="trigger-chips" aria-label="トリガーで絞り込む">
              {triggers.map((value) => (
                <button
                  type="button"
                  key={value}
                  className={trigger === value ? 'is-active' : ''}
                  onClick={() => setTrigger(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {visibleAnimations.length > 0 ? (
            <div className="animation-grid">
              {visibleAnimations.map((item) => (
                <AnimationCard
                  key={item.id}
                  item={item}
                  favorite={favorites.has(item.id)}
                  paused={pausedIds.has(item.id)}
                  onFavorite={() => toggleFavorite(item.id)}
                  onPause={() => togglePaused(item.id)}
                  onOpen={() => setSelectedId(item.id)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-shape" aria-hidden="true" />
              <h3>該当するアニメーションがありません</h3>
              <p>検索語やカテゴリーを変えると、別の動きが見つかります。</p>
              <button type="button" className="secondary-button" onClick={clearFilters}>
                条件をリセット
              </button>
            </div>
          )}
        </section>

        <section className="guide-section">
          <span className="section-number">02 / HOW TO USE</span>
          <div className="guide-grid">
            <article>
              <strong>01</strong>
              <h2>見つける</h2>
              <p>検索、カテゴリー、難易度から使いたい動きを絞り込みます。</p>
            </article>
            <article>
              <strong>02</strong>
              <h2>試す</h2>
              <p>速度、背景、再生状態を変えて実際の見え方を確認します。</p>
            </article>
            <article>
              <strong>03</strong>
              <h2>使う</h2>
              <p>HTMLとCSSをコピーし、数値や色を自分の画面に合わせます。</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="brand footer-brand">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><strong>CSS MOTION</strong><small>ANIMATION LIBRARY</small></span>
        </div>
        <p>CSSだけで生まれる動きを、見つけやすく、使いやすく。</p>
      </footer>

      {selectedItem && (
        <AnimationModal
          item={selectedItem}
          favorite={favorites.has(selectedItem.id)}
          tourMode={tourMode}
          onFavorite={() => toggleFavorite(selectedItem.id)}
          onClose={closeModal}
          onPrevious={() => selectRelative(-1)}
          onNext={() => selectRelative(1)}
          onToggleTour={() => setTourMode((value) => !value)}
        />
      )}

      {tourMode && selectedItem && (
        <div className="tour-indicator">
          <span />
          自動で切り替え中
          <button type="button" onClick={() => setTourMode(false)} aria-label="自動切り替えを停止">
            <Pause size={15} />
          </button>
        </div>
      )}
    </div>
  )
}
