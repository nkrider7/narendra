"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import FloatBar from "../FloatNav";

const accent = "#c73621";
const ink = "#18181b";
// const surface = "#d8ebef";
const cardBg = "#f4f4f5";

const IMAGES = {
  profile:
    "/avatar.webp",
  albumLeft:
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=280&h=280&fit=crop&q=80",
  albumCenter:
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=280&h=280&fit=crop&q=80",
  albumRight:
    "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=280&h=280&fit=crop&q=80",
  book: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=520&fit=crop&q=80",
} as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

const cardMotion = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -6,
    transition: { type: "spring" as const, stiffness: 400, damping: 28 },
  },
};

function LogoMark() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-[#18181b]"
      aria-hidden
    >
      <path
        d="M12 3.5L20.5 19.5H3.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export default function ShortIntro() {
  return (
    <section
      className="relative min-h-screen w-full overflow-x-hidden   font-inter text-[#18181b] antialiased"
      style={{ color: ink }}
    >
     
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-8 pb-6 sm:px-8 lg:px-10"
      >
        <div className="flex items-center gap-2.5">
          <LogoMark />
          <a
            href="mailto:narendra.nishad@outlook.com"
            className="text-[13px] font-medium tracking-tight text-[#18181b]/90 transition-colors hover:text-[#c73621] sm:text-sm"
            aria-label="Send email to narendra.nishad@outlook.com"
          >
            narendra.nishad@outlook.com
          </a>
        </div>
        <button
          type="button"
          className=""
         
        >
          <FloatBar />
        </button>
      </motion.header>

      <div className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="space-y-5">
            <h1 className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[1.12] tracking-tight">
              <span>Hi, I&apos;m</span>
              <motion.span
                className="relative inline-flex shrink-0"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span
                  className="pointer-events-none absolute -inset-3 rounded-[1.35rem] bg-[#d8ebef]/[0.12] blur-xl"
                  aria-hidden
                />
              
                <span className="relative inline-block overflow-hidden rounded-[1.15rem] shadow-[0_12px_40px_-12px_rgba(24,24,27,0.35)] ring-1 ring-black/[0.06]">
                  <Image
                    src={IMAGES.profile}
                    alt="Alex Carter"
                    width={72}
                    height={72}
                    className="h-[52px] w-[52px] object-contain  sm:h-[68px] sm:w-[68px] md:h-[72px] md:w-[72px]"
                    sizes="(max-width: 640px) 52px, 72px"
                    priority
                  />
                </span>
              </motion.span>
              <span>Narendra Nishad!</span>
            </h1>

            <p className="max-w-2xl text-lg text-zinc-500 sm:text-xl">
              I&apos;m a{" "}
              <span className="font-semibold text-[#18181b]">Software Developer</span>{" "}
              at
            </p>

            <div className="flex md:flex-wrap md:flex-row  flex-col md:items-center items-start  gap-3 gap-y-3">
              <p
                className="text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-tight tracking-tight"
                style={{ color: accent }}
              >
              Stealth startup
              </p>  
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-[#18181b] shadow-sm sm:text-[13px]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to work
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:gap-10"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex min-h-[52px] min-w-[160px] items-center justify-center rounded-full bg-[#18181b] px-8 text-[15px] font-semibold text-white shadow-[0_14px_36px_-16px_rgba(24,24,27,0.65)] transition-shadow hover:shadow-[0_18px_44px_-14px_rgba(24,24,27,0.55)]"
              >
                Book a call
              </Link>
            </motion.div>
            <p className="max-w-md text-[15px] leading-relaxed text-zinc-500 sm:text-base">
              Feel free to explore my portfolio and reach out — I&apos;d love to
              connect!
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease: easeOut }}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:mt-16"
        >
          <motion.article
            variants={cardMotion}
            initial="rest"
            whileHover="hover"
            className="flex min-h-[280px] flex-col rounded-[1.35rem] p-5 sm:p-6"
            style={{ backgroundColor: cardBg }}
          >
            <span className="mb-4 inline-flex w-fit rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-600">
              My Experience
            </span>
            <div className="relative flex-1 pl-1">
              <span
                className="absolute bottom-1 left-[7px] top-2 w-px bg-zinc-300"
                aria-hidden
              />
              <ul className="space-y-5">
                <li className="relative flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#18181b] ring-4 ring-zinc-200" />
                  <div>
                    <p className="text-sm font-semibold text-[#18181b]">
                      Software Developer at KitFit
                    </p>
                    <p className="text-xs text-zinc-500">
                      Sep 2025 - Feb 2026 · 6 mos · Amsterdam, Netherlands · Remote
                    </p>
                  </div>
                </li>
                <li className="relative flex gap-3 opacity-55">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-400 ring-4 ring-zinc-200/80" />
                  <div>
                    <p className="text-sm font-medium text-[#18181b]">
                      React Native Developer at Boomzo
                    </p>
                    <p className="text-xs text-zinc-500">
                      Oct 2024 - Jul 2025 · 10 mos · Aligarh, India · On-site
                    </p>
                  </div>
                </li>
                <li className="relative flex gap-3 opacity-40">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-400 ring-4 ring-zinc-200/80" />
                  <div>
                    <p className="text-sm font-medium text-[#18181b]">
                      Frontend Developer Intern at Boomzo
                    </p>
                    <p className="text-xs text-zinc-500">
                      Jul 2024 - Oct 2024 · 4 mos · Internship
                    </p>
                  </div>
                </li>
                <li className="relative flex gap-3 opacity-30">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-zinc-400 ring-4 ring-zinc-200/80" />
                  <div>
                    <p className="text-sm font-medium text-[#18181b]">
                      Full-stack Developer Intern at DevXquad
                    </p>
                    <p className="text-xs text-zinc-500">
                      May 2024 - Jul 2024 · 3 mos · India · Remote
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.article>

          <motion.article
            variants={cardMotion}
            initial="rest"
            whileHover="hover"
            className="flex min-h-[280px] flex-col rounded-[1.35rem] p-5 sm:p-6"
            style={{ backgroundColor: cardBg }}
          >
            <span className="mb-4 inline-flex w-fit rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-600">
              My music playlist
            </span>
            <div className="relative mx-auto flex h-[148px] w-full max-w-[220px] items-center justify-center sm:h-[160px]">
              <motion.div
                className="absolute left-2 top-4 z-0 h-[120px] w-[120px] overflow-hidden rounded-xl shadow-lg ring-1 ring-black/[0.06] sm:left-4 sm:h-[128px] sm:w-[128px]"
                style={{ rotate: -14 }}
              >
                <Image
                  src={IMAGES.albumLeft}
                  alt=""
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <motion.div
                className="relative z-10 h-[132px] w-[132px] overflow-hidden rounded-xl shadow-[0_20px_50px_-20px_rgba(24,24,27,0.45)] ring-1 ring-black/[0.08] sm:h-[140px] sm:w-[140px]"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 380, damping: 22 }}
              >
                <Image
                  src={IMAGES.albumCenter}
                  alt="Playlist cover"
                  width={140}
                  height={140}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute right-2 top-4 z-0 h-[120px] w-[120px] overflow-hidden rounded-xl shadow-lg ring-1 ring-black/[0.06] sm:right-4 sm:h-[128px] sm:w-[128px]"
                style={{ rotate: 14 }}
              >
                <Image
                  src={IMAGES.albumRight}
                  alt=""
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
            <div className="mt-auto space-y-1 pt-6 text-center sm:text-left">
              <p className="text-sm font-bold text-[#18181b]">Alex Playlist</p>
              <p className="inline-flex items-center justify-center gap-1.5 text-xs font-medium text-zinc-500 sm:justify-start">
                <Play className="h-3.5 w-3.5 text-[#c73621]" fill="currentColor" />
                Play on Spotify
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={cardMotion}
            initial="rest"
            whileHover="hover"
            className="flex min-h-[280px] flex-col rounded-[1.35rem] p-5 sm:p-6"
            style={{ backgroundColor: cardBg }}
          >
            <span className="mb-4 inline-flex w-fit rounded-full border border-zinc-200/80 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-600">
              What I&apos;m currently learning
            </span>
            <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-1 sm:max-w-[52%]">
                <p className="text-base font-bold leading-snug text-[#18181b]">
                  Rust Programming
                </p>
                <p className="text-sm text-zinc-500">
                  Ownership, borrowing, lifetimes, and async patterns
                </p>
              </div>
              <div className="relative mx-auto h-[140px] w-[100px] shrink-0 sm:mx-0 sm:h-[150px] sm:w-[108px]">
                <div
                  className="absolute inset-0 rounded-md shadow-[0_18px_40px_-18px_rgba(199,54,33,0.55)] ring-1 ring-black/[0.08]"
                  style={{
                    background: `linear-gradient(135deg, ${accent} 0%, #9e2a18 100%)`,
                  }}
                />
                <div className="absolute inset-[6px] overflow-hidden rounded-sm">
                  <Image
                    src={IMAGES.book}
                    alt="Rust programming book"
                    width={108}
                    height={150}
                    className="h-full w-full object-cover mix-blend-luminosity opacity-90"
                  />
                </div>
                <span
                  className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.22em] text-white/95"
                  style={{ writingMode: "vertical-rl" }}
                >
                  Rust Book
                </span>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
