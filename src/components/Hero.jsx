import image3 from "../assets/images/gallery-3.jpg"

function Hero() {
    return (
        <div className="relative w-full h-[500px] text-center">
            <img src={image3} alt="Mountain landscape" className="w-full h-full object-cover"></img>
            <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-7xl uppercase" style={{ fontFamily: 'Perfectly Nineties'}}>Trail Finder</h1>
            <div className="flex absolute w-full justify-center bottom-20 left-1/2 -translate-x-1/2">
                <input
                    type="text"
                    placeholder="Search for a trail..."
                    className="w-[50%] rounded-full px-6 py-4 bg-white text-center"
                ></input>
            </div>
        </div>
    );
}

export default Hero;