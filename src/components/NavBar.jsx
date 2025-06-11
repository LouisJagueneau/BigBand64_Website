import logo from '../assets/Logo_Big_Band_64_2025.svg'
import MenuIcon from '../assets/MenuIcon.svg'

function NavBar() {
    return (
        <div className='flex flex-row justify-between items-center pt-5'>
            <img src={logo} alt="logoBB64" className='lg:w-[7rem] lg:h-auto' />
            <nav className='flex flex-row md:gap-7 lg:gap-11 xl:gap-13 font-poppins items-center'>
                {/* <a href="" className=' font-bold sm:text-green-600 md:text-red-600  lg:text-fuchsia-600 xl:text-blue-600 2xl:text-yellow-600'>Taille</a> */}
                <a href="#home" class="text-[0.93rem] font-poppins relative text-black capitalize after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2.3px] after:bg-[#ff7723] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Accueil
                </a>
                <a href="#whoweare" class="text-[0.93rem] font-poppins relative text-black capitalize after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2.3px] after:bg-[#ff7723] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Qui sommes nous ?
                </a>
                <a href="#event" class="text-[0.93rem] font-poppins relative text-black capitalize after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px] after:w-0 after:h-[2.3px] after:bg-[#ff7723] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Évènement
                </a>
                <a href="#music" class="text-[0.93rem] font-poppins bg-[#ff7723] px-3 py-1 rounded-[5px] text-white font-semibold cursor-pointer hover:bg-transparent hover:text-[#ff7723] border-[#ff7723] border-2 transition-all duration-200">
                    Musique
                </a>
            </nav>
        </div>
    )
}

export default NavBar;