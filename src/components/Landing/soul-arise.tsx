"use client";
import Image from "next/image";
import Link from "next/link";

export default function SoulArise() {
  return (
    <section className="bg-black text-white px-4 md:px-10 py-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Top Title Row */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h4 className="text-gray-400 font-semibold text-sm">Currently Working</h4>
            <h2 className="text-xl font-sink font-semibold">Soul Arise Project</h2>
          </div>
          <div className="text-right">
            <h4 className="text-gray-400 font-guzan text-sm">Anime based Social Self improvement</h4>
            <p className="text-xs font-semibold text-gray-500">React Native App</p>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Large Card */}
          
          <Link  href="https://soularise.netlify.app/" className="md:col-span-2 bg-white rounded-xl overflow-hidden relative p-4 flex flex-col md:flex-row justify-center">
            <Image
              src="/soul.webp"
              alt="Phone Mockup"
              width={400}
              height={100}
              className="rounded-2xl object-cover md:w-[70%] mx-auto "
            />
            <h1 className="text-4xl md:text-5xl font-guzan text-black  md:w-[30%] text-center md:text-start md:px-4 ">
				Gamify Your <span className="text-[#413BFF]">Growth</span>, Level Up Your <span className="text-[#4611FD]">Soul</span>
              {/* Seamlessly{" "} */}
              {/* <span className="text-blue-400">Schedule</span> and Monitor{" "}
              <span className="text-blue-400">Projects</span> */}
            </h1>
          </Link>

          {/* Right Small Card */}
         <div className="bg-neutral-900 rounded-xl overflow-hidden w-full h-full">
  <Image
    src="https://i.makeagif.com/media/6-25-2021/S4k_Db.gif"
    alt="Coin"
    width={1200}
    height={1200}
    className="w-full h-full object-cover"
  />
</div>

        </div>


      
      </div>
    </section>
  );
}
