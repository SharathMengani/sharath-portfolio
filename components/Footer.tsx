"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { href: "#", label: "GitHub" , icon : BsGithub },
  { href: "#", label: "Twitter", icon: BsTwitter },
  { href: "#", label: "LinkedIn", icon: BsLinkedin },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const handleSocialEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, {
      y: -4,
      scale: 1.15,
      duration: 0.22,
      ease: "back.out(2)",
    });
  };

  const handleSocialLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.22,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(footerRef);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
          defaults: { ease: "power3.out" },
        })
        .from(q(".footer-logo"), { y: 20, opacity: 0, duration: 0.6 })
        .from(
          q(".footer-link"),
          { y: 16, opacity: 0, duration: 0.4, stagger: 0.06 },
          "-=0.3"
        )
        .from(
          q(".footer-social"),
          {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "back.out(2)",
          },
          "-=0.2"
        )
        .from(q(".footer-copy"), { y: 16, opacity: 0, duration: 0.4 }, "-=0.1");
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#05060a] text-white overflow-hidden border-t border-white/10"
    >
      {/* glow top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 py-14 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* logo */}
          <a href="#" className="footer-logo flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-black bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/20">
              P
            </div>

            <span className="text-lg font-bold tracking-wide">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Portfolio
              </span>
            </span>
          </a>

          {/* links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
                className="footer-social w-10 h-10 rounded-xl flex items-center justify-center
                           bg-white/5 border border-white/10
                           text-gray-400 hover:text-cyan-400
                           hover:border-cyan-500/30
                           backdrop-blur-xl transition"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="my-10 h-px w-full bg-white/5" />

        {/* bottom text */}
        <p className="footer-copy text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Portfolio. Built with{" "}
          <span className="text-cyan-400 font-medium">Next.js</span>,{" "}
          <span className="text-cyan-400 font-medium">GSAP</span> &{" "}
          <span className="text-cyan-400 font-medium">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}