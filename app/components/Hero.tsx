"use client"

import { Typewriter } from "react-simple-typewriter";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";


const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full">
            <video autoPlay loop muted playsInline className="absolute left-0 inset-0 w-full h-full object-cover">
                <source src="/bg1.mp4" type="video/mp4" />
                your browser did not support the video tag
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <h1 className="text-5x1 font-bold lg:text-[60px]
             font-bold text-white">Okunola <span className="text-red">Rebecca</span></h1>
                <h2 className="text-4x1 mt-3 text-white font-bold lg:text-[40px] text-left ml-4"> I am a
                    <span className="ml-4"> <Typewriter words={["Freelancer", "Developer"]} loop={true} /></span>
                </h2>
                <div className="flex mt-4 space-x-5">
                    <div className="text-white cursor-pointer "><a href="https://x.com/Rebetemi" target="_blank">  <FaTwitter size={30} /></a></div>
                    <div className="text-white cursor-pointer"><a href="https://web.facebook.com/profile.php?id=61572563563803"> <FaFacebook size={30} /></a></div>
                    <div className="text-white cursor-pointer"><a href="https://www.instagram.com/rebeccaokunola/"><FaInstagram size={30} /></a></div>
                    <div className="text-white cursor-pointer "><a href="https://www.linkedin.com/in/rebecca-okunola-" > <FaLinkedin size={30} /></a></div>
                    <div className="text-white cursor-pointer"><a href="https://github.com/Rebtem"><FaGithub size={30}/></a></div>

                </div>

            </div>
        </section>
    );
};
export default Hero;