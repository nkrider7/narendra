import FloatBar from "@/components/FloatNav";
import Footer from "@/components/Footer";
import Expand from "@/components/Landing/Expand";
import Hero from "@/components/Landing/Hero";
import HeroSection from "@/components/Landing/HeroZero";
import { MarqueeDemo } from "@/components/Landing/Marque";
export default function Home() {
  return (
    <div className="max-w-screen-5xl ">
      <div className="flex justify-center">
        <FloatBar />
      </div>
      <Hero />
      <MarqueeDemo />
      <Expand />
      <HeroSection />
      <Footer />
    </div>
  );
}
