"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type VisibleImage = "both" | "left" | "right";

function playFartSound() {
	try {
		const audio = new Audio("/fart.mp3");
		audio.volume = 0.7;
		audio.play().catch(() => {});
	} catch {
		// ignore if audio fails (e.g. file missing or autoplay blocked)
	}
}

export default function Intro() {
	const [visible, setVisible] = useState<VisibleImage>("both");

	return (
		<div
			className="h-screen md:h-[100vh] bg-black flex flex-col overflow-hidden justify-between items-center md:bg-cover bg-contain  relative"
			style={{
				backgroundImage: "url(/bgintro.jpg)",   // default bg

				backgroundPosition: "bottom",
				transition: "background-image 0.4s ease-in-out",
			}}
		>
			<div className="z-40 w-full my-10 rounded-lg text-center">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.6 }}
					className="text-5xl max-w-2xl mx-auto  cursor-pointer md:text-6xl w-full font-telma flex text-center items-center font-bold text-black justify-center"
				>
					Hi, I’m Narendra Nishad.
				</motion.h1>

				<motion.h1
				
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2, duration: 0.6 }}
				className="text-black text-center font-telma font-light mb-4 text-2xl md:text-4xl">
					Full-Stack Developer
				</motion.h1>

				<Link href={'/contact'} className="text-white bg-black hover:bg-gray-800 transition-all duration-300 mt-10 font-inter font-bold px-4 py-2 rounded-full">

					Hire Me

				</Link>

			</div>


			{/* Interactive images: desktop only — click one to hide it and show the other */}
			<div className="hidden md:block absolute bottom-80 left-1/3 z-10 cursor-pointer select-none">
				<AnimatePresence mode="wait">
					{(visible === "both" || visible === "left") && (
						<motion.div
							key="left"
							initial={{ opacity: 0, scale: 0.5, rotate: -12 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							exit={{ opacity: 0, scale: 0.3, rotate: 12, filter: "blur(8px)" }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 24,
								opacity: { duration: 0.25 },
							}}
							onClick={() => {
								playFartSound();
								setVisible("right");
							}}
							className="origin-center"
							whileHover={{ scale: 1.15, rotate: -5 }}
							whileTap={{ scale: 0.9 }}
						>
							<Image
								src="/gojobum2.webp"
								alt="narendra"
								width={100}
								height={100}
								className="pointer-events-none"
								unoptimized
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<div className="hidden md:block absolute bottom-80 right-1/3 z-10 cursor-pointer select-none">
				<AnimatePresence mode="wait">
					{(visible === "both" || visible === "right") && (
						<motion.div
							key="right"
							initial={{ opacity: 0, scale: 0.5, rotate: 12 }}
							animate={{ opacity: 1, scale: 1, rotate: 0 }}
							exit={{ opacity: 0, scale: 0.3, rotate: -12, filter: "blur(8px)" }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 24,
								opacity: { duration: 0.25 },
							}}
							onClick={() => {
								playFartSound();
								setVisible("left");
							}}
							className="origin-center"
							whileHover={{ scale: 1.15, rotate: 5 }}
							whileTap={{ scale: 0.9 }}
						>
							<Image
								src="/gojobum.gif"
								alt="narendra"
								width={100}
								height={100}
								className="pointer-events-none "
								unoptimized
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>



			<Image src="/arrow.gif" alt="narendra" width={100} height={100} className="absolute bottom-96 md:bottom-[26rem] mx-auto " />
			<Image src="/center.png" alt="narendra" width={2000} height={2000} className="mx-auto   md:h-[40rem] w-fit mt-32 md:mt-20" />
		</div>
	);
}
