import { Navigation } from "@/components/hero";
import {
  IndustriesHero,
  IndustryUniverse,
  IndustryExplorer,
  IndustryConnections,
  HowWeAdapt,
  IndustryChallenges,
  SelectedIndustryWork,
  IndustryFinder,
  IndustriesCTA,
} from "@/components/industries";
import { Footer } from "@/components/layout";

export const metadata = {
  title: "Industries | TechnoMantra — Technology Built Around Business Realities",
  description:
    "We adapt digital products, custom ERP, CRM, and automation around the specific operational realities, workflows, and challenges of 10 modern industries.",
};

export default function IndustriesPage() {
  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-sky-500/25 selection:text-white">
      {/* Top Global Navigation Header */}
      <Navigation />

      {/* 01 Industries Hero */}
      <IndustriesHero />

      {/* 02 Industry Universe Constellation */}
      <IndustryUniverse />

      {/* 03 Interactive Signature Industry Explorer */}
      <IndustryExplorer />

      {/* 04 Industry + Technology Connections */}
      <IndustryConnections />

      {/* 05 How We Adapt Approach */}
      <HowWeAdapt />

      {/* 06 Common Industry Challenges */}
      <IndustryChallenges />

      {/* 07 Selected Industry Work / Verified Case Studies */}
      <SelectedIndustryWork />

      {/* 08 Interactive Industry Finder */}
      <IndustryFinder />

      {/* 09 Final Conversion CTA */}
      <IndustriesCTA />

      {/* 10 Global Footer */}
      <Footer />
    </main>
  );
}
