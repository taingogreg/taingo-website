import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Calendar,
  ClipboardList,
  AlertTriangle,
  Globe,
  Database,
  Filter,
  CheckCircle,
  ArrowRight,
  Clock,
  BarChart3,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Features | Taingo AI Receptionist",
  description:
    "Explore every feature Taingo offers: 24/7 call answering, automated scheduling, bilingual support, CRM integration, lead qualification, and more.",
};

const featureDetails = [
  {
    icon: Phone,
    title: "24/7 Call Coverage & Lead Capture",
    tagline: "Never miss a call. Not one.",
    photo: "https://images.unsplash.com/photo-1621255457330-7ef4e88ec27f?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Professional taking a business call",
    description:
      "Taingo answers every inbound call within seconds — day or night, weekday or holiday. When customers can't reach you, they call a competitor. With Taingo, that never happens again. Every call is answered with a natural, professional greeting that represents your brand.",
    benefits: [
      "Instant answer on every call — no hold time, no voicemail",
      "After-hours and weekend coverage included",
      "Holiday and peak-season surge handling",
      "Caller ID capture for all missed attempts",
    ],
  },
  {
    icon: Calendar,
    title: "Automated Appointment Scheduling",
    tagline: "Bookings happen without you lifting a finger.",
    photo: "https://images.unsplash.com/photo-1758556549027-879615701c61?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Digital display showing appointments and schedule at a front desk",
    description:
      "Taingo syncs directly with your technician calendars and books appointments in real time. It checks availability, avoids double-booking, and even handles rescheduling and cancellations — all through a natural conversation with the caller.",
    benefits: [
      "Real-time calendar sync (Google, Outlook, ServiceTitan, Jobber, and more)",
      "Automatic confirmation and reminder messages",
      "Reschedule and cancellation handling",
      "Smart time-slot suggestions based on technician location",
    ],
  },
  {
    icon: ClipboardList,
    title: "Instant Customer Intake",
    tagline: "Your team arrives prepared. Every time.",
    photo: "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Plumber fixing a water heater on a service call",
    description:
      "Before a technician ever steps foot on-site, Taingo has collected everything they need. Name, address, equipment type, issue description, photos (via follow-up SMS link), and service history from your CRM — all gathered during the initial call.",
    benefits: [
      "Collects name, address, equipment brand and model",
      "Captures issue description and urgency",
      "Requests photos via SMS for complex diagnoses",
      "Pre-populates job records in your field service software",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Call Triage",
    tagline: "Handle crises calmly and efficiently.",
    photo: "https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?w=800&q=80&auto=format&fit=crop",
    photoAlt: "HVAC technician working urgently on equipment",
    description:
      "When a homeowner's furnace dies during a blizzard or a pipe bursts at midnight, Taingo identifies the emergency, provides immediate guidance, and escalates to your on-call team instantly. You define the escalation rules — Taingo executes them perfectly every time.",
    benefits: [
      "Intelligent urgency detection from caller language",
      "Immediate first-aid / troubleshooting guidance",
      "On-call technician escalation via SMS or phone",
      "Priority flagging in your dispatch system",
    ],
  },
  {
    icon: Globe,
    title: "Multilingual Communication",
    tagline: "Serve every customer in their language.",
    photo: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Electrician working on a panel installation",
    description:
      "Taingo supports 31 languages, including English and Spanish. It detects the caller's preferred language and switches seamlessly — providing the same quality intake and scheduling experience regardless of what language they speak. No multilingual hire required.",
    benefits: [
      "Automatic language detection on every call",
      "Full intake and scheduling",
      "Multilingual confirmation messages and reminders",
      "Expands your addressable market significantly",
    ],
  },
  {
    icon: Database,
    title: "CRM & Software Integration",
    tagline: "Your tools, smarter.",
    photo: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Laptop showing performance analytics dashboard",
    description:
      "Taingo doesn't operate in a silo. It connects to the platforms your business already uses and keeps everything in sync automatically. Every call, transcript, and customer record flows where it needs to go — no manual data entry required.",
    benefits: [
      "Native integrations: ServiceTitan, Housecall Pro, Jobber, Salesforce",
      "Full call transcripts stored in your CRM",
      "Automatic customer record creation and updates",
      "Webhook support for custom integrations",
    ],
  },
  {
    icon: Filter,
    title: "Intelligent Lead Qualification",
    tagline: "Only real opportunities reach your team.",
    photo: "https://images.unsplash.com/photo-1758518730250-9fde74eb4757?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Professional interview at a desk reviewing an application",
    description:
      "Not all calls are created equal. Taingo acts as a smart gatekeeper — screening callers based on budget, service type, urgency, geographic location, and other criteria you define. Your sales team spends time on qualified leads, not time-wasters.",
    benefits: [
      "Custom qualification criteria you control",
      "Budget and project scope screening",
      "Geographic service area filtering",
      "Spam and solicitor blocking",
    ],
  },
  {
    icon: BarChart3,
    title: "Call Analytics & Reporting",
    tagline: "Understand your customer demand like never before.",
    photo: "https://images.unsplash.com/photo-1686061594183-8c864f508b00?w=800&q=80&auto=format&fit=crop",
    photoAlt: "Analytics dashboard on a computer screen",
    description:
      "Taingo gives you a clear window into your call volume, peak hours, most common service requests, and conversion rates. Use this data to staff smarter, market better, and grow faster.",
    benefits: [
      "Daily and weekly call volume reports",
      "Peak hour and day-of-week analysis",
      "Top service types and issue categories",
      "Lead source tracking and conversion metrics",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bone pt-28 pb-16 border-b border-bone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-copper mb-4">
            Platform Features
          </p>
          <h1
            className="font-bold text-midnight leading-tight mb-5 [font-family:var(--font-poppins),system-ui,sans-serif] max-w-4xl mx-auto"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", letterSpacing: "-0.03em" }}
          >
            <span className="block">Your AI Front Desk,</span>
            <span className="block">Built to Run Your Business</span>
          </h1>
          <p className="text-lg text-midnight/65 max-w-2xl mx-auto mb-8">
            Taingo combines powerful AI with systems designed for home service
            businesses to answer every call, book more jobs, and deliver a
            receptionist experience that&apos;s faster and more affordable than hiring.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-copper hover:bg-copper-light text-paper font-semibold rounded-xl transition-all duration-150 hover:-translate-y-px shadow-sm"
            >
              Request a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border-2 border-midnight/20 hover:border-copper hover:text-copper text-midnight font-semibold rounded-xl transition-all duration-150"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stat bar */}
      <section className="bg-midnight py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            {[
              { icon: Clock, value: "24/7/365", label: "Always On" },
              { icon: Phone, value: "Under 2 seconds", label: "Answer Time" },
              { icon: CheckCircle, value: "Fast Setup. Guided Launch.", label: "Go-Live Time" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <Icon className="w-5 h-5 text-copper-light" />
                  <p className="text-2xl font-bold text-sun">{item.value}</p>
                  <p className="text-sm text-paper/50">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature deep-dives */}
      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {featureDetails.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={feature.title}
                  className={`grid md:grid-cols-2 gap-12 items-start ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={isEven ? "" : "md:order-2"}>
                    <div className="inline-flex items-center gap-2 bg-copper/10 text-copper text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                      <Icon className="w-3.5 h-3.5" />
                      Feature
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-midnight mb-2">
                      {feature.title}
                    </h2>
                    <p className="text-copper font-semibold mb-4">{feature.tagline}</p>
                    <p className="text-midnight/65 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle className="w-5 h-5 text-copper mt-0.5 shrink-0" />
                          <span className="text-midnight/75 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${
                      isEven ? "" : "md:order-1"
                    } rounded-2xl overflow-hidden relative h-72 md:h-96 shadow-md`}
                  >
                    <Image
                      src={feature.photo}
                      alt={feature.photoAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
