"use client";

import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
import { useRef } from "react";

export default function MotionSide() {
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
  // const boxX2 = useTransform(scrollYProgress, [0, 0.3], ["0%", "130%"]);
  // const boxRotate2 = useTransform(scrollYProgress, [0, 0.3], ["0deg", "25deg"]);
  // const boxOpacity2 = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

  return (
    <section ref={targetRef} className="relative w-full h-[200vh] bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          src="/mentral.mp4"
          autoPlay
          loop
          muted
          playsInline
        />


        {/* FIRST Screen */}
        <motion.div
          style={{
            x: boxX,
            rotate: boxRotate,
            opacity: boxOpacity,
          }}
          className="absolute left-0 w-full h-screen z-40 bg-gradient-to-br from-[#fff] via-[#ffe3ea] to-[#f8a1b2]"
        >
          <div className="flex h-full w-full items-center justify-center px-6 md:px-12">

            {/* Glass Card */}
            <div className="max-w-[720px] w-full text-center space-y-6  px-8 py-12">

              {/* Heading */}
              <h1 className="text-4xl md:text-7xl leading-[1.1] font-bold font-telma text-[#1a1a1a]">
                Take Control of Your{" "}
                <span className="text-[#f81937] relative">
                  Menstrual
                  <span className="absolute left-0 bottom-1 w-full h-[8px] bg-[#f81937]/20 rounded-full -z-10"></span>
                </span>{" "}
                Health
              </h1>

              {/* Subtext */}
              <p className="text-[16px] md:text-[20px] leading-[1.6] font-inter text-[#3a3a3a] max-w-[540px] mx-auto">
                Track your cycle, understand your body, and stay ahead with smart insights designed for real life.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">

                {/* Primary CTA */}
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff4d6d] to-[#f81937] text-white text-lg font-guzan shadow-lg hover:scale-105 transition-all duration-300">
                  Coming Soon!
                </button>



              </div>

            </div>
          </div>
        </motion.div>



        {/* CONTENT */}
        <div className="relative z-10 flex h-full justify-center items-center px-10">

          {/* <h1 className="text-4xl text-center md:text-[64px] leading-[1.1] font-bold font-telma text-white">
              Design. Code. Ship.
            </h1> */}

        </div>

      </div>
    </section>
  );
}
