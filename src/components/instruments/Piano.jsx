import { useState, useEffect, useCallback } from "react";
import { noteToFreq, playTone } from "./audio.js";
import "./Piano.css";

/* One octave, C4 → C5. Each key maps to a keyboard shortcut too. */
const KEYS = [
  { note: "C4", type: "white", key: "a" },
  { note: "C#4", type: "black", key: "w" },
  { note: "D4", type: "white", key: "s" },
  { note: "D#4", type: "black", key: "e" },
  { note: "E4", type: "white", key: "d" },
  { note: "F4", type: "white", key: "f" },
  { note: "F#4", type: "black", key: "t" },
  { note: "G4", type: "white", key: "g" },
  { note: "G#4", type: "black", key: "y" },
  { note: "A4", type: "white", key: "h" },
  { note: "A#4", type: "black", key: "u" },
  { note: "B4", type: "white", key: "j" },
  { note: "C5", type: "white", key: "k" },
];

/* left % position for each black key, centered over the gap */
const BLACK_LEFT = { "C#4": 11, "D#4": 23.5, "F#4": 48.5, "G#4": 61, "A#4": 73.5 };

export default function Piano() {
  const [active, setActive] = useState(null);

  const press = useCallback((note) => {
    playTone(noteToFreq(note), { type: "triangle", duration: 0.6, volume: 0.32 });
    setActive(note);
    setTimeout(() => setActive((a) => (a === note ? null : a)), 180);
  }, []);

  // Keyboard support
  useEffect(() => {
    const down = (e) => {
      if (e.repeat) return;
      const match = KEYS.find((k) => k.key === e.key.toLowerCase());
      if (match) press(match.note);
    };
    window.addEventListener("keydown", down);
    return () => window.removeEventListener("keydown", down);
  }, [press]);

  const whiteKeys = KEYS.filter((k) => k.type === "white");
  const blackKeys = KEYS.filter((k) => k.type === "black");

  return (
    <div className="piano" role="group" aria-label="Playable piano">
      <div className="piano-keys">
        {whiteKeys.map((k) => (
          <button
            key={k.note}
            className={`pkey white ${active === k.note ? "on" : ""}`}
            onPointerDown={() => press(k.note)}
            aria-label={k.note}
          >
            <span className="pkey-label">{k.key}</span>
          </button>
        ))}

        {blackKeys.map((k) => (
          <button
            key={k.note}
            className={`pkey black ${active === k.note ? "on" : ""}`}
            style={{ left: `${BLACK_LEFT[k.note]}%` }}
            onPointerDown={(e) => { e.stopPropagation(); press(k.note); }}
            aria-label={k.note}
          >
            <span className="pkey-label">{k.key}</span>
          </button>
        ))}
      </div>
      <p className="instrument-hint">Click the keys or use your keyboard (a–k)</p>
    </div>
  );
}
