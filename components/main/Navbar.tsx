"use client";

import { Socials } from "@/constants";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <a href="/" className="flex flex-row items-center sm:pr-2">
          <div className="relative w-12 h-12 md:w-15 md:h-15">
            <Image
              src="https://avatars.githubusercontent.com/u/62669119?v=4"
              alt="logo"
              layout="fill"
              objectFit="cover"
              className="cursor-pointer hover:animate-slowspin border border-solid border-gray-500 rounded-full w-full min-w-full"
            />
          </div>
          <span className="font-bold ml-2 md:ml-4 hidden md:block text-gray-300">
            EinSlen (Valentin Damlencourt)
          </span>
        </a>

        {/* Navigation Icons for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-gray-300 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex items-center border mx-auto border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 md:gap-20">
          <a href="#career" className="cursor-pointer">
            Formation
          </a>
          <a href="#skills" className="cursor-pointer">
            Langages/Logiciels
          </a>
          <a href="#projects" className="cursor-pointer">
            Projets
          </a>
        </div>

        {/* Navigation Icons for Mobile */}
        {isMenuOpen && (
          <div className="flex flex-row gap-5 md:hidden">
            <a href="#career">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
            </a>
            <a href="#skills">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </a>
            <a href="#projects">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
            </a>
            <a href="https://www.linkedin.com/in/valentin-damlencourt/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#ffffff" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
            </svg>
            </a>
            <a href="https://github.com/EinSlen">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
              </a>
          </div>
        )}

        {/* Social Icons */}
        {!isMobile && <div className="flex flex-row gap-2 md:gap-5">
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
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
