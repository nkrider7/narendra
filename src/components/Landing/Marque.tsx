import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";
import Heading from "../ui/Heading";
import Link from "next/link";

const reviews = [
	{
		name: "DigitalKosh",
		link: "https://digitalkosh.netlify.app/",
		body: "I've never seen anything like this before. It's amazing. I love it.",
		img: "/digital.png",
	},
	{
		name: "Medihelp",
		link: "https://medihelpglobal.com/",
		body: "I don't know what to say. I'm speechless. This is amazing.",
		img: "/medcare.png",
	},
	{
		name: "Techtrialdmc",
		link: "https://www.techtraildmc.com/",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "/tt.png",
	},
	{
		name: "Patepoia",
		link: "https://pals-petopia.netlify.app/",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "/patopia.png",
	},
	{
		name: "Boomzo",
		link: "https://www.boomzo.in/",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "/boomzo.png",
	},
	{
		name: "BrooCode",
		link: "https://broocode.netlify.app/",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "/broocode.png",
	},
	{
		name: "Portfolio",
		link: "/",
		body: "I'm at a loss for words. This is amazing. I love it.",
		img: "/port.png",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
	img,
}: {
	img: string;
}) => {
	return (
		
		<Image className=" rounded-lg" width={300} height={300} alt="" src={img} />
	);
};

export function MarqueeDemo() {
	return (
		<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
			<Heading >My Works</Heading>
			<Marquee pauseOnHover className="[--duration:20s]">
				{firstRow.map((review) => (
					<Link key={review.name} href={review.link}>
					<ReviewCard key={review.name} {...review} />
					</Link>
				))}
			</Marquee>
			<Marquee reverse pauseOnHover className="[--duration:20s]">
				{secondRow.map((review) => (
					<Link key={review.name} href={review.link}>
						<ReviewCard key={review.name} {...review} />
					</Link>
					
				))}
			</Marquee>
			
		</div>
	);
}
