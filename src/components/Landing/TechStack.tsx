"use client";

import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRust,
  SiTauri,
  SiSupabase,
  SiPostgresql,
} from "react-icons/si";

const technologies = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "React Native",
    icon: <SiReact />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Rust",
    icon: <SiRust />,
  },
  {
    name: "Tauri",
    icon: <SiTauri />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
];

export default function TechStack() {
  return (
    <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-10">
          <p className="text-[11px] text-center font-semibold tracking-tight text-neutral-700 sm:text-lg">
            Current tech stack
          </p>
        </div>

        {/* Technologies */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 sm:grid-cols-6 sm:gap-x-6 sm:gap-y-10 md:grid-cols-8 md:gap-x-8 lg:grid-cols-11 lg:gap-x-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex min-w-0 flex-col items-center justify-center text-center"
            >
              {/* Icon */}
              <div
                className="
                  flex items-center justify-center
                  text-[26px] text-neutral-800
                  transition-transform duration-200
                  group-hover:scale-110
                  sm:text-[30px]
                  md:text-[34px]
                  lg:text-[36px]
                "
              >
                {tech.icon}
              </div>

              {/* Name */}
              <span
                className="
                  mt-2
                  whitespace-nowrap
                  text-[9px]
                  font-medium
                  tracking-[-0.01em]
                  text-neutral-500
                  sm:mt-2.5
                  sm:text-[10px]
                  md:text-[10px]
                "
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}