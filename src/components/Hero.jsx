import image3 from "../assets/images/gallery-3.png";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        src={image3}
        alt=""
        className="hero__image"
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <p className="eyebrow eyebrow--light">Curated UK day hikes</p>
        <h1 id="hero-title" className="hero__title">
          Find your way <span>into the wild.</span>
        </h1>
        <p className="hero__intro">
          Discover hand-picked hikes across the UK, from gentle countryside walks to mountain days.
        </p>
        <a className="button button--primary" href="#featured-trails">
          Explore trails
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <a className="hero__scroll-cue" href="#featured-trails">
        <span>Featured trails</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

export default Hero;
