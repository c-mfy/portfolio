import { useState } from "react";
import "./Resume.css";

const RESUMES = [
  {
    id: "fullstack",
    label: "fullstack / backend",
    file: "/Xinyu_Su_SWE_Resume_Fullstack.pdf",
    download: "Xinyu_Su_SWE_Resume_Fullstack.pdf",
    updated: "october 2026",
  },
  {
    id: "frontend",
    label: "frontend",
    file: "/Xinyu_Su_SWE_Resume_Frontend.pdf",
    download: "Xinyu_Su_SWE_Resume_Frontend.pdf",
    updated: "october 2026",
  },
  {
    id: "gamedev",
    label: "game dev",
    file: "/Xinyu_Su_SWE_Resume_GameDev.pdf",
    download: "Xinyu_Su_SWE_Resume_GameDev.pdf",
    updated: "october 2026",
  },
];

export default function Resume() {
  const [activeId, setActiveId] = useState(RESUMES[0].id);

  let active = RESUMES.find((r) => r.id === activeId);
  if (!active) {
    active = RESUMES[0];
  }

  return (
    <section className="page resume">
      <div className="page-header resume-head">
        <div>
          <h3>resume</h3>
          <p className="eyebrow">last updated: {active.updated}</p>
        </div>
        <a href={active.file} download={active.download} className="btn">
          download pdf ↓
        </a>
      </div>

      <div className="resume-tabs" role="tablist" aria-label="Resume version">
        {RESUMES.map((resume) => {
          let className = "resume-tab";
          if (resume.id === activeId) {
            className = "resume-tab is-active";
          }

          return (
            <button
              key={resume.id}
              type="button"
              role="tab"
              aria-selected={resume.id === activeId}
              className={className}
              onClick={() => setActiveId(resume.id)}
            >
              {resume.label}
            </button>
          );
        })}
      </div>

      <div className="resume-frame">
        {/* key forces a remount so the pdf viewer actually reloads on switch */}
        <object
          key={active.id}
          data={active.file}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          {/* Fallback if the browser can't inline-render the PDF */}
          <div className="resume-fallback">
            <p>your browser can't preview pdfs inline.</p>
            <a href={active.file} target="_blank" rel="noreferrer" className="btn">
              open resume in a new tab ↗
            </a>
          </div>
        </object>
      </div>
    </section>
  );
}