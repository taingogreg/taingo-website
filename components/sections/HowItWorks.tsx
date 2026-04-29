import { PhoneIncoming, Bot, CalendarCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    icon: PhoneIncoming,
    title: "A Customer Calls",
    description:
      "A customer calls your business—during the day or after hours. Every call is answered promptly, without going to voicemail.",
  },
  {
    number: "02",
    icon: Bot,
    title: "Taingo Handles the Call",
    description:
      "Your AI receptionist answers questions, captures information, books appointments, or transfers the call based on your preferences.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Job Booked. You're Notified.",
    description:
      "The appointment is confirmed, synced to your calendar, and logged in your CRM. You get a summary alert — and your tech shows up informed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="Up and Running in 3 Simple Steps"
          subtitle="No complicated setup. We customize your AI receptionist to your business and have you live in days—not weeks."
        />

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-bone z-0"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-bone rounded-2xl border-2 border-bone flex items-center justify-center mb-5">
                  <Icon className="w-9 h-9 text-copper" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-midnight/40 mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-midnight mb-3">{step.title}</h3>
                <p className="text-midnight/65 leading-relaxed text-sm max-w-xs">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="md:hidden mt-6 text-bone">
                    <ArrowRight className="w-6 h-6 mx-auto rotate-90 text-midnight/20" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats strip */}
        <div className="mt-16 bg-cream rounded-2xl p-8 border border-bone">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-bone gap-6 md:gap-0">
            {[
              { label: "Go-Live Time", value: "Fast Setup", sub: "From signup to first call answered" },
              { label: "Training Required", value: "Zero", sub: "AI learns your business from your intake" },
              { label: "Contracts", value: "Month-to-month", sub: "Cancel anytime, no lock-in" },
            ].map((item) => (
              <div key={item.label} className="text-center md:px-8">
                <p className="text-2xl font-bold text-midnight">{item.value}</p>
                <p className="text-sm font-semibold text-copper mt-1">{item.label}</p>
                <p className="text-xs text-midnight/50 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo strip */}
        <div className="mt-10 rounded-2xl overflow-hidden relative h-72 md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?w=1400&q=80&auto=format&fit=crop"
            alt="Service technicians working on rooftop equipment while Taingo handles incoming calls"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/80 via-midnight/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-10 max-w-lg">
              <p className="text-paper/60 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                The Result
              </p>
              <p className="text-paper text-2xl md:text-3xl font-bold leading-snug">
                Your techs stay on the job.{" "}
                <span className="text-sun">Taingo handles every call.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
