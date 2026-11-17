"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiActivity, FiLayers, FiDollarSign } from "react-icons/fi";

const projects = [
  {
    title: "CEX & DEX Crypto Trading Terminal",
    tagline: "Low-Latency Reactive Trading Interface",
    techStack: "Next.js | React.js | Angular | WebSockets | Canvas",
    description:
      "Architected a low-latency crypto trade dashboard with continuous financial ticker streaming, live trade history, and customized order placement panels with comprehensive client-side error handling and status states.",
    points: [
      "Engineered high-throughput market depth charts and real-time order books using canvas rendering and selective hooks to sustain steady 60 FPS performance during high volatility trading sessions.",
      "Integrated continuous ticker streaming and order execution states without blocking the main UI thread.",
    ],
    tags: ["Next.js", "React.js", "Angular", "WebSockets", "Canvas", "TypeScript"],
    metrics: "Steady 60 FPS • Canvas Rendering",
    icon: FiActivity,
  },
  {
    title: "Crypto Payment & Settlement Application",
    tagline: "Dynamic QR Checkout & Settlement State Machine",
    techStack: "React.js | Next.js | Redux | Tailwind CSS | Framer Motion",
    description:
      "Developed a QR-based checkout settlement workflow featuring granular form validations, asynchronous confirmation states, dynamic gas fee alerts, and responsive user feedback animations.",
    points: [
      "Implemented secure transaction state machines using Redux Toolkit, managing real-time payment timeouts, retry strategies, and localized receipt generation.",
      "Designed dynamic gas fee alerts and responsive micro-interactions for seamless payment UX.",
    ],
    tags: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
    metrics: "Redux State Machine • Instant QR Settlement",
    icon: FiDollarSign,
  },
  {
    title: "AI Conversational & Voice Agent Platform",
    tagline: "Enterprise Voice/Chat Agents & Embeddable SDK",
    techStack: "Next.js | React.js | TypeScript | WebSockets | STT/TTS",
    description:
      "Constructed an enterprise-grade AI customer support platform orchestrating seamless agent transfers, real-time follow-ups, and multilingual speech-to-text / text-to-speech interaction streams.",
    points: [
      "Engineered zero-dependency embeddable chat SDKs supporting dynamic customer branding, automated business-hours logic, and contextual session persistence across subdomains.",
      "Low-latency multilingual voice agent interfaces with audio transcript streaming and waveform telemetry.",
    ],
    tags: ["Next.js", "React.js", "TypeScript", "WebSockets", "STT / TTS", "Tailwind CSS"],
    metrics: "Bidirectional STT/TTS • Embeddable Chat SDK",
    icon: FiLayers,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-[#08070d] text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/15 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <p className="text-violet-400 uppercase tracking-[0.3em] mb-4 text-sm font-semibold">
            Key Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">
              Applications
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-base">
            Production crypto trading platforms, settlement applications, and enterprise conversational AI interfaces engineered for low-latency performance.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-violet-500/30 via-white/5 to-indigo-500/20 flex flex-col"
              >
                {/* Inner Card */}
                <div
                  className="h-full rounded-3xl p-8 bg-[#0e0d17]/95 backdrop-blur-xl
                             border border-white/10 flex flex-col justify-between
                             group-hover:border-violet-500/50 transition-colors duration-300"
                >
                  <div>
                    {/* Header badge & icon */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:bg-violet-500/20 transition-transform">
                        <Icon size={24} />
                      </div>

                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {project.metrics}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors mb-1">
                      {project.title}
                    </h3>

                    <p className="text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
                      {project.tagline}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.points.map((pt, i) => (
                        <li key={i} className="text-gray-400 text-xs leading-relaxed flex items-start gap-2">
                          <span className="text-violet-400 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech tag pills */}
                    <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-lg bg-violet-950/30 border border-violet-500/20 text-violet-200 group-hover:border-violet-500/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA link */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-violet-400 text-sm font-semibold hover:text-violet-300 transition-colors"
                    >
                      <span>Discuss Architecture</span>
                      <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
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
