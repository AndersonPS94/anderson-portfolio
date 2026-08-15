/* BLUEPRINT OBSIDIAN — Efeitos sonoros de UI via Web Audio API.
   Sons sintetizados (sem arquivos externos): tick suave no hover, click mais
   definido no acionamento. Volume baixo, respeita prefers-reduced-motion e
   preferência persistente do usuário (soundEnabled em localStorage). */

const STORAGE_KEY = "soundEnabled";
const HOVER_THROTTLE_MS = 120;

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return null;
  if (!("AudioContext" in window || "webkitAudioContext" in window)) return null;
  if (!ctx) {
    const Ctx = (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    ctx = new Ctx();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export function isSoundEnabled(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored !== null) return stored === "1";
  return true;
}

export function setSoundEnabled(enabled: boolean) {
  localStorage.setItem(STORAGE_KEY, enabled ? "1" : "0");
}

/* Tick sutil de hover: oscilador curto, frequência média-alta, envelope rápido. */
function playHoverTone() {
  const ac = getCtx();
  if (!ac) return;
  const now = ac.currentTime;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(1240, now);
  osc.frequency.exponentialRampToValueAtTime(980, now + 0.05);
  const vol = 0.03;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(vol, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
  osc.connect(gain).connect(ac.destination);
  osc.start(now);
  osc.stop(now + 0.07);
}

/* Click mais definido: dois componentes (corpo + "click" de alta freq.). */
function playClickTone() {
  const ac = getCtx();
  if (!ac) return;
  const now = ac.currentTime;

  // Corpo grave curto
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(320, now);
  osc.frequency.exponentialRampToValueAtTime(160, now + 0.09);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.07, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
  osc.connect(gain).connect(ac.destination);
  osc.start(now);
  osc.stop(now + 0.12);

  // Transiente agudo (o "tic" do click)
  const t = ac.createOscillator();
  const g = ac.createGain();
  t.type = "triangle";
  t.frequency.setValueAtTime(2600, now);
  t.frequency.exponentialRampToValueAtTime(1400, now + 0.03);
  g.gain.setValueAtTime(0.045, now);
  g.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
  t.connect(g).connect(ac.destination);
  t.start(now);
  t.stop(now + 0.05);
}

/* Debounce de hover para não spammar o tick em movimentação contínua. */
let lastHoverAt = 0;
export function playHover() {
  if (!isSoundEnabled()) return;
  const now = performance.now();
  if (now - lastHoverAt < HOVER_THROTTLE_MS) return;
  lastHoverAt = now;
  playHoverTone();
}

export function playClick() {
  if (!isSoundEnabled()) return;
  playClickTone();
}
