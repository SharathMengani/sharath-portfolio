"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiTailwindcss,
  SiSass,
  SiFramer,
  SiSocket,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import {
  BiCodeAlt,
  BiSolidLayer,
  BiMicrophone,
  BiRocket,
  BiPalette,
  BiNetworkChart,
  BiCheckShield,
  BiLineChart,
} from "react-icons/bi";

const skillCategories = [
  {
    title: "Core Frontend",
    description: "Next.js (App Router, SSR/SSG), React.js, Angular, TypeScript, JavaScript (ES6+), HTML5/CSS3",
    icon: BiCodeAlt,
    skills: [
      { name: "Next.js (App Router, SSR/SSG)", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "HTML5 / CSS3", icon: SiHtml5 },
    ],
  },
  {
    title: "State & Architecture",
    description: "Redux, Zustand, NgRx, Context API, Component-Driven Design, Reusable UI Systems",
    icon: BiSolidLayer,
    skills: [
      { name: "Redux", icon: SiRedux },
      { name: "Zustand", icon: BiSolidLayer },
      { name: "NgRx", icon: SiRedux },
      { name: "Context API", icon: SiReact },
      { name: "Component-Driven Design", icon: BiCodeAlt },
      { name: "Reusable UI Systems", icon: BiSolidLayer },
    ],
  },
  {
    title: "Real-Time & Network",
    description: "WebSockets (Streaming & Auto-reconnect), RESTful APIs, Speech-to-Text (STT) & Text-to-Speech (TTS)",
    icon: BiMicrophone,
    skills: [
      { name: "WebSockets (Streaming & Auto-reconnect)", icon: SiSocket },
      { name: "RESTful APIs", icon: BiNetworkChart },
      { name: "Speech-to-Text (STT)", icon: BiMicrophone },
      { name: "Text-to-Speech (TTS)", icon: BiMicrophone },
    ],
  },
  {
    title: "Styling & UX",
    description: "Tailwind CSS, SCSS, Framer Motion, Responsive & Adaptive Layouts, Web Accessibility",
    icon: BiPalette,
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "SCSS", icon: SiSass },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Responsive & Adaptive Layouts", icon: BiPalette },
      { name: "Web Accessibility", icon: BiCheckShield },
    ],
  },
  {
    title: "Performance & Tools",
    description: "Bundle Optimization, List Virtualization, Core Web Vitals, Git, GitHub, Vercel, Lighthouse, Copilot",
    icon: BiRocket,
    skills: [
      { name: "Bundle Optimization", icon: BiRocket },
      { name: "List Virtualization", icon: BiRocket },
      { name: "Core Web Vitals", icon: BiLineChart },
      { name: "Git & GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-[#08070d] text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-violet-400 uppercase tracking-[0.3em] mb-4 text-sm font-semibold">
            Technical Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">
              Technical Arsenal
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base">
            Specialized modern reactive frontend architecture, low-latency streaming protocols, and state management systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            const isFullWidth = idx === 4;

            return (
              <div
                key={cat.title}
                className={`p-7 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-violet-500/40 hover:bg-violet-950/20 transition-all duration-300 flex flex-col justify-between ${isFullWidth ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                      <CatIcon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  </div>

                  <p className="text-gray-400 text-xs mb-5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.04, y: -2 }}
                        className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 
                                   flex items-center gap-2 text-xs text-gray-200 
                                   hover:text-white hover:border-violet-500/40 hover:bg-violet-950/40 transition-colors"
                      >
                        <Icon className="text-violet-400 text-sm shrink-0" />
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
