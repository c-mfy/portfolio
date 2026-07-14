/* =========================================================================
   audio.js — tiny Web Audio helper shared by the instruments.
   No libraries needed. The AudioContext is created lazily on first use
   so browsers allow sound (they block audio until a user interacts).
   ========================================================================= */

let ctx = null;

export function getCtx() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

/* Convert a note name like "C4" or "F#5" to a frequency in Hz. */
const SEMITONES = { C: 0, "C#": 1, D: 2, "D#": 3, E: 4, F: 5, "F#": 6, G: 7, "G#": 8, A: 9, "A#": 10, B: 11 };

export function noteToFreq(note) {
  const match = /^([A-G]#?)(\d)$/.exec(note);
  if (!match) return 440;
  const [, name, octave] = match;
  const n = SEMITONES[name] + (Number(octave) + 1) * 12; // MIDI number
  return 440 * Math.pow(2, (n - 69) / 12); // A4 = 440Hz, MIDI 69
}

/* Generic note player with a simple ADSR envelope.
   opts: { type, duration, attack, release, volume } */
export function playTone(freq, opts = {}) {
  const {
    type = "sine",
    duration = 0.9,
    attack = 0.01,
    release = 0.3,
    volume = 0.3,
  } = opts;

  const ac = getCtx();
  const now = ac.currentTime;

  const osc = ac.createOscillator();
  const gain = ac.createGain();

  osc.type = type;
  osc.frequency.value = freq;

  // ADSR-ish envelope
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + release);

  osc.connect(gain).connect(ac.destination);
  osc.start(now);
  osc.stop(now + duration + release);
}

/* A plucky, decaying tone — used for the guitar. */
export function playPluck(freq, opts = {}) {
  const { duration = 1.4, volume = 0.32 } = opts;
  const ac = getCtx();
  const now = ac.currentTime;

  const osc = ac.createOscillator();
  const gain = ac.createGain();
  const filter = ac.createBiquadFilter();

  osc.type = "sawtooth";
  osc.frequency.value = freq;

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(3500, now);
  filter.frequency.exponentialRampToValueAtTime(600, now + duration);

  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(filter).connect(gain).connect(ac.destination);
  osc.start(now);
  osc.stop(now + duration);
}

/* A breathy, sustained tone with gentle vibrato — used for the flute. */
export function playFlute(freq, opts = {}) {
  const { duration = 1.1, volume = 0.25 } = opts;
  const ac = getCtx();
  const now = ac.currentTime;

  const osc = ac.createOscillator();
  const gain = ac.createGain();
  const vibrato = ac.createOscillator();
  const vibratoGain = ac.createGain();

  osc.type = "sine";
  osc.frequency.value = freq;

  // vibrato
  vibrato.frequency.value = 5;
  vibratoGain.gain.value = 4;
  vibrato.connect(vibratoGain).connect(osc.frequency);

  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume, now + 0.08);
  gain.gain.setValueAtTime(volume, now + duration - 0.2);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain).connect(ac.destination);
  osc.start(now);
  vibrato.start(now);
  osc.stop(now + duration);
  vibrato.stop(now + duration);
}
