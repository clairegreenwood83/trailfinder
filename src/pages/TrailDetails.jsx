import { Link, useParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import trails from "../data/trails.js";
import { useEffect, useState } from "react";
import clearIcon from "@meteocons/svg/fill/clear-day.svg";
import cloudyIcon from "@meteocons/svg/fill/cloudy.svg";
import partlyCloudyIcon from "@meteocons/svg/fill/partly-cloudy-day.svg";
import thermometerIcon from "@meteocons/svg/fill/thermometer.svg";


function TrailDetails() {
  const { trailId } = useParams();
  const trail = trails.find((item) => item.id === trailId);
  const [weather, setWeather] = useState(null);

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

  useEffect(() => {
    const latitude = trail.startPoint.latitude;
    const longitude = trail.startPoint.longitude;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setWeather(data.current));
  }, [trail]);

  function getWeatherIcon(weatherCode) {
    if (weatherCode === 0) {
      return clearIcon;
    }

    if (weatherCode === 1) {
      return clearIcon;
    }

    if (weatherCode === 2) {
      return partlyCloudyIcon;
    }

    if (weatherCode === 3) {
      return cloudyIcon;
    }
  };

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
                <dt>Elevation Gain</dt>
                <dd>{trail.elevationGain}</dd>
              </div>
              <div>
                <dt>Start point</dt>
                <dd>{trail.startPoint.name}</dd>
              </div>
              <div>
                <dt>Route Type</dt>
                <dd>{trail.routeType}</dd>
              </div>
            </dl>

            {weather && (
              <div className="weather">
                <div className="text-[var(--rust-light)]">Current weather</div>
                <div className="weather-details">
                  <div className="weather__temperature">
                    <p>{weather.temperature_2m}°C</p>
                  </div>
                  <img className="weather_icon"
                    src={getWeatherIcon(weather.weather_code)}
                    alt={getWeatherIcon(weather.weather_code)} 
                  />
                </div>
              </div>
            )}

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
              {trail.route && <Polyline positions={trail.route} />}
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
