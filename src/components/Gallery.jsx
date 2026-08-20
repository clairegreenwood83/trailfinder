import image1 from "../assets/images/TheWrekin2.jpeg"
import image2 from "../assets/images/Snowdon.jpeg"
import image3 from "../assets/images/TheLongMynd.jpeg"
//import image4 from "../assets/images/gallery-4.jpg"
//import arrow from "../assets/images/arrow-thin-right-icon.svg" 


function Gallery() {
    return (
        <ul className="grid gap-8 list-none px-6 my-6 auto-rows-[40rem] [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]">
            <li>
                <figure className="group relative h-full w-full overflow-hidden">
                    <a href="#"><img className="w-full h-full block object-cover" src={image1} alt=""></img></a>
                    <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-8 px-10 py-16 text-white transition-colors duration-300 bg-gradient-to-b from-transparent to-black/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex flex-col justify-end gap-6 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                            <p className="m-0 text-sm font-bold uppercase">1 hour trail</p>
                            <h3 className="m-0 text-4xl" style={{ fontFamily: "'Perfectly Nineties'" }}>The Wrekin</h3>
                            <p className="m-0 text-sm">A rewarding climb through ancient woodland to one of Shropshire's most iconic summits. Enjoy panoramic views stretching across the county before descending along peaceful forest paths.</p>
                        </div>
                        <footer className="flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="m-0">Moderate</p>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
                                <svg className="h-4 w-6 text-white" viewBox="0 0 512 376.83" aria-hidden="true">
                                    <path fill="currentColor" fillRule="nonzero" d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"/>
                                </svg>
                            </span>
                        </footer>
                    </figcaption>
                </figure>
            </li>
            <li>
                <figure className="group relative h-full w-full overflow-hidden">
                    <a href="#"><img className="w-full h-full block object-cover" src={image2} alt=""></img></a>
                    <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-8 px-10 py-16 text-white transition-colors duration-300 bg-gradient-to-b from-transparent to-black/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex flex-col justify-end gap-6 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                            <p className="m-0 text-sm font-bold uppercase">4 hour trail</p>
                            <h3 className="m-0 text-4xl" style={{ fontFamily: "'Perfectly Nineties'" }}>Snowdon</h3>
                            <p className="m-0 text-sm">Experience the highest mountain in Wales on this iconic hike through rugged landscapes and dramatic mountain scenery. Reach the summit for breathtaking panoramic views before descending along well-trodden paths through Snowdonia National Park.</p>
                        </div>
                        <footer className="flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="m-0">Moderate</p>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
                                <svg className="h-4 w-6 text-white" viewBox="0 0 512 376.83" aria-hidden="true">
                                    <path fill="currentColor" fillRule="nonzero" d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"/>
                                </svg>
                            </span>
                        </footer>
                    </figcaption>
                </figure>
            </li>
            <li>
                <figure className="group relative h-full w-full overflow-hidden">
                    <a href="#"><img className="w-full h-full block object-cover" src={image3} alt=""></img></a>
                    <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-8 px-10 py-16 text-white transition-colors duration-300 bg-gradient-to-b from-transparent to-black/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex flex-col justify-end gap-6 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                            <p className="m-0 text-sm font-bold uppercase">2 hour trail</p>
                            <h3 className="m-0 text-4xl" style={{ fontFamily: "'Perfectly Nineties'" }}>The Long Mynd</h3>
                            <p className="m-0 text-sm">Explore the dramatic landscapes of the Long Mynd, following winding trails across heather-covered hills and deep valleys. Take in spectacular views over the Shropshire countryside while keeping an eye out for grazing wild ponies and soaring birds of prey.</p>
                        </div>
                        <footer className="flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="m-0">Moderate</p>
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500">
                                <svg className="h-4 w-6 text-white" viewBox="0 0 512 376.83" aria-hidden="true">
                                    <path fill="currentColor" fillRule="nonzero" d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"/>
                                </svg>
                            </span>
                        </footer>
                    </figcaption>
                </figure>
            </li>
        </ul>
    );
}


export default Gallery;