import React from "react";

const About = () => {
  return (
    <div
      id="About"
      name="about"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Bayan Abd El-Bary, I'm a software engineer and Full Stack
          Developer, I'm working on developing professional web apps with
          responsive designs, high-performance, reusable components, using the
          newest and most popular frameworks and technologies like React, and
          more. Also, I have rested many APIs with node.js, Express.js, and
          postgresql. I have built many React.js, PERN stack apps from scratch,
          and clean code and readable code
        </p>
        <br />
        <p className="text-xl">
          I enjoy transforming beautiful designs into usable websites that
          respond to different devices and different users.
        </p>
      </div>
    </div>
  );
};

export default About;
