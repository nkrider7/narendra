"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useAppReady } from "@/components/LoadingWrapper";
import { Download } from "lucide-react";

export default function Hero() {
	const isReady = useAppReady();
	const sectionRef = useRef<HTMLElement>(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
	const imageY = useTransform(scrollYProgress, [0, 1], [0, 48]);
	const imageOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

	return (
		<section
			ref={sectionRef}

			style={{
				backgroundImage: "url('/wano.png')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundBlendMode: "screen",
			}}

			className="relative flex w-full items-center justify-center overflow-hidden  py-16 sm:py-20 md:py-28 lg:py-20">

			{/* <div
				className="pointer-events-none absolute inset-0 bg-[#dedcd9]/50 mix-blend-screen"
				aria-hidden
			/> */}

			<div className="relative z-10 mx-auto w-full max-w-6xl px-5 ">
				<div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[380px] md:min-h-[480px] lg:min-h-[560px]">
					<h1 className="pointer-events-none absolute inset-x-0 top-1/3 z-0 -translate-y-[58%] select-none text-center font-inter text-[4.2rem] font-bold leading-[0.9] tracking-tighter text-white sm:text-6xl md:text-[14rem] uppercase "
						style={{
							textShadow: "0 0 10px rgba(0,0,0,0.5)",
						}}
					>
						Software
					</h1>
					<h1 className="pointer-events-none absolute inset-x-0 top-[54%] md:top-[60%] z-0 -translate-y-[58%] select-none text-center font-inter text-[4.2rem] font-bold leading-[0.9] tracking-tighter text-transparent sm:text-6xl md:text-[14rem] uppercase "
						style={{
							textShadow: "0 0 10px rgba(0,0,0,0.5)",
							WebkitTextStroke: "1px white",
						}}
					>
						Developer
					</h1>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
						className="relative z-10 w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[640px]"
					>
						<motion.div
							style={{ scale: imageScale, y: imageY, opacity: imageOpacity }}
						>
							<motion.div
								animate={isReady ? { y: [0, -8, 0] } : { y: 0 }}
								transition={{
									duration: 3.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: 0.6,
								}}
							>
								<Image
									src="/luffymain.png"
									alt="Narendra"
									width={2000}
									height={2000}
									priority
									className="h-auto w-full object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
								/>
							</motion.div>
						</motion.div>
					</motion.div>
					<Link
						href="/cv.pdf"
						download="Narendra-Nishad-CV.pdf"
						className="absolute  z-30 bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 "
					>

						<button

							className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-12 px-6 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-full transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
						>
							<span
								className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
							></span>
							<div className="flex items-center">
								<Download className="w-4 h-4 mr-1" />
								<span className="ml-1 text-white font-guzan">Download CV</span>
							</div>

						</button>

					</Link>
					<p className=" absolute -bottom-10 md:-bottom-10 left-1/2 -translate-x-1/2  text-center font-telma  text-white font-bold text-sm md:text-lg">I&apos;m going to be the World&apos;s Best Developer! </p>


					{/* <div className="card hero-card absolute -bottom-20 right-0 z-20 hidden md:block lg:right-">
						<div className="card-overlay" aria-hidden />
						<div className="card-inner">
						<span>I m looking for a job</span>
							<p className="font-inter text-2xl font-bold leading-none">
								Full Stack
								<br />
								Developer
							</p>
							<span>React · Next.js · React Native</span>
						</div>
					</div> */}


				</div>
			</div>
		</section>
	);
}
