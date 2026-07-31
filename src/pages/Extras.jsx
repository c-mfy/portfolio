import { useEffect, useMemo, useState, useRef } from "react";
import { GripVertical, Check, Users } from "lucide-react";
import Counter from "../components/Counter.jsx";
import Piano from "../components/instruments/Piano.jsx";
import Guitar from "../components/instruments/Guitar.jsx";
import Flute from "../components/instruments/Flute.jsx";
import "./Extras.css";

const INSTRUMENTS = [
  { id: "piano", label: "piano", Component: Piano },
  { id: "guitar", label: "guitar", Component: Guitar },
  { id: "flute", label: "flute", Component: Flute },
];

/* Fun-fact cards — add or edit freely */
const INITIAL_SPORTS = ["badminton", "soccer", "figure skating", "tennis", "snowboarding", "skiing", "running"];
const ROW_HEIGHT = 48;

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
  const [sports, setSports] = useState(INITIAL_SPORTS);
  const [dragIndex, setDragIndex] = useState(null);
  const [overIndex, setOverIndex] = useState(null);
  const [dragOffsetY, setDragOffsetY] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [allSubmissions, setAllSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const dragStartY = useRef(0);

  const [interestCounts, setInterestCounts] = useState(() => {
    if (typeof window === "undefined") {
      return {
        piano: 0,
        guitar: 0,
        flute: 0,
        "video games": 0,
        cosplay: 0,
        sewing: 0,
      };
    }

    try {
      const saved = window.localStorage.getItem("extras-interest-counts");
      return saved
        ? JSON.parse(saved)
        : {
            piano: 0,
            guitar: 0,
            flute: 0,
            "video games": 0,
            cosplay: 0,
            sewing: 0,
          };
    } catch {
      return {
        piano: 0,
        guitar: 0,
        flute: 0,
        "video games": 0,
        cosplay: 0,
        sewing: 0,
      };
    }
  });

  useEffect(() => {
    window.localStorage.setItem("extras-interest-counts", JSON.stringify(interestCounts));
  }, [interestCounts]);

  const ActiveInstrument = useMemo(
    () => INSTRUMENTS.find((i) => i.id === active).Component,
    [active]
  );

  const incrementInterest = (title) => {
    setInterestCounts((prev) => ({ ...prev, [title]: (prev[title] || 0) + 1 }));
  };

  useEffect(() => {
    async function loadSubmissions() {
      try {
        const saved = window.localStorage.getItem("extras-sports-rankings");
        if (!saved) {
          setAllSubmissions([]);
          return;
        }

        const parsed = JSON.parse(saved);
        setAllSubmissions(parsed);
      } catch {
        setAllSubmissions([]);
      } finally {
        setLoading(false);
      }
    }

    loadSubmissions();
  }, []);

  function reorder(from, to) {
    setSports((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }

  function handlePointerDown(index, event) {
    if (submitted) return;
    event.preventDefault();

    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    dragStartY.current = clientY;
    setDragIndex(index);
    setOverIndex(index);
    setDragOffsetY(0);

    function onMove(moveEvent) {
      const y = moveEvent.touches ? moveEvent.touches[0].clientY : moveEvent.clientY;
      const delta = y - dragStartY.current;
      setDragOffsetY(delta);
      const shift = Math.round(delta / ROW_HEIGHT);
      const nextOver = Math.min(sports.length - 1, Math.max(0, index + shift));
      setOverIndex(nextOver);
    }

    function onUp() {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);

      setDragIndex((currentIndex) => {
        setOverIndex((currentOver) => {
          if (currentIndex !== null && currentOver !== null && currentIndex !== currentOver) {
            reorder(currentIndex, currentOver);
          }
          return null;
        });
        return null;
      });
      setDragOffsetY(0);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
  }

  function handleSubmit() {
    const submission = {
      id: Date.now().toString(),
      ranking: sports,
      submittedAt: Date.now(),
    };

    const nextSubmissions = [...allSubmissions, submission];
    setAllSubmissions(nextSubmissions);
    window.localStorage.setItem("extras-sports-rankings", JSON.stringify(nextSubmissions));
    setSubmitted(true);
  }

  function getConsensus() {
    const totals = {};
    const counts = {};

    allSubmissions.forEach((sub) => {
      sub.ranking.forEach((sport, index) => {
        totals[sport] = (totals[sport] || 0) + index;
        counts[sport] = (counts[sport] || 0) + 1;
      });
    });

    return Object.keys(totals)
      .map((sport) => ({ sport, avg: totals[sport] / counts[sport] }))
      .sort((a, b) => a.avg - b.avg);
  }

  const consensus = allSubmissions.length > 0 ? getConsensus() : [];

  return (
    <section className="page extras">
      <div className="page-header">
        <h4 style={{ textAlign: "center" }}> -- PAGE WORK IN PROGRESS-- </h4>
        <h3>extras</h3>
        <p className="lede">
          WIP - stuff that i'm actually interested in but my resume doesn't show. 
        </p>
      </div>

      {/* --- Music --- */}
      <div className="extras-block">
        <h3>music</h3>
        <p className="extras-note">
          i play piano (10+ years of pain), guitar (started a band for fun), and flute (first chair and all-state events). try the
          instruments below that my friend claude code generated. #agenticworkflow
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

      {/* --- Sports --- */}
      <div className="extras-block">
        <h3>sports</h3>
        <p className="extras-note">
          These are all the sports that I've tried before, ranked from favorite to least favorite! Show me your favorites by dragging each sport into place and compare with others.
        </p>

        <div className="sports-ranking-widget">
          <div className="sports-ranking-content">
            <div className="sports-ranking-column">
              <div className="sports-ranking-list" style={{ height: sports.length * ROW_HEIGHT - 8 }}>
                {sports.map((sport, index) => {
                  const isDragging = dragIndex === index;
                  let translateY = index * ROW_HEIGHT;

                  if (isDragging) {
                    translateY = index * ROW_HEIGHT + dragOffsetY;
                  } else if (dragIndex !== null && overIndex !== null) {
                    if (dragIndex < index && index <= overIndex) {
                      translateY = (index - 1) * ROW_HEIGHT;
                    } else if (dragIndex > index && index >= overIndex) {
                      translateY = (index + 1) * ROW_HEIGHT;
                    }
                  }

                  const displayRank =
                    dragIndex !== null && overIndex !== null
                      ? isDragging
                        ? overIndex + 1
                        : dragIndex < index && index <= overIndex
                          ? index
                          : dragIndex > index && index >= overIndex
                            ? index + 2
                            : index + 1
                      : index + 1;

                  return (
                    <div
                      key={sport}
                      className={`sports-ranking-row ${isDragging ? "dragging" : ""}`}
                      onMouseDown={(event) => handlePointerDown(index, event)}
                      onTouchStart={(event) => handlePointerDown(index, event)}
                      style={{ transform: `translateY(${translateY}px)` }}
                    >
                      <span className="sports-rank">{displayRank}</span>
                      {!submitted && <GripVertical size={16} className="sports-handle" />}
                      <span className="sports-label">{sport}</span>
                    </div>
                  );
                })}
              </div>

              {!submitted ? (
                <button className="sports-submit-btn" onClick={handleSubmit}>
                  submit my ranking
                </button>
              ) : (
                <div className="sports-submit-success">
                  <Check size={15} /> submitted — your vote is saved.
                </div>
              )}
            </div>

            {submitted && (
              <div className="sports-consensus">
                <div className="sports-consensus-title">
                  <Users size={14} />
                  {loading ? "loading submissions..." : `${allSubmissions.length} submission${allSubmissions.length === 1 ? "" : "s"} — average ranking`}
                </div>
                {!loading && consensus.length > 0 && (
                  <div className="sports-consensus-list">
                    {consensus.map((entry, index) => (
                      <div key={entry.sport} className="sports-consensus-item">
                        <span>{index + 1}. {entry.sport}</span>
                        <span className="sports-consensus-average">avg pos {(entry.avg + 1).toFixed(1)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- Fun facts --- */}
      <div className="extras-block">
        <h3>a few more things</h3>
        <div className="facts-grid">
          {FACTS.map((f) => (
            <div className="fact-card" key={f.title}>
              <div className="fact-card-top">
                <span className="fact-emoji">{f.emoji}</span>
                <Counter
                  value={interestCounts[f.title]}
                  label={f.title}
                  onIncrement={() => incrementInterest(f.title)}
                />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
