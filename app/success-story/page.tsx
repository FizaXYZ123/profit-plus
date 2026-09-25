import React from "react";
import SuccessStoryHero from "@/components/SuccessStoryHero";
import AchievementsSection from "@/components/AchievementsSection";
import SuccessStoryReviews from "@/components/SuccessStoryReviews";

export const metadata = {
  title: "Success Story — Profit Plus",
  description:
    "Discover how everyday investors turned to AI and transformed their financial journeys with ProfitPlus.",
};

export default function SuccessStoryPage() {
  return (
    <div className="w-full flex-1 flex flex-col bg-[#032010] selection:bg-[#199250] selection:text-white overflow-x-hidden">
      {/* 1. Hero Section: "Real Stories, Real Impact" with Arrow.png at bottom */}
      <SuccessStoryHero />

      {/* 2. Customer Reviews Section: 2-Column Testimonials */}
      <SuccessStoryReviews />

      {/* 3. Achievements Section: 3 Certificate Sliders (White, Black, Blue) */}
      <AchievementsSection />
    </div>
  );
}
