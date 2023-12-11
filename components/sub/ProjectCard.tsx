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
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] ">
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
      </div>
      <div className="absolute right-0 bottom-0 p-[5px]">
        {images && images.map((img) => (
          <Image
            key={title}
            src={img}
            alt={title}
            width={45}
            height={45}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
