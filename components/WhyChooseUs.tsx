"use client";

import React from "react";
import Image from "next/image";
import { IMAGES, WHY_CHOOSE_US_CARDS } from "@/constants/export";

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative bg-white text-zinc-900 pt-16 sm:pt-12 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
   

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl md:text-[42px] text-[#111827] tracking-tight text-center">
          Why Choose ProfitPlus
        </h2>

        {/* Section Subtitle */}
        <p className="font-['Manrope'] text-zinc-600 text-[14px] sm:text-[15.5px] leading-relaxed text-center max-w-3xl mx-auto mt-4 px-2">
          ProfitPlus helps traders automate futures trading with reliable execution,
          flexible controls, and tools designed to simplify multi-account management.
          Whether you&apos;re an individual trader or managing multiple accounts, our
          platform is built for speed, consistency, and confidence.
        </p>

        {/* 2x2 Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 sm:gap-y-14 gap-x-6 sm:gap-x-8 w-full mt-14 sm:mt-16">
          {WHY_CHOOSE_US_CARDS.map((card) => {
            return (
              <div
                key={card.id}
                className="relative bg-[#055027] rounded-[26px] sm:rounded-[30px] pt-12 sm:pt-14 pb-8 sm:pb-9 px-6 sm:px-10 text-center flex flex-col items-center justify-start transition-transform duration-200 hover:-translate-y-1 shadow-sm"
              >
                {/* SVG Top Cutout Notch: Smooth concave cradle matching screenshot */}
                <svg
                  className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[98px] sm:w-[104px] h-[34px] sm:h-[36px] pointer-events-none z-10"
                  viewBox="0 0 100 32"
                  fill="none"
                >
                  <path
                    d="M 0 0 C 14 0 18 28 32 28 L 68 28 C 82 28 86 0 100 0 L 100 -6 L 0 -6 Z"
                    fill="#ffffff"
                  />
                </svg>

                {/* White Top Badge with Green Vector Icon */}
                <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] rounded-[16px] sm:rounded-[18px] bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-zinc-100 z-20">
                  {/* 1. Real-Time Market Monitoring */}
                  {card.iconType === "monitoring" && (
                    <svg
                      className="w-7 h-7 text-[#055027]"
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* Computer Monitor */}
                      <rect x="3" y="4" width="26" height="17" rx="2.5" />
                      <line x1="3" y1="9" x2="29" y2="9" strokeWidth="1.5" />
                      <circle cx="6" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                      <circle cx="8.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                      {/* Trend Line Chart */}
                      <polyline points="7 16 12 12 17 15 24 10" strokeWidth="2" />
                      <circle cx="7" cy="16" r="1.2" fill="currentColor" stroke="none" />
                      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                      <circle cx="17" cy="15" r="1.2" fill="currentColor" stroke="none" />
                      <circle cx="24" cy="10" r="1.2" fill="currentColor" stroke="none" />
                      {/* Clock Overlay on lower left */}
                      <circle cx="8" cy="21.5" r="4.5" fill="white" stroke="currentColor" strokeWidth="2" />
                      <polyline points="8 19 8 21.5 10 21.5" strokeWidth="1.8" />
                    </svg>
                  )}

                  {/* 2. Smart Trade Automation */}
                  {card.iconType === "automation" && (
                    <svg
                      className="w-7 h-7 text-[#055027]"
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* Center Gear */}
                      <circle cx="16" cy="16" r="5" />
                      <path d="M16 8v2.5M16 21.5v2.5M8 16h2.5M21.5 16h2.5M10.3 10.3l1.8 1.8M19.9 19.9l1.8 1.8M10.3 21.7l1.8-1.8M19.9 12.1l1.8-1.8" />
                      {/* Dollar Sign */}
                      <text
                        x="13.2"
                        y="19"
                        fontSize="9"
                        fontWeight="bold"
                        fill="currentColor"
                        stroke="none"
                        fontFamily="sans-serif"
                      >
                        $
                      </text>
                      {/* Circulating Directional Arrows */}
                      <path d="M8 11A10.5 10.5 0 0 1 24 9" strokeWidth="1.8" />
                      <polyline points="20 6.5 24.5 9 21.5 12" strokeWidth="1.8" />
                      <path d="M24 21A10.5 10.5 0 0 1 8 23" strokeWidth="1.8" />
                      <polyline points="12 25.5 7.5 23 10.5 20" strokeWidth="1.8" />
                    </svg>
                  )}

                  {/* 3. Fast & Reliable Performance */}
                  {card.iconType === "performance" && (
                    <svg
                      className="w-7 h-7 text-[#055027]"
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* Speed motion lines on left */}
                      <line x1="2" y1="12" x2="6.5" y2="12" strokeWidth="2.2" />
                      <line x1="1" y1="16.5" x2="7.5" y2="16.5" strokeWidth="2.2" />
                      <line x1="3" y1="21" x2="7" y2="21" strokeWidth="2.2" />
                      {/* Speedometer Gauge Arc */}
                      <circle cx="18" cy="16.5" r="9" />
                      {/* Bold Checkmark inside Gauge */}
                      <polyline
                        points="13.5 16.5 16.5 19.5 22.5 13"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  {/* 4. Dedicated Customer Support */}
                  {card.iconType === "support" && (
                    <svg
                      className="w-7 h-7 text-[#055027]"
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* Support Headset Arch */}
                      <path d="M7 16 A9 9 0 0 1 25 16" strokeWidth="2.2" />
                      {/* Left and Right Ear pads */}
                      <rect x="4.5" y="15" width="4" height="7" rx="2" fill="currentColor" />
                      <rect x="23.5" y="15" width="4" height="7" rx="2" fill="currentColor" />
                      {/* Microphone Boom */}
                      <path d="M25 21v2a3.5 3.5 0 0 1-3.5 3.5h-3.5" strokeWidth="2" />
                      {/* Chat / Speech Bubble in Center */}
                      <path
                        d="M11 11h9a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-2l-3 2.5V19h-4a2.5 2.5 0 0 1-2.5-2.5v-3A2.5 2.5 0 0 1 11 11z"
                        fill="currentColor"
                        stroke="none"
                      />
                      {/* 2 Chat dots */}
                      <circle cx="13.5" cy="15" r="1" fill="white" stroke="none" />
                      <circle cx="17.5" cy="15" r="1" fill="white" stroke="none" />
                    </svg>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="font-['Outfit'] font-bold text-[20px] sm:text-[22px] text-white tracking-tight leading-snug">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="font-['Manrope'] font-normal text-[13.5px] sm:text-[14.5px] leading-relaxed text-white/95 mt-3 sm:mt-3.5 max-w-[460px]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
