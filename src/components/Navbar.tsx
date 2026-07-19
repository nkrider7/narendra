"use client";

import { Blogs } from "@/app/blogs/Data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

type SearchItem = {
	label: string;
	href: string;
	description: string;
	type: "Page" | "Project" | "Blog" | "Link";
	keywords: string[];
};

const SEARCH_ITEMS: SearchItem[] = [
	{
		label: "Home",
		href: "/",
		description: "Portfolio homepage",
		type: "Page",
		keywords: ["home", "portfolio", "narendra", "nishad"],
	},
	{
		label: "About",
		href: "/about",
		description: "Learn about me",
		type: "Page",
		keywords: ["about", "bio", "developer", "story"],
	},
	{
		label: "Whoami",
		href: "/whoami",
		description: "My story, journey, and background",
		type: "Page",
		keywords: ["whoami", "who am i", "intro", "story", "journey"],
	},
	{
		label: "Blogs",
		href: "/blogs",
		description: "Articles and writing",
		type: "Page",
		keywords: ["blog", "blogs", "articles", "writing", "posts"],
	},
	{
		label: "Contact",
		href: "/contact",
		description: "Get in touch or hire me",
		type: "Page",
		keywords: ["contact", "hire", "email", "message", "work"],
	},
	{
		label: "Certificates",
		href: "/certificate",
		description: "My certifications",
		type: "Page",
		keywords: ["certificate", "certifications", "credentials"],
	},
	{
		label: "GitHub Showcase",
		href: "/nkrider7",
		description: "Projects, stats and activity",
		type: "Page",
		keywords: ["github", "code", "repos", "nkrider7"],
	},
	{
		label: "Soul Arise",
		href: "https://soularise.netlify.app/",
		description: "Anime-based self improvement app",
		type: "Project",
		keywords: ["soul arise", "react native", "app", "anime", "gamify"],
	},
	{
		label: "Hire Me",
		href: "/contact",
		description: "Available for work",
		type: "Page",
		keywords: ["hire", "freelance", "job", "collaboration"],
	},
	...Blogs.map((blog) => ({
		label: blog.title,
		href: `/blogs/${blog._id}`,
		description: blog.description,
		type: "Blog" as const,
		keywords: [blog.title, ...blog.category, blog.description],
	})),
];

function SearchIcon() {
	return (
		<svg
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className="h-3 w-3 stroke-current"
			style={{ strokeWidth: 5.33333, fill: "none" }}
		>
			<path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9" />
		</svg>
	);
}

function GlobeIcon() {
	return (
		<svg
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className="h-4 w-4 fill-current"
		>
			<path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
		</svg>
	);
}

function matchesQuery(item: SearchItem, query: string) {
	const q = query.trim().toLowerCase();
	if (!q) return false;

	const fields = [item.label, item.description, ...item.keywords];
	return fields.some((field) => field.toLowerCase().includes(q));
}

export default function Navbar() {
	const router = useRouter();
	const searchRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const [query, setQuery] = useState("");
	const [open, setOpen] = useState(false);

	const results = useMemo(() => {
		if (!query.trim()) return [];
		return SEARCH_ITEMS.filter((item) => matchesQuery(item, query)).slice(0, 8);
	}, [query]);

	useEffect(() => {
		if (!open) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
				setOpen(false);
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setOpen(false);
				inputRef.current?.blur();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [open]);

	const handleSelect = (href: string) => {
		setQuery("");
		setOpen(false);

		if (href.startsWith("http")) {
			window.open(href, "_blank", "noopener,noreferrer");
			return;
		}

		router.push(href);
	};

	return (
		<header className="sticky top-0 z-50 font-inter">
			<nav
				aria-label="Main navigation"
				className="relative mx-auto  px-4  flex h-16 w-full items-center justify-between gap-3 m sm:px-8"
			>
				<div className="inline-flex shrink-0">
					<Link href="/" className="inline-flex items-center gap-2.5" aria-label="Narendra — home">
						<Image
							src="/luffylogo.png"
							alt=""
							width={102}
							height={32}
							priority
							className="hidden h-11 w-auto object-contain md:block"
						/>
						<Image
							src="/luffylogo.png"
							alt=""
							width={30}
							height={32}
							priority
							className="block h-8 w-8 object-contain md:hidden"
						/>
						<span className="hidden text-[15px] font-bold tracking-tight text-white md:block">
						 narendra.nishad@outlook.com
						</span>
					</Link>
				</div>

				<div ref={searchRef} className="relative flex min-w-0 flex-1 justify-center px-1 sm:max-w-lg sm:px-2">
					<div className="relative w-full max-w-[250px] sm:max-w-none">
						<div className="flex w-full items-center rounded-full bg-[#1a1d26]/40 backdrop-blur-sm px-1 py-1 ring-1 ring-white/10 transition-all focus-within:ring-white/20">
							<input
								ref={inputRef}
								type="text"
								value={query}
								onChange={(event) => {
									setQuery(event.target.value);
									setOpen(true);
								}}
								onFocus={() => setOpen(true)}
								placeholder="Search pages, projects..."
								className="min-w-0 flex-1 bg-transparent pl-4 pr-2 text-sm text-white outline-none placeholder:text-white/40"
								aria-label="Search portfolio"
								aria-controls="navbar-search-results"
								autoComplete="off"
							/>
							<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e21d1d] text-white">
								<SearchIcon />
							</div>
						</div>

						{open && query.trim().length > 0 && (
							<div
								id="navbar-search-results"
								className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#0d111c]/95 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
							>
								{results.length > 0 ? (
									<ul>
										{results.map((item) => (
											<li key={`${item.type}-${item.href}-${item.label}`}>
												<button
													type="button"
													onClick={() => handleSelect(item.href)}
													className="flex w-full items-start gap-3 px-4 py-2.5 text-left transition-colors hover:bg-white/8"
												>
													<div className="min-w-0 flex-1">
														<p className="truncate text-sm font-medium text-white">
															{item.label}
														</p>
														<p className="truncate text-xs text-white/50">
															{item.description}
														</p>
													</div>
													<span className="shrink-0 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#FAE800]/90">
														{item.type}
													</span>
												</button>
											</li>
										))}
									</ul>
								) : (
									<p className="px-4 py-3 text-sm text-white/50">
										No results for &ldquo;{query}&rdquo;
									</p>
								)}
							</div>
						)}
					</div>
				</div>

				<div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
					<Link
						href="/contact"
						className="hidden rounded-full px-3 py-2 text-sm font-medium text-white transition-colors hover:text-white/80 md:inline-block"
					>
						Hire Me
					</Link>
					<a
						href="https://github.com/nkrider7"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block rounded-full p-2 text-white transition-colors hover:text-white/75"
						aria-label="GitHub profile"
					>
						<GlobeIcon />
					</a>
				</div>
			</nav>
		</header>
	);
}
