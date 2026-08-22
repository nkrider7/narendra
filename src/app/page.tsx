import ChibiCarousel from "@/components/Landing/ChibiCarousel";
import CrewRoster from "@/components/Landing/CrewRoster";
import Footer from "@/components/Footer";
import Expand from "@/components/Landing/Expand";
import Hero from "@/components/Landing/Hero";
import LuffyEyeHero from "@/components/Landing/LuffyEyeHero";
import RemAbout from "@/components/Landing/RemAbout";

import { MarqueeDemo } from "@/components/Landing/Marque";
import ShortIntro from "@/components/Landing/ShortIntro";
import SoulArise from "@/components/Landing/soul-arise";
import TechStack from "@/components/Landing/TechStack";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="max-w-screen-5xl">
      <div className="relative">
        <Navbar />
        <div className="-mt-16">
          <Hero />
        </div>
      </div>
      <ShortIntro />
      <ChibiCarousel />
      <LuffyEyeHero />
      <TechStack />
      <CrewRoster />
      <MarqueeDemo />
      <RemAbout />
      <Expand />
    
      <SoulArise />
      <Footer />
    </div>
  );
}
