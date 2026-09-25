"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

export default function AiTradingBot() {
  return (
    <section className="w-full bg-white text-zinc-900 pt-16 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-['Outfit'] font-bold text-3xl sm:text-4xl md:text-5xl text-[#111827] tracking-tight">
            What is ProfitPlus AI Trading Bot?
          </h2>
          <p className="font-['Manrope'] font-normal text-xs sm:text-sm md:text-[15px] text-[#4b5563] mt-4 sm:mt-5 leading-relaxed max-w-3xl mx-auto">
            The ProfitPlus AI Trading Bot is a smart futures trading automation solution
            designed to simplify trade execution and multi-account management. It helps
            automate repetitive trading tasks, monitor market activity in real time, and
            execute trades based on your configured settings, allowing you to trade more
            efficiently and stay focused on your strategy.
          </p>
        </div>

        {/* Two-Column Showcase: Green Feature Card on Left + 3D AI Brain Asset on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
          {/* Left: Dark Forest Green Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#064825] via-[#053d1f] to-[#042d17] text-white rounded-[24px] sm:rounded-[32px] p-7 sm:p-10 md:p-12 relative overflow-hidden shadow-xl border border-emerald-800/30">
            {/* Ambient inner soft glow in bottom right of card */}
            <div
              className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full pointer-events-none select-none opacity-40"
              style={{
                background: "radial-gradient(circle, #199250 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl md:text-[32px] text-white tracking-tight leading-snug mb-4 sm:mb-5">
                AI-Powered Futures Trading
              </h3>
              <p className="font-['Manrope'] font-normal text-xs sm:text-sm md:text-[15px] text-[#d1fae5]/90 leading-relaxed">
                ProfitPlus combines intelligent automation with advanced trading technology
                to streamline futures trading workflows. With customizable settings, fast
                trade execution, and seamless multi-account support, it helps traders reduce
                manual effort and manage their trading operations with greater consistency
                and confidence.
              </p>
            </div>
          </div>

          {/* Right: 3D AI Illustration (Ai.png) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px] flex items-center justify-center">
              <Image
                src={IMAGES.aiBot}
                alt="ProfitPlus AI Trading Bot 3D Brain Illustration"
                fill
                className="object-contain drop-shadow-xl"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
