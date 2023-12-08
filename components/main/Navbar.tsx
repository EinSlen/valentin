import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

  const Navbar = () => {
    return (
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 md:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between">
          <a href="/" className="flex flex-row items-center">
            <div className="relative w-12 h-12 md:w-15 md:h-15 md:mr-5 md:px-5">
              <Image
                src="https://avatars.githubusercontent.com/u/62669119?v=4"
                alt="logo"
                layout="fill"
                objectFit="cover"
                className="cursor-pointer hover:animate-slowspin border border-solid border-gray-500 rounded-full w-full"
              />
            </div>
            <span className="font-bold ml-2 md:ml-4 hidden md:block text-gray-300">
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

          <div className="flex flex-row gap-2 md:gap-5">
            {Socials.map((social) => (
              <a key={social.name} href={social.link}>
                <Image
                  src={social.src}
                  alt={social.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Navbar;
