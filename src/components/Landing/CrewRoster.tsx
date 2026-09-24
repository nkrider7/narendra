"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface CareerMilestone {
	id: string;
	number: string;
	title: string;
	displayName: string;
	rolePrefix: string;
	role: string;
	period: string;
	description: string;
	tech: string[];
	coords: { x: number; y: number };
	accent: string;
}

const MILESTONES: CareerMilestone[] = [
	{
		id: "ds-college",
		number: "01",
		title: "DS COLLEGE",
		displayName: "DS College",
		rolePrefix: "Academia",
		role: "Bechelor of Computer Application (BCA)",
		period: "2021 — 2024",
		description:
			"Built solid foundations in Computer Science engineering, Data Structures & Algorithms, Database Management Systems, Operating Systems, and Object-Oriented Software Design.",
		tech: ["C++", "DSA", "DBMS", "Operating Systems", "Computer Networks", "JavaScript"],
		coords: { x: 50, y: 78 },
		accent: "#2563eb",
	},
	{
		id: "boomzo",
		number: "02",
		title: "BOOMZO",
		displayName: "Boomzo",
		rolePrefix: "Startup",
		role: "Full-Stack Developer",
		period: "Oct 2024 — Jul 2025",
		description:
			"Started as Frontend Developer and transitioned into React Native to help launch Boomzo's first mobile applications. Expanded product ownership and strengthened full-stack capabilities with Next.js and API-driven development.",
		tech: ["React Native", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Redux"],
		coords: { x: 35, y: 57 },
		accent: "#dc2626",
	},
	{
		id: "remote-dev",
		number: "03",
		title: "KITFITX",
		displayName: "Remote Software Developer",
		rolePrefix: "Remote",
		role: "Full-Stack Developer",
		period: "Sep 2025 — Mar 2026",
		description:
			"Worked as a Software Developer at a health-focused startup, building features for menstrual tracking, wellness insights, and daily health support across React, Next.js, React Native, and backend services.",
		tech: ["Next.js", "React Native", "PostgreSQL", "Node.js", "REST APIs", "Tailwind CSS"],
		coords: { x: 74, y: 56 },
		accent: "#ea580c",
	},
	{
		id: "fishman",
		number: "04",
		title: "FISHMAN",
		displayName: "Fishman",
		rolePrefix: "Self",
		role: "Founder & Builder",
		period: "Jul 2026 — Present",
		description:
			"Building end-to-end modern web applications with a strong focus on high-performance UX, elegant UI interactions, scalable Next.js architectures, and full-stack execution.",
		tech: ["Next.js 15", "React 19", "Framer Motion", "Tailwind CSS", "TypeScript"],
		coords: { x: 32, y: 40 },
		accent: "#3b82f6",
	},
	{
		id: "soulspace",
		number: "05",
		title: "SOULSPACE",
		displayName: "SoulSpace",
		rolePrefix: "Core",
		role: "SaaS & Product Engineer",
		period: "2026 — Present",
		description:
			"Architecting and shipping high-velocity SaaS products, real-time collaboration workflows, and modern cloud architectures with scalable database systems.",
		tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "WebSockets"],
		coords: { x: 67, y: 40 },
		accent: "#7c3aed",
	},
	{
		id: "next-company",
		number: "06",
		title: "YOUR COMPANY",
		displayName: "Your Company",
		rolePrefix: "Upcoming",
		role: "Software Engineer",
		period: "Loading 2026+",
		description:
			"Ready to bring product velocity, full-stack craftsmanship, and deep curiosity to ambitious teams building cutting-edge software and user experiences.",
		tech: ["Full-Stack", "AI Agents", "System Design", "Product Engineering", "Cloud Infrastructure"],
		coords: { x: 52, y: 18 },
		accent: "#10b981",
	},
];

export default function CrewRoster() {
	// Default selected place is Fishman (matches the user mockup image)
	const [activeId, setActiveId] = useState<string>("next-company");

	const activeIndex = MILESTONES.findIndex((m) => m.id === activeId);
	const activeMilestone = MILESTONES[activeIndex] || MILESTONES[3];

	const handlePrev = () => {
		const newIndex = (activeIndex - 1 + MILESTONES.length) % MILESTONES.length;
		setActiveId(MILESTONES[newIndex].id);
	};

	const handleNext = () => {
		const newIndex = (activeIndex + 1) % MILESTONES.length;
		setActiveId(MILESTONES[newIndex].id);
	};

	return (
		<section className="relative w-full bg-white py-16 sm:py-20 md:py-28 font-inter text-neutral-900 antialiased overflow-hidden">
			<div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
				
				{/* 2-Column Responsive Layout Matching the Mockup */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
					
					{/* Left Column: Active Milestone Details */}
					<div className="lg:col-span-6 flex flex-col justify-center select-none">
						{/* Milestone Quick Navigation Tabs */}
						<div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
							{MILESTONES.map((m) => (
								<button
									key={m.id}
									onClick={() => setActiveId(m.id)}
									className={`px-3 py-1 rounded-full font-mono text-xs font-semibold transition-all duration-200 ${
										activeId === m.id
											? "bg-black text-white shadow-sm scale-105"
											: "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
									}`}
								>
									{m.number} {m.displayName}
								</button>
							))}
						</div>

						{/* Animated Detail Card */}
						<AnimatePresence mode="wait">
							<motion.div
								key={activeMilestone.id}
								initial={{ opacity: 0, y: 14 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -14 }}
								transition={{ duration: 0.35, ease: "easeOut" }}
								className="flex flex-col"
							>
								{/* Title */}
								<h2 className="text-4xl sm:text-5xl lg:text-[58px] font-black uppercase tracking-tight text-black leading-none">
									{activeMilestone.title}
								</h2>

								{/* Role & Prefix */}
								<div className="mt-3.5 flex items-center gap-2 text-base sm:text-lg">
									<span className="text-neutral-500 font-medium">
										{activeMilestone.rolePrefix}
									</span>
									<span className="text-neutral-400 font-bold">•</span>
									<span className="font-bold text-neutral-900">
										{activeMilestone.role}
									</span>
								</div>

								{/* Period */}
								<p className="mt-1 font-mono text-xs sm:text-sm font-semibold text-neutral-400 tracking-wide">
									{activeMilestone.period}
								</p>

								{/* Description */}
								<p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-[17px] leading-relaxed text-neutral-600 max-w-xl font-normal">
									{activeMilestone.description}
								</p>

								{/* Tech Stack Pills */}
								<div className="mt-7 sm:mt-8 flex flex-wrap gap-2.5 max-w-xl">
									{activeMilestone.tech.map((t) => (
										<span
											key={t}
											className="rounded-lg border border-neutral-300 bg-white px-3.5 py-1.5 font-mono text-xs sm:text-sm font-medium text-neutral-800 shadow-[1px_1px_0_0_rgba(0,0,0,0.04)] hover:border-black transition-colors"
										>
											{t}
										</span>
									))}
								</div>
							</motion.div>
						</AnimatePresence>

						{/* Navigation Arrows */}
						<div className="mt-10 sm:mt-12 flex items-center gap-3">
							<button
								onClick={handlePrev}
								aria-label="Previous milestone"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-black transition-all hover:bg-black hover:text-white hover:border-black active:scale-95 shadow-xs"
							>
								<ArrowLeft className="h-4 w-4" />
							</button>
							<button
								onClick={handleNext}
								aria-label="Next milestone"
								className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-black transition-all hover:bg-black hover:text-white hover:border-black active:scale-95 shadow-xs"
							>
								<ArrowRight className="h-4 w-4" />
							</button>
							<span className="font-mono text-xs font-semibold text-neutral-400 ml-2">
								{activeIndex + 1} / {MILESTONES.length}
							</span>
						</div>
					</div>

					{/* Right Column: 3D Career Map Island with Dotted Guide Lines & Pins */}
					<div className="lg:col-span-6 relative flex items-center justify-center">
						<div className="relative w-full max-w-[500px] aspect-[1/1.65]">
							
							{/* Background SVG Blueprint Dotted Guide Lines matching the mockup */}
							

							{/* 3D Isometric Map Image */}
							<div className="relative w-full h-full">
								<Image
									src="/map.png"
									alt="3D Career Island Map"
									fill
									className="object-contain drop-shadow-sm pointer-events-none select-none"
									priority
								/>
							</div>

							{/* Interactive Numbered Pins on Map */}
							{MILESTONES.map((m) => {
								const isActive = activeId === m.id;

								return (
									<div
										key={m.id}
										style={{
											left: `${m.coords.x}%`,
											top: `${m.coords.y}%`,
										}}
										className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
									>
										{/* Floating Label Badge (Shown on Active / Hover) */}
										<AnimatePresence>
											{isActive && (
												<motion.div
													initial={{ opacity: 0, y: 6, scale: 0.9 }}
													animate={{ opacity: 1, y: 0, scale: 1 }}
													exit={{ opacity: 0, y: 4, scale: 0.9 }}
													transition={{ duration: 0.2 }}
													className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 whitespace-nowrap rounded-lg border-2 border-black bg-white px-2.5 py-1 font-mono text-[11px] font-bold text-black shadow-[2px_2px_0_0_#000] flex items-center gap-1.5 z-30"
												>
													<span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
													<span>{m.displayName}</span>
												</motion.div>
											)}
										</AnimatePresence>

										{/* Interactive Numbered Pin Button */}
										<button
											onClick={() => setActiveId(m.id)}
											aria-label={`Select ${m.displayName}`}
											className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 border-black font-mono text-xs font-black transition-all duration-200 cursor-pointer ${
												isActive
													? "bg-black text-white shadow-[2px_2px_0_0_#000] scale-110 ring-4 ring-neutral-300/50"
													: "bg-white text-black shadow-[2px_2px_0_0_#000] hover:scale-110 hover:bg-neutral-100"
											}`}
										>
											{m.number}
										</button>
									</div>
								);
							})}

						</div>
					</div>

				</div>

			</div>
		</section>
	);
}

