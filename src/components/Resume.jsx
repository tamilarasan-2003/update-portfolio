import ResumeImg from '../assets/Resume.jpg';


export default function Resume() {
    return (
        <section id='resume'className="flex flex-col md:flex-row items-center bg-primary p-5 md:p-10">
            
           
            <div className="w-full md:w-1/2 flex justify-center">
                <img  src={ResumeImg}  alt="Resume"  className="w-full h-auto md:h-[400px] lg:h-[450px] object-cover rounded-lg shadow-lg"/>
            </div>
            <div className="w-full md:w-1/2 flex justify-center p-5">
                <div className="flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-4xl text-white border-b-4 border-white mb-5 w-[140px] font-bold mx-auto md:mx-0">
                        Resume
                    </h1>
                    <p className="text-white px-5 md:px-5 leading-relaxed py-5 md:ml-3">
                        you can view my Resume    <a className='btn rounded-l-full rounded-r-full px-4 py-2 mt-2 inline-block  shadow-md hover:bg-gray-200 transition ' href='https://drive.google.com/file/d/1932zPeUhysdVYzFDxC8GH909oLB0EpQj/view?pli=1'>Download</a>
                    </p>
                </div>
            </div>

        </section>
    );
}


