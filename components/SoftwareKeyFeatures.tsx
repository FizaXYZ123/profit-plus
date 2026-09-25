"use client";

import React from "react";
import Image from "next/image";

export default function SoftwareKeyFeatures() {
  return (
    <section className="w-full bg-white text-zinc-900 pt-8 sm:pt-14 md:pt-0 pb-16 sm:pb-24 md:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl md:text-5xl text-[#111827] tracking-tight">
            Key Features
          </h2>
        </div>

        {/* Top Row: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 sm:gap-y-16 gap-x-6 lg:gap-x-8">
          {/* Card 1: Automated Trade Execution */}
          <div className="relative bg-[#086333] text-white rounded-[24px] px-6 sm:px-7 pt-14 pb-8 shadow-lg flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            {/* White badge with 80x80 gif at top center */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-[20px] shadow-md border border-zinc-100 flex items-center justify-center p-2 z-20">
              <Image
                src="/gif/about-sw-gif-1.gif"
                alt="Automated Trade Execution Icon"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg sm:text-[21px] text-white tracking-tight leading-snug mb-3">
              Automated Trade Execution
            </h3>
            <p className="font-['Manrope'] font-normal text-xs sm:text-[13px] text-[#e1f5eb] leading-relaxed">
              Execute trades automatically based on your configured settings and strategy.
              Reduce manual work and improve consistency while managing your futures trading
              activities.
            </p>
          </div>

          {/* Card 2: Intelligent Automation */}
          <div className="relative bg-[#086333] text-white rounded-[24px] px-6 sm:px-7 pt-14 pb-8 shadow-lg flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-[20px] shadow-md border border-zinc-100 flex items-center justify-center p-2 z-20">
              <Image
                src="/gif/about-sw-gif-2.gif"
                alt="Intelligent Automation Icon"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg sm:text-[21px] text-white tracking-tight leading-snug mb-3">
              Intelligent Automation
            </h3>
            <p className="font-['Manrope'] font-normal text-xs sm:text-[13px] text-[#e1f5eb] leading-relaxed">
              ProfitPlus uses smart automation to streamline trade execution and simplify
              workflows. Customize your preferences and let the platform handle repetitive
              tasks efficiently.
            </p>
          </div>

          {/* Card 3: Beginner-Friendly Interface */}
          <div className="relative bg-[#086333] text-white rounded-[24px] px-6 sm:px-7 pt-14 pb-8 shadow-lg flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-[20px] shadow-md border border-zinc-100 flex items-center justify-center p-2 z-20">
              <Image
                src="/gif/about-sw-gif-3.gif"
                alt="Beginner-Friendly Interface Icon"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg sm:text-[21px] text-white tracking-tight leading-snug mb-3">
              Beginner-Friendly Interface
            </h3>
            <p className="font-['Manrope'] font-normal text-xs sm:text-[13px] text-[#e1f5eb] leading-relaxed">
              Designed for both new and experienced traders, ProfitPlus offers an intuitive
              interface, simple setup, and easy-to-use tools for a smooth trading
              experience.
            </p>
          </div>
        </div>

        {/* Bottom Row: 2 Cards Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 sm:gap-y-16 gap-x-6 lg:gap-x-8 max-w-4xl mx-auto mt-14 sm:mt-16">
          {/* Card 4: Dedicated Support */}
          <div className="relative bg-[#086333] text-white rounded-[24px] px-6 sm:px-7 pt-14 pb-8 shadow-lg flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-[20px] shadow-md border border-zinc-100 flex items-center justify-center p-2 z-20">
              <Image
                src="/gif/about-sw-gif-5.gif"
                alt="Dedicated Support Icon"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg sm:text-[21px] text-white tracking-tight leading-snug mb-3">
              Dedicated Support
            </h3>
            <p className="font-['Manrope'] font-normal text-xs sm:text-[13px] text-[#e1f5eb] leading-relaxed">
              Our support team is available to assist with setup, technical questions, and
              platform guidance, helping you get the most out of ProfitPlus.
            </p>
          </div>

          {/* Card 5: Performance Reports */}
          <div className="relative bg-[#086333] text-white rounded-[24px] px-6 sm:px-7 pt-14 pb-8 shadow-lg flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-[20px] shadow-md border border-zinc-100 flex items-center justify-center p-2 z-20">
              <Image
                src="/gif/about-sw-gif-6.gif"
                alt="Performance Reports Icon"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg sm:text-[21px] text-white tracking-tight leading-snug mb-3">
              Performance Reports
            </h3>
            <p className="font-['Manrope'] font-normal text-xs sm:text-[13px] text-[#e1f5eb] leading-relaxed">
              Monitor your trading activity with clear reports, execution history, and
              account insights. Review performance data to stay informed and refine your
              trading approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
