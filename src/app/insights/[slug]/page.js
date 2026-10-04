  import { notFound } from "next/navigation";
import { Navigation } from "@/components/hero";
import { Footer } from "@/components/layout";
import {
  ArticleProgress,
  ArticleHero,
  ArticleContent,
  RelatedInsights,
  InsightsCTA,
} from "@/components/insights";
import { INSIGHTS_DATA } from "@/data/insights";

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const article = INSIGHTS_DATA.find((item) => item.slug === resolvedParams?.slug);

  if (!article) {
    return {
      title: "Article Not Found | TechnoMantra Insights",
    };
  }

  return {
    title: `${article.title} | TechnoMantra Insights`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | TechnoMantra Insights`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.isoDate,
      authors: [article.author?.name || "TechnoMantra"],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 675,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function InsightDetailPage({ params }) {
  const resolvedParams = await params;
  const article = INSIGHTS_DATA.find((item) => item.slug === resolvedParams?.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-sky-500/25 selection:text-white">
      {/* Dynamic Scroll Reading Progress Indicator */}
      <ArticleProgress />

      {/* Global Navigation Bar */}
      <Navigation />

      {/* 01 Article Hero & Image */}
      <ArticleHero article={article} />

      {/* 02 Editorial Content Body */}
      <ArticleContent article={article} />

      {/* 03 Related Perspectives / Keep Reading */}
      <RelatedInsights currentSlug={article.slug} articles={INSIGHTS_DATA} />

      {/* 04 Inquire / Project CTA */}
      <InsightsCTA />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
