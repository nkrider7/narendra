"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  FileText,
  Code,
  Layout,
  Table,
  Kanban,
  ShieldCheck,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Github } from "@/components/icons/SocialIcons";
import SoulSpaceShowcase from "@/components/Landing/SoulSpaceShowcase";
import Footer from "@/components/Footer";

export default function SoulSpacePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-inter antialiased selection:bg-purple-200 selection:text-purple-900">
      {/* Top Floating Mini-Nav for Case Study Page */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200/80 px-4 sm:px-8 py-3.5 transition-all">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-xs font-semibold">
              <Sparkles className="h-3 w-3 fill-purple-700" />
              Featured Case Study
            </span>

            <a
              href="https://github.com/nkrider7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-black text-white hover:bg-neutral-800 px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all active:scale-95"
            >
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Exact-to-Exact Case Study Component */}
      <main>
        <SoulSpaceShowcase />

        {/* Extended Product Deep Dive Section */}
        <section className="py-16 sm:py-24 bg-neutral-900 text-white px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {/* Section Eyebrow & Title */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-purple-400">
                Crafted for Peak Flow
              </span>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Everything You Need In One Cohesive Workspace
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                SoulSpace bridges personal knowledge management and rapid creative output.
                Designed for thinkers, programmers, and designers who demand speed without bloat.
              </p>
            </div>

            {/* 3-Column Feature Cards */}
            <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Feature 1: Note-taking & AI Voice */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-neutral-800/70 border border-white/10 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Rich Editor & Voice Capture
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Slash commands, Markdown syntax, dynamic tables of contents, and instantaneous
                    voice-to-text dictation with AI transcription.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-purple-300 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Sub-millisecond typing latency</span>
                </div>
              </motion.div>

              {/* Feature 2: Quick Actions Suite */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-neutral-800/70 border border-white/10 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                    <Layout className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Integrated Canvas & Kanban
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Switch fluidly between infinite canvas sketching, Kanban sprint boards,
                    CSV data sheets, and syntax-highlighted code files.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-blue-300 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Modular workspace extensions</span>
                </div>
              </motion.div>

              {/* Feature 3: Local-First Architecture */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-neutral-800/70 border border-white/10 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    100% Local-First Privacy
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Your notes and code live in local encrypted storage on your device.
                    Works flawlessly offline with instant zero-lag responsiveness.
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-xs text-emerald-300 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Zero vendor lock-in</span>
                </div>
              </motion.div>
            </div>

            {/* Bottom Call to Action Banner */}
            <div className="mt-14 sm:mt-20 rounded-3xl bg-gradient-to-r from-purple-900/60 via-indigo-900/50 to-neutral-900 border border-purple-500/20 p-8 sm:p-12 text-center flex flex-col items-center">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                Interested in building digital products like this?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl">
                Let&apos;s collaborate to build high-performance mobile apps, web experiences,
                and beautiful interfaces for your team.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-black font-bold px-6 py-3 text-sm hover:bg-neutral-100 transition-all active:scale-95 shadow-lg"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://cal.com/narendra-nishad/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 text-sm border border-white/15 transition-all"
                >
                  <span>Book a 30min Call</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
