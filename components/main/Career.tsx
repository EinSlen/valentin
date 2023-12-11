import React from 'react';
import { career } from "@/constants"
import CareerContent from "@/components/sub/CareerContent"

export default function Career() {
    return (
        <div className="flex flex-col items-center justify-center mb-10" id="career">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
            Ma Formation
          </h1>
          <div className="max-w-screen-md mx-auto mt-8 flex relative">
            {career.map((stage, index) => (
              <React.Fragment key={index}>
                <CareerContent index={index} {...stage} />
                {index < career.length - 1 && <div className="w-px h-5 bg-gray-300 mx-4 pt-10"></div>}
              </React.Fragment>
            ))}
          </div>
          {/* Custom line with width matching the container */}
          <div className="before:" style={{ background: "white", height: "5px", width: "80%", margin: "0 auto", marginTop: "-10px"}}>
          <div className="border-l-[5px] border-r-[5px] h-5 m-0 transform translate-y-[-7.5px]"></div>
          </div>
        </div>
      );
};