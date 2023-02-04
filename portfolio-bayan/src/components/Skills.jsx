import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import react from "../assets/react.png";
import js from "../assets/js.jpg";
import typescriptJs from "../assets/typescriptJs.jpg";
import nodejs from "../assets/nodeJs.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import postgresql from "../assets/postgresql.jpg";
// import gitHup from "../assets/githup.jpg";
import git from "../assets/git.jpg";
// import heroku from "../assets/heroku.png";
// import netlify from "../assets/netlify.jpg";

function Skills() {
  const skills = [
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JS",
      style: "shadow-yellow-500",
    },

    {
      id: 4,
      src: typescriptJs,
      title: "TypeScriptJS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 1,
      src: react,
      title: "REACT",
      style: "shadow-blue-300",
    },

    {
      id: 6,
      src: postgresql,
      title: "Postgresql",
      style: "shadow-blue-200",
    },

    // {
    //     id: 8,
    //     src: gitHup,
    //     title: 'GitHup',
    //     style: 'shadow-gray-500'
    // },
    {
      id: 9,
      src: git,
      title: "Git",
      style: "shadow-orange-500",
    },
    // {
    //     id: 10,
    //     src: heroku,
    //     title: 'Heroku',
    //     style: 'shadow-purple-500'
    // },
    // {
    //     id: 11,
    //     src: netlify,
    //     title: 'Netlify',
    //     style: 'shadow-blue-500'
    // },
  ];
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const heroAnimation = gsap.context(() => {
      gsap.fromTo(
        ".skill",
        {
          scale: 0,
        },
        {
          delay: 0.07,
          stagger: 0.05,
          ease: "elastic",
          force3D: true,
          scale: 1,
          duration: 1.5,
          ease: "power3",
          scrollTrigger: {
            trigger: ref.current,
            start: "top center",
            end: "bottom center",
          },
        }
      );
    }, ref);

    return () => heroAnimation.revert();
  }, []);

  return (
    <div
      ref={ref}
      id="Skills"
      name="skills"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen
 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-grey-500 p-2 inline">
            Skills
          </p>
          <p className="py-4">These are technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={`skill shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-20 mx-auto xl:bg-transparent"
                />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
