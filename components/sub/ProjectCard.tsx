import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  images: string[] | undefined;
}

const ProjectCard = ({ src, title, description, images }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain min-h-1000 min-w-1000"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>

        {/* Move the image rendering below the text description */}
        <div className="flex space-x-2 right-0 bottom-0 pt-[-5px]">
          {images &&
            images.map((img, index) => (
              <Image
                key={title}
                src={img}
                alt={`${title}-image-${index}`}
                width={30}
                height={30}
              />
            ))}
        </div>
         {/* Three dots in the bottom-right corner */}
         <div className="absolute bottom-0 right-0 p-4 text-white">...</div>
      </div>
    </div>
  );
};

export default ProjectCard;
