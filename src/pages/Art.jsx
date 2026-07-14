import CardGrid from "../components/CardGrid.jsx";
import { artworks } from "../data/artworks.js";

export default function Art() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">made by hand & pixel</p>
        <h1>art / designs</h1>
        <p className="lede">
          illustration, product design, and visual experiments. click a card
          for the full piece.
        </p>
      </div>

      <CardGrid items={artworks} basePath="/art" />
    </section>
  );
}
