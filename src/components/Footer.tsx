import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const PAGE_LINKS = [
	{ label: "About", href: "/about" },
	{ label: "Whoami", href: "/whoami" },
	{ label: "Blogs", href: "/blogs" },
	{ label: "Contact", href: "/contact" },
] as const;

const SERVICE_LINKS = [
	{ label: "Web Development", href: "/contact" },
	{ label: "Mobile App Development", href: "/contact" },
	{ label: "Desktop App Development", href: "/contact" },
] as const;

const SOCIAL_LINKS = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/narendra-nishad/",
		icon: Linkedin,
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/nkriderking/",
		icon: Instagram,
	},
	{
		label: "GitHub",
		href: "https://github.com/nkrider7",
		icon: Github,
	},
] as const;

function FooterLinkGroup({
	title,
	links,
}: {
	title: string;
	links: readonly { label: string; href: string }[];
}) {
	return (
		<div>
			<p className="mb-4 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
				{title}
			</p>
			<ul className="space-y-2.5">
				{links.map((link) => (
					<li key={link.href}>
						<Link
							href={link.href}
							className="font-inter text-sm text-white/70 transition-colors hover:text-white sm:text-[15px]"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
			<div className="relative mx-auto max-w-6xl px-5 sm:px-8">
				<div className="grid gap-10 border-b border-white/10 py-10 sm:gap-12 sm:py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
					<div className="md:col-span-2 lg:col-span-4">
						<Link
							href="https://brooocode.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block"
						>
							<Image
								src="/logo.svg"
								width={160}
								height={48}
								alt="BrooCode logo"
								className="h-10 w-auto object-contain sm:h-11"
							/>
						</Link>
						<p className="mt-4 font-guzan text-lg font-medium leading-snug text-white sm:text-xl">
							Building Digital Agency
						</p>
						<p className="mt-1 font-inter text-sm text-white/50">
							India{" "}
							<span className="text-white/35">202001</span>
						</p>
					</div>

					<div className="grid grid-cols-2 gap-8 sm:gap-10 md:col-span-2 lg:col-span-4">
						<FooterLinkGroup title="Pages" links={PAGE_LINKS} />
						<FooterLinkGroup title="Services" links={SERVICE_LINKS} />
					</div>

					<div className="md:col-span-2 lg:col-span-4 lg:text-right">
						<p className="mb-4 font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
							Get in touch
						</p>
						<address className="space-y-1 font-inter text-sm not-italic leading-relaxed text-white/60 sm:text-[15px]">
							<span className="block">Dodhpur</span>
							<span className="block">Civil Line, Aligarh</span>
							<a
								href="tel:+919876543210"
								className="mt-2 inline-block text-white/80 transition-colors hover:text-white"
							>
								+91 98765 43210
							</a>
						</address>
					</div>
				</div>

				<div className="relative py-8 sm:py-10">
					<p
						className="pointer-events-none select-none text-center font-inter text-[clamp(2.5rem,11vw,6.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-white/[0.06]"
						aria-hidden
					>
						Open to work
					</p>
				</div>

				<div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
					<p className="font-inter text-xs text-white/40 sm:text-sm">
						© {new Date().getFullYear()} Ask BrooCode. All rights reserved.
					</p>

					<div className="flex items-center gap-3">
						{SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
							<Link
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={label}
								className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white"
							>
								<Icon className="h-4 w-4" />
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
