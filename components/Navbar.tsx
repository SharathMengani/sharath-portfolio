"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavLinkEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, { y: -2, duration: 0.22, ease: "power2.out" });
  };

  const handleNavLinkLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, { y: 0, duration: 0.22, ease: "power2.out" });
  };

  const handleCtaEnter = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, { scale: 1.07, duration: 0.25, ease: "back.out(2)" });
  };

  const handleCtaLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, { scale: 1, duration: 0.25, ease: "power2.out" });
  };

  /* ── scroll-aware style ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── entrance animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(navRef);

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(navRef.current, { y: -84, opacity: 0, duration: 0.9 })
        .from(q(".nav-logo"), { x: -28, opacity: 0, duration: 0.65 }, "-=0.45")
        .from(q(".nav-link"), { y: -18, opacity: 0, duration: 0.55, stagger: 0.08 }, "-=0.35")
        .from(q(".nav-cta"), { x: 24, opacity: 0, duration: 0.55 }, "-=0.35");
    }, navRef);

    return () => ctx.revert();
  }, []);

  /* ── mobile drawer animation ── */
  useEffect(() => {
    if (!mobileRef.current) return;
    if (open) {
      gsap.fromTo(
        mobileRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.38, ease: "power3.out" }
      );
      gsap.from(mobileRef.current.querySelectorAll(".mobile-link"), {
        x: -20, opacity: 0, stagger: 0.07, duration: 0.3, ease: "power2.out", delay: 0.1,
      });
    } else {
      gsap.to(mobileRef.current, {
        height: 0, opacity: 0, duration: 0.28, ease: "power2.in",
      });
    }
  }, [open]);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(9, 9, 11, 0.88)"
          : "rgba(9, 9, 11, 0.60)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(255, 255, 255, 0.04)",
        boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {/* ── desktop bar ── */}
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* logo */}
        <a href="#" className="nav-logo flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono font-bold text-xs bg-zinc-900 text-zinc-100 border border-white/10 shadow-inner group-hover:border-indigo-500/40 transition-colors">
            SM
          </div>
          <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
            Sharath Chandra <span className="text-zinc-500 font-normal">/ Senior Frontend</span>
          </span>
        </a>

        {/* desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
              onMouseEnter={handleNavLinkEnter}
              onMouseLeave={handleNavLinkLeave}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* desktop CTA */}
        <a
          href="#contact"
          className="nav-cta hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-950 hover:bg-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] transition-all hover:scale-[1.02]"
          onMouseEnter={handleCtaEnter}
          onMouseLeave={handleCtaLeave}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
          Get In Touch
        </a>

        {/* mobile toggle */}
        <button
          className="md:hidden text-zinc-300 p-2 rounded-lg bg-zinc-900 border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* ── mobile drawer ── */}
      <div
        ref={mobileRef}
        className="md:hidden overflow-hidden bg-[#09090b]/95 border-b border-white/10"
        style={{ height: 0, opacity: 0 }}
      >
        <div
          className="px-6 py-4 flex flex-col gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link nav-link text-sm py-1.5 text-zinc-400 hover:text-zinc-100 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mobile-link inline-flex justify-center px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-950 mt-2"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}
