import Logo from "../assets/images/TrailFinderLogo.png"

function Navigation() {
    return (
      <nav className="flex items-center justify-between px-6 py-2">
        <a className="w-25 h-15" href="/" style={{ fontFamily: "'Bebas Neue'" }}>
            <img src={Logo} alt="Logo image"></img>
        </a>
  
        <div className="flex gap-6 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
          <a href="/search" className="rounded-md px-2 py-1 mx-1 hover:bg-[#0A3E6F] hover:rounded-md transition-colors duration-300">Search</a>
          <a href="/contact" className="rounded-md px-2 py-1 mx-1 hover:bg-[#0A3E6F] hover:rounded-md transition-colors duration-300">Contact</a>
        </div>
      </nav>
    );
  }
  
  export default Navigation;