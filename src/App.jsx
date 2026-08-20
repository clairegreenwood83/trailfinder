import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero.jsx";
import Search from "./components/Search.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
  return (
    <div className="min-h-screen">

      <Navigation />
      <Hero />
      <Search />
      <Gallery />
    </div>
  )
}

export default App