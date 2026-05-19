"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(heroRef);

      gsap
        .timeline({ defaults: { ease: "power3.out", duration: 0.9 } })
        .from(q(".hero-title"), { y: 80, opacity: 0, skewY: 8 })
        .from(q(".hero-subtitle"), { y: 40, opacity: 0 }, "-=0.55")
        .from(q(".hero-btn"), {
          y: 20,
          opacity: 0,
          scale: 0.9,
          duration: 0.65,
          ease: "back.out(1.8)",
        }, "-=0.45");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative px-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e9_0%,transparent_40%)]" />

      <div className="text-center relative z-10 max-w-4xl">
        <p className="hero-subtitle uppercase tracking-[0.3em] text-cyan-400 mb-6">
          Frontend Developer (React, Next.js, Angular)
        </p>

        <h1 className="hero-title text-5xl md:text-8xl font-black leading-tight">
          Building <span className="gradient-text">Scalable</span><br />Crypto & Fintech Platforms
        </h1>

        <p className="hero-subtitle text-gray-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
          5+ years of experience building scalable Fintech and crypto platforms using React.js, Next.js, Angular, WebSockets, and modern frontend technologies.
        </p>

        <a
          href="#projects"
          className="hero-btn inline-flex mt-10 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}