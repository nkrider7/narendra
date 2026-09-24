"use client";

import { Github, Linkedin, Mail, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Same neo palette as RemAbout */
const C = {
	cream: "#fff",
	blue: "#4A72CC",
	blueDark: "#2F4F9A",
	yellow: "#FFDE40",
	pink: "#F194B4",
	ink: "#0A0A0A",
	white: "#FFFFFF",
	muted: "#5C5C5C",
} as const;

const neo = "border-[3px] border-black shadow-[4px_4px_0_0_#000]";

const STATS = [
	{
		label: "Public Repos",
		value: "25+",
		hint: "Open voyages on GitHub",
		badge: "Repos",
		bg: "#ca8a04",
		fg: C.ink,
		image: "/chibi/usop.png",
		textColor: "#2c2213",
		imageAlt: "Usopp — public repos",
	},
	{
		label: "Contributions",
		value: "20+",
		hint: "PRs merged across the seas",
		badge: "Crew",
		bg: "#15803d",
		fg: C.ink,
		textColor: "#a8e7be",
		image: "/chibi/zoro.png",
		imageAlt: "Zoro — contributions",
	},
	{
		label: "Followers",
		value: "17+",
		hint: "Allies watching the bounty",
		badge: "Allies",
		bg: "#ea580c",
		textColor: "#fae3b5",
		fg: C.ink,
		image: "/chibi/nami.png",
		imageAlt: "Nami — followers",
	},
] as const;

const LOG_ENTRIES = [
	{
		tag: "SHIP",
		tagBg: C.yellow,
		tagText: C.ink,
		action: "Built Fishman — free Postman alternative",
		detail: "Fastest REST API tester, written in Rust",
		time: "New voyage",
		href: "https://github.com/nkrider7",
	},
	{
		tag: "NPM",
		tagBg: C.pink,
		tagText: C.ink,
		action: "Published Vani cycle tracking package",
		detail: "Menstrual cycle insights for JS / TS apps",
		time: "On npm",
		href: "https://www.npmjs.com/",
	},
	{
		tag: "SHIP",
		tagBg: C.yellow,
		tagText: C.ink,
		action: "Published NPM package",
		detail: "Backend utilities for rapid shipping",
		time: "6 months ago",
	},
] as const;

const SOCIALS = [
	{ name: "GitHub", href: "https://github.com/nkrider7", icon: Github, bg: C.blue, fg: C.white },
	{ name: "LinkedIn", href: "https://www.linkedin.com/in/narendra-nishad/", icon: Linkedin, bg: C.yellow, fg: C.ink },
	{ name: "Twitter", href: "https://x.com/narendbugfixer", icon: Twitter, bg: C.pink, fg: C.ink },
	{ name: "Email", href: "mailto:narendranishad59@gmail.com", icon: Mail, bg: C.white, fg: C.ink },
] as const;

export default function Expand() {
	return (
		<section
			className="relative w-full overflow-hidden font-inter antialiased"
			style={{ backgroundColor: C.cream, color: C.ink }}
		>
			<div
				className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full opacity-25 blur-3xl"
				style={{ backgroundColor: C.blue }}
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
				style={{ backgroundColor: C.pink }}
				aria-hidden
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
				{/* Header */}
				<header className="mb-8 max-w-2xl sm:mb-12">
					<span
						className={`mb-3 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${neo}`}
					>
						Grand Line Portfolio
					</span>
					<h2 className="mt-3 text-[clamp(2rem,6vw,3.5rem)] font-black leading-[1.05] tracking-tight">
						Dev Bounty{" "}
						<span className="relative inline-block" style={{ color: C.blueDark }}>
							Board
							<span
								className="absolute -bottom-1 left-0 h-2 w-full -skew-x-12 rounded-full"
								style={{ backgroundColor: C.yellow }}
								aria-hidden
							/>
						</span>
					</h2>
					<p
						className="mt-3 max-w-md text-sm font-medium leading-relaxed sm:text-base"
						style={{ color: C.muted }}
					>
						Wanted poster, ship stats, and a live log for a developer who ships
						like a pirate king.
					</p>
				</header>

				{/* Bento */}
				<div className="grid items-stretch gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
					{/* Wanted poster */}
					<div className="flex lg:col-span-5">
						<div
							className={`relative flex w-full flex-col overflow-hidden rounded-2xl bg-white p-3 sm:rounded-[1.5rem] sm:p-4 ${neo}`}
						>
							<div className="mb-3 flex items-center justify-between px-0.5">
								<span
									className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white ${neo}`}
									style={{ backgroundColor: C.blue }}
								>
									Wanted
								</span>
								<span
									className="font-guzan text-[11px] font-black uppercase tracking-[0.2em]"
									style={{ color: C.blueDark }}
								>
									฿ 5.5B
								</span>
							</div>

							<div
								className={`relative flex-1 overflow-hidden rounded-xl bg-white sm:rounded-2xl ${neo}`}
							>
								<Image
									src="/wanted.png"
									alt="Wanted poster — Narendra Nishad, Dead or Alive, ฿5,500,000,000"
									width={772}
									height={1154}
									className="h-auto w-full select-none"
									sizes="(max-width: 1024px) 90vw, 420px"
									draggable={false}
									priority
								/>
							</div>
						</div>
					</div>

					{/* Right column */}
					<div className="flex flex-col gap-4 sm:gap-5 lg:col-span-7">
						{/* Stats */}
						<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-4">
							{STATS.map((stat) => (
								<article
									key={stat.label}
									className={`group relative flex min-h-[190px] flex-col overflow-hidden rounded-2xl p-4 transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] sm:min-h-[210px] sm:rounded-[1.35rem] sm:p-5 ${neo}`}
									style={{ backgroundColor: stat.bg, color: stat.fg }}
								>
									<span
										className="relative z-10 inline-flex w-fit rounded-full border-[2.5px] border-black bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em]"
										style={{ color: C.ink }}
									>
										{stat.badge}
									</span>

									<p className="relative z-10 mt-3 text-[2.1rem] font-black leading-none tracking-tight sm:text-[3.35rem]" 
									style={{ color: stat.textColor }}
									>
										{stat.value}
									</p>
									<p className="relative z-10 mt-2 text-sm font-black">
										{stat.label}
									</p>
									<p
										className="relative z-10 mt-1 max-w-[68%] text-[12px] font-medium leading-relaxed"
										style={{ color: C.muted }}
									>
										{stat.hint}
									</p>

									<div className="pointer-events-none absolute -bottom-1 -right-1 h-[70%] w-[52%] transition-transform duration-200 group-hover:scale-105 sm:w-[50%]">
										<Image
											src={stat.image}
											alt={stat.imageAlt}
											fill
											className="object-contain object-bottom"
											sizes="140px"
										/>
									</div>
								</article>
							))}
						</div>

						{/* Ship's Log — OS window style like Craft.exe */}
						<div className={`flex flex-1 flex-col overflow-hidden rounded-2xl bg-white sm:rounded-[1.5rem] ${neo}`}>
							<div
								className="flex items-center justify-between border-b-[3px] border-black px-4 py-2.5 sm:px-5"
								style={{ backgroundColor: C.yellow }}
							>
								<span className="text-xs font-black uppercase tracking-wide">
									Ship&apos;s Log.exe
								</span>
								<div className="flex items-center gap-3">
									<div className="relative hidden h-10 w-10 sm:block">
										<Image
											src="/chibi/Luffy.png"
											alt=""
											fill
											className="object-contain"
											sizes="40px"
											aria-hidden
										/>
									</div>
									<div className="flex items-center gap-1.5">
										<span className="h-2.5 w-2.5 rounded-[2px] border-2 border-black bg-white" />
										<span className="h-2.5 w-2.5 rounded-[2px] border-2 border-black bg-white" />
										<span className="flex h-2.5 w-2.5 items-center justify-center rounded-[2px] border-2 border-black bg-white">
											<X className="h-2 w-2" strokeWidth={3} />
										</span>
									</div>
								</div>
							</div>

							<div className="px-4 pt-3 sm:px-5">
								<span
									className={`inline-flex rounded-full bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] ${neo}`}
								>
									Live feed
								</span>
							</div>

							<ul className="mt-3 space-y-2 px-3 pb-4 sm:px-4 sm:pb-5">
								{LOG_ENTRIES.map((entry) => {
									const inner = (
										<>
											<span
												className={`shrink-0 rounded-full border-[2.5px] border-black px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em]`}
												style={{
													backgroundColor: entry.tagBg,
													color: entry.tagText,
												}}
											>
												{entry.tag}
											</span>
											<div className="min-w-0 flex-1">
												<p className="text-[13px] font-black leading-snug sm:text-sm">
													{entry.action}
												</p>
												<p
													className="mt-0.5 text-[12px] font-medium leading-relaxed"
													style={{ color: C.muted }}
												>
													{entry.detail}
												</p>
											</div>
											<span
												className="hidden shrink-0 self-center text-[11px] font-bold sm:block"
												style={{ color: C.muted }}
											>
												{entry.time}
											</span>
										</>
									);

									const rowClass = `flex items-start gap-3 rounded-xl bg-white px-3.5 py-3 transition-[transform,box-shadow] duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] sm:items-center sm:rounded-2xl sm:px-4 ${neo}`;

									if ("href" in entry && entry.href) {
										return (
											<li key={entry.action + entry.time}>
												<a
													href={entry.href}
													target="_blank"
													rel="noopener noreferrer"
													className={rowClass}
												>
													{inner}
												</a>
											</li>
										);
									}

									return (
										<li key={entry.action + entry.time} className={rowClass}>
											{inner}
										</li>
									);
								})}
							</ul>
						</div>

						{/* Socials */}
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
							{SOCIALS.map((social) => {
								const Icon = social.icon;
								return (
									<a
										key={social.name}
										href={social.href}
										target={social.name === "Email" ? undefined : "_blank"}
										rel={
											social.name === "Email"
												? undefined
												: "noopener noreferrer"
										}
										className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-black transition-[transform,box-shadow] duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] sm:rounded-2xl ${neo}`}
										style={{ backgroundColor: social.bg, color: social.fg }}
									>
										<Icon className="h-4 w-4 shrink-0" strokeWidth={2.5} />
										{social.name}
									</a>
								);
							})}
						</div>
					</div>
				</div>

				{/* CTA — neo like RemAbout */}
				<div
					className={`relative mt-5 overflow-hidden rounded-2xl p-5 sm:mt-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:rounded-[1.5rem] sm:p-6 ${neo}`}
					style={{ backgroundColor: C.blueDark, color: C.white }}
				>
					<div className="relative min-w-0">
						<p className="text-lg font-black tracking-tight sm:text-xl">
							Available for work
						</p>
						<p className="mt-1 text-sm text-white/75">
							Freelance missions &amp; full-time voyages. Usually replies in
							24h.
						</p>
					</div>

					<div className="relative mt-4 flex flex-col gap-2.5 sm:mt-0 sm:flex-row sm:items-center">
						<a
							href="https://github.com/nkrider7"
							target="_blank"
							rel="noopener noreferrer"
							className={`inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-black transition-[transform,box-shadow] duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] ${neo}`}
							style={{ color: C.ink }}
						>
							<Github className="h-4 w-4" strokeWidth={2.5} />
							View GitHub
						</a>
						<Link
							href="/contact"
							className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-black transition-[transform,box-shadow] duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] ${neo}`}
							style={{ backgroundColor: C.pink, color: C.ink }}
						>
							Board the Ship →
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
