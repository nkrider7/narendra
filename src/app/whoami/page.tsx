import Footer from "@/components/Footer";
import ArctBox from "@/components/Landing/Arctbox";
import ChibiCarousel from "@/components/Landing/ChibiCarousel";
import CrewRoster from "@/components/Landing/CrewRoster";
import Expand from "@/components/Landing/Expand";
import Intro from "@/components/Landing/Intro";
import LuffyEyeHero from "@/components/Landing/LuffyEyeHero";
import { MarqueeDemo } from "@/components/Landing/Marque";
import MotionHero from "@/components/Landing/MotionHero";
import MotionSide from "@/components/Landing/Motionside";
import MotionSide2 from "@/components/Landing/Motionside2";

import RemAbout from "@/components/Landing/RemAbout";
import SoulArise from "@/components/Landing/soul-arise";
import Navbar from "@/components/Navbar";

export default function WhoamiPage() {
  return (
    <div className="max-w-screen-5xl">
      <Navbar />
      <div className="-mt-16">
        <Intro />
      </div>
      <ChibiCarousel />
      <LuffyEyeHero />
      <MarqueeDemo />
      <RemAbout />
      <Expand />
      <MotionHero />
      <MotionSide />
      <SoulArise />
      <MotionSide2 />
      <ArctBox />
      <Footer />
    </div>
  );
}
