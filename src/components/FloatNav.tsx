"use client";

import { motion } from "framer-motion";
import { House, Newspaper } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

const TOGGLE_CLASSES =
  "text-sm font-semibold flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

type ToggleOptionsType = "home" | "blogs";

const FloatBar = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("home");
  const [hovered, setHovered] = useState<ToggleOptionsType | null>(null);

  return (
    <div className="bottom-10 fixed z-50 bg-slate-100 rounded-full p-1 shadow-lg">
      <SliderToggle
        selected={selected}
        setSelected={setSelected}
        setHovered={setHovered}
        hovered={hovered}
      />
    </div>
  );
};

const SliderToggle = ({
  selected,
  setSelected,
  setHovered,
  hovered,
}: {
  selected: ToggleOptionsType;
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
  setHovered: Dispatch<SetStateAction<ToggleOptionsType | null>>;
  hovered: ToggleOptionsType | null;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full gap-x-2 bg-gray-200 dark:bg-gray-700 shadow-md">
      {/* Home Button */}
      <Link
        href="/"
        className={TOGGLE_CLASSES}
        onMouseEnter={() => setHovered("home")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setSelected("home")}
      >
        <span className="relative z-10">
          <House size={18} />
        </span>
      </Link>

      {/* Blogs Button */}
      <Link
        href="/blogs"
        className={TOGGLE_CLASSES}
        onMouseEnter={() => setHovered("blogs")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setSelected("blogs")}
      >
        <span className="relative z-10">
          <Newspaper size={18} />
        </span>
      </Link>

      {/* Background Slider Effect */}
      <div
        className={`absolute inset-0 z-0 flex ${
          (hovered ?? selected) === "blogs" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="h-full w-1/2 rounded-full bg-[#CA160B] shadow-md"
        />
      </div>
    </div>
  );
};

export default FloatBar;
