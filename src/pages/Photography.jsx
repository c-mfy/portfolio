import { useEffect, useRef, useState } from "react";
import "./Photography.css";

/* =========================================================================
   GALLERY ITEMS — edit this array.
   type: "photo"  → src is an image path in /public/images
   type: "video"  → src is a YouTube/Vimeo EMBED url, or a local /videos/x.mp4
   span: optional "wide" or "tall" to make an item bigger in the mosaic.
   ========================================================================= */
const media = [
  { type: "photo", src: "", caption: "photo #1 caption", span: "wide" },
  { type: "photo", src: "", caption: "photo #2 caption" },
  { type: "photo", src: "", caption: "photo #3 caption", span: "tall" },
  { type: "video", src: "/videos/recap_video_by_xin.mov", caption: "2025-2026 recap video :)" },
  { type: "photo", src: "", caption: "photo #4 caption" },
  { type: "photo", src: "", caption: "photo #5 caption", span: "wide" },
];

function MediaItem({ item }) {
  const isEmbedVideo = item.type === "video" && /youtube|youtu\.be|vimeo/i.test(item.src);

  return (
    <figure className={`gal-item ${item.span || ""}`}>
      {item.type === "photo" ? (
        item.src ? (
          <img src={item.src} alt={item.caption} loading="lazy" />
        ) : (
          <div className="gal-placeholder">
            <span>photo here</span>
          </div>
        )
      ) : item.src ? (
        isEmbedVideo ? (
        <div className="gal-video">
          <iframe
            src={item.src}
            title={item.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        ) : (
          <LocalVideoItem item={item} />
        )
      ) : (
        <div className="gal-placeholder gal-placeholder-video">
          <span>▶ video here</span>
        </div>
      )}
      <figcaption>{item.caption}</figcaption>
    </figure>
  );
}

function LocalVideoItem({ item }) {
  const videoRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === videoRef.current);
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      return;
    }

    video.pause();
  }

  async function toggleFullscreen(event) {
    event.stopPropagation();

    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement === video) {
      await document.exitFullscreen();
      return;
    }

    await video.requestFullscreen();
  }

  return (
    <div className="gal-video gal-video-local" onClick={togglePlayback}>
      <video
        ref={videoRef}
        className="gal-video-element"
        controls={isFullscreen}
        playsInline
        preload="metadata"
      >
        <source src={item.src} />
        Your browser does not support the video tag.
      </video>

      <button
        type="button"
        className="gal-video-fullscreen"
        aria-label="Toggle fullscreen video"
        onClick={toggleFullscreen}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M2.5 6V2.5H6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 2.5h3.5V6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.5 10v3.5H10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 13.5H2.5V10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}

export default function Photography() {
  return (
    <section className="page">
      <div className="page-header">
        <h4 style={{ textAlign: "center" }}> -- PAGE WORK IN PROGRESS-- </h4>
        <h3>photo / video</h3>
        <p className="lede">
          I love to capture the feeling of living my life through photos and videos. I take most dslr photos when I'm traveling, since I don't carry a big camera in my everyday life. The digi photos and videos are more for vibes and memories.
        </p>
        <p className="lede">Instagram: @xinn.photos</p>
      </div>

      <div className="gallery">
        {media.map((item, i) => (
          <MediaItem key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
