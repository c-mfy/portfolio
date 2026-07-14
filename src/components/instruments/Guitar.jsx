import { useState, useCallback } from "react";
import { noteToFreq, playPluck } from "./audio.js";
import "./Guitar.css";

/* Standard tuning, low → high. */
const STRINGS = [
  { note: "E2", label: "E" },
  { note: "A2", label: "A" },
  { note: "D3", label: "D" },
  { note: "G3", label: "G" },
  { note: "B3", label: "B" },
  { note: "E4", label: "e" },
];

export default function Guitar() {
  const [vibrating, setVibrating] = useState(null);

  const pluck = useCallback((note) => {
    playPluck(noteToFreq(note));
    setVibrating(note);
    setTimeout(() => setVibrating((v) => (v === note ? null : v)), 400);
  }, []);

  return (
    <div className="guitar" role="group" aria-label="Playable guitar strings">
      <div className="guitar-body">
        {STRINGS.map((s, i) => (
          <button
            key={s.note}
            className="gstring-row"
            onPointerEnter={() => pluck(s.note)} /* strum by dragging across */
            onPointerDown={() => pluck(s.note)}
            aria-label={`String ${s.label}`}
          >
            <span className="gstring-label">{s.label}</span>
            <span
              className={`gstring ${vibrating === s.note ? "vibe" : ""}`}
              style={{ height: `${1 + i * 0.6}px` }}
            />
          </button>
        ))}
      </div>
      <p className="instrument-hint">Click a string — or drag across to strum</p>
    </div>
  );
}
