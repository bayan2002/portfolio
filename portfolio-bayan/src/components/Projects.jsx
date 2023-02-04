import React from "react";
import BMSImage from "../assets/BMS.png";
import redditImage from "../assets/reddit.png";
import bekaImage from "../assets/beka-merce.png";
import libraryImage from "../assets/library.png";
import moviesImage from "../assets/movies.png";
import moviesReact from "../assets/moviesReact.png";

const projects = () => {
  const projects = [
    {
      id: 1,
      src: BMSImage,
      demo: 'https://bms-3b9r.onrender.com',
      code: 'https://github.com/CA-G12/BMS',
    },
    {
      id: 2,
      src: bekaImage,
      demo: 'https://bika-merce.herokuapp.com',
      code: 'https://github.com/bayan2002/BIKA-MERCE',
    },
    {
      id: 3,
      src: redditImage,
      demo: 'https://reddit-clone-bayan.herokuapp.com/',
      code: 'https://github.com/bayan2002/Bayan-Reddit',
    },
    {
      id: 4,
      src: libraryImage,
      demo: 'https://book--library-app.herokuapp.com',
      code: 'https://github.com/bayan2002/Library-bayan-mohammed',
    },
    {
      id: 5,
      src: moviesImage,
      demo: 'https://bayan-ali-movies-expressjs.herokuapp.com',
      code: 'https://github.com/bayan2002/Bayan_Ali--project',
    },
    {
      id: 6,
      src: moviesReact,
      demo: 'https://eloquent-conkies-9765d3.netlify.app',
      code: 'https://github.com/bayan2002/Shatha-Bayan-React',
    },
  ];
  return (
    <div id="Projects"
      name="portfolio"
      className="pb-16  bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
        {projects.map(({ id, src, code, demo }) => {
          return (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg hover:scale-105">
                <img
                  src={src}
                  alt=""
                  className=" rounded-md duration-200 "
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 m-4 py-3 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">Demo</a>
                  </button>
                  <button className="w-1/2 px-6 m-4 py-3 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">Code</a>
                  </button>
                </div>
              </div>
          );
        })}
            </div>
      </div>
    </div>
  );
};

export default projects;
