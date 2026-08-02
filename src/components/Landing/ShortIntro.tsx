"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Play } from "lucide-react";

const C = {
	ink: "#111111",
	muted: "#6B7280",
	card: "#F3F4F6",
	luffy: "#E11D48",
	zoro: "#15803D",
	robin: "#5B21B6",
	pop: "#bd0007",
} as const;

const PROFILE_GIF =
	"https://media.tenor.com/kGe0A0NBA8kAAAAj/one-piece-pixel.gif";

const CARDS = [
	{
		id: "experience",
		label: "My Experience",
		labelColor: C.luffy,
		title: "2 Years in Tech",
		body: "Shipping products across startups — web, mobile, and full-stack",
		image: "/luffychibi.png",
		imageAlt: "Luffy Gear 5 — experience in tech",
		tilt: "md:-rotate-1",
		cta: {
			href: "/whoami",
			label: "View journey",
			external: false,
			bg: C.luffy,
			icon: null as "play" | null,
		},
	},
	{
		id: "music",
		label: "My music playlist",
		labelColor: C.zoro,
		title: "Training Mix",
		body: "Swords out, headphones on — focus beats for deep work",
		image: "/zoro.png",
		imageAlt: "Zoro listening to music",
		tilt: "md:rotate-1",
		cta: {
			href: "https://open.spotify.com/",
			label: "Spotify",
			external: true,
			bg: C.zoro,
			icon: "play" as const,
		},
	},
	{
		id: "learning",
		label: "What I'm currently learning",
		labelColor: C.robin,
		title: "Rust Programming",
		body: "Ownership, borrowing, lifetimes, and async patterns",
		image: "/nikorobin.png",
		imageAlt: "Robin reading Rust programming book",
		tilt: "md:-rotate-1",
		cta: null,
	},
] as const;

export default function ShortIntro() {
	return (
		<section
			className="relative w-full overflow-x-hidden bg-white font-inter antialiased"
			style={{ color: C.ink }}
		>
			{/* Soft playful blobs */}
			<div
				className="pointer-events-none absolute -left-24 top-20 h-56 w-56 rounded-full opacity-[0.12] blur-3xl"
				style={{ backgroundColor: C.luffy }}
				aria-hidden
			/>
			<div
				className="pointer-events-none absolute -right-16 bottom-32 h-48 w-48 rounded-full opacity-[0.1] blur-3xl"
				style={{ backgroundColor: C.robin }}
				aria-hidden
			/>

			<div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8">
				{/* Text left · stack/swords right — all breakpoints */}
				<div className="flex items-stretch gap-3 sm:gap-6 lg:gap-10">
					<div className="min-w-0 flex-1 space-y-4 sm:space-y-5 md:space-y-6">
						<h1 className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[clamp(1.4rem,6.4vw,3.5rem)] font-black leading-[1.12] tracking-tight sm:gap-x-3">
							<span>Hi, I&apos;m</span>
							<span className="inline-flex shrink-0 -rotate-2 overflow-hidden rounded-xl border-[3px] border-black bg-[#bd0007] shadow-[3px_3px_0_0_#000] sm:rounded-2xl">
								<Image
									src={PROFILE_GIF}
									alt="Narendra Nishad"
									width={72}
									height={72}
									className="h-10 w-10 object-contain sm:h-14 sm:w-14 md:h-[68px] md:w-[68px]"
									sizes="68px"
									priority
									unoptimized
								/>
							</span>
							<span className="relative">
								Narendra Nishad!
								<span
									className="absolute -bottom-1 left-0 h-2 w-full -skew-x-12 rounded-full opacity-80 sm:h-2.5"
									style={{ backgroundColor: "#FDE047" }}
									aria-hidden
								/>
							</span>
						</h1>

						<p
							className="text-[13px] font-medium leading-snug sm:text-lg md:text-xl"
							style={{ color: C.muted }}
						>
							I&apos;m a{" "}
							<span
								className="rounded-md border-2 border-black bg-white px-1.5 py-0.5 font-black"
								style={{ color: C.ink }}
							>
								Software Developer
							</span>{" "}
							at
						</p>

						<div className="flex flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
							<p
								className="font-guzan text-[clamp(1.5rem,6vw,3rem)] font-black italic leading-none tracking-tight"
								style={{ color: C.pop }}
							>
								Stealth startup
							</p>
							<span className="inline-flex items-center gap-1.5 rounded-full border-[3px] border-black bg-[#BBF7D0] px-3 py-1 text-[11px] font-black uppercase tracking-wide shadow-[2px_2px_0_0_#000] sm:text-xs">
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
								</span>
								Open to work
							</span>
						</div>

						<div className="flex flex-col gap-3.5 pt-1 sm:flex-row sm:items-center sm:gap-6">
							{/* Crazy Book a Call */}
							<Link
								href="https://cal.com/narendra-nishad/30min"
								className="group relative inline-flex w-fit"
							>
								<span
									className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl border-[3px] border-black"
									style={{ backgroundColor: C.pop }}
									aria-hidden
								/>
								<span className="relative inline-flex h-12 items-center justify-center gap-2 rounded-xl border-[3px] border-black bg-black px-5 text-sm font-black uppercase tracking-wider text-white transition-transform duration-150 group-hover:translate-x-1 group-hover:translate-y-1 group-active:translate-x-2 group-active:translate-y-2 sm:h-14 sm:px-6 sm:text-base">
									<Phone className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
									<span className="font-guzan">Book a call</span>
									<span className="ml-0.5 inline-block transition-transform duration-150 group-hover:rotate-12">
										✦
									</span>
								</span>
							</Link>
							<p
								className="max-w-[15rem] text-[12px] font-medium leading-relaxed sm:max-w-xs sm:text-[15px]"
								style={{ color: C.muted }}
							>
								Feel free to explore my portfolio and reach out — I&apos;d love
								to connect!
							</p>
						</div>
					</div>

					<aside className="flex w-[90px] shrink-0 items-center justify-end sm:w-[100px] md:w-[130px] lg:w-[190px]">
						<Image
							src="/sword.png"
							alt="Zoro swords"
							width={200}
							height={1000}
							className="h-full max-h-[380px] w-full select-none object-contain object-right drop-shadow-[4px_4px_0_rgba(0,0,0,0.15)] sm:max-h-[480px] md:max-h-[560px] lg:max-h-[640px]"
							sizes="(max-width: 640px) 68px, 160px"
							priority
							draggable={false}
						/>
					</aside>
				</div>

				{/* Funky impact cards */}
				<div className="mt-11 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 md:grid-cols-3">
					{CARDS.map((card) => (
						<article
							key={card.id}
							className={`group relative flex min-h-[250px] flex-col overflow-hidden rounded-[1.35rem] border-[3px] border-black p-4 shadow-[5px_5px_0_0_#000] transition-[transform,box-shadow] duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_#000] sm:min-h-[290px] sm:rounded-[1.5rem] sm:p-5 ${card.tilt}`}
							style={{ backgroundColor: C.card }}
						>
							<span
								className="relative z-10 mb-3 inline-flex w-fit rounded-full border-[2.5px] border-current bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider sm:mb-4 sm:text-[11px]"
								style={{ color: card.labelColor }}
							>
								{card.label}
							</span>

							<div className="relative z-10 max-w-[58%] space-y-2 sm:max-w-[54%]">
								<p className="text-[clamp(1.35rem,3vw,2rem)] font-black leading-[1.05] tracking-tight">
									{card.title}
								</p>
								<p
									className="text-[13px] font-medium leading-relaxed sm:text-sm"
									style={{ color: C.muted }}
								>
									{card.body}
								</p>

								{card.cta &&
									(card.cta.external ? (
										<a
											href={card.cta.href}
											target="_blank"
											rel="noopener noreferrer"
											className="relative z-10 mt-3 inline-flex h-9 w-fit items-center justify-center gap-1.5 rounded-full border-[2.5px] border-black px-4 text-[13px] font-black text-white shadow-[3px_3px_0_0_#000] transition-[transform,box-shadow] duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] sm:text-sm"
											style={{ backgroundColor: card.cta.bg }}
										>
											{card.cta.icon === "play" && (
												<Play className="h-3.5 w-3.5" fill="currentColor" />
											)}
											{card.cta.label}
										</a>
									) : (
										<Link
											href={card.cta.href}
											className="relative z-10 mt-3 inline-flex h-9 w-fit items-center justify-center rounded-full border-[2.5px] border-black px-4 text-[13px] font-black text-white shadow-[3px_3px_0_0_#000] transition-[transform,box-shadow] duration-150 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#000] sm:text-sm"
											style={{ backgroundColor: card.cta.bg }}
										>
											{card.cta.label}
										</Link>
									))}
							</div>

							<div className="pointer-events-none absolute -bottom-2 -right-2 z-0 h-[88%] w-[54%] transition-transform duration-300 group-hover:scale-105 sm:w-[52%]">
								<Image
									src={card.image}
									alt={card.imageAlt}
									width={400}
									height={480}
									className="h-full w-full object-contain object-bottom drop-shadow-[2px_4px_0_rgba(0,0,0,0.12)]"
									sizes="(max-width: 768px) 40vw, 200px"
								/>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
