export function Footer(){

    return(
        <>
            <footer className="bg-gray-800 dark:bg-gray-800 w-full justify-center py-6 left-0 right-0 bottom-0">
                <div className="w-full mx-auto container px-4 py-4 flex justify-center ">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-100">
                    © {new Date().getFullYear()} Ariel Audhia Putra. All rights reserved
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer