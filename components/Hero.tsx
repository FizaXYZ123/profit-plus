"use client";

import React from "react";
import Image from "next/image";
import FloatingBadge from "./FloatingBadge";
import DashboardMockup from "./DashboardMockup";
import { IMAGES, HERO_CONTENT } from "@/constants/export";

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-0 flex flex-col items-center justify-start bg-[#031d0e] z-10 overflow-visible">
      {/* 3D Grid Background: strictly BEHIND all content (z-0) */}
      <div className="absolute inset-x-0 top-28 sm:top-32 bottom-0 pointer-events-none z-0 overflow-hidden flex justify-center select-none">
        <div className="relative w-full max-w-7xl h-full">
          <Image
            src={IMAGES.gridWebp}
            alt="3D Perspective Grid Background"
            fill
            className="object-cover object-top opacity-70"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Main Foreground Content (z-10, always in front of the grid) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="font-['Outfit'] font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[66px] tracking-tight text-white max-w-6xl leading-[1.12] drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          {HERO_CONTENT.title}
        </h1>

        {/* Subtitle / Tagline */}
        <p className="font-['Manrope'] font-normal text-sm sm:text-base md:text-lg text-emerald-100/90 max-w-2xl mx-auto mt-4 leading-relaxed tracking-wide">
          {HERO_CONTENT.subtitle}
        </p>

        {/* Tablet Stage: Badges positioned COMPLETELY OUTSIDE the tablet image and border */}
        <div className="relative w-full max-w-[614px] mx-auto mt-20 sm:mt-24 -mb-28 sm:-mb-36 z-20">
          {/* 1. Globe Badge: Strictly ABOVE and OUTSIDE the tablet top border */}
          <div className="absolute bottom-full mb-4 sm:mb-8 left-[12%] sm:left-[16%] z-30 pointer-events-auto">
            <FloatingBadge type="globe" delay="0.4s" />
          </div>

          {/* 2. Pie Chart Badge: Strictly ABOVE and OUTSIDE the tablet top border */}
          <div className="absolute bottom-full mb-4 sm:mb-8 right-[12%] sm:right-[18%] z-30 pointer-events-auto">
            <FloatingBadge type="pie" delay="1s" />
          </div>

          {/* 3. AI Chip Badge: Strictly to the LEFT, completely OUTSIDE the tablet border (responsive on sm+) */}
          <div className="hidden sm:block absolute top-8 sm:top-12 right-full mr-3 sm:mr-6 md:mr-10 z-30 pointer-events-auto">
            <FloatingBadge type="ai" delay="0s" />
          </div>

          {/* 4. Candlestick Stock Badge: Strictly to the RIGHT, completely OUTSIDE the tablet border (responsive on sm+) */}
          <div className="hidden sm:block absolute top-8 sm:top-12 left-full ml-3 sm:ml-6 md:ml-10 z-30 pointer-events-auto">
            <FloatingBadge type="candlestick" delay="0.7s" />
          </div>

          {/* Central Tablet Mockup (Exact 570x270 inner display with slate grey bezel) */}
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}
