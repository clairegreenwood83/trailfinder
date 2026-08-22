function TrailCard({ trail }) {
  return (
    <article className="trail-card">
      <img
        className="trail-card__image"
        src={trail.image}
        alt={trail.imageAlt}
        loading="lazy"
      />
      <div className="trail-card__gradient" aria-hidden="true" />

      <div className="trail-card__content">
        <p className="trail-card__region">{trail.region}</p>
        <h3>{trail.name}</h3>
        <dl className="trail-card__facts">
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
    </article>
  );
}

export default TrailCard;
