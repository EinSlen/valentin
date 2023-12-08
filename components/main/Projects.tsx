'use client';

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projets_fill } from "@/constants";
import { motion } from "framer-motion";
import {
  slideInFromLeft
} from "@/utils/motion";


const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {Projets_fill.map((project) => (
            <ProjectCard
            key={project.project_name}
            src={project.src}
            title={project.project_name}
            description={project.description}
          />
          ))}
      </div> 
      <motion.a
        variants={slideInFromLeft(1)}
        href="https://github.com/EinSlen?tab=repositories"
        target="_blank"
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] p-5 mt-5 z-50"
      >
        En savoir plus...
      </motion.a>   
    </div>
    
  );
};

export default Projects;
