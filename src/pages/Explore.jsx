import { useState } from "react";
import trails from "../data/trails.js";
import TrailCard from "../components/TrailCard.jsx";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [distance, setDistance] = useState("all");
  const [elevation, setElevation] = useState("all");

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredTrails = trails.filter((trail) => {
    const matchesSearch = [trail.name, trail.region, trail.difficulty].some((value) => value.toLowerCase().includes(normalizedSearchTerm),
  );

  const matchesDifficulty = 
    difficulty === "all" || trail.difficulty === difficulty;

  const trailElevation = parseFloat(trail.elevationGain);
  const matchesElevation = 
    elevation === "all" ||
    (elevation === "low" && trailElevation < 300) ||
    (elevation === "medium" && trailElevation >= 300 && trailElevation <= 600) ||
    (elevation === "high" && trailElevation > 600);
  
  const trailDistance = parseFloat(trail.distance);
  const matchesDistance = 
    distance === "all" ||
    (distance === "short" && trailDistance < 5) ||
    (distance === "medium" && trailDistance >= 5 && trailDistance <= 10) ||
    (distance === "long" && trailDistance >10);

  return matchesSearch && matchesDifficulty && matchesDistance && matchesElevation;
  });

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
        <div className="filters">
          <label>
            <select
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
            >
              <option value="all">All difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
          <label>
            <select
              value={distance}
              onChange={(event) => setDistance(event.target.value)}
            >
              <option value="all">Any distance</option>
              <option value="short">Under 5 km</option>
              <option value="medium">5–10 km</option>
              <option value="long">10+ km</option>
            </select>
          </label>
          <label>
            <select
              value={elevation}
              onChange={(event) => setElevation(event.target.value)}
            >
              <option value="all">Any elevation</option>
              <option value="low">Under 300 m</option>
              <option value="medium">300–600 m</option>
              <option value="high">600+ m</option>
            </select>
          </label>
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
