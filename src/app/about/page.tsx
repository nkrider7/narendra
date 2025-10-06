"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Home } from "lucide-react";
import Link from "next/link";

export default function AboutWorkspace() {
	return (
		<section className="w-full min-h-screen bg-white">
			<div className="max-w-7xl mx-auto">
				{/* Two Column Grid Layout */}
				<div className="grid lg:grid-cols-2 min-h-screen">

					{/* Left Column - Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="flex flex-col justify-center px-8  md:px-12 lg:px-16 xl:px-20 py-16 lg:py-0"
					>
						{/* Heading */}
						<div className="space-y-6 max-w-md">
							{/* Back to Home Button - Glassmorphism */}
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.6 }}
								className="absolute top-8 right-8 z-50"
							>
								<Link href="/">
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md text-gray-900 rounded-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
									>
										<Home className="w-5 h-5" />
										<span> Back to Home</span>
									</motion.button>
								</Link>
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.6 }}
								className="text-5xl md:text-6xl lg:text-7xl font-guzan leading-tight"
							>
								About <br />
								<span className="block mt-2">Narendra</span>
							</motion.h1>

							{/* Subtitle */}
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.6 }}
								className="text-sm text-gray-600 font-medium"
							>
								Software Developer,<br />
								Designer.
							</motion.p>

							{/* Description */}
							    <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="pt-6 space-y-4"
                            >
                                <p className="text-base md:text-md font-inter text-gray-700 leading-relaxed">
                                    <span className="font-semibold text-gray-900">Frontend Developer</span> obsessed with creating seamless digital experiences. I build fast, accessible, and beautiful applications using <span className="font-semibold">React, Next.js, and React Native</span>. <span className="font-semibold">20+ projects shipped</span>. <span className="font-semibold">1 year of making pixels perfect</span>. Countless hours of turning ideas into reality.
                                </p>
                                <p className="text-base md:text-md font-inter text-gray-700 leading-relaxed">
                                    From <span className="font-semibold">full-stack web apps</span> to <span className="font-semibold">cross-platform mobile experiences</span>, I thrive on challenges that push me to learn and grow. My toolkit? Tailwind CSS for styling, TypeScript for reliability, and the MERN stack when the backend needs love too.
                                </p>
                                <p className="text-base md:text-md font-inter text-gray-700 leading-relaxed">
                                    Currently building in public, contributing to open source, and always looking for the next exciting project. Because at 22, with 10 years of coding behind me, I&apos;m just getting started. <span className="font-semibold">Let&apos;s build something amazing.</span>
                                </p>
                            </motion.div>
						</div>
					</motion.div>

					{/* Right Column - Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						className="relative h-[500px] lg:h-full"
					>
						{/* Image Container */}
						<div className="relative w-full h-full">
							<Image
								src="/about.webp" // Replace with your actual image
								alt="Professional working in modern workspace"
								fill
								className="object-cover"
								priority
							/>

							{/* Gradient Overlay for better text readability on mobile */}
							<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 lg:hidden" />
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
