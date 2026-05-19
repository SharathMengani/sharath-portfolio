"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { href: "#", label: "GitHub" },
  { href: "#", label: "Twitter" },
  { href: "#", label: "LinkedIn" },
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
    gsap.to(event.currentTarget, { y: -4, scale: 1.15, duration: 0.22, ease: "back.out(2)" });
  };

  const handleSocialLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, { y: 0, scale: 1, duration: 0.22, ease: "power2.out" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(footerRef);

      gsap
        .timeline({
          scrollTrigger: { trigger: footerRef.current, start: "top 92%" },
          defaults: { ease: "power3.out" },
        })
        .from(q(".footer-logo"), { y: 20, opacity: 0, duration: 0.6 })
        .from(q(".footer-link"), { y: 16, opacity: 0, duration: 0.4, stagger: 0.06 }, "-=0.3")
        .from(q(".footer-social"), { scale: 0, opacity: 0, duration: 0.4, stagger: 0.08, ease: "back.out(2)" }, "-=0.2")
        .from(q(".footer-copy"), { y: 16, opacity: 0, duration: 0.4 }, "-=0.1");
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      {/* subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.4), transparent)" }}
      />

      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* logo */}
          <a href="#" className="footer-logo flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-black"
              style={{ background: "linear-gradient(135deg, #00e5ff, #7c3aed)" }}
            >
              P
            </div>
            <span className="text-base font-bold gradient-text">Portfolio</span>
          </a>

          {/* nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
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

          {/* social icons */}
          <div className="flex items-center gap-3">
            {socials.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="footer-social w-9 h-9 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                onMouseEnter={handleSocialEnter}
                onMouseLeave={handleSocialLeave}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* divider */}
        <div
          className="my-8 h-px w-full"
          style={{ background: "rgba(255,255,255,0.05)" }}
        />

        {/* bottom copy */}
        <p className="footer-copy text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Portfolio. Crafted with{" "}
          <span className="gradient-text font-semibold">Next.js</span>,{" "}
          <span className="gradient-text font-semibold">GSAP</span> &amp;{" "}
          <span className="gradient-text font-semibold">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
