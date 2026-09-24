"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GreetingItem {
	text: string;
	lang: string;
	isScript?: boolean;
}

const GREETINGS: GreetingItem[] = [
	{ text: "hello", lang: "English", isScript: true },
	{ text: "नमस्ते", lang: "Hindi" },
	{ text: "bonjour", lang: "French" },
	{ text: "hola", lang: "Spanish" },
	{ text: "こんにちは", lang: "Japanese" },
	{ text: "ciao", lang: "Italian" },
	{ text: "olá", lang: "Portuguese" },
	{ text: "안녕하세요", lang: "Korean" },
	{ text: "hallo", lang: "German" },
	{ text: "你好", lang: "Chinese" },
	{ text: "hello", lang: "Welcome", isScript: true },
];

interface LoadingScreenProps {
	onComplete?: () => void;
	minDuration?: number;
}

export default function LoadingScreen({
	onComplete,
	minDuration = 6000,
}: LoadingScreenProps) {
	const [isVisible, setIsVisible] = useState(true);
	const [index, setIndex] = useState(0);

	// Cycle through greetings
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prev) => (prev + 1) % GREETINGS.length);
		}, 380);

		return () => clearInterval(interval);
	}, []);

	// Handle minimum duration and completion
	useEffect(() => {
		const start = Date.now();
		const checkCompletion = setInterval(() => {
			const elapsed = Date.now() - start;
			const isReady =
				typeof document !== "undefined" &&
				(document.readyState === "complete" || document.readyState === "interactive");

			if (isReady && elapsed >= minDuration) {
				clearInterval(checkCompletion);
				setIsVisible(false);
				onComplete?.();
			}
		}, 100);

		return () => clearInterval(checkCompletion);
	}, [minDuration, onComplete]);

	// Allow instant skip on click or keypress
	const handleSkip = () => {
		setIsVisible(false);
		onComplete?.();
	};

	return (
		<AnimatePresence mode="wait">
			{isVisible && (
				<motion.div
					onClick={handleSkip}
					initial={{ opacity: 1 }}
					exit={{
						opacity: 0,
						scale: 1.04,
						filter: "blur(14px)",
						transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
					}}
					className="fixed inset-0 z-[99999] flex flex-col items-center justify-center cursor-pointer select-none overflow-hidden bg-[#f3f3f3]"
					aria-label="Loading splash screen"
				>
					{/* macOS Monterey Dynamic Ambient Mesh Gradient Orbs */}
					<div className="absolute inset-0 pointer-events-none overflow-hidden">
						{/* Magenta / Hot Pink Orb (Upper Left) */}
						<motion.div
							animate={{
								x: [0, 30, -20, 0],
								y: [0, -35, 20, 0],
								scale: [1, 1.15, 0.95, 1],
							}}
							transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
							className="absolute -top-[12%] -left-[12%] h-[80vw] sm:h-[80vh] w-[80vw] sm:w-[80vh] rounded-full bg-[#f3f3f3] opacity-80 blur-[85px] sm:blur-[135px]"
						/>

						{/* Royal Blue / Electric Violet Orb (Lower Left) */}
						<motion.div
							animate={{
								x: [0, -25, 30, 0],
								y: [0, 25, -20, 0],
								scale: [1, 0.95, 1.18, 1],
							}}
							transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
							className="absolute -bottom-[18%] -left-[12%] h-[85vw] sm:h-[85vh] w-[85vw] sm:w-[85vh] rounded-full bg-[#898989] opacity-85 blur-[90px] sm:blur-[145px]"
						/>

						{/* Rich Purple / Plum Orb (Center & Bottom Right) */}
						<motion.div
							animate={{
								x: [0, 30, -25, 0],
								y: [0, -25, 25, 0],
								scale: [1, 1.14, 0.92, 1],
							}}
							transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
							className="absolute bottom-[2%] right-[2%] h-[75vw] sm:h-[75vh] w-[75vw] sm:w-[75vh] rounded-full bg-[#f3f3f3] opacity-85 blur-[85px] sm:blur-[135px]"
						/>

						{/* Soft Rose / Coral Haze Orb (Upper Right) */}
						<motion.div
							animate={{
								x: [0, -25, 25, 0],
								y: [0, 30, -25, 0],
								scale: [1, 0.92, 1.12, 1],
							}}
							transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
							className="absolute -top-[18%] right-[10%] h-[70vw] sm:h-[70vh] w-[70vw] sm:w-[70vh] rounded-full bg-[#f3f3f3] opacity-75 blur-[85px] sm:blur-[125px]"
						/>

						{/* Subtle Dark Vignette Border */}
						<div className="absolute inset-0 bg-radial from-transparent via-[#7a7a7a52]/30 to-[#3a3a3a]/70" />
					</div>

					{/* Center Typography: macOS Monterey "Hello" in Multiple Languages */}
					<div className="relative z-10 flex flex-col items-center justify-center px-4">
						<Image
              src="/loading.gif"
              alt="Hello in multiple languages"
              width={2000}
              height={2000}
              className="mb-6 md:h-96 object-contain"
            />


					</div>

					{/* Subtle Bottom macOS Hint */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.6 }}
						transition={{ delay: 1, duration: 0.6 }}
						className="absolute bottom-8 sm:bottom-10 z-10 flex items-center gap-2 font-inter text-[11px] sm:text-xs tracking-widest uppercase text-white/60"
					>
						<span>Click anywhere to continue</span>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

