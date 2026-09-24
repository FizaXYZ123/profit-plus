"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/constants/export";

export default function WhatWeOffer() {
  return (
    <section className="relative py-20 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#053b1e] text-white overflow-hidden z-10">
      {/* 3D Perspective Grid Floor on bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 pointer-events-none select-none z-0 opacity-40">
        <Image
          src={IMAGES.gridFloor}
          alt="3D Perspective Grid"
          fill
          className="object-cover object-top"
          unoptimized
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading: "What We Offer" */}
        <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl md:text-[44px] text-white tracking-tight text-center mb-12 sm:mb-16">
          What We Offer
        </h2>

        {/* Main Feature Showcase Card (Crafted in Code) */}
        <div className="w-full rounded-[28px] sm:rounded-[36px] bg-[#0c4021] border border-[#199250]/40 p-7 sm:p-10 lg:p-6 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl lg:text-[32px] text-white leading-tight tracking-tight">
                Smart Futures Trading Automation
              </h3>

              <p className="font-['Manrope'] font-normal text-sm sm:text-base leading-relaxed text-emerald-100/90 mt-5 max-w-xl">
                ProfitPlus helps automate futures trading with fast, reliable,
                and customizable execution. Built to simplify your workflow, it
                can copy trades across multiple accounts, reduce manual tasks,
                and support consistent trading operations. With seamless
                integration and flexible settings, it gives traders greater
                control and confidence while saving valuable time.
              </p>

              {/* Action Button: 'Learn More About the Software' */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block rounded-full border border-white/80 hover:border-white px-7 sm:px-8 py-3 text-white font-['Manrope'] font-medium text-sm sm:text-[15px] hover:bg-white/10 hover:shadow-lg transition-all duration-200"
                >
                  Learn More About the Software
                </Link>
              </div>
            </div>

            {/* Right Column: 3D Future Trading Bot Standalone WebP on Custom Crafted Background */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[370px] min-h-[330px] rounded-[26px] sm:rounded-[30px] overflow-hidden p-6 sm:p-7 flex items-center justify-center border border-white/15 shadow-2xl bg-[#0e3b20]">
                {/* Background Texture: Soft smoky caustic pattern */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={IMAGES.botCardBg}
                    alt="Caustic background pattern"
                    fill
                    className="object-cover opacity-50 mix-blend-screen"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
                </div>

                {/* Standalone 3D Trading Bot Box WebP */}
                <div className="relative z-10 w-full max-w-[270px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:scale-[1.03]">
                  <Image
                    src={IMAGES.tradingBotBox}
                    alt="Future Trading Bot 2025 Edition"
                    width={621}
                    height={786}
                    className="w-full h-auto object-contain block select-none"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
