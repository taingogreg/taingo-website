import Link from "next/link";
import { PhoneCall, CalendarCheck, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-paper pt-[4.75rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main hero area */}
        <div className="pt-20 pb-16 lg:pt-28 lg:pb-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Status pill */}
            <div className="max-w-full overflow-x-auto overflow-y-visible [scrollbar-width:thin] mb-8">
              <div
                className="inline-flex items-center gap-2.5 bg-bone border border-midnight/10 text-midnight px-4 py-2.5 sm:px-5 rounded-full font-bold tracking-tight sm:tracking-wide shadow-sm whitespace-nowrap"
                style={{ fontSize: "clamp(12px, 3.35vw, 1.125rem)" }}
              >
                <span
                  className="w-3 h-3 rounded-full bg-copper shrink-0 ring-2 ring-copper/25"
                  aria-hidden="true"
                />
                AI Receptionists for Home Service Businesses
              </div>
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-[0.92] tracking-[-0.04em] mb-6 [font-family:var(--font-poppins),system-ui,sans-serif]"
              style={{ fontSize: "clamp(64px, 9vw, 116px)" }}
            >
              <span className="whitespace-nowrap block">We answer.</span>
              <span className="whitespace-nowrap block text-copper italic">
                You grow.
              </span>
            </h1>

            {/* Sub */}
            <p className="max-w-xl mt-3 mb-8 text-xl md:text-[1.35rem] font-semibold text-midnight leading-snug tracking-tight">
              More calls answered. More jobs booked.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 mb-12 max-w-xl">
              <Link
                href="/contact"
                className="bg-copper hover:bg-copper-light text-paper font-semibold px-6 py-3.5 rounded-xl text-base transition-all duration-150 hover:-translate-y-px hover:shadow-lg w-fit"
              >
                Book a demo
              </Link>
              <div className="flex flex-col gap-2 items-start pt-1">
                <p className="text-sm md:text-[15px] font-medium text-midnight/80 leading-snug max-w-md">
                  Call to try it yourself—no signup required
                </p>
                <a
                  href="tel:+14013985656"
                  className="border-2 border-midnight/20 hover:border-copper hover:text-copper text-midnight font-semibold px-6 py-3.5 rounded-xl text-base transition-all duration-150 inline-flex items-center justify-center w-fit"
                  aria-label="Call the Taingo demo receptionist"
                >
                  Try a Live Call →
                </a>
              </div>
            </div>

            {/* Trust proof */}
            <div className="flex flex-col gap-3 text-[15px] md:text-base font-semibold text-midnight/85 max-w-xl">
              <span className="flex items-center gap-2.5">
                <Clock size={18} className="text-copper shrink-0" />
                Answers in under 2 seconds
              </span>
              <span className="flex items-center gap-2.5">
                <PhoneCall size={18} className="text-copper shrink-0" />
                24/7, including holidays
              </span>
              <span className="flex items-center gap-2.5">
                <CalendarCheck size={18} className="text-copper shrink-0" />
                Books directly to your calendar
              </span>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              {/* Phone conversation mockup */}
              <div className="bg-midnight rounded-2xl p-6 shadow-[0_22px_48px_rgba(10,22,40,0.18)]">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-steel">
                  <div className="w-9 h-9 rounded-full bg-steel flex items-center justify-center border border-paper/15">
                    <PhoneCall size={16} className="text-sun" />
                  </div>
                  <div>
                    <p className="text-paper text-base font-semibold">
                      Taingo AI Receptionist
                    </p>
                    <p className="text-sun text-xs font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sun inline-block" />
                      Demo Call
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 mb-5">
                  <div className="flex justify-start">
                    <div className="bg-steel rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                      <p className="text-paper/90 text-sm leading-snug">
                        Hi! Thanks for calling Big City Plumbing & Heating. How can
                        I help you today?
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-paper/12 border border-paper/25 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                      <p className="text-paper/90 text-sm leading-snug">
                        My AC stopped working. It's 95 degrees outside!
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-steel rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%]">
                      <p className="text-paper/90 text-sm leading-snug">
                        I&apos;m so sorry to hear that! I can help schedule a
                        technician—what&apos;s your address?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-steel flex items-center justify-center border border-paper/15 shrink-0">
                    <span className="text-[8px] text-paper font-bold">T</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-steel animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 rounded-full bg-steel animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 rounded-full bg-steel animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span className="text-paper/70 text-xs font-semibold tracking-wide">
                    Scheduling your appointment…
                  </span>
                </div>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-midnight rounded-xl p-4 shadow-md">
                  <p className="text-paper/82 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-1">
                    Call coverage
                  </p>
                  <p className="text-sun text-3xl font-extrabold tracking-tight leading-none mb-0.5">
                    24/7
                  </p>
                  <p className="text-paper/85 text-[13px] sm:text-sm leading-snug">
                    daytime, after hours, and weekends
                  </p>
                </div>
                <div className="bg-midnight rounded-xl p-4 shadow-md">
                  <p className="text-paper/82 text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-1">
                    Calls answered
                  </p>
                  <p className="text-sun text-3xl font-extrabold tracking-tight leading-none mb-0.5">
                    100%
                  </p>
                  <p className="text-paper/85 text-[13px] sm:text-sm leading-snug">
                    even after hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
