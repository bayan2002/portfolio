import React from "react";

const About = () => {
  return (
    <div id="About" name='about' className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
        My name is Bayan Abd El-Bary, and I am a skilled Full-Stack web developer who excels at contributing to a highly collaborative work environment, solving problems, and determining customer satisfaction. I design and develop web applications using a variety of APIs, third-party integrations, and databases.
        </p>
        <br />
        <p className="text-xl">
        I enjoy transforming beautiful designs into usable websites that respond to different devices and different users.
        </p>
      </div>
    </div>
  );
};

export default About;
