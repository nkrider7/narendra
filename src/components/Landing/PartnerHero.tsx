"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PartnerHeroProps {
	kicker?: string;
	headline?: string;
	headlineSecondLine?: string;
	subtitle?: string;
	ctaText?: string;
	ctaHref?: string;
	statNumber?: string;
	statLabel?: string;
	integrationTitle?: string;
	integrationSubtitle?: string;
	heroImageSrc?: string;
	className?: string;
}

export default function PartnerHero({
	kicker = "A DEVELOPER WHO IMAGINES BOLD, BUILDS SMART, AND BRINGS IDEAS TO LIFE.",
	headline = "I Build Digital",
	headlineSecondLine = "Experiences That Matter!",
	subtitle = "I build thoughtful interfaces, powerful applications, and developer tools with a focus on performance, simplicity, and great design.",
	ctaText = "Book a Call",
	ctaHref = "https://cal.com/narendra-nishad/30min",
	statNumber = "20+",
	statLabel = "Projects Built,\nClients Served",
	integrationTitle = "Design+\nDevelopment",
	integrationSubtitle = "One person. From the first idea to the final product.",
	heroImageSrc = "/herostand.jpeg",
	className = "",
}: PartnerHeroProps) {
	return (
		<section
			className={`relative w-full bg-[#f9f9fb] py-14 sm:py-20 md:py-24 font-inter text-neutral-900 antialiased overflow-hidden ${className}`}
		>
			{/* Top Header Section */}
			<div className="mx-auto max-w-4xl px-4 sm:px-6 text-center select-none">
				{/* Kicker / Eyebrow */}
				<motion.p
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-neutral-800"
				>
					{kicker}
				</motion.p>

				{/* Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
					className="mt-4 sm:mt-5 text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-[-0.035em] text-neutral-950 leading-[1.05]"
				>
					{headline}
					<br />
					{headlineSecondLine}
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
					className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-500 font-normal leading-relaxed"
				>
					{subtitle}
				</motion.p>

				{/* Call to Action Button */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.22, ease: "easeOut" }}
					className="mt-6 sm:mt-8 flex justify-center"
				>
					<a
						href={ctaHref}
						className="group inline-flex items-center gap-3 rounded-full bg-black pl-6 pr-2 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-neutral-800 hover:scale-[1.03] active:scale-[0.98]"
					>
						<span>{ctaText}</span>
						<span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-0.5">
							<ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
						</span>
					</a>
				</motion.div>
			</div>

			{/* Main Showcase Hero Display Card */}
			<div className="mx-auto mt-10 sm:mt-14 max-w-5xl px-4 sm:px-6">
				<motion.div
					initial={{ opacity: 0, scale: 0.98, y: 24 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="relative w-full aspect-[4/3] sm:aspect-[16/11] md:aspect-[16/16] max-h-[740px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-black/5"
					
				>
					
					

					{/* Top-Left Stat Overlay */}
					<div className="absolute left-6 sm:left-10 top-6 sm:top-10 z-20 select-none">
						<motion.h2
							initial={{ opacity: 0, y: -10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3 }}
							className="text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-md"
						>
							{statNumber}
						</motion.h2>
						<p className="mt-1 text-xs sm:text-sm md:text-base font-semibold text-white/95 leading-snug whitespace-pre-line drop-shadow">
							{statLabel}
						</p>
					</div>

					{/* Bottom-Right Integration Text Overlay */}
					<div className="absolute right-6 sm:right-10 bottom-2 sm:bottom-22 md:bottom-24 z-20 text-right sm:text-left select-none max-w-[240px]">
						<motion.h3
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.35 }}
							className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight drop-shadow-md whitespace-pre-line"
						>
							{integrationTitle}
						</motion.h3>
						<p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed drop-shadow">
							{integrationSubtitle}
						</p>
					</div>

					{/* Center Hero Cutout Portrait */}
					<div className=" z-10 flex items-end justify-center pointer-events-none">
						
							<Image
								src={heroImageSrc}
								alt="Hero portrait"
								fill
								priority
								className="object-cover object-center "
								
							
							/>
						
					</div>

					

					
				</motion.div>
			</div>
		</section>
	);
}

