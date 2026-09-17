import CardGrid from "../components/CardGrid.jsx";
import { artworks } from "../data/artworks.js";

export default function Art() {
  return (
    <section className="page">
      <div className="page-header">
        {/*<p className="eyebrow">creatives</p>*/}
        <h3>art / designs</h3>
        <p className="lede">
          things i've designed and created. click any to see the process!
        </p>
      </div>

      <CardGrid items={artworks} basePath="/art" />
    </section>
  );
}
