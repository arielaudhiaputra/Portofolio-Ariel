import { motion } from "framer-motion"
import Freelance from "../assets/image/freelance-front.png"
import Moonton from "../assets/image/moonton.png"
import Quran from "../assets/image/quran.png"
import Spp from "../assets/image/spp.jpeg"


const ListProjects = [
    {
        title: 'Web Freelance',
        html: (
            <motion.div className="flex justify-center mx-auto w-full h-full gap-4 items-center">
                <div className="flex flex-col-reverse lg:flex-row shadow-lg bg-green-400 border-4 border-black bg-bl-300 w-full p-10 md:gap-20 gap-7">
                    <div className="flex flex-col w-full justify-start">
                        <h1 className="text-2xl md:text-3xl font-bold">Web Freelance</h1>
                        <p className="text-sm font-semibold md:text-base">Sebuah "web freelancer" adalah sebutan untuk seorang profesional atau individu yang bekerja secara independen dalam industri teknologi, desain, penulisan, atau bidang lainnya dan menawarkan layanan mereka melalui platform online. </p>

                        <a href="https://github.com/arielaudhiaputra/freelancer-laravel" target="_blank" className="py-1 px-2 text-center md:py-2 md:px-3 text-base md:text-lg bg-[#21b07d] w-1/2 md:w-[40%] lg:w-1/2 mt-10 rounded-lg border-2 border-black font-bold">Repository</a>

                        <div className="flex flex-col w-full mt-6 md:mt-10">
                            <h1 className="font-bold text-lg">Tech :</h1>
                            <div className="flex flex-wrap gap-2">
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-orange-500 font-bold">HTML</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-teal-500 font-bold">Tailwind CSS</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-yellow-500 font-bold">JavaScript</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-red-500 font-bold">Laravel</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-blue-500 font-bold">Mysql</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mx-auto"animate={{ rotate: -1 }} >
                        <motion.img className="w-full my-auto border-4 border-black" src={Freelance} alt="" animate={{ rotate: -2 }} />
                    </div>
                </div>
            </motion.div>
        )
    },

    {
        title: 'Web Moonton',
        html: (
            <motion.div className="flex justify-center mx-auto w-full h-full gap-4 items-center mt-10">
                <div className="flex flex-col-reverse lg:flex-row shadow-lg border-4 border-black bg-orange-200 w-full p-10 md:gap-20 gap-7">
                    <div className="flex flex-col w-full justify-start">
                        <h1 className="text-2xl md:text-3xl font-bold">Web Moonton</h1>
                        <p className="text-sm font-semibold md:text-base"> Sebuah "web nonton film online" adalah situs web atau platform yang memungkinkan pengguna untuk menonton film secara daring melalui internet </p>

                        <a href="https://github.com/arielaudhiaputra/moonton" target="_blank" className="py-1 px-2 text-center md:py-2 md:px-3 text-base md:text-lg bg-orange-500 w-1/2 md:w-[40%] lg:w-1/2 mt-10 rounded-lg border-2 border-black font-bold">Repository</a>

                        <div className="flex flex-col w-full mt-6 md:mt-10">
                            <h1 className="font-bold text-lg">Tech :</h1>
                            <div className="flex flex-wrap gap-2">
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-orange-500 font-bold">HTML</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-teal-500 font-bold">Tailwind CSS</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-yellow-500 font-bold">JavaScript</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-sky-400 font-bold">ReactJs</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-red-500 font-bold">Laravel</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-blue-600 font-bold">Midtrans</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-blue-500 font-bold">Mysql</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mx-auto"animate={{ rotate: -1 }} >
                        <motion.img className="w-full my-auto border-4 border-black" src={Moonton} alt="" animate={{ rotate: -2 }}/>
                    </div>
                </div>
            </motion.div>
        )
    },

    {
        title: 'SPP',
        html: (
            <motion.div className="flex justify-center mx-auto w-full h-full gap-4 items-center mt-10">
                <div className="flex flex-col-reverse lg:flex-row shadow-lg border-4 border-black bg-[#67816e] w-full p-10  md:gap-20 gap-7">
                    <div className="flex flex-col w-full justify-start">
                        <h1 className="text-2xl md:text-3xl font-bold">SPP Online</h1>
                        <p className="text-sm font-semibold md:text-base">Aplikasi Sistem Pembayaran Siswa (SPP) online adalah alat digital yang memungkinkan sekolah atau institusi pendidikan untuk mengelola pembayaran SPP secara elektronik. </p>
                        <a href="https://github.com/arielaudhiaputra/spp" target="_blank" className="py-1 px-2 text-center md:py-2 bg-[#43774a] w-1/2 md:w-[40%] lg:w-1/2 mt-10 rounded-lg border-2 border-black font-bold">Repository</a>

                        <div className="flex flex-col w-full mt-6 md:mt-10">
                            <h1 className="font-bold text-lg">Tech :</h1>
                            <div className="flex flex-wrap gap-2">
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-orange-500 font-bold">HTML</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-teal-500 font-bold">Tailwind CSS</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-yellow-500 font-bold">JavaScript</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-red-500 font-bold">CodeIgniter 3</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-blue-600 font-bold">Midtrans</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-blue-500 font-bold">Mysql</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mx-auto"animate={{ rotate: -1 }} >
                        <motion.img className="w-full my-auto border-4 border-black" src={Spp} alt="" animate={{ rotate: 2 }}/>
                    </div>
                </div>
            </motion.div>
        )
    },

    {
        title: 'MyAlquran',
        html: (
            <motion.div className="flex justify-center mx-auto w-full h-full gap-4 items-center mt-10">
                <div className="flex flex-col-reverse lg:flex-row shadow-lg border-4 border-black bg-sky-300 w-full p-10 md:gap-20 gap-7">
                    <div className="flex flex-col w-full justify-start">
                        <h1 className="text-2xl md:text-3xl font-bold">My Al-quran</h1>
                        <p className="text-sm font-semibold md:text-base">Sebuah web yang menyediakan teks Al-Quran dalam berbagai bahasa, dengan terjemahan dan tafsir. </p>

                        <div className="w-full flex gap-2">
                            <a href="https://my-alquran-two.vercel.app/" target="_blank" className="text-center py-2 px-3 bg-sky-500 w-1/2 md:w-[40%] lg:w-1/2 mt-10 rounded-lg border-2 border-black font-bold">View Web</a>

                            <a href="https://github.com/arielaudhiaputra/My-Alquran" target="_blank" className="text-center py-2 px-3 bg-sky-500 w-1/2 md:w-[40%] lg:w-1/2 mt-10 rounded-lg border-2 border-black font-bold">Repository</a>
                        </div>

                        <div className="flex flex-col w-full mt-6 md:mt-10">
                            <h1 className="font-bold text-lg">Tech :</h1>
                            <div className="flex flex-wrap gap-2">
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-orange-500 font-bold">HTML</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-yellow-500 font-bold">JavaScript</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-teal-500 font-bold">Tailwind CSS</button>
                                <button className="md:px-6 md:py-2 px-4 py-1 border-2 border-black bg-sky-400 font-bold">ReactJs</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mx-auto"animate={{ rotate: -1 }} >
                        <motion.img className="w-full my-auto border-4 border-black" src={Quran} alt="" animate={{ rotate: 2 }}/>
                    </div>
                </div>
            </motion.div>
        )
    },
]

export {ListProjects}