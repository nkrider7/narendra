"use client";

import { GlobeIcon } from "lucide-react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";


export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 font-inter">
			<nav
				aria-label="Main navigation"
				className="relative mx-auto  px-4  flex h-16 w-full items-center justify-between gap-3 m sm:px-8"
			>
				<div className="inline-flex shrink-0">
					<Link
						href="https://www.linkedin.com/in/narendra-nishad/"
						className="group inline-flex items-center gap-2.5 text-[#1b1b1b] transition-colors duration-200 hover:text-[#0077b5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077b5]"
						aria-label="Narendra Nishad on LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin className="h-5 w-5 shrink-0 transition-colors duration-200 group-hover:text-[#0077b5] md:h-6 md:w-6" />

						<span className="font-bilderberg text-sm font-medium leading-none tracking-tight transition-colors duration-200 group-hover:text-[#0077b5] md:text-xl">
							Narendra 🇮🇳
						</span>

					</Link>
				</div>


				<div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
					<Link
						href="/contact"
						className="rounded-full px-3 py-1.5 text-sm  border-2 border-[#1b1b1b] font-inter font-semibold text-[#1b1b1b] transition-colors hover:text-black/75 md:inline-block"
					>
						Hire Me
					</Link>
					<a
						href="https://github.com/nkrider7"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block rounded-full p-2 text-[#1b1b1b] transition-colors hover:text-black/75"
						aria-label="GitHub profile"
					>
						<GlobeIcon />
					</a>
				</div>
			</nav>
		</header>
	);
}
