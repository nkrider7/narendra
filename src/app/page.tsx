import ChibiCarousel from "@/components/Landing/ChibiCarousel";
import CrewRoster from "@/components/Landing/CrewRoster";
import Footer from "@/components/Footer";
import Expand from "@/components/Landing/Expand";
import Hero from "@/components/Landing/Hero";
import LuffyEyeHero from "@/components/Landing/LuffyEyeHero";
import RemAbout from "@/components/Landing/RemAbout";
import { MarqueeDemo } from "@/components/Landing/Marque";
import SoulArise from "@/components/Landing/soul-arise";
import TechStack from "@/components/Landing/TechStack";
import Navbar from "@/components/Navbar";
import ArctBox from "@/components/Landing/Arctbox";
import PartnerHero from "@/components/Landing/PartnerHero";
import ProjectShowcaseCarousel from "@/components/Landing/ProjectShowcaseCarousel";


export default function Home() {
  return (
    <div className="max-w-screen-9xl mx-0 auto sm:mx-auto  ">
      <div className="relative">
        <Navbar />
        <div className="-mt-16">
          <Hero />
        </div>
      </div>
      <PartnerHero />
      <ProjectShowcaseCarousel />
  
      <CrewRoster />
      <TechStack />
      <ChibiCarousel />
      <LuffyEyeHero />
      <MarqueeDemo />
      <RemAbout />
      <Expand />
    
      <ArctBox />
      <SoulArise />
      <Footer />
    </div>
  );
}
