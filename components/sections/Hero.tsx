import Link from "next/link";
import Image from "next/image";
import { PhoneCall, CalendarCheck, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-paper pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main hero area */}
        <div className="pt-20 pb-16 lg:pt-28 lg:pb-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 bg-sun/20 text-[#8a5a10] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide mb-8">
              <span className="w-2 h-2 rounded-full bg-sun shadow-[0_0_0_3px_rgba(255,184,74,0.35)]" />
              AI Receptionists for Home Services
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black leading-[0.92] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(64px, 9vw, 116px)" }}
            >
              <span className="whitespace-nowrap block">We answer.</span>
              <span className="whitespace-nowrap block text-copper italic">
                You grow.
              </span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-midnight/78 max-w-xl leading-relaxed mb-8">
              Taingo answers your phone 24/7, books jobs on your calendar, and
              sounds exactly like someone on your team. Built for HVAC, roofing,
              plumbing, and more.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/contact"
                className="bg-copper hover:bg-copper-light text-paper font-semibold px-6 py-3.5 rounded-xl text-base transition-all duration-150 hover:-translate-y-px hover:shadow-lg"
              >
                Start free trial
              </Link>
              <Link
                href="/contact"
                className="border-2 border-midnight/20 hover:border-copper hover:text-copper text-midnight font-semibold px-6 py-3.5 rounded-xl text-base transition-all duration-150"
              >
                Hear a demo call →
              </Link>
            </div>

            {/* Trust proof */}
            <div className="flex flex-wrap gap-6 text-sm text-midnight/60 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-copper" />
                Answers in under 2 seconds
              </span>
              <span className="flex items-center gap-1.5">
                <PhoneCall size={15} className="text-copper" />
                24/7, including holidays
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarCheck size={15} className="text-copper" />
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
                  <div className="w-9 h-9 rounded-full bg-copper/20 flex items-center justify-center">
                    <PhoneCall size={16} className="text-copper-light" />
                  </div>
                  <div>
                    <p className="text-paper text-sm font-semibold">
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
                    <div className="bg-copper/20 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
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
                  <div className="w-6 h-6 rounded-full bg-copper/20 flex items-center justify-center">
                    <span className="text-[8px] text-copper-light font-bold">T</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-steel animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 rounded-full bg-steel animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 rounded-full bg-steel animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span className="text-paper/40 text-xs">Scheduling your appointment…</span>
                </div>
              </div>

              {/* KPI cards */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-midnight rounded-xl p-4 shadow-md">
                  <p className="text-paper/50 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Call coverage
                  </p>
                  <p className="text-sun text-3xl font-extrabold tracking-tight leading-none mb-0.5">
                    24/7
                  </p>
                  <p className="text-paper/60 text-xs">
                    daytime, after hours, and weekends
                  </p>
                </div>
                <div className="bg-midnight rounded-xl p-4 shadow-md">
                  <p className="text-paper/50 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Calls answered
                  </p>
                  <p className="text-sun text-3xl font-extrabold tracking-tight leading-none mb-0.5">
                    100%
                  </p>
                  <p className="text-paper/60 text-xs">even after hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo strip */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?w=1600&q=80&auto=format&fit=crop"
          alt="Rooftop technician at work"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-midnight/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-paper text-center text-lg md:text-2xl font-bold tracking-wide max-w-2xl px-6">
            <span className="block">Your techs stay on the job.</span>
            <span className="block text-sun mt-1.5 md:mt-2">
              Taingo handles every call.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
