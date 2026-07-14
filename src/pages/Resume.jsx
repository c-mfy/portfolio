import "./Resume.css";

/* Put your resume file at /public/resume.pdf and it will appear here.
   The download button and the "open in new tab" fallback use the same path. */
const RESUME_PATH = "/resume.pdf";

export default function Resume() {
  return (
    <section className="page resume">
      <div className="page-header resume-head">
        <div>
          <p className="eyebrow">the one-pager</p>
          <h1>resume</h1>
        </div>
        <a href={RESUME_PATH} download className="btn">
          download pdf ↓
        </a>
      </div>

      <div className="resume-frame">
        <object data={RESUME_PATH} type="application/pdf" width="100%" height="100%">
          {/* Fallback if the browser can't inline-render the PDF */}
          <div className="resume-fallback">
            <p>your browser can't preview pdfs inline.</p>
            <a href={RESUME_PATH} target="_blank" rel="noreferrer" className="btn">
              open resume in a new tab ↗
            </a>
          </div>
        </object>
      </div>
    </section>
  );
}
