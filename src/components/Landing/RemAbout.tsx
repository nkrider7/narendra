"use client";

import Image from "next/image";
import Link from "next/link";
import { Gamepad2, Layout, Palette, Search, Sparkles, X } from "lucide-react";

/** Palette from rem.png collage */
const C = {
	cream: "#fff",
	blue: "#4A72CC",
	blueDark: "#2F4F9A",
	yellow: "#fedc15",
	pink: "#feb4b6",
	ink: "#0A0A0A",
	white: "#FFFFFF",
	muted: "#5C5C5C",
} as const;

const neo = "border-[3px] border-black shadow-[4px_4px_0_0_#000]";

const WORK = [
	{
		id: "dev",
		label: "Development",
		title: "Ship real products",
		body: "Fast web apps, APIs, and playful frontends that feel alive — not just templates.",
		bg: C.blue,
		fg: C.white,
		icon: Layout,
	},
	{
		id: "design",
		label: "UI Design",
		title: "Bold visual systems",
		body: "Neubrutal, cartoon, and high-impact layouts that stick in memory and convert.",
		bg: C.yellow,
		fg: C.ink,
		icon: Palette,
	},
	{
		id: "character",
		label: "Character Design",
		title: "Story in every pixel",
		body: "Anime-inspired characters & motifs that give brands a soul and a mascot people love.",
		bg: C.pink,
		fg: C.ink,
		icon: Sparkles,
	},
] as const;

const STRENGTHS = [
	{ name: "Gamified UX", pct: 94 },
	{ name: "Landing pages", pct: 96 },
	{ name: "Motion & delight", pct: 90 },
	{ name: "Character worlds", pct: 88 },
] as const;

function ProgressBar({ value }: { value: number }) {
	const blocks = 10;
	const filled = Math.round((value / 100) * blocks);

	return (
		<div className="flex gap-1">
			{Array.from({ length: blocks }).map((_, i) => (
				<span
					key={i}
					className="h-3.5 flex-1 rounded-sm border-2 border-black sm:h-4"
					style={{
						backgroundColor: i < filled ? C.blue : C.white,
					}}
				/>
			))}
		</div>
	);
}

export default function RemAbout() {
	return (
		<section
			className="relative w-full overflow-hidden font-inter antialiased"
			style={{ backgroundColor: C.cream, color: C.ink }}
		>
			<div
				className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
				style={{ backgroundColor: C.pink }}
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute -left-16 bottom-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
				style={{ backgroundColor: C.blue }}
				aria-hidden
			/>

			<div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
				{/* Header */}
				<div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<span
							className={`mb-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${neo}`}
						>
							<Gamepad2 className="h-3.5 w-3.5" strokeWidth={2.5} />
							What I build
						</span>
						<h2 className="mt-3 text-[clamp(2rem,6vw,3.5rem)] font-black leading-[1.05] tracking-tight">
							Work that{" "}
							<span className="relative inline-block" style={{ color: C.blueDark }}>
								plays
								<span
									className="absolute -bottom-1 left-0 h-2 w-full -skew-x-12 rounded-full"
									style={{ backgroundColor: C.yellow }}
									aria-hidden
								/>
							</span>
						</h2>
						<p
							className="mt-3 max-w-lg text-sm font-medium leading-relaxed sm:text-base"
							style={{ color: C.muted }}
						>
							Development, design, and character worlds — especially gamified
							experiences and landing pages that feel fun to use.
						</p>
					</div>

					<div className="flex items-center gap-2 self-start sm:self-auto">
						<div
							className={`flex h-11 min-w-[150px] items-center rounded-full bg-white px-4 text-sm font-medium text-zinc-400 sm:min-w-[190px] ${neo}`}
						>
							search work…
						</div>
						<button
							type="button"
							aria-label="Search"
							className={`flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#000] ${neo}`}
							style={{ backgroundColor: C.blue }}
						>
							<Search className="h-5 w-5" strokeWidth={2.5} />
						</button>
					</div>
				</div>

				<div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-12 lg:items-center lg:gap-5 xl:gap-8">
					{/* Rem — big & clean, first on mobile */}
					<div className="relative order-1 mx-auto w-full max-w-[420px] sm:max-w-[480px] lg:order-2 lg:col-span-5 lg:mx-0 lg:max-w-none xl:col-span-5">
						<div className="relative mx-auto w-full">
							{/* Soft glow behind — no overlapping cards */}
							<div
								className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
								style={{ backgroundColor: C.pink }}
								aria-hidden
							/>
							<Image
								src="/rem.png"
								alt="Character design vibe — Rem illustration"
								width={1122}
								height={1402}
								className="relative z-10 mx-auto h-auto w-full max-h-[min(72vh,640px)] select-none object-contain drop-shadow-[8px_10px_0_rgba(0,0,0,0.12)] sm:max-h-[min(75vh,720px)] lg:max-h-none"
								sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 520px"
								priority
								draggable={false}
							/>
						</div>
					</div>

					{/* Left — work pillars */}
					<div className="relative z-10 order-2 flex flex-col gap-3.5 lg:order-1 lg:col-span-4">
						{WORK.map((item) => {
							const Icon = item.icon;
							return (
								<article
									key={item.id}
									className={`relative rounded-2xl p-4 sm:rounded-[1.35rem] sm:p-5 ${neo}`}
									style={{ backgroundColor: item.bg, color: item.fg }}
								>
									<div className="flex items-start gap-3">
										<span
											className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-[2.5px] border-black bg-white"
											style={{ color: C.ink }}
										>
											<Icon className="h-4 w-4" strokeWidth={2.5} />
										</span>
										<div className="min-w-0">
											<p className="text-[10px] font-black uppercase tracking-[0.18em] opacity-80">
												{item.label}
											</p>
											<h3 className="mt-0.5 text-lg font-black tracking-tight sm:text-xl">
												{item.title}
											</h3>
											<p className="mt-1.5 text-[13px] font-medium leading-relaxed opacity-90 sm:text-sm">
												{item.body}
											</p>
										</div>
									</div>
								</article>
							);
						})}

						<article
							className={`rounded-2xl bg-white p-4 sm:rounded-[1.35rem] sm:p-5 ${neo}`}
						>
							<p
								className="text-[11px] font-black uppercase tracking-[0.18em]"
								style={{ color: C.muted }}
							>
								Why it hits
							</p>
							<ul className="mt-3 space-y-2.5">
								{[
									"Gamified flows — progress, rewards, and micro-wins that keep users hooked",
									"Landing pages — one clear story, bold hierarchy, and CTAs that convert",
									"Character design — mascots & scenes that make brands feel alive",
								].map((line) => (
									<li
										key={line}
										className="flex gap-2.5 text-[13px] font-medium leading-snug sm:text-sm"
									>
										<span
											className="mt-1 h-2 w-2 shrink-0 rounded-full border-2 border-black"
											style={{ backgroundColor: C.yellow }}
											aria-hidden
										/>
										{line}
									</li>
								))}
							</ul>
						</article>
					</div>

					{/* Right — craft meter + CTA */}
					<div className="relative z-10 order-3 flex flex-col gap-4 lg:col-span-3">
						<div className={`overflow-hidden rounded-2xl bg-white ${neo}`}>
							<div
								className="flex items-center justify-between border-b-[3px] border-black px-3 py-2"
								style={{ backgroundColor: C.yellow }}
							>
								<span className="text-xs font-black uppercase tracking-wide">
									Craft.exe
								</span>
								<div className="flex items-center gap-1.5">
									<span className="h-2.5 w-2.5 rounded-[2px] border-2 border-black bg-white" />
									<span className="h-2.5 w-2.5 rounded-[2px] border-2 border-black bg-white" />
									<span className="flex h-2.5 w-2.5 items-center justify-center rounded-[2px] border-2 border-black bg-white">
										<X className="h-2 w-2" strokeWidth={3} />
									</span>
								</div>
							</div>
							<div className="space-y-3 p-4">
								<p className="text-[11px] font-black uppercase tracking-[0.16em]">
									Specialty load…
								</p>
								{STRENGTHS.map((s) => (
									<div key={s.name}>
										<div className="mb-1 flex items-center justify-between text-[11px] font-bold">
											<span>{s.name}</span>
											<span style={{ color: C.muted }}>{s.pct}%</span>
										</div>
										<ProgressBar value={s.pct} />
									</div>
								))}
							</div>
						</div>

						<div
							className={`rounded-2xl p-4 sm:p-5 ${neo}`}
							style={{ backgroundColor: C.blueDark, color: C.white }}
						>
							<p className="text-sm font-black leading-snug sm:text-base">
								Need a page that feels like a game?
							</p>
							<p className="mt-1 text-xs text-white/75">
								Landings, onboarding, and character-led UIs — built to delight.
							</p>
							<div className="mt-4 flex flex-col gap-2">
								<Link
									href="#work"
									className={`inline-flex h-10 items-center justify-center rounded-xl bg-white text-sm font-black transition-transform duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#000] ${neo}`}
									style={{ color: C.ink }}
								>
									See my work →
								</Link>
								<Link
									href="/contact"
									className={`inline-flex h-10 items-center justify-center rounded-xl text-sm font-black transition-transform duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#000] ${neo}`}
									style={{ backgroundColor: C.pink, color: C.ink }}
								>
									Start a project
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
