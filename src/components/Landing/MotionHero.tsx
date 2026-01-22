"use client";

import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
import { useRef } from "react";

export default function MotionHero() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // First reveal screen (Left → Center)
  const boxX = useTransform(scrollYProgress, [0, 0.3], ["0%", "-130%"]);
  const boxRotate = useTransform(scrollYProgress, [0, 0.3], ["0deg", "-25deg"]);
  const boxOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 0]);

  // Second reveal screen (Right → Center)
  const boxX2 = useTransform(scrollYProgress, [0, 0.3], ["0%", "130%"]);
  const boxRotate2 = useTransform(scrollYProgress, [0, 0.3], ["0deg", "25deg"]);
  const boxOpacity2 = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

  return (
    <section ref={targetRef} className="relative w-full h-[200vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/bgvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* FIRST Screen */}
        <motion.div
          style={{ x: boxX, rotate: boxRotate, opacity: boxOpacity }}
          className="absolute left-0 w-1/2 h-screen z-40 bg-gradient-to-t from-[#b0a48c] to-[#f2e6d6]"
        >
          <div className="flex h-full w-full items-center justify-center px-12">
            <div className="max-w-[520px] text-center space-y-4">
              <h1 className="text-2xl md:text-[44px] leading-[1.1] font-bold font-telma text-[#c11c09]">
                I design and build digital experiences
              </h1>

              <p className="text-[20px] leading-[1.6] font-inter text-[#2A2A2A]">
                Focused on clarity, speed, and real-world impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SECOND Screen */}
        <motion.div
          style={{ x: boxX2, rotate: boxRotate2, opacity: boxOpacity2 }}
          className="absolute right-0 w-1/2 h-screen z-30 bg-gradient-to-t from-[#e3a387] to-[#c11c09]"
        >
          <div className="flex h-full w-full items-center justify-center px-12">
            <div className="max-w-[560px] text-center">
              {/* <Image
                src="/jinwowork.png"
                alt="avatar"
                width={500}
                height={500}
                className="w-40 h-40 absolute top-1/2 right-0 object-cover"
              /> */}
              <p className="text-[24px] leading-[1.5] font-telma font-light text-[#f2e6d6]">
                I&apos;m a developer and designer who enjoys solving problems with simple,
                thoughtful interfaces. I care about details, performance, and user
                experience.
              </p>

            </div>
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="relative z-10 flex h-full justify-center items-center px-10">
         
            <h1 className="text-4xl text-center md:text-[64px] leading-[1.1] font-bold font-telma text-white">
              Design. Code. Ship.
            </h1>
          
        </div>

      </div>
    </section>
  );
}
