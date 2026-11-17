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
      className="relative bg-[#09090b] text-zinc-100 overflow-hidden border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto relative z-10 py-12 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* logo */}
          <a href="#" className="footer-logo flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs bg-zinc-900 text-zinc-100 border border-white/10 shadow-inner group-hover:border-indigo-500/40 transition-colors">
              SM
            </div>

            <span className="text-sm font-semibold tracking-tight text-zinc-200">
              Sharath Chandra Mengani <span className="text-zinc-500 font-normal">/ Senior Frontend Developer</span>
            </span>
          </a>

          {/* links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="footer-link text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* socials */}
          <div className="flex items-center gap-2.5">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
                className="footer-social w-8 h-8 rounded-lg flex items-center justify-center
                           bg-zinc-900 border border-white/10
                           text-zinc-400 hover:text-white
                           hover:border-white/20 transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* divider */}
        <div className="my-8 h-px w-full bg-white/[0.06]" />

        {/* bottom text */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p className="footer-copy">
            © {new Date().getFullYear()} Sharath Chandra Mengani • Senior Frontend Developer (6+ Years)
          </p>
          <p>
            B.Tech in Mechanical Engineering — CMR Technical Campus, JNTUH
          </p>
        </div>
      </div>
    </footer>
  );
}
