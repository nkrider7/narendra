"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Github, Star, GitFork, Code, TrendingUp, Calendar, Award } from "lucide-react";
import Image from "next/image";

interface GitHubStats {
  username: string;
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  location?: string;
  blog?: string;
  company?: string;
}

interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  html_url: string;
  updated_at: string;
  topics: string[];
}

export default function GitHubShowcasePage() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const username = "nkrider7";

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData: GitHubStats = await userResponse.json();
        setStats(userData);

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
        );
        const reposData: Repo[] = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#F26F56] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]">
      {/* Header with Back Button */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-telma font-bold text-white"
          >
            nkrider7
          </motion.h1>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#F26F56] to-[#E54C34] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-inter font-medium"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Dark Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 bg-[#1a1a1a] border border-white/10 rounded-3xl shadow-xl"
          >
            {stats && (
              <>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-telma font-bold text-white mb-6 leading-tight"
                >
                  {stats.name || stats.username}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl font-inter text-gray-300 mb-8"
                >
                  {stats.bio || "Full-Stack Developer focused on clarity, speed, and real-world impact."}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-inter"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Profile</span>
                  </a>
                </motion.div>
              </>
            )}
          </motion.div>

          {/* Right Column - Dark Red/Orange Gradient */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-[#2a1512] to-[#1a0a08] border border-[#F26F56]/30 rounded-3xl shadow-xl p-8 md:p-12 flex flex-col justify-center"
          >
            {stats && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center mb-8"
                >
                  <div className="relative">
                    <Image
                      src={stats.avatar_url}
                      alt={stats.username}
                      width={200}
                      height={200}
                      className="rounded-full border-4 border-[#F26F56]/50 shadow-2xl"
                    />
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 text-lg font-telma text-center mb-6"
                >
                  I&apos;m a developer and designer who enjoys solving problems with simple, thoughtful interfaces. I care about details, performance, and user experience.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-3 gap-4"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F26F56]">{stats.public_repos}</div>
                    <div className="text-gray-400 text-sm font-inter">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F26F56]">{stats.followers}</div>
                    <div className="text-gray-400 text-sm font-inter">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#F26F56]">{stats.following}</div>
                    <div className="text-gray-400 text-sm font-inter">Following</div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>

        {/* GitHub Activity Graph */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-telma font-bold text-white mb-8 text-center">
            Contribution Activity
          </h3>
          <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl shadow-xl p-6 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&area=true&area_color=F26F56&bg_color=1a1a1a&color=e5e5e5&line=F26F56&point=E54C34&radius=8`}
              alt="GitHub Contribution Graph"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </motion.section>

        {/* Stats Cards Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-telma font-bold text-white mb-8 text-center">
            GitHub Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats Graph Cards */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-inter font-semibold text-gray-200">Streak</h4>
                <TrendingUp className="w-6 h-6 text-[#F26F56]" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://streak-stats.demolab.com/?user=${username}&theme=radical&hide_border=true&border_radius=10`}
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-inter font-semibold text-gray-200">Stats</h4>
                <Code className="w-6 h-6 text-[#F26F56]" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=radical&hide_border=true&border_radius=10&bg_color=1a1a1a&title_color=F26F56&text_color=e5e5e5&icon_color=F26F56`}
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-inter font-semibold text-gray-200">Top Languages</h4>
                <Award className="w-6 h-6 text-[#F26F56]" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=radical&hide_border=true&border_radius=10&bg_color=1a1a1a&title_color=F26F56&text_color=e5e5e5&layout=compact`}
                alt="Top Languages"
                className="w-full h-auto"
              />
            </div>

            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-inter font-semibold text-gray-200">Trophy</h4>
                <Award className="w-6 h-6 text-[#F26F56]" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=radical&no-frame=true&column=2&margin-w=10&margin-h=10`}
                alt="GitHub Trophy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.section>

        {/* Top Repositories */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-telma font-bold text-white mb-8 text-center">
            Top Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.slice(0, 6).map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-lg p-6 hover:shadow-xl hover:border-[#F26F56]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-inter font-bold text-gray-100 group-hover:text-[#F26F56] transition-colors">
                    {repo.name}
                  </h4>
                  <Github className="w-5 h-5 text-gray-500 group-hover:text-[#F26F56] transition-colors" />
                </div>
                <p className="text-gray-400 text-sm font-inter mb-4 line-clamp-2">
                  {repo.description || "No description available"}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  {repo.language && (
                    <span className="px-3 py-1 bg-gradient-to-r from-[#F26F56] to-[#E54C34] text-white text-xs rounded-full font-inter">
                      {repo.language}
                    </span>
                  )}
                </div>
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-white/10 text-gray-400 text-xs rounded-full font-inter"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Additional GitHub Visualizations */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mb-16"
        >
          <h3 className="text-4xl font-telma font-bold text-white mb-8 text-center">
            Detailed Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-inter font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[#F26F56]" />
                Contribution Calendar
              </h4>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&hide_border=true&area=true&area_color=F26F56&bg_color=1a1a1a&color=e5e5e5&line=F26F56&point=E54C34&custom_title=My%20Contribution%20Graph`}
                alt="Contribution Calendar"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-lg p-6">
              <h4 className="text-xl font-inter font-semibold text-gray-200 mb-4 flex items-center gap-2">
                <Code className="w-6 h-6 text-[#F26F56]" />
                Language Distribution
              </h4>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=radical&hide_border=true&border_radius=10&bg_color=1a1a1a&title_color=F26F56&text_color=e5e5e5&layout=donut`}
                alt="Language Distribution"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="bg-[#0a0a0a] border-t border-white/10 text-gray-400 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-inter">
            Built with ❤️ by{" "}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#F26F56] transition-colors"
            >
              {username}
            </a>
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
