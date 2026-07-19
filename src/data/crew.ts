export type RoleAccent = "yellow-highlight" | "red-dot" | "plain" | "blue-highlight";

export interface CrewMember {
	id: string;
	number: string;
	name: string;
	role: string;
	rolePrefix?: string;
	subtitle: string;
	description: string;
	decorativeText: string;
	image?: string;
	badgePosition?: "top-left" | "top-right";
	accent: RoleAccent;
}

export const CREW_MEMBERS: CrewMember[] = [
	{
		id: "fishman",
		number: "01",
		name: "Fishman",
		rolePrefix: "Self",
		role: "Building",
		subtitle: "(Jul 2026 - Present)",
		description:
			"Building personal projects and products end-to-end with a strong focus on clean UI, fast performance, and practical user experience. I handle architecture, frontend, backend integration, and continuous improvement with modern React and Next.js workflows.",
		decorativeText: "る",
		image: "/fishman.png",
		badgePosition: "top-right",
		accent: "blue-highlight",
	},
	{
		id: "luffy",
		number: "01",
		name: "Broocode",
		rolePrefix: "Self",
		role: "Builder",
		subtitle: "(Jan 2026 - Present)",
		description:
			"Building personal projects and products end-to-end with a strong focus on clean UI, fast performance, and practical user experience. I handle architecture, frontend, backend integration, and continuous improvement with modern React and Next.js workflows.",
		decorativeText: "る",
		image: "/server.png",
		badgePosition: "top-right",
		accent: "yellow-highlight",
	},
	{
		id: "zoro",
		number: "02",
		name: "KitFitx ",
		role: "Full-Stack Developer",
		subtitle: "(Sep 2025 - Mar 2026) 7 mo",
		decorativeText: "ぞ",
		badgePosition: "top-left",
		accent: "red-dot",
		image: "/kitfitx.png",
		description:
			"I worked as a Software Developer at a health-focused startup, building features for menstrual tracking, wellness insights, and daily health support. Across React, Next.js, React Native, and backend services, I focused on delivering a smooth, reliable, and secure experience for users.",
	},
	{
		id: "nami",
		number: "03",
		name: "Boomzo",
		role: "Full-Stack Developer",
		subtitle: "(Oct 2024 - Jul 2025) 1 yr 1 mo",
		decorativeText: "な",
		badgePosition: "top-left",
		accent: "red-dot",
		image: "/boomzo.png",
		description:
			"Started as a Frontend Developer and then transitioned into React Native to help launch Boomzo's first mobile applications. This role expanded my product ownership and strengthened my full-stack capabilities with Next.js and API-driven development.",
	},
];
