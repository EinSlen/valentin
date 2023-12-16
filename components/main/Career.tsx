'use client';

import React from 'react';
import { career_fr, career_en } from "@/constants"
import CareerContent from "@/components/sub/CareerContent"
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next";

export default function Career() {
  const { t, i18n  } = useTranslation();
  const careerItems = i18n.language === 'fr' ? career_fr : career_en;
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="flex flex-col items-center justify-center mb-10" id="career">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
        {t('translations:Career.Formation')}
      </h1>
      <div className={`max-w-screen-md mx-auto mt-8 flex ${isMobile ? 'flex-col' : 'relative'}`}>
      {careerItems && careerItems.map((stage, index) => (
          <React.Fragment key={index}>
            <CareerContent index={index} {...stage} />
            {index < careerItems.length - 1 && isMobile && <div className="w-full h-px bg-gray-300 my-4 gap-2"></div>}
            {index < careerItems.length - 1 && !isMobile && <div className="w-px h-5 bg-gray-300 mx-4 pt-10"></div>}
          </React.Fragment>
        ))}
      </div>
      {/* Custom line with width or height matching the container */}
      {isMobile && (
        <div className="before:" style={{ background: "white", width: "5px", height: "80%", margin: "0 auto"}}>
        </div>
      )}
      {!isMobile && (
        <div className="before:" style={{ background: "white", height: "5px", width: "80%", margin: "0 auto", marginTop: "-10px"}}>
          <div className="border-l-[5px] border-r-[5px] h-5 m-0 transform translate-y-[-7.5px]"></div>
        </div>
      )}
    </div>
  );
};