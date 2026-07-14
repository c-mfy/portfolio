import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects.js";
import { artworks } from "../data/artworks.js";
import "./GalleryDetail.css";

/* One detail page reused for both Projects and Art.
   props.kind: "project" | "art" — decides which dataset & back-link to use. */
export default function GalleryDetail({ kind }) {
  const { id } = useParams();

  const isProject = kind === "project";
  const data = isProject ? projects : artworks;
  const basePath = isProject ? "/projects" : "/art";
  const backLabel = isProject ? "all projects" : "all art / designs";

  const item = data.find((d) => d.id === id);

  // Unknown id → bounce back to the grid
  if (!item) return <Navigate to={basePath} replace />;

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
        <h1>{item.title}</h1>
        <p className="detail-blurb">{item.blurb}</p>

        {item.tags?.length > 0 && (
          <div className="detail-tags">
            {item.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </header>

      <div className="detail-hero">
        {item.image ? (
          <img src={item.image} alt={item.title} />
        ) : (
          <div className="detail-hero-placeholder">
            <span>project image here</span>
          </div>
        )}
      </div>

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
    </article>
  );
}
