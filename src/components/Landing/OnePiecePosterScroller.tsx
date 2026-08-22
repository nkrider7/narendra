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

/** Four-pointed sparkle — the AI star used between oversized type */
function FourStarIcon({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 64 64"
			fill="currentColor"
			aria-hidden
			className={className}
		>
			<path d="M32 2C32 2 34.8 22.4 43.2 32C34.8 41.6 32 62 32 62C32 62 29.2 41.6 20.8 32C29.2 22.4 32 2 32 2Z" />
			<path d="M2 32C2 32 22.4 29.2 32 20.8C41.6 29.2 62 32 62 32C62 32 41.6 34.8 32 43.2C22.4 34.8 2 32 2 32Z" />
		</svg>
	);
}

/** Foreground: big text → four-star AI icon → text → icon… */
const FOREGROUND_STRIP: Array<
	| { type: "text"; label: string }
	| { type: "icon" }
> = [
	{ type: "text", label: "SET SAIL" },
	{ type: "icon" },
	{ type: "text", label: "GRAND LINE" },
	{ type: "icon" },
	{ type: "text", label: "CREW UP" },
	{ type: "icon" },
	{ type: "text", label: "ONE PIECE" },
	{ type: "icon" },
	{ type: "text", label: "NEW WORLD" },
];

/**
 * Full-bleed sticky horizontal scroller.
 * Vertical page scroll drives left → right pan.
 * Background: continuous poster panels.
 * Foreground: oversized type + four-star AI icons in an alternating strip.
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

	/** Foreground travels a bit farther so type + icons feel lively over the poster */
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
						className="select-none whitespace-nowrap font-inter text-[clamp(1.75rem,6vw,4.5rem)] font-black uppercase leading-[0.82] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]"
						aria-hidden={index > 0}
					>
						{item.label}
					</p>
				</div>
			);
		}

		return (
			<div
				key={`icon-${index}`}
				className="flex h-full shrink-0 items-center px-4 sm:px-8 md:px-10"
			>
				<FourStarIcon className="size-[clamp(1.25rem,4vw,2.75rem)] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]" />
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

				{/* Foreground: text → four-star AI icon → text… driven by same scroll */}
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
