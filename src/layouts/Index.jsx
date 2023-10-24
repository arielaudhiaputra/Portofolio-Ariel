import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


export function Layouts({children}){
    return(
        <>
            <div className="w-full h-full bg-gray-100 font-inter dark:bg-gray-900">
                <Navbar/>
                    <main className="w-full pt-36">{children}</main>
                <Footer/>
            </div>
        </>
    )
}

export default Layouts