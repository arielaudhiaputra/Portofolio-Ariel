import { useState, useEffect } from "react"
import DarkIcon from "./icons/DarkIcon";
import SunIcon from "./icons/SunIcon";
import { Link, NavLink } from "react-router-dom";
import CloseMenu from "./icons/CloseMenu";
import OpenMenu from "./icons/OpenMenu";

export function Navbar(){
    const [active, setActive] = useState(null)
    useEffect(() => {
        const scrollActive = () => {
            setActive(window.scrollY > 20);
        };
        window.addEventListener("scroll", scrollActive);
        return () => window.removeEventListener("scroll", scrollActive);
    }, [active])



    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    useEffect(() => {
        if (theme === "dark") {
            localStorage.setItem("theme", theme);
            const localTheme = localStorage.getItem("theme");
            document.documentElement.classList.add(localTheme)
        } else {
            localStorage.setItem("theme", theme);
            const localTheme = localStorage.getItem("theme");
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const handleToggle = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }


    const [toggle, setToggle] = useState(false)
    const navToggle = () => {
        if (toggle === false ) {
            setToggle(true)
        } else{
            setToggle(false)
        }
    }

    return(
        <>

            <nav className={`${
                    active ? "shadow-xl" : ""
                } fixed bg-gray-100 dark:bg-gray-900 w-full z-20 top-0 left-0`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:py-4 lg:px-20">
                    <Link to="/" className="flex flex-col justify-start">
                        <h1 className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">Ariel Audhia Putra</h1>
                        <span className="text-sm text-gray-400">Web Developer</span>
                    </Link>

                    <div className="flex md:order-2 md:hidden">
                        <button onClick={navToggle}>
                            {toggle === false ? <OpenMenu/> : <CloseMenu/>}

                        </button>
                    </div>

                    <div className="md:order-2 hidden md:flex">
                       <button onClick={handleToggle}>
                            {theme === "dark" ? <SunIcon className="w-10 h-10 dark:text-white"/> : <DarkIcon  className="w-10 h-10"/>}
                       </button>
                    </div>

                    {/* Nav Dekstop */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <NavLink to="/" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "block py-2 pl-3 pr-4 rounded text-sky-500 font-bold md:bg-transparent md:p-0" : "block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white"
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "block py-2 pl-3 pr-4 rounded text-sky-500 font-bold md:bg-transparent md:p-0" : "block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white"
                                }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects"  className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "block py-2 pl-3 pr-4 rounded text-sky-500 font-bold md:bg-transparent md:p-0" : "block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white"
                                }>Project
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "block py-2 pl-3 pr-4 rounded text-sky-500 font-bold md:bg-transparent md:p-0" : "block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white"
                                }>Contact</NavLink>
                        </li>
                        </ul>
                    </div>
                    {/* Nav Dekstop */}


                    {/* Nav Mobile */}
                    <div className={`items-center justify-between w-full md:hidden ${toggle === false ? "hidden" : "flex"}`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <button onClick={handleToggle} className="px-2">
                                {theme === "dark" ? <SunIcon className="w-8 h-8 dark:text-white"/> : <DarkIcon  className="w-8 h-8"/>}
                            </button>
                        </li>
                        <li>
                            <NavLink to="/" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "block py-2 pl-3 pr-4 rounded text-sky-500 font-bold md:bg-transparent md:p-0" : "block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white"
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "block py-2 pl-3 pr-4 rounded text-sky-500 font-bold md:bg-transparent md:p-0" : "block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white"
                                }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects"  className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "block py-2 pl-3 pr-4 rounded text-sky-500 font-bold md:bg-transparent md:p-0" : "block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white"
                                }>Project
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "block py-2 pl-3 pr-4 rounded text-sky-500 font-bold md:bg-transparent md:p-0" : "block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white"
                                }>Contact</NavLink>
                        </li>
                        </ul>
                    </div>
                    {/* End Nav Mobile */}
                </div>
            </nav>

        </>
    )
}

export default Navbar