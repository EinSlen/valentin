import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-black text-gray-200 shadow-lg p-[15px] pt-[125px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
                    <div className="font-bold text-[16px]">Réseaux</div>
                    <a href="https://www.instagram.com/valentin_dtv/">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaInstagram />
                            <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </p></a>
                    <a href="https://github.com/EinSlen">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p></a>
                    <a href="https://www.linkedin.com/in/valentin-damlencourt/">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p></a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Contact</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">CV en ligne</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaPhone />
                        <span className="text-[15px] ml-[6px]">+ 33 6 42 44 63 83</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaMailBulk/>
                        <span className="text-[15px] ml-[6px]">valentin.damlencourt@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Valentin Damlencourt 2023 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer