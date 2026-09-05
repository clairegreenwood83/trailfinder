import { useState } from "react";
import trails from "../data/trails.js";
import TrailCard from "../components/TrailCard.jsx";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredTrails = trails.filter((trail) =>
    [trail.name, trail.region, trail.difficulty].some((value) =>
      value.toLowerCase().includes(normalizedSearchTerm),
    ),
  );

  return (
    <main id="main-content">
      <section className="explore section-shell">
        <div className="explore__heading">
          <h1>Find your next walk.</h1>
          <p className="explore__intro">
            Browse routes across Shropshire and North Wales, from shorter hill
            walks to more challenging mountain routes.
          </p>
        </div>

        <div className="explore__search">
          <label htmlFor="trail-search">Search trails</label>
          <input
            id="trail-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by trail, region or difficulty"
          />
        </div>

        {filteredTrails.length > 0 ? (
          <ul className="trail-grid" aria-label="Matching trails">
            {filteredTrails.map((trail) => (
              <li key={trail.id}>
                <TrailCard trail={trail} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="explore__empty" role="status">
            No trails found. Try a different search.
          </p>
        )}
      </section>
    </main>
  );
}

export default Explore;
