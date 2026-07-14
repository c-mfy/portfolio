import { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

/* The "More" dropdown items — add/remove here freely */
const MORE_LINKS = [
  { to: "/resume", label: "resume" },
  { to: "/photography", label: "photo / video" },
  { to: "/extras", label: "extras" },
];

export default function Navbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const moreRef = useRef(null);

  /* Close the "More" dropdown when clicking outside of it */
  useEffect(() => {
    function handleClick(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const closeAll = () => {
    setMoreOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        {/* Brand — replace with your name or a logo */}
        <Link to="/about" className="nav-brand" onClick={closeAll}>
          xinyu su
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          className="nav-burger"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <NavLink to="/about" className="nav-link" onClick={closeAll}>
            about me
          </NavLink>
          <NavLink to="/projects" className="nav-link" onClick={closeAll}>
            projects
          </NavLink>
          <NavLink to="/art" className="nav-link" onClick={closeAll}>
            art / designs
          </NavLink>

          {/* More dropdown */}
          <div className="nav-more" ref={moreRef}>
            <button
              className="nav-link nav-more-btn"
              aria-haspopup="true"
              aria-expanded={moreOpen}
              onClick={() => setMoreOpen((v) => !v)}
            >
              more
              <svg
                className={`chev ${moreOpen ? "up" : ""}`}
                width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"
              >
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor"
                  strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {moreOpen && (
              <div className="nav-dropdown">
                {MORE_LINKS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="nav-dropdown-link"
                    onClick={closeAll}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
