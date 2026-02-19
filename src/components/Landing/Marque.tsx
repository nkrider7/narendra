"use client";

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const REDIRECT_DELAY_MS = 2200;

const GRADIENTS = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
];

const reviews = [
  {
    name: "DigitalKosh",
    link: "https://digitalkosh.netlify.app/",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/digital.png",
  },
  {
    name: "Medihelp",
    link: "https://medihelpglobal.com/",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/medcare.png",
  },
  {
    name: "Techtrialdmc",
    link: "https://www.techtraildmc.com/",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/tt.png",
  },
  {
    name: "Patepoia",
    link: "https://pals-petopia.netlify.app/",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/patopia.png",
  },
  {
    name: "Boomzo",
    link: "https://www.boomzo.in/",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/boomzo.png",
  },
  {
    name: "BrooCode",
    link: "https://broocode.netlify.app/",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/broocode.png",
  },
  {
    name: "Portfolio",
    link: "/",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/port.png",
  },
].map((r, i) => ({ ...r, gradient: GRADIENTS[i % GRADIENTS.length] }));

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

function ReviewCard({ img }: { img: string }) {
  return (
    <Image
      className="rounded-lg object-cover transition-transform hover:scale-[1.02]"
      width={300}
      height={300}
      alt=""
      src={img}
    />
  );
}

export function MarqueeDemo() {
  const [redirecting, setRedirecting] = useState<{
    link: string;
    name: string;
    gradient: string;
  } | null>(null);

  const handleClick = (e: React.MouseEvent, review: (typeof reviews)[0]) => {
    e.preventDefault();
    setRedirecting({
      link: review.link,
      name: review.name,
      gradient: review.gradient,
    });
  };

  useEffect(() => {
    if (!redirecting) return;
    const timer = setTimeout(() => {
      if (redirecting.link.startsWith("http")) {
        window.location.href = redirecting.link;
      } else {
        window.location.pathname = redirecting.link;
      }
    }, REDIRECT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [redirecting]);

  useEffect(() => {
    if (!redirecting) return;
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setRedirecting(null);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [redirecting]);

  return (
    <>
      <div className="relative flex w-full flex-col items-center mt-10 justify-center overflow-hidden">
        <h1
          className="font-inter uppercase text-3xl mb-8"
          style={{ fontWeight: "200" }}
        >
          Our<span style={{ fontWeight: "800" }}>Works</span>
        </h1>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <a
              key={review.name}
              href={review.link}
              onClick={(e) => handleClick(e, review)}
              className="block cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <ReviewCard img={review.img} />
            </a>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <a
              key={review.name}
              href={review.link}
              onClick={(e) => handleClick(e, review)}
              className="block cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <ReviewCard img={review.img} />
            </a>
          ))}
        </Marquee>
      </div>

      <AnimatePresence mode="wait">
        {redirecting && (
          <motion.div
            key={redirecting.link}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
            style={{
              background: redirecting.gradient,
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.3 } }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.div
              className="relative z-10 flex flex-col items-center justify-center px-6"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 280,
                delay: 0.08,
              }}
            >
              {/* Loading spinner */}
              <motion.div
                className="mb-8 h-14 w-14 rounded-full border-4 border-white/40 border-t-white"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.p
                className="text-center font-inter text-xl font-semibold text-white drop-shadow-md sm:text-2xl"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.18, duration: 0.35 }}
              >
                Redirecting to {redirecting.name}
              </motion.p>
              <motion.p
                className="mt-2 text-center font-inter text-sm text-white/90"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.26, duration: 0.35 }}
              >
                Please wait...
              </motion.p>
              <motion.p
                className="mt-4 text-center font-inter text-xs text-white/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                Press Esc to cancel
              </motion.p>
              {/* Progress bar */}
              <motion.div
                className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/30 sm:w-80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.35 }}
              >
                <motion.div
                  className="h-full rounded-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: REDIRECT_DELAY_MS / 1000,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
