"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { href: "https://github.com/SharathMengani", label: "GitHub", icon: BsGithub },
  { href: "mailto:chanduvarma57@gmail.com", label: "Email", icon: FiMail },
  { href: "https://linkedin.com", label: "LinkedIn", icon: BsLinkedin },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
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
      className="relative bg-[#08070d] text-white overflow-hidden border-t border-white/10"
    >
      {/* glow top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* logo */}
          <a href="#" className="footer-logo flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-600 shadow-lg shadow-violet-500/20">
              SM
            </div>

            <span className="text-lg font-bold tracking-wide">
              Sharath{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300">
                Mengani
              </span>
            </span>
          </a>

          {/* links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link text-sm text-gray-400 hover:text-violet-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* socials */}
          <div className="flex items-center gap-4">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
                className="footer-social w-10 h-10 rounded-xl flex items-center justify-center
                           bg-white/5 border border-white/10
                           text-gray-400 hover:text-violet-400
                           hover:border-violet-500/30 hover:bg-violet-950/30
                           backdrop-blur-xl transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="my-10 h-px w-full bg-white/5" />

        {/* bottom text */}
        <p className="footer-copy text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-gray-300 font-medium">Sharath Chandra Mengani</span> • Senior Frontend Developer. Built with{" "}
          <span className="text-violet-400 font-medium">Next.js</span>,{" "}
          <span className="text-violet-400 font-medium">GSAP</span> &{" "}
          <span className="text-violet-400 font-medium">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
