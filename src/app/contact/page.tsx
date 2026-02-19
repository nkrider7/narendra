"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Send, Mail, User, Sparkles } from "lucide-react";
import Image from "next/image";

const interests = [
  { label: "Web Design", color: "bg-[#4CAF50]" },
  { label: "App design", color: "bg-[#2E8B57]" },
  { label: "Logo Design", color: "bg-[#E41B17]" },
  { label: "Branding", color: "bg-[#FF4500]" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, interests: selectedInterests }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(`✅ Thanks! We'll reach out to ${email} soon.`);
        setEmail("");
        setName("");
        setSelectedInterests([]);
      } else {
        alert(`❌ Error: ${data.error ?? "Something went wrong"}`);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E0F2F7]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b-4 border-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl font-guzan text-black uppercase tracking-tight">
            Get in <span className="bg-[#E41B17] text-white px-2 py-0.5 border-2 border-black">Touch</span>
          </h1>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all font-bold text-sm sm:text-base"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Back Home</span>
            </motion.button>
          </Link>
        </div>
      </motion.header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left: Copy + Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
           
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-guzan text-black leading-[1.1] mb-4 sm:mb-6 uppercase">
              How can<br />I help you?
            </h2>
            <p className="text-base sm:text-lg text-black/90 font-inter mb-8 max-w-lg">
              Offering a unique blend of development expertise and design acumen—complete, user-centric web solutions.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                    Your name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/60" />
                    <input
                      type="text"
                      placeholder="e.g. Alex"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-bold text-black placeholder:text-black/50 focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[3px] focus:translate-y-[3px] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-black mb-3 uppercase tracking-wide">
                    I&apos;m interested in
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {interests.map((item) => {
                      const selected = selectedInterests.includes(item.label);
                      return (
                        <motion.button
                          key={item.label}
                          type="button"
                          onClick={() => toggleInterest(item.label)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2.5 border-2 border-black font-bold text-sm sm:text-base transition-all ${
                            selected
                              ? `${item.color} text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
                              : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
                          }`}
                        >
                          {item.label}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/60" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-bold text-black placeholder:text-black/50 focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[3px] focus:translate-y-[3px] transition-all"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(228,27,23,1)] hover:shadow-[4px_4px_0px_0px_rgba(228,27,23,1)] hover:translate-x-[4px] hover:translate-y-[4px] disabled:opacity-60 disabled:pointer-events-none font-black text-lg uppercase transition-all"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Sending…" : "Keep me posted"}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex items-center justify-center min-h-[280px] sm:min-h-[360px] lg:min-h-[480px]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-3xl border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] lg:rotate-2">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#E0F2F7] to-[#4CAF50]" />
              <div className="relative w-full h-full flex items-center justify-center  ">
                <Image
                  src="/avatar.webp"
                  alt="Contact illustration"
                  width={600}
                  height={600}
                  className="w-full h-auto max-h-[280px] sm:max-h-[380px] lg:max-h-[490px] object-contain object-center drop-shadow-2xl "
                  priority
                />
              </div>
            </div>
            <motion.div
              initial={{ scale: 0, rotate: -12 }}
              animate={{ scale: 1, rotate: 6 }}
              transition={{ type: "spring", delay: 0.6 }}
              className="absolute -top-2 -right-2 sm:top-4 sm:right-4 bg-[#FFC0CB] border-4 border-black px-3 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { word: "Dev", bg: "bg-white" },
            { word: "Design", bg: "bg-[#4CAF50] text-white" },
            { word: "Brand", bg: "bg-[#E41B17] text-white" },
            { word: "Ship", bg: "bg-white" },
          ].map(({ word, bg }) => (
            <div
              key={word}
              className={`${bg} border-4 border-black py-3 sm:py-4 text-center font-black text-sm sm:text-base uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
            >
              {word}
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
