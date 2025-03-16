import HeroImg from '../assets/clg.jpg';
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row items-center justify-center px-5 py-20 md:py-32 bg-secondary'>
            
            <div className='w-full md:w-1/2 flex flex-col items-center md:items-center text-center'>
                <h1 className='text-3xl md:text-4xl font-bold text-black leading-tight'>
                    Hi, <br/> I'm Tamilarasan
                </h1>
                <p className='text-xl md:text-2xl text-gray-700 mt-2'>
                    I'm a Full-stack Developer
                </p>
                <div className='flex py-5 space-x-5'>
                    <a href='https://www.linkedin.com/authwall?trkInfo=AQEqkhLzWWd3fwAAAZWfMeSQ-RYzkY1NhORSNGmKj-qm49__EATMF8ipmSyRTneYXCEsBMZXAAdnWPwrgR1NK_1XDkBd2ISlMgVE_Yyu406NyIr0Q-XwD0kxJ37wF9MrmtzBGjE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftamil-arasan-j-705b27227' className='text-gray-800 hover:text-blue-500'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href='#' className='text-gray-800 hover:text-pink-500'>
                        <FaInstagramSquare size={24} />
                    </a>
                </div>
            </div>
            <div className='w-full md:w-1/2 flex justify-center'>
                <img 
                    className="w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-lg shadow-lg"  
                    src={HeroImg} 
                    alt="Profile"  
                />
            </div>

        </section>
    );
}
