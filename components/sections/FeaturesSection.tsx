import { Phone, Calendar, ClipboardList, AlertTriangle, Globe, Database, Filter, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

const features = [
  {
    icon: Phone,
    title: "24/7 Call Coverage & Lead Capture",
    description:
      "Every call answered instantly — even after hours, on weekends, and holidays. Prevent callers from hanging up and calling your competitors.",
  },
  {
    icon: Calendar,
    title: "Automated Appointment Scheduling",
    description:
      "Syncs with your team's calendars to check technician availability, book appointments, and manage scheduling changes automatically.",
  },
  {
    icon: ClipboardList,
    title: "Instant Customer Intake",
    description:
      "Gathers name, address, system type, and issue description before escalating to a human — optimizing every service call from the start.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Call Handling",
    description:
      "Intelligently prioritizes urgent calls and routes them to the right person—so critical issues get immediate attention.",
  },
  {
    icon: Globe,
    title: "Multilingual Communication (31 Languages)",
    description:
      "Can be set up to handle inquiries fluently in 31 languages — including English and Spanish — broadening your customer reach in diverse markets without hiring multilingual staff.",
  },
  {
    icon: Database,
    title: "CRM & Scheduling Integration",
    description:
      "Logs all calls and customer data directly into your CRM, enabling better tracking, follow-ups, and business insights.",
  },
  {
    icon: Filter,
    title: "Intelligent Lead Qualification",
    description:
      "Filters low-quality leads by screening callers based on service type, urgency, and location — so your team focuses on real opportunities.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What Taingo Does"
          title="Every Feature Your Business Needs"
          subtitle="Taingo handles the phone so you can focus on what you do best — delivering great service."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.slice(0, 6).map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-cream border border-bone rounded-2xl p-6 hover:border-copper/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-bone rounded-xl flex items-center justify-center mb-4 group-hover:bg-copper/10 transition-colors">
                  <Icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-bold text-midnight text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-midnight/65 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 7th feature — lead qualification — highlighted */}
        <div className="mt-5 bg-midnight rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-14 h-14 bg-copper/15 rounded-xl flex items-center justify-center shrink-0">
            <Filter className="w-7 h-7 text-copper-light" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-paper text-xl mb-2">{features[6].title}</h3>
            <p className="text-paper/65 leading-relaxed">{features[6].description}</p>
          </div>
          <Link
            href="/features"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-copper hover:bg-copper-light text-paper font-semibold rounded-xl transition-all duration-150 text-sm whitespace-nowrap hover:-translate-y-px"
          >
            All Features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
