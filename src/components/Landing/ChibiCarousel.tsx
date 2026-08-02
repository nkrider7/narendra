"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ChibiSlide = {
	id: string;
	/** Large background word behind the character */
	name: string;
	image: string;
	bgColor: string;
	textColor: string;
	/** Small label near the top */
	topLabel: string;
	/** Bottom-left corner text */
	bottomLeft: string;
	/** Bottom-right corner text */
	bottomRight: string;
	/** Tiny badge letter / mark */
	badge: string;
	/** Optional corner mark (top-left) */
	mark?: string;
};

export const CHIBI_CREW: ChibiSlide[] = [
	{
		id: "luffy",
		name: "LUFFY",
		image: "/chibi/Luffy.png",
		bgColor: "#E11D48",
		textColor: "#FDE047",
		topLabel: "CAPTAIN",
		bottomLeft: "GEAR",
		bottomRight: "5",
		badge: "L",
		mark: "OP",
	},
	{
		id: "zoro",
		name: "ZORO",
		image: "/chibi/zoro.png",
		bgColor: "#15803D",
		textColor: "#BBF7D0",
		topLabel: "SWORDSMAN",
		bottomLeft: "SANTORYU",
		bottomRight: "WADO",
		badge: "Z",
		mark: "OP",
	},
	{
		id: "nami",
		name: "NAMI",
		image: "/chibi/nami.png",
		bgColor: "#EA580C",
		textColor: "#FEF3C7",
		topLabel: "NAVIGATOR",
		bottomLeft: "CLIMA",
		bottomRight: "TACT",
		badge: "N",
		mark: "OP",
	},
	{
		id: "sanji",
		name: "SANJI",
		image: "/chibi/sanji.png",
		bgColor: "#1E3A5F",
		textColor: "#FCD34D",
		topLabel: "COOK",
		bottomLeft: "BLACK",
		bottomRight: "LEG",
		badge: "S",
		mark: "OP",
	},
	{
		id: "usopp",
		name: "USOPP",
		image: "/chibi/usop.png",
		bgColor: "#CA8A04",
		textColor: "#1C1917",
		topLabel: "SNIPER",
		bottomLeft: "SOGEEKING",
		bottomRight: "POP",
		badge: "U",
		mark: "OP",
	},
	{
		id: "chopper",
		name: "CHOPPER",
		image: "/chibi/choper.png",
		bgColor: "#F472B6",
		textColor: "#831843",
		topLabel: "DOCTOR",
		bottomLeft: "TONI",
		bottomRight: "TONI",
		badge: "C",
		mark: "OP",
	},
	{
		id: "robin",
		name: "ROBIN",
		image: "/chibi/robin.png",
		bgColor: "#5B21B6",
		textColor: "#E9D5FF",
		topLabel: "ARCHAEOLOGIST",
		bottomLeft: "HANA",
		bottomRight: "HANA",
		badge: "R",
		mark: "OP",
	},
	{
		id: "brook",
		name: "BROOK",
		image: "/chibi/brook.png",
		bgColor: "#0F172A",
		textColor: "#F8FAFC",
		topLabel: "MUSICIAN",
		bottomLeft: "YOHOHO",
		bottomRight: "SOUL",
		badge: "B",
		mark: "OP",
	},
	{
		id: "hancock",
		name: "HANCOCK",
		image: "/chibi/hancock.png",
		bgColor: "#BE185D",
		textColor: "#FCE7F3",
		topLabel: "EMPRESS",
		bottomLeft: "KUJA",
		bottomRight: "MERO",
		badge: "H",
		mark: "OP",
	},
	{
		id: "yamato",
		name: "YAMATO",
		image: "/chibi/yamoto.png",
		bgColor: "#0369A1",
		textColor: "#E0F2FE",
		topLabel: "ODEN",
		bottomLeft: "INARI",
		bottomRight: "ONI",
		badge: "Y",
		mark: "OP",
	},
];

function ChibiCard({ slide }: { slide: ChibiSlide }) {
	return (
		<article
			className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-[4px] border-black shadow-[6px_6px_0_0_#000] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] sm:rounded-3xl md:aspect-[3/4]"
			style={{ backgroundColor: slide.bgColor, color: slide.textColor }}
		>
			{/* Huge name behind character */}
			<div
				className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
				aria-hidden
			>
				<span
					className="select-none whitespace-nowrap font-guzan text-[clamp(4.5rem,28vw,11rem)] font-black uppercase leading-none tracking-tighter opacity-90"
					style={{ color: slide.textColor }}
				>
					{slide.name}
				</span>
			</div>

			{/* Top mark */}
			{slide.mark && (
				<span
					className="absolute left-4 top-4 z-20 font-guzan text-lg font-bold uppercase tracking-wider sm:left-5 sm:top-5 sm:text-xl"
					style={{ color: slide.textColor }}
				>
					{slide.mark}
				</span>
			)}

			{/* Top label */}
			<span
				className="absolute right-4 top-4 z-20 max-w-[45%] text-right font-inter text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 sm:right-5 sm:top-5 sm:text-xs"
				style={{ color: slide.textColor }}
			>
				{slide.topLabel}
			</span>

			{/* Character */}
			<div className="absolute inset-x-0 bottom-0 z-10 flex h-[78%] items-end justify-center sm:h-[80%]">
				<Image
					src={slide.image}
					alt={slide.name}
					width={1024}
					height={1024}
					className="h-full w-auto max-w-[92%] object-contain object-bottom drop-shadow-[0_12px_28px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
					priority={slide.id === "luffy"}
				/>
			</div>

			{/* Bottom labels */}
			<div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-4 pb-4 sm:px-5 sm:pb-5">
				<span
					className="font-inter text-xs font-bold uppercase tracking-[0.18em] sm:text-sm"
					style={{ color: slide.textColor }}
				>
					{slide.bottomLeft}
				</span>
				<div className="flex items-center gap-2">
					<span
						className="font-inter text-xs font-bold uppercase tracking-[0.18em] sm:text-sm"
						style={{ color: slide.textColor }}
					>
						{slide.bottomRight}
					</span>
					<span
						className="flex h-7 w-7 items-center justify-center rounded-md font-guzan text-sm font-black sm:h-8 sm:w-8 sm:text-base"
						style={{
							backgroundColor: slide.textColor,
							color: slide.bgColor,
						}}
					>
						{slide.badge}
					</span>
				</div>
			</div>
		</article>
	);
}

type ChibiCarouselProps = {
	slides?: ChibiSlide[];
};

export default function ChibiCarousel({ slides = CHIBI_CREW }: ChibiCarouselProps) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
		api.on("select", () => setCurrent(api.selectedScrollSnap()));
	}, [api]);

	const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
	const scrollNext = useCallback(() => api?.scrollNext(), [api]);

	return (
		<section className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 sm:py-20 md:py-28">
			<div className="mx-auto mb-10 max-w-8xl px-5 text-center sm:mb-14">
				<p className="mb-3 font-guzan text-xs font-bold uppercase tracking-[0.35em] text-white/50 sm:text-sm">
					Straw Hat Crew
				</p>
				<h2 className="font-inter text-3xl font-black uppercase tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
					Meet the crew
				</h2>
			</div>

			<div className="relative mx-auto max-w-8xl px-2 sm:px-4">
				<Carousel
					setApi={setApi}
					opts={{
						align: "center",
						loop: true,
						skipSnaps: false,
					}}
					className="w-full"
				>
					<CarouselContent className="-ml-3 sm:-ml-5">
						{slides.map((slide) => (
							<CarouselItem
								key={slide.id}
								className="group basis-[82%] pl-3 sm:basis-[55%] sm:pl-5 md:basis-[42%] lg:basis-[34%]"
							>
								<ChibiCard slide={slide} />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				{/* Controls */}
				<div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
					<button
						type="button"
						onClick={scrollPrev}
						aria-label="Previous character"
						className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15"
					>
						<ChevronLeft className="h-5 w-5" />
					</button>

					<div className="flex items-center gap-2">
						{slides.map((slide, i) => (
							<button
								key={slide.id}
								type="button"
								aria-label={`Go to ${slide.name}`}
								onClick={() => api?.scrollTo(i)}
								className="h-2.5 rounded-full transition-all duration-300"
								style={{
									width: current === i ? 28 : 10,
									backgroundColor:
										current === i ? slide.bgColor : "rgba(255,255,255,0.25)",
								}}
							/>
						))}
					</div>

					<button
						type="button"
						onClick={scrollNext}
						aria-label="Next character"
						className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15"
					>
						<ChevronRight className="h-5 w-5" />
					</button>
				</div>

				<p className="mt-5 text-center font-inter text-sm text-white/40">
					{slides[current]?.name} · {slides[current]?.topLabel}
				</p>
			</div>
		</section>
	);
}
