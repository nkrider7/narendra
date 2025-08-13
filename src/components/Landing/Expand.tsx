"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Expand() {
  const [expanded, setExpanded] = useState("strategy");

  const sections = [
    {
      id: "skills",
      title: "Tech Stack",
      content:
        "Proficient in React Native, Next.js, Node.js, Tailwind CSS, MongoDB, and more. I build responsive, fast, and scalable apps using modern web and mobile frameworks.",
    },
    {
      id: "experience",
      title: "Experience",
      content:
        "Worked as a full-stack developer intern at Boomzo and frontend developer at DevXquad. Contributed to real-world platforms with clean UI and optimized performance.",
    },
    {
      id: "projects",
      title: "Projects",
      content:
        "Developed and launched 20+ projects across web and mobile, including e-commerce, productivity tools, and public platforms—focused on usability and impact.",
    },
    {
      id: "github",
      title: "Open Source",
      content:
        "Explore my open-source work and code samples on GitHub at @nkrider7. I share reusable components, UI systems, and complete app structures.",
    },
    {
      id: "contact",
      title: "Connect",
      content:
        "Interested in collaborating or hiring? Reach out via LinkedIn, email, or through my portfolio site. Always open to exciting challenges and new opportunities.",
    }
  ];



  return (
    <div className="w-full p-6 bg-[#D8D3CF]">
      <div className="max-w-6xl mx-auto space-y-4">
        {sections.map((section) => {
          const isOpen = expanded === section.id;
          return (
            <motion.div
              key={section.id}
              layout
              transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
              onClick={() => setExpanded(section.id)}
              className={`cursor-pointer overflow-hidden rounded-xl shadow-[4px_4px_0px_#000] transition-colors duration-300 ${isOpen ? "bg-white text-black" : "bg-zinc-900 text-white"
                }`}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center p-6 md:p-8">
                <h2 className="font-sink text-3xl md:text-4xl">{section.title}</h2>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: '100%' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 md:px-8 md:pb-8"
                  >
                    <p className="font-inter font-semibold  text-lg md:w-[80%]">
                      {section.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
