"use client";

import React from "react";

export default function Features() {
  const features = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#4ade80]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Algorithmic Buy-Low / Sell-High",
      description:
        "Proprietary quantitative neural models detect micro-dips and exit at optimal peaks with zero emotional bias.",
      stat: "+34.8% Average Return",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#4ade80]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Bank-Grade Capital Safeguards",
      description:
        "Automated stop-loss triggers, anti-liquidation hedges, and non-custodial API key execution keeps your principal safe.",
      stat: "Zero Capital Lock-in",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#4ade80]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      title: "Multi-Exchange Rebalancing",
      description:
        "Seamless synchronization across NYSE, NASDAQ, Binance, and Coinbase so you capitalize on cross-market spreads.",
      stat: "24 Global Venues",
    },
  ];

  return (
    <section id="about-us" className="py-24 px-4 sm:px-6 bg-[#031c0e] relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#055027]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#199250]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#199250]/15 border border-[#199250]/40 text-[#4ade80] text-xs font-['Manrope'] font-bold mb-4">
            HOW PROFIT PLUS WORKS
          </div>
          <h2 className="font-['Outfit'] font-black text-3xl sm:text-5xl text-white tracking-tight">
            Engineered For Consistent Market Alpha
          </h2>
          <p className="font-['Manrope'] text-zinc-300 text-base sm:text-lg mt-4 leading-relaxed">
            Eliminate stress, manual charting, and emotional FOMO. Our
            deep-learning system executes high-probability trades with mathematical
            discipline.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#063319] to-[#032110] border border-[#199250]/30 hover:border-[#199250] hover:shadow-2xl hover:shadow-[#199250]/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-[#055027] border border-[#199250]/50 flex items-center justify-center mb-6 shadow-lg shadow-[#055027]/50 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-white group-hover:text-[#4ade80] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-['Manrope'] text-zinc-300 text-sm sm:text-base mt-3 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Stat pill */}
              <div className="mt-8 pt-5 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="font-['Outfit'] font-bold text-xs sm:text-sm text-[#4ade80]">
                  {feature.stat}
                </span>
                <span className="w-7 h-7 rounded-full bg-[#199250]/20 flex items-center justify-center text-[#4ade80] group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
