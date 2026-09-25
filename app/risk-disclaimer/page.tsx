import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

export const metadata: Metadata = {
  title: "Risk Disclaimer — Profit Plus",
  description:
    "Read the Profit Plus risk disclosure, hypothetical performance limitations, live trade room disclosures, and responsible trading guidelines.",
  openGraph: {
    title: "Risk Disclaimer — Profit Plus",
    description:
      "Read the Profit Plus risk disclosure, hypothetical performance limitations, live trade room disclosures, and responsible trading guidelines.",
  },
};

export default function RiskDisclaimerPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section: Dark Forest Green with Upward Trend Arrow */}
      <section className="relative w-full bg-[#012615] pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden lg:h-[466px]">
        {/* Centered Main Title with display-p3 gradient */}
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
            Risk Disclaimer
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
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          {/* Section 1: Risk Disclosure */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Risk Disclosure:
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Trading futures, forex, and other financial markets involves substantial risk and may not be suitable for every investor. Market conditions can change rapidly, and you may lose part or all of your invested capital.
              </p>
              <p>
                You should only trade with money that you can afford to lose without affecting your financial security or lifestyle. Before trading, carefully evaluate your financial situation, experience, and risk tolerance. Past performance is not a guarantee of future results.
              </p>
            </div>
          </div>

          {/* Section 2: Hypothetical Performance Disclosure */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Hypothetical Performance Disclosure:
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Any hypothetical, simulated, or backtested performance results displayed by ProfitPlus are provided for educational and informational purposes only. These results have limitations and should not be viewed as an indication of actual trading performance.
              </p>
              <p>
                Simulated results do not involve real financial risk and cannot fully account for factors such as market volatility, liquidity, execution delays, emotional decision-making, or changing market conditions. Actual trading results may differ significantly from hypothetical examples.
              </p>
              <p>
                No representation is made that any account will achieve profits or losses similar to those shown in hypothetical performance examples.
              </p>
            </div>
          </div>

          {/* Section 3: Live Trade Room Disclosure */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Live Trade Room Disclosure:
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Any content shared during webinars, live trade rooms, demonstrations, or educational sessions reflects the opinions and views of the presenter at that time. These sessions are intended for educational purposes only and should not be considered financial or investment advice.
              </p>
              <p>
                Trades or examples discussed during these presentations should not be expected to produce identical results in a live trading environment.
              </p>
            </div>
          </div>

          {/* Section 4: Testimonial Disclosure */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Testimonial Disclosure:
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Testimonials and customer reviews featured on the ProfitPlus website represent individual experiences and opinions. They should not be interpreted as typical results or as a guarantee of future trading success.
              </p>
              <p>
                Every trader&apos;s performance depends on many factors, including experience, market conditions, strategy, discipline, and risk management.
              </p>
            </div>
          </div>

          {/* Section 5: No Guarantee of Results */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              No Guarantee of Results:
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                ProfitPlus provides software designed to assist with trade automation and workflow management. We do not guarantee profits, investment returns, or successful trading outcomes.
              </p>
              <p>
                All trading decisions are made solely by the user, and every investment carries financial risk.
              </p>
            </div>
          </div>

          {/* Section 6: Trade Responsibly */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Trade Responsibly:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              By using ProfitPlus, you acknowledge that trading involves risk and accept full responsibility for your own trading decisions. If you are uncertain about the risks involved, consider seeking guidance from a qualified financial professional before participating in the markets.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
