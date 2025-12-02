import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
	return (
		<footer className="bg-[#111111] text-white py-16">

			<div className="container mx-auto px-4">
				<div className="md:hidden grid grid-cols-2 mb-8">
					<Image
						src={"/logo.svg"}
						width={200} height={200}
						className="" alt="logo" />
					<div className="text-xl mt-4 ml-6 font-inter  font-bold">
						Building Digital Agency
						<address className="not-italic text-sm font-inter text-gray-400 space-y-1">
							Dodhpurs
							<br />
							Civil Line
							<br />
							Aligarh
							<br />
							+91 987654321
						</address>
					</div>


				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
					{/* Left Column */}
					<div className="space-y-4 font-inter">
						<Link href="/our-work" className="block text-2xl font-medium hover:text-gray-300">
							Our work
						</Link>
						<Link href="/expertise" className="block text-2xl font-medium hover:text-gray-300">
							Expertise
						</Link>
						<Link href="/about" className="block text-2xl font-medium hover:text-gray-300">
							About
						</Link>
						<Link href="/blog" className="block text-2xl font-medium hover:text-gray-300">
							Blog
						</Link>
						<Link href="/contact" className="block text-2xl font-medium hover:text-gray-300">
							Contact
						</Link>
						
					</div>

					{/* Middle Column */}
					<div className="flex justify-between  w-full">
						<div className="space-y-4 font-inter font-semibold mr-10">
							<Link href="/strategy" className="block text-xl  text-gray-400 hover:text-gray-300">
								Strategy
							</Link>
							<Link href="/creative" className="block text-xl text-gray-400 hover:text-gray-300">
								Creative
							</Link>
							<Link href="/technology" className="block text-xl text-gray-400 hover:text-gray-300">
								Technology
							</Link>
						</div>



					</div>
					<div className="hidden md:block">
						<Image
							src={"/logo.svg"}
							width={200} height={200}
							className="" alt="logo" />
						<div className="text-2xl font-guzan font-medium">
							Building Digital Agency
						</div>
						<div className="text-2xl font-guzan font-medium">
							Aligarh, UP, India  <span className="text-gray-400">202001</span>
						</div>
						<address className="not-italic font-inter text-gray-400 space-y-1">
							Dodhpur
							<br />
							Civil Line
							<br />
							Aligarh
							<br />
							+91987654321
						</address>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<div className="flex flex-wrap gap-6 text-sm text-gray-400">
				
						<span>© 2025 Ask BrooCode. All rights reserved.</span>
					</div>

					<div className="flex gap-6">
						<Link href="https://linkedin.com" className="text-gray-400 hover:text-white">
							<Linkedin className="w-6 h-6" />
							<span className="sr-only">LinkedIn</span>
						</Link>
						<Link href="https://instagram.com" className="text-gray-400 hover:text-white">
							<Instagram className="w-6 h-6" />
							<span className="sr-only">Instagram</span>
						</Link>
						<Link href="https://github.com" className="text-gray-400 hover:text-white">
							<Github className="w-6 h-6" />
							<span className="sr-only">GitHub</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

