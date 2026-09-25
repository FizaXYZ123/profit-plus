"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/constants/export";

export default function AboutSoftwareHero() {
  return (
    <section className="relative min-h-[560px] sm:min-h-[640px] md:min-h-[700px] pt-28 sm:pt-36 md:pt-40 pb-0 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between overflow-hidden bg-[#032010]">
      {/* Ambient subtle emerald glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[340px] pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(25, 146, 80, 0.16) 0%, rgba(3, 32, 16, 0) 70%)",
        }}
      />

      {/* Left Side Candlestick Chart (candle-softwear2.png) */}
      <div className="absolute -left-2 sm:left-0 md:left-2 top-4 sm:top-6 md:top-8 bottom-10 sm:bottom-14 md:bottom-18 w-[160px] sm:w-[240px] md:w-[320px] lg:w-[400px] xl:w-[440px] pointer-events-none select-none z-10">
        <div className="relative w-full h-full">
          <Image
            src={IMAGES.candleSoftware2}
            alt="Candlestick Chart Downtrend"
            fill
            className="object-contain object-left-bottom"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Right Side Candlestick Chart (candle-softwear.png) */}
      <div className="absolute -right-2 sm:right-0 md:right-2 lg:right-4 top-10 sm:top-16 md:top-24 -bottom-6 sm:-bottom-10 md:-bottom-12 w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px] xl:w-[460px] pointer-events-none select-none z-10">
        <div className="relative w-full h-full">
          <Image
            src={IMAGES.candleSoftware}
            alt="Candlestick Chart Uptrend"
            fill
            className="object-contain object-right-bottom"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Center Text Header & CTA */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h1 className="font-['Outfit'] font-bold text-3xl sm:text-5xl md:text-[58px] text-white tracking-tight leading-tight">
          About Software
        </h1>

        <p className="font-['Manrope'] font-normal text-xs sm:text-sm md:text-[15px] text-[#e5e7eb] max-w-2xl sm:max-w-3xl mx-auto mt-3 sm:mt-4 leading-relaxed">
          Profit Plus stands at the forefront of innovative financial management
          solutions, offering businesses a robust platform to streamline operations,
          maximize trades, and achieve sustainable growth..
        </p>

        {/* Book a Demo Button */}
        <div className="mt-4 sm:mt-5 md:mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-['Manrope'] font-bold text-xs sm:text-sm text-white px-7 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#199250] hover:bg-[#055027] active:scale-95 transition-all duration-200 shadow-md shadow-[#199250]/40 hover:shadow-[#055027]/50"
          >
            Book a Demo
          </Link>
        </div>
      </div>

      {/* Centerpiece Laptop Mockup Display */}
      <div className="relative z-20 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[540px] mx-auto mt-6 sm:mt-8 md:mt-10 flex justify-center items-end leading-none">
        <Image
          src={IMAGES.laptop}
          alt="Profit Plus Futures Trading Automation Software Laptop Display"
          width={1200}
          height={640}
          className="w-full h-auto object-contain block drop-shadow-2xl"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
