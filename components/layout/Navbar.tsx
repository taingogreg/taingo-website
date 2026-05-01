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
          ? "bg-paper/95 backdrop-blur-md shadow-[0_10px_40px_-12px_rgba(10,22,40,0.2)] border-b border-midnight/12"
          : "bg-paper/98 backdrop-blur-sm shadow-[0_2px_16px_-4px_rgba(10,22,40,0.1)] border-b border-midnight/8"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[4.75rem] flex items-center justify-between">
        {/* Logo wordmark */}
        <Link
          href="/"
          className="font-display font-semibold text-midnight shrink-0 select-none text-[2rem] sm:text-[2.125rem] md:text-[2.35rem] tracking-[-0.02em] leading-none hover:opacity-90 transition-opacity"
        >
          T
          <span className="italic font-normal text-copper -ml-[0.12em]">
            ai
          </span>
          ngo
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-9 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-semibold text-midnight tracking-tight hover:text-copper transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="bg-copper hover:bg-copper-light text-paper text-[15px] font-semibold px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-150 hover:-translate-y-px"
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
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-t border-bone px-4 pb-6 pt-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-3 py-3.5 rounded-lg text-base font-semibold text-midnight hover:text-copper hover:bg-bone transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-bone mt-3">
            <Link
              href="/contact"
              className="block text-center bg-copper hover:bg-copper-light text-paper px-4 py-3.5 rounded-xl text-base font-semibold shadow-sm transition-colors"
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
