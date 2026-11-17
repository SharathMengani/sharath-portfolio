"use client";

import { motion } from "framer-motion";
import {
  FiCpu,
  FiActivity,
  FiLayers,
  FiZap,
  FiAward
} from "react-icons/fi";

const stats = [
  { value: "6+", label: "Years Exp", detail: "2020 – Present" },
  { value: "20+", label: "Prod Builds", detail: "FinTech, AI & SaaS" },
  { value: "60 FPS", label: "Render Engine", detail: "Canvas Depth Charts" },
  { value: "<50ms", label: "Socket Latency", detail: "Continuous Feeds" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#09090b] text-zinc-100 relative">
      <div className="max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 mb-2">
            Engineering Profile
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-zinc-50">
            About & Core Architecture
          </h2>
          <p className="text-zinc-400 mt-2 max-w-xl text-sm leading-relaxed">
            Architecting resilient, high-concurrency web applications across FinTech, decentralized trading, and real-time voice AI systems.
          </p>
        </div>

        {/* ── Asymmetrical Bento Grid (gap-4) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Bento Card 1: Executive Narrative (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 p-8 surface-card rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 mb-5">
                <FiCpu className="text-indigo-400" />
                <span>Senior Frontend & Reactive Systems</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mb-3 tracking-tight">
                6+ Years Engineering Scalable, Low-Latency Web Systems
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                I am <span className="text-zinc-100 font-medium">Sharath Chandra Mengani</span>, a Senior Frontend Developer with 6+ years of experience (2020–Present) engineering high-performance FinTech, Crypto, AI, and SaaS applications.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Specialized in modern reactive architecture using <span className="text-zinc-200">React.js, Next.js (App Router, SSR/SSG), Angular, and TypeScript</span>, with proven expertise in low-latency CEX/DEX trading terminals with real-time order books, enterprise multi-tenant AI conversational & voice agent dashboards, WebSocket streaming, state management (<span className="text-zinc-200">Redux, Zustand, NgRx</span>), and measurable runtime performance optimization (60 FPS rendering, bundle tree-shaking, list virtualization). Expanding into full-stack workflows (<span className="text-zinc-200">Node.js, Express, PostgreSQL, CI/CD</span>).
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-2">
                <FiAward className="text-zinc-400" />
                <span>B.Tech in Mechanical Engineering — CMR Technical Campus, JNTUH (2018)</span>
              </span>
              <span className="text-zinc-500">Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Monospace Metrics (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="p-8 surface-card rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 mb-5">
                <FiActivity className="text-emerald-400" />
                <span>Production Metrics</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/[0.04]">
                    <div className="text-2xl font-mono font-bold text-zinc-100 tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-xs font-mono text-zinc-300 mt-1 font-medium">
                      {s.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">
                      {s.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-white/[0.06] text-xs text-zinc-500 font-mono">
              Tested on live trading volatility and high socket concurrency.
            </div>
          </motion.div>

          {/* Bento Card 3: CEX & DEX Trading Terminals */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-6 surface-card rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 mb-4">
                <FiZap size={18} className="text-amber-400" />
              </div>
              <h4 className="text-base font-bold text-zinc-100 mb-2">
                CEX & DEX Trading Terminals
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Engineered high-frequency order book viewers, continuous sub-100ms WebSocket tickers, depth-of-market visuals, and TradingView charting without UI thread bottlenecks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-zinc-500">
              React.js • WebSockets • Redux • Canvas
            </div>
          </motion.div>

          {/* Bento Card 4: AI Conversational & Voice Agents */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="p-6 surface-card rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 mb-4">
                <FiLayers size={18} className="text-indigo-400" />
              </div>
              <h4 className="text-base font-bold text-zinc-100 mb-2">
                Conversational Voice AI
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Architected bidirectional audio streaming consoles with STT/TTS models, live telemetry waveforms, autonomous agent routing, and human-agent handoff queues.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-zinc-500">
              Next.js • WebSockets • STT/TTS • Audio Worklets
            </div>
          </motion.div>

          {/* Bento Card 5: Embeddable Widgets & Full-Stack Extensions */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-6 surface-card rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 mb-4">
                <FiCpu size={18} className="text-emerald-400" />
              </div>
              <h4 className="text-base font-bold text-zinc-100 mb-2">
                Multi-Tenant Architecture
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Built isolated Super Admin consoles, zero-style-leak embeddable chat widgets, and automated GitHub Actions CI/CD workflows alongside Node.js and PostgreSQL.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-zinc-500">
              Next.js App Router • Node.js • PostgreSQL • CI/CD
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
