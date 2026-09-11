import wrekinImage from "../assets/images/View-from-the-wrekin.jpg";
import claireWalking from "../assets/images/Claire-walking.jpg";

function About () {
  
  return (
    <main id="main-content">
      <section className="about section-shell w-full">
        <h1 className="mb-8 text-center font-bold text-[2.5rem] font-['Playfair_Display']"><span>About Trail</span><span className="text-[var(--rust)]">Finder</span></h1>
        <div className="flex flex-col md:flex-row md:items-center gap-10 my-10">
          <div className="w-full md:w-[50%] p-8 rounded-lg">
            <div className="text-[1.1rem] text-[var(--cream)] leading-relaxed">
              <p className="mb-6">
                TrailFinder brings together walking trails, route maps and current
                weather in one place, making it easier to discover your next walk.
              </p>
              <p className="mb-6">
                Inspired by the trails of Shropshire and nearby Wales, TrailFinder
                aims to make exploring new walks simple, with a beautiful interface
                and intuitive, user-focused experience.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <img src={wrekinImage} alt="View from The Wrekin" className="rounded-lg" />
          </div>
        </div>
      </section>
          
      <div className="flex flex-col md:flex-row items-center gap-10 w-full bg-[var(--cream)] py-10 px-6">
        <div className="max-w-[240px]">
          <img src={claireWalking} alt="Claire walking in Shropshire" className=" rounded-lg" />
        </div>

        <div className="w-full text-center md:text-left">
          <h2 className="mb-8 text-[#e49a79] font-bold text-[1.25rem] font-['Montserrat'] uppercase">About the Project</h2>
          <div className="text-[1rem] leading-relaxed text-[var(--forest-950)]">
            <p className="my-4">
              TrailFinder is a personal project designed and developed by Claire Greenwood, an avid walker based in Shrewsbury, Shropshire.
            </p>
            <p>Built with React, React Router, Leaflet, Open-Meteo & Tailwind </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;