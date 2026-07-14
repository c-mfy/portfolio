import { useState } from "react";
import Piano from "../components/instruments/Piano.jsx";
import Guitar from "../components/instruments/Guitar.jsx";
import Flute from "../components/instruments/Flute.jsx";
import "./Extras.css";

const INSTRUMENTS = [
  { id: "piano", label: "🎹 piano", Component: Piano },
  { id: "guitar", label: "🎸 guitar", Component: Guitar },
  { id: "flute", label: "🎵 flute", Component: Flute },
];

/* Fun-fact cards — add or edit freely */
const FACTS = [
  {
    emoji: "🎮",
    title: "video games",
    text: "type about me here — favorite games and what i like about them.",
  },
  {
    emoji: "🎭",
    title: "cosplay",
    text: "i've made a few costumes and want to do a lot more. type about me here.",
  },
  {
    emoji: "🧵",
    title: "sewing",
    text: "quilts, bags, pajama pants — i make things. type about me here.",
  },
];

export default function Extras() {
  const [active, setActive] = useState("piano");
  const ActiveInstrument = INSTRUMENTS.find((i) => i.id === active).Component;

  return (
    <section className="page extras">
      <div className="page-header">
        <p className="eyebrow">off the clock</p>
        <h1>Extras</h1>
        <p className="lede">
          the stuff that doesn't fit on a resume — still a work in progress.
        </p>
      </div>

      {/* --- Music --- */}
      <div className="extras-block">
        <h2>music</h2>
        <p className="extras-note">
          i play piano, guitar, and flute — and once played in a band. try the
          instruments below.
        </p>

        <div className="instrument-tabs">
          {INSTRUMENTS.map((i) => (
            <button
              key={i.id}
              className={`instrument-tab ${active === i.id ? "on" : ""}`}
              onClick={() => setActive(i.id)}
            >
              {i.label}
            </button>
          ))}
        </div>

        <div className="instrument-stage">
          <ActiveInstrument />
        </div>
      </div>

      {/* --- Fun facts --- */}
      <div className="extras-block">
        <h2>a few more things</h2>
        <div className="facts-grid">
          {FACTS.map((f) => (
            <div className="fact-card" key={f.title}>
              <span className="fact-emoji">{f.emoji}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
