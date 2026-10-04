import { Navigation } from "@/components/hero";
import { Footer } from "@/components/layout";
import {
  InsightsHero,
  FeaturedInsight,
  InsightList,
  WhyWeWrite,
  InsightsCTA,
} from "@/components/insights";
import { INSIGHTS_DATA } from "@/data/insights";

export const metadata = {
  title: "Insights & Perspectives | TechnoMantra Digital Engineering",
  description:
    "Explore TechnoMantra insights on technology, business systems, web development, custom software, ERP, automation, and digital strategy.",
  openGraph: {
    title: "Insights & Perspectives | TechnoMantra Digital Engineering",
    description:
      "Explore TechnoMantra insights on technology, business systems, web development, custom software, ERP, automation, and digital strategy.",
    type: "website",
  },
};

export default function InsightsPage() {
  const featuredArticle =
    INSIGHTS_DATA.find((item) => item.featured) || INSIGHTS_DATA[0];

  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-sky-500/25 selection:text-white">
      {/* Global Navigation Bar */}
      <Navigation />

      {/* 01 Insights Hero */}
      <InsightsHero />

      {/* 02 Featured Essay */}
      <FeaturedInsight article={featuredArticle} />

      {/* 03 Topics Filter & Editorial Article List */}
      <InsightList />

      {/* 04 Why We Write (Editorial Philosophy) */}
      <WhyWeWrite />

      {/* 05 Inquire / Contact CTA */}
      <InsightsCTA />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
