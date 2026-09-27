import { Navigation } from "@/components/hero";
import {
  ServicesHero,
  ServiceEcosystem,
  ServiceExplorer,
  ServiceConnections,
  HowWeDeliver,
  ServiceFinder,
} from "@/components/services";
import { Footer } from "@/components/layout";

export const metadata = {
  title: "Our Services | TechnoMantra — Connected Technology for Modern Businesses",
  description:
    "Explore our 11-service catalogue across web development, custom ERP, CRM, accounting software, automation, digital marketing, and dedicated developers.",
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-sky-500/25 selection:text-white">
      {/* Top Global Navigation Header */}
      <Navigation />

      {/* 01 Services Hero */}
      <ServicesHero />

      {/* 02 Service Ecosystem */}
      <ServiceEcosystem />

      {/* 03 Interactive 11-Service Catalogue Explorer */}
      <ServiceExplorer />

      {/* 04 Service Connections */}
      <ServiceConnections />

      {/* 05 How We Deliver Process */}
      <HowWeDeliver />

      {/* 06 Interactive Service Finder Recommender */}
      <ServiceFinder />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
