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
    description: 'ホバーすると、表裏をくるりと切り替える。',
    category: 'ナビゲーション・開閉',
    trigger: 'ホバー',
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
  transition: transform .6s ease;
}
.flip-card:hover .flip-inner { transform: rotateY(180deg); }
.flip-front, .flip-back {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  backface-visibility: hidden;
  border-radius: 18px;
}
.flip-back { transform: rotateY(180deg); }`,
    reducedMotion: `.flip-inner { transition: none; }`,
    note: 'マウスをホバーすると裏面に切り替わります。',
  },
  {
    id: 'jelly-button',
    referenceId: 'CSS-009',
    title: 'ジェリーボタン',
    description: '押している間だけ、やわらかく弾むボタン。',
    category: 'ボタン・リンク',
    trigger: '状態変化',
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
}
.jelly-button:active {
  animation: jelly .6s;
}

@keyframes jelly {
  30% { transform: scale(1.18, .86); }
  45% { transform: scale(.92, 1.08); }
  60% { transform: scale(1.04, .96); }
  75% { transform: scale(.99, 1.01); }
}`,
    reducedMotion: `.jelly-button:active { animation: none; }`,
    note: 'カードやプレビューではマウスを押し続けている間だけ動きます。クリックして確認してください。',
  },
  {
    id: 'ripple-button',
    referenceId: 'CSS-010',
    title: 'リップルボタン',
    description: '押している間、中心から波紋が広がるボタン。',
    category: 'ボタン・リンク',
    trigger: '状態変化',
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
}
.ripple-button:active::after {
  animation: ripple .6s ease-out;
}
@keyframes ripple { to { transform: translate(-50%, -50%) scale(8); opacity: 0; } }`,
    reducedMotion: `.ripple-button:active::after { animation: none; }`,
    note: 'カードやプレビューではマウスを押し続けている間だけ動きます。クリックして確認してください。',
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

  // ローディング・進捗
  {
    id: 'dot-pulse',
    referenceId: 'CSS-032',
    title: '3点ドット',
    description: '3つの点が順番に膨らむ、最小構成の読み込み表示。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['ドット', 'ローダー', 'ループ'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="dot-pulse"><i></i><i></i><i></i></div>`,
    css: `.dot-pulse { display: flex; gap: 8px; }
.dot-pulse i {
  width: 12px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #2563eb;
  animation: dot-pulse 1.2s ease-in-out infinite;
}
.dot-pulse i:nth-child(2) { animation-delay: .15s; }
.dot-pulse i:nth-child(3) { animation-delay: .3s; }
@keyframes dot-pulse {
  0%, 80%, 100% { transform: scale(.6); opacity: .4; }
  40% { transform: scale(1); opacity: 1; }
}`,
    reducedMotion: `.dot-pulse i { animation: none; opacity: 1; transform: scale(1); }`,
  },
  {
    id: 'progress-indeterminate',
    referenceId: 'CSS-033',
    title: '進捗バー(不定)',
    description: '完了時間が読めない処理向けの、流れ続けるバー。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['進捗', 'バー', 'ループ'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="progress-indeterminate"><span></span></div>`,
    css: `.progress-indeterminate {
  width: 220px;
  height: 10px;
  border-radius: 999px;
  background: #e5e7eb;
  overflow: hidden;
}
.progress-indeterminate span {
  display: block;
  width: 40%;
  height: 100%;
  border-radius: 999px;
  background: #2563eb;
  animation: progress-indeterminate 1.4s ease-in-out infinite;
}
@keyframes progress-indeterminate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(350%); }
}`,
    reducedMotion: `.progress-indeterminate span { animation: none; transform: translateX(0); }`,
  },
  {
    id: 'progress-determinate',
    referenceId: 'CSS-034',
    title: '進捗バー(確定・数値連動)',
    description: '@propertyでバーの伸長と数値カウントを同期させる進捗表示。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['@property', '進捗', 'カウンター'],
    difficulty: 'しっかり',
    cost: '注意',
    html: `<div class="progress-determinate"><div class="bar"><i></i></div><span class="num"></span></div>`,
    css: `@property --pct {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}
.progress-determinate { width: 220px; }
.progress-determinate .bar {
  height: 10px;
  border-radius: 999px;
  background: #e5e7eb;
  overflow: hidden;
}
.progress-determinate .bar i {
  display: block;
  height: 100%;
  border-radius: 999px;
  background: #16a34a;
  animation: progress-fill 2.6s ease-out infinite;
}
.progress-determinate .num {
  --pct: 0;
  display: block;
  margin-top: 8px;
  font: 800 13px/1 monospace;
  counter-reset: pct var(--pct);
  animation: progress-count 2.6s ease-out infinite;
}
.progress-determinate .num::after { content: counter(pct) '%'; }
@keyframes progress-fill {
  0% { width: 0%; }
  70%, 100% { width: 82%; }
}
@keyframes progress-count {
  0% { --pct: 0; }
  70%, 100% { --pct: 82; }
}`,
    reducedMotion: `.progress-determinate .bar i { animation: none; width: 82%; } .progress-determinate .num { animation: none; --pct: 82; }`,
    browserNote: '@property はSafari 16.4以降、Chrome/Edge 85以降、Firefox 128以降で対応しています。未対応環境では数値が更新されず、バーの伸長のみ表示されます。',
  },
  {
    id: 'circular-progress',
    referenceId: 'CSS-035',
    title: '円形プログレス',
    description: 'conic-gradientと@propertyで描く、なめらかな円形の進捗。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['@property', 'conic-gradient', '円形'],
    difficulty: 'しっかり',
    cost: '注意',
    html: `<div class="circular-progress"><span>68%</span></div>`,
    css: `@property --value {
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}
.circular-progress {
  --value: 68;
  width: 96px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(#2563eb calc(var(--value) * 1%), #e5e7eb 0);
  animation: circular-progress 2.2s ease-out infinite;
}
.circular-progress span {
  width: 74px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: white;
  display: grid;
  place-items: center;
  font: 800 15px/1 sans-serif;
}
@keyframes circular-progress { from { --value: 0; } }`,
    reducedMotion: `.circular-progress { animation: none; }`,
    note: '中央の数値はデモ用の固定表示です。実装では値の変化に合わせてJavaScriptでテキストも更新してください。',
    browserNote: '@property が必要です(Safari 16.4以降)。未対応環境では色の変化が段階的になります。',
  },
  {
    id: 'skeleton-card',
    referenceId: 'CSS-036',
    title: 'スケルトンカード',
    description: '画像とテキストを含むカード全体のプレースホルダー。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['スケルトン', 'カード', 'グラデーション'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<div class="skeleton-card">
  <i></i>
  <div>
    <span class="sk-title"></span>
    <span class="sk-line"></span>
    <span class="sk-line short"></span>
  </div>
</div>`,
    css: `.skeleton-card {
  width: 240px;
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: white;
}
.skeleton-card i {
  display: block;
  width: 100%;
  height: 96px;
  border-radius: 10px;
  margin-bottom: 14px;
}
.skeleton-card i, .skeleton-card span {
  background: linear-gradient(90deg, #e5e7eb 25%, #f8fafc 50%, #e5e7eb 75%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.6s linear infinite;
}
.skeleton-card span { display: block; height: 11px; border-radius: 6px; margin-top: 8px; }
.skeleton-card .sk-title { height: 14px; width: 70%; }
.skeleton-card .sk-line.short { width: 45%; }
@keyframes skeleton-shimmer { to { background-position: -200% 0; } }`,
    reducedMotion: `.skeleton-card i, .skeleton-card span { animation: none; }`,
  },
  {
    id: 'button-loading',
    referenceId: 'CSS-037',
    title: 'ボタン内スピナー',
    description: '送信中であることを、ボタン自体の状態として示す。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['ボタン', 'スピナー', '送信中'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<button class="btn-loading" disabled><i></i>送信中</button>`,
    css: `.btn-loading {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 26px;
  border: 0;
  border-radius: 999px;
  background: #94a3b8;
  color: white;
  font-weight: 800;
  cursor: not-allowed;
}
.btn-loading i {
  width: 16px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2.5px solid rgb(255 255 255 / 35%);
  border-top-color: white;
  animation: btn-spin .7s linear infinite;
}
@keyframes btn-spin { to { transform: rotate(1turn); } }`,
    reducedMotion: `.btn-loading i { animation: none; }`,
  },
  {
    id: 'step-indicator',
    referenceId: 'CSS-038',
    title: '段階的ステップインジケーター',
    description: '現在地の丸だけが呼吸するように脈打つ進行状況表示。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['ステップ', '進捗', 'box-shadow'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="step-indicator">
  <i class="is-done"></i>
  <em></em>
  <i class="is-current"></i>
  <em></em>
  <i></i>
</div>`,
    css: `.step-indicator { display: flex; align-items: center; }
.step-indicator i {
  width: 26px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #cbd5e1;
  background: white;
}
.step-indicator i.is-done { background: #16a34a; border-color: #16a34a; }
.step-indicator i.is-current {
  border-color: #2563eb;
  box-shadow: 0 0 0 0 rgb(37 99 235 / 45%);
  animation: step-pulse 1.6s ease-out infinite;
}
.step-indicator em { width: 34px; height: 2px; background: #cbd5e1; }
@keyframes step-pulse { to { box-shadow: 0 0 0 8px rgb(37 99 235 / 0%); } }`,
    reducedMotion: `.step-indicator i.is-current { animation: none; box-shadow: none; }`,
  },
  {
    id: 'pull-refresh',
    referenceId: 'CSS-039',
    title: 'プルトゥリフレッシュ',
    description: '引っ張って更新する操作を、矢印の反復で示唆する。',
    category: 'ローディング・進捗',
    trigger: 'ループ',
    tags: ['アイコン', '更新', '回転'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="pull-refresh"><i>↓</i>引っ張って更新</div>`,
    css: `.pull-refresh {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #475569;
  font-weight: 700;
  font-size: 13px;
}
.pull-refresh i {
  display: grid;
  place-items: center;
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #eef2ff;
  color: #4338ca;
  font-style: normal;
  animation: pull-refresh-bounce 1.3s ease-in-out infinite;
}
@keyframes pull-refresh-bounce {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(6px) rotate(180deg); }
}`,
    reducedMotion: `.pull-refresh i { animation: none; }`,
  },

  // フィードバック
  {
    id: 'shake-error',
    referenceId: 'CSS-040',
    title: 'エラー時シェイク',
    description: '左右に小刻みに揺れて、入力の誤りを瞬時に伝える。',
    category: 'フィードバック',
    trigger: '一度だけ',
    tags: ['シェイク', 'エラー', 'transform'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="shake-error">パスワードが違います</div>`,
    css: `.shake-error {
  padding: 12px 20px;
  border: 2px solid #ef4444;
  border-radius: 10px;
  background: #fef2f2;
  color: #b91c1c;
  font-weight: 700;
  font-size: 13px;
  animation: shake-error .5s cubic-bezier(.36,.07,.19,.97);
}
@keyframes shake-error {
  10%, 90% { transform: translateX(-1px); }
  20%, 80% { transform: translateX(2px); }
  30%, 50%, 70% { transform: translateX(-6px); }
  40%, 60% { transform: translateX(6px); }
}`,
    reducedMotion: `.shake-error { animation: none; }`,
  },
  {
    id: 'like-burst',
    referenceId: 'CSS-041',
    title: 'いいね押下',
    description: '弾んで縮む、ハートアイコンの反応。',
    category: 'フィードバック',
    trigger: 'ループ',
    tags: ['ハート', 'いいね', 'scale'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<button class="like-burst"><span>♥</span></button>`,
    css: `.like-burst {
  position: relative;
  width: 56px;
  aspect-ratio: 1;
  border: 0;
  border-radius: 50%;
  background: #fff0f3;
  display: grid;
  place-items: center;
  cursor: pointer;
}
.like-burst span {
  font-size: 26px;
  color: #e11d48;
  animation: like-pop 2.4s ease-in-out infinite;
}
@keyframes like-pop {
  0%, 20% { transform: scale(1); }
  35% { transform: scale(1.5); }
  50% { transform: scale(.9); }
  65%, 100% { transform: scale(1); }
}`,
    reducedMotion: `.like-burst span { animation: none; }`,
    note: '実際は押下や状態切り替え時にのみ発火させます。ここでは動きを常時確認できるようループ再生しています。',
  },
  {
    id: 'delete-fade',
    referenceId: 'CSS-042',
    title: '削除時フェードアウト',
    description: '縮みながら消え、リストの高さも一緒に畳まれる。',
    category: 'フィードバック',
    trigger: 'ループ',
    tags: ['削除', 'opacity', 'リスト'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<div class="delete-fade">タスクを完了しました</div>`,
    css: `.delete-fade {
  padding: 14px 20px;
  border-radius: 10px;
  background: #f1f5f9;
  color: #334155;
  font-weight: 700;
  font-size: 13px;
  overflow: hidden;
  animation: delete-fade 2.6s ease-in infinite;
}
@keyframes delete-fade {
  0%, 55% { opacity: 1; transform: scale(1); max-height: 60px; }
  85% { opacity: 0; transform: scale(.9); max-height: 60px; }
  100% { opacity: 0; transform: scale(.9); max-height: 0; padding-block: 0; }
}`,
    reducedMotion: `.delete-fade { animation: none; }`,
  },
  {
    id: 'input-error-flash',
    referenceId: 'CSS-043',
    title: '入力エラーの枠線点滅',
    description: '外側へ広がって消えるリングで、入力欄の異常を知らせる。',
    category: 'フィードバック',
    trigger: 'ループ',
    tags: ['フォーム', 'エラー', 'box-shadow'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<input class="input-error-flash" value="invalid@" readonly />`,
    css: `.input-error-flash {
  padding: 12px 14px;
  border: 2px solid #ef4444;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  animation: input-error-flash 1.6s ease-in-out infinite;
}
@keyframes input-error-flash {
  0%, 100% { box-shadow: 0 0 0 0 rgb(239 68 68 / 45%); }
  50% { box-shadow: 0 0 0 6px rgb(239 68 68 / 0%); }
}`,
    reducedMotion: `.input-error-flash { animation: none; }`,
  },
  {
    id: 'copied-tooltip',
    referenceId: 'CSS-044',
    title: 'コピー完了の吹き出し',
    description: 'ボタン上に一瞬だけ現れて消える、完了の合図。',
    category: 'フィードバック',
    trigger: 'ループ',
    tags: ['吹き出し', 'コピー', 'opacity'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="copied-tooltip-demo"><button>コピー</button><span>コピーしました</span></div>`,
    css: `.copied-tooltip-demo { position: relative; display: inline-block; }
.copied-tooltip-demo button {
  padding: 12px 22px;
  border: 0;
  border-radius: 10px;
  background: #111827;
  color: white;
  font-weight: 700;
}
.copied-tooltip-demo span {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 10px);
  transform: translateX(-50%) translateY(6px);
  padding: 6px 12px;
  border-radius: 8px;
  background: #16a34a;
  color: white;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  animation: copied-tooltip 2.2s ease-in-out infinite;
}
@keyframes copied-tooltip {
  0%, 100% { opacity: 0; transform: translateX(-50%) translateY(6px); }
  15%, 70% { opacity: 1; transform: translateX(-50%) translateY(0); }
}`,
    reducedMotion: `.copied-tooltip-demo span { animation: none; opacity: 1; transform: translateX(-50%) translateY(0); }`,
  },
  {
    id: 'success-banner',
    referenceId: 'CSS-045',
    title: '保存完了バナー',
    description: '上から降りて数秒とどまり、また上へ消えるバナー。',
    category: 'フィードバック',
    trigger: 'ループ',
    tags: ['成功', 'バナー', 'transform'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="success-banner">✓ すべての変更を保存しました</div>`,
    css: `.success-banner {
  padding: 14px 22px;
  border-radius: 12px;
  background: #dcfce7;
  color: #166534;
  font-weight: 800;
  font-size: 13px;
  animation: success-banner 2.6s cubic-bezier(.2,.8,.2,1) infinite;
}
@keyframes success-banner {
  0% { opacity: 0; transform: translateY(-14px); }
  15%, 80% { opacity: 1; transform: none; }
  100% { opacity: 0; transform: translateY(-14px); }
}`,
    reducedMotion: `.success-banner { animation: none; opacity: 1; transform: none; }`,
  },
  {
    id: 'warning-wobble',
    referenceId: 'CSS-046',
    title: '警告アイコンの揺れ',
    description: '注意を促す、左右非対称の小さな揺れ。',
    category: 'フィードバック',
    trigger: 'ループ',
    tags: ['警告', 'アイコン', 'rotate'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="warning-wobble">⚠</div>`,
    css: `.warning-wobble {
  width: 64px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #fef3c7;
  color: #b45309;
  font-size: 30px;
  animation: warning-wobble 1.8s ease-in-out infinite;
}
@keyframes warning-wobble {
  0%, 100% { transform: rotate(0); }
  20% { transform: rotate(-12deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-6deg); }
  80% { transform: rotate(4deg); }
}`,
    reducedMotion: `.warning-wobble { animation: none; }`,
  },
  {
    id: 'star-rating',
    referenceId: 'CSS-047',
    title: 'スターレーティング選択',
    description: '星が左から順に色付いていく、評価入力の演出。',
    category: 'フィードバック',
    trigger: 'ループ',
    tags: ['評価', '星', 'scale'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="star-rating"><i>★</i><i>★</i><i>★</i><i>★</i><i>★</i></div>`,
    css: `.star-rating { display: flex; gap: 4px; }
.star-rating i {
  font-size: 30px;
  color: #e5e7eb;
  font-style: normal;
  animation: star-fill 2.4s ease infinite;
}
.star-rating i:nth-child(1) { animation-delay: 0s; }
.star-rating i:nth-child(2) { animation-delay: .12s; }
.star-rating i:nth-child(3) { animation-delay: .24s; }
.star-rating i:nth-child(4) { animation-delay: .36s; }
.star-rating i:nth-child(5) { animation-delay: .48s; }
@keyframes star-fill {
  0%, 8% { color: #e5e7eb; transform: scale(1); }
  16% { color: #facc15; transform: scale(1.35); }
  24%, 100% { color: #facc15; transform: scale(1); }
}`,
    reducedMotion: `.star-rating i { animation: none; color: #facc15; }`,
    note: '全体をループ再生していますが、実際は選択した数だけ星が色付いた状態を保持します。',
  },

  // ボタン・リンク
  {
    id: 'underline-grow',
    referenceId: 'CSS-048',
    title: 'ホバー下線伸長',
    description: 'ホバーすると左から下線が伸びるテキストリンク。',
    category: 'ボタン・リンク',
    trigger: 'ホバー',
    tags: ['リンク', '下線', 'transition'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<a class="underline-grow" href="#">詳しく見る</a>`,
    css: `.underline-grow {
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
  color: #111827;
  font-weight: 800;
  text-decoration: none;
}
.underline-grow::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #2563eb;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .3s ease;
}
.underline-grow:hover::after { transform: scaleX(1); }`,
    reducedMotion: `.underline-grow::after { transition: none; }`,
    note: 'マウスをホバーすると動きを確認できます。',
  },
  {
    id: 'bg-slide',
    referenceId: 'CSS-049',
    title: '背景スライドボタン',
    description: 'ホバーで背景が下から染み出すように反転する。',
    category: 'ボタン・リンク',
    trigger: 'ホバー',
    tags: ['ボタン', '背景', 'transition'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<button class="bg-slide">送信する</button>`,
    css: `.bg-slide {
  position: relative;
  overflow: hidden;
  padding: 14px 30px;
  border: 2px solid #111827;
  border-radius: 999px;
  background: white;
  color: #111827;
  font-weight: 800;
  z-index: 0;
}
.bg-slide::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #111827;
  transform: translateX(-100%);
  transition: transform .3s ease;
  z-index: -1;
}
.bg-slide:hover { color: white; }
.bg-slide:hover::before { transform: translateX(0); }`,
    reducedMotion: `.bg-slide::before { transition: none; }`,
    note: 'マウスをホバーすると動きを確認できます。',
  },
  {
    id: 'icon-shift',
    referenceId: 'CSS-050',
    title: 'アイコン移動ボタン',
    description: 'ホバーで矢印アイコンだけがすっと右へ動く。',
    category: 'ボタン・リンク',
    trigger: 'ホバー',
    tags: ['アイコン', 'ボタン', 'transition'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<button class="icon-shift">次へ <span>→</span></button>`,
    css: `.icon-shift {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 24px;
  border: 0;
  border-radius: 999px;
  background: #2563eb;
  color: white;
  font-weight: 800;
}
.icon-shift span { display: inline-block; transition: transform .25s ease; }
.icon-shift:hover span { transform: translateX(6px); }`,
    reducedMotion: `.icon-shift span { transition: none; }`,
    note: 'マウスをホバーすると動きを確認できます。',
  },
  {
    id: 'border-draw',
    referenceId: 'CSS-051',
    title: 'ボーダー描画ボタン',
    description: 'ホバーで対角から輪郭線が伸びて枠を描く。',
    category: 'ボタン・リンク',
    trigger: 'ホバー',
    tags: ['ボーダー', '疑似要素', 'transition'],
    difficulty: 'しっかり',
    cost: '注意',
    html: `<button class="border-draw">詳細</button>`,
    css: `.border-draw {
  position: relative;
  padding: 13px 26px;
  border: 0;
  background: transparent;
  color: #111827;
  font-weight: 800;
  font-size: 14px;
}
.border-draw::before, .border-draw::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 2px solid #111827;
  transition: width .25s ease, height .25s ease .25s;
}
.border-draw::before { top: 0; left: 0; border-right: 0; border-bottom: 0; }
.border-draw::after { bottom: 0; right: 0; border-left: 0; border-top: 0; }
.border-draw:hover::before, .border-draw:hover::after { width: 100%; height: 100%; }`,
    reducedMotion: `.border-draw::before, .border-draw::after { transition: none; }`,
    note: 'マウスをホバーすると動きを確認できます。',
  },
  {
    id: 'press-sink',
    referenceId: 'CSS-052',
    title: '押下時の沈み込み',
    description: '立体的な影が、押している間だけ潰れる操作感。',
    category: 'ボタン・リンク',
    trigger: '状態変化',
    tags: ['ボタン', '押下', 'box-shadow'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<button class="press-sink">確定する</button>`,
    css: `.press-sink {
  padding: 14px 30px;
  border: 0;
  border-radius: 12px;
  background: #16a34a;
  color: white;
  font-weight: 800;
  box-shadow: 0 6px 0 #15803d;
  transition: transform .12s ease, box-shadow .12s ease;
}
.press-sink:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #15803d;
}`,
    reducedMotion: `.press-sink { transition: none; }`,
    note: 'マウスを押し続けている間だけ動きます。クリックして確認してください。',
  },
  {
    id: 'gradient-border',
    referenceId: 'CSS-053',
    title: 'グラデーション境界',
    description: '@propertyで枠のグラデーションを回転させる特別感の演出。',
    category: 'ボタン・リンク',
    trigger: 'ループ',
    tags: ['@property', 'グラデーション', '境界'],
    difficulty: 'しっかり',
    cost: '注意',
    html: `<button class="gradient-border">プレミアム</button>`,
    css: `@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
.gradient-border {
  position: relative;
  padding: 13px 28px;
  border: 0;
  border-radius: 999px;
  background: #111827;
  color: white;
  font-weight: 800;
  z-index: 0;
}
.gradient-border::before {
  content: "";
  position: absolute;
  inset: -3px;
  z-index: -1;
  border-radius: inherit;
  background: conic-gradient(from var(--angle), #7c3aed, #ec4899, #f97316, #7c3aed);
  animation: gradient-border-spin 3s linear infinite;
}
@keyframes gradient-border-spin { to { --angle: 360deg; } }`,
    reducedMotion: `.gradient-border::before { animation: none; }`,
    browserNote: '@property が必要です(Safari 16.4以降)。未対応環境では枠のグラデーションが回転せず固定表示になります。',
  },
  {
    id: 'magnetic-hover',
    referenceId: 'CSS-054',
    title: '磁石風ホバー',
    description: '吸い寄せられるように拡大浮遊するホバー反応。',
    category: 'ボタン・リンク',
    trigger: 'ホバー',
    tags: ['ホバー', 'scale', 'transition'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<button class="magnetic-hover">HOVER ME</button>`,
    css: `.magnetic-hover {
  padding: 16px 32px;
  border: 0;
  border-radius: 999px;
  background: #eef2ff;
  color: #4338ca;
  font-weight: 800;
  transition: transform .25s cubic-bezier(.2,.9,.3,1.2);
}
.magnetic-hover:hover { transform: scale(1.08) translateY(-3px); }`,
    reducedMotion: `.magnetic-hover { transition: none; }`,
    note: '本来の磁石風(マウス位置に追従する動き)にはJavaScriptでポインター座標を取得する実装が必要です。ここではCSSのみで再現できる範囲の反応を実演しています。',
  },
  {
    id: 'disabled-transition',
    referenceId: 'CSS-055',
    title: '無効化状態への遷移',
    description: '送信可能から送信不可へ切り替わる、状態変化の表現。',
    category: 'ボタン・リンク',
    trigger: 'ループ',
    tags: ['状態', '無効化', 'opacity'],
    difficulty: 'かんたん',
    cost: '注意',
    html: `<button class="disabled-transition">送信する</button>`,
    css: `.disabled-transition {
  padding: 14px 30px;
  border: 0;
  border-radius: 999px;
  font-weight: 800;
  color: white;
  animation: disabled-transition 2.6s ease-in-out infinite;
}
@keyframes disabled-transition {
  0%, 40% { background: #2563eb; opacity: 1; }
  55%, 100% { background: #94a3b8; opacity: .7; }
}`,
    reducedMotion: `.disabled-transition { animation: none; }`,
    note: '実際は送信中などの条件でdisabled属性とスタイルをJavaScriptで切り替えます。ここでは動きを常時確認できるようループ再生しています。',
  },
  {
    id: 'shadow-lift',
    referenceId: 'CSS-056',
    title: '影の持ち上げ',
    description: 'ホバーで浮き上がり、影が広がるカード全体の反応。',
    category: 'ボタン・リンク',
    trigger: 'ホバー',
    tags: ['カード', '影', 'transition'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="shadow-lift">カード全体がホバー対象です</div>`,
    css: `.shadow-lift {
  padding: 22px 26px;
  border-radius: 16px;
  background: white;
  border: 1px solid #e5e7eb;
  font-weight: 700;
  color: #334155;
  box-shadow: 0 1px 2px rgb(0 0 0 / 6%);
  transition: transform .25s ease, box-shadow .25s ease;
}
.shadow-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 35px rgb(0 0 0 / 15%);
}`,
    reducedMotion: `.shadow-lift { transition: none; }`,
    note: 'マウスをホバーすると動きを確認できます。',
  },
  {
    id: 'outline-fill',
    referenceId: 'CSS-057',
    title: 'アウトラインの塗りつぶし',
    description: 'ホバーで輪郭ボタンの内側が左から塗りつぶされる。',
    category: 'ボタン・リンク',
    trigger: 'ホバー',
    tags: ['ボタン', '塗りつぶし', 'background'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<button class="outline-fill">登録する</button>`,
    css: `.outline-fill {
  padding: 13px 30px;
  border: 2px solid #16a34a;
  border-radius: 999px;
  background: linear-gradient(#16a34a, #16a34a) no-repeat left / 0% 100%;
  color: #16a34a;
  font-weight: 800;
  transition: background-size .3s ease, color .3s ease;
}
.outline-fill:hover {
  background-size: 100% 100%;
  color: white;
}`,
    reducedMotion: `.outline-fill { transition: none; }`,
    note: 'マウスをホバーすると動きを確認できます。',
  },

  // フォーム入力
  {
    id: 'floating-label',
    referenceId: 'CSS-058',
    title: 'フローティングラベル',
    description: '入力にフォーカスすると、ラベルが上へ小さく移動する。',
    category: 'フォーム入力',
    trigger: '状態変化',
    tags: ['フォーム', 'ラベル', 'focus'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<label class="floating-label"><input type="text" placeholder=" " /><span>メールアドレス</span></label>`,
    css: `.floating-label { position: relative; display: inline-block; }
.floating-label input {
  width: 220px;
  padding: 18px 14px 8px;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  transition: border-color .2s ease;
}
.floating-label input:focus { border-color: #2563eb; }
.floating-label span {
  position: absolute;
  left: 14px;
  top: 18px;
  color: #64748b;
  font-size: 15px;
  pointer-events: none;
  transform-origin: left top;
  transition: transform .2s ease, color .2s ease;
}
.floating-label input:focus + span,
.floating-label input:not(:placeholder-shown) + span {
  transform: translateY(-11px) scale(.8);
  color: #2563eb;
}`,
    reducedMotion: `.floating-label input, .floating-label span { transition: none; }`,
    note: '入力欄をクリック(フォーカス)すると、ラベルが上へ移動します。',
  },
  {
    id: 'focus-ring-grow',
    referenceId: 'CSS-059',
    title: 'フォーカス時の枠線拡大',
    description: 'フォーカスした入力欄の周囲に、輪郭が広がる。',
    category: 'フォーム入力',
    trigger: '状態変化',
    tags: ['フォーム', 'focus', 'box-shadow'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<input class="focus-ring-grow" placeholder="お名前" />`,
    css: `.focus-ring-grow {
  padding: 13px 16px;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  box-shadow: 0 0 0 0 rgb(37 99 235 / 25%);
  transition: border-color .2s ease, box-shadow .2s ease;
}
.focus-ring-grow:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 5px rgb(37 99 235 / 25%);
}`,
    reducedMotion: `.focus-ring-grow { transition: none; }`,
    note: '入力欄をクリック(フォーカス)すると輪郭が広がります。',
  },
  {
    id: 'checkbox-draw',
    referenceId: 'CSS-060',
    title: 'チェックボックス描画',
    description: 'チェックすると、四角の中にチェックマークが現れる。',
    category: 'フォーム入力',
    trigger: '状態変化',
    tags: ['チェックボックス', 'フォーム', '状態'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<label class="checkbox-draw"><input type="checkbox" /><span></span>利用規約に同意する</label>`,
    css: `.checkbox-draw { display: inline-flex; align-items: center; gap: 10px; font-weight: 700; cursor: pointer; }
.checkbox-draw input { position: absolute; opacity: 0; width: 0; height: 0; }
.checkbox-draw span {
  position: relative;
  width: 24px;
  aspect-ratio: 1;
  border: 2px solid #94a3b8;
  border-radius: 6px;
  transition: background .2s ease, border-color .2s ease;
}
.checkbox-draw span::after {
  content: "";
  position: absolute;
  left: 7px;
  top: 3px;
  width: 6px;
  height: 11px;
  border-right: 2.5px solid white;
  border-bottom: 2.5px solid white;
  transform: rotate(45deg) scale(0);
  transition: transform .2s ease .05s;
}
.checkbox-draw input:checked + span { background: #2563eb; border-color: #2563eb; }
.checkbox-draw input:checked + span::after { transform: rotate(45deg) scale(1); }`,
    reducedMotion: `.checkbox-draw span, .checkbox-draw span::after { transition: none; }`,
    note: 'クリックしてチェック状態を切り替えられます。',
  },
  {
    id: 'toggle-switch',
    referenceId: 'CSS-061',
    title: 'トグルスイッチ',
    description: 'つまみが滑るように移動する、ON/OFFの切り替え。',
    category: 'フォーム入力',
    trigger: '状態変化',
    tags: ['トグル', 'スイッチ', 'フォーム'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<label class="toggle-switch"><input type="checkbox" checked /><span></span></label>`,
    css: `.toggle-switch { display: inline-block; }
.toggle-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.toggle-switch span {
  display: block;
  width: 52px;
  height: 30px;
  border-radius: 999px;
  background: #cbd5e1;
  transition: background .25s ease;
}
.toggle-switch span::after {
  content: "";
  display: block;
  width: 24px;
  aspect-ratio: 1;
  margin: 3px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
  transition: transform .25s cubic-bezier(.2,.8,.2,1);
}
.toggle-switch input:checked + span { background: #16a34a; }
.toggle-switch input:checked + span::after { transform: translateX(22px); }`,
    reducedMotion: `.toggle-switch span, .toggle-switch span::after { transition: none; }`,
    note: 'クリックしてON/OFFを切り替えられます。',
  },
  {
    id: 'radio-select',
    referenceId: 'CSS-062',
    title: 'ラジオ選択',
    description: '選んだ側の中心に、丸がふわりと現れる。',
    category: 'フォーム入力',
    trigger: '状態変化',
    tags: ['ラジオ', 'フォーム', '状態'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="radio-select">
  <label><input type="radio" name="plan-css062" checked /><span></span>ライト</label>
  <label><input type="radio" name="plan-css062" /><span></span>プロ</label>
</div>`,
    css: `.radio-select { display: flex; gap: 18px; font-weight: 700; }
.radio-select label { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; }
.radio-select input { position: absolute; opacity: 0; width: 0; height: 0; }
.radio-select span {
  position: relative;
  width: 20px;
  aspect-ratio: 1;
  border: 2px solid #94a3b8;
  border-radius: 50%;
  transition: border-color .2s ease;
}
.radio-select span::after {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: #2563eb;
  transform: scale(0);
  transition: transform .2s cubic-bezier(.2,.8,.2,1.4);
}
.radio-select input:checked + span { border-color: #2563eb; }
.radio-select input:checked + span::after { transform: scale(1); }`,
    reducedMotion: `.radio-select span, .radio-select span::after { transition: none; }`,
    note: 'クリックして選択を切り替えられます。',
  },
  {
    id: 'search-expand',
    referenceId: 'CSS-063',
    title: '検索欄の展開',
    description: 'フォーカスすると、アイコンだけの入力欄が横に広がる。',
    category: 'フォーム入力',
    trigger: '状態変化',
    tags: ['検索', 'フォーム', 'focus'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<div class="search-expand"><input type="search" placeholder="検索" /><span>🔍</span></div>`,
    css: `.search-expand { display: inline-flex; align-items: center; }
.search-expand input {
  width: 40px;
  padding: 12px 14px;
  border: 2px solid #cbd5e1;
  border-radius: 999px;
  outline: none;
  font-size: 14px;
  transition: width .3s cubic-bezier(.2,.8,.2,1);
}
.search-expand input:focus { width: 200px; border-color: #2563eb; }
.search-expand span { margin-left: -34px; pointer-events: none; }`,
    reducedMotion: `.search-expand input { transition: none; }`,
    note: '入力欄をクリック(フォーカス)すると横に広がります。',
  },
  {
    id: 'char-counter',
    referenceId: 'CSS-064',
    title: '文字数カウンターの色変化',
    description: '上限に近づくにつれ、数字の色が段階的に変わる。',
    category: 'フォーム入力',
    trigger: 'ループ',
    tags: ['文字数', 'フォーム', '色'],
    difficulty: 'かんたん',
    cost: '注意',
    html: `<div class="char-counter"><span>128</span> / 140</div>`,
    css: `.char-counter {
  font: 700 14px/1 monospace;
  animation: char-counter-color 3s ease-in-out infinite;
}
@keyframes char-counter-color {
  0%, 20% { color: #16a34a; }
  55% { color: #d97706; }
  85%, 100% { color: #dc2626; }
}`,
    reducedMotion: `.char-counter { animation: none; }`,
    note: '実際は入力文字数に応じてJavaScriptで色やテキストを更新します。ここでは動きを常時確認できるようループ再生しています。',
  },
  {
    id: 'password-strength',
    referenceId: 'CSS-065',
    title: 'パスワード強度バー',
    description: '入力の強さに応じて、色付くバーの本数が増える。',
    category: 'フォーム入力',
    trigger: 'ループ',
    tags: ['パスワード', '強度', 'フォーム'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<div class="password-strength"><i></i><i></i><i></i><i></i></div>`,
    css: `.password-strength { display: flex; gap: 6px; }
.password-strength i {
  width: 34px;
  height: 6px;
  border-radius: 999px;
  background: #e5e7eb;
  animation: password-strength 2.6s ease-in-out infinite;
}
.password-strength i:nth-child(1) { animation-delay: 0s; }
.password-strength i:nth-child(2) { animation-delay: .15s; }
.password-strength i:nth-child(3) { animation-delay: .3s; }
.password-strength i:nth-child(4) { animation-delay: .45s; }
@keyframes password-strength {
  0%, 15% { background: #e5e7eb; }
  30%, 100% { background: #16a34a; }
}`,
    reducedMotion: `.password-strength i { animation: none; }`,
    note: '実際は入力内容の強度判定に応じて色付く本数をJavaScriptで制御します。ここでは動きを常時確認できるようループ再生しています。',
  },
  {
    id: 'submit-transition',
    referenceId: 'CSS-066',
    title: '送信中の状態遷移',
    description: 'ボタンのラベルとスピナーが入れ替わりで表示される。',
    category: 'フォーム入力',
    trigger: 'ループ',
    tags: ['送信', '状態', 'ボタン'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<button class="submit-transition"><span class="label">送信する</span><span class="spinner"><i></i></span></button>`,
    css: `.submit-transition {
  position: relative;
  width: 150px;
  height: 46px;
  border: 0;
  border-radius: 999px;
  background: #2563eb;
  color: white;
  font-weight: 800;
}
.submit-transition .label, .submit-transition .spinner {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}
.submit-transition .label { animation: submit-crossfade 3s ease-in-out infinite; }
.submit-transition .spinner { animation: submit-crossfade-reverse 3s ease-in-out infinite; }
.submit-transition .spinner i {
  width: 18px;
  aspect-ratio: 1;
  border: 2.5px solid rgb(255 255 255 / 35%);
  border-top-color: white;
  border-radius: 50%;
  animation: submit-spin .6s linear infinite;
}
@keyframes submit-crossfade { 0%, 40% { opacity: 1; } 50%, 75% { opacity: 0; } 85%, 100% { opacity: 1; } }
@keyframes submit-crossfade-reverse { 0%, 40% { opacity: 0; } 50%, 75% { opacity: 1; } 85%, 100% { opacity: 0; } }
@keyframes submit-spin { to { transform: rotate(1turn); } }`,
    reducedMotion: `.submit-transition .label, .submit-transition .spinner, .submit-transition .spinner i { animation: none; } .submit-transition .spinner { opacity: 0; }`,
    note: '実際は送信開始・完了のタイミングでクラスをJavaScriptから切り替えます。ここでは一連の流れを常時ループ再生しています。',
  },
  {
    id: 'select-arrow-rotate',
    referenceId: 'CSS-067',
    title: 'セレクト矢印の回転',
    description: 'フォーカスすると、開閉を示す矢印が反転する。',
    category: 'フォーム入力',
    trigger: '状態変化',
    tags: ['セレクト', '矢印', 'focus'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<label class="select-arrow-rotate"><select><option>並び替え: 新着順</option><option>人気順</option></select><span>▾</span></label>`,
    css: `.select-arrow-rotate { position: relative; display: inline-block; }
.select-arrow-rotate select {
  appearance: none;
  padding: 12px 40px 12px 16px;
  border: 2px solid #cbd5e1;
  border-radius: 10px;
  font-size: 14px;
  background: white;
}
.select-arrow-rotate span {
  position: absolute;
  right: 16px;
  top: 50%;
  color: #64748b;
  pointer-events: none;
  transform: translateY(-50%);
  transition: transform .2s ease;
}
.select-arrow-rotate select:focus + span { transform: translateY(-50%) rotate(180deg); }`,
    reducedMotion: `.select-arrow-rotate span { transition: none; }`,
    note: 'クリック(フォーカス)すると矢印が回転します。',
  },
  {
    id: 'dropzone-highlight',
    referenceId: 'CSS-068',
    title: 'ドロップゾーンの誘導',
    description: 'ドラッグ&ドロップの受け皿であることを、脈打つ枠線で示す。',
    category: 'フォーム入力',
    trigger: 'ループ',
    tags: ['ドラッグ&ドロップ', 'フォーム', 'border'],
    difficulty: 'かんたん',
    cost: '注意',
    html: `<div class="dropzone-highlight">ここにファイルをドロップ</div>`,
    css: `.dropzone-highlight {
  width: 220px;
  padding: 34px 16px;
  border: 2px dashed #94a3b8;
  border-radius: 14px;
  text-align: center;
  color: #64748b;
  font-weight: 700;
  font-size: 13px;
  animation: dropzone-pulse 2s ease-in-out infinite;
}
@keyframes dropzone-pulse {
  0%, 100% { border-color: #94a3b8; background: transparent; }
  50% { border-color: #2563eb; background: #eff6ff; }
}`,
    reducedMotion: `.dropzone-highlight { animation: none; }`,
    note: '実際はdragoverイベントでクラスを切り替えます。ここでは動きを常時確認できるようループ再生しています。',
  },
  {
    id: 'slider-thumb-grow',
    referenceId: 'CSS-069',
    title: 'スライダーのつまみ操作感',
    description: '押している間、つまみが大きくなって操作対象を強調する。',
    category: 'フォーム入力',
    trigger: '状態変化',
    tags: ['スライダー', 'つまみ', 'transition'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="slider-thumb-grow"><div class="track"><i class="fill"></i><i class="thumb"></i></div></div>`,
    css: `.slider-thumb-grow { width: 220px; padding: 14px 0; cursor: pointer; }
.slider-thumb-grow .track { position: relative; height: 4px; border-radius: 999px; background: #e2e8f0; }
.slider-thumb-grow .fill { position: absolute; inset: 0; width: 62%; border-radius: 999px; background: #2563eb; }
.slider-thumb-grow .thumb {
  position: absolute;
  left: 62%;
  top: 50%;
  width: 18px;
  aspect-ratio: 1;
  margin-left: -9px;
  border-radius: 50%;
  background: #2563eb;
  box-shadow: 0 0 0 4px white, 0 2px 6px rgb(0 0 0 / 25%);
  transform: translateY(-50%) scale(1);
  transition: transform .15s ease;
}
.slider-thumb-grow:active .thumb { transform: translateY(-50%) scale(1.5); }`,
    reducedMotion: `.slider-thumb-grow .thumb { transition: none; }`,
    note: '見た目の実演用に簡略化した非機能スライダーです。実際のフォームでは input type="range" を使用してください。クリックして押下時の反応を確認できます。',
  },

  // ナビゲーション・開閉
  {
    id: 'hamburger-morph',
    referenceId: 'CSS-070',
    title: 'ハンバーガー変形',
    description: '3本線がバツ印へ滑らかに変形するメニューボタン。',
    category: 'ナビゲーション・開閉',
    trigger: 'ホバー',
    tags: ['ハンバーガー', 'メニュー', 'transform'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<button class="hamburger-morph" aria-label="メニュー"><span></span><span></span><span></span></button>`,
    css: `.hamburger-morph {
  position: relative;
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 10px;
  background: #111827;
  cursor: pointer;
}
.hamburger-morph span {
  position: absolute;
  left: 11px;
  width: 22px;
  height: 2.5px;
  background: white;
  border-radius: 2px;
  transition: transform .3s ease, opacity .2s ease, top .3s ease;
}
.hamburger-morph span:nth-child(1) { top: 15px; }
.hamburger-morph span:nth-child(2) { top: 21px; }
.hamburger-morph span:nth-child(3) { top: 27px; }
.hamburger-morph:hover span:nth-child(1) { top: 21px; transform: rotate(45deg); }
.hamburger-morph:hover span:nth-child(2) { opacity: 0; }
.hamburger-morph:hover span:nth-child(3) { top: 21px; transform: rotate(-45deg); }`,
    reducedMotion: `.hamburger-morph span { transition: none; }`,
    note: '実際にはクリックでの開閉が一般的です。ここではCSSのみで実演するため:hoverで代用しています。',
  },
  {
    id: 'drawer-slide',
    referenceId: 'CSS-071',
    title: 'ドロワー',
    description: '横から滑り出て、また収納されるメニューパネル。',
    category: 'ナビゲーション・開閉',
    trigger: 'ループ',
    tags: ['ドロワー', 'transform', 'メニュー'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="drawer-slide-demo"><div class="drawer-panel">メニュー項目</div></div>`,
    css: `.drawer-slide-demo { width: 220px; height: 140px; overflow: hidden; position: relative; background: #f1f5f9; border-radius: 12px; }
.drawer-panel {
  position: absolute;
  inset: 0;
  width: 160px;
  padding: 16px;
  background: #111827;
  color: white;
  font-weight: 700;
  font-size: 13px;
  animation: drawer-slide 3s ease-in-out infinite;
}
@keyframes drawer-slide {
  0%, 15% { transform: translateX(-100%); }
  40%, 75% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}`,
    reducedMotion: `.drawer-panel { animation: none; }`,
    note: '実際は開閉ボタンのクリックでクラスを切り替えます。ここでは動きを常時確認できるようループ再生しています。',
  },
  {
    id: 'accordion-expand',
    referenceId: 'CSS-072',
    title: 'アコーディオン',
    description: 'クリックすると、内容の高さがなめらかに広がる。',
    category: 'ナビゲーション・開閉',
    trigger: '状態変化',
    tags: ['アコーディオン', 'grid', '状態'],
    difficulty: 'しっかり',
    cost: '注意',
    html: `<div class="accordion-expand">
  <input type="checkbox" id="acc-css072" />
  <label for="acc-css072" class="acc-head">よくある質問を開く</label>
  <div class="acc-body"><p>ここに回答テキストが入ります。高さがなめらかに広がります。</p></div>
</div>`,
    css: `.accordion-expand { width: 240px; }
.accordion-expand input { position: absolute; opacity: 0; width: 0; height: 0; }
.acc-head {
  display: block;
  padding: 14px 16px;
  border-radius: 10px;
  background: #f1f5f9;
  font-weight: 700;
  cursor: pointer;
}
.acc-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .3s ease;
}
.acc-body p { min-height: 0; overflow: hidden; margin: 0; padding: 0 16px; }
.accordion-expand input:checked ~ .acc-body { grid-template-rows: 1fr; }
.accordion-expand input:checked ~ .acc-body p { padding-top: 12px; padding-bottom: 12px; }`,
    reducedMotion: `.acc-body { transition: none; }`,
    note: 'クリックして開閉を確認できます。',
    browserNote: 'grid-template-rowsのfr値アニメーションはモダンブラウザーで対応していますが、Safariの一部バージョンでは滑らかに変化しない場合があります。',
  },
  {
    id: 'dropdown-menu',
    referenceId: 'CSS-073',
    title: 'ドロップダウン',
    description: 'ホバーで、ふわりと拡大しながら選択肢が現れる。',
    category: 'ナビゲーション・開閉',
    trigger: 'ホバー',
    tags: ['ドロップダウン', 'メニュー', 'opacity'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="dropdown-menu">
  <button>アカウント ▾</button>
  <ul>
    <li>プロフィール</li>
    <li>設定</li>
    <li>ログアウト</li>
  </ul>
</div>`,
    css: `.dropdown-menu { position: relative; display: inline-block; }
.dropdown-menu button {
  padding: 12px 20px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background: white;
  font-weight: 700;
  cursor: pointer;
}
.dropdown-menu ul {
  position: absolute;
  left: 0;
  top: calc(100% + 6px);
  width: 160px;
  margin: 0;
  padding: 6px;
  list-style: none;
  border-radius: 10px;
  background: white;
  box-shadow: 0 15px 35px rgb(0 0 0 / 18%);
  opacity: 0;
  transform: translateY(-6px) scale(.97);
  transform-origin: top left;
  pointer-events: none;
  transition: opacity .18s ease, transform .18s ease;
}
.dropdown-menu:hover ul, .dropdown-menu:focus-within ul {
  opacity: 1;
  transform: none;
  pointer-events: auto;
}
.dropdown-menu li { padding: 10px 12px; border-radius: 6px; font-size: 13px; }
.dropdown-menu li:hover { background: #f1f5f9; }`,
    reducedMotion: `.dropdown-menu ul { transition: none; }`,
    note: 'マウスをホバーすると開きます。',
  },
  {
    id: 'tooltip-pop',
    referenceId: 'CSS-074',
    title: 'ツールチップ',
    description: 'ホバーした要素の上に、ふわっと吹き出しが現れる。',
    category: 'ナビゲーション・開閉',
    trigger: 'ホバー',
    tags: ['ツールチップ', 'ホバー', 'opacity'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="tooltip-pop"><button>?</button><span>クリックで詳細をコピー</span></div>`,
    css: `.tooltip-pop { position: relative; display: inline-block; }
.tooltip-pop button {
  width: 32px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 1px solid #cbd5e1;
  background: white;
  font-weight: 800;
  cursor: pointer;
}
.tooltip-pop span {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 8px);
  transform: translateX(-50%) translateY(4px) scale(.92);
  transform-origin: bottom center;
  padding: 7px 12px;
  border-radius: 8px;
  background: #111827;
  color: white;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity .15s ease, transform .15s ease;
}
.tooltip-pop:hover span {
  opacity: 1;
  transform: translateX(-50%) translateY(0) scale(1);
}`,
    reducedMotion: `.tooltip-pop span { transition: none; }`,
    note: 'マウスをホバーすると表示されます。',
  },
  {
    id: 'tab-underline-follow',
    referenceId: 'CSS-075',
    title: 'タブ下線の追従',
    description: 'ホバーしたタブの位置へ、下線がすっと移動する。',
    category: 'ナビゲーション・開閉',
    trigger: 'ホバー',
    tags: [':has()', 'タブ', 'transition'],
    difficulty: 'しっかり',
    cost: '軽い',
    html: `<div class="tab-underline-follow">
  <button class="is-active">概要</button>
  <button>仕様</button>
  <button>レビュー</button>
</div>`,
    css: `.tab-underline-follow {
  position: relative;
  display: flex;
  width: 270px;
  border-bottom: 2px solid #e5e7eb;
}
.tab-underline-follow button {
  flex: 1;
  padding: 12px 0;
  border: 0;
  background: transparent;
  font-weight: 700;
  color: #64748b;
  cursor: pointer;
}
.tab-underline-follow::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 33.333%;
  height: 2px;
  background: #2563eb;
  transition: transform .25s ease;
}
.tab-underline-follow:has(button:nth-child(2):hover)::after { transform: translateX(100%); }
.tab-underline-follow:has(button:nth-child(3):hover)::after { transform: translateX(200%); }`,
    reducedMotion: `.tab-underline-follow::after { transition: none; }`,
    note: '各タブにマウスをホバーすると下線が移動します。',
    browserNote: ':has()を使用しています。Firefox 121未満など古いブラウザーでは下線が追従しません。',
  },
  {
    id: 'modal-blur-backdrop',
    referenceId: 'CSS-076',
    title: 'モーダル背景ぼかし',
    description: '背景がぼやけて沈み、カードだけが手前に浮かぶ。',
    category: 'ナビゲーション・開閉',
    trigger: 'ループ',
    tags: ['モーダル', 'backdrop-filter', 'opacity'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<div class="modal-blur-demo">
  <div class="blur-content">背景コンテンツ</div>
  <div class="blur-backdrop"></div>
  <div class="blur-card">確認してください</div>
</div>`,
    css: `.modal-blur-demo { position: relative; width: 240px; height: 150px; border-radius: 14px; overflow: hidden; background: #e2e8f0; }
.blur-content {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #475569;
  font-weight: 700;
}
.blur-backdrop {
  position: absolute;
  inset: 0;
  animation: modal-blur 3s ease-in-out infinite;
}
.blur-card {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 14px 22px;
  border-radius: 12px;
  background: white;
  font-weight: 800;
  box-shadow: 0 20px 40px rgb(0 0 0 / 20%);
  animation: modal-card-pop 3s ease-in-out infinite;
}
@keyframes modal-blur {
  0%, 15% { backdrop-filter: blur(0px); background: rgb(255 255 255 / 0%); }
  35%, 80% { backdrop-filter: blur(6px); background: rgb(255 255 255 / 35%); }
  100% { backdrop-filter: blur(0px); background: rgb(255 255 255 / 0%); }
}
@keyframes modal-card-pop {
  0%, 15% { opacity: 0; transform: translate(-50%, -50%) scale(.9); }
  35%, 80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(.9); }
}`,
    reducedMotion: `.blur-backdrop, .blur-card { animation: none; }`,
    note: '実際は開閉のタイミングでクラスを切り替えます。ここでは動きを常時確認できるようループ再生しています。',
    browserNote: 'backdrop-filterは主要ブラウザーで対応済みですが、対応環境でも描画コストが高めです。多用は避けてください。',
  },
  {
    id: 'step-transition',
    referenceId: 'CSS-077',
    title: 'ステップ遷移',
    description: '現在のステップが左へ抜け、次のステップが右から入る。',
    category: 'ナビゲーション・開閉',
    trigger: 'ループ',
    tags: ['ステップ', 'transform', 'ウィザード'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="step-transition">
  <div class="step-page">STEP 1: お届け先</div>
  <div class="step-page">STEP 2: お支払い</div>
</div>`,
    css: `.step-transition { position: relative; width: 220px; height: 70px; overflow: hidden; }
.step-page {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: #eef2ff;
  color: #4338ca;
  font-weight: 800;
  font-size: 13px;
  animation: step-transition 3.2s ease-in-out infinite;
}
.step-page:nth-child(2) {
  background: #ecfdf5;
  color: #047857;
  animation-name: step-transition-2;
}
@keyframes step-transition {
  0%, 40% { transform: translateX(0); opacity: 1; }
  50%, 90% { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
@keyframes step-transition-2 {
  0%, 40% { transform: translateX(100%); opacity: 0; }
  50%, 90% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}`,
    reducedMotion: `.step-page { animation: none; } .step-page:nth-child(2) { transform: translateX(100%); opacity: 0; }`,
    note: '実際は「次へ」ボタンのクリックで遷移します。ここでは動きを常時確認できるようループ再生しています。',
  },
  {
    id: 'sidebar-collapse',
    referenceId: 'CSS-078',
    title: 'サイドバー折りたたみ矢印',
    description: 'ホバーで矢印が半回転し、折りたたみ方向を示す。',
    category: 'ナビゲーション・開閉',
    trigger: 'ホバー',
    tags: ['サイドバー', '矢印', 'transition'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<button class="sidebar-collapse"><span>◂</span>折りたたむ</button>`,
    css: `.sidebar-collapse {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 18px;
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  background: white;
  font-weight: 700;
  cursor: pointer;
}
.sidebar-collapse span { display: inline-block; transition: transform .25s ease; }
.sidebar-collapse:hover span { transform: rotate(180deg); }`,
    reducedMotion: `.sidebar-collapse span { transition: none; }`,
    note: 'マウスをホバーすると矢印が反転します。',
  },
  {
    id: 'pagination-slide',
    referenceId: 'CSS-079',
    title: 'ページネーションの追従',
    description: 'ホバーしたページ番号へ、選択の丸背景が移動する。',
    category: 'ナビゲーション・開閉',
    trigger: 'ホバー',
    tags: [':has()', 'ページネーション', 'transform'],
    difficulty: 'しっかり',
    cost: '軽い',
    html: `<div class="pagination-slide">
  <button>1</button>
  <button>2</button>
  <button>3</button>
</div>`,
    css: `.pagination-slide { position: relative; display: inline-flex; padding: 4px; border-radius: 999px; background: #f1f5f9; }
.pagination-slide button {
  position: relative;
  z-index: 1;
  width: 34px;
  height: 34px;
  border: 0;
  background: transparent;
  border-radius: 50%;
  font-weight: 700;
  cursor: pointer;
}
.pagination-slide::before {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #2563eb;
  opacity: 0;
  transition: transform .25s cubic-bezier(.2,.8,.2,1), opacity .2s ease;
}
.pagination-slide button:hover { color: white; }
.pagination-slide:has(button:hover)::before { opacity: 1; }
.pagination-slide:has(button:nth-child(1):hover)::before { transform: translateX(0); }
.pagination-slide:has(button:nth-child(2):hover)::before { transform: translateX(38px); }
.pagination-slide:has(button:nth-child(3):hover)::before { transform: translateX(76px); }`,
    reducedMotion: `.pagination-slide::before { transition: none; }`,
    note: '各ページ番号にマウスをホバーすると、選択インジケーターが移動します。',
    browserNote: ':has()を使用しています。Firefox 121未満など古いブラウザーでは反応しません。',
  },
  {
    id: 'context-menu-expand',
    referenceId: 'CSS-080',
    title: 'コンテキストメニューの展開',
    description: 'ホバーで、右上を起点に拡大しながら選択肢が開く。',
    category: 'ナビゲーション・開閉',
    trigger: 'ホバー',
    tags: ['コンテキストメニュー', 'opacity', 'scale'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="context-menu-expand">
  <button>⋮</button>
  <ul>
    <li>編集</li>
    <li>複製</li>
    <li>削除</li>
  </ul>
</div>`,
    css: `.context-menu-expand { position: relative; display: inline-block; }
.context-menu-expand button {
  width: 36px;
  aspect-ratio: 1;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background: white;
  font-weight: 900;
  cursor: pointer;
}
.context-menu-expand ul {
  position: absolute;
  right: 0;
  top: calc(100% + 6px);
  width: 130px;
  margin: 0;
  padding: 6px;
  list-style: none;
  border-radius: 10px;
  background: white;
  box-shadow: 0 15px 30px rgb(0 0 0 / 18%);
  transform-origin: top right;
  transform: scale(.85);
  opacity: 0;
  pointer-events: none;
  transition: transform .16s ease, opacity .16s ease;
}
.context-menu-expand:hover ul, .context-menu-expand:focus-within ul {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}
.context-menu-expand li { padding: 9px 10px; border-radius: 6px; font-size: 13px; }
.context-menu-expand li:hover { background: #f1f5f9; }`,
    reducedMotion: `.context-menu-expand ul { transition: none; }`,
    note: 'マウスをホバーすると開きます。',
  },

  // 文字・テキスト
  {
    id: 'letter-stagger-in',
    referenceId: 'CSS-081',
    title: '文字の時間差登場',
    description: '1文字ずつ、下から時間差で浮かび上がる見出し。',
    category: '文字・テキスト',
    trigger: '一度だけ',
    tags: ['文字', 'delay', '登場'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<h2 class="letter-stagger-in" aria-label="ANIMATE"><span>A</span><span>N</span><span>I</span><span>M</span><span>A</span><span>T</span><span>E</span></h2>`,
    css: `.letter-stagger-in { margin: 0; font: 900 34px/1.2 sans-serif; }
.letter-stagger-in span {
  display: inline-block;
  opacity: 0;
  transform: translateY(16px);
  animation: letter-stagger-in .5s ease both;
}
.letter-stagger-in span:nth-child(1) { animation-delay: 0s; }
.letter-stagger-in span:nth-child(2) { animation-delay: .05s; }
.letter-stagger-in span:nth-child(3) { animation-delay: .1s; }
.letter-stagger-in span:nth-child(4) { animation-delay: .15s; }
.letter-stagger-in span:nth-child(5) { animation-delay: .2s; }
.letter-stagger-in span:nth-child(6) { animation-delay: .25s; }
.letter-stagger-in span:nth-child(7) { animation-delay: .3s; }
@keyframes letter-stagger-in { to { opacity: 1; transform: none; } }`,
    reducedMotion: `.letter-stagger-in span { animation: none; opacity: 1; transform: none; }`,
  },
  {
    id: 'gradient-text',
    referenceId: 'CSS-082',
    title: '動くグラデーション文字',
    description: '色の帯が文字の上を流れ続ける、華やかな見出し。',
    category: '文字・テキスト',
    trigger: 'ループ',
    tags: ['文字', 'グラデーション', 'background'],
    difficulty: 'かんたん',
    cost: '注意',
    html: `<h2 class="gradient-text">GRADIENT</h2>`,
    css: `.gradient-text {
  margin: 0;
  font: 900 36px/1.2 sans-serif;
  background: linear-gradient(90deg, #7c3aed, #ec4899, #f97316, #7c3aed);
  background-size: 300% auto;
  color: transparent;
  background-clip: text;
  animation: gradient-text-move 4s linear infinite;
}
@keyframes gradient-text-move { to { background-position: -300% 0; } }`,
    reducedMotion: `.gradient-text { animation: none; }`,
  },
  {
    id: 'number-counter',
    referenceId: 'CSS-083',
    title: '数字カウントアップ',
    description: '@propertyで、数値がなめらかに増えていく。',
    category: '文字・テキスト',
    trigger: 'ループ',
    tags: ['@property', 'カウンター', '数字'],
    difficulty: 'しっかり',
    cost: '注意',
    html: `<div class="number-counter"><span class="nc-num"></span> 人が利用中</div>`,
    css: `@property --count {
  syntax: '<integer>';
  inherits: false;
  initial-value: 0;
}
.number-counter { font: 800 24px/1 monospace; }
.number-counter .nc-num {
  --count: 0;
  counter-reset: num var(--count);
  animation: number-count 2.4s ease-out infinite;
}
.number-counter .nc-num::after { content: counter(num); }
@keyframes number-count {
  0% { --count: 0; }
  70%, 100% { --count: 2480; }
}`,
    reducedMotion: `.number-counter .nc-num { animation: none; --count: 2480; }`,
    browserNote: '@property が必要です(Safari 16.4以降)。未対応環境では数値が更新されません。',
  },
  {
    id: 'strikethrough-reveal',
    referenceId: 'CSS-084',
    title: '打ち消し線の描画',
    description: '価格改定などで、横線がすっと引かれる。',
    category: '文字・テキスト',
    trigger: '一度だけ',
    tags: ['打ち消し線', 'delay', '価格'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<p class="strikethrough-reveal">在庫あり <s>¥3,200</s> ¥2,400</p>`,
    css: `.strikethrough-reveal { margin: 0; font: 700 18px/1.6 sans-serif; }
.strikethrough-reveal s {
  position: relative;
  text-decoration: none;
  color: #94a3b8;
}
.strikethrough-reveal s::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 2px;
  background: #ef4444;
  transform: scaleX(0);
  transform-origin: left;
  animation: strike-draw .5s .3s ease both;
}
@keyframes strike-draw { to { transform: scaleX(1); } }`,
    reducedMotion: `.strikethrough-reveal s::after { animation: none; transform: scaleX(1); }`,
  },
  {
    id: 'highlight-marker',
    referenceId: 'CSS-085',
    title: '蛍光ペンハイライト',
    description: '重要な語句の背後を、蛍光ペンでなぞるように塗る。',
    category: '文字・テキスト',
    trigger: '一度だけ',
    tags: ['蛍光ペン', 'background', '強調'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<p class="highlight-marker">この部分が<mark>重要なポイント</mark>です。</p>`,
    css: `.highlight-marker { margin: 0; font-size: 17px; line-height: 1.8; }
.highlight-marker mark {
  background: linear-gradient(to right, #fde047 0%, #fde047 100%);
  background-repeat: no-repeat;
  background-size: 0% 55%;
  background-position: 0 88%;
  color: inherit;
  animation: highlight-draw .6s .2s ease both;
}
@keyframes highlight-draw { to { background-size: 100% 55%; } }`,
    reducedMotion: `.highlight-marker mark { animation: none; background-size: 100% 55%; }`,
  },
  {
    id: 'text-wave',
    referenceId: 'CSS-086',
    title: '文字の波打ち',
    description: '文字が順番に、波のように上下する。',
    category: '文字・テキスト',
    trigger: 'ループ',
    tags: ['文字', '波', 'delay'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="text-wave" aria-label="WAVING"><span>W</span><span>A</span><span>V</span><span>I</span><span>N</span><span>G</span></div>`,
    css: `.text-wave { font: 900 32px/1.2 sans-serif; }
.text-wave span {
  display: inline-block;
  animation: text-wave 1.6s ease-in-out infinite;
}
.text-wave span:nth-child(1) { animation-delay: 0s; }
.text-wave span:nth-child(2) { animation-delay: .08s; }
.text-wave span:nth-child(3) { animation-delay: .16s; }
.text-wave span:nth-child(4) { animation-delay: .24s; }
.text-wave span:nth-child(5) { animation-delay: .32s; }
.text-wave span:nth-child(6) { animation-delay: .4s; }
@keyframes text-wave {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-12px); }
}`,
    reducedMotion: `.text-wave span { animation: none; }`,
  },
  {
    id: 'text-glitch',
    referenceId: 'CSS-087',
    title: '文字のグリッチ',
    description: '赤と青の残像がずれて明滅する、エラー表現向けの文字。',
    category: '文字・テキスト',
    trigger: 'ループ',
    tags: ['グリッチ', 'clip-path', 'エラー'],
    difficulty: 'しっかり',
    cost: '注意',
    html: `<div class="text-glitch" data-text="ERROR">ERROR</div>`,
    css: `.text-glitch {
  position: relative;
  font: 900 34px/1.2 monospace;
  color: #111827;
}
.text-glitch::before, .text-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
}
.text-glitch::before {
  color: #ef4444;
  animation: glitch-1 2.4s infinite linear;
}
.text-glitch::after {
  color: #06b6d4;
  animation: glitch-2 2.4s infinite linear;
}
@keyframes glitch-1 {
  0%, 92%, 100% { clip-path: inset(0 0 100% 0); transform: translate(0); }
  93% { clip-path: inset(20% 0 40% 0); transform: translate(-3px, 1px); }
  95% { clip-path: inset(60% 0 10% 0); transform: translate(3px, -1px); }
  97% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 0); }
}
@keyframes glitch-2 {
  0%, 92%, 100% { clip-path: inset(100% 0 0 0); transform: translate(0); }
  93% { clip-path: inset(40% 0 30% 0); transform: translate(3px, -1px); }
  95% { clip-path: inset(15% 0 55% 0); transform: translate(-3px, 1px); }
  97% { clip-path: inset(65% 0 5% 0); transform: translate(2px, 0); }
}`,
    reducedMotion: `.text-glitch::before, .text-glitch::after { animation: none; clip-path: inset(100% 0 0 0); }`,
    note: 'data-text属性に本文と同じテキストを指定してください。',
  },
  {
    id: 'text-bounce-in',
    referenceId: 'CSS-088',
    title: '文字の弾む登場',
    description: '文字が1つずつ、弾みながら上から落ちてくる。',
    category: '文字・テキスト',
    trigger: '一度だけ',
    tags: ['文字', 'bounce', '登場'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<h2 class="text-bounce-in" aria-label="HELLO"><span>H</span><span>E</span><span>L</span><span>L</span><span>O</span></h2>`,
    css: `.text-bounce-in { margin: 0; font: 900 38px/1.2 sans-serif; }
.text-bounce-in span {
  display: inline-block;
  opacity: 0;
  transform: translateY(-30px);
  animation: text-bounce-in .6s cubic-bezier(.34,1.56,.64,1) both;
}
.text-bounce-in span:nth-child(1) { animation-delay: 0s; }
.text-bounce-in span:nth-child(2) { animation-delay: .06s; }
.text-bounce-in span:nth-child(3) { animation-delay: .12s; }
.text-bounce-in span:nth-child(4) { animation-delay: .18s; }
.text-bounce-in span:nth-child(5) { animation-delay: .24s; }
@keyframes text-bounce-in { to { opacity: 1; transform: none; } }`,
    reducedMotion: `.text-bounce-in span { animation: none; opacity: 1; transform: none; }`,
  },

  // 注目・バッジ
  {
    id: 'new-badge',
    referenceId: 'CSS-089',
    title: '新着バッジ',
    description: '角に貼り付いたバッジが、小さく脈打って目を引く。',
    category: '注目・バッジ',
    trigger: 'ループ',
    tags: ['バッジ', '新着', 'scale'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="new-badge-demo">お知らせ<span>NEW</span></div>`,
    css: `.new-badge-demo { position: relative; display: inline-block; padding: 10px 18px; border-radius: 10px; background: #f1f5f9; font-weight: 700; }
.new-badge-demo span {
  position: absolute;
  top: -10px;
  right: -14px;
  padding: 3px 8px;
  border-radius: 999px;
  background: #ef4444;
  color: white;
  font-size: 10px;
  font-weight: 900;
  animation: new-badge-pop 1.8s ease-in-out infinite;
}
@keyframes new-badge-pop {
  0%, 100% { transform: scale(1) rotate(-6deg); }
  50% { transform: scale(1.15) rotate(-6deg); }
}`,
    reducedMotion: `.new-badge-demo span { animation: none; }`,
  },
  {
    id: 'breathing-button',
    referenceId: 'CSS-090',
    title: '呼吸するボタン',
    description: '外側へ広がる光の輪で、主要な行動を誘導する。',
    category: '注目・バッジ',
    trigger: 'ループ',
    tags: ['ボタン', 'box-shadow', '誘導'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<button class="breathing-button">今すぐ始める</button>`,
    css: `.breathing-button {
  padding: 15px 32px;
  border: 0;
  border-radius: 999px;
  background: #2563eb;
  color: white;
  font-weight: 800;
  animation: breathing 2.2s ease-in-out infinite;
}
@keyframes breathing {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgb(37 99 235 / 45%); }
  50% { transform: scale(1.04); box-shadow: 0 0 0 10px rgb(37 99 235 / 0%); }
}`,
    reducedMotion: `.breathing-button { animation: none; }`,
  },
  {
    id: 'arrow-guide',
    referenceId: 'CSS-091',
    title: '矢印の誘導',
    description: '下方向への案内を、跳ねる矢印でさりげなく示す。',
    category: '注目・バッジ',
    trigger: 'ループ',
    tags: ['矢印', '誘導', 'transform'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="arrow-guide">こちら<span>↓</span></div>`,
    css: `.arrow-guide { display: inline-flex; flex-direction: column; align-items: center; gap: 4px; color: #2563eb; font-weight: 800; font-size: 13px; }
.arrow-guide span { font-size: 22px; animation: arrow-guide-bounce 1.2s ease-in-out infinite; }
@keyframes arrow-guide-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}`,
    reducedMotion: `.arrow-guide span { animation: none; }`,
  },
  {
    id: 'status-dot',
    referenceId: 'CSS-092',
    title: 'ステータスドット',
    description: 'オンライン状態を、じわりと広がる光の輪で示す。',
    category: '注目・バッジ',
    trigger: 'ループ',
    tags: ['ステータス', 'ドット', 'box-shadow'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="status-dot">オンライン</div>`,
    css: `.status-dot { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; color: #166534; }
.status-dot::before {
  content: "";
  width: 10px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 0 0 rgb(34 197 94 / 55%);
  animation: status-dot-pulse 1.8s infinite;
}
@keyframes status-dot-pulse { to { box-shadow: 0 0 0 6px rgb(34 197 94 / 0%); } }`,
    reducedMotion: `.status-dot::before { animation: none; }`,
  },
  {
    id: 'countdown-blink',
    referenceId: 'CSS-093',
    title: '期間限定の点滅',
    description: '緊急性を伝える、控えめな明滅バッジ。',
    category: '注目・バッジ',
    trigger: 'ループ',
    tags: ['期間限定', 'opacity', '強調'],
    difficulty: 'かんたん',
    cost: '軽い',
    html: `<div class="countdown-blink">残り3点 · 期間限定</div>`,
    css: `.countdown-blink {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 999px;
  background: #fef2f2;
  color: #b91c1c;
  font-weight: 800;
  font-size: 13px;
  animation: countdown-blink 1.3s ease-in-out infinite;
}
@keyframes countdown-blink { 50% { opacity: .45; } }`,
    reducedMotion: `.countdown-blink { animation: none; }`,
  },

  // 背景・装飾
  {
    id: 'aurora-glow',
    referenceId: 'CSS-094',
    title: 'オーロラ背景',
    description: '複数の光の塊が、ゆっくりとにじみながら漂う。',
    category: '背景・装飾',
    trigger: 'ループ',
    tags: ['オーロラ', 'filter', '背景'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<div class="aurora-glow"></div>`,
    css: `.aurora-glow {
  position: relative;
  width: 220px;
  height: 140px;
  border-radius: 20px;
  overflow: hidden;
  background: #0f172a;
}
.aurora-glow::before {
  content: "";
  position: absolute;
  inset: -40%;
  background:
    radial-gradient(circle at 30% 30%, rgb(124 58 237 / 70%), transparent 45%),
    radial-gradient(circle at 70% 60%, rgb(6 182 212 / 60%), transparent 45%),
    radial-gradient(circle at 40% 80%, rgb(236 72 153 / 55%), transparent 45%);
  filter: blur(20px);
  animation: aurora-drift 8s ease-in-out infinite;
}
@keyframes aurora-drift {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(6%, -4%) rotate(8deg); }
}`,
    reducedMotion: `.aurora-glow::before { animation: none; }`,
  },
  {
    id: 'scan-line-grid',
    referenceId: 'CSS-095',
    title: 'グリッド走査線',
    description: '方眼の背景を、光の帯が上から下へ走査する。',
    category: '背景・装飾',
    trigger: 'ループ',
    tags: ['グリッド', '走査線', 'SF'],
    difficulty: 'ふつう',
    cost: '注意',
    html: `<div class="scan-line-grid"></div>`,
    css: `.scan-line-grid {
  position: relative;
  width: 220px;
  height: 140px;
  border-radius: 14px;
  overflow: hidden;
  background-color: #0b1220;
  background-image:
    linear-gradient(rgb(56 189 248 / 18%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(56 189 248 / 18%) 1px, transparent 1px);
  background-size: 22px 22px;
}
.scan-line-grid::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -40px;
  height: 40px;
  background: linear-gradient(rgb(56 189 248 / 0%), rgb(56 189 248 / 55%), rgb(56 189 248 / 0%));
  animation: scan-line-move 2.6s linear infinite;
}
@keyframes scan-line-move { to { top: 140px; } }`,
    reducedMotion: `.scan-line-grid::after { animation: none; }`,
  },
  {
    id: 'particle-float',
    referenceId: 'CSS-096',
    title: 'パーティクル浮遊',
    description: '小さな粒が下から生まれ、消えながら立ち昇る。',
    category: '背景・装飾',
    trigger: 'ループ',
    tags: ['パーティクル', 'transform', '背景'],
    difficulty: 'ふつう',
    cost: '軽い',
    html: `<div class="particle-float"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>`,
    css: `.particle-float { position: relative; width: 220px; height: 140px; overflow: hidden; border-radius: 16px; background: linear-gradient(160deg, #1e293b, #0f172a); }
.particle-float i {
  position: absolute;
  bottom: -10px;
  width: 5px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgb(255 255 255 / 70%);
  animation: particle-rise 5s linear infinite;
}
.particle-float i:nth-child(1) { left: 8%; animation-delay: 0s; }
.particle-float i:nth-child(2) { left: 20%; animation-delay: -1s; }
.particle-float i:nth-child(3) { left: 32%; animation-delay: -2.4s; }
.particle-float i:nth-child(4) { left: 44%; animation-delay: -.6s; }
.particle-float i:nth-child(5) { left: 58%; animation-delay: -3.2s; }
.particle-float i:nth-child(6) { left: 70%; animation-delay: -1.8s; }
.particle-float i:nth-child(7) { left: 82%; animation-delay: -4s; }
.particle-float i:nth-child(8) { left: 92%; animation-delay: -2.5s; }
@keyframes particle-rise {
  0% { transform: translateY(0) scale(1); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: .4; }
  100% { transform: translateY(-160px) scale(.4); opacity: 0; }
}`,
    reducedMotion: `.particle-float i { animation: none; opacity: 0; }`,
  },
]
