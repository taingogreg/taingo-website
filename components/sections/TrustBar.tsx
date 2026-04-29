import { Thermometer, Home, Droplets, Zap, Warehouse, Bug } from "lucide-react";

const industries = [
  { name: "HVAC", icon: Thermometer },
  { name: "Roofing", icon: Home },
  { name: "Plumbing", icon: Droplets },
  { name: "Electrical", icon: Zap },
  { name: "Garage Doors", icon: Warehouse },
  { name: "Pest Control", icon: Bug },
];

export default function TrustBar() {
  return (
    <section className="bg-bone border-y border-bone py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-midnight/40 mb-8">
          Built for home service businesses
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {industries.map(({ name, icon: Icon }) => (
            <div key={name} className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center shadow-sm border border-bone group-hover:border-copper/30 group-hover:shadow-md transition-all">
                <Icon className="w-6 h-6 text-copper" />
              </div>
              <span className="text-xs font-medium text-midnight/60">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
