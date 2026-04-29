import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ROICalculator from "@/components/sections/ROICalculator";
import FeaturesSection from "@/components/sections/FeaturesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQPreview from "@/components/sections/FAQPreview";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Taingo | AI Voice Receptionist for Home Service Businesses",
  description:
    "Taingo's AI receptionist answers every call 24/7, books appointments, and captures leads for HVAC, plumbing, roofing, electrical, and other home service businesses.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ROICalculator />
      <FeaturesSection />
      <IndustriesSection />
      <HowItWorks />
      <TestimonialsSection />
      <FAQPreview />
      <CTABanner />
    </>
  );
}
