"use client";

import Image from "next/image";
import TextLoop from "../magicui/LoopText";


export default function ArctBox() {
	return (
		<section
			className="relative w-full overflow-hidden font-inter pt-10 md:pt-20  antialiased"
			style={{ backgroundColor: "#0a0a0a" }}
		>
			
			<div
				className=" hidden md:block  pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full opacity-30 blur-3xl"
				style={{ backgroundColor: "#2a7450" }}
				aria-hidden
			/>
			<div
				className="hidden md:block pointer-events-none absolute -left-16 bottom-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
				style={{ backgroundColor: "#2a7450" }}
				aria-hidden
			/>

			<div className="relative z-10 mx-auto max-w-6xl px-4 ">

				<Image src="/board.png"
					alt="ArctBox"
					width={1400}
					height={1000}
				/>
			</div>
			<TextLoop
				text="HUMAN + AI 🧑🏻‍💻 SMART SHIPS"
				shape="wave"
				speed={30}
				direction="forward"
				separator="✦"
				curviness={14}
				fontSize={46}
				fontWeight={800}
				letterSpacing={2}
				uppercase
				color="#ffffff"
				ribbon
				ribbonColor="#2c7855"
				ribbonWidth={86}
				
			/>
		</section>
	);
}
