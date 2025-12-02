"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

        {/* FIRST Purple Screen (Left side) */}
        <motion.div
          style={{ x: boxX, rotate: boxRotate, opacity: boxOpacity }}
          className="absolute w-[50%] left-0 h-screen  bg-gradient-to-t from-yellow-500/40 to-yellow-500/90 z-40 origin-left"
        >
          <h1 className=" text-pretty top-16 mt-10 text-right z-50 text-5xl md:text-9xl font-bold text-[#4916ce] font-guzan select-none">
            Code
          </h1>



        </motion.div>

        {/* SECOND Purple Screen (Right side) */}
        <motion.div
          style={{ x: boxX2, rotate: boxRotate2, opacity: boxOpacity2 }}
          className="absolute w-[50%] right-0 h-screen bg-gradient-to-t from-[#4916ce]/40 to-[#4916ce]/90 z-30 origin-right"
        >
          <h1 className=" text-pretty  z-50 mt-10 text-5xl md:text-9xl font-bold text-yellow-500 font-guzan  select-none">
            sign
          </h1>
        </motion.div>
        {/* Main hero */}
        <div
          style={{
            backgroundImage: 'url("https://giffiles.alphacoders.com/221/221024.gif")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative z-10 flex h-full items-center px-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2"></div>
        </div>
      </div>
    </section>
  );
}
