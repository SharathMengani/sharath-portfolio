"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* ── 1. Film Grain / Subtle Noise Overlay (Linear & Vercel Style) ── */}
      <div 
        className="absolute inset-0 opacity-[0.03] contrast-150 brightness-150 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── 2. Interactive Cursor Spotlight (Illuminates surfaces on mouse move) ── */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-out pointer-events-none"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 70%)",
        }}
      />

      {/* ── 3. Subtle Ambient Light Cones & Floating Depth Orbs ── */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-indigo-600/5 via-violet-600/5 to-transparent blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-emerald-600/5 via-teal-600/5 to-transparent blur-[180px] rounded-full pointer-events-none" />
    </div>
  );
}
