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
          ? "rgba(8, 7, 13, 0.92)"
          : "rgba(8, 7, 13, 0.65)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: scrolled
          ? "1px solid rgba(139, 92, 246, 0.20)"
          : "1px solid rgba(255, 255, 255, 0.05)",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6)" : "none",
      }}
    >
      {/* ── desktop bar ── */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* logo */}
        <a href="#" className="nav-logo flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 shadow-md shadow-violet-500/25">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-violet-400 transition-colors">
            Sharath<span className="text-violet-400">.</span>
          </span>
        </a>

        {/* desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium text-gray-300 hover:text-violet-400 transition-colors"
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
          className="nav-cta hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105 transition-all"
          onMouseEnter={handleCtaEnter}
          onMouseLeave={handleCtaLeave}
        >
          Hire Me ✦
        </a>

        {/* mobile toggle */}
        <button
          className="md:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* ── mobile drawer ── */}
      <div
        ref={mobileRef}
        className="md:hidden overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div
          className="px-6 pb-6 flex flex-col gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link nav-link text-base py-2 text-gray-300 hover:text-violet-400 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mobile-link inline-flex justify-center px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white mt-2 shadow-md shadow-violet-500/25"
          >
            Hire Me ✦
          </a>
        </div>
      </div>
    </header>
  );
}
