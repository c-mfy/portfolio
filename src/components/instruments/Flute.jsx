import { useState, useCallback } from "react";
import { noteToFreq, playFlute } from "./audio.js";
import "./Flute.css";

/* A simple one-octave flute scale. */
const NOTES = ["C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6"];

export default function Flute() {
  const [active, setActive] = useState(null);

  const blow = useCallback((note) => {
    playFlute(noteToFreq(note));
    setActive(note);
    setTimeout(() => setActive((a) => (a === note ? null : a)), 260);
  }, []);

  return (
    <div className="flute" role="group" aria-label="Playable flute">
      <div className="flute-body">
        <span className="flute-mouth" aria-hidden="true" />
        {NOTES.map((note) => (
          <button
            key={note}
            className={`flute-hole ${active === note ? "on" : ""}`}
            onPointerDown={() => blow(note)}
            aria-label={note}
          />
        ))}
      </div>
      <p className="instrument-hint">Tap the holes to play a note</p>
    </div>
  );
}
