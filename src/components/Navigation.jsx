import { useEffect, useState } from "react";

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
        <a className="wordmark" href="#top" aria-label="TrailFinder home">
          TrailFinder
        </a>

        <a className="nav-link" href="#featured-trails">
          Explore
        </a>
      </nav>
    </header>
  );
}

export default Navigation;
