import Footer from "@/components/Footer";
import Intro from "@/components/Landing/Intro";
import MotionHero from "@/components/Landing/MotionHero";
import MotionSide from "@/components/Landing/Motionside";
import MotionSide2 from "@/components/Landing/Motionside2";
import Navbar from "@/components/Navbar";

export default function WhoamiPage() {
  return (
    <div className="max-w-screen-5xl">
      <Navbar />
      <div className="-mt-16">
      <Intro />
      </div>
      <MotionHero />
      <MotionSide />
      <MotionSide2 />
      <Footer />
    </div>
  );
}
