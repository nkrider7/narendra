"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function MotionSide2() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const boxX2 = useTransform(scrollYProgress, [0, 0.3], ["0%", "130%"]);
  const boxRotate2 = useTransform(scrollYProgress, [0, 0.3], ["0deg", "25deg"]);
  const boxOpacity2 = useTransform(scrollYProgress, [0.25, 0.35], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-[200vh] w-full bg-transparent">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/soulariseintro.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div
          style={{
            x: boxX2,
            rotate: boxRotate2,
            opacity: boxOpacity2,
          }}
          className="absolute right-0 w-full h-screen z-30 bg-gradient-to-t from-[#6f23d5] to-[#2824be]"
        >
          <div className="flex h-full w-full items-center justify-center px-6 md:px-12">
            <div className="absolute w-[500px] h-[500px] bg-[#7c3aed]/30 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative max-w-[720px] w-full text-center space-y-6 px-8 py-12">
              <div className="flex justify-center">
                <Image
                  src="/jinwowork.png"
                  alt="Soul Arise logo"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </div>
              <h1 className="text-4xl md:text-7xl leading-[1.1] font-bold font-telma text-white">
                Level Up Your{" "}
                <span className="text-[#a02add] relative">
                  Reality
                  <span className="absolute left-0 bottom-1 w-full h-[10px] bg-[#a855f7]/20 blur-sm rounded-full -z-10"></span>
                </span>
              </h1>

              <p className="text-[16px] md:text-[20px] leading-[1.6] font-inter text-gray-300 max-w-[540px] mx-auto">
                Turn your habits into power. Build your character, complete challenges, and evolve like a true hunter.
              </p>

              <div className="relative flex flex-col items-center justify-center gap-4 pt-4">
                <Link href="https://soularise.in/" className="bg-pink-950 font-guzan text-pink-400 border border-pink-400 border-b-4 overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span className="bg-pink-400 shadow-pink-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Enter The System
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
