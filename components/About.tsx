export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-[#05060a] text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        
        {/* Left content */}
        <div>
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
            About Me
          </p>

          <h2 className="text-5xl font-black mb-6 leading-tight">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              High-Performance
            </span>{" "}
            Fintech Experiences
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            I’m Sharath Chandra Mengani, a Frontend Developer from Hyderabad, India,
            specialized in building high-performance crypto exchanges, trading dashboards,
            and fintech applications.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            My expertise includes CEX & DEX exchanges, real-time trading interfaces,
            WebSocket integrations, performance optimization, reusable architecture,
            and modern UI/UX development.
          </p>
        </div>

        {/* Right stats card */}
        <div className="relative">
          <div
            className="rounded-3xl p-10 border border-white/10 
                       bg-white/5 backdrop-blur-xl shadow-2xl
                       hover:border-cyan-500/30 transition"
          >
            <div className="grid grid-cols-2 gap-8">
              
              <div>
                <h3 className="text-4xl font-black text-cyan-400">3+</h3>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">20+</h3>
                <p className="text-gray-400 mt-2">Projects Built</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">10+</h3>
                <p className="text-gray-400 mt-2">Technologies</p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-cyan-400">100%</h3>
                <p className="text-gray-400 mt-2">Responsive</p>
              </div>
            </div>
          </div>

          {/* glow behind card */}
          <div className="absolute -inset-4 bg-cyan-500/5 blur-3xl rounded-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}