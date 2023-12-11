"use client";

import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const SparklesAnimations = ({ text }: { text: string }) => {
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