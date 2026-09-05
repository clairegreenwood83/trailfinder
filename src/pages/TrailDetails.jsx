import { Link, useParams } from "react-router-dom";
import trails from "../data/trails.js";

function TrailDetails() {
  const { trailId } = useParams();
  const trail = trails.find((item) => item.id === trailId);

  if (!trail) {
    return (
      <main id="main-content">
        <section className="trail-details section-shell">
          <p className="eyebrow eyebrow--light">Trail not found</p>
          <h1>We couldn&apos;t find that trail.</h1>
          <p>The trail may not exist, or its address may have changed.</p>
          <Link className="text-link" to="/explore">
            Back to Explore
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main id="main-content">
      <section className="trail-details section-shell">
        <Link className="text-link trail-details__back" to="/explore">
          ← Back to Explore
        </Link>

        <div className="trail-details__layout">
          <img src={trail.image} alt={trail.imageAlt} />

          <div className="trail-details__content">
            <p className="eyebrow eyebrow--light">{trail.region}</p>
            <h1>{trail.name}</h1>

            <dl className="trail-details__facts">
              <div>
                <dt>Difficulty</dt>
                <dd>{trail.difficulty}</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>{trail.duration}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TrailDetails;
