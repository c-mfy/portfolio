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
  { type: "video", src: "", caption: "video #1 caption" },
  { type: "photo", src: "", caption: "photo #4 caption" },
  { type: "photo", src: "", caption: "photo #5 caption", span: "wide" },
];

function MediaItem({ item }) {
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
        <div className="gal-video">
          <iframe
            src={item.src}
            title={item.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="gal-placeholder gal-placeholder-video">
          <span>▶ video here</span>
        </div>
      )}
      <figcaption>{item.caption}</figcaption>
    </figure>
  );
}

export default function Photography() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">through my lens</p>
        <h1>photo / video</h1>
        <p className="lede">
          a little corner for the moments i capture and the clips i cut together
          — just for fun.
        </p>
      </div>

      <div className="gallery">
        {media.map((item, i) => (
          <MediaItem key={i} item={item} />
        ))}
      </div>
    </section>
  );
}
