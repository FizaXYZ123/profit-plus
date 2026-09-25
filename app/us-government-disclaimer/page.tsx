import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

export const metadata: Metadata = {
  title: "U.S. Government Disclaimer — Profit Plus",
  description:
    "CFTC Rule 4.41 and U.S. Government required regulatory disclaimer regarding commodity futures, options, and automated trading risks.",
  openGraph: {
    title: "U.S. Government Disclaimer — Profit Plus",
    description:
      "CFTC Rule 4.41 and U.S. Government required regulatory disclaimer regarding commodity futures, options, and automated trading risks.",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section: Dark Forest Green with Upward Trend Arrow */}
      <section className="relative w-full bg-[#012615] pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden lg:h-[466px]">
        {/* Centered Main Title with identical font size & gradient */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1
            className="font-['Outfit'] font-extrabold text-3xl sm:text-5xl md:text-[54px] lg:text-[80px] tracking-tight leading-tight bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] inline-block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, color(display-p3 1 1 1) 0.16%, color(display-p3 0.6 0.6 0.6) 108.15%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            U.S. Government Disclaimer
          </h1>
        </div>

        {/* Decorative Green Upward Trend Arrow from public/arrow.webp */}
        <div className="absolute bottom-0 left-0 pointer-events-none select-none z-10">
          <Image
            src={IMAGES.arrow}
            alt="Upward Trend Arrow"
            width={340}
            height={160}
            className="w-40 sm:w-56 md:w-72 lg:w-84 h-auto object-contain object-bottom-left"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Main Content Section on Pure White Background */}
      <section className="relative w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section 1: U.S. Government Required Disclaimer */}
          <div className="mb-10 sm:mb-12">
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-4 sm:mb-5">
              U.S. Government Required Disclaimer
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              Commodity Futures Trading Commission.Futures, options, and spot currency trading have large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the futures and options markets. Don&apos;t trade with money you can&apos;t afford to lose. This website is neither a solicitation nor an offer to Buy/Sell futures or options. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed on this website. The past performance of any trading system or methodology is not necessarily indicative of future results.
            </p>
          </div>

          {/* Section 2: CFTC Rule 4.41 */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-4 sm:mb-5">
              CFTC Rule 4.41
            </h2>

            <div className="space-y-6 sm:space-y-7 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Hypothetical or simulated performance results have certain limitations. Unlike an actual performance record, simulated results do not represent actual trading. Also, since the trades have not been executed, the results may have under-or-over compensated for the impact, if any, of certain market factors, such as lack of liquidity. Simulated trading programs in general are also subject to the fact that they are designed with the benefit of hindsight. No representation is being made that any account will or is likely to achieve profit or losses similar to those shown.
              </p>

              <p>
                Futures trading contains substantial risk and is not for every investor. An investor could potentially lose all or more than the initial investment. Risk capital is money that can be lost without jeopardizing ones financial security or life style. Only risk capital should be used for trading and only those with sufficient risk capital should consider trading. Past performance is not necessarily indicative of future results.
              </p>

              <p>
                Hypothetical performance results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical performance results and the actual results subsequently achieved by any particular trading program. One of the limitations of hypothetical performance results is that they are generally prepared with the benefit of hindsight. In addition, hypothetical trading does not involve financial risk, and no hypothetical trading record can completely account for the impact of financial risk in actual trading. For example, the ability to withstand losses or to adhere to a particular trading program in spite of trading losses are material points which can also adversely affect actual trading results. There are numerous other factors related to the markets in general or to the implementation of any specific trading program which cannot be fully accounted for in the preparation of hypothetical performance results and all of which can adversely affect actual trading results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
