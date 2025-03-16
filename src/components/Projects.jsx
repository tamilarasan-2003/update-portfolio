import website from "../assets/website.png";
import website2 from "../assets/website2.png";
import website3 from "../assets/website3.png";

export default function Project() {
    return (
        <section id="projects" className="flex flex-col items-center py-20 px-5 bg-primary text-black">
            
            
            <div className="w-full text-center">
                <h1 className="text-4xl font-bold border-b-4 border-white inline-block mb-5">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN, and Vanilla CSS. Check them out!</p>
            </div>

           
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 mt-8">
                
                
                <div className="relative group flex flex-col items-center">
                    <img className="w-full max-w-[400px] h-[200px] object-cover rounded-lg" src={website} alt="Project 1"/>
                    <p className="text-xl font-semibold text-center mt-3">Rental Management System</p>
                    <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-90 flex justify-center items-center transition duration-300 rounded-lg">
                        <p className="text-center px-5">An Booking website for Rentel Management.</p>
                        <div className="text-center md:text-left mt-3">
                 <a className=" bg-amber-950 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover: bg-[rgb(209,159,66)]transition block md:inline-block text-center"
                      target="_blank" href="https://github.com/tamilarasan-2003/realestatefullstack"> View  </a>
             </div>
                    </div>
                </div>

                
                <div className="relative group flex flex-col items-center">
                    <img className="w-full max-w-[400px] h-[200px] object-cover rounded-lg" src={website2} alt="Project 2"/>
                    <p className="text-xl font-semibold text-center mt-3">Weather App</p>
                    <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-90 flex justify-center items-center transition duration-300 rounded-lg">
                        <p className="text-center px-5">Built using the MERN stack Weather App.</p>
                        <div className="text-center md:text-left mt-3">
    <a className=" bg-amber-950 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover: bg-[rgb(209,159,66)]transition  md:inline-block text-center flex justify-center"
       target="_blank" href="https://github.com/tamilarasan-2003/weather-app"> View </a>
</div>

                    </div>
                
                </div>

                
                <div className="relative group flex flex-col items-center">
                    <img className="w-full max-w-[400px] h-[200px] object-cover rounded-lg" src={website3} alt="Project 3"/>
                    <p className="text-xl font-semibold text-center mt-3">Home Service Platform</p>
                    <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-90 flex justify-center items-center transition duration-300 rounded-lg">
                        <p className="text-center px-5">An Booking website for home services Platform.</p>
                        <div className="text-center md:text-left mt-3">
    <a className=" bg-amber-950 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover: bg-[rgb(209,159,66)]transition block md:inline-block text-center"
       target="_blank" href="https://github.com/tamilarasan-2003/home-service-platform"> View 
    </a>
</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
