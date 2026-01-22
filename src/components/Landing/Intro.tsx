"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
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
			<Image src="/center.png" alt="narendra" width={2000} height={2000} className="mx-auto   md:h-[40rem] w-fit mt-32 md:mt-20" />
		</div>
	);
}
