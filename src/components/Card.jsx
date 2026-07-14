import { Link } from "react-router-dom";
import "./Card.css";

/* A single Pinterest-style card.
   props:
     - item: { id, title, blurb, tags, image }
     - basePath: "/projects" or "/art"  → builds the detail link
*/
export default function Card({ item, basePath }) {
  return (
    <Link to={`${basePath}/${item.id}`} className="card">
      <div className="card-thumb">
        {item.image ? (
          <img src={item.image} alt={item.title} loading="lazy" />
        ) : (
          <div className="card-thumb-placeholder">
            <span>{item.title}</span>
          </div>
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-blurb">{item.blurb}</p>

        {item.tags?.length > 0 && (
          <div className="card-tags">
            {item.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
