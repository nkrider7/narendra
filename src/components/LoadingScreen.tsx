"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const DEVELOPER_QUOTES = [
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "The best error message is the one that never shows up.",
  "Talk is cheap. Show me the code.",
  "Programming isn't about what you know; it's about what you can figure out.",
  "Simplicity is the soul of efficiency.",
  "Make it work, make it right, make it fast.",
  "The only way to learn a new programming language is by writing programs in it.",
  "Developer: an organism that turns coffee into code.",
  "In code we trust.",
  "Clean code always looks like it was written by someone who cares.",
];

const LOADING_WORDS = ["Loading...", "Building...", "Crafting..."];

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
  exit: { opacity: 0, y: -20 },
};

const letterVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.04, duration: 0.3 },
  }),
};

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export default function LoadingScreen({
  onComplete,
  minDuration = 3200,
}: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % DEVELOPER_QUOTES.length);
    }, 2200);
    return () => clearInterval(quoteInterval);
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((i) => (i + 1) % LOADING_WORDS.length);
    }, 1200);
    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = Date.now() - start;
      const ready = typeof document !== "undefined" && document.readyState === "complete";
      if (ready && elapsed >= minDuration) {
        clearInterval(id);
        setIsVisible(false);
        onComplete?.();
      }
    }, 100);
    return () => clearInterval(id);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-myblack px-6"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated loading word */}
          <div className="mb-6 flex justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={wordIndex}
                className="flex font-telma text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={wordVariants}
              >
                {LOADING_WORDS[wordIndex].split("").map((letter, i) => (
                  <motion.span
                    key={`${wordIndex}-${i}`}
                    variants={letterVariants}
                    custom={i}
                    className="inline-block leading-relaxed"
                  >
                    {letter}
                  </motion.span>
                ))}
                {/* <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="ml-0.5 inline-block w-0.5 bg-white sm:w-1"
                /> */}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <motion.div
            className="mb-12 h-0.5 w-48 overflow-hidden rounded-full bg-white/10 sm:w-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full rounded-full bg-white"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: minDuration / 1000, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Developer quote */}
          <motion.blockquote
            key={quoteIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl text-center font-inter text-sm font-light italic leading-relaxed text-white/70 sm:text-base"
          >
            "{DEVELOPER_QUOTES[quoteIndex]}"
          </motion.blockquote>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 font-inter text-xs uppercase tracking-[0.3em] text-white/40"
          >
            Developer background
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
