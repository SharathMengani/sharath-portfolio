export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-5xl font-black mb-6">About Me</h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            I’m Sharath Chandra Mengani, a Frontend Developer from Hyderabad, India, specialized in building high-performance crypto exchanges, trading dashboards, and fintech applications.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg mt-6">
            My expertise includes CEX & DEX exchanges, real-time trading interfaces, WebSocket integrations, performance optimization, reusable architecture, and modern UI/UX development.
          </p>
        </div>

        <div className="glass rounded-3xl p-10">
          <div className="grid grid-cols-2 gap-6">
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
      </div>
    </section>
  );
}