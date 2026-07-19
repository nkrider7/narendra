"use client";

import {
	animate,
	motion,
	useInView,
	useMotionValue,
	useMotionValueEvent,
	useSpring,
	useTransform,
} from "framer-motion";
import { Anchor, Github, Linkedin, Mail, Sparkles, Twitter, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Aged bounty / parchment palette */
const THEME = {
	cream: "#EFE2C4",
	parchment: "#E2C28E",
	tan: "#C9A66B",
	brown: "#8B5E3C",
	darkBrown: "#5C3D2E",
	ink: "#2A1A12",
	burgundy: "#6B2B2B",
	seal: "#A63D2F",
	gold: "#D4A84B",
	sand: "#F5EBD3",
} as const;

const STATS = [
	{ label: "Public Repos", value: 25, suffix: "+", emoji: "📦", bg: THEME.gold },
	{ label: "Contributions", value: 20, suffix: "+", emoji: "⚔️", bg: THEME.tan },
	{ label: "Followers", value: 17, suffix: "+", emoji: "🏴‍☠️", bg: THEME.brown },
] as const;

type LogEntry = {
	tag: "SHIP" | "NPM" | "MERGE" | "NEW";
	action: string;
	detail: string;
	repo: string;
	time: string;
	href?: string;
};

const LOG_ENTRIES: LogEntry[] = [
	{
		tag: "SHIP",
		action: "Built Fishman — free Postman alternative",
		detail: "Fastest REST API tester, written in Rust",
		repo: "fishman",
		time: "New voyage",
		href: "https://github.com/nkrider7",
	},
	{
		tag: "NPM",
		action: "Published Vani cycle tracking package",
		detail: "Menstrual cycle insights for JS / TS apps",
		repo: "vani",
		time: "On npm",
		href: "https://www.npmjs.com/",
	},
	{
		tag: "SHIP",
		action: "Published NPM package",
		detail: "Backend utilities for rapid shipping",
		repo: "@nkrider7/backend-wala",
		time: "6 months ago",
	},
	{
		tag: "MERGE",
		action: "Merged PR into soul-arise-app",
		detail: "Habit RPG system updates",
		repo: "soul-arise-app",
		time: "5 days ago",
	},
];

const TAG_COLORS: Record<LogEntry["tag"], string> = {
	SHIP: THEME.gold,
	NPM: THEME.tan,
	MERGE: THEME.brown,
	NEW: THEME.parchment,
};

const SOCIAL_STAMPS = [
	{
		name: "GitHub",
		href: "https://github.com/nkrider7",
		icon: Github,
		bg: THEME.ink,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/narendra-nishad/",
		icon: Linkedin,
		bg: THEME.darkBrown,
	},
	{
		name: "Twitter",
		href: "https://x.com/narendbugfixer",
		icon: Twitter,
		bg: THEME.brown,
	},
	{
		name: "Email",
		href: "mailto:narendranishad59@gmail.com",
		icon: Mail,
		bg: THEME.seal,
	},
] as const;

function BrutalBox({
	children,
	className = "",
	shadow = "md",
}: {
	children: ReactNode;
	className?: string;
	shadow?: "sm" | "md" | "lg";
}) {
	const shadows = {
		sm: "shadow-[4px_4px_0_#2A1A12]",
		md: "shadow-[6px_6px_0_#2A1A12]",
		lg: "shadow-[10px_10px_0_#2A1A12]",
	};

	return (
		<div
			className={`border-[3px] border-[#2A1A12] ${shadows[shadow]} ${className}`}
		>
			{children}
		</div>
	);
}

function CountUp({
	to,
	suffix = "",
}: {
	to: number;
	suffix?: string;
}) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, margin: "-60px" });
	const count = useMotionValue(0);
	const [display, setDisplay] = useState(0);

	useMotionValueEvent(count, "change", (value) => setDisplay(Math.round(value)));

	useEffect(() => {
		if (!inView) return;
		const controls = animate(count, to, {
			duration: 1.3,
			ease: [0.22, 1, 0.36, 1],
		});
		return () => controls.stop();
	}, [inView, to, count]);

	return (
		<span ref={ref}>
			{display}
			{suffix}
		</span>
	);
}

function TiltPoster({ children }: { children: ReactNode }) {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
		stiffness: 260,
		damping: 28,
	});
	const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
		stiffness: 260,
		damping: 28,
	});

	const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
		const rect = ref.current?.getBoundingClientRect();
		if (!rect) return;
		x.set((event.clientX - rect.left) / rect.width - 0.5);
		y.set((event.clientY - rect.top) / rect.height - 0.5);
	};

	const reset = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMove}
			onMouseLeave={reset}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
				transformPerspective: 1000,
			}}
			className="w-full will-change-transform"
		>
			{children}
		</motion.div>
	);
}

function StatCard({
	stat,
	index,
}: {
	stat: (typeof STATS)[number];
	index: number;
}) {
	const [pressed, setPressed] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-40px" }}
			transition={{ delay: index * 0.1, duration: 0.5 }}
			whileHover={{ y: -4 }}
			whileTap={{ scale: 0.97 }}
			onTapStart={() => setPressed(true)}
			onTap={() => setPressed(false)}
			onTapCancel={() => setPressed(false)}
			className="select-none"
		>
			<div
				className="h-full border-[3px] border-[#2A1A12] p-4 transition-all duration-150 sm:p-5"
				style={{
					backgroundColor: stat.bg,
					boxShadow: pressed ? "2px 2px 0 #2A1A12" : "6px 6px 0 #2A1A12",
					transform: pressed ? "translate(4px, 4px)" : "translate(0, 0)",
				}}
			>
				<span className="text-2xl sm:text-3xl">{stat.emoji}</span>
				<p
					className="mt-3 font-guzan text-3xl font-bold leading-none sm:text-4xl"
					style={{ color: THEME.ink }}
				>
					<CountUp to={stat.value} suffix={stat.suffix} />
				</p>
				<p
					className="mt-2 font-inter text-xs font-bold uppercase tracking-wider sm:text-sm"
					style={{ color: `${THEME.ink}B3` }}
				>
					{stat.label}
				</p>
			</div>
		</motion.div>
	);
}

function SocialStamp({
	social,
	index,
}: {
	social: (typeof SOCIAL_STAMPS)[number];
	index: number;
}) {
	const Icon = social.icon;

	return (
		<motion.a
			href={social.href}
			target={social.name === "Email" ? undefined : "_blank"}
			rel={social.name === "Email" ? undefined : "noopener noreferrer"}
			initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
			whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.08, type: "spring", stiffness: 320 }}
			whileHover={{ y: -5, rotate: index % 2 === 0 ? -2 : 2 }}
			whileTap={{ y: 2 }}
			className="group flex flex-col items-center gap-2 border-[3px] border-[#2A1A12] p-3.5 text-[#F5EBD3] shadow-[5px_5px_0_#2A1A12] sm:p-5"
			style={{ backgroundColor: social.bg }}
		>
			<Icon className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
			<span className="font-inter text-[10px] font-bold uppercase tracking-wide sm:text-xs">
				{social.name}
			</span>
		</motion.a>
	);
}

function LogRow({ entry, index }: { entry: LogEntry; index: number }) {
	const content = (
		<>
			<span
				className="w-fit shrink-0 border-2 border-[#2A1A12] px-2 py-1 font-inter text-[10px] font-black uppercase"
				style={{
					backgroundColor: TAG_COLORS[entry.tag],
					color: THEME.ink,
				}}
			>
				{entry.tag}
			</span>
			<div className="min-w-0 flex-1">
				<p
					className="font-inter text-sm font-semibold"
					style={{ color: THEME.ink }}
				>
					{entry.action}
				</p>
				<p className="font-inter text-xs" style={{ color: `${THEME.ink}99` }}>
					{entry.detail}
				</p>
				<p
					className="mt-0.5 truncate font-mono text-[11px]"
					style={{ color: `${THEME.ink}73` }}
				>
					{entry.repo}
				</p>
			</div>
			<span
				className="shrink-0 font-inter text-[11px] font-medium"
				style={{ color: `${THEME.ink}73` }}
			>
				{entry.time}
			</span>
		</>
	);

	const className =
		"group flex flex-col gap-3 border-[3px] border-[#2A1A12] p-3.5 shadow-[4px_4px_0_#2A1A12] transition-shadow hover:shadow-[6px_6px_0_#2A1A12] sm:flex-row sm:items-center sm:gap-3 sm:p-4";

	if (entry.href) {
		return (
			<motion.a
				href={entry.href}
				target="_blank"
				rel="noopener noreferrer"
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				transition={{ delay: index * 0.1 }}
				whileHover={{ x: 4 }}
				className={className}
				style={{ backgroundColor: THEME.cream }}
			>
				{content}
			</motion.a>
		);
	}

	return (
		<motion.li
			initial={{ opacity: 0, x: 20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ delay: index * 0.1 }}
			whileHover={{ x: 4 }}
			className={className}
			style={{ backgroundColor: THEME.cream }}
		>
			{content}
		</motion.li>
	);
}

export default function Expand() {
	const sectionRef = useRef<HTMLElement>(null);
	const inView = useInView(sectionRef, { once: true, margin: "-100px" });

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10"
			style={{ backgroundColor: THEME.cream }}
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-[0.22]"
				style={{
					backgroundImage: `
						linear-gradient(${THEME.darkBrown}40 1px, transparent 1px),
						linear-gradient(90deg, ${THEME.darkBrown}40 1px, transparent 1px)
					`,
					backgroundSize: "28px 28px",
				}}
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(212,168,75,0.25),transparent_45%),radial-gradient(ellipse_at_85%_90%,rgba(92,61,46,0.18),transparent_50%)]"
				aria-hidden
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.04]"
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
				}}
			/>

			<div className="relative mx-auto max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: -16 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.5 }}
					className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10"
				>
					<div className="max-w-xl">
						<div
							className="mb-3 inline-flex items-center gap-2 border-[3px] border-[#2A1A12] px-3 py-1.5 font-inter text-[11px] font-bold uppercase tracking-[0.25em] shadow-[4px_4px_0_#6B2B2B]"
							style={{ backgroundColor: THEME.ink, color: THEME.gold }}
						>
							<Anchor className="h-3.5 w-3.5" />
							Grand Line Portfolio
						</div>
						<h2
							className="font-telma text-4xl font-bold uppercase leading-[0.95] sm:text-5xl md:text-6xl"
							style={{ color: THEME.ink }}
						>
							Dev Bounty{" "}
							<span className="block sm:inline" style={{ color: THEME.seal }}>
								Board
							</span>
						</h2>
						<p
							className="mt-3 max-w-md font-inter text-sm sm:text-base"
							style={{ color: `${THEME.ink}A6` }}
						>
							Weathered ship logs, Marine seals, and a bounty poster for a
							developer who ships like a pirate king.
						</p>
					</div>
					<motion.div
						animate={{ rotate: [0, 2.5, -2.5, 0] }}
						transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
						className="hidden border-[3px] border-[#2A1A12] px-5 py-3 font-inter text-sm font-bold uppercase shadow-[6px_6px_0_#2A1A12] md:block"
						style={{ backgroundColor: THEME.gold, color: THEME.ink }}
					>
						懸賞金 · Open Sea
					</motion.div>
				</motion.div>

				<div className="grid items-start gap-6 lg:grid-cols-12 lg:gap-8">
					<div className="mx-auto w-full max-w-[340px] sm:max-w-[380px] lg:col-span-5 lg:mx-0 lg:max-w-none lg:sticky lg:top-24">
						<TiltPoster>
							<div
								className="relative overflow-hidden border-[3px] border-[#2A1A12] shadow-[8px_8px_0_#2A1A12] sm:shadow-[10px_10px_0_#2A1A12]"
								style={{ backgroundColor: THEME.parchment }}
							>
								<Image
									src="/wanted-poster.png"
									alt="Wanted poster — Narendra Nishad, Dead or Alive, ฿5,500,000,000"
									width={772}
									height={1154}
									className="h-auto w-full select-none"
									sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 42vw"
									priority
									draggable={false}
								/>
							</div>
						</TiltPoster>
					</div>

					<div className="flex flex-col gap-4 sm:gap-5 lg:col-span-7">
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
							{STATS.map((stat, index) => (
								<StatCard key={stat.label} stat={stat} index={index} />
							))}
						</div>

						<BrutalBox className="flex-1 overflow-hidden">
							<div style={{ backgroundColor: THEME.sand }}>
								<div className="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-[#2A1A12]/15 px-4 py-4 sm:px-6 sm:py-5">
									<div className="flex items-center gap-2">
										<Sparkles
											className="h-4 w-4 shrink-0"
											style={{ color: THEME.seal }}
										/>
										<h3
											className="font-guzan text-xl font-bold uppercase sm:text-2xl"
											style={{ color: THEME.ink }}
										>
											Ship&apos;s Log
										</h3>
									</div>
									<span
										className="border-2 border-[#2A1A12] px-2 py-0.5 font-inter text-[10px] font-bold uppercase"
										style={{
											backgroundColor: THEME.gold,
											color: THEME.ink,
										}}
									>
										Live feed
									</span>
								</div>

								<ul className="space-y-3 p-4 sm:p-6">
									{LOG_ENTRIES.map((entry, index) => (
										<LogRow
											key={entry.repo + entry.time}
											entry={entry}
											index={index}
										/>
									))}
								</ul>
							</div>
						</BrutalBox>

						<div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
							{SOCIAL_STAMPS.map((social, index) => (
								<SocialStamp key={social.name} social={social} index={index} />
							))}
						</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.15 }}
					className="mt-6 flex flex-col gap-4 border-[3px] border-[#2A1A12] p-4 shadow-[8px_8px_0_#6B2B2B] sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5 md:p-6"
					style={{ backgroundColor: THEME.ink }}
				>
					<a
						href="https://github.com/nkrider7"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex shrink-0 items-center justify-center gap-2 border-2 px-4 py-2.5 font-inter text-xs font-bold uppercase tracking-wide transition-colors hover:bg-[#D4A84B]/10 sm:text-sm"
						style={{ borderColor: `${THEME.gold}66`, color: THEME.gold }}
					>
						<Github className="h-4 w-4" />
						View GitHub Bounty
					</a>

					<div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
						<div
							className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-[#D4A84B] sm:h-11 sm:w-11"
							style={{ backgroundColor: THEME.gold, color: THEME.ink }}
						>
							<Zap className="h-5 w-5" />
						</div>
						<div className="min-w-0">
							<p
								className="font-guzan text-base font-bold uppercase sm:text-xl"
								style={{ color: THEME.gold }}
							>
								Available for Work
							</p>
							<p className="mt-0.5 font-inter text-xs text-[#F5EBD3]/70 sm:text-sm">
								Freelance missions &amp; full-time voyages. Usually replies in 24h.
							</p>
						</div>
					</div>

					<Link
						href="/contact"
						className="inline-flex shrink-0 items-center justify-center border-[3px] border-[#2A1A12] px-5 py-3 font-inter text-sm font-bold uppercase shadow-[4px_4px_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_#000]"
						style={{ backgroundColor: THEME.gold, color: THEME.ink }}
					>
						Board the Ship →
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
