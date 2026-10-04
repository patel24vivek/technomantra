import { Suspense } from "react";
import { Navigation } from "@/components/hero";
import {
  ContactHero,
  ContactIntro,
  ContactForm,
  ContactProcess,
  ContactDetails,
  ConnectionPoint,
} from "@/components/contact";
import { Footer } from "@/components/layout";

export const metadata = {
  title: "Contact TechnoMantra | Let's Build Something That Works",
  description:
    "Get in touch with TechnoMantra to discuss custom websites, business software, ERP, CRM, automation, ecommerce, and digital engineering for your business.",
  openGraph: {
    title: "Contact TechnoMantra | Let's Build Something That Works",
    description:
      "Get in touch with TechnoMantra to discuss custom websites, business software, ERP, CRM, automation, ecommerce, and digital engineering for your business.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-[#030712] selection:bg-sky-500/25 selection:text-white">
      {/* Global Navigation Header */}
      <Navigation />

      {/* 01 Contact Hero & Interactive Connection Field */}
      <ContactHero />

      {/* 02 Foundational Alignment & Collaborative Intro */}
      <ContactIntro />

      {/* 03 Confidential Project Inquiry Form & Service Selector (Wrapped in Suspense for useSearchParams) */}
      <Suspense fallback={<div className="w-full py-20 text-center text-xs font-mono text-slate-400">Loading form...</div>}>
        <ContactForm />
      </Suspense>

      {/* 04 What Happens Next (4-Step Delivery Roadmap) */}
      <ContactProcess />

      {/* 05 Verified Direct Contact Channels & Studio Presence */}
      <ContactDetails />

      {/* 06 Signature Convergence Visual */}
      <ConnectionPoint />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
