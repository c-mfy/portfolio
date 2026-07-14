import CardGrid from "../components/CardGrid.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">things i've built</p>
        <h1>projects</h1>
        <p className="lede">
          a collection of what i've designed and engineered. click any card to
          read more.
        </p>
      </div>

      <CardGrid items={projects} basePath="/projects" />
    </section>
  );
}
