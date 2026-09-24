"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, Code2, Smartphone, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectShowcaseItem {
	id: string;
	title: string;
	description: string;
	badge1: string;
	badge2?: string;
	image: string;
	link?: string;
	theme?: "neon" | "cream" | "white";
	accentColor?: string;
	icon?: React.ReactNode;
	ctaLabel?: string;
}

const DEFAULT_PROJECTS: ProjectShowcaseItem[] = [
	{
		id: "fishman",
		title: "Fishman Suite",
		description: "High-performance portfolio & product suite built with Next.js 15 and smooth motion workflows.",
		badge1: "Full-Stack",
		badge2: "Featured",
		image: "/fishmanmock.png",
		link: "https://github.com/nkrider7",
		theme: "neon", // Matches Card 1 vibrant lime from the reference
		accentColor: "#A3FF2E",
		ctaLabel: "View Project",
		icon: <Sparkles className="h-4 w-4" />,
	},
	{
		id: "kitfitx",
		title: "KitFitx Health",
		description: "Health-tech wellness and menstrual cycle analytics platform with real-time biometric tracking.",
		badge1: "Health Tech",
		badge2: "React Native",
		image: "/fishmanmock.png",
		link: "https://github.com/nkrider7",
		theme: "cream",
		accentColor: "#F5F3ED",
		ctaLabel: "Read More",
		icon: <Smartphone className="h-4 w-4" />,
	},
	{
		id: "boomzo",
		title: "Boomzo Mobile",
		description: "Cross-platform mobile application and backend API infrastructure launched to thousands of active users.",
		badge1: "Mobile App",
		badge2: "Next.js",
		image: "/fishmanmock.png",
		link: "https://github.com/nkrider7",
		theme: "cream",
		accentColor: "#F5F3ED",
		ctaLabel: "Read More",
		icon: <Code2 className="h-4 w-4" />,
	},
	{
		id: "soularise",
		title: "SoulArise SaaS",
		description: "Cloud-native creative application with real-time multiplayer canvas and advanced state sync.",
		badge1: "SaaS Platform",
		badge2: "Web App",
		image: "/soularise.png",
		link: "https://github.com/nkrider7",
		theme: "cream",
		accentColor: "#F5F3ED",
		ctaLabel: "Read More",
		icon: <Layers className="h-4 w-4" />,
	},
	{
		id: "digital",
		title: "Digital Agency",
		description: "Modern digital agency web platform with responsive layouts and fluid kinetic typography.",
		badge1: "Web Platform",
		badge2: "TypeScript",
		image: "/digital.png",
		link: "https://github.com/nkrider7",
		theme: "cream",
		accentColor: "#F5F3ED",
		ctaLabel: "Read More",
		icon: <Globe className="h-4 w-4" />,
	},
	{
		id: "cybergen",
		title: "CyberGen AI",
		description: "Autonomous agent interface and workflow runner with intelligent background tooling.",
		badge1: "AI Agents",
		badge2: "Full-Stack",
		image: "/cybergen.png",
		link: "https://github.com/nkrider7",
		theme: "cream",
		accentColor: "#F5F3ED",
		ctaLabel: "Read More",
		icon: <Sparkles className="h-4 w-4" />,
	},
];

interface ProjectShowcaseCarouselProps {
	headline?: string;
	headlineSecondLine?: string;
	projects?: ProjectShowcaseItem[];
	className?: string;
}

export default function ProjectShowcaseCarousel({
	headline = "Comprehensive Project",
	headlineSecondLine = "Showcase for Everyone",
	projects = DEFAULT_PROJECTS,
	className = "",
}: ProjectShowcaseCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		containScroll: "trimSnaps",
		dragFree: true,
		loop: false,
	});

	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(true);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
		return () => {
			emblaApi.off("select", onSelect);
			emblaApi.off("reInit", onSelect);
		};
	}, [emblaApi, onSelect]);

	const scrollPrev = () => emblaApi?.scrollPrev();
	const scrollNext = () => emblaApi?.scrollNext();

	return (
		<section
			className={`relative w-full bg-[#fbfbfb] py-14 sm:py-20 md:py-24 font-inter text-neutral-900 antialiased overflow-hidden ${className}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-0 ">
				{/* Header: Title on Left, Round Black Controls on Right */}
				<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 sm:pb-12">
					<div>
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-[-0.03em] text-neutral-950 leading-[1.08]">
							{headline}
							<br />
							{headlineSecondLine}
						</h2>
					</div>

					{/* Navigation Buttons: Clean round black circles with white arrows */}
					<div className="flex items-center gap-2.5 self-end sm:self-auto">
						<button
							onClick={scrollPrev}
							disabled={!canScrollPrev}
							aria-label="Previous slide"
							className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:bg-neutral-800 hover:scale-105 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-black shadow-sm"
						>
							<ArrowLeft className="h-4 w-4 stroke-[2.5]" />
						</button>
						<button
							onClick={scrollNext}
							disabled={!canScrollNext}
							aria-label="Next slide"
							className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-all duration-200 hover:bg-neutral-800 hover:scale-105 active:scale-95 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-black shadow-sm"
						>
							<ArrowRight className="h-4 w-4 stroke-[2.5]" />
						</button>
					</div>
				</div>

				{/* Embla Carousel Viewport */}
				<div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8" ref={emblaRef}>
					<div className="flex gap-5 sm:gap-6 select-none py-2">
						{projects.map((project, index) => {
							const isNeon = project.theme === "neon" || index === 0;
							const headerBg = isNeon ? "#A3FF2E" : project.accentColor || "#F5F3ED";

							return (
								<motion.div
									key={project.id}
									whileHover={{ y: -6 }}
									transition={{ duration: 0.3, ease: "easeOut" }}
									className="group flex-shrink-0 w-[290px] sm:w-[320px] md:w-[340px] flex flex-col rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5"
									style={{
										backgroundColor: isNeon ? "#A3FF2E" : "#F5F3ED",
									}}
								>
									{/* Top Half: Badges, Title, Subtitle, Circular Icon */}
									<div
										className="p-6 sm:p-7 flex flex-col justify-between"
										style={{ backgroundColor: headerBg }}
									>
										{/* Pill Tags and Top Right Icon */}
										<div className="flex items-center justify-between gap-2">
											<div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
												<span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-neutral-900 shadow-xs border border-black/5">
													{project.badge1}
												</span>
												{project.badge2 && (
													<span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-neutral-900 shadow-xs border border-black/5">
														{project.badge2}
													</span>
												)}
											</div>

											{/* Circular Icon in Top Right */}
											<div
												className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
													isNeon
														? "bg-black text-[#A3FF2E]"
														: "bg-black/10 text-neutral-800"
												}`}
											>
												{project.icon || <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />}
											</div>
										</div>

										{/* Main Title & Description */}
										<div className="mt-5 sm:mt-6">
											<h3 className="text-2xl sm:text-[28px] font-black tracking-[-0.025em] text-neutral-950 leading-[1.12]">
												{project.title}
											</h3>
											<p className="mt-2 text-xs sm:text-[13px] text-neutral-700 font-medium leading-relaxed line-clamp-2">
												{project.description}
											</p>
										</div>
									</div>

									{/* Bottom Half: Full-bleed Visual with Inset Rounded Corners & Frosted Glass Action Button */}
									<div className="relative w-full h-[300px] sm:h-[340px] rounded-t-[24px] sm:rounded-t-[26px] overflow-hidden bg-neutral-900">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
											sizes="(max-width: 640px) 290px, (max-width: 768px) 320px, 340px"
										/>

										{/* Ambient Gradient Overlay for text contrast */}
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

										{/* Frosted Glass Floating Action Pill */}
										<div className="absolute bottom-4 left-4 z-10">
											<a
												href={project.link || "#"}
												target={project.link?.startsWith("http") ? "_blank" : undefined}
												rel={project.link?.startsWith("http") ? "noopener noreferrer" : undefined}
												className="inline-flex items-center gap-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:bg-white/35 hover:scale-[1.03] active:scale-[0.98]"
											>
												<span>{project.ctaLabel || "Read More"}</span>
												<span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-0.5">
													<ArrowRight className="h-3 w-3 stroke-[2.5]" />
												</span>
											</a>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

