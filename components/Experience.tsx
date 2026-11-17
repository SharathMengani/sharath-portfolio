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
      "REST APIs",
      "Redux",
      "Zustand",
      "STT / TTS",
    ],
    highlights: [
      "AI Agent Fleets & Workflows: Architected conversational UI for autonomous AI Chat Agents, Voice Agents, and live human handoff protocols, supporting real-time conversation transfers, active queues, and callback schedules.",
      "Voice Streaming & Telemetry: Implemented low-latency multilingual Voice Agent experiences featuring call history tracking, waveform playback, live audio transcript streaming, and bidirectional STT/TTS handling.",
      "Embeddable Widget Architecture: Engineered customizable, multi-tenant embeddable chat widgets with brand dynamic theming, launcher triggers, operating-hour logic, and automated publishing workflows.",
      "Performance & Auth: Optimized dashboard rendering and initial load speeds using Next.js App Router and tree-shaking; built enterprise authentication with OTP verification, first-time credentials, and RBAC profile controls.",
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
    highlights: [
      "High-Frequency Trading UI: Engineered production Centralized (CEX) and Decentralized (DEX) crypto exchange interfaces, developing live-streaming order books, real-time depth visualization, and candlestick chart integrations.",
      "Modernization & Migration: Led the frontend refactor and migration of legacy AngularJS applications to modern Angular and Next.js, significantly boosting maintainability, code modularity, and reusable design token usage.",
      "Sub-second WebSocket Pipelines: Integrated low-latency WebSocket and REST APIs for continuous ticker updates, order execution states, wallet balances, and depth-of-market feeds without blocking the main UI thread.",
      "Rendering Optimization: Mitigated DOM bottlenecks during high market volatility by leveraging code splitting, memoization, list virtualization, and state decoupling via Redux, Zustand, and NgRx.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 bg-[#08070d] text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-violet-600/15 blur-[150px] rounded-full" />
        <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-violet-400 uppercase tracking-[0.3em] mb-4 text-sm font-semibold">
            Professional Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Career{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">
              Journey
            </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base">
            Over 5 years of engineering high-performance FinTech, Crypto, AI, and SaaS applications across production environments.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-indigo-500/20 before:to-transparent">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""
                  } gap-8`}
              >
                {/* Timeline center node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#08070d] border-2 border-violet-400 flex items-center justify-center text-violet-400 shadow-lg shadow-violet-500/30 z-20">
                  <FiBriefcase size={14} />
                </div>

                {/* Card Container */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-violet-500/40 hover:bg-violet-950/20 transition-all duration-300 shadow-xl group">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 flex items-center gap-1.5">
                        <FiCalendar size={12} />
                        {exp.period}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <FiMapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-violet-400 font-medium text-base mb-5">
                      {exp.company}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm leading-relaxed">
                          <FiCheckCircle size={16} className="text-violet-400 mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 group-hover:border-violet-500/30 transition-colors"
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

