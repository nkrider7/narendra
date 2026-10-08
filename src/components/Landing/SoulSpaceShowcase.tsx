"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiReact, SiRust, SiTauri } from "react-icons/si";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface SoulSpaceShowcaseProps {
  tabletImageSrc?: string;
  projectTagline?: string;

  projectName?: string;
  category?: string;
  designedBy?: string;
  publishedDate?: string;

  initialMode?: "soulspace" | "instant";
  className?: string;
}

export default function SoulSpaceShowcase({
  tabletImageSrc = "/HandsHoldingSoulSpaceProductivityTablet.png",
  projectTagline = "UI UX | Productivity & System Design | SoulSpace Studio",

  projectName = "_SoulSpace",
  category = "_App Design / Productivity",
  designedBy = "Narendra Nishad",
  publishedDate = "_Oct, 2026",

  initialMode = "soulspace",
  className = "",
}: SoulSpaceShowcaseProps) {
  const isSoulSpace = initialMode === "soulspace";

  return (
    <section
      id="soulspace-showcase"
      className={`relative w-full overflow-hidden font-inter antialiased ${className}`}
    >
      {/* Editorial Section */}
      <div className="relative w-full bg-white px-4 pb-16 pt-12 text-neutral-950 sm:px-6 sm:pb-24 sm:pt-16 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl"
          >
            {isSoulSpace ? (
              <h1 className="text-3xl font-black leading-[1.12] tracking-[-0.035em] text-neutral-950 sm:text-4xl md:text-5xl lg:text-[56px]">
                SoulSpace makes{" "}
                <span className="text-neutral-900">
                  capturing thoughts
                </span>{" "}
                and{" "}
                <span className="text-neutral-900">
                  building ideas
                </span>{" "}
                effortless across{" "}
                <span className="text-neutral-900">notes</span>,{" "}
                <span className="text-neutral-900">code</span>, and{" "}
                <span className="text-neutral-900">canvas</span>.
              </h1>
            ) : (
              <h1 className="text-3xl font-black leading-[1.12] tracking-[-0.035em] text-neutral-950 sm:text-4xl md:text-5xl lg:text-[56px]">
                Instant App makes{" "}
                <span className="text-neutral-900">
                  splitting expenses
                </span>{" "}
                and{" "}
                <span className="text-neutral-900">
                  settling payments
                </span>{" "}
                effortless across{" "}
                <span className="text-neutral-900">dinners</span>,{" "}
                <span className="text-neutral-900">trips</span>, and
                shared moments.
              </h1>
            )}
          </motion.div>

          {/* Project Information */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 items-start gap-7 sm:mt-10 md:grid-cols-12 md:gap-12"
          >
            {/* Description */}
            <div className="md:col-span-6 lg:col-span-7">
              <p className="max-w-2xl text-sm font-normal leading-relaxed text-neutral-600 sm:text-base md:text-lg">
                {isSoulSpace
                  ? "A local-first creative workspace for thinking, building, and organizing ideas in one place."
                  : "A simple way to split expenses, track shared costs, and settle payments with friends."}
              </p>

              <Link href={"https://www.soularise.space/"} target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:col-span-6 lg:col-span-5 sm:gap-x-10">
              <div>
                <span className="block text-[11px] font-medium tracking-wider text-neutral-400 sm:text-xs">
                  Project
                </span>

                <span className="mt-1 block text-sm font-bold text-neutral-900 sm:text-base">
                  {isSoulSpace ? projectName : "Instant"}
                </span>
              </div>

              <div>
                <span className="block text-[11px] font-medium tracking-wider text-neutral-400 sm:text-xs">
                  Category
                </span>

                <span className="mt-1 block text-sm font-bold text-neutral-900 sm:text-base">
                  {isSoulSpace
                    ? "Productivity / Creative Tool"
                    : "App Design / Event"}
                </span>
              </div>

              <div>
                <span className="block text-[11px] font-medium tracking-wider text-neutral-400 sm:text-xs">
                  Designed By
                </span>

                <span className="mt-1 block text-sm font-bold text-neutral-900 sm:text-base">
                  {isSoulSpace ? designedBy : "Soul Studio"}
                </span>
              </div>

              <div>
                <span className="block text-[11px] font-medium tracking-wider text-neutral-400 sm:text-xs">
                  Published
                </span>

                <span className="mt-1 block text-sm font-bold text-neutral-900 sm:text-base">
                  {isSoulSpace ? publishedDate : "Apr, 2026"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Phone Showcase */}
          <div className="relative mt-12 flex flex-col items-center justify-center sm:mt-16 md:mt-20">
            {/* Ambient Glow */}
            <div
              className="pointer-events-none absolute -z-10 h-[320px] w-full max-w-4xl rounded-full opacity-45 blur-[100px] sm:h-[480px] sm:blur-[130px] md:h-[600px] md:blur-[160px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.45) 0%, rgba(139, 92, 246, 0.22) 50%, rgba(192, 132, 252, 0) 75%)",
              }}
            />

            {/* Phone & 3D Canvas Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex w-full max-w-5xl flex-col items-center cursor-pointer lg:max-w-6xl"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative aspect-[1536/1024] w-full drop-shadow-[0_25px_60px_rgba(147,51,234,0.18)]"
              >
                <Image
                  src="/as.png"
                  alt="SoulSpace mobile app & workspace ecosystem"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
                  className="object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </motion.div>

              {/* Ground Shadow */}
              <div className="relative -mt-6 flex h-12 w-full max-w-3xl items-center justify-center sm:-mt-10 sm:max-w-4xl md:-mt-14 md:max-w-5xl">
                <div
                  className="h-8 w-full rounded-[100%] opacity-35 blur-lg"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(30, 27, 75, 0.5) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 80%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Built With */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 flex w-full justify-end sm:mt-6"
            >
              <div className="flex flex-col items-end gap-2.5">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500 sm:text-xs">
                  Built With:
                </span>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  {/* AI */}
                  <div
                    title="Artificial Intelligence"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-neutral-950 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:h-10 sm:w-10"
                  >
                    <span className="text-sm font-bold tracking-tight text-white sm:text-base">
                      AI
                    </span>
                  </div>

                  {/* Rust */}
                  <div
                    title="Rust"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DEA584]/30 bg-black shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:h-10 sm:w-10"
                  >
                    <SiRust className="h-4 w-4 text-[#DEA584] sm:h-5 sm:w-5" />
                  </div>

                  {/* React */}
                  <div
                    title="React"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#61DAFB]/30 bg-[#061A24] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:h-10 sm:w-10"
                  >
                    <SiReact className="h-4 w-4 text-[#61DAFB] sm:h-5 sm:w-5" />
                  </div>

                  {/* Tauri */}
                  <div
                    title="Tauri"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#171717] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:h-10 sm:w-10"
                  >
                    <SiTauri className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tablet Showcase */}
      <div className="relative w-full text-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#afb2b1] shadow-2xl sm:rounded-3xl"
          >
            <div className="relative aspect-[10/7] w-full overflow-hidden">
              <Image
                src={tabletImageSrc}
                alt="Hands holding SoulSpace productivity tablet"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />

             
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}