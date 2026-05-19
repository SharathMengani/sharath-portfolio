"use client";

import { motion } from "framer-motion";
import { BiLogoAngular, BiLogoReact } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp:any = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const titleVariant:any = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  show: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const iconFloat:any = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#05060a] text-white overflow-hidden px-6">

      {/* 🔮 Premium Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-violet-500/10 blur-[160px] rounded-full animate-pulse" />
      </div>

      {/* 🧊 Glass Card Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl w-full text-center 
                    
                   shadow-2xl"
      >

        {/* Floating Tech Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[BiLogoAngular, BiLogoReact, RiNextjsFill].map((Icon, i) => (
            <motion.div
              key={i}
              variants={iconFloat}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 
                         shadow-lg hover:shadow-cyan-500/20 transition"
            >
              <Icon size={28} />
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="uppercase tracking-[0.4em] text-cyan-300 text-xs md:text-sm mb-6"
        >
          Frontend Developer • React • Next.js • Angular
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={titleVariant}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500">
            Scalable
          </span>
          <br />
          Crypto & Fintech Platforms
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-base md:text-lg mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          5+ years crafting high-performance trading systems, dashboards, and
          fintech applications using React, Next.js, Angular, WebSockets, and modern UI architecture.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeUp} className="mt-10">
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(34, 211, 238, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex px-10 py-4 rounded-full font-semibold 
                       bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 
                       text-white shadow-lg overflow-hidden"
          >
            View Projects

            {/* Shine Effect */}
            <span className="absolute inset-0 -translate-x-full hover:translate-x-full 
                             bg-gradient-to-r from-transparent via-white/20 to-transparent 
                             transition-transform duration-700" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}