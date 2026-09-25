import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import { FAQ_PAGE_ITEMS, IMAGES } from "@/constants/export";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Profit Plus",
  description:
    "Find answers to frequently asked questions about Profit Plus, automated futures trading, bot setup, multi-account trade copying, and risk management.",
  openGraph: {
    title: "Frequently Asked Questions — Profit Plus",
    description:
      "Find answers to frequently asked questions about Profit Plus, automated futures trading, bot setup, and risk management.",
  },
};

export default function FAQPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section: Dark Forest Green with Stock Chart Vector */}
      <section className="relative w-full bg-[#012615] pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden lg:h-[466px]">
        {/* Centered Main Title */}
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
            Frequently Asked Questions
          </h1>
        </div>

        {/* Decorative Green Upward Trend Arrow from public/arrow.webp */}
        <div className="absolute bottom-0 left-0 pointer-events-none select-none z-0">
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

      {/* Main FAQs Accordion Section on Pure White Background */}
      <section className="relative w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Reusable Accordion Component matching the design */}
          <Accordion
            items={FAQ_PAGE_ITEMS}
            allowMultiple={false}
            className="space-y-3.5 sm:space-y-4"
            itemClassName="rounded-[14px] sm:rounded-[16px] border border-neutral-300 bg-white transition-all duration-200 overflow-hidden hover:border-neutral-400 shadow-xs"
            headerClassName="w-full text-left px-5 sm:px-7 py-4.5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#199250] transition-colors"
            titleClassName="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight"
            contentClassName="px-5 sm:px-7 pb-5 pt-1 text-zinc-600 font-['Manrope'] text-sm sm:text-[18px] leading-relaxed"
            iconClassName="shrink-0 w-6 h-6 flex items-center justify-center text-zinc-900 transition-transform duration-300"
          />
        </div>
      </section>
    </main>
  );
}
