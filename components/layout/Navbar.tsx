"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-sm shadow-sm border-b border-bone"
          : "bg-paper border-b border-bone/60"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo wordmark */}
        <Link
          href="/"
          className="font-display font-semibold text-midnight shrink-0 select-none"
          style={{ fontSize: "28px", letterSpacing: "-0.005em", lineHeight: 1 }}
        >
          T
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 400,
              color: "#c7542b",
              marginLeft: "-0.12em",
            }}
          >
            ai
          </span>
          ngo
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-midnight/80 hover:text-midnight transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-copper hover:bg-copper-light text-paper text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-md"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-midnight hover:bg-bone transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-t border-bone px-4 pb-6 pt-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-3 py-3 rounded-lg text-sm font-medium text-midnight/80 hover:text-midnight hover:bg-bone transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-bone mt-3">
            <Link
              href="/contact"
              className="block text-center bg-copper hover:bg-copper-light text-paper px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book a demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
