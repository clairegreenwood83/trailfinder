import trails from "../data/trails.js";
import TrailCard from "./TrailCard.jsx";

function Gallery() {
  const featuredTrails = trails.filter((trail) => trail.featured);

  return (
    <section id="featured-trails" className="featured-trails" aria-labelledby="featured-title">
      <div className="section-shell">
        <div className="featured-trails__heading">
          <div>
            <p className="eyebrow">Featured trails</p>
            <h2 id="featured-title">A few good places to begin.</h2>
          </div>
          <p>
            Three characterful routes, from wooded Shropshire hills to the high
            mountains of North Wales.
          </p>
        </div>

        <ul className="trail-grid" aria-label="Featured trails">
          {featuredTrails.map((trail) => (
            <li key={trail.id}>
              <TrailCard trail={trail} />
            </li>
          ))}
        </ul>

        <div className="featured-trails__footer">
          <a className="text-link" href="#top">
            Back to top
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 15 6-6 6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
