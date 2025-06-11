import NavBar from './NavBar.jsx'
import MobileMenu from './MobileMenu.jsx'

function Layout({ children }) {
    return (
        <div className='bg-[#fbf8f1] '>


            <div className='min-h-screen w-screen container mx-auto px-10 xl:px-30 2xl:px-50'>
                <div className='hidden md:block'>
                    <NavBar />
                </div>

                <div className='md:hidden  '>
                    <MobileMenu />
                </div>

                <main className=''>
                    <div className="">
                        {children}
                    </div>
                </main>
            </div>

            {/* Footer */}
            <footer className="flex flex-col mt-16 items-center bg-[#FF7723] w-screen">
                <div className="mt-10 flex flex-col items-center">
                    <h2 className="font-shrikhand text-[2.3rem] text-white">BIG BAND 64</h2>
                    <span className="border-t border-white w-[120%] mt-2"></span>
                </div>

                <div className="flex flex-row gap-4 mt-5 mb-10">
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white rounded-full p-4 hover:bg-white group transition"
                    >
                        <svg
                            fill="currentColor"
                            width="35"
                            height="35"
                            viewBox="0 0 32 32"
                            className="text-white group-hover:text-[#FF7723]"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    )
}


export default Layout