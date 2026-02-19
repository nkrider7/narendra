"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Award, ExternalLink } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    heading: "Internship Certificate",
    subheading: "Software Development Intern from Boomzo",
    imgSrc: "/cert/boomzo.webp",
    href: "https://boomzo.in/",
    color: "bg-yellow-300",
    borderColor: "border-yellow-500",
  },
  {
    heading: "Learning Certificate",
    subheading: "Geo Data With Python from ISRO",
    imgSrc: "/cert/isro1.webp",
    href: "https://www.iirs.gov.in//",
    color: "bg-pink-300",
    borderColor: "border-pink-500",
  },
  {
    heading: "Learning Certificate",
    subheading: "Advanced Geo Data Processing from ISRO",
    imgSrc: "/cert/isro2.webp",
    href: "https://www.iirs.gov.in/",
    color: "bg-blue-300",
    borderColor: "border-blue-500",
  },
  {
    heading: "Participation Certificate",
    subheading: "Hackathon Achievement",
    imgSrc: "/cert/hack1.webp",
    href: "https://unstop.com/",
    color: "bg-green-300",
    borderColor: "border-green-500",
  },
  {
    heading: "Participation Certificate",
    subheading: "Innovation Challenge",
    imgSrc: "/cert/hack2.webp",
    href: "https://unstop.com/",
    color: "bg-purple-300",
    borderColor: "border-purple-500",
  },
];

export default function CertificatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white border-b-4 border-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-black"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            MY <span className="bg-yellow-300 px-3 py-1 border-4 border-black">CERTIFICATES</span>
          </motion.h1>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-3 bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 font-bold  text-sm md:text-lg"
            >
              <Home className="w-5 h-5" />
              <span>BACK HOME</span>
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-black max-w-2xl mx-auto">
            A collection of my achievements, certifications, and learning milestones. 
            Each certificate represents a step forward in my journey.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative ${cert.color} border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 p-6 block`}
            >
              {/* Certificate Image */}
              <div className="relative w-full h-48 mb-4 bg-white border-4 border-black overflow-hidden">
                <Image
                  src={cert.imgSrc}
                  alt={cert.heading}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-black text-black uppercase leading-tight flex-1">
                    {cert.heading}
                  </h3>
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 45 }}
                    className="bg-black text-white p-2 border-2 border-black"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>
                <p className="text-sm font-bold text-black/80">
                  {cert.subheading}
                </p>
              </div>

              {/* Decorative Badge */}
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 border-2 border-black rotate-12">
                <Award className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-black text-white border-4 border-black p-8 text-center shadow-[12px_12px_0px_0px_rgba(255,255,0,1)]"
        >
          <h2 className="text-3xl md:text-4xl font-sink mb-4 uppercase">
            More Achievements Coming Soon!
          </h2>
          <p className="text-lg font-inter bold text-yellow-300">
            Stay tuned for updates on my latest certifications and accomplishments.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-black text-white border-t-4 border-black py-8 mt-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-bold text-lg">
            Built with <span className="bg-yellow-300 text-black px-2 py-1 border-2 border-black">PASSION</span> and{" "}
            <span className="bg-pink-300 text-black px-2 py-1 border-2 border-black">DEDICATION</span>
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
