"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { User, Mail, Send, Sparkles, ArrowLeft, CheckCircle2 } from "lucide-react";

const INTEREST_OPTIONS = [
  "Web Design",
  "App design",
  "Logo Design",
  "Branding",
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Web Design"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedInterests.length === 0) {
      alert("Please select at least one area of interest!");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interests: selectedInterests }),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSelectedInterests([]);
      } else {
        setStatus("error");
        setErrorMessage(data.error ?? "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f8f9fa] flex flex-col justify-between py-5 sm:py-8 px-4 sm:px-6 lg:px-8 font-inter antialiased text-neutral-900 select-none  "
      style={{
        backgroundImage: "url('/sky.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Top Navigation Bar */}
      <header className="mx-auto w-full max-w-9xl flex items-center justify-between mb-4 sm:mb-6 px-1">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-black text-lg sm:text-xl tracking-tight text-black"
        >
          <span>Narendra</span>
          <span className="text-xl sm:text-2xl">🇮🇳</span>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-1.5 text-xs sm:text-sm font-bold text-black shadow-[2px_2px_0_0_#000] hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back Home</span>
        </Link>
      </header>

      {/* Main Sky Aesthetic Contact Card */}
      <main className="mx-auto w-full max-w-9xl flex-1 flex items-center justify-center">
        <div
          className="w-full   rounded-2xl
           overflow-hidden relative p-6 sm:p-10 md:p-12 lg:p-16 bg-white"

        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Form & Copy */}
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Large Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-black uppercase tracking-tight text-black leading-[1.04]">
                HOW CAN
                <br />
                I HELP YOU?
              </h1>
                <Link href={'/cv.pdf'} className="md:left-1/3 right-0 hover:text-[#f48a38]  -rotate-3 top-6 absolute md:top-12 text-sm md:text-base  font-inter font-semibold mr-10 cursor-pointer ">
                   <Image src={"/resume.png"} alt="Resume" height={500} width={500} className="md:w-28 h-16 w-16 md:h-28  hover:scale-110  transition-transform hover:-rotate-6" />
                    Download CV!
                </Link>
             

              {/* Subtitle */}
              <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-[17px] text-neutral-800 font-medium max-w-lg leading-relaxed">
                Offering a unique blend of development expertise and design acumen—complete, user-centric web solutions.
              </p>

              {/* Submission Success State */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 rounded-xl border-2 border-black bg-white p-4 shadow-[4px_4px_0_0_#000] flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm text-black">Inquiry Received!</h4>
                      <p className="text-xs text-neutral-600">
                        Thanks for reaching out! Narendra will get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 rounded-xl border-2 border-black bg-rose-50 p-4 shadow-[4px_4px_0_0_#000] text-rose-800 text-xs sm:text-sm font-semibold"
                  >
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="mt-6 sm:mt-7 w-full max-w-lg">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider text-black mb-2"
                  >
                    YOUR NAME
                  </label>
                  <div className="relative w-full bg-white border-2 border-black rounded-lg shadow-[4px_4px_0_0_#000] flex items-center px-4 py-3 sm:py-3.5 transition-all focus-within:shadow-[2px_2px_0_0_#000] focus-within:translate-x-[2px] focus-within:translate-y-[2px]">
                    <User className="h-4 w-4 text-neutral-400 mr-3 shrink-0" />
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Alex"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent font-medium text-black placeholder:text-neutral-400 focus:outline-none text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Interests Selection */}
                <div className="mt-5 sm:mt-6">
                  <label className="block font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider text-black mb-2.5">
                    I&apos;M INTERESTED IN
                  </label>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {INTEREST_OPTIONS.map((item) => {
                      const selected = selectedInterests.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleInterest(item)}
                          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-md border-2 border-black font-bold text-xs sm:text-sm transition-all cursor-pointer ${selected
                              ? "bg-black text-white shadow-[3px_3px_0_0_#000] -translate-y-0.5"
                              : "bg-white text-black shadow-[3px_3px_0_0_#000] hover:bg-neutral-50"
                            }`}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Email Field */}
                <div className="mt-5 sm:mt-6">
                  <label
                    htmlFor="email"
                    className="block font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider text-black mb-2"
                  >
                    EMAIL
                  </label>
                  <div className="relative w-full bg-white border-2 border-black rounded-lg shadow-[4px_4px_0_0_#000] flex items-center px-4 py-3 sm:py-3.5 transition-all focus-within:shadow-[2px_2px_0_0_#000] focus-within:translate-x-[2px] focus-within:translate-y-[2px]">
                    <Mail className="h-4 w-4 text-neutral-400 mr-3 shrink-0" />
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent font-medium text-black placeholder:text-neutral-400 focus:outline-none text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-7 sm:mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-black text-white border-2 border-black rounded-md font-black text-xs sm:text-sm uppercase tracking-wider shadow-[5px_5px_0_0_#E41B17] hover:shadow-[2px_2px_0_0_#E41B17] hover:translate-x-[3px] hover:translate-y-[3px] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all cursor-pointer disabled:opacity-60 disabled:pointer-events-none"
                  >
                    <Send className="h-4 w-4 stroke-[2.5]" />
                    <span>{isSubmitting ? "SENDING..." : "KEEP ME POSTED"}</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Tilted Neo-Brutalist Portrait Frame */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
              <div className="relative w-full sm:max-w-[620px] md:max-w-[940px]">
                {/* Backing Black Shadow Offset Layer */}
                <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] bg-black translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" />

                {/* Main Angled Neo Portrait Card */}
                <div  
                
                className="relative bg-[#f3f3f3] rounded-[28px] sm:rounded-[32px] border-[3px] bg-cover bg-center border-black  h-[360px] sm:h-[420px] md:h-[460px] lg:h-[590px] overflow-hidden flex items-end justify-center">

                  {/* The Portrait Image */}
                  <div className="relative w-full h-[95%] flex items-end justify-center">
                    <Image
                      src="/herostand-tight.png"
                      alt="Narendra - Software Developer"
                      fill
                      priority
                      className="object-contain object-bottom drop-shadow-xl select-none"
                      sizes="(max-width: 768px) 380px, 440px"
                    />
                  </div>

                  {/* Tilted Pink Sparkles Badge in Corner */}
                  <div className="absolute top-4 right-4 z-20 bg-[#FFB5C5] border-2 border-black rounded-xl p-2 sm:p-2.5 shadow-[3px_3px_0_0_#000] rotate-6 hover:rotate-12 transition-transform cursor-default">
                    <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer / Copyright */}
      <footer className="mx-auto w-full max-w-7xl text-center py-2 mt-4">
        <p className="font-mono text-[11px] text-neutral-400 font-semibold tracking-wider uppercase">
          © {new Date().getFullYear()} NARENDRA NISHAD • DESIGNED & BUILT WITH PASSION
        </p>
      </footer>

    </div>
  );
}

