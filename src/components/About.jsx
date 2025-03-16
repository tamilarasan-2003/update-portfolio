import Aboutimg from '../assets/about.jpg';

export default function About() {
    return (
        <section className="flex flex-col md:flex-row items-center bg-primary p-5 md:p-10 ">
            
           
            <div className="w-full md:w-1/2 flex justify-center">
                <img src={Aboutimg}  alt="About" className="w-full h-auto md:h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg" id='about'/>
            </div>
            <div className="w-full md:w-1/2 flex justify-center p-5">
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-4xl text-white border-b-4 border-white mb-5 w-[170px] font-bold mx-auto md:mx-0">
                        About Me
                    </h1>
                    <p className="text-white px-3 md:px-5 leading-relaxed">
                        I am <b>Tamilarasan J</b>, a <b>Full Stack Developer</b> skilled in  
                        <b> JavaScript, React.js, Node.js, Express.js, and MongoDB</b>.  
                        Currently pursuing <b>B.Tech IT (CGPA: 8.3)</b> at K.S. Rangasamy College of Technology.  
                        I have built projects like <b>Rental Management System, Home Service Platform, and Weather App</b>.  
                        Experienced in <b>UI/UX design (Figma, Canva)</b> and version control with <b>Git/GitHub</b>.  
                        Certified in <b>Web Development, SQL</b>. Passionate about building scalable applications.
                    </p>
                </div>
            </div>

        </section>
    );
}
