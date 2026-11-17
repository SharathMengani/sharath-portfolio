"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowUpRight,
  FiActivity,
  FiLayers,
  FiDollarSign,
  FiX,
  FiCheckCircle,
  FiCpu,
  FiTerminal
} from "react-icons/fi";

const projects = [
  {
    id: "trading-terminal",
    title: "CEX & DEX Crypto Trading Terminal",
    tagline: "Low-Latency WebSocket Order Book & Depth Chart Engine",
    role: "Frontend Developer",
    summary:
      "Architected a low-latency crypto trade dashboard with continuous financial ticker streaming, live trade history, and custom order placement panels with granular error/status handling.",
    bullets: [
      "Engineered high-throughput market depth charts and real-time order books using HTML5 Canvas rendering and selective hooks to sustain steady 60 FPS during peak volatility.",
      "Integrated continuous ticker streaming and order execution states without blocking the main UI thread.",
    ],
    metrics: "Steady 60 FPS • Canvas Rendering",
    icon: FiActivity,
    tags: ["Next.js", "React.js", "Angular", "WebSockets", "Canvas", "TypeScript"],
    previewType: "trading",
    architecture: {
      challenge: "Handling hundreds of WebSocket trade and depth updates per second without UI stutter or DOM render bottlenecks.",
      solution: "Decoupled state management using custom selective hooks and HTML5 Canvas depth-of-market rendering, bypassing standard React reconciliation for sub-millisecond price delta renders.",
      keyDecisions: [
        "Selective Hook Subscriptions: Only subscribed rows re-rendered when bids/asks altered beyond threshold deltas.",
        "Canvas Virtualization: Rendered market depth visualizers directly in 2D Canvas contexts, sustaining 60 FPS.",
        "Buffer Throttling: Aggregated microsecond WebSocket bursts into 16ms animation frame cycles using requestAnimationFrame.",
      ],
      impact: "Sustained steady 60 FPS during severe market volatility events with zero frame dropping and sub-50ms latency."
    }
  },
  {
    id: "crypto-settlement",
    title: "Crypto Payment & Settlement Application",
    tagline: "Dynamic QR Checkout & Settlement State Machine",
    role: "Frontend Developer",
    summary:
      "Developed a QR-based checkout settlement workflow featuring granular validations, asynchronous confirmation states, dynamic gas fee alerts, and responsive feedback animations.",
    bullets: [
      "Implemented deterministic transaction state machines via Redux Toolkit, managing real-time payment timeouts, retry logic, and localized receipt generation.",
      "Designed dynamic gas fee alerts and responsive micro-interactions for seamless payment UX.",
    ],
    metrics: "Redux State Machine • Instant QR Settlement",
    icon: FiDollarSign,
    tags: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
    previewType: "payment",
    architecture: {
      challenge: "Managing asynchronous blockchain confirmations across multi-chain networks with unpredictable gas fee spikes and unconfirmed state rollbacks.",
      solution: "Engineered a deterministic transaction state machine utilizing Redux Toolkit with automatic timeout mitigation, dynamic gas alerts, and localized receipts.",
      keyDecisions: [
        "Deterministic State Machine: Tracked states (Initiated -> Pending -> Confirmed -> Expired) preventing double verification.",
        "Dynamic Gas Alerts: Evaluated network congestion to alert consumers prior to transaction submission.",
        "Automated Reconciliation: Handled receipt caching and localized download generation across mobile/desktop.",
      ],
      impact: "Delivered instantaneous checkout feedback with zero double-spend anomalies across high-frequency merchant transactions."
    }
  },
  {
    id: "chatbucket",
    title: "AI Conversational & Voice Agent Platform (ChatBucket)",
    tagline: "Enterprise Voice/Chat Agents & Embeddable SDK",
    role: "Senior Frontend Developer",
    summary:
      "Constructed an enterprise AI customer support platform orchestrating seamless human-agent transfers, real-time follow-ups, and multilingual Speech-to-Text / Text-to-Speech streams.",
    bullets: [
      "Engineered zero-dependency embeddable chat SDKs supporting dynamic customer branding, automated business-hours logic, and contextual session persistence across subdomains.",
      "Built low-latency multilingual voice agent interfaces with audio transcript streaming, call history, and waveform telemetry.",
    ],
    metrics: "Bidirectional STT/TTS • Embeddable Chat SDK",
    icon: FiLayers,
    tags: ["Next.js", "React.js", "TypeScript", "WebSockets", "STT/TTS", "Tailwind CSS"],
    previewType: "ai",
    architecture: {
      challenge: "Streaming bidirectional speech audio between customer embeddable widgets and AI models with sub-second response latency and zero CSS style bleed.",
      solution: "Engineered a Next.js App Router multi-tenant control plane with WebSocket speech audio pipelines, real-time waveform visualizers, and a lightweight zero-dependency embeddable iframe SDK.",
      keyDecisions: [
        "Next.js App Router: Structured complex nested layouts for widget fleets, voice inboxes, and agent fleet routing.",
        "Bidirectional STT/TTS: Integrated speech-to-text models with streaming transcripts and live audio waveform telemetry.",
        "Zero-Style-Leak SDK: Isolated the embeddable chat iframe with postMessage buses, guaranteeing zero CSS contamination.",
      ],
      impact: "Achieved sub-second voice latency and deployed embeddable chat widgets across diverse enterprise client subdomains."
    }
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-28 px-6 bg-[#09090b] text-zinc-100 relative">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-2">
            Selected Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-50">
            Featured Applications
          </h2>
          <p className="text-zinc-400 mt-2 max-w-xl text-sm leading-relaxed">
            Flagship crypto trading platforms, settlement applications, and conversational AI interfaces.
          </p>
        </div>

        {/* ── Visual Project Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="surface-card rounded-2xl flex flex-col justify-between overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* ── 16:9 Architectural Mockup Visual Preview Container ── */}
                <div className="relative aspect-[16/9] w-full bg-[#0d0d10] border-b border-white/[0.08] overflow-hidden p-3.5 flex flex-col justify-between select-none">

                  {/* Top Bar inside Mockup */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.previewType === "trading" && "BTC/USDT 64,280.50"}
                      {project.previewType === "payment" && "DYNAMIC QR SETTLEMENT"}
                      {project.previewType === "ai" && "CHATBUCKET AGENT"}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-white/[0.06] text-zinc-400 text-[9px]">
                      {project.previewType === "trading" && "60 FPS • LIVE SOCKET"}
                      {project.previewType === "payment" && "CONFIRMED 12/12"}
                      {project.previewType === "ai" && "STT/TTS STREAMING"}
                    </span>
                  </div>

                  {/* Visual Mockup Graphic */}
                  {project.previewType === "trading" && (
                    <div className="my-auto space-y-1">
                      <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 mb-1">
                        <span>BID (DEPTH)</span>
                        <span>ASK (DEPTH)</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 space-y-1">
                          <div className="h-2 rounded bg-emerald-500/20 w-[90%] border-r border-emerald-400" />
                          <div className="h-2 rounded bg-emerald-500/20 w-[72%] border-r border-emerald-400" />
                          <div className="h-2 rounded bg-emerald-500/20 w-[45%] border-r border-emerald-400" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 rounded bg-rose-500/20 w-[84%] ml-auto border-l border-rose-400" />
                          <div className="h-2 rounded bg-rose-500/20 w-[60%] ml-auto border-l border-rose-400" />
                          <div className="h-2 rounded bg-rose-500/20 w-[35%] ml-auto border-l border-rose-400" />
                        </div>
                      </div>
                    </div>
                  )}

                  {project.previewType === "payment" && (
                    <div className="my-auto flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 p-1.5 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <div className="w-2 h-2 bg-zinc-200 rounded-[2px]" />
                          <div className="w-2 h-2 bg-zinc-200 rounded-[2px]" />
                        </div>
                        <div className="w-2.5 h-2.5 bg-indigo-500/60 mx-auto rounded-sm" />
                        <div className="w-2 h-2 bg-zinc-200 rounded-[2px]" />
                      </div>
                      <div className="space-y-1 text-left font-mono text-[9px]">
                        <div className="text-zinc-200 font-semibold">$1,250.00 SETTLED</div>
                        <div className="text-zinc-500 truncate max-w-[130px]">0x8f2a...39b1</div>
                        <div className="text-emerald-400 flex items-center gap-1">✓ State Verified</div>
                      </div>
                    </div>
                  )}

                  {project.previewType === "ai" && (
                    <div className="my-auto space-y-1.5">
                      <div className="flex items-center justify-center gap-1 h-7">
                        {[40, 75, 20, 95, 60, 85, 30, 70, 90, 45, 80, 25, 65].map((h, i) => (
                          <span
                            key={i}
                            style={{ height: `${h}%` }}
                            className="w-1 rounded-full bg-indigo-400/80 transition-all duration-300"
                          />
                        ))}
                      </div>
                      <div className="text-center font-mono text-[9px] text-zinc-400 truncate">
                        "Resolving user intent • Routing to AI billing fleet..."
                      </div>
                    </div>
                  )}

                  {/* Subtle hover overlay hint */}
                  <div className="text-[10px] font-mono text-zinc-500 flex items-center justify-between pt-1 border-t border-white/[0.04]">
                    <span>{project.role}</span>
                    <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">
                      Click to Inspect →
                    </span>
                  </div>
                </div>

                {/* ── Card Body (Crisp & Scannable) ── */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors mb-1 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-400 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/[0.06]">
                      {project.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06] text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.06] text-zinc-500">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 hover:border-white/20 text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <FiTerminal className="text-zinc-400" />
                      <span>View Architecture Specs</span>
                      <FiArrowUpRight className="text-zinc-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Architecture Modal Drawer (Deep Specs) ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-[#111114] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono text-indigo-400 block mb-1">
                    System Architecture Case Study
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    Role: {selectedProject.role} • {selectedProject.metrics}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="py-6 space-y-6 text-sm text-zinc-300">
                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                    Key Contributions
                  </h4>
                  {selectedProject.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <FiCheckCircle size={15} className="text-indigo-400 mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1.5">
                      Core Engineering Challenge
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.architecture.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1.5">
                      Architectural Solution
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {selectedProject.architecture.solution}
                    </p>
                  </div>
                </div>

                {/* Key Technical Decisions */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3 flex items-center gap-2">
                    <FiCpu className="text-indigo-400" />
                    <span>Key Engineering Decisions</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.architecture.keyDecisions.map((decision, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        <FiCheckCircle size={15} className="text-indigo-400 mt-0.5 shrink-0" />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Production Impact */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                    Production Impact
                  </h4>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-mono">
                    {selectedProject.architecture.impact}
                  </p>
                </div>

                {/* Full Stack Pills */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                    Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 border border-white/10 text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/[0.08] flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white text-xs font-mono"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
