'use client';

import React from 'react';
import { career } from '@/constants';
import { useMediaQuery } from 'react-responsive';

interface Career {
    name: string,
    date: string,
    place: string,
    index: number
}

const CareerContent = ({ name, date, place, index }: Career) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <div className="relative">
          <div className="flex items-center">
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-blue-500">{name}</h2>
              <p className="text-gray-600">{date} - {place}</p>
            </div>
          </div>
          {!isMobile && index < career.length && (
            <div
              className="w-4 h-4 bg-blue-500 rounded-full mt-2 ml-6 border border-white-900"
            ></div>
          )}
        </div>
      );
};

export default CareerContent;