"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

export default function RecommendedPlatform() {
  const bulletPoints = [
    "Live futures market data and charts",
    "Professional charting and analysis tools",
    "A built-in trading simulator for practice",
    "Custom strategy development and backtesting",
    "Flexible integrations with add-ons and apps",
  ];

  return (
    <section
      id="recommended-platform"
      className="relative bg-white text-zinc-900 pt-1 sm:pt-2 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-black text-2xl sm:text-3xl md:text-[38px] text-[#111827] tracking-tight text-center">
          Our Recommended Trading Platform
        </h2>

        {/* Dual Logo Pill Container */}
        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto rounded-[32px] sm:rounded-full border border-zinc-200/90 bg-white py-4 sm:py-6 px-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] gap-4 sm:gap-0">
          {/* Left: NinjaTrader */}
          <div className="flex-1 w-full flex items-center justify-center px-4 py-2 sm:py-0">
            <Image
              src={IMAGES.ninjaTraderLogo}
              alt="NinjaTrader"
              width={260}
              height={55}
              className="h-7 sm:h-9 md:h-10 w-auto object-contain select-none"
              priority
              unoptimized
            />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 md:h-14 bg-zinc-200/90" />
          <div className="block sm:hidden w-full h-px bg-zinc-200/70" />

          {/* Right: Kinetick */}
          <div className="flex-1 w-full flex items-center justify-center px-4 py-2 sm:py-0">
            <Image
              src={IMAGES.kinetickLogo}
              alt="Kinetick - Fast Market Data Unfiltered"
              width={260}
              height={55}
              className="h-8 sm:h-10 md:h-11 w-auto object-contain select-none"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-12 sm:mt-16 text-left">
          {/* Main Title */}
          <h3 className="font-['Outfit'] font-extrabold text-2xl sm:text-3xl md:text-[32px] text-zinc-900 tracking-tight leading-snug">
            NinjaTrader&reg; &ndash; Our Top Recommended Trading Platform
          </h3>

          {/* Introductory Paragraph */}
          <p className="font-['Manrope'] text-zinc-600 text-sm sm:text-base leading-relaxed mt-4">
            At ProfitPlus, we recommend{" "}
            <span className="font-bold text-zinc-900">NinjaTrader&reg;</span> for
            traders who want a reliable and feature-rich futures trading
            platform. Trusted by thousands of traders worldwide, it offers the
            tools needed to trade with speed and confidence.
          </p>

          {/* Subheading for features */}
          <p className="font-['Manrope'] text-zinc-700 text-sm sm:text-base font-medium mt-5">
            With NinjaTrader&reg;, you get access to:
          </p>

          {/* Bullet points list */}
          <ul className="mt-3 space-y-2.5 pl-1">
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                className="font-['Manrope'] text-zinc-600 text-sm sm:text-base flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2 shrink-0 select-none" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Concluding Paragraph */}
          <p className="font-['Manrope'] text-zinc-600 text-sm sm:text-base leading-relaxed mt-6">
            Whether you&apos;re learning or trading live markets, NinjaTrader&reg;
            provides a stable and efficient platform to support your trading
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}
