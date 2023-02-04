import React, { useEffect } from 'react';
import gsap from 'gsap';
// import persoanl1 from "../assets/personal1.jpeg";
// import personal2 from "../assets/personal2.jpeg";
import personal22 from "../assets/personal22.jpeg";
// import personal3 from "../assets/personal3.jpeg";
// import personal32 from "../assets/personal32.jpeg";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.personalImg', {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.2,
        ease: 'elastic',
        force3D: true,
        scrollTrigger: {
          start: 'top center',
          end: 'bottom center',
        },
      });
      gsap.fromTo(
        '.button',
        {
          scale: 0,
        },
        {
          scale: 1,
          ease: 'slow',
          delay: 1.3,
        },
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <div
      id="Home"
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Motivated full-stack engineer who has experience building and
            scaling web applications and services in various domains.
          </p>
          <Link to='contact' smooth duration={500} className="button group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
            Hire Me!
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowSmRight size={25} className="ml-1" />
            </span>
          </Link>
        </div>
        <div> 
          <img
            src={personal22}
            alt="personalImg"
            className="personalImg rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
