import { Link, useParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
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

  const startPosition = [
    trail.startPoint.latitude,
    trail.startPoint.longitude,
  ];

  return (
    <main id="main-content">
      <section className="trail-details section-shell">
        <Link className="text-link trail-details__back" to="/explore">
          ← Back to Explore
        </Link>

        <div className="trail-details__heading">
          <p className="eyebrow eyebrow--light">{trail.region}</p>
          <h1>{trail.name}</h1>
        </div>

        <div className="trail-details__layout">
          <img src={trail.image} alt={trail.imageAlt} />
          <div className="trail-details__content">
            <dl className="trail-details__facts">
              <div>
                <dt>Difficulty</dt>
                <dd>{trail.difficulty}</dd>
              </div>
              <div>
                <dt>Duration</dt>
                <dd>{trail.duration}</dd>
              </div>
              <div>
                <dt>Distance</dt>
                <dd>{trail.distance}</dd>
              </div>
              <div>
                <dt>Elevation</dt>
                <dd>{trail.elevation}</dd>
              </div>
              <div>
                <dt>Start point</dt>
                <dd>{trail.startPoint.name}</dd>
              </div>
            </dl>

            <MapContainer
              key={trail.id}
              className="trail-details__map"
              center={startPosition}
              zoom={14}
              scrollWheelZoom={false}
              aria-label={`${trail.startPoint.name} start point map`}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={startPosition}
                title={trail.startPoint.name}
                alt={`${trail.startPoint.name} start point`}
              >
                <Popup>{trail.startPoint.name}</Popup>
              </Marker>
            </MapContainer>
          </div>

          {trail.description && (
            <section className="trail-details__description">
              {trail.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </section>
          )}
        </div>
      </section>
    </main>
  );
}

export default TrailDetails;
