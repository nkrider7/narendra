"use client";

import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

/** Sequential panels that stitch into one continuous horizontal poster — no gaps */
const POSTER_PANELS = Array.from({ length: 20 }, (_, i) => ({
	src: `/op/${i + 1}.jpeg`,
	alt: `One Piece poster panel ${i + 1}`,
}));

const PANEL_COUNT = POSTER_PANELS.length;
/** Intrinsic size of each panel (all are square 1170×1170) */
const PANEL_SIZE = 1170;

/** Foreground: big text → clipped PNG → text → image… (swap assets later) */
const FOREGROUND_STRIP: Array<
	| { type: "text"; label: string }
	| { type: "image"; src: string; alt: string }
> = [
	{ type: "text", label: "SET SAIL" },
	
	{ type: "text", label: "GRAND LINE" },
	{ type: "image", src: "/zoro.png", alt: "Zoro" },
	{ type: "text", label: "CREW UP" },
	{ type: "image", src: "/nikorobin.png", alt: "Nico Robin" },
	{ type: "text", label: "ONE PIECE" },
	{ type: "image", src: "/luffychibi.png", alt: "Luffy chibi" },
	{ type: "text", label: "NEW WORLD" },
	{ type: "image", src: "/vani.png", alt: "Character" },
];

/**
 * Full-bleed sticky horizontal scroller.
 * Vertical page scroll drives left → right pan.
 * Background: continuous poster panels.
 * Foreground: oversized type + top-clipped PNGs in an alternating strip.
 */
export default function OnePiecePosterScroller() {
	const reduce = useReducedMotion();
	const sectionRef = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	const bgX = useTransform(
		scrollYProgress,
		[0, 1],
		["0%", reduce ? "0%" : `-${((PANEL_COUNT - 1) / PANEL_COUNT) * 100}%`],
	);

	/** Foreground travels a bit farther so type + images feel lively over the poster */
	const fgX = useTransform(
		scrollYProgress,
		[0, 1],
		["8%", reduce ? "8%" : "-72%"],
	);

	const panels = POSTER_PANELS.map((panel, index) => (
		<Image
			key={panel.src}
			src={panel.src}
			alt={panel.alt}
			width={PANEL_SIZE}
			height={PANEL_SIZE}
			priority={index < 4}
			sizes="100vh"
			draggable={false}
			className="pointer-events-none h-[100svh] w-auto max-w-none shrink-0 select-none"
		/>
	));

	const foreground = FOREGROUND_STRIP.map((item, index) => {
		if (item.type === "text") {
			return (
				<div
					key={`text-${item.label}-${index}`}
					className="flex h-full shrink-0 items-center px-6 sm:px-10 md:px-16"
				>
					<p
						className="select-none whitespace-nowrap font-inter text-[clamp(4.5rem,18vw,14rem)] font-black uppercase leading-[0.82] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
						aria-hidden={index > 0}
					>
						{item.label}
					</p>
				</div>
			);
		}

		return (
			<div
				key={`img-${item.src}-${index}`}
				className="relative flex h-full shrink-0 items-end px-2 sm:px-4"
			>
				{/* Top clip: crop the upper edge so the PNG reads as a grounded silhouette */}
				<div
					className="relative h-[78svh] w-[min(52vw,420px)] overflow-hidden sm:w-[min(48vw,480px)] md:w-[min(42vw,560px)]"
					style={{ clipPath: "inset(12% 0 0 0)" }}
				>
					<Image
						src={item.src}
						alt={item.alt}
						fill
						sizes="(max-width: 768px) 52vw, 42vw"
						draggable={false}
						className="pointer-events-none select-none object-contain object-bottom"
						priority={index < 3}
					/>
				</div>
			</div>
		);
	});

	if (reduce) {
		return (
			<section className="relative w-full overflow-x-auto bg-[#0a0a0a]">
				<div className="relative h-[100svh] w-max">
					<div className="flex h-full w-max flex-row">{panels}</div>
					<div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-max flex-row">
						{foreground}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section
			ref={sectionRef}
			className="relative w-full bg-[#0a0a0a]"
			style={{ height: `${PANEL_COUNT * 70}vh` }}
		>
			<div className="sticky top-0 h-[100svh] w-full overflow-hidden">
				{/* Background poster scroller — unchanged behavior */}
				<motion.div
					style={{ x: bgX }}
					className="absolute inset-0 flex h-full w-max flex-row will-change-transform"
				>
					{panels}
				</motion.div>

				{/* Soft vignette so white type stays readable */}
				<div
					className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-black/50 via-transparent to-black/25"
					aria-hidden
				/>

				{/* Foreground: text → clipped png → text → image… driven by same scroll */}
				<motion.div
					style={{ x: fgX }}
					className="pointer-events-none absolute inset-y-0 left-0 z-10 flex h-full w-max flex-row will-change-transform"
				>
					{foreground}
				</motion.div>
			</div>
		</section>
	);
}
