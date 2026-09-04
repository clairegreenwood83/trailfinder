import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateNavigation = () => setHasScrolled(window.scrollY > 100);

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });

    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  return (
    <header className={`site-header ${hasScrolled ? "site-header--scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="wordmark" to="/" aria-label="TrailFinder home">
          TrailFinder
        </Link>

        <Link className="nav-link" to="/explore">
          Explore
        </Link>
      </nav>
    </header>
  );
}

export default Navigation;
