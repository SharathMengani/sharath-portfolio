const skills = [
  "React.js",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript ES6+",
  "GSAP",
  "Tailwind CSS",
  "Redux",
  "NgRx",
  "Zustand",
  "WebSockets",
  "Framer Motion",
  "Node.js",
  "GitHub",
  "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-center mb-16">Skills</h2>

        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-8 py-4 rounded-full glass hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}