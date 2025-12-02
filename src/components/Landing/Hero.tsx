"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialLinks";
import { Pause, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="h-screen md:h-[100vh] bg-black flex flex-col overflow-hidden justify-start items-center relative"
      style={{
        backgroundImage: isPlaying
          ? "url(/bgc.gif)"   // new bg when music plays
          : "url(/bg.png)",   // default bg
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        transition: "background-image 0.4s ease-in-out",
      }}
    >
      {/* Audio Element */}
      <audio ref={audioRef} src="/bg.mp3" preload="auto" />

      {/* Music Button */}
      <motion.button
        onClick={toggleMusic}
        animate={{ scale: isPlaying ? 1.2 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-12 right-9 z-50 p-2  rounded-full text-white bg-purple-700/70 backdrop-blur-sm font-semibold shadow-lg cursor-pointer"
      >
        {isPlaying ? <Pause size={14} className="animate-spin" /> : <Play size={14} />}
      </motion.button>

      <div className="z-40 w-full my-10 rounded-lg text-center">
        <motion.h1
          style={{
            color: "transparent",
            backgroundImage: "linear-gradient(90deg, #4916ce, #8600d5)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          whileHover={{
            backgroundImage: "linear-gradient(90deg, #8600d5, #3333ff)",
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          className="text-6xl cursor-pointer md:text-9xl w-full font-sink flex text-center items-center justify-center"
        >
          Narendra
        </motion.h1>

        <h1 className="text-white text-center font-sink text-2xl md:text-2xl">
          Full-Stack Developer
        </h1>
        <h1 className=" absolute bottom-6 left-6 text-white text-center font-inter text-2xl md:text-xl">
          Code. <span style={{
            fontWeight: 'bold'
          }} className="font-inter ">Design.</span> Create.  <span style={{
            fontWeight: 'bold'
          }} className="font-inter ">Repeat.</span>
        </h1>

        {/* dancing gif when music plays */}
        {isPlaying && (
          <Image src="/gojo.gif" alt="signature" width={150} height={50} className="absolute bottom-0 right-8 md:right-20 mt-4" />
        )}


        <div className="block md:hidden">
          <SocialIcons direction="horizontal" />
        </div>
      </div>

      <div className="hidden md:block md:absolute  md:right-10 md:-bottom-32 md:-translate-y-1/2">
        <SocialIcons direction="vertical" />
      </div>
    </div>
  );
}
