import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-bone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Be One of the First"
          title="Be One of the First to Try Taingo"
          subtitle="We're working with a limited number of businesses to build and refine our AI receptionists."
        />

        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-copper hover:bg-copper-light text-paper font-semibold rounded-xl transition-all duration-150 hover:-translate-y-px shadow-sm hover:shadow-md"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
