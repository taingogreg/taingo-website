import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";

const previewFAQs = [
  {
    question: "What exactly is Taingo and how does it work?",
    answer:
      "Taingo is an AI-powered voice receptionist designed specifically for home service businesses. When a customer calls your business number, Taingo answers immediately — 24/7, 365 days a year. It greets callers naturally, collects their information, qualifies the lead, answers common questions, and can book appointments directly into your calendar. All without any human involvement.",
  },
  {
    question: "Can the AI handle after-hours emergency calls?",
    answer:
      "Absolutely. Taingo is specifically trained to triage emergency calls. It can identify urgency, provide immediate troubleshooting guidance for minor issues, and escalate true emergencies to your on-call technician via phone notification. You define the rules — Taingo enforces them.",
  },
  {
    question: "Does Taingo integrate with my existing scheduling software and CRM?",
    answer:
      "Yes. Taingo integrates with popular home service platforms including ServiceTitan, Housecall Pro, Jobber, and more. It also connects to Google Calendar, Outlook, and most major CRM systems. All call data, transcriptions, and customer information are automatically synced in real time.",
  },
  {
    question: "How long does it take to get set up?",
    answer:
      "Setup typically takes a few days, though we allow up to two weeks to properly tailor the system to your business and ensure everything runs smoothly from day one. Our onboarding team works with you to customize the AI's greeting, business rules, and intake questions. There's no complicated technical setup — we handle everything.",
  },
];

export default function FAQPreview() {
  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions Answered"
          subtitle="Everything you need to know about getting started with Taingo."
          titleFont="poppins"
          titleSingleLine
          eyebrowVariant="prominent"
          subtitleVariant="emphasis"
        />

        <FAQAccordion items={previewFAQs} />

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-copper hover:text-copper-light font-semibold transition-colors"
          >
            View all frequently asked questions →
          </Link>
        </div>
      </div>
    </section>
  );
}
