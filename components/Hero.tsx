"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import {
  FiArrowRight,
  FiTerminal,
  FiActivity,
  FiCpu,
  FiRadio,
  FiCheck,
  FiCode
} from "react-icons/fi";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
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

const consoleTabs = [
  {
    id: "trading",
    name: "TradingTerminal.ts",
    icon: FiActivity,
    badge: "60 FPS • WEBSOCKET",
    code: `// Decoupled WebSocket streaming with Canvas Depth Virtualization
const socket = new WebSocketStream("wss://feed.coin.io/v2/orderbook");

socket.on("depth_delta", (payload) => {
  // Batch microsecond price updates to 16ms animation frames
  requestAnimationFrame(() => {
    orderBookBuffer.ingest(payload.bids, payload.asks);
    canvasRenderer.paintDepthCurve({ steadyFPS: 60, latencyMs: 14 });
  });
});`,
    telemetry: [
      { label: "Socket Pipeline", value: "CONNECTED (sub-18ms)", status: "active" },
      { label: "Order Book Ticker", value: "BTC/USDT $64,280.50 (+4.2%)", status: "active" },
      { label: "Render Engine", value: "Canvas2D @ 60 FPS", status: "active" },
    ]
  },
  {
    id: "voice",
    name: "ChatBucketVoice.tsx",
    icon: FiRadio,
    badge: "WEBRTC • STT/TTS",
    code: `// Multi-tenant real-time voice streaming with STT/TTS worklet
export function useVoiceTelemetry({ agentId, locale = "en-US" }) {
  const rtcChannel = useWebRTCAudioStream({
    codec: "opus/48000",
    sampleRate: 48000,
    onSpeechChunk: (buffer) => {
      telemetryWaveform.visualize(buffer);
      sttEngine.transcribeBidirectional(buffer);
    }
  });
}`,
    telemetry: [
      { label: "Audio Stream", value: "WebRTC 48kHz Stereo", status: "active" },
      { label: "STT/TTS Pipeline", value: "Bidirectional Stream Active", status: "active" },
      { label: "Client Widget", value: "IFrame SDK (Zero CSS Leak)", status: "active" },
    ]
  },
  {
    id: "settlement",
    name: "SettlementEngine.ts",
    icon: FiCpu,
    badge: "IDEMPOTENT STATE",
    code: `// Deterministic crypto settlement state machine
const settlementMachine = createSlice({
  name: "checkout",
  initialState: { status: "INITIATED", txHash: null },
  reducers: {
    confirmTransaction: (state, action) => {
      state.status = "VERIFIED_12_CONFIRMATIONS";
      state.txHash = action.payload.hash;
      receiptEngine.generateInstantDownload(action.payload);
    }
  }
});`,
    telemetry: [
      { label: "Multi-Chain Bridge", value: "TRC-20 & ERC-20 Validated", status: "active" },
      { label: "Tx State Machine", value: "12/12 Blocks Reconciled", status: "active" },
      { label: "Double-Spend Guard", value: "Idempotent Hash Lock", status: "active" },
    ]
  }
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(consoleTabs[0]);

  return (
    <section className="relative pt-36 pb-24 flex items-center justify-center bg-[#09090b] text-zinc-100 overflow-hidden px-6">

      {/* ── Background Layers: Ambient Spotlight & Masked Dot Matrix ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-indigo-500/15 via-purple-600/5 to-transparent blur-[140px] rounded-full animate-glow-breathe" />
        <div className="absolute top-1/3 right-[-15%] w-[500px] h-[500px] bg-indigo-600/5 blur-[160px] rounded-full" />
        <div className="absolute inset-0 bg-dot-pattern opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl w-full text-center"
      >
        {/* ── Status Kicker with Glowing Emerald Dot ── */}
        <motion.div variants={fadeUp} className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs font-mono shadow-sm">
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
            5+ Years of High-Scale Systems
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

        {/* ── High-Craft Interactive Engineering Console Mockup ── */}
        <motion.div
          variants={fadeUp}
          className="mb-14 surface-card rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl text-left"
        >
          {/* Console Header Bar */}
          <div className="bg-[#0c0c0f] px-4 py-3 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-3 select-none">

            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-[11px] font-mono text-zinc-500 ml-2 hidden sm:inline">
                sharath-systems ~ reactive-engine — 80x24
              </span>
            </div>

            {/* Interactive Tabs */}
            <div className="flex items-center gap-1.5">
              {consoleTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab.id === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${isActive
                      ? "bg-zinc-800 text-zinc-100 border border-white/10 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
                      }`}
                  >
                    <TabIcon size={12} className={isActive ? "text-indigo-400" : ""} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Console Content Area (Code + Real-Time Telemetry Bar) */}
          <div className="p-5 bg-[#09090b]/90 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Code Block */}
            <div className="lg:col-span-8 overflow-x-auto">
              <pre className="font-mono text-xs text-zinc-300 leading-relaxed font-normal">
                <code>{activeTab.code}</code>
              </pre>
            </div>

            {/* Live Telemetry Sidebar */}
            <div className="lg:col-span-4 space-y-3 pt-2 lg:pt-0 lg:border-l lg:border-white/[0.08] lg:pl-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                  System Telemetry
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                  {activeTab.badge}
                </span>
              </div>

              {activeTab.telemetry.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-zinc-900/60 border border-white/[0.04]">
                  <div className="text-[10px] font-mono text-zinc-500">
                    {item.label}
                  </div>
                  <div className="text-xs font-mono text-zinc-200 font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
