import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
  return (
    <div id="top" className="min-h-screen bg-[#173f35]">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Gallery />
      </main>
    </div>
  )
}

export default App
