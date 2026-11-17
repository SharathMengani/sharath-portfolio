export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#08070d] text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

        {/* Left content */}
        <div>
          <p className="text-violet-400 uppercase tracking-[0.3em] mb-4 text-sm font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">
              High-Performance
            </span>{" "}
            FinTech, Crypto & AI
          </h2>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            I’m <span className="text-white font-medium">Sharath Chandra Mengani</span>, a Senior Frontend Developer with 5+ years of experience engineering high-performance FinTech, Crypto, AI, and SaaS applications.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-4">
            Specialized in modern reactive architecture using <span className="text-gray-200">React.js</span>, <span className="text-gray-200">Next.js (App Router, SSR)</span>, <span className="text-gray-200">Angular</span>, and <span className="text-gray-200">TypeScript</span>. Proven expertise in building low-latency CEX/DEX trading terminals with real-time order books, enterprise multi-tenant AI conversational & voice agent dashboards, WebSocket streaming, state management (<span className="text-gray-200">Redux, Zustand, NgRx</span>), and measurable runtime performance optimization.
          </p>

          {/* Core competencies */}
          <div className="mt-8 grid sm:grid-cols-2 gap-3.5">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-violet-950/20 transition duration-300">
              <h4 className="text-violet-400 font-semibold text-sm mb-1">⚡ CEX & DEX Trading Terminals</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Continuous WebSocket streaming, real-time order books, and 60 FPS canvas market depth charts.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-violet-950/20 transition duration-300">
              <h4 className="text-violet-400 font-semibold text-sm mb-1">🎙️ AI Conversational & Voice Agents</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Multilingual voice experiences, live audio transcript streaming, waveform telemetry, and bidirectional STT/TTS.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-violet-950/20 transition duration-300">
              <h4 className="text-violet-400 font-semibold text-sm mb-1">🧩 Embeddable Widget Architecture</h4>
              <p className="text-gray-400 text-xs leading-relaxed">Zero-dependency, multi-tenant embeddable chat SDKs with dynamic brand theming and cross-subdomain persistence.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/40 hover:bg-violet-950/20 transition duration-300">
              <h4 className="text-violet-400 font-semibold text-sm mb-1">🚀 Modernization & Performance</h4>
              <p className="text-gray-400 text-xs leading-relaxed">List virtualization, bundle tree-shaking, and large-scale AngularJS migrations to modern Angular and Next.js.</p>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-xs text-gray-300 bg-violet-950/30 px-4 py-2 rounded-full border border-violet-500/20">
            <span>🎓 B.Tech in Mechanical Engineering • CMR Technical Campus, JNTUH (Graduated: 2018)</span>
          </div>
        </div>

        {/* Right stats card */}
        <div className="relative">
          <div
            className="rounded-3xl p-10 border border-white/10 
                       bg-white/5 backdrop-blur-xl shadow-2xl
                       hover:border-violet-500/40 transition duration-300"
          >
            <div className="grid grid-cols-2 gap-8">

              <div>
                <h3 className="text-4xl font-black text-violet-400">5+</h3>
                <p className="text-gray-400 mt-2 font-medium">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-violet-400">20+</h3>
                <p className="text-gray-400 mt-2 font-medium">Projects Built</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-violet-400">60 FPS</h3>
                <p className="text-gray-400 mt-2 font-medium">Canvas Depth Charts</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-violet-400">&lt;50ms</h3>
                <p className="text-gray-400 mt-2 font-medium">WebSocket Latency</p>
              </div>
            </div>
          </div>

          {/* glow behind card */}
          <div className="absolute -inset-4 bg-violet-600/15 blur-3xl rounded-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}