import type { AnimationItem } from '../types'

export const animations: AnimationItem[] = [
  {
    id: 'bounce-ball',
    referenceId: 'CSS-001',
    title: 'バウンドボール',
    description: '重さを感じる、基本の跳ねる動き。',
    category: '背景・装飾',
    trigger: 'ループ',
    tags: ['ループ', 'transform', 'ボール'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="bounce-ball"></div>`,
    css: `.bounce-ball {
  width: 48px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #ff5b45;
  animation: bounce 0.8s infinite alternate cubic-bezier(.2,.7,.4,1);
}

@keyframes bounce {
  to {
    transform: translateY(-80px) scale(1.04, .96);
  }
}`,
    reducedMotion: `.bounce-ball { animation: none; }`,
  },
  {
    id: 'pulse-ring',
    referenceId: 'CSS-002',
    title: 'パルスリング',
    description: '注目位置を静かに知らせる波紋。',
    category: '注目・バッジ',
    trigger: 'ループ',
    tags: ['ループ', 'scale', '通知'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<span class="pulse-dot"></span>`,
    css: `.pulse-dot {
  position: relative;
  width: 22px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #2563eb;
}

.pulse-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 3px solid #2563eb;
  border-radius: inherit;
  animation: pulse 1.6s infinite ease-out;
}

@keyframes pulse {
  to { transform: scale(3); opacity: 0; }
}`,
    reducedMotion: `.pulse-dot::after { animation: none; }`,
  },
  {
    id: 'orbit-dots',
    referenceId: 'CSS-003',
    title: 'オービットドット',
    description: '3つの点が中心のまわりを巡る。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['ループ', '回転', 'ドット'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="orbit"><i></i><i></i><i></i></div>`,
    css: `.orbit {
  position: relative;
  width: 90px;
  aspect-ratio: 1;
  animation: orbit 1.5s linear infinite;
}

.orbit i {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #7c3aed;
  transform: translateY(-38px);
}

.orbit i:nth-child(2) { transform: rotate(120deg) translateY(-38px); }
.orbit i:nth-child(3) { transform: rotate(240deg) translateY(-38px); }

@keyframes orbit { to { transform: rotate(1turn); } }`,
    reducedMotion: `.orbit { animation: none; }`,
  },
  {
    id: 'floating-card',
    referenceId: 'CSS-004',
    title: 'フローティングカード',
    description: 'カードが呼吸するように浮かぶ。',
    category: '背景・装飾',
    trigger: 'ループ',
    tags: ['ループ', 'カード', '影'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<article class="floating-card">HELLO</article>`,
    css: `.floating-card {
  padding: 28px 38px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 20px 45px #17255426;
  animation: float 2.4s ease-in-out infinite alternate;
}

@keyframes float {
  to { transform: translateY(-16px) rotate(1.5deg); }
}`,
    reducedMotion: `.floating-card { animation: none; }`,
  },
  {
    id: 'typing-text',
    referenceId: 'CSS-005',
    title: 'タイピングテキスト',
    description: '一文字ずつ入力される定番表現。',
    category: '文字・テキスト',
    trigger: 'ループ',
    tags: ['steps', '文字', 'カーソル'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<p class="typing">CSS makes motion.</p>`,
    css: `.typing {
  width: 18ch;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid;
  font: 700 24px/1.4 monospace;
  animation:
    typing 2.4s steps(18) infinite alternate,
    caret .7s steps(1) infinite;
}

@keyframes typing { from { width: 0; } }
@keyframes caret { 50% { border-color: transparent; } }`,
    reducedMotion: `.typing { animation: none; }`,
  },
  {
    id: 'shimmer-text',
    referenceId: 'CSS-006',
    title: 'シマーテキスト',
    description: '光が文字の上を横切る。',
    category: '文字・テキスト',
    trigger: 'ループ',
    tags: ['グラデーション', '文字', 'ループ'],
    difficulty: 'かんたん',
    cost: '注意',
    html: `<strong class="shimmer">SHIMMER</strong>`,
    css: `.shimmer {
  color: transparent;
  background: linear-gradient(90deg, #111 35%, #fff 50%, #111 65%);
  background-size: 250% 100%;
  background-clip: text;
  font-size: 34px;
  animation: shimmer 2s linear infinite;
}

@keyframes shimmer { to { background-position: -250% 0; } }`,
    reducedMotion: `.shimmer { animation: none; background: none; -webkit-text-fill-color: initial; color: #171717; }`,
  },
  {
    id: 'reveal-lines',
    referenceId: 'CSS-007',
    title: 'ラインリビール',
    description: '複数行が時間差で滑り込む。',
    category: '登場・退場',
    trigger: '一度だけ',
    tags: ['delay', '文章', '登場'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="reveal-lines">
  <span>Make it clear.</span>
  <span>Make it move.</span>
  <span>Make it memorable.</span>
</div>`,
    css: `.reveal-lines span {
  display: block;
  opacity: 0;
  transform: translateY(20px);
  animation: reveal .7s both;
}
.reveal-lines span:nth-child(2) { animation-delay: .14s; }
.reveal-lines span:nth-child(3) { animation-delay: .28s; }

@keyframes reveal {
  to { opacity: 1; transform: none; }
}`,
    reducedMotion: `.reveal-lines span { animation: none; opacity: 1; transform: none; }`,
  },
  {
    id: 'flip-card',
    referenceId: 'CSS-008',
    title: 'フリップカード',
    description: '表裏をくるりと切り替える。',
    category: 'ナビゲーション・開閉',
    trigger: 'ループ',
    tags: ['3D', 'カード', 'hover'],
    difficulty: 'しっかり',
    cost: '軽い',
    html: `<div class="flip-card">
  <div class="flip-inner">
    <div class="flip-front">FRONT</div>
    <div class="flip-back">BACK</div>
  </div>
</div>`,
    css: `.flip-card { perspective: 700px; }
.flip-inner {
  width: 150px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  animation: flip 2.8s ease-in-out infinite;
}
.flip-front, .flip-back {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  backface-visibility: hidden;
  border-radius: 18px;
}
.flip-back { transform: rotateY(180deg); }
@keyframes flip { 50%, 100% { transform: rotateY(180deg); } }`,
    reducedMotion: `.flip-inner { animation: none; }`,
    note: '常時ループ再生の実演です。ホバーで切り替える実装にする場合は animation を :hover { transform: rotateY(180deg); } に置き換えてください。',
  },
  {
    id: 'jelly-button',
    referenceId: 'CSS-009',
    title: 'ジェリーボタン',
    description: '押したあと、やわらかく戻るボタン。',
    category: 'ボタン・リンク',
    trigger: 'ループ',
    tags: ['ボタン', 'scale', '反応'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<button class="jelly-button">CLICK</button>`,
    css: `.jelly-button {
  border: 0;
  padding: 14px 28px;
  border-radius: 999px;
  background: #111827;
  color: white;
  font-weight: 800;
  animation: jelly 1.8s infinite;
}

@keyframes jelly {
  30% { transform: scale(1.18, .86); }
  45% { transform: scale(.92, 1.08); }
  60% { transform: scale(1.04, .96); }
  75% { transform: scale(.99, 1.01); }
}`,
    reducedMotion: `.jelly-button { animation: none; }`,
    note: '常時ループ再生の実演です。クリック時のみ動かす場合は animation を :active に付け替えてください。',
  },
  {
    id: 'ripple-button',
    referenceId: 'CSS-010',
    title: 'リップルボタン',
    description: 'クリック位置から波紋が広がる印象。',
    category: 'ボタン・リンク',
    trigger: 'ループ',
    tags: ['ボタン', '波紋', '疑似要素'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<button class="ripple-button">SEND</button>`,
    css: `.ripple-button {
  position: relative;
  overflow: hidden;
  padding: 15px 32px;
  border: 0;
  border-radius: 12px;
  background: #0f766e;
  color: white;
}
.ripple-button::after {
  content: "";
  position: absolute;
  width: 20px;
  aspect-ratio: 1;
  left: 50%; top: 50%;
  border-radius: 50%;
  background: #fff8;
  transform: translate(-50%, -50%) scale(0);
  animation: ripple 1.6s infinite;
}
@keyframes ripple { to { transform: translate(-50%, -50%) scale(8); opacity: 0; } }`,
    reducedMotion: `.ripple-button::after { animation: none; }`,
    note: '常時ループ再生の実演です。クリック時のみ動かす場合は animation を :active に付け替えてください。',
  },
  {
    id: 'loader-bars',
    referenceId: 'CSS-011',
    title: 'ローダーバー',
    description: '高さの違うバーがリズムよく動く。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['ローダー', 'delay', 'バー'],
    difficulty: 'かんたん',
    cost: '注意',
    html: `<div class="loader-bars"><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.loader-bars { display: flex; gap: 7px; align-items: center; height: 70px; }
.loader-bars i {
  width: 8px;
  height: 22px;
  border-radius: 999px;
  background: #f97316;
  animation: bars .8s ease-in-out infinite alternate;
}
.loader-bars i:nth-child(2) { animation-delay: .1s; }
.loader-bars i:nth-child(3) { animation-delay: .2s; }
.loader-bars i:nth-child(4) { animation-delay: .3s; }
.loader-bars i:nth-child(5) { animation-delay: .4s; }
@keyframes bars { to { height: 64px; } }`,
    reducedMotion: `.loader-bars i { animation: none; }`,
  },
  {
    id: 'spinner',
    referenceId: 'CSS-012',
    title: 'スピナー',
    description: '端が追いかける、軽量な読み込み表示。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['回転', 'border', 'ローダー'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="spinner"></div>`,
    css: `.spinner {
  width: 58px;
  aspect-ratio: 1;
  border: 7px solid #dbeafe;
  border-top-color: #2563eb;
  border-radius: 50%;
  animation: spin .8s linear infinite;
}
@keyframes spin { to { transform: rotate(1turn); } }`,
    reducedMotion: `.spinner { animation: none; }`,
  },
  {
    id: 'gradient-wave',
    referenceId: 'CSS-013',
    title: 'グラデーションウェーブ',
    description: '背景色がゆっくり流れ続ける。',
    category: '背景・装飾',
    trigger: 'ループ',
    tags: ['背景', 'グラデーション', 'ループ'],
    difficulty: 'かんたん',
    cost: '注意',
    html: `<div class="gradient-wave"></div>`,
    css: `.gradient-wave {
  width: 180px;
  height: 110px;
  border-radius: 24px;
  background: linear-gradient(120deg, #fb7185, #fbbf24, #34d399, #60a5fa);
  background-size: 300% 300%;
  animation: wave 4s ease infinite;
}
@keyframes wave {
  0%, 100% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
}`,
    reducedMotion: `.gradient-wave { animation: none; }`,
  },
  {
    id: 'confetti',
    referenceId: 'CSS-014',
    title: 'コンフェッティ',
    description: '小さな紙片が降り注ぐ祝福表現。',
    category: 'フィードバック',
    trigger: '一度だけ',
    tags: ['紙吹雪', 'delay', '祝福'],
    difficulty: 'しっかり',
    cost: '軽い',
    html: `<div class="confetti"><i></i><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.confetti { position: relative; width: 180px; height: 120px; overflow: hidden; }
.confetti i {
  position: absolute;
  top: -20px;
  width: 10px;
  height: 18px;
  background: #f43f5e;
  animation: fall 2s linear infinite;
}
.confetti i:nth-child(2n) { background: #0ea5e9; animation-delay: -.5s; }
.confetti i:nth-child(3n) { background: #facc15; animation-delay: -1s; }
@keyframes fall {
  to { transform: translate(30px, 160px) rotate(500deg); }
}`,
    reducedMotion: `.confetti i { animation: none; }`,
  },
  {
    id: 'notification-bell',
    referenceId: 'CSS-015',
    title: '通知ベル',
    description: '新着を知らせる小さな揺れ。',
    category: '注目・バッジ',
    trigger: 'ループ',
    tags: ['通知', '回転', 'アイコン'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="bell">🔔<b>3</b></div>`,
    css: `.bell {
  position: relative;
  font-size: 52px;
  transform-origin: 50% 10%;
  animation: ring 1.8s ease-in-out infinite;
}
.bell b {
  position: absolute;
  right: -5px; top: -2px;
  width: 25px; height: 25px;
  display: grid; place-items: center;
  border-radius: 50%;
  background: #ef4444; color: white;
  font: 700 12px sans-serif;
}
@keyframes ring { 10%, 30% { transform: rotate(14deg); } 20%, 40% { transform: rotate(-14deg); } }`,
    reducedMotion: `.bell { animation: none; }`,
  },
  {
    id: 'skeleton',
    referenceId: 'CSS-016',
    title: 'スケルトンローダー',
    description: 'コンテンツ読み込み前のプレースホルダー。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['UI', 'グラデーション', '読み込み'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<div class="skeleton"><i></i><span></span><span></span></div>`,
    css: `.skeleton > * {
  display: block;
  border-radius: 10px;
  background: linear-gradient(90deg, #e5e7eb 25%, #f8fafc 50%, #e5e7eb 75%);
  background-size: 200% 100%;
  animation: skeleton 1.5s linear infinite;
}
.skeleton i { width: 54px; height: 54px; border-radius: 50%; }
.skeleton span { width: 150px; height: 13px; margin-top: 12px; }
@keyframes skeleton { to { background-position: -200% 0; } }`,
    reducedMotion: `.skeleton > * { animation: none; }`,
  },
  {
    id: 'marquee',
    referenceId: 'CSS-017',
    title: '無限マーキー',
    description: '文字列が途切れず横へ流れる。',
    category: '背景・装飾',
    trigger: 'ループ',
    tags: ['文字', 'ループ', '横移動'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="marquee"><div>CSS MOTION · CSS MOTION · CSS MOTION ·</div></div>`,
    css: `.marquee {
  width: 230px;
  overflow: hidden;
  white-space: nowrap;
  border-block: 2px solid;
  padding: 12px 0;
}
.marquee div {
  width: max-content;
  font-weight: 900;
  animation: marquee 5s linear infinite;
}
@keyframes marquee { to { transform: translateX(-33.33%); } }`,
    reducedMotion: `.marquee div { animation: none; }`,
  },
  {
    id: 'blob',
    referenceId: 'CSS-018',
    title: 'モーフィングブロブ',
    description: '輪郭がゆっくり変形する有機的な形。',
    category: '背景・装飾',
    trigger: 'ループ',
    tags: ['border-radius', '変形', '背景'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<div class="blob"></div>`,
    css: `.blob {
  width: 125px;
  aspect-ratio: 1;
  background: linear-gradient(135deg, #a78bfa, #ec4899);
  animation: blob 4s ease-in-out infinite alternate;
}
@keyframes blob {
  0% { border-radius: 42% 58% 65% 35% / 35% 45% 55% 65%; }
  100% { border-radius: 60% 40% 36% 64% / 62% 34% 66% 38%; transform: rotate(18deg); }
}`,
    reducedMotion: `.blob { animation: none; border-radius: 42% 58% 65% 35% / 35% 45% 55% 65%; }`,
  },
  {
    id: 'checkbox',
    referenceId: 'CSS-019',
    title: 'チェック完了',
    description: '線が描かれて完了を伝える。',
    category: 'フィードバック',
    trigger: '一度だけ',
    tags: ['SVG風', '完了', '線'],
    difficulty: 'しっかり',
    cost: '軽い',
    html: `<div class="checkmark"><span></span></div>`,
    css: `.checkmark {
  width: 72px;
  aspect-ratio: 1;
  border: 5px solid #16a34a;
  border-radius: 50%;
  display: grid;
  place-items: center;
  animation: check-pop .5s both;
}
.checkmark span {
  width: 30px;
  height: 15px;
  border-left: 5px solid #16a34a;
  border-bottom: 5px solid #16a34a;
  transform: rotate(-45deg) scale(0);
  animation: check-draw .45s .25s both;
}
@keyframes check-pop { from { transform: scale(0); } }
@keyframes check-draw { to { transform: rotate(-45deg) scale(1); } }`,
    reducedMotion: `.checkmark { animation: none; } .checkmark span { animation: none; transform: rotate(-45deg) scale(1); }`,
  },
  {
    id: 'heartbeat',
    referenceId: 'CSS-020',
    title: 'ハートビート',
    description: '二拍で鼓動するような強調。',
    category: '注目・バッジ',
    trigger: 'ループ',
    tags: ['scale', 'アイコン', 'ループ'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="heartbeat">♥</div>`,
    css: `.heartbeat {
  color: #e11d48;
  font-size: 86px;
  line-height: 1;
  animation: heartbeat 1.4s ease-in-out infinite;
}
@keyframes heartbeat {
  14%, 42% { transform: scale(1.22); }
  28%, 70% { transform: scale(1); }
}`,
    reducedMotion: `.heartbeat { animation: none; }`,
  },

  // 登場・退場
  {
    id: 'fade-in',
    referenceId: 'CSS-021',
    title: 'フェードイン',
    description: '最も基本的な、透明度だけで現れる登場。',
    category: '登場・退場',
    trigger: '一度だけ',
    tags: ['opacity', 'フェード', '登場'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="fade-in-box">Hello</div>`,
    css: `.fade-in-box {
  padding: 20px 28px;
  border-radius: 14px;
  background: #171717;
  color: white;
  font-weight: 800;
  opacity: 0;
  animation: fade-in .6s ease both;
}
@keyframes fade-in { to { opacity: 1; } }`,
    reducedMotion: `.fade-in-box { animation: none; opacity: 1; }`,
  },
  {
    id: 'slide-up-in',
    referenceId: 'CSS-022',
    title: 'スライドアップイン',
    description: '下からわずかに持ち上がって現れる登場。',
    category: '登場・退場',
    trigger: '一度だけ',
    tags: ['transform', 'スライド', '登場'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="slide-up-in">Welcome</div>`,
    css: `.slide-up-in {
  padding: 20px 28px;
  border-radius: 14px;
  background: #2563eb;
  color: white;
  font-weight: 800;
  opacity: 0;
  transform: translateY(28px);
  animation: slide-up-in .6s cubic-bezier(.2,.8,.2,1) both;
}
@keyframes slide-up-in { to { opacity: 1; transform: none; } }`,
    reducedMotion: `.slide-up-in { animation: none; opacity: 1; transform: none; }`,
  },
  {
    id: 'slide-in-left',
    referenceId: 'CSS-023',
    title: '左からスライドイン',
    description: '横方向から滑り込むメニューやパネルの登場。',
    category: '登場・退場',
    trigger: '一度だけ',
    tags: ['transform', 'スライド', '横'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="slide-in-left">MENU</div>`,
    css: `.slide-in-left {
  padding: 18px 30px;
  border-radius: 14px;
  background: #111827;
  color: white;
  font-weight: 800;
  opacity: 0;
  transform: translateX(-40px);
  animation: slide-in-left .55s cubic-bezier(.2,.8,.2,1) both;
}
@keyframes slide-in-left { to { opacity: 1; transform: none; } }`,
    reducedMotion: `.slide-in-left { animation: none; opacity: 1; transform: none; }`,
  },
  {
    id: 'scale-pop-in',
    referenceId: 'CSS-024',
    title: 'スケールポップイン',
    description: '弾むように拡大して現れる、印象を強める登場。',
    category: '登場・退場',
    trigger: '一度だけ',
    tags: ['scale', 'ポップ', '登場'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="scale-pop-in">POP</div>`,
    css: `.scale-pop-in {
  width: 92px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #f97316;
  color: white;
  font-weight: 900;
  opacity: 0;
  transform: scale(.4);
  animation: scale-pop-in .5s cubic-bezier(.34,1.56,.64,1) both;
}
@keyframes scale-pop-in { to { opacity: 1; transform: scale(1); } }`,
    reducedMotion: `.scale-pop-in { animation: none; opacity: 1; transform: scale(1); }`,
  },
  {
    id: 'blur-in',
    referenceId: 'CSS-025',
    title: 'ブラーイン',
    description: 'ピントが合うように、ぼかしから鮮明になる登場。',
    category: '登場・退場',
    trigger: '一度だけ',
    tags: ['filter', 'ブラー', '登場'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<p class="blur-in">Sharp focus</p>`,
    css: `.blur-in {
  margin: 0;
  font: 800 24px/1.3 sans-serif;
  opacity: 0;
  filter: blur(14px);
  animation: blur-in .7s ease both;
}
@keyframes blur-in { to { opacity: 1; filter: blur(0); } }`,
    reducedMotion: `.blur-in { animation: none; opacity: 1; filter: none; }`,
  },
  {
    id: 'clip-wipe-in',
    referenceId: 'CSS-026',
    title: 'ワイプ登場',
    description: 'clip-pathで左から右へ塗りが広がるように現れる。',
    category: '登場・退場',
    trigger: '一度だけ',
    tags: ['clip-path', 'ワイプ', '登場'],
    difficulty: 'しっかり',
    cost: '注意',
    html: `<div class="clip-wipe-in">REVEAL</div>`,
    css: `.clip-wipe-in {
  padding: 20px 30px;
  border-radius: 14px;
  background: linear-gradient(120deg, #7c3aed, #ec4899);
  color: white;
  font-weight: 900;
  clip-path: inset(0 100% 0 0);
  animation: clip-wipe-in .7s ease both;
}
@keyframes clip-wipe-in { to { clip-path: inset(0 0 0 0); } }`,
    reducedMotion: `.clip-wipe-in { animation: none; clip-path: none; }`,
    browserNote: 'clip-pathの補間はモダンブラウザーで広く対応済みですが、古いSafariでは挙動差が出る場合があります。',
  },
  {
    id: 'stagger-grid-in',
    referenceId: 'CSS-027',
    title: 'グリッド時間差登場',
    description: '格子状に並んだ要素が順番に現れる。',
    category: '登場・退場',
    trigger: '一度だけ',
    tags: ['delay', 'グリッド', '登場'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="stagger-grid"><i></i><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.stagger-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.stagger-grid i {
  width: 34px;
  aspect-ratio: 1;
  border-radius: 8px;
  background: #16a34a;
  opacity: 0;
  transform: scale(.5);
  animation: stagger-in .5s ease both;
}
.stagger-grid i:nth-child(1) { animation-delay: 0s; }
.stagger-grid i:nth-child(2) { animation-delay: .08s; }
.stagger-grid i:nth-child(3) { animation-delay: .16s; }
.stagger-grid i:nth-child(4) { animation-delay: .24s; }
.stagger-grid i:nth-child(5) { animation-delay: .32s; }
.stagger-grid i:nth-child(6) { animation-delay: .4s; }
@keyframes stagger-in { to { opacity: 1; transform: scale(1); } }`,
    reducedMotion: `.stagger-grid i { animation: none; opacity: 1; transform: scale(1); }`,
  },
  {
    id: 'modal-pop-in',
    referenceId: 'CSS-028',
    title: 'モーダル出現',
    description: '背景の暗転とカードの拡大が時間差で重なる登場。',
    category: '登場・退場',
    trigger: '一度だけ',
    tags: ['モーダル', 'scale', '登場'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="modal-pop-demo">
  <div class="modal-pop-backdrop"></div>
  <div class="modal-pop-card">保存しました</div>
</div>`,
    css: `.modal-pop-demo { position: relative; width: 220px; height: 140px; display: grid; place-items: center; }
.modal-pop-backdrop {
  position: absolute;
  inset: 0;
  background: rgb(0 0 0 / 45%);
  opacity: 0;
  animation: modal-backdrop-in .4s ease both;
}
.modal-pop-card {
  position: relative;
  padding: 18px 26px;
  border-radius: 16px;
  background: white;
  color: #171717;
  font-weight: 800;
  box-shadow: 0 20px 45px rgb(0 0 0 / 30%);
  opacity: 0;
  transform: scale(.85) translateY(10px);
  animation: modal-card-in .4s .1s cubic-bezier(.2,.8,.2,1) both;
}
@keyframes modal-backdrop-in { to { opacity: 1; } }
@keyframes modal-card-in { to { opacity: 1; transform: none; } }`,
    reducedMotion: `.modal-pop-backdrop, .modal-pop-card { animation: none; opacity: 1; transform: none; }`,
  },
  {
    id: 'toast-in-out',
    referenceId: 'CSS-029',
    title: 'トースト出現と自動退場',
    description: '下から現れて数秒とどまり、上へ抜けて消える通知。',
    category: '登場・退場',
    trigger: 'ループ',
    tags: ['トースト', 'delay', '通知'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="toast-demo">保存が完了しました</div>`,
    css: `.toast-demo {
  padding: 14px 22px;
  border-radius: 999px;
  background: #111827;
  color: white;
  font-weight: 700;
  font-size: 14px;
  animation: toast-life 2.8s cubic-bezier(.2,.8,.2,1) infinite;
}
@keyframes toast-life {
  0% { opacity: 0; transform: translateY(16px); }
  12%, 78% { opacity: 1; transform: none; }
  100% { opacity: 0; transform: translateY(-10px); }
}`,
    reducedMotion: `.toast-demo { animation: none; opacity: 1; transform: none; }`,
    note: '実際の運用では表示後に自動で消し、再表示はJSでクラスを付け替えて行います。ここでは動きを常時確認できるようループ再生しています。',
  },
  {
    id: 'fade-out-exit',
    referenceId: 'CSS-030',
    title: 'フェードアウト退場',
    description: '上へ抜けながら薄れて消える、退場側の基本形。',
    category: '登場・退場',
    trigger: 'ループ',
    tags: ['opacity', 'フェード', '退場'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="fade-out-loop">閉じます</div>`,
    css: `.fade-out-loop {
  padding: 18px 26px;
  border-radius: 14px;
  background: #ef4444;
  color: white;
  font-weight: 800;
  animation: fade-out-loop 2.4s ease-in-out infinite alternate;
}
@keyframes fade-out-loop { to { opacity: 0; transform: translateY(-14px); } }`,
    reducedMotion: `.fade-out-loop { animation: none; }`,
  },
  {
    id: 'swipe-dismiss',
    referenceId: 'CSS-031',
    title: 'スワイプ退場',
    description: '横へ払われるように回転しながら消える削除表現。',
    category: '登場・退場',
    trigger: 'ループ',
    tags: ['transform', 'スワイプ', '退場'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="swipe-dismiss">← スワイプで削除</div>`,
    css: `.swipe-dismiss {
  padding: 16px 24px;
  border-radius: 12px;
  background: #0f172a;
  color: white;
  font-weight: 700;
  font-size: 13px;
  animation: swipe-dismiss 2.6s ease-in-out infinite alternate;
}
@keyframes swipe-dismiss { to { opacity: 0; transform: translateX(90px) rotate(4deg); } }`,
    reducedMotion: `.swipe-dismiss { animation: none; }`,
  },
]
