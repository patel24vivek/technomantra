import { Navigation } from "@/components/hero";
import {
  AboutHero,
  WhoWeAre,
  WhatWeBelieve,
  WhatWeDo,
  HowWeWork,
  Capabilities,
  WhyTechnoMantra,
  Industries,
  SelectedWork,
} from "@/components/about";
import { Footer } from "@/components/layout";

export const metadata = {
  title: "About Us | TechnoMantra — Technology Built Around Business Needs",
  description:
    "We design and develop digital products, business software, automation systems and digital experiences for modern businesses.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-sky-500/25 selection:text-white">
      {/* Top Header Navigation */}
      <Navigation />

      {/* 01 About Hero */}
      <AboutHero />

      {/* 02 Who We Are */}
      <WhoWeAre />

      {/* 03 What We Believe */}
      <WhatWeBelieve />

      {/* 04 What We Do */}
      <WhatWeDo />

      {/* 05 How We Work */}
      <HowWeWork />

      {/* 06 Capabilities */}
      <Capabilities />

      {/* 07 Why TechnoMantra */}
      <WhyTechnoMantra />

      {/* 08 Industries */}
      <Industries />

      {/* 09 Selected Work */}
      <SelectedWork />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
