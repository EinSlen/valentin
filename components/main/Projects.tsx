  'use client';

  import React from "react";
  import { useMediaQuery } from "react-responsive";
  import ProjectCard from "../sub/ProjectCard";
  import { Projets_fill } from "@/constants";
  import { motion } from "framer-motion";
  import {
    slideInFromLeft
  } from "@/utils/motion";
  import { useState, useEffect } from "react";

  const Projects = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const groupSize = isMobile ? 1 : 3;

    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentGroupIndex((prevIndex) =>
          prevIndex === Math.floor(Projets_fill.length / groupSize) - 1
            ? 0
            : prevIndex + 1
        );
      }, 5000); //TODO Adjust the interval time 

      return () => clearInterval(intervalId);
    }, [groupSize]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentGroupIndex((prevIndex) =>
          prevIndex === Math.floor(Projets_fill.length / groupSize) - 1
            ? 0
            : prevIndex + 1
        );
      }, 5000); // Adjust the interval time as needed (5000 milliseconds = 5 seconds)

      return () => clearInterval(intervalId);
    }, [groupSize]);

    const startIndexOfCurrentGroup = currentGroupIndex * groupSize;
    const projectsInCurrentGroup = Projets_fill.slice(
      startIndexOfCurrentGroup,
      startIndexOfCurrentGroup + groupSize
    );


    return (
      <div
        className="flex flex-col items-center justify-center mb-10 projects-container" // Ajout de la classe spécifique
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Mes Projets
        </h1>
        <div className="min-h-full min-w-full px-10 flex">
          {projectsInCurrentGroup.map((project, index) => (
            <div
              key={project.project_name}
              className={`w-1/${groupSize} px-4 project-item`} // Ajout de la classe spécifique
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="project-motion" // Ajout de la classe spécifique
>
                <ProjectCard
                  src={project.src}
                  title={project.project_name}
                  description={project.description}
                  images={project.images}
                />
              </motion.div>
            </div>
          ))}
        </div>
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://github.com/EinSlen?tab=repositories"
          target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] p-5 mt-5 z-2"
        >
          En savoir plus...
        </motion.a>
      </div>
    );
  };

  export default Projects;