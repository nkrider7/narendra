"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Expand() {
  const [expanded, setExpanded] = useState("skills");

  const sections = [
    {
      id: "github",
      title: "Open Source",
      component: <GitHubStats />
    },
    {
      id: "contact",
      title: "Connect",
      component: <ContactSection />
    }
  ];

  return (
    <div className="w-full p-6 bg-[#D8D3CF]">
      <div className="max-w-7xl mx-auto space-y-4">
        {sections.map((section) => {
          const isOpen = expanded === section.id;
          return (
            <motion.div
              key={section.id}
              layout
              transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
              onClick={() => setExpanded(section.id)}
              className={`cursor-pointer overflow-hidden rounded-xl shadow-[4px_4px_0px_#000] transition-colors duration-300 ${
                isOpen ? "bg-white text-black" : "bg-zinc-900 text-white"
              }`}
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center p-6 md:p-8">
                <h2 className="font-inter text-3xl md:text-4xl" style={{fontWeight: "600"}}>{section.title}</h2>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6 md:px-8 md:pb-8"
                  >
                    {section.component}
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



// GitHub Stats Component
function GitHubStats() {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <StatCard label="Public Repos" value="25+" icon="📦" />
        <StatCard label="Contributions" value="20+" icon="💻" />
        <StatCard label="Followers" value="17+" icon="👥" />
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-lg mb-3">Recent Activity</h3>
        <div className="space-y-3">
          <ActivityItem 
            action="Published NPM package" 
            repo="@nkrider7/backend-wala"
            time="6 month ago"
          />
          <ActivityItem 
            action="Merged PR" 
            repo="soul-arise-app"
            time="5 days ago"
          />
          <ActivityItem 
            action="Created repository" 
            repo="portfolio-2025"
            time="1 week ago"
          />
        </div>
        <a href="https://github.com/nkrider7" className="text-sm text-blue-600 hover:underline mt-4 inline-block">
          View full profile →
        </a>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-blue-50 to-gray-200 rounded-lg p-4 text-center shadow-md"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-inter font-bold">{value}</div>
      <div className="text-sm font-inter text-gray-600">{label}</div>
    </motion.div>
  );
}

function ActivityItem({ action, repo, time }: { action: string; repo: string; time: string }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="text-green-600 mt-0.5">●</span>
      <div className="flex-1">
        <span className="text-gray-700">{action}</span>
        <span className="font-mono text-xs bg-gray-200 px-2 py-0.5 rounded ml-2">{repo}</span>
        <div className="text-xs text-gray-500 mt-1">{time}</div>
      </div>
    </div>
  );
}

// Contact Section Component
function ContactSection() {
  const socialLinks = [
    { name: "LinkedIn", icon: "💼", link: "https://www.linkedin.com/in/narendra-nishad/", color: "bg-blue-600" },
    { name: "GitHub", icon: "🐙", link: "https://github.com/nkrider7", color: "bg-gray-800" },
    { name: "Twitter", icon: "🐦", link: "https://x.com/narendbugfixer", color: "bg-sky-500" },
    { name: "Email", icon: "📧", link: "mailto:narendranishad59@gmail.com", color: "bg-red-500" }
  ];

  return (
    <div className="space-y-6">
      <p className="text-lg font-inter text-gray-700">
        Let&apos;s collaborate on something amazing! Connect with me through any of these platforms:
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`${social.color} text-white rounded-lg p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform shadow-md`}
          >
            <span className="text-3xl">{social.icon}</span>
            <span className="font-semibold font-inter text-sm">{social.name}</span>
          </motion.a>
        ))}
      </div>

      <div className="bg-gradient-to-r from-lime-100 to-green-200 rounded-lg p-6 shadow-md">
        <h3 className="font-bold text-lg font-inter mb-2">Available for Work</h3>
        <p className="text-sm font-inter text-gray-700">
          Currently open to freelance projects and full-time opportunities. 
          Response time: Usually within 24 hours ⚡
        </p>
      </div>
    </div>
  );
}
