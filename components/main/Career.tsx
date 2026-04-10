'use client';

import React from 'react';
import { career_fr, career_en } from "@/constants"
import { useTranslation } from "react-i18next";

export default function Career() {
  const { t, i18n } = useTranslation();
  const careerItems = i18n.language === 'fr' ? career_fr : career_en;

  return (
    <div className="flex flex-col items-center justify-center mb-10" id="career">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
        {t('translations:Career.Formation')}
      </h1>

      {/* Desktop */}
      <div className="hidden md:block w-full max-w-4xl mx-auto px-8">
        <div className="relative">
          {/* Points + texte */}
          <div className="flex justify-between relative">
            {careerItems.map((stage, index) => (
              <div key={index} className="flex flex-col items-center text-center" style={{ width: `${100 / careerItems.length}%` }}>
                <div className="mb-4 min-h-[100px] flex flex-col justify-end">
                  <h2 className="text-lg font-semibold text-blue-500">{stage.name}</h2>
                  <p className="text-sm text-gray-400">{stage.date}</p>
                  <p className="text-sm text-gray-400">{stage.place}</p>
                </div>
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white z-10"></div>
              </div>
            ))}
          </div>

          {/* Ligne horizontale sous les points */}
          <div className="relative mt-[-8px]">
            <div className="h-[3px] bg-white"></div>
            {/* Embouts */}
            <div className="absolute top-1/2 left-0 w-[3px] h-4 bg-white -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[3px] h-4 bg-white -translate-y-1/2"></div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full max-w-sm mx-auto">
        <div className="relative" style={{ paddingLeft: "30px" }}>
          {/* Ligne verticale */}
          <div className="absolute top-0 bottom-0 w-[3px] bg-white" style={{ left: "7px" }}></div>

          {careerItems.map((stage, index) => (
            <div key={index} className="relative mb-8 last:mb-0 flex items-start">
              {/* Point */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full border-2 border-white z-10" style={{ left: "-29px", top: "4px" }}></div>
              <div>
                <h2 className="text-lg font-semibold text-blue-500">{stage.name}</h2>
                <p className="text-sm text-gray-400">{stage.date} - {stage.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
