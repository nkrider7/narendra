"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
	
	const sectionRef = useRef<HTMLElement>(null);



	return (
		<section
			ref={sectionRef}

			// style={{
			// 	backgroundImage: "url('/wano.png')",
			// 	backgroundSize: "cover",
			// 	backgroundPosition: "center",
			// 	backgroundRepeat: "no-repeat",
			// 	backgroundBlendMode: "screen",
			// }}

			className="relative flex w-full items-center justify-center overflow-hidden  pt-32 sm:pt-20 md:pt-10  bg-[#f3f3f3] ">

			{/* <div
				className="pointer-events-none absolute inset-0 bg-[#dedcd9]/50 mix-blend-screen"
				aria-hidden
			/> */}
			<Image src={"/mynameis.png"} alt="Narendra Nishad" width={2500} height={2500} priority className="absolute left-0 md:left-20 -bottom-2 md:bottom-4 z-10 h-40 w-40 md:h-80 md:w-80 object-contain hover:scale-110 hover:transition" />
			<Image src={"/ai.png"} alt="Narendra Nishad" width={2500} height={2500} priority className="absolute left-10 md:left-1/4 top-16 md:-top-4 z-10 h-40 w-40 md:h-80 md:w-80 object-contain hover:scale-110 hover:transition" />
			
			<Image src={"/opentowork.png"} alt="Narendra Nishad" width={2500} height={2500} priority className="absolute right-0 md:right-20 bottom-2 md:bottom-4  z-10 h-40 w-40 md:h-80 md:w-80 object-contain" />
			<div className="relative z-10 mx-auto w-full max-w-6xl  ">


				<div className="relative flex min-h-[200px] items-center justify-center sm:min-h-[380px] md:min-h-[480px] lg:min-h-[760px]">


					<h1 className="pointer-events-none font-black absolute inset-x-0 top-1/3 z-0 -translate-y-[58%] select-none text-center font-inter text-[3.7rem]  leading-[0.9] tracking-tight text-black  sm:text-6xl md:text-[14rem] uppercase "
						
					>
						Software
					</h1>
					<h1 className="pointer-events-none absolute inset-x-0 top-[54%] md:top-[55%] z-0 -translate-y-[58%] select-none text-center font-inter text-[3.7rem] font-extrabold leading-[0.9] tracking-tight text-transparent sm:text-6xl md:text-[14rem] uppercase "
						style={{
							textShadow: "0 0 10px rgba(0,0,0,0.5)",
							WebkitTextStroke: "1px white",
						}}
					>
						Developer
					</h1>


					<Image
						src="/heronk.png"
						alt="Narendra"
						width={2500}
						height={2500}
						priority
						className="h-full w-full object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
					/>

					<Link
						href="/cv.pdf"
						download="Narendra-Nishad-CV.pdf"
						className="absolute  z-30 bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 "
					>


					</Link>
					{/* <p className=" absolute -bottom-10 md:-bottom-10 left-1/2 -translate-x-1/2  text-center font-telma  text-white font-bold text-sm md:text-2xl" 
					style={{
						textShadow: "0 0 10px #398cd6",
					}}
					>I&apos;m going to be the World&apos;s Best Developer! </p> */}


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
