"use client";

import { CREW_MEMBERS, type CrewMember } from "@/data/crew";
import { motion } from "framer-motion";
import Image from "next/image";

const COLORS = {
	bg: "#F5F5F5",
	divider: "#E0E0E0",
	text: "#000000",
	muted: "#999999",
	decorative: "#E0E0E0",
	pill: "#E8E8E8",
	yellow: "#a2f23e",
	red: "#FF4D4D",
	badge: "#C8C8C8",
	blue: "#3E61F2",
} as const;

function StarBadge({ number }: { number: string }) {
	return (
		<div className="relative flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
			<svg
				viewBox="0 0 40 40"
				className="absolute inset-0 h-full w-full"
				aria-hidden
			>
				<polygon
					points="20,2 24,14 37,14 27,22 31,35 20,27 9,35 13,22 3,14 16,14"
					fill={COLORS.badge}
				/>
			</svg>
			<span className="relative z-10 font-inter text-[10px] font-bold text-black sm:text-xs">
				{number}
			</span>
		</div>
	);
}

function RoleLine({ member }: { member: CrewMember }) {
	return (
		<div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
			{member.rolePrefix && (
				<span className="font-inter text-sm font-bold text-black sm:text-base">
					{member.rolePrefix}
					<span className="mx-1">*</span>
				</span>
			)}
			{member.accent === "red-dot" && (
				<span
					className="inline-block h-2.5 w-2.5 shrink-0 rounded-full"
					style={{ backgroundColor: COLORS.red }}
					aria-hidden
				/>
			)}
			<span
				className={`font-inter text-sm font-bold uppercase tracking-wide text-black sm:text-base ${
					member.accent === "yellow-highlight" ? "px-1.5 py-0.5" : member.accent === "blue-highlight" ? "px-1.5 py-0.5 bg-blue-400 " : ""
				}`}
				style={
					member.accent === "yellow-highlight"
						? { backgroundColor: COLORS.yellow }
						: undefined
				}
			>
				{member.role}
			</span>
		</div>
	);
}

function CharacterVisual({ member }: { member: CrewMember }) {
	const badgeOnRight = member.badgePosition === "top-right";

	return (
		<div className="relative mx-auto w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px]">
			<div
				className={`absolute z-20 ${badgeOnRight ? "-right-1 top-0 sm:right-0" : "-left-1 top-0 sm:left-0"}`}
			>
				<StarBadge number={member.number} />
			</div>

			<div
				className="relative flex aspect-[4/3] items-end justify-center overflow-hidden rounded-[999px] px-4 pt-8"
				style={{ backgroundColor: COLORS.pill }}
			>
				{member.image ? (
					<motion.div
						animate={{ y: [0, -6, 0] }}
						transition={{
							duration: 3.5,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="relativec h-40 md:h-60 w-full"
					>
						<Image
							src={member.image}
							alt={member.name}
							fill
							className="object-cover object-top"
							sizes="(max-width: 768px) 220px, 340px"
						/>
					</motion.div>
				) : (
					<div className="flex h-[75%] w-full items-center justify-center pb-4">
						<span className="font-inter text-xs uppercase tracking-widest text-[#BBBBBB]">
							Add image
						</span>
					</div>
				)}
			</div>
		</div>
	);
}

function DecorativeText({ text }: { text: string }) {
	return (
		<div
			className="pointer-events-none hidden select-none items-center justify-center md:flex"
			aria-hidden
		>
			<span
				className="font-inter text-[7rem] font-bold leading-none lg:text-[9rem] xl:text-[11rem]"
				style={{ color: COLORS.decorative }}
			>
				{text}
			</span>
		</div>
	);
}

function MemberInfo({ member }: { member: CrewMember }) {
	return (
		<div className="flex flex-col justify-center px-2 text-center md:px-6 md:text-left">
			<h3 className="font-inter text-xl font-bold uppercase leading-tight tracking-tight text-black sm:text-2xl md:text-3xl lg:text-4xl">
				{member.name}
			</h3>
			<RoleLine member={member} />
			<p
				className="mt-2 font-inter text-xs sm:text-sm"
				style={{ color: COLORS.muted }}
			>
				{member.subtitle}
			</p>
		</div>
	);
}

function CrewRow({
	member,
	index,
}: {
	member: CrewMember;
	index: number;
}) {
	const reversed = index % 2 === 1;

	return (
		<motion.article
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
			className="border-b py-10 sm:py-12 md:py-14 lg:py-16"
			style={{ borderColor: COLORS.divider }}
		>
			{/* Mobile: stacked */}
			<div className="flex flex-col items-center gap-6 md:hidden">
				<CharacterVisual member={member} />
				<MemberInfo member={member} />
			</div>

			{/* Desktop: alternating 3-column layout */}
			<div
				className={`mx-auto hidden max-w-6xl grid-cols-[1fr_1.1fr_1fr] items-center gap-6 px-6 md:grid lg:gap-10 lg:px-10 ${
					reversed ? "[&>*:nth-child(1)]:order-3 [&>*:nth-child(2)]:order-2 [&>*:nth-child(3)]:order-1" : ""
				}`}
			>
				<CharacterVisual member={member} />
				<MemberInfo member={member} />
				<DecorativeText text={member.decorativeText} />
			</div>
		</motion.article>
	);
}

export default function CrewRoster({
	members = CREW_MEMBERS,
}: {
	members?: CrewMember[];
}) {
	return (
		<section className="relative w-full" style={{ backgroundColor: COLORS.bg }}>
			<div className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 sm:pt-16 lg:px-10">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-2 text-center md:mb-4 md:text-left"
				>
					<p
						className="font-inter text-xs uppercase tracking-[0.35em]"
						style={{ color: COLORS.muted }}
					>
						The journey
					</p>
					<h2 className="mt-2 font-inter text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
						Work Experience
					</h2>
				</motion.div>
			</div>

			<div className="border-t" style={{ borderColor: COLORS.divider }}>
				{members.map((member, index) => (
					<CrewRow
						key={member.id}
						member={member}
						index={index}
					/>
				))}
			</div>
		</section>
	);
}
