"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <a href="/" className="flex flex-row items-center sm:pr-2">
          <div className="relative w-12 h-12 md:w-15 md:h-15">
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

        {/* Navigation Icons for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? (
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
        <div className="hidden md:flex items-center border mx-auto border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 md:gap-10">
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

        {/* Navigation Icons for Mobile */}
        {isMenuOpen && (
          <div className="flex flex-row gap-8 md:gap-5 md:hidden">
            <a href="#about-me">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
            </a>
            <a href="#skills">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </a>
            <a href="#projects">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
            </a>
          </div>
        )}

        {/* Social Icons */}
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
