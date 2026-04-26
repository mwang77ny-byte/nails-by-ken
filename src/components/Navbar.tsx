"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "#FAFAF8",
        borderBottom: "1px solid rgba(201,169,110,0.2)",
        boxShadow: scrolled ? "0 2px 16px rgba(61,10,10,0.08)" : "0 1px 0 rgba(201,169,110,0.15)",
      }}
    >
      <div className="container" style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" className="font-display text-xl" style={{ color: "var(--ink)" }}>
          Nails <em style={{ color: "var(--rose)" }}>by Ken</em>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
              style={{ color: pathname === l.href ? "var(--rose)" : "var(--ink-muted)" }}
            >
              {l.label}
              {pathname === l.href && (
                <motion.span layoutId="nav-bar" className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: "var(--gold)" }} />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+15105294357" className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--ink-muted)" }}>
            <Phone size={13} style={{ color: "var(--rose)" }} /> (510) 529-4357
          </a>
          <Link href="/contact" className="btn btn-rose" style={{ padding: "0.6rem 1.2rem", fontSize: "0.72rem" }}>
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 cursor-pointer" style={{ color: "var(--ink)" }} aria-label="Menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}
            className="overflow-hidden md:hidden"
            style={{ background: "rgba(250,250,248,0.97)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201,169,110,0.2)" }}
          >
            <div className="container py-5 flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-semibold tracking-wide uppercase border-b"
                  style={{ color: pathname === l.href ? "var(--rose)" : "var(--ink)", borderColor: "rgba(201,169,110,0.15)" }}>
                  {l.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a href="tel:+15105294357" className="btn btn-outline justify-center text-center">
                  <Phone size={13} /> (510) 529-4357
                </a>
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn btn-primary justify-center text-center">
                  Book an Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
