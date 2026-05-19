const projects = [
  {
    title: "CEX Crypto Exchange",
    description:
      "Built a real-time centralized crypto exchange with trading UI, order book, charts, live trades, and WebSocket integrations using Angular and Next.js.",
  },
  {
    title: "DEX Trading Platform",
    description:
      "Developed a decentralized exchange frontend using Next.js App Router with optimized rendering and modular reusable architecture.",
  },
  {
    title: "Crypto Payment Application",
    description:
      "Built a crypto payments and QR transaction platform using React.js, Redux, Tailwind CSS, and Framer Motion animations.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-[#05060a] text-white relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Portfolio
          </p>

          <h2 className="text-5xl font-black">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of high-performance fintech and crypto applications built
            with modern frontend architectures.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
            >
              {/* inner card */}
              <div
                className="h-full rounded-3xl p-8 bg-white/5 backdrop-blur-xl
                           border border-white/10
                           transition duration-300
                           group-hover:-translate-y-2 group-hover:border-cyan-500/30"
              >
                {/* top glow block */}
                <div className="h-44 rounded-2xl mb-6 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,#22d3ee,transparent_60%)]" />
                  <p className="text-[clamp(36px,12vw,75px)] text-center font-bold text-cyan-400 flex items-center justify-center w-full h-full uppercase">{project.title.split(' ')[0]}</p>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* subtle CTA hint */}
                <div className="mt-6 text-cyan-400 text-sm opacity-0 group-hover:opacity-100 transition">
                  View details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}