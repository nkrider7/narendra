"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Eye centers as % of the hero image box (tuned to luffyhero.png). */
const EYES = [
	{ id: "left", left: "45.5%", top: "49.5%" },
	{ id: "right", left: "54.8%", top: "49.5%" },
] as const;

/** Max pupil travel inside each socket. */
const MAX_OFFSET = 14;

const CURSOR_SIZE = 86;

export default function LuffyEyeHero() {
	const sectionRef = useRef<HTMLElement>(null);
	const [cursorVisible, setCursorVisible] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);

	const offsetX = useMotionValue(0);
	const offsetY = useMotionValue(0);
	const cursorX = useMotionValue(0);
	const cursorY = useMotionValue(0);

	const springX = useSpring(offsetX, { stiffness: 140, damping: 20, mass: 0.35 });
	const springY = useSpring(offsetY, { stiffness: 140, damping: 20, mass: 0.35 });
	const smoothCursorX = useSpring(cursorX, { stiffness: 280, damping: 28, mass: 0.35 });
	const smoothCursorY = useSpring(cursorY, { stiffness: 280, damping: 28, mass: 0.35 });

	useEffect(() => {
		const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
		const update = () => setIsDesktop(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	const trackPointer = (clientX: number, clientY: number) => {
		if (!isDesktop) return;

		const section = sectionRef.current;
		if (!section) return;

		const rect = section.getBoundingClientRect();
		cursorX.set(clientX - rect.left - CURSOR_SIZE / 2);
		cursorY.set(clientY - rect.top - CURSOR_SIZE / 2);

		const cx = rect.left + rect.width / 2;
		const cy = rect.top + rect.height * 0.42;
		const dx = clientX - cx;
		const dy = clientY - cy;
		const dist = Math.hypot(dx, dy) || 1;
		const reach = Math.min(dist / (rect.width * 0.35), 1);

		offsetX.set((dx / dist) * MAX_OFFSET * reach);
		offsetY.set((dy / dist) * MAX_OFFSET * reach);
	};

	return (
		<section
			ref={sectionRef}
			onMouseMove={(e) => {
				trackPointer(e.clientX, e.clientY);
				if (isDesktop) setCursorVisible(true);
			}}
			onMouseEnter={() => {
				if (isDesktop) setCursorVisible(true);
			}}
			onMouseLeave={() => {
				offsetX.set(0);
				offsetY.set(0);
				setCursorVisible(false);
			}}
			className={`relative flex min-h- w-full items-end justify-end overflow-hidden bg-[#0a0a0a] pt-28 ${
				isDesktop ? "cursor-none" : ""
			}`}
			aria-label="Luffy Gear 5 hero with eye tracking"
		>
			{isDesktop && (
				<motion.div
					aria-hidden
					className="pointer-events-none absolute left-0 top-0 z-50 will-change-transform"
					style={{
						x: smoothCursorX,
						y: smoothCursorY,
						width: CURSOR_SIZE,
						height: CURSOR_SIZE,
						opacity: cursorVisible ? 1 : 0,
					}}
				>
					<Image
						src="/cursor.png"
						alt=""
						width={256}
						height={256}
						className="h-full w-full select-none object-contain drop-shadow-[0_4px_16px_rgba(120,40,180,1.45)]"
						draggable={false}
						priority
					/>
				</motion.div>
			)}

			<div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 sm:px-6">
				<p className="mb-4 font-guzan text-xs uppercase tracking-[0.35em] text-white/50 sm:text-sm">
					LIMITLESS MODE
				</p>
				<h2
					className="absolute inset-0 top-1/3 mb-16 text-center font-sink text-8xl uppercase leading-none tracking-tighter text-transparent sm:text-9xl md:text-[20rem] lg:text-[15rem]"
					style={{
						WebkitTextStroke: "4px white",
					}}
				>
					Monkey D. Luffy
				</h2>

				<div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[520px] lg:max-w-[1640px]">
					<Image
						src="/luffyhero.png"
						alt="Monkey D. Luffy Gear 5"
						width={2752}
						height={1536}
						priority
						className="h-auto w-full select-none object-contain"
						draggable={false}
					/>

					{EYES.map((eye) => (
						<div
							key={eye.id}
							className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full"
							style={{
								left: eye.left,
								top: eye.top,
								width: "3.2%",
								aspectRatio: "1",
							}}
						>
							<motion.div
								className="absolute inset-0 will-change-transform"
								style={{ x: springX, y: springY }}
							>
								<Image
									src="/luffyeys.png"
									alt=""
									width={250}
									height={250}
									className="h-full w-full select-none object-contain drop-shadow-[0_0_10px_rgba(220,30,30,0.75)]"
									draggable={false}
									aria-hidden
								/>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
