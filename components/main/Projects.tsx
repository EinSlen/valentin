'use client';

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projets_fill } from "@/constants";
import { motion } from "framer-motion";
import {
  slideInFromLeft
} from "@/utils/motion";
import { useState, useEffect } from "react";

const Projects = () => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGroupIndex((prevIndex) =>
        prevIndex === Math.floor(Projets_fill.length / 3) - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  const startIndexOfCurrentGroup = currentGroupIndex * 3;
  const projectsInCurrentGroup = Projets_fill.slice(
    startIndexOfCurrentGroup,
    startIndexOfCurrentGroup + 3
  );

  return (
    <div
      className="flex flex-col items-center justify-center mb-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mes Projets
      </h1>
      <div className="min-h-full min-w-full px-10 flex">
        {projectsInCurrentGroup.map((project, index) => (
          <motion.div
            key={project.project_name}
            className="w-1/3 px-4"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <ProjectCard
              src={project.src}
              title={project.project_name}
              description={project.description}
            />
          </motion.div>
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