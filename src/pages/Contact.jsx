import { useEffect } from "react";
import Layouts from "../layouts/Index"
import { motion } from "framer-motion"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



export function Contact(){
    const icon = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll ke posisi atas halaman
    }, []);

    const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_22xsmus', 'template_knmowra', form.current, 'bRl0Iba_JxafqYb_A')
      .then((result) => {
          console.log(result.text);
         toast.success('Email sent succsessfully!')
      }, (error) => {
          console.log(error.text);
          toast.error("This didn't work.")
      });
  };


    return(
        <>
            <Layouts>

                <div className="flex text-center justify-center py-1 px-4 mt-4 md:mt-12">
                    <h1 className="flex font-bold text-6xl md:text-8xl lg:text-9xl text-gray-800 dark:text-white">
                        <motion.span
                            initial={{ y: -1000, }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" , duration: 1}}
                        >C</motion.span>
                        <motion.span
                            initial={{ y: -1500, }}
                            animate={{ y: 0 }}
                            transition={{ type: "spring" , duration: 1, delay: 1.3, stiffness: 150}}
                        >o</motion.span>
                        <motion.span
                            initial={{ y: -1000, }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" , duration: 1}}
                        >n</motion.span>
                        <motion.span
                            initial={{ y: -1000, }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" , duration: 1}}
                        >t</motion.span>
                        <motion.span
                            initial={{ y: -1000, }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" , duration: 1}}
                        >a</motion.span>
                        <motion.span
                            initial={{ y: -1000, }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" , duration: 1}}
                        >c</motion.span>
                        <motion.span
                            initial={{ y: -1000, }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" , duration: 1}}
                        >t</motion.span>
                        <motion.span
                            initial={{ y: -1000, }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" , duration: 1}}
                        >.</motion.span>
                    </h1>

                    <svg viewBox="0 0 32 32" fill="none" className="w-[75px] h-[75px] md:w-[118px] md:h-[118px] lg:w-40 lg:h-40" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"></path>
                            <motion.path d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z" fill="#EA4335"
                                variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    delay: 1.4,
                                    default: { duration: 2, ease: "easeInOut" },
                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                }}
                            ></motion.path>

                            <motion.path d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z" fill="#FBBC05"
                                variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 2, ease: "easeInOut" },
                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                }}
                            ></motion.path>

                            <motion.path d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                                fill="#34A853"
                                variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    delay: 1,
                                    default: { duration: 2, ease: "easeInOut" },
                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                }}
                            ></motion.path>

                            <motion.path d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z" fill="#C5221F"
                                variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    delay: 1,
                                    default: { duration: 2, ease: "easeInOut" },
                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                }}
                            ></motion.path>

                            <motion.path d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                                fill="#C5221F"
                                variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    delay: 1,
                                    default: { duration: 2, ease: "easeInOut" },
                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                }}
                            ></motion.path>

                            <motion.path d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z" fill="#C5221F"
                                variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 2, ease: "easeInOut" },
                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                }}
                            ></motion.path>

                            <motion.path d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                                fill="#4285F4"
                                variants={icon}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    default: { duration: 2, ease: "easeInOut" },
                                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                }}
                            ></motion.path>
                        </g>
                    </svg>
                </div>

                <div className="w-full h-full bg-gray-200 dark:bg-[#232D3F] py-10 -mt-[42px] md:-mt-[60px] lg:-mt-[84px]">
                    <div className="container mx-auto mt-16">
                        <div className="grid grid-cols-1 w-full justify-center px-4 py-3 lg:px-20">
                           <motion.h1 className="flex font-bold text-2xl md:text-3xl text-gray-900 dark:text-gray-50"
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: "tween", duration: 1, delay: 2.8 }}
                           >have a project in mind?</motion.h1>
                           <motion.h1 className="font-bold text-2xl md:text-3xl text-gray-500 dark:text-gray-300"
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{scale: 1, opacity: 1 }}
                                  transition={{ type: "tween", duration: 1, delay: 3.5 }}
                           >Lets get in touch</motion.h1>
                        </div>
                    </div>

                    <div className="container mx-auto pb-24 pt-3 mt-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-center px-4 lg:px-20 gap-20">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-6">
                                    <label htmlFor="use_name" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Name</label>
                                    <input type="text" name="user_name" id="user_name" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="user_email" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="user_email" id="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">Message</label>
                                    <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" required></textarea>
                                </div>
                                <button type="submit" className="text-white bg-sky-500 hover:bg-sky-600 rounded-xl px-10 py-2 text-center ">Send</button>
                            </form>


                            <div className="flex flex-col gap-5 w-full">
                                <h1 className="font-bold text-gray-700 text-2xl md:text-3xl dark:text-white">Visit My Social Media</h1>

                                <a href="https://www.instagram.com/ariel_audhia/?igshid=MzRlODBiNWFlZA==" className="flex flex-row py-2 px-6 rounded-lg bg-blue-500 gap-10 items-center">
                                    <svg viewBox="0 0 32 32" fill="none" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stopColor="#B13589"></stop> <stop offset="0.79309" stopColor="#C62F94"></stop> <stop offset="1" stopColor="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stopColor="#E0E8B7"></stop> <stop offset="0.444662" stopColor="#FB8A2E"></stop> <stop offset="0.71474" stopColor="#E2425C"></stop> <stop offset="1" stopColor="#E2425C" stopOpacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stopColor="#406ADC"></stop> <stop offset="0.467799" stopColor="#6A45BE"></stop> <stop offset="1" stopColor="#6A45BE" stopOpacity="0"></stop> </radialGradient> </defs> </g></svg>
                                    <h1 className="text-white text-lg md:text-xl font-semibold">Instagram</h1>
                                </a>

                                <a href="https://www.facebook.com/ariel.audhiaputra.1" className="flex flex-row py-2 px-6 rounded-lg bg-green-500 gap-10 items-center">
                                    <svg fill="#0080ff" viewBox="0 0 24 24" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" stroke="#0080ff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></g></svg>
                                <h1 className="text-white text-lg md:text-xl font-semibold">Facebook</h1>
                                </a>

                                <a href="https://id.linkedin.com/in/ariel-audhia-putra-576025305" className="flex flex-row py-2 px-6 rounded-lg bg-yellow-500 gap-10 items-center">
                                     <svg  width="140px" height="140px" className="w-[50px] h-[50px] rounded-lg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 455.731 455.731" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="0" y="0" fill="#0084B1" width="455.731" height="455.731"></rect> <g> <path fill="#ffffff" d="M107.255,69.215c20.873,0.017,38.088,17.257,38.043,38.234c-0.05,21.965-18.278,38.52-38.3,38.043 c-20.308,0.411-38.155-16.551-38.151-38.188C68.847,86.319,86.129,69.199,107.255,69.215z"></path> <path fill="#ffffff" d="M129.431,386.471H84.71c-5.804,0-10.509-4.705-10.509-10.509V185.18 c0-5.804,4.705-10.509,10.509-10.509h44.721c5.804,0,10.509,4.705,10.509,10.509v190.783 C139.939,381.766,135.235,386.471,129.431,386.471z"></path> <path fill="#ffffff" d="M386.884,241.682c0-39.996-32.423-72.42-72.42-72.42h-11.47c-21.882,0-41.214,10.918-52.842,27.606 c-1.268,1.819-2.442,3.708-3.52,5.658c-0.373-0.056-0.594-0.085-0.599-0.075v-23.418c0-2.409-1.953-4.363-4.363-4.363h-55.795 c-2.409,0-4.363,1.953-4.363,4.363V382.11c0,2.409,1.952,4.362,4.361,4.363l57.011,0.014c2.41,0.001,4.364-1.953,4.364-4.363 V264.801c0-20.28,16.175-37.119,36.454-37.348c10.352-0.117,19.737,4.031,26.501,10.799c6.675,6.671,10.802,15.895,10.802,26.079 v117.808c0,2.409,1.953,4.362,4.361,4.363l57.152,0.014c2.41,0.001,4.364-1.953,4.364-4.363V241.682z"></path> </g> </g> </g></svg>
                                <h1 className="text-white text-lg md:text-xl font-semibold">Linkedin</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layouts>
            <ToastContainer />
        </>
    )
}

export default Contact