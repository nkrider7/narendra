import Footer from "@/components/Footer";
import Expand from "@/components/Landing/Expand";
import HeroSection from "@/components/Landing/HeroZero";
import Intro from "@/components/Landing/Intro";
import { MarqueeDemo } from "@/components/Landing/Marque";
import MotionHero from "@/components/Landing/MotionHero";
import SoulArise from "@/components/Landing/soul-arise";
import TechStack from "@/components/Landing/TechStack";
export default function Home() {
  return (
    <div className="max-w-screen-5xl ">
      <Intro />
      <MotionHero />
      <MarqueeDemo />
      <TechStack />
      <SoulArise />
      <Expand />
      <HeroSection />
      <Footer />
    </div>
  );
}
