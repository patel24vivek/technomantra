import { Navigation } from "@/components/hero";
import {
  SolutionsHero,
  BusinessProblems,
  SolutionEcosystem,
  CRMSolutions,
  ERPSolutions,
  BusinessAutomation,
  EcommerceSolutions,
  MarketingAutomation,
  ConnectedBusiness,
  WhyConnectedSolutions,
  SolutionFinder,
  SolutionsCTA,
} from "@/components/solutions";
import { Footer } from "@/components/layout";

export const metadata = {
  title: "Solutions | TechnoMantra — Technology That Solves Real Business Problems",
  description:
    "We connect software, data and workflows across CRM, custom ERP, business automation, ecommerce and marketing to help businesses operate efficiently and scale.",
};

export default function SolutionsPage() {
  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-sky-500/25 selection:text-white">
      {/* Global Top Navigation */}
      <Navigation />

      {/* 01 Solutions Hero */}
      <SolutionsHero />

      {/* 02 Business Problems & Fragmentation */}
      <BusinessProblems />

      {/* 03 Connected Solution Ecosystem */}
      <SolutionEcosystem />

      {/* 04 CRM Solutions */}
      <CRMSolutions />

      {/* 05 ERP Solutions */}
      <ERPSolutions />

      {/* 06 Business Automation */}
      <BusinessAutomation />

      {/* 07 Ecommerce Solutions */}
      <EcommerceSolutions />

      {/* 08 Marketing Automation */}
      <MarketingAutomation />

      {/* 09 Connected Business System */}
      <ConnectedBusiness />

      {/* 10 Why Connected Solutions */}
      <WhyConnectedSolutions />

      {/* 11 Interactive Solution Finder */}
      <SolutionFinder />

      {/* 12 Final CTA */}
      <SolutionsCTA />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
