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
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiVercel,
  SiNodedotjs,
  SiPostgresql,
} from "react-icons/si";
import {
  FiLayout,
  FiServer,
  FiRadio,
  FiZap,
  FiCpu,
  FiShield,
  FiLayers,
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Core Frontend",
    description: "Next.js (App Router, SSR/SSG), React.js, Angular, TypeScript, JavaScript (ES6+), HTML5/CSS3",
    icon: FiLayout,
    span: "md:col-span-2",
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
    icon: FiLayers,
    span: "md:col-span-1",
    skills: [
      { name: "Redux", icon: SiRedux },
      { name: "Zustand", icon: FiLayers },
      { name: "NgRx", icon: SiRedux },
      { name: "Context API", icon: SiReact },
      { name: "Component-Driven Design", icon: FiLayout },
      { name: "Reusable UI Systems", icon: FiCpu },
    ],
  },
  {
    title: "Real-Time & Network",
    description: "WebSockets (Streaming & Auto-reconnect), RESTful APIs, Speech-to-Text (STT), Text-to-Speech (TTS)",
    icon: FiRadio,
    span: "md:col-span-1",
    skills: [
      { name: "WebSockets (Streaming & Reconnect)", icon: SiSocketdotio },
      { name: "RESTful APIs", icon: FiServer },
      { name: "Speech-to-Text (STT)", icon: FiRadio },
      { name: "Text-to-Speech (TTS)", icon: FiZap },
    ],
  },
  {
    title: "Styling & UX",
    description: "Tailwind CSS, SCSS, Framer Motion, Responsive & Adaptive Layouts, Web Accessibility",
    icon: FiLayout,
    span: "md:col-span-1",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "SCSS", icon: SiSass },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Responsive & Adaptive Layouts", icon: FiLayout },
      { name: "Web Accessibility (a11y)", icon: FiShield },
    ],
  },
  {
    title: "Performance & DevOps",
    description: "Bundle Optimization, List Virtualization, Core Web Vitals, Git / GitHub, Vercel, Lighthouse, Node.js / PostgreSQL",
    icon: FiZap,
    span: "md:col-span-1",
    skills: [
      { name: "Bundle Optimization", icon: FiZap },
      { name: "List Virtualization", icon: FiZap },
      { name: "Core Web Vitals & Lighthouse", icon: FiZap },
      { name: "Git & GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Node.js / PostgreSQL", icon: SiNodedotjs },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#09090b] text-zinc-100 relative overflow-hidden">
      {/* ── Background Subtle Glow & Grid Accent ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-indigo-500/5 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-2">
            Capability Matrix
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-50">
            Skills & Technical Arsenal
          </h2>
          <p className="text-zinc-400 mt-2 max-w-xl text-sm leading-relaxed">
            Specialized in reactive frontend architecture, real-time socket streaming, state pipelines, and performance optimization.
          </p>
        </div>

        {/* ── Clean Bento Matrix (3-Column Layout) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`p-6 surface-card rounded-2xl flex flex-col justify-between ${cat.span}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300">
                      <CatIcon size={16} />
                    </div>
                    <h3 className="text-base font-bold text-zinc-100">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-zinc-500 text-xs mb-5 font-mono">
                    {cat.description}
                  </p>
                </div>

                {/* Inline Badges with Subtle Zinc Hover */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.04]">
                  {cat.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/80 border border-white/[0.06] hover:border-white/20 hover:bg-zinc-800 transition-colors text-xs text-zinc-300 hover:text-white"
                      >
                        <Icon className="text-zinc-400 text-xs shrink-0" />
                        <span className="font-mono text-[11px]">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
