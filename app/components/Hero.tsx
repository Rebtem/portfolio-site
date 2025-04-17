"use client";

import { Typewriter } from "react-simple-typewriter";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Try to play the video programmatically
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video play failed:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 w-full h-full object-cover z-0"
      >
        <source src="/bg1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div> */}

      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold lg:text-[60px] text-white">
          Okunola <span className="text-red">Rebecca</span>
        </h1>
        <h2 className="text-4xl mt-3 text-white font-bold lg:text-[40px]">
          I am a
          <span className="ml-4">
            <Typewriter
              words={["Freelancer", "Developer", "Virtual Assistant"]}
              loop={true}
              cursor
              cursorStyle="|"
            />
          </span>
        </h2>
        <div className="flex mt-4 space-x-5">
          <div className="text-white cursor-pointer ">
            <a
              href="https://x.com/Rebetemi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={30}
                className="text-white cursor-pointer hover:opacity-70"
              />
            </a>
          </div>
          <div className="text-white cursor-pointer">
            <a
              href="https://web.facebook.com/profile.php?id=61572563563803"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={30}
                className="text-white cursor-pointer hover:opacity-70"
              />
            </a>
          </div>
          <div className="text-white cursor-pointer">
            <a
              href="https://www.instagram.com/rebeccaokunola/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="text-white cursor-pointer hover:opacity-70"
              />
            </a>
          </div>
          <div className="text-white cursor-pointer ">
            <a
              href="https://www.linkedin.com/in/rebecca-okunola-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="text-white cursor-pointer hover:opacity-70"
              />
            </a>
          </div>
          <div className="text-white cursor-pointer">
            <a
              href="https://github.com/Rebtem"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={30}
                className="text-white cursor-pointer hover:opacity-70"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
