"use client";

import { motion } from "framer-motion";
import { BiLogoAngular, BiLogoReact } from "react-icons/bi";
import { RiNextjsFill, RiNextjsLine } from "react-icons/ri";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: any = {
  hidden: { y: 20 }, // ❌ removed opacity for LCP safety
  show: {
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const titleVariant: any = {
  hidden: { y: 40, skewY: 3 }, // ❌ no opacity
  show: {
    y: 0,
    skewY: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const iconFloat: any = {
  hidden: { scale: 0.9, y: 10 }, // ❌ no opacity
  show: {
    scale: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  return (
    <section className="relative pt-36 flex items-center justify-center bg-[#05060a] text-white overflow-hidden px-6">

      {/* 🔮 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-violet-500/10 blur-[160px] rounded-full animate-pulse" />
      </div>

      {/* 🧊 Content */}
      <motion.div
        variants={containerVariants}
        initial={false}   // ✅ FIX LCP
        animate="show"
        className="relative z-10 max-w-5xl w-full text-center"
      >

        {/* Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[BiLogoAngular, BiLogoReact, RiNextjsLine].map((Icon, i) => (
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

        {/* CTA */}
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
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.3 }}
        className="absolute left-20 top-1/2 -translate-y-1/2"
      >
        <AngularIcon className="w-80 h-80" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{
          opacity: 0.1,
          scale: 1,
          rotate: 360,
        }}
        transition={{
          duration: 25,   // 🔥 slow smooth rotation
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 -translate-x-1/2 top-40"
      >
        <ReactIcon className="w-120 h-120 text-blue-400" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 -translate-y-1/2 right-40"
      >
        <NextJsIcon className="w-100 h-100 text-white" />
      </motion.div>
    </section>
  );
}



const AngularIcon = ({ className }: { className: string }) => {
  return (
    <svg
      _ngcontent-ng-c3968259679=""
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 223 236"
      width={302}
      className={className}
    >
      <g _ngcontent-ng-c3968259679="" clipPath="url(#a)">
        <path
          _ngcontent-ng-c3968259679=""
          fill="url(#b)"
          d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
        />
        <path
          _ngcontent-ng-c3968259679=""
          fill="url(#c)"
          d="m222.077 39.192-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
        />
      </g>
      <defs _ngcontent-ng-c3968259679="">
        <linearGradient
          _ngcontent-ng-c3968259679=""
          id="b"
          x1="49.009"
          x2="225.829"
          y1="213.75"
          y2="129.722"
          gradientUnits="userSpaceOnUse"
        >
          <stop _ngcontent-ng-c3968259679="" stopColor="#E40035" />
          <stop _ngcontent-ng-c3968259679="" offset=".24" stopColor="#F60A48" />
          <stop _ngcontent-ng-c3968259679="" offset=".352" stopColor="#F20755" />
          <stop _ngcontent-ng-c3968259679="" offset=".494" stopColor="#DC087D" />
          <stop _ngcontent-ng-c3968259679="" offset=".745" stopColor="#9717E7" />
          <stop _ngcontent-ng-c3968259679="" offset={1} stopColor="#6C00F5" />
        </linearGradient>
        <linearGradient
          _ngcontent-ng-c3968259679=""
          id="c"
          x1="41.025"
          x2="156.741"
          y1="28.344"
          y2="160.344"
          gradientUnits="userSpaceOnUse"
        >
          <stop _ngcontent-ng-c3968259679="" stopColor="#FF31D9" />
          <stop
            _ngcontent-ng-c3968259679=""
            offset={1}
            stopColor="#FF5BE1"
            stopOpacity={0}
          />
        </linearGradient>
        <clipPath _ngcontent-ng-c3968259679="" id="a">
          <path _ngcontent-ng-c3968259679="" fill="#fff" d="M0 0h223v236H0z" />
        </clipPath>
      </defs>
    </svg>

  )
}

const ReactIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={0} cy={0} r={2} fill="currentColor" />
      <g stroke="currentColor" strokeWidth={1} fill="none">
        <ellipse rx={10} ry="4.5" />
        <ellipse rx={10} ry="4.5" transform="rotate(60)" />
        <ellipse rx={10} ry="4.5" transform="rotate(120)" />
      </g>
    </svg>

  )
}

const NextJsIcon = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
    >
      <g transform="translate(.722 .64) scale(6.375)">
        <circle cx={40} cy={40} r={40} />
        <path
          d="M66.448 70.009L30.73 24H24v31.987h5.384v-25.15l32.838 42.427a40.116 40.116 0 004.226-3.255z"
          fill="url(#prefix___Linear1)"
          fillRule="nonzero"
        />
        <path fill="url(#prefix___Linear2)" d="M51.111 24h5.333v32h-5.333z" />
      </g>
      <defs>
        <linearGradient
          id="prefix___Linear1"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(51.103 -29.93 76.555) scale(25.1269)"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="prefix___Linear2"
          x1={0}
          y1={0}
          x2={1}
          y2={0}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90.218 14.934 38.787) scale(23.50017)"
        >
          <stop offset={0} stopColor="#     " />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>

  )
}