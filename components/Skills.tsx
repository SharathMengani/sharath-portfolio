"use client";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiVercel,
  SiSocket,
  SiFramer,
} from "react-icons/si";

import { motion } from "framer-motion";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const skills = [
  "React.js",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript ES6+",
  "GSAP",
  "Tailwind CSS",
  "Redux",
  "NgRx",
  "Zustand",
  "WebSockets",
  "Framer Motion",
  "Node.js",
  "GitHub",
  "Vercel",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-[#05060a] text-white relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Expertise
          </p>

          <h2 className="text-5xl font-black">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Skills
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable fintech and crypto applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5">
          {skills.map((skill) => {
            const Icon = skillIcons[skill];

            return (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.08 }}
                className="group relative px-8 py-4 rounded-full cursor-default w-full"
              >
                {/* pill */}
                <div
                  className="relative flex items-center gap-2   text-xl
                     text-gray-200
                     group-hover:text-white
                     group-hover:border-cyan-500/30
                     transition duration-300"
                >
                  {Icon && <Icon className="text-cyan-400" />}
                  <span>{skill}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const skillIcons: Record<string, any> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  TypeScript: SiTypescript,
  "JavaScript ES6+": SiJavascript,
  Redux: SiRedux,
  NgRx: SiRedux,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  Zustand : MdOutlineRealEstateAgent,
  GitHub: SiGit,
  Vercel: SiVercel,
  WebSockets: SiSocket,
};