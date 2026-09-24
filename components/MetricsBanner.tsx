"use client";

import React from "react";

export default function MetricsBanner() {
  const stats = [
    {
      value: "$48.5M+",
      label: "Autonomous Assets Managed",
      subtext: "Across 24 Global Exchanges",
      badge: "+142% YoY",
    },
    {
      value: "99.4%",
      label: "Execution Precision",
      subtext: "Sub-millisecond latency order routing",
      badge: "Ultra Fast",
    },
    {
      value: "24/7/365",
      label: "Zero-Downtime Rebalancing",
      subtext: "Constant market anomaly monitoring",
      badge: "Non-stop",
    },
    {
      value: "4.92 / 5",
      label: "Investor Satisfaction",
      subtext: "From 12,000+ active portfolio accounts",
      badge: "Top Rated",
    },
  ];

  return (
    <section className="relative z-20 py-12 px-4 sm:px-6 bg-[#02140a] border-t border-b border-[#199250]/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 rounded-2xl bg-[#042614]/50 border border-[#199250]/30 backdrop-blur-sm hover:border-[#199250] hover:bg-[#055027]/30 transition-all duration-300 group"
            >
              {/* Badge */}
              <div className="inline-block px-2 py-0.5 rounded-full bg-[#199250]/20 border border-[#199250]/40 text-[#4ade80] text-[10px] font-['Manrope'] font-bold mb-3">
                {stat.badge}
              </div>

              {/* Stat Value */}
              <div className="font-['Outfit'] font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight group-hover:text-[#4ade80] transition-colors">
                {stat.value}
              </div>

              {/* Label */}
              <div className="font-['Outfit'] font-bold text-sm sm:text-base text-zinc-200 mt-2">
                {stat.label}
              </div>

              {/* Subtext */}
              <div className="font-['Manrope'] text-xs text-zinc-400 mt-1 leading-snug">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
