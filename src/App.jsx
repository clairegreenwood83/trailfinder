import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";

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
      </Routes>
    </div>
  )
}

export default App;
