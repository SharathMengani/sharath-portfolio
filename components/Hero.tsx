"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { FiArrowRight, FiTerminal } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const coreTech = [
  { name: "React.js", icon: SiReact },
  { name: "Next.js (App Router)", icon: SiNextdotjs },
  { name: "Angular", icon: SiAngular },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Redux / Zustand / NgRx", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 flex items-center justify-center bg-[#09090b] text-zinc-100 overflow-hidden px-6">

      {/* ── Refined Subtle Ambient Spotlight (Linear/Vercel style) ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[340px] bg-gradient-to-b from-indigo-500/10 via-zinc-800/5 to-transparent blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl w-full text-center"
      >
        {/* ── Status Kicker ── */}
        <motion.div variants={fadeUp} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs font-mono shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Sharath Chandra Mengani</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Senior Frontend Developer</span>
          </div>
        </motion.div>

        {/* ── Section Title ── */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.035em] text-zinc-50 leading-[1.08] mb-6"
        >
          Senior Frontend Developer{" "}
          <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
            6+ Years of High-Scale Systems
          </span>
        </motion.h1>

        {/* ── Exact Resume Positioning ── */}
        <motion.p
          variants={fadeUp}
          className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          Engineering high-performance FinTech, Crypto, AI, and SaaS applications (2020–Present).
          Specialized in reactive architectures with <span className="text-zinc-200">React.js, Next.js (App Router, SSR/SSG), Angular, and TypeScript</span>,
          low-latency <span className="text-zinc-200">CEX/DEX trading terminals</span>, enterprise conversational voice agent dashboards,
          and sub-second <span className="text-zinc-200">WebSocket pipelines</span>. Expanding into full-stack workflows (<span className="text-zinc-200">Node.js, Express, PostgreSQL, CI/CD</span>).
        </motion.p>

        {/* ── Executive CTAs ── */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold 
                       bg-zinc-100 text-zinc-950 hover:bg-white transition-all duration-200 
                       shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Architecture</span>
            <FiArrowRight className="text-zinc-600 group-hover:text-zinc-950 group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium 
                       bg-zinc-900/90 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 
                       transition-all duration-200 shadow-sm"
          >
            <FiTerminal className="text-zinc-400" />
            <span>Career Journey</span>
          </a>
        </motion.div>

        {/* ── Core Stack Pills (Monochrome & Refined) ── */}
        <motion.div variants={fadeUp} className="pt-8 border-t border-white/[0.06]">
          <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-4">
            Production Tech Stack & Systems
          </p>

          <div className="flex flex-wrap justify-center gap-2.5">
            {coreTech.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#111114] border border-white/[0.08] 
                             text-xs font-mono text-zinc-300 hover:border-white/20 hover:text-white transition-colors"
                >
                  <Icon className="text-zinc-400 text-sm" />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
