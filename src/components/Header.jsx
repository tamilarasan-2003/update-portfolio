import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
    const [toggle, setToggle] = useState(false);

    return (
        <header className="flex justify-between items-center px-5 py-5 bg-[rgb(209,126,30)] text-white relative">
            <a className="font-bold text-white text-xl" href="#">Tamil</a>
            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                    <li><a href="/" className="hover:text-gray-300">Home</a></li>
                    <li><a href="#about" className="hover:text-gray-300">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#resume" className="hover:text-gray-300">Resume</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
            <button 
                onClick={() => setToggle(!toggle)} className="block md:hidden focus:outline-none" > <Bars3Icon className="text-white h-7 w-7" />
            </button>
            {toggle && (
                <nav className="absolute top-16 right-5 w-48 bg-white text-black rounded-lg shadow-lg p-4 md:hidden">
                    <ul className="flex flex-col space-y-3">
                        <li><a href="/" className="hover:text-orange-500">Home</a></li>
                        <li><a href="#about" className="hover:text-orange-500">About</a></li>
                        <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
                        <li><a href="#resume" className="hover:text-orange-500">Resume</a></li>
                        <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
