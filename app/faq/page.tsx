import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "FAQ | Taingo AI Receptionist",
  description:
    "Find answers to common questions about Taingo's AI receptionist: setup, integrations, pricing, bilingual support, emergency handling, and more.",
};

const faqCategories = [
  {
    category: "Getting Started",
    items: [
      {
        question: "What is Taingo and how does it work?",
        answer:
          "Taingo is an AI-powered voice receptionist designed specifically for home service businesses. When a customer calls your business number, Taingo answers immediately — 24/7, 365 days a year. It greets callers naturally, collects their information, qualifies the lead, answers common questions, and can book appointments directly into your calendar. All without any human involvement on your end.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Setup typically takes a few days, though we allow up to two weeks to properly tailor the system to your business and ensure everything runs smoothly from day one. Our onboarding team works with you to customize Taingo's greeting, business rules, intake questions, and calendar integrations. There's no complicated technical setup — we handle everything on our side.",
      },
      {
        question: "Do I need to change my phone number?",
        answer:
          "No. Taingo works with your existing phone number. We configure a simple call forwarding rule so that calls are routed to Taingo. You keep your business number and brand identity unchanged.",
      },
      {
        question: "How is Taingo different from a traditional answering service?",
        answer:
          "Traditional answering services use human agents working from scripts, which means variable quality, limited hours, and high cost. Taingo is an AI — it's perfectly consistent every time, available 24/7/365, handles unlimited simultaneous calls, and costs a fraction of the price. It also integrates directly with your scheduling and CRM software, which no human answering service can match.",
      },
    ],
  },
  {
    category: "Features & Capabilities",
    items: [
      {
        question: "Can the AI really book appointments automatically?",
        answer:
          "Yes. Taingo integrates with your calendar and scheduling software and can check real-time availability, propose time slots, and confirm bookings during the call — without any human intervention. It handles reschedules and cancellations too.",
      },
      {
        question: "How does Taingo handle after-hours emergency calls?",
        answer:
          "Taingo is specifically trained to identify emergency situations from the caller's language. When it detects an emergency, it can provide immediate troubleshooting guidance for minor issues and escalate true emergencies to your on-call technician via phone call. You set the escalation rules — Taingo enforces them perfectly every time.",
      },
      {
        question: "Can Taingo speak Spanish?",
        answer:
          "Yes. Taingo supports 31 languages, including English and Spanish. It automatically detects the caller's language and responds accordingly, providing the same complete intake and scheduling experience regardless of what language they speak. This is included in all plans, if requested.",
      },
      {
        question: "What happens on calls Taingo can't handle?",
        answer:
          "Taingo is designed to handle the vast majority of inbound calls for home service businesses. For complex situations outside its scope, it captures the caller's information and notifies your team immediately so you can follow up quickly. You define the threshold for human handoff.",
      },
      {
        question: "Can it qualify leads and filter out bad ones?",
        answer:
          "Absolutely. Taingo screens callers based on criteria you define: service type, geographic location, budget range, project urgency, and more. Low-quality or out-of-area callers are handled politely but efficiently, so your team only spends time on real opportunities.",
      },
    ],
  },
  {
    category: "Integrations",
    items: [
      {
        question: "What software does Taingo integrate with?",
        answer:
          "Taingo integrates with the most popular home service platforms: ServiceTitan, Housecall Pro, Jobber, FieldEdge, and more. It also connects with Google Calendar, Outlook, Salesforce, and most major CRM systems. If you use a platform not on this list, we offer webhook and API support for custom integrations.",
      },
      {
        question: "Will call data sync to my CRM automatically?",
        answer:
          "Yes. Every call is automatically logged in your CRM including the caller's name, phone number, address, service type, issue description, and the appointment booked. Full call transcripts are also available. No manual data entry needed.",
      },
      {
        question: "Does Taingo work with my existing phone system (VoIP, landline)?",
        answer:
          "Taingo works with any phone system via standard call forwarding — VoIP, traditional landlines, and mobile numbers. No special hardware or software is required on your end.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    items: [
      {
        question: "How much does Taingo cost?",
        answer:
          "Taingo pricing is based on your call volume and business needs. We offer flexible monthly plans with no long-term contracts. Contact our team for a personalized quote — we'll build a plan around your specific business size and call volume.",
      },
      {
        question: "Is there a contract or lock-in period?",
        answer:
          "No. Taingo operates on a month-to-month basis. There are no annual contracts or cancellation fees. We earn your business every month.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "We don't offer a traditional free trial. Instead, we provide a live, customized onboarding experience where we build and configure Taingo for your business, walk you through it in real time, and test it together before going live. This ensures the system is properly tailored to how your business actually handles calls, bookings, and customers.",
      },
    ],
  },
  {
    category: "Privacy & Security",
    items: [
      {
        question: "How is customer call data stored and protected?",
        answer:
          "Taingo uses enterprise-grade encryption for all call recordings and transcripts. Data is stored on secure, compliant cloud infrastructure. You retain full ownership of all your customer data. We never sell or share your data with third parties.",
      },
      {
        question: "Are call recordings available?",
        answer:
          "Yes. All calls are recorded and transcribed. You can access recordings and full transcripts through the Taingo dashboard or directly in your CRM. Recordings are retained per your plan's retention policy.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-bone pt-28 pb-16 border-b border-bone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-copper mb-4">
            FAQ
          </p>
          <div className="w-full min-w-0 overflow-x-auto overflow-y-visible pb-1 [scrollbar-width:thin] flex justify-center mb-5">
            <h1
              className="font-black text-midnight leading-tight [font-family:var(--font-poppins),system-ui,sans-serif] whitespace-nowrap shrink-0 inline-block"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", letterSpacing: "-0.03em" }}
            >
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-lg text-midnight/65 max-w-xl mx-auto">
            Everything you need to know about Taingo. Can&apos;t find your answer?{" "}
            <Link href="/contact" className="text-copper hover:text-copper-light font-semibold">
              Contact us directly.
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="py-16 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold text-midnight mb-5 flex items-center gap-3">
                  <span className="w-1 h-6 bg-copper rounded-full inline-block" />
                  {cat.category}
                </h2>
                <FAQAccordion items={cat.items} />
              </div>
            ))}
          </div>

          <div className="mt-14 bg-midnight rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-paper mb-3">Still have questions?</h2>
            <p className="text-paper/65 mb-6">
              Our team is happy to walk you through exactly how Taingo will work
              for your specific business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 bg-copper hover:bg-copper-light text-paper font-semibold rounded-xl transition-all duration-150 hover:-translate-y-px shadow-sm"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
