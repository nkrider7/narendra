import Footer from "@/components/Footer";
import Expand from "@/components/Landing/Expand";
import Hero from "@/components/Landing/Hero";
import HeroSection from "@/components/Landing/HeroZero";
import { MarqueeDemo } from "@/components/Landing/Marque";
import SoulArise from "@/components/Landing/soul-arise";
export default function Home() {
  return (
    <div className="max-w-screen-5xl ">
      <Hero />
      <SoulArise />
      <Expand />
      <MarqueeDemo />
      <HeroSection />
      <Footer />
    </div>
  );
}
