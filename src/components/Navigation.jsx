import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollThreshold = pathname === "/" ? 100 : 0;
    const updateNavigation = () =>
      setHasScrolled(window.scrollY > scrollThreshold);

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });

    return () => window.removeEventListener("scroll", updateNavigation);
  }, [pathname]);

  return (
    <header className={`site-header ${hasScrolled ? "site-header--scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="wordmark" to="/" aria-label="TrailFinder home">
          <span>Trail</span>
          <span className="text-[var(--rust)]">Finder</span>
        </Link>

        <div className="site-nav__links">
          <Link className="nav-link" to="/explore">
            Explore
          </Link>

          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
