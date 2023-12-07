import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/62669119?v=4"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin border border-solid border-gray-500 rounded-full"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            EinSlen (Valentin Damlencourt)
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              A propos
            </a>
            <a href="#skills" className="cursor-pointer">
              Langages/Logiciels
            </a>
            <a href="#projects" className="cursor-pointer">
              Projets
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link}>
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={50}
              height={50}
            />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
