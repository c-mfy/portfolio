import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects.js";
import { artworks } from "../data/artworks.js";
import "./GalleryDetail.css";

/* One detail page reused for both Projects and Art.
   props.kind: "project" | "art" — decides which dataset & back-link to use. */
export default function GalleryDetail({ kind }) {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(null);

  const isProject = kind === "project";
  const data = isProject ? projects : artworks;
  const basePath = isProject ? "/projects" : "/art";
  const backLabel = isProject ? "all projects" : "all art / designs";

  const item = data.find((d) => d.id === id);

  useEffect(() => {
    setActiveImage(null);
  }, [id]);

  // Unknown id → bounce back to the grid
  if (!item) return <Navigate to={basePath} replace />;

  // Works for both projects and art — just reads item.gallery either way
  const galleryImages = item.gallery || [];

  return (
    <article className="page detail">
      <Link to={basePath} className="detail-back">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M10 3l-5 5 5 5" fill="none" stroke="currentColor"
            strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {backLabel}
      </Link>

      <header className="detail-header">
        <h3>{item.title}</h3>
        <p className="detail-blurb">{item.blurb}</p>

        {item.tags?.length > 0 && (
          <div className="detail-tags">
            {item.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </header>

      <section className="detail-media" aria-label="Project images">
        {/* Thumbnail — NOT clickable/expandable, plain display only */}
        <div className="detail-hero">
          {item.image ? (
            <img src={item.image} alt={item.title} />
          ) : (
            <div className="detail-hero-placeholder">
              <span>project image here</span>
            </div>
          )}
        </div>

        {/* Process gallery — these ARE clickable/expandable */}
        {galleryImages.length > 0 && (
          <div className="detail-gallery" aria-label="Process photo gallery">
            {galleryImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                className="detail-gallery-item"
                onClick={() => setActiveImage(image)}
                aria-label={`Enlarge process photo ${index + 1}`}
              >
                <img src={image} alt={`${item.title} process ${index + 1}`} />
                <span className="detail-gallery-zoom" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        )}
      </section>

      <div className="detail-body">
        {item.detail?.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {item.links?.length > 0 && (
        <div className="detail-links">
          {item.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

      {activeImage && (
        <button
          type="button"
          className="detail-modal"
          onClick={() => setActiveImage(null)}
          aria-label="Close enlarged image"
        >
          <img src={activeImage} alt="Enlarged process view" />
        </button>
      )}
    </article>
  );
}