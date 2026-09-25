import React from "react";
import AboutSoftwareHero from "@/components/AboutSoftwareHero";
import AiTradingBot from "@/components/AiTradingBot";
import SoftwareKeyFeatures from "@/components/SoftwareKeyFeatures";
import SoftwareSupport from "@/components/SoftwareSupport";
import SoftwareTestimonials from "@/components/SoftwareTestimonials";
import FAQ from "@/components/FAQ";

export default function AboutSoftwarePage() {
  return (
    <div className="w-full flex-1 flex flex-col bg-[#032010] selection:bg-[#199250] selection:text-white overflow-x-hidden">
      {/* 1. Hero Section: "About Software" with Laptop & Candlesticks */}
      <AboutSoftwareHero />

      {/* 2. White Section: "What is ProfitPlus AI Trading Bot?" with 3D Brain */}
      <AiTradingBot />

      {/* 3. White Section: "Key Features" with 5 GIF Cards (3-2 grid) */}
      <SoftwareKeyFeatures />

      {/* 4. Dark Green Section: "Testimonials" with Interactive Drag & Auto-scroll */}
      <SoftwareTestimonials />

      {/* 5. White Section: "Software Support" with 3 Cards (340px x 278px) */}
      <SoftwareSupport />

      {/* 6. White Section: "Frequently Asked Questions" Accordion */}
      <FAQ />

      {/* Clean White Gap separating dark content from Footer */}
      <div className="w-full bg-white h-12 sm:h-16 md:h-20" aria-hidden="true" />
    </div>
  );
}
