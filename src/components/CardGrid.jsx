import Card from "./Card.jsx";
import "./CardGrid.css";

/* Pinterest-style masonry grid.
   - 3 columns on desktop, 2 on tablet, 1 on mobile (see CardGrid.css)
   props:
     - items: array of cards
     - basePath: "/projects" or "/art"
*/
export default function CardGrid({ items, basePath }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <Card key={item.id} item={item} basePath={basePath} />
      ))}
    </div>
  );
}
