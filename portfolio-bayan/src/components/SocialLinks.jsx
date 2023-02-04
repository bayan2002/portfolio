import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <AiFillLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/bayan-abd-elbary-b294801bb/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <AiFillGithub size={30} />
        </>
      ),
      href: "https://github.com/bayan2002",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:bayanabdelbaryq@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/RESUME-Bayan.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => {
          return (
            <li
              key={link.id}
              className={
                `flex justify-between items-center w-40 h-14 px-4
           bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300` +
                " " +
                link.style
              }
            >
              <a
                href={link.href}
                className="flex justify-between items-center 
            w-full text-white "
                download={link.download}
                target="_blank"
                rel="noreferrer"
              >
                {link.child}
              </a>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialLinks;
