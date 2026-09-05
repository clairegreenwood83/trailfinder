import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import TrailDetails from "./pages/TrailDetails.jsx";


function App() {
  return (
    <div id="top" className="min-h-screen bg-[#173f35]">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/trails/:trailId" element={<TrailDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
