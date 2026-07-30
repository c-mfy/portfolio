import { useEffect } from "react";
import Lenis from "lenis";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Art from "./pages/Art.jsx";
import GalleryDetail from "./pages/GalleryDetail.jsx";
import Resume from "./pages/Resume.jsx";
import Photography from "./pages/Photography.jsx";
import Extras from "./pages/Extras.jsx";

export default function App() {
  const location = useLocation();
  const showFooter = location.pathname !== "/about";

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 1,
      infinite: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Analytics />
        <Routes>
          {/* Landing → About */}
          <Route path="/" element={<Navigate to="/about" replace />} />

          <Route path="/about" element={<About />} />

          {/* Projects: grid + detail pages */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<GalleryDetail kind="project" />} />

          {/* Art / Designs: grid + detail pages */}
          <Route path="/art" element={<Art />} />
          <Route path="/art/:id" element={<GalleryDetail kind="art" />} />

          {/* "More" dropdown destinations */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/extras" element={<Extras />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </>
  );
}
