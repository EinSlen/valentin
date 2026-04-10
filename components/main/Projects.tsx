  'use client';

  import React from "react";
  import ProjectCard from "../sub/ProjectCard";
  import { Projets_fill_fr, Projets_fill_en } from "@/constants";
  import { motion } from "framer-motion";
  import {
    slideInFromLeft
  } from "@/utils/motion";
  import { useState, useEffect } from "react";
  import { useTranslation } from 'react-i18next';

  const Projects = () => {
    const { t, i18n } = useTranslation();
    const Projets_fill_use = i18n.language === 'fr' ? Projets_fill_fr : Projets_fill_en;

    const [groupSize, setGroupSize] = useState(3);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

    useEffect(() => {
      const check = () => setGroupSize(window.innerWidth <= 767 ? 1 : 3);
      check();
      window.addEventListener('resize', check);
      return () => window.removeEventListener('resize', check);
    }, []);

    useEffect(() => {
      setCurrentGroupIndex(0);
    }, [groupSize]);

    useEffect(() => {
      const totalGroups = Math.ceil(Projets_fill_use.length / groupSize);
      const intervalId = setInterval(() => {
        setCurrentGroupIndex((prevIndex) =>
          prevIndex >= totalGroups - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(intervalId);
    }, [groupSize, Projets_fill_use.length]);

    const startIndexOfCurrentGroup = currentGroupIndex * groupSize;
    const projectsInCurrentGroup = Projets_fill_use.slice(
      startIndexOfCurrentGroup,
      startIndexOfCurrentGroup + groupSize
    );

    return (
      <div
        className="flex flex-col items-center justify-center mb-10"
        id="projects"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          {t('translations:Projets.ProjetsH1')}
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-3 gap-4" style={{ minHeight: "400px" }}>
          {projectsInCurrentGroup.map((project, index) => (
            <motion.div
              key={project.project_name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard
                src={project.src}
                title={project.project_name}
                description={project.description}
                images={project.images}
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
          {t('translations:Projets.ProjetsLearn')}
        </motion.a>
      </div>
    );
  };

  export default Projects;
