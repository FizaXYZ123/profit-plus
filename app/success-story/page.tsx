import React from "react";
import SuccessStoryHero from "@/components/SuccessStoryHero";
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

      {/* 2. White Section: 2-Column Customer Testimonial Cards */}
      <SuccessStoryReviews />

      {/* Clean White Gap separating content from Footer */}
      <div className="w-full bg-white h-12 sm:h-16 md:h-20" aria-hidden="true" />
    </div>
  );
}
