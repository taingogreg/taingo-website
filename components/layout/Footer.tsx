import Link from "next/link";
import { Mail } from "lucide-react";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Pricing", href: "/contact" },
      { label: "Request a Demo", href: "/contact" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "HVAC", href: "/industries#hvac" },
      { label: "Roofing", href: "/industries#roofing" },
      { label: "Plumbing", href: "/industries#plumbing" },
      { label: "Electrical", href: "/industries#electrical" },
      { label: "Garage Doors", href: "/industries#garage-doors" },
      { label: "Pest Control", href: "/industries#pest-control" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-paper">
      {/* Final CTA section */}
      <div className="border-b border-steel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2
            className="font-black text-paper leading-tight tracking-tight mb-5 [font-family:var(--font-poppins),system-ui,sans-serif]"
            style={{ fontSize: "clamp(36px, 6vw, 70px)", letterSpacing: "-0.03em" }}
          >
            Ready to stop missing calls?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-copper hover:bg-copper-light text-paper font-semibold text-base px-8 py-4 rounded-xl transition-all duration-150 hover:-translate-y-px hover:shadow-lg mb-6"
          >
            Get Started
          </Link>
          {/* "Do you Taingo?" — featured prominently */}
          <div>
            <p
              className="font-display italic text-sun font-normal"
              style={{ fontSize: "clamp(22px, 3.5vw, 36px)", letterSpacing: "-0.01em" }}
            >
              Do you Taingo?
            </p>
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block mb-4 font-display font-semibold text-paper select-none"
              style={{ fontSize: "28px", letterSpacing: "-0.005em", lineHeight: 1 }}
            >
              T
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#e07142",
                  marginLeft: "-0.12em",
                }}
              >
                ai
              </span>
              ngo
            </Link>
            <p className="text-paper/55 text-sm leading-relaxed mb-5">
              AI-powered receptionists built for home service businesses. Never
              miss a call. Book more jobs.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hello@taingo.ai"
                className="flex items-center gap-2 text-paper/55 hover:text-copper-light text-sm transition-colors"
              >
                <Mail size={14} />
                hello@taingo.ai
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <p className="text-paper/40 text-xs font-bold tracking-[0.2em] uppercase mb-3">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-paper/65 hover:text-paper text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-5 border-t border-steel flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-paper/35 text-xs">
            © {new Date().getFullYear()} Taingo. All rights reserved.
          </p>
          <p className="text-paper/35 text-xs">
            AI Receptionists for Home Service Businesses
          </p>
        </div>
      </div>
    </footer>
  );
}
