import Layouts from "../layouts/Index"
import { motion } from "framer-motion"
import Profile from "../assets/image/foto.png"
import { SkillsIcon } from "../components/SkillsIcon"
import Foto from "../assets/image/foto-profile.jpeg"
import { useEffect } from "react"

export function About(){
      const icon = {
        hidden: {
          pathLength: 0,
          stroke: "#825B0A"
        },
        visible: {
          pathLength: 1,
          stroke: "#825B0A"
        }
      };

      useEffect(() => {
        window.scrollTo(0, 0); // Scroll ke posisi atas halaman
      }, []);

    return(
        <>
            <Layouts>

                <div className="flex text-center justify-center py-1 px-4 mt-4 md:mt-12">
                    <h1 className="flex font-bold text-6xl md:text-8xl lg:text-9xl text-gray-800 dark:text-white">
                        <motion.span
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{
                                default: { duration: 2, ease: "easeInOut" },
                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                        >A</motion.span>

                        <motion.span
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{
                                default: { duration: 2, ease: "easeInOut" },
                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                        >b</motion.span>

                        <motion.span
                            initial={{ y: -1000, }}
                            animate={{ y: 0 }}
                            transition={{ type: "spring" , duration: 1, delay: 2, stiffness: 200}}
                        >o</motion.span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            delay: 1,
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                        }}
                        >u</motion.span>

                        <motion.span
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             transition={{
                                delay: 1,
                                default: { duration: 2, ease: "easeInOut" },
                                fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                            }}
                        >t</motion.span>
                        .
                    </h1>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="lg:w-32 lg:h-32 md:w-24 md:h-24 w-14 h-14"  version="1.1" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <motion.path fill="#ffff00" stroke="#825B0A" strokeWidth="4" d="M 98,43 74,66 79,99 49,84 19,99 25,66 1,42 34,37 49,7 64,37 z"
                       variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: 1.7,
                            default: { duration: 3, ease: "easeInOut" },
                            fill: { duration: 3, ease: [1, 0, 1, 1] }
                        }}
                    ></motion.path> </g></svg>
                </div>

                <div id="hero" className="w-full h-full justify-center mx-auto bg-gray-200 dark:bg-[#232D3F] py-10 -mt-[27px] md:-mt-[38px] lg:-mt-[50px] ">
                    <div className="container mx-auto justify-center pb-24 pt-3 mt-16 md:mt-20 lg:mt-24">

                        <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-center items-center px-4 lg:px-20 gap-12 md:gap-10 lg:gap-0">
                            <div className="flex flex-col w-full gap-2 order-2 lg:order-1">
                                <motion.h2 className="text-3xl md:text-4xl font-semibold dark:text-white"
                                  initial={{ scale: 0, opacity: 0 }}
                                  whileInView={{ scale: 1, opacity: 1 }}
                                  transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
                                >I’m Ariel Audhia Putra. I live in Bogor Indonesia</motion.h2>
                                <p className="text-base mt-4 dark:text-white">Saat ini saya adalah fresh graduate lulusan rekayasa perangkat lunak SMKN 4 Bogor dan saya adalah seorang programmer junior.</p>
                                <p className="text-base dark:text-white">Saya berminat terus mengembangkan keterampilan saya dan menjadi profesional, bersemangat untuk mengambil setiap peluang untuk tumbuh melalui rekan tim dan organisasi.</p>
                            </div>

                            <div className="flex w-full justify-center lg:justify-end order-1 lg:order-2 overflow-clip">
                               <motion.img src={Foto} alt="" className="w-[60%] md:w-[50%] lg:w-[72%] rounded-full"
                                  initial={{ rotate: 90, x: 200 }}
                                  whileInView={{ rotate: 0, x: 0 }}
                                  transition={{ ease: "easeInOut", duration: 0.8 ,delay: 0.6 }}
                               />
                            </div>
                        </div>

                    </div>

                    <div className="container mx-auto justify-center pb-24 pt-3 mt-32">
                        <div className="grid grid-cols-1 w-full justify-center items-center px-4 lg:px-20 gap-20">
                            <div className="flex flex-row w-full text-white font-bold justify-center lg:justify-start gap-3 items-end">
                                <motion.h1 className="md:py-10 md:px-12 px-4 py-8 bg-teal-400 rounded-full text-2xl lg:text-4xl"
                                   animate={{
                                    scale: [0.9, 1.1, 1.1, 0.9, 0.9],
                                  }}
                                  transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    delay: 1,
                                    repeatDelay: 2
                                  }}
                                >S</motion.h1>

                                <motion.h1 className="md:py-16 md:px-10 px-4 py-10 bg-blue-400 rounded-full text-2xl lg:text-4xl"
                                    animate={{
                                    scale: [0.9, 1.1, 1.1, 0.9, 0.9],
                                  }}
                                  transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    delay: 3,
                                    repeatDelay: 2
                                  }}
                                >K</motion.h1>

                                <motion.h1 className="md:py-28 md:px-10 px-4 py-16 bg-red-400 rounded-full text-2xl lg:text-4xl"
                                    animate={{
                                    scale: [0.9, 1.1, 1.1, 0.9, 0.9],
                                  }}
                                  transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    delay: 1,
                                    repeatDelay: 2
                                  }}
                                >I</motion.h1>

                                <motion.h1 className="md:py-20 md:px-10 px-4 py-12 bg-yellow-400 rounded-full text-2xl lg:text-4xl"
                                     animate={{
                                    scale: [0.9, 1.1, 1.1, 0.9, 0.9],
                                  }}
                                  transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    delay: 2,
                                    repeatDelay: 2
                                  }}
                                >L</motion.h1>

                                <motion.h1 className="md:py-20 md:px-10 px-4 py-12 bg-purple-400 rounded-full text-2xl lg:text-4xl"
                                    animate={{
                                    scale: [0.9, 1.1, 1.1, 0.9, 0.9],
                                  }}
                                  transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    delay: 1,
                                    repeatDelay: 2
                                  }}
                                >L</motion.h1>

                                <motion.h1 className="md:py-16 md:px-10 px-4 py-10 bg-green-400 rounded-full text-2xl lg:text-4xl"
                                     animate={{
                                    scale: [0.9, 1.1, 1.1, 0.9, 0.9],
                                  }}
                                  transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    delay: 4,
                                    repeatDelay: 2
                                  }}
                                >S</motion.h1>
                            </div>

                            <div className="flex flex-wrap w-full justify-center lg:justify-start font-semibold gap-12 md:gap-[70px] lg:gap-20">
                                {SkillsIcon.map((skilss) =>
                                    <div className="flex flex-wrap items-center" key={skilss.title}>
                                        {skilss.html}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </Layouts>
        </>
    )
}

export default About