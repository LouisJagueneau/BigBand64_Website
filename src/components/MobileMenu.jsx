import { useState } from 'react';
import { Link } from 'react-router-dom'

import logo from '../assets/Logo_Big_Band_64_2025.svg'
import MenuIcon from '../assets/MenuIcon.svg'


function MobileMenu() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="pb-10">
            <div className='flex flex-row justify-between items-center pt-5'>
                <img src={logo} alt="logo-bigband64" />
                <div>
                    <img className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} src={MenuIcon} alt="MenuIcon" width="42" height="auto" />
                </div>
            </div>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed top-0 left-0 w-screen h-screen bg-black opacity-60 z-20"
                ></div>
            )}

            <div className={`bg-[#fbf8f1] fixed top-0 right-0 z-30 h-full w-64 shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col gap-4 pl-5 pt-9'>
                    <svg onClick={() => setIsOpen(!isOpen)} className='hover:fill-[#E75800] cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="rgb(255,119,35)" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                    <div className='flex flex-col gap-3 font-poppins'>
                        <a href='#home' className='hover:text-[#FF7723] transition-colors duration-300 cursor-pointer'>Accueil</a>
                        <a href='#whoweare' className='hover:text-[#FF7723] transition-colors duration-300 cursor-pointer'>Qui sommes nous ?</a>
                        <a href='#event' className='hover:text-[#FF7723] transition-colors duration-300 cursor-pointer'>Événement</a>
                        <a href='#music' className='hover:text-[#FF7723] transition-colors duration-300 cursor-pointer'>Notre musique</a>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default MobileMenu;