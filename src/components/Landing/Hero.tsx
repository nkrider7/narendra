"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SocialIcons from "./SocialLinks";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  // Create smooth scroll-based transforms
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 12.5]); // zoom
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 2000]); // translate downward (in px)
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.4]); // fade slightly

  return (
    <div
      className="h-screen md:h-[100vh] bg-black bg-fixed flex flex-col overflow-hidden justify-start items-center relative"
      style={{
        backgroundImage: "url(/myhero.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="z-10"></div>

      <div className="z-50 w-full my-10 rounded-lg text-center">
        <h1 className="text-white hidden font-sink text-3xl md:text-4xl">
          Hello, My Name is
        </h1>

        {/* Animated Narendra text */}
        <motion.h1
          style={{
            backgroundImage:
              "url(https://animesher.com/orig/0/72/728/7283/animesher.com_kaneki-amazing-anime-gif-728332.gif)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "white",
            scale,
            y,
            opacity,
          }}
          className="text-6xl md:text-9xl w-full font-sink flex text-center items-center justify-center"
        >
          Narendra
        </motion.h1>

        <h1 className="text-[#161413] text-center font-sink text-2xl md:text-xl">
          Full-Stack Developer
        </h1>

        <div className="block md:hidden">
          <SocialIcons direction="horizontal" />
        </div>
      </div>

      <div className="hidden md:block md:absolute md:left-10 md:top-1/2 md:-translate-y-1/2">
        <SocialIcons direction="vertical" />
      </div>
    </div>
  );
}
