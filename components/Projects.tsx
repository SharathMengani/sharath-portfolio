const projects = [
  {
    title: "CEX Crypto Exchange",
    description: "Built a real-time centralized crypto exchange with trading UI, order book, charts, live trades, and WebSocket integrations using Angular and Next.js.",
  },
  {
    title: "DEX Trading Platform",
    description: "Developed a decentralized exchange frontend using Next.js App Router with optimized rendering and modular reusable architecture.",
  },
  {
    title: "Crypto Payment Application",
    description: "Built a crypto payments and QR transaction platform using React.js, Redux, Tailwind CSS, and Framer Motion animations.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-20">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
            >
              <div className="h-52 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-6" />

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}