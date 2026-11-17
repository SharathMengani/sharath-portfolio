"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";

const experiences = [
  {
    company: "ChatBucket",
    role: "Senior Frontend Developer",
    period: "Dec 2025 – Present",
    location: "Hyderabad, India",
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "WebSockets",
      "Redux",
      "Zustand",
      "STT/TTS",
    ],
    bullets: [
      {
        keyword: "AI Agent Fleets & Workflows",
        text: "Architected conversational UI for autonomous AI Chat Agents, Voice Agents, and live human handoff protocols supporting real-time transfers, active queues, and callbacks.",
      },
      {
        keyword: "Voice Streaming & Telemetry",
        text: "Built low-latency multilingual Voice Agent experiences featuring call history tracking, waveform playback, live transcript streaming, and bidirectional STT/TTS handling.",
      },
      {
        keyword: "Embeddable Widget Architecture",
        text: "Engineered customizable multi-tenant embeddable chat widgets with dynamic brand theming, launcher triggers, operating-hour logic, and automated publishing workflows.",
      },
      {
        keyword: "Performance & Auth",
        text: "Optimized initial load speeds using Next.js App Router and tree-shaking; implemented enterprise auth with OTP verification, first-time credentials, and RBAC controls.",
      },
    ],
  },
  {
    company: "CoinEarth Technologies Pvt. Ltd.",
    role: "Frontend Developer",
    period: "Oct 2020 – Dec 2025",
    location: "Hyderabad, India",
    technologies: [
      "Next.js",
      "React.js",
      "Angular",
      "TypeScript",
      "Redux",
      "Zustand",
      "NgRx",
      "WebSockets",
      "Tailwind CSS",
      "SCSS",
    ],
    bullets: [
      {
        keyword: "High-Frequency Trading UI",
        text: "Engineered production Centralized (CEX) and Decentralized (DEX) crypto exchange interfaces with live-streaming order books, real-time market depth visualization, and candlestick charts.",
      },
      {
        keyword: "Modernization & Migration",
        text: "Led frontend refactoring and migration of legacy AngularJS applications to modern Angular and Next.js, improving modularity and reusable design token adoption.",
      },
      {
        keyword: "Sub-Second WebSocket Pipelines",
        text: "Integrated low-latency WebSocket and REST APIs for continuous ticker updates, order execution states, wallet balances, and depth-of-market feeds without blocking the main UI thread.",
      },
      {
        keyword: "Rendering Optimization",
        text: "Eliminated DOM bottlenecks during extreme market volatility via code splitting, memoization, list virtualization, and decoupled state (Redux, Zustand, NgRx).",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#09090b] text-zinc-100 relative">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-20 text-center">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-2">
            Track Record
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-50">
            Career Journey & Experience
          </h2>
          <p className="text-zinc-400 mt-2 max-w-xl mx-auto text-sm leading-relaxed">
            6+ years of engineering production applications across FinTech, Crypto, AI, and SaaS platforms.
          </p>
        </div>

        {/* ── Refined Timeline ── */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-px before:h-full before:w-[1px] before:bg-white/[0.08]">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""
                  } gap-8`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#09090b] border border-white/20 flex items-center justify-center text-zinc-300 shadow-[0_0_12px_rgba(99,102,241,0.2)] z-20">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                </div>

                {/* Card Container */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div className="p-8 surface-card rounded-2xl group">
                    {/* Header Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-zinc-300 flex items-center gap-1.5">
                        <FiCalendar size={12} className="text-zinc-400" />
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                        <FiMapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium text-indigo-400 mb-6">
                      {exp.company}
                    </p>

                    {/* Scannable Bullets */}
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                          <FiCheckCircle size={15} className="text-zinc-500 mt-1 shrink-0" />
                          <span>
                            <strong className="text-zinc-200 font-semibold">{b.keyword}:</strong>{" "}
                            {b.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/80 border border-white/[0.06] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
