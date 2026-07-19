"use client";
import Image from "next/image";
import Link from "next/link";

export default function SoulArise() {
  return (
    <section className="bg-black text-white px-4 md:px-8 py-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Title Row */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="text-gray-400 font-inter text-sm">Currently Working</h4>
            <h2 className="text-xl font-inter" style={{fontWeight: "600"}}>Soul Arise Project</h2>
          </div>
          <div className="text-right">
            <h1 className="text-gray-400 font-inter text-sm" style={{fontWeight: "600"}}>Anime based Social Self improvement</h1>
            <p className="text-xs font-inter font-semibold text-gray-500">React Native App</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Left Large Card */}

          <Link href="https://soularise.netlify.app/" className="md:col-span-2 bg-white rounded-xl overflow-hidden relative p-4 flex flex-col md:flex-row justify-center ">
            <Image
              src="/soul.webp"
              alt="Phone Mockup"
              width={400}
              height={100}
              className="rounded-2xl object-cover md:w-[60%] mx-auto "
            />
            <h1 className="text-4xl md:text-5xl font-guzan text-black  md:w-[40%] text-center md:text-start md:px-4 ">
              Gamify Your <span className="text-[#fd2841]">Growth</span>, Level Up Your <span className="text-[#4611FD]">Soul</span>
              {/* Seamlessly{" "} */}
              {/* <span className="text-blue-400">Schedule</span> and Monitor{" "}
              <span className="text-blue-400">Projects</span> */}
            </h1>
          </Link>

          {/* Right Small Card */}
          <div className="group relative min-h-[240px] md:col-span-2 overflow-hidden rounded-xl bg-neutral-900 md:min-h-full">
            <video
              src="/loop.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              aria-label="Soul Arise app preview"
            />
          </div>

        </div>



      </div>
    </section>
  );
}
