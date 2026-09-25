"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

type TabType = "ninjatrader" | "kinetick";

interface PlatformData {
  title: string;
  intro: React.ReactNode;
  subheading: string;
  bulletPoints: string[];
  conclusion: string;
}

const PLATFORM_DATA: Record<TabType, PlatformData> = {
  ninjatrader: {
    title: "NinjaTrader® – Our Top Recommended Trading Platform",
    intro: (
      <>
        At ProfitPlus, we recommend{" "}
        <span className="font-bold text-zinc-900">NinjaTrader®</span> for
        traders who want a reliable and feature-rich futures trading platform.
        Trusted by thousands of traders worldwide, it offers the tools needed to
        trade with speed and confidence.
      </>
    ),
    subheading: "With NinjaTrader®, you get access to:",
    bulletPoints: [
      "Live futures market data and charts",
      "Professional charting and analysis tools",
      "A built-in trading simulator for practice",
      "Custom strategy development and backtesting",
      "Flexible integrations with add-ons and apps",
    ],
    conclusion:
      "Whether you're learning or trading live markets, NinjaTrader® provides a stable and efficient platform to support your trading journey.",
  },
  kinetick: {
    title: "Kinetick® – Our Recommended Market Data Service",
    intro: (
      <>
        ProfitPlus also recommends{" "}
        <span className="font-bold text-zinc-900">Kinetick®</span> for fast and
        dependable market data. It delivers real-time pricing and accurate
        information to help traders stay informed and react quickly.
      </>
    ),
    subheading: "With Kinetick®, you benefit from:",
    bulletPoints: [
      "Real-time futures market data",
      "Reliable live quotes and price update",
      "Fast data delivery with low latency",
      "Seamless integration with NinjaTrader",
      "Consistent support for charting and analysis",
    ],
    conclusion:
      "Kinetick® helps traders access timely market information, making it easier to monitor trends and execute trades with confidence.",
  },
};

export default function RecommendedPlatform() {
  const [activeTab, setActiveTab] = useState<TabType>("ninjatrader");

  const data = PLATFORM_DATA[activeTab];

  return (
    <section
      id="recommended-platform"
      className="relative bg-white text-zinc-900 pt-1 sm:pt-2 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="font-outfit font-black text-2xl sm:text-3xl md:text-[38px] text-[#111827] tracking-tight text-center">
          Our Recommended Trading Platform
        </h2>

        {/* Dual Logo Pill Container with Smooth Sliding Background */}
        <div className="mt-8 sm:mt-12 max-w-3xl mx-auto rounded-full border border-zinc-200/90 bg-white relative overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] select-none">
          {/* Smooth Sliding Active Background Indicator (Clean Soft Brand Green) */}
          <div
            aria-hidden="true"
            className={`absolute top-0 bottom-0 left-0 w-1/2 bg-[#e8f6ed] transition-transform duration-300 ease-out z-0 ${
              activeTab === "ninjatrader"
                ? "translate-x-0"
                : "translate-x-full"
            }`}
          />

          {/* Center Divider Line */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200/90 -translate-x-1/2 z-10 pointer-events-none"
          />

          {/* Tabs Container */}
          <div className="relative z-10 flex flex-row items-center justify-between">
            {/* Left Tab: NinjaTrader */}
            <button
              type="button"
              onClick={() => setActiveTab("ninjatrader")}
              className="flex-1 w-1/2 flex items-center justify-center py-3.5 sm:py-5 md:py-6 px-3 sm:px-8 cursor-pointer focus:outline-none transition-opacity duration-200"
              aria-label="Select NinjaTrader Platform"
              aria-pressed={activeTab === "ninjatrader"}
            >
              <Image
                src={IMAGES.ninjaTraderLogo}
                alt="NinjaTrader"
                width={260}
                height={55}
                className={`h-6 sm:h-8 md:h-10 w-auto object-contain transition-transform duration-200 ${
                  activeTab === "ninjatrader" ? "scale-105" : "opacity-85 hover:opacity-100"
                }`}
                priority
                unoptimized
              />
            </button>

            {/* Right Tab: Kinetick */}
            <button
              type="button"
              onClick={() => setActiveTab("kinetick")}
              className="flex-1 w-1/2 flex items-center justify-center py-3.5 sm:py-5 md:py-6 px-3 sm:px-8 cursor-pointer focus:outline-none transition-opacity duration-200"
              aria-label="Select Kinetick Market Data Service"
              aria-pressed={activeTab === "kinetick"}
            >
              <Image
                src={IMAGES.kinetickLogo}
                alt="Kinetick - Fast Market Data Unfiltered"
                width={260}
                height={55}
                className={`h-7 sm:h-9 md:h-11 w-auto object-contain transition-transform duration-200 ${
                  activeTab === "kinetick" ? "scale-105" : "opacity-85 hover:opacity-100"
                }`}
                priority
                unoptimized
              />
            </button>
          </div>
        </div>

        {/* Dynamic Content Section with Fade Animation on Tab Change */}
        <div
          key={activeTab}
          className="mt-10 sm:mt-14 text-left animate-[fadeInScale_0.25s_ease-out]"
        >
          {/* Main Title */}
          <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl md:text-[32px] text-zinc-900 tracking-tight leading-snug">
            {data.title}
          </h3>

          {/* Introductory Paragraph */}
          <p className="font-manrope text-zinc-600 text-sm sm:text-base leading-relaxed mt-4">
            {data.intro}
          </p>

          {/* Subheading for features */}
          <p className="font-manrope text-zinc-700 text-sm sm:text-base font-medium mt-5">
            {data.subheading}
          </p>

          {/* Bullet points list */}
          <ul className="mt-3 space-y-2.5 pl-1">
            {data.bulletPoints.map((point, index) => (
              <li
                key={index}
                className="font-manrope text-zinc-600 text-sm sm:text-base flex items-start gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#199250] mt-2 shrink-0 select-none" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Concluding Paragraph */}
          <p className="font-manrope text-zinc-600 text-sm sm:text-base leading-relaxed mt-6">
            {data.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
