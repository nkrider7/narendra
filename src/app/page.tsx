import CrewRoster from "@/components/Landing/CrewRoster";
import Footer from "@/components/Footer";
import Expand from "@/components/Landing/Expand";
import Hero from "@/components/Landing/Hero";
import HeroSection from "@/components/Landing/HeroZero";
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
       <TechStack />
      <CrewRoster />
      
      <MarqueeDemo />
      
      <SoulArise />
      <Expand />
      <HeroSection />
      <Footer />
    </div>
  );
}
