import { Navigation } from "@/components/hero";
import {
  ProjectsHero,
  ProjectIndex,
  ProjectsGrid,
  ProjectsMarquee,
  FeaturedProjectStage,
  ProjectStory,
  ProjectCapabilities,
  ProjectArchive,
  ProjectProcess,
  ProjectFinder,
  ProjectsCTA,
} from "@/components/projects";
import { Footer } from "@/components/layout";

export const metadata = {
  title: "Projects & Case Studies | TechnoMantra — Digital Products Built for Real Business",
  description:
    "Explore websites, custom ERPs, commercial CRM systems, business automation, and digital experiences engineered around real-world business needs.",
};

export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-sky-500/25 selection:text-white">
      {/* Top Global Navigation Header */}
      <Navigation />

      {/* 01 Projects Hero (Layered Multi-Depth Canvas) */}
      <ProjectsHero />

      {/* 02 Editorial Project Index */}
      <ProjectIndex />

      {/* 03 Crazy 3D Bento Showcase Grid with Spotlight & Category Filtering */}
      <ProjectsGrid />

      {/* 04 Live Motion Marquee Reel */}
      <ProjectsMarquee />

      {/* 05 Featured Case Study Stage & Interactive Lens Inspector */}
      <FeaturedProjectStage />

      {/* 06 Project Story & Problem-First Methodology */}
      <ProjectStory />

      {/* 07 Capability Spectrum Strip */}
      <ProjectCapabilities />

      {/* 08 Studio Project Archive Table */}
      <ProjectArchive />

      {/* 09 How We Build 6-Step Process */}
      <ProjectProcess />

      {/* 10 Interactive Project Finder */}
      <ProjectFinder />

      {/* 11 Final Conversion CTA */}
      <ProjectsCTA />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
