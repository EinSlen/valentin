  "use client";

  import React, {useEffect} from "react";
  import { motion, useAnimation } from "framer-motion";
  import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
  } from "@/utils/motion";
  import { SparklesIcon } from "@heroicons/react/24/solid";
  import Image from "next/image";
  import {SparklesAnimations} from "@/components/sub/SparklesAnimations";
  import { useTranslation } from 'react-i18next';

  
  const HeroContent = () => {
    const controlsLeft = useAnimation();
    const controlsText = useAnimation();
    const { t } = useTranslation();

    useEffect(() => {
      const animateLeft = async () => {
        await controlsLeft.start("visible");
      };

      const animateText = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        while (true) {
          await controlsText.start({ y: -10, transition: { duration: 0.5 } });
          await new Promise((resolve) => setTimeout(resolve, 500));
          await controlsText.start({ y: 0, transition: { duration: 0.5 } });
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      };

      animateLeft();
      animateText();
    }, [controlsLeft, controlsText]);

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            animate={controlsLeft}
          >
            <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px]">
                Valentin Portfolio &nbsp;
                <br />
              </h1>
            </motion.div>

            <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-6xl leading-tight font-bold text-white max-w-[600px] w-auto h-auto"
            >
              <span>
                {t('translations:Hero.HeroH1.part1')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  {t('translations:Hero.HeroH1.part2')}
                </span>.
              </span>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
              {t('translations:Hero.HeroP.part1')}{" "}
              <SparklesAnimations text="Informatique" />{" "}
              {t('translations:Hero.HeroP.part2')}
            </motion.p>
            <br />
            <motion.a
              variants={slideInFromLeft(1)}
              href={t('translations:Hero.HeroA.src')}
              target="_blank"
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] p-5 z-50"
            >
              {t('translations:Hero.HeroA.titre')}
            </motion.a>
          </motion.div>
        </div>

        {/* Deuxième animation (pour les autres éléments du composant) */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/svg/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
    );
  };

  export default HeroContent;
