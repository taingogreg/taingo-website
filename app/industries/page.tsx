import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Thermometer, Home, Droplets, Zap, Warehouse, Bug,
  CheckCircle, ArrowRight, Phone,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Industries | Taingo AI Receptionist for Home Services",
  description:
    "Taingo serves HVAC, plumbing, roofing, electrical, garage doors, pest control, and more with a specialized AI receptionist.",
};

const industries = [
  {
    id: "hvac",
    icon: Thermometer,
    name: "HVAC",
    photo: "https://images.unsplash.com/photo-1660330590022-9f4ff56b63f6?w=900&q=80&auto=format&fit=crop",
    photoAlt: "HVAC technician working on equipment",
    photoClass: "object-cover object-center",
    headline: "Handle Every Call During Your Busiest Season",
    description:
      "HVAC businesses face intense call volume during summer heat waves and winter cold snaps. One missed emergency call can cost thousands in lost revenue — and a customer who calls a competitor. Taingo answers every call immediately, triages emergencies intelligently, and fills your schedule automatically.",
    painPoints: [
      "Overwhelmed dispatchers during seasonal peaks",
      "After-hours emergency calls with no one to answer",
      "Leads lost to competitors who answer faster",
    ],
    solutions: [
      "Instant answer during heat waves and cold snaps — no hold times",
      "Smart emergency triage: identifies AC failure vs. routine tune-up",
      "Automatic scheduling synced to technician availability",
      "Post-call CRM logging with equipment details captured",
    ],
  },
  {
    id: "roofing",
    icon: Home,
    name: "Roofing",
    photo: "https://images.unsplash.com/photo-1643225523483-e2c434191bba?w=900&q=80&auto=format&fit=crop",
    photoAlt: "Worker carrying asphalt shingles on a residential roof",
    photoClass: "object-cover object-center",
    headline: "Capture Every Storm Lead Before Competitors Do",
    description:
      "After a major storm, homeowners make dozens of calls looking for immediate help. The company that answers first wins the job. Taingo ensures you're always first to answer, captures full damage intake, and books inspections on the spot.",
    painPoints: [
      "Storm surges generate more calls than staff can handle",
      "Competitors answering faster win the lead",
      "Insurance claim intake is time-consuming",
    ],
    solutions: [
      "Unlimited concurrent call handling during storm surges",
      "Damage intake form completed during the call",
      "Insurance claim type screening and documentation",
      "Instant inspection scheduling with photo follow-up",
    ],
  },
  {
    id: "plumbing",
    icon: Droplets,
    name: "Plumbing",
    photo: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=900&q=80&auto=format&fit=crop",
    photoAlt: "Plumber working on pipe under a sink",
    photoClass: "object-cover object-center",
    headline: "Be There When Pipes Burst at 2 AM",
    description:
      "Plumbing emergencies don't wait for business hours. A burst pipe at midnight needs an answer now. Taingo provides 24/7 emergency dispatch capability, routes calls to on-call plumbers, and handles routine scheduling so your daytime staff can focus on the work.",
    painPoints: [
      "Emergency calls with no after-hours coverage",
      "Routine scheduling interrupting service work",
      "Inconsistent intake process leading to wrong-sized dispatches",
    ],
    solutions: [
      "24/7 emergency identification and on-call dispatch",
      "Issue pre-screening to send the right tech with the right parts",
      "Routine booking handled automatically without dispatcher involvement",
      "Full job history pulled from CRM before technician arrives",
    ],
  },
  {
    id: "electrical",
    icon: Zap,
    name: "Electrical",
    photo: "https://images.unsplash.com/photo-1660330589487-39cc0177ba89?w=900&q=80&auto=format&fit=crop",
    photoAlt: "Electrician in yellow jacket working on a residential electrical panel",
    photoClass: "object-cover object-center",
    headline: "Screen for Safety, Book for Profit",
    description:
      "Electrical calls range from minor fixture swaps to critical panel failures. Taingo screens calls for safety urgency, qualifies residential vs. commercial jobs, and routes to the appropriately certified electrician — ensuring the right crew shows up for every job.",
    painPoints: [
      "Safety-critical calls need immediate response",
      "Residential vs. commercial routing errors",
      "Permit job documentation not captured upfront",
    ],
    solutions: [
      "Safety urgency detection to escalate critical calls instantly",
      "Job type qualification: service calls, installs, panel upgrades, inspections",
      "Permit and commercial documentation intake",
      "Licensed crew routing based on job classification",
    ],
  },
  {
    id: "garage-doors",
    icon: Warehouse,
    name: "Garage Doors",
    photo: "https://images.unsplash.com/photo-1581044294446-9efb5910a3ba?w=900&q=80&auto=format&fit=crop",
    photoAlt: "Garage on a New England home in Providence, Rhode Island",
    photoClass: "object-cover object-center",
    headline: "Fast Response Wins the Same-Day Job",
    description:
      "Garage door emergencies — a broken spring, a car trapped inside — need immediate response. Homeowners call multiple companies and go with whoever answers first. Taingo makes sure that's always you.",
    painPoints: [
      "High volume of same-day emergency calls",
      "Simple jobs not worth dispatcher time to book manually",
      "New door and opener quotes need site visit scheduling",
    ],
    solutions: [
      "Immediate emergency classification and dispatch notification",
      "Same-day appointment booking with real-time calendar access",
      "New door installation lead capture and estimate scheduling",
      "Replacement part capture (brand, model) to reduce return trips",
    ],
  },
  {
    id: "pest-control",
    icon: Bug,
    name: "Pest Control",
    photo: "https://images.unsplash.com/photo-1670989292166-8b20b9530438?w=900&q=80&auto=format&fit=crop",
    photoAlt: "Pest control technician at a residential property",
    photoClass: "object-cover object-center",
    headline: "Identify the Problem, Book the Treatment",
    description:
      "Pest calls are urgent and highly specific. Taingo gathers pest type, infestation severity, and property details to match the right treatment plan — and upsells recurring prevention contracts automatically.",
    painPoints: [
      "Pest identification at intake saves wasted dispatches",
      "Missed opportunity to pitch recurring treatment plans",
      "Emergency infestations need immediate scheduling",
    ],
    solutions: [
      "Guided pest identification during the intake call",
      "Infestation severity assessment for priority scheduling",
      "Automatic recurring plan upsell conversation",
      "Chemical sensitivity and pet/child safety intake",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bone pt-28 pb-16 border-b border-bone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-copper mb-4">
            Industry Solutions
          </p>
          <div className="w-full min-w-0 overflow-x-auto overflow-y-visible pb-1 [scrollbar-width:thin] flex justify-center mb-5">
            <h1
              className="font-display font-black text-midnight leading-tight whitespace-nowrap shrink-0 inline-block"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", letterSpacing: "-0.03em" }}
            >
              Built for Your Specific Trade
            </h1>
          </div>
          <p className="text-lg text-midnight/65 max-w-2xl mx-auto">
            Taingo isn&apos;t a generic answering service. It&apos;s trained on the
            language, urgency, and workflows of home service businesses — so it
            sounds like an expert in your field.
          </p>
        </div>
      </section>

      {/* Industry nav — centered, scrolls with the page (not sticky) */}
      <section className="bg-cream border-b border-bone shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 py-3">
            {industries.map(({ id, name, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-midnight/65 hover:text-midnight hover:bg-bone rounded-lg whitespace-nowrap transition-colors"
              >
                <Icon className="w-4 h-4 text-copper" />
                {name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industry sections */}
      <div className="py-4">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          const bg = index % 2 === 0 ? "bg-paper" : "bg-bone";
          return (
            <section
              key={industry.id}
              id={industry.id}
              className={`${bg} py-20 scroll-mt-[5.75rem]`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10 md:mb-11">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-14 h-14 bg-bone rounded-2xl flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-copper" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">
                        Industry
                      </p>
                      <h2 className="text-2xl font-bold text-midnight">{industry.name}</h2>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-copper hover:bg-copper-light text-paper font-semibold rounded-xl transition-all duration-150 hover:-translate-y-px shadow-sm text-sm shrink-0 self-start sm:self-auto"
                  >
                    Get a Demo for {industry.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  <div>
                    <p className="text-xl font-semibold text-midnight mb-3">{industry.headline}</p>
                    <p className="text-midnight/65 leading-relaxed">{industry.description}</p>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden h-56">
                    <Image
                      src={industry.photo}
                      alt={industry.photoAlt}
                      fill
                      className={industry.photoClass}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="bg-copper/8 border border-copper/15 rounded-2xl p-6">
                    <h3 className="font-bold text-midnight mb-3 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-copper" /> Common Pain Points
                    </h3>
                    <ul className="space-y-2">
                      {industry.painPoints.map((p) => (
                        <li key={p} className="text-sm text-midnight/70 flex items-start gap-2">
                          <span className="mt-0.5 shrink-0 text-copper font-bold">✕</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-midnight/5 border border-midnight/10 rounded-2xl p-6">
                    <h3 className="font-bold text-midnight mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-copper" /> How Taingo Solves It
                    </h3>
                    <ul className="space-y-2">
                      {industry.solutions.map((s) => (
                        <li key={s} className="text-sm text-midnight/70 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-copper" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTABanner />
    </>
  );
}
