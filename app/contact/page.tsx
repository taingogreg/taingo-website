import type { Metadata } from "next";
import { Mail, Phone, Clock, CheckCircle, MessageSquare } from "lucide-react";
import CalendlyWidget from "@/components/ui/CalendlyWidget";

export const metadata: Metadata = {
  title: "Contact & Request a Demo | Taingo AI Receptionist",
  description:
    "Schedule a free demo with Taingo's team. See how our AI voice receptionist works for your home service business in under 30 minutes.",
};

const whyDemo = [
  "Live walkthrough tailored to your industry",
  "See the AI answer calls in real time",
  "Get a custom pricing quote",
  "No obligation — zero pressure",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@taingo.ai",
    href: "mailto:hello@taingo.ai",
  },
  {
    icon: Clock,
    label: "",
    value: "Available for demos and support",
    href: null,
    note: "We respond quickly during business hours",
  },
  {
    icon: MessageSquare,
    label: "Response Time",
    value: "Within 1 business day",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(401) 400-0142",
    href: "tel:+14014000142",
    note: "If we miss your call, leave a message or request a demo\u2014we\u2019ll get back to you shortly.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bone pt-28 pb-12 border-b border-bone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center [container-type:inline-size]">
          <p className="text-base md:text-lg font-black uppercase tracking-[0.22em] text-copper mb-4">
            Get Started
          </p>
          <h1
            className="font-bold text-midnight mb-4 leading-tight [font-family:var(--font-poppins),system-ui,sans-serif] whitespace-nowrap"
            style={{
              fontSize: "clamp(14px, calc(100cqi / 20), 2.75rem)",
              letterSpacing: "-0.035em",
            }}
          >
            Request Your Free Demo
          </h1>
          <p className="text-lg text-midnight/65 max-w-xl mx-auto">
            See Taingo in action in under 30 minutes. Pick a time below and
            we&apos;ll give you a live, personalized demo of how Taingo would work
            for your specific business.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Info sidebar */}
            <div className="space-y-8">
              {/* Why demo */}
              <div className="bg-cream rounded-2xl p-6 border border-bone">
                <h2 className="font-bold text-midnight text-lg mb-4">
                  What to Expect
                </h2>
                <ul className="space-y-3">
                  {whyDemo.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-midnight/70">
                      <CheckCircle className="w-5 h-5 text-copper shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust note */}
              <div className="bg-midnight rounded-2xl p-6">
                <p className="font-bold text-paper text-lg mb-2">No Contracts. No Pressure.</p>
                <p className="text-paper/65 text-sm leading-relaxed">
                  Every demo is free with zero obligation. If Taingo isn&apos;t right
                  for you, we&apos;ll say so. We only want customers who get real value.
                </p>
              </div>
            </div>

            {/* Right: Calendly */}
            <div className="lg:col-span-2 bg-cream rounded-2xl border border-bone overflow-hidden shadow-sm">
              <div className="p-5 border-b border-bone bg-bone">
                <h2 className="font-bold text-midnight text-lg">
                  Choose a Time for Your Demo
                </h2>
                <p className="text-sm text-midnight/50 mt-1">
                  All times shown in your local timezone. Demos run approximately
                  30 minutes.
                </p>
              </div>
              <CalendlyWidget />
            </div>
          </div>

          {/* Secondary: direct contact below the demo scheduler */}
          <div className="mt-12 lg:mt-16 max-w-2xl mx-auto">
            <div className="bg-cream rounded-2xl p-6 border border-bone">
              <h2 className="font-bold text-midnight text-lg mb-1">Contact Us Directly</h2>
              <p className="text-sm text-midnight/50 mb-4">
                The fastest way to get started is to book a demo above — but you can
                also reach us here.
              </p>
              <ul className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-bone rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-copper" />
                      </div>
                      <div className="min-w-0 flex flex-col gap-0.5">
                        {item.label ? (
                          <p className="text-xs text-midnight/50 font-medium leading-snug">
                            {item.label}
                          </p>
                        ) : null}
                        <p className="text-sm font-semibold text-midnight leading-snug">
                          {item.value}
                        </p>
                        {"note" in item && item.note ? (
                          <p className="text-xs text-midnight/55 leading-snug max-w-md">
                            {item.note}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  );
                  return (
                    <li key={item.label || item.value}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:opacity-75 transition-opacity"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
