"use client";

import React from "react";
import Image from "next/image";
import { IMAGES, HOW_IT_WORKS_CARDS } from "@/constants/export";

export default function HowItWorks() {
  return (
    <section className="relative bg-white text-zinc-900 pt-6 sm:pt-20 pb-24 px-4 sm:px-6 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Heading: "How It Work" */}
        <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl md:text-[44px] text-[#111827] tracking-tight text-center">
          How It Work
        </h2>

        {/* 4 Cards Grid matching exact user screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-14 w-full">
          {HOW_IT_WORKS_CARDS.map((card) => {
            return (
              <div
                key={card.id}
                className="relative rounded-t-[22px] rounded-bl-[22px] rounded-br-none min-h-[305px] flex flex-col justify-between p-6 pb-20 border-0 border-white outline-none transition-transform duration-200 hover:-translate-y-1"
                style={{ backgroundColor: card.bgColor, borderRadius: "22px 22px 0 22px" }}
              >
                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="font-['Outfit'] font-bold text-[20px] sm:text-[21px] leading-snug text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="font-['Manrope'] font-normal text-[13.5px] leading-relaxed text-white/95 mt-3 pr-1">
                    {card.description}
                  </p>
                </div>

                {/* Seamless White SVG Cutout: Complete bleed past card bottom-right to eliminate any green crescent */}
                <svg
                  className="absolute -bottom-2 -right-2 w-[100px] h-[100px] pointer-events-none z-10 overflow-visible"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <path
                    d="M 0 92 C 14 92 22 84 22 70 L 22 38 C 22 26 26 22 38 22 L 70 22 C 84 22 92 14 92 0 L 100 0 L 100 100 L 0 100 Z"
                    fill="#ffffff"
                    stroke="none"
                  />
                </svg>

                {/* Rounded Grey Badge containing specific Icon in deep teal #00524E */}
                <div className="absolute bottom-2.5 right-2.5 w-[52px] h-[52px] rounded-[16px] bg-[#cbd5ce] z-20 flex items-center justify-center border-0 border-none outline-none">
                    {/* 1. Monitor Market Activity */}
                    {card.iconType === "monitor" && (
                      <svg
                        className="w-7 h-7 text-[#00524E]"
                        viewBox="0 0 32 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="26" height="18" rx="3" />
                        <line x1="11" y1="28" x2="21" y2="28" />
                        <line x1="16" y1="22" x2="16" y2="28" />
                        {/* Pie Chart on Monitor */}
                        <circle cx="21" cy="11" r="4.5" strokeWidth="1.8" />
                        <path d="M21 6.5v4.5h4.5" strokeWidth="1.8" />
                        {/* Line Chart on Monitor */}
                        <polyline points="7 18 11 14 15 16 19 12" strokeWidth="1.8" />
                        <circle cx="7" cy="18" r="1" fill="currentColor" stroke="none" />
                        <circle cx="11" cy="14" r="1" fill="currentColor" stroke="none" />
                        <circle cx="15" cy="16" r="1" fill="currentColor" stroke="none" />
                        <circle cx="19" cy="12" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    )}

                    {/* 2. Execute Trades Automatically */}
                    {card.iconType === "gears" && (
                      <svg
                        className="w-7 h-7 text-[#00524E]"
                        viewBox="0 0 32 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Center Gear */}
                        <circle cx="16" cy="16" r="3.5" />
                        <path d="M16 9v2M16 21v2M9 16h2M21 16h2M11 11l1.5 1.5M19.5 19.5l1.5 1.5M11 21l1.5-1.5M19.5 12.5l1.5-1.5" />
                        {/* Up/Down Arrows inside Gear */}
                        <polyline points="14.5 15 16 13.5 17.5 15" strokeWidth="1.5" />
                        <polyline points="14.5 17 16 18.5 17.5 17" strokeWidth="1.5" />
                        {/* Curved circulating arrows */}
                        <path d="M9 10A9.5 9.5 0 0 1 24 10" strokeWidth="1.8" />
                        <polyline points="22 7 25 10 22 13" strokeWidth="1.8" />
                        <path d="M23 22A9.5 9.5 0 0 1 8 22" strokeWidth="1.8" />
                        <polyline points="10 25 7 22 10 19" strokeWidth="1.8" />
                        {/* Dollar coin */}
                        <circle cx="6.5" cy="9.5" r="3.2" fill="#00524E" stroke="none" />
                        <text x="4.8" y="11.8" fontSize="5.5" fontWeight="bold" fill="white" stroke="none">
                          $
                        </text>
                        {/* Euro coin */}
                        <circle cx="25.5" cy="22.5" r="3.2" fill="#00524E" stroke="none" />
                        <text x="23.9" y="24.8" fontSize="5.5" fontWeight="bold" fill="white" stroke="none">
                          €
                        </text>
                      </svg>
                    )}

                    {/* 3. Review Performance */}
                    {card.iconType === "analytics" && (
                      <svg
                        className="w-7 h-7 text-[#00524E]"
                        viewBox="0 0 32 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Window Frame */}
                        <rect x="4" y="5" width="24" height="22" rx="3" />
                        <line x1="4" y1="11" x2="28" y2="11" />
                        {/* 3 Dots in Window Header */}
                        <circle cx="21" cy="8" r="0.75" fill="currentColor" stroke="none" />
                        <circle cx="23.5" cy="8" r="0.75" fill="currentColor" stroke="none" />
                        <circle cx="26" cy="8" r="0.75" fill="currentColor" stroke="none" />
                        {/* 3 Rating Stars */}
                        <path
                          d="M9 14.5l.5 1 1.1.2-.8.8.2 1.1-1-.5-1 .5.2-1.1-.8-.8 1.1-.2z"
                          fill="currentColor"
                          stroke="none"
                        />
                        <path
                          d="M16 14.5l.5 1 1.1.2-.8.8.2 1.1-1-.5-1 .5.2-1.1-.8-.8 1.1-.2z"
                          fill="currentColor"
                          stroke="none"
                        />
                        <path
                          d="M23 14.5l.5 1 1.1.2-.8.8.2 1.1-1-.5-1 .5.2-1.1-.8-.8 1.1-.2z"
                          fill="currentColor"
                          stroke="none"
                        />
                        {/* 3 Bar charts */}
                        <rect x="8" y="20.5" width="3" height="3.5" rx="0.5" fill="currentColor" stroke="none" />
                        <rect x="14.5" y="18.5" width="3" height="5.5" rx="0.5" fill="currentColor" stroke="none" />
                        <rect x="21" y="16.5" width="3" height="7.5" rx="0.5" fill="currentColor" stroke="none" />
                      </svg>
                    )}

                    {/* 4. Trade with Greater Efficiency */}
                    {card.iconType === "team" && (
                      <svg
                        className="w-7 h-7 text-[#00524E]"
                        viewBox="0 0 32 32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {/* Umbrella/dome */}
                        <path d="M7 16 C 7 9.5 25 9.5 25 16 Z" fill="currentColor" fillOpacity="0.2" />
                        {/* 3 User Heads */}
                        <circle cx="16" cy="14" r="2.2" />
                        <circle cx="10" cy="15" r="1.8" />
                        <circle cx="22" cy="15" r="1.8" />
                        {/* Upward Growth Arrow + Dollar */}
                        <path d="M7 25c4.5-2 11-2 18-7" strokeWidth="2" />
                        <polyline points="20 18 25 18 25 23" strokeWidth="2" />
                        <circle cx="9" cy="24" r="3.2" fill="#00524E" stroke="none" />
                        <text x="7.3" y="26.2" fontSize="5.5" fontWeight="bold" fill="white" stroke="none">
                          $
                        </text>
                      </svg>
                    )}
                  </div>
              </div>
            );
          })}
        </div>

        {/* Wide Plexus Network Banner with Floating Candlestick Chart (Exact user asset) */}
        <div className="relative w-full max-w-6xl mx-auto mt-14 sm:mt-20">
          <Image
            src={IMAGES.howItWorksBanner}
            alt="Profit Plus Trading Network Mesh"
            width={1024}
            height={167}
            className="w-full h-auto object-contain block select-none rounded-[36px]"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
