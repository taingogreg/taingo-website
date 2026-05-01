import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-14 md:py-20 bg-midnight relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 bg-copper rounded-full opacity-[0.07] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sun rounded-full opacity-[0.07] -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-paper/10 text-paper/75 text-xs font-bold tracking-wide px-4 py-2 rounded-full mb-4">
          <PhoneCall className="w-4 h-4" />
          Every missed call is a missed job
        </div>

        <h2
          className="font-black text-paper leading-tight mb-4 [font-family:var(--font-poppins),system-ui,sans-serif]"
          style={{ fontSize: "clamp(32px, 6vw, 64px)", letterSpacing: "-0.03em" }}
        >
          Stop Losing Business to{" "}
          <span className="text-copper-light">Unanswered Calls</span>
        </h2>

        <p className="text-paper/65 text-lg leading-relaxed mb-7 max-w-2xl mx-auto">
          Discover how an AI receptionist can answer every call, book appointments, and
          capture more leads for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-copper hover:bg-copper-light text-paper font-semibold rounded-xl transition-all duration-150 hover:-translate-y-px shadow-lg text-base"
          >
            Request a Free Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-paper/25 hover:border-paper/60 text-paper font-semibold rounded-xl transition-colors text-base"
          >
            Explore Features
          </Link>
        </div>

        <p className="mt-5 text-paper/72 text-sm sm:text-base font-medium leading-snug max-w-xl mx-auto">
          No credit card required. Live demo in under 30 minutes.
        </p>
      </div>
    </section>
  );
}
