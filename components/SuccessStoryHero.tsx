"use client";

import React from "react";
import Image from "next/image";

export default function SuccessStoryHero() {
  return (
    <section className="relative w-full bg-[#032010] text-white pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 lg:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[580px] lg:min-h-[660px] flex flex-col justify-center items-center">
      {/* Centered bounded container: Arrow and content are locked together */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Green Rising Arrow (public/Arrow.png) positioned at the very bottom touching the next section */}
        <div className="absolute xl:-bottom-19 md:-bottom-28 -bottom-20 right-0 sm:right-4 md:right-8 lg:right-12 w-[380px] sm:w-[500px] md:w-[650px] lg:w-[780px] h-[250px] sm:h-[330px] md:h-[420px] lg:h-[490px] pointer-events-none select-none z-0 opacity-95">
          <Image
            src="/Arrow.png"
            alt="Rising Performance Arrow"
            fill
            className="object-contain object-bottom-right"
            priority
            unoptimized
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[1152px] mx-auto text-center flex flex-col items-center">
          {/* Main Title */}
          <h1 className="font-['Outfit'] font-black text-3xl sm:text-5xl md:text-[54px] text-white tracking-tight leading-tight">
            Real Stories, Real Impact
          </h1>

          {/* Subtitle - Exact Figma Specs: 24px Manrope, #FFFFFF, max-w-[980px] */}
          <p className="font-['Manrope'] text-base sm:text-xl md:text-[24px] text-white font-normal mt-3 sm:mt-4 max-w-[980px] mx-auto leading-snug sm:leading-relaxed md:leading-[34px]">
            Discover how everyday investors turned to AI and transformed their financial journeys with ProfitPlus.
          </p>

          {/* Hypothetical Performance Disclaimer - Exact Figma Specs: 16px Manrope, #FFFFFFCC, 1152px width */}
          <p className="font-['Manrope'] text-[14px] sm:text-[15px] md:text-[16px] leading-[25px] sm:leading-[27px] text-[#FFFFFFCC] text-center max-w-[1152px] mx-auto mt-8 sm:mt-12 md:mt-14 font-normal">
            Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown; in fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program. One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk of actual trading. for example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all which can adversely affect trading results.
          </p>
        </div>
      </div>
    </section>
  );
}
