export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-8">Let’s Work Together</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Interested in building scalable crypto, fintech, or trading platforms together?
        </p>

        <form className="mt-14 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full glass rounded-2xl px-6 py-4 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full glass rounded-2xl px-6 py-4 outline-none"
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="w-full glass rounded-2xl px-6 py-4 outline-none"
          />

          <button className="px-8 py-4 rounded-full bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
            Contact Me
          </button>
        </form>
      </div>
    </section>
  );
}