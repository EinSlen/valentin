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

  const SparklesAnimations = ({ text }: { text: string }) => {
    const controls = useAnimation();

    useEffect(() => {
      const loopAnimation = async () => {
        while (true) {
          await controls.start({
            scale: 1.2,
            transition: { duration: 1 },
          });

          await new Promise((resolve) => setTimeout(resolve, 1000));

          await controls.start({
            scale: 1,
            transition: { duration: 1 },
          });

          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      };

      loopAnimation();
    }, [controls]);

    return (
      <div style={{ position: "relative", display: "inline-block" }}>
        {/* Sparkle en haut à gauche */}
        <motion.div
          style={{ position: "absolute", left: -10, top: -15 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
        </motion.div>

        {/* Sparkle en bas à droite */}
        <motion.div
          style={{ position: "absolute", right: -10, bottom: -15 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
        </motion.div>

        {/* Texte avec animation de souffle */}
        <motion.span style={{ fontWeight: "bold" }} animate={controls}>
          {text}
        </motion.span>
      </div>
    );
  };

  const HeroContent = () => {
    const controlsLeft = useAnimation();
    const controlsText = useAnimation();

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
                Salut ! Je suis Étudiant à
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  l&apos;IUT de Lens
                </span>.
              </span>
            </motion.div>

            <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px]"
            >
              &rsaquo;&rsaquo;&nbsp; Je suis étudiant à l&apos;IUT de Lens, en{" "}
              <SparklesAnimations text="BUT 2" /> regardez mes projets
              et les techno que j&apos;utilise !
            </motion.p>
            <br />
            <motion.a
              variants={slideInFromLeft(1)}
              href="/cv.pdf"
              target="_blank"
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] p-5 z-50"
            >
              Télécharger mon CV
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
