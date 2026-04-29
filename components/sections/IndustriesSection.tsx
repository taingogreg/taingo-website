import Link from "next/link";
import { Thermometer, Home, Droplets, Zap, Warehouse, Bug } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const industries = [
  {
    id: "hvac",
    icon: Thermometer,
    name: "HVAC",
    description:
      "Handle high-volume calls during heat waves and cold snaps. Triage emergencies, schedule tune-ups, and capture every service opportunity.",
    highlights: ["Emergency triage", "Seasonal surge handling", "Maintenance scheduling"],
  },
  {
    id: "roofing",
    icon: Home,
    name: "Roofing",
    description:
      "Capture storm-damage leads instantly, qualify prospects by project type, and book estimates before competitors answer.",
    highlights: ["Storm lead capture", "Estimate scheduling", "Insurance claim intake"],
  },
  {
    id: "plumbing",
    icon: Droplets,
    name: "Plumbing",
    description:
      "Answer emergency calls 24/7, dispatch the right technician, and capture every drain, pipe, and water heater service lead.",
    highlights: ["24/7 emergency dispatch", "Job type screening", "Technician routing"],
  },
  {
    id: "electrical",
    icon: Zap,
    name: "Electrical",
    description:
      "Screen calls for safety-critical situations, qualify residential vs. commercial jobs, and schedule panel upgrades and inspections.",
    highlights: ["Safety triage", "Permit job intake", "Commercial screening"],
  },
  {
    id: "garage-doors",
    icon: Warehouse,
    name: "Garage Doors",
    description:
      "Capture emergency repair calls, schedule spring and opener replacements, and qualify leads for new door installations.",
    highlights: ["Emergency repairs", "Replacement quotes", "Same-day scheduling"],
  },
  {
    id: "pest-control",
    icon: Bug,
    name: "Pest Control",
    description:
      "Identify pest types over the phone, schedule inspections, and upsell recurring treatment plans automatically.",
    highlights: ["Pest identification intake", "Inspection booking", "Treatment plan upsells"],
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industry Solutions"
          title="Built for Your Trade"
          subtitle="Taingo understands the unique language and workflows of home service businesses — not just generic calls."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.id}
                href={`/industries#${industry.id}`}
                className="group bg-cream rounded-2xl p-6 border border-bone hover:border-copper/30 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <div className="w-12 h-12 bg-bone rounded-xl flex items-center justify-center mb-4 group-hover:bg-copper/10 transition-colors">
                  <Icon className="w-6 h-6 text-copper" />
                </div>
                <h3 className="font-bold text-midnight text-lg mb-2">{industry.name}</h3>
                <p className="text-midnight/65 text-sm leading-relaxed mb-4 flex-1">
                  {industry.description}
                </p>
                <ul className="space-y-1">
                  {industry.highlights.map((item) => (
                    <li key={item} className="text-xs text-copper font-semibold">
                      → {item}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-midnight/20 hover:border-copper hover:text-copper text-midnight font-semibold rounded-xl transition-all duration-150"
          >
            Explore All Industries
          </Link>
        </div>
      </div>
    </section>
  );
}
