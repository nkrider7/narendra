"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Play } from "lucide-react";

const accent = "#c73621";
const ink = "#18181b";
const cardBg = "#f4f4f5";

const IMAGES = {
  profile:
    "https://media.tenor.com/kGe0A0NBA8kAAAAj/one-piece-pixel.gif",
  luffy: "/luffychibi.png",
  zoro: "/zoro.png",
  robin: "/nikorobin.png",
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



export default function ShortIntro() {
  return (
    <section
      className="relative min-h-fit w-full overflow-x-hidden overflow-hidden font-inter text-[#18181b] antialiased"
      style={{ color: ink }}
    >
     

      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeOut }}
        className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-8 pb-6 sm:px-8 lg:px-10"
      >
        
      </motion.header>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-28 sm:px-8 sm:pb-32 lg:px-10">
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
                    width={250 }
                    height={250}
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
                className="text-[clamp(1.75rem,4.5vw,3rem)] italic font-bold leading-tight tracking-tight"
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
            <Link href="https://cal.com/narendra-nishad/30min">
              <button
                className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-14 px-4 py-3 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
              >
                <span
                  className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                ></span>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  <span className="ml-1 text-white font-guzan">Book a call</span>
                </div>
              </button>
            </Link>
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
          <article
            
            className="relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.35rem] bg-[#f4f4f5] p-5 sm:min-h-[280px] sm:p-6"
          >
            <span className="relative z-10 mb-4 inline-flex w-fit rounded-full border border-red-400/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-red-300">
              My Experience
            </span>
            <div className="relative z-10 max-w-[56%] space-y-2 sm:max-w-[50%]">
              <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-black">
                2 Years in Tech
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Shipping products across startups — web, mobile, and full-stack
              </p>
              <Link
                href="/whoami"
                className="mt-3 flex h-9 max-w-52 items-center justify-center gap-2 whitespace-pre rounded-full bg-[#c73621] px-4 py-2 text-sm font-semibold text-white shadow transition-all duration-300 ease-out hover:bg-[#a82d1b] hover:ring-offset-2 group relative z-10 w-fit overflow-hidden"
              >
                <span
                  className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                  aria-hidden
                />
                <span className="relative font-inter">View journey</span>
              </Link>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-[min(99%,940px)] w-[min(62%,700px)] sm:h-[min(92%,300px)] sm:w-[min(60%,260px)]">
              <Image
                src={IMAGES.luffy}
                alt="Luffy Gear 5 — experience in tech"
                width={738}
                height={894}
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          </article>

          <article
            className="relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.35rem] p-5 sm:min-h-[280px] sm:p-6"
            style={{ backgroundColor: cardBg }}
          >
            <span className="relative z-10 mb-4 inline-flex w-fit rounded-full border border-green-200/80 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-green-600">
              My music playlist
            </span>
            <div className="relative z-10 max-w-[56%] space-y-2 sm:max-w-[50%]">
              <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-[#18181b]">
                Training Mix
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                Swords out, headphones on — focus beats for deep work
              </p>
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex overflow-hidden z-10 items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-green-600 text-white shadow hover:bg-green-600 h-9 px-4 py-2 max-w-52 whitespace-pre group relative w-fit justify-center gap-2 rounded-full transition-all duration-300 ease-out hover:ring-offset-2"
              >
                <span
                  className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                ></span>
                <div className="flex items-center">
                  <Play className="w-4 h-4 mr-1" fill="currentColor" />
                  <span className="ml-1 text-white font-inter text-sm font-semibold">Play on Spotify</span>
                </div>
              </a>
            </div>
            <div className="pointer-events-none z-20 absolute bottom-0 right-0 h-[min(99%,940px)] w-[min(60%,700px)]  sm:h-[min(88%,300px)] sm:w-[min(58%,260px)]">
              <Image
                src={IMAGES.zoro}
                alt="Zoro listening to music"
                width={738}
                height={894}
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          </article>

          <article
            className="relative flex min-h-[300px] flex-col overflow-hidden rounded-[1.35rem] p-5 sm:min-h-[280px] sm:p-6"
            style={{ backgroundColor: cardBg }}
          >
            <span className="relative z-10 mb-4 inline-flex w-fit rounded-full border border-purple-200/80 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-600">
              What I&apos;m currently learning
            </span>
            <div className="relative z-0 max-w-[56%] space-y-2 sm:max-w-[50%]">
              <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-[#18181b]">
                Rust Programming
              </p>
              <p className="text-sm leading-relaxed text-zinc-500">
                Ownership, borrowing, lifetimes, and async patterns
              </p>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-[min(99%,940px)] w-[min(60%,700px)] sm:h-[min(88%,300px)] sm:w-[min(58%,460px)]">
              <Image
                src={IMAGES.robin}
                alt="Robin reading Rust programming book"
                width={738}
                height={894}
                className="h-full w-full object-contain object-bottom"
              />
            </div>
          </article>
        </motion.div>

      </div>
    </section>
  );
}
