"use client";

import React from "react";
import Image from "next/image";
import SwiperSlider from "./SwiperSlider";

export interface CertificateItem {
  id: string;
  title: string;
  image: string;
  aspectClass: string;
}

// 1. White Certificates (Apex Trader Funding Payouts)
const WHITE_CERTIFICATES: CertificateItem[] = [
  {
    id: "white-1",
    title: "Apex Trader Funding Payout Certificate",
    image: "/certificate_white/apex-trader-1-e1763961354448.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-2",
    title: "Apex Trader Funding Payout Certificate",
    image: "/certificate_white/apex-trader-2-e1763961431300.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-3",
    title: "Apex Trader Funding Payout Certificate",
    image: "/certificate_white/apex-trader-3-e1763961463140.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-4",
    title: "Apex Trader Funding Payout Certificate",
    image: "/certificate_white/apex-trader-4-e1763961623889.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-5",
    title: "Apex Trader Funding Payout Certificate",
    image: "/certificate_white/apex-trader-5-e1763961662542.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-6",
    title: "Apex Trader Funding Payout Certificate",
    image: "/certificate_white/apex-trader-6-e1763961693955.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-7",
    title: "Apex Trader Funding Payout Certificate",
    image: "/certificate_white/apex-trader-7-e1763961727246.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-8",
    title: "Apex Trader Funding Payout Certificate",
    image: "/certificate_white/apex-trader-8-e1763961758812.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-9",
    title: "Apex Trader Funding Payout Certificate",
    image: "/certificate_white/apex-trader-9-e1763961801142.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-10",
    title: "Profitrade Payout Certificate",
    image: "/certificate_white/profitrade-1-e1763958930228.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-11",
    title: "Profitrade Payout Certificate",
    image: "/certificate_white/profitrade-2-e1763958906662.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-12",
    title: "Profitrade Payout Certificate",
    image: "/certificate_white/profitrade-3-e1763958880178.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-13",
    title: "Profitrade Payout Certificate",
    image: "/certificate_white/profitrade-4-e1763958579669.webp",
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "white-14",
    title: "Profitrade Payout Certificate",
    image: "/certificate_white/profitrade-5-e1763958840468.webp",
    aspectClass: "aspect-[4/3]",
  },
];

// 2. Black Certificates (Tradeify, Funded Future, Fast Track, TakeProfit, TopOne)
const BLACK_CERTIFICATES: CertificateItem[] = [
  {
    id: "black-1",
    title: "Tradeify Verified Trader Payout",
    image: "/certificate_black/tradeify-1-e1763958392253.webp",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "black-2",
    title: "Tradeify Verified Trader Payout ($68,200)",
    image: "/certificate_black/tradeify-2-e1763958525798.webp",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "black-3",
    title: "Profit Certificate",
    image: "/certificate_black/profit-certificate-e1763958434875.webp",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "black-4",
    title: "Funded Future Payout Certificate",
    image: "/certificate_black/funded-future-1-e1763962000444.webp",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "black-5",
    title: "Funded Future Payout Certificate",
    image: "/certificate_black/funded-future-2-e1763962070763.webp",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "black-6",
    title: "Funded Future Payout Certificate",
    image: "/certificate_black/funded-future-3-e1763959343406.webp",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "black-7",
    title: "Fast Track Trading Payout Certificate",
    image: "/certificate_black/fast-track-1-e1763961976830.webp",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "black-8",
    title: "TakeProfit Trader Payout Certificate",
    image: "/certificate_black/takeprofit-1-e1763961216206.webp",
    aspectClass: "aspect-[16/10]",
  },
  {
    id: "black-9",
    title: "TopOne Trader Payout Certificate",
    image: "/certificate_black/topone-1-e1763958304851.webp",
    aspectClass: "aspect-[16/10]",
  },
];

// 3. Blue Certificates (Apex Trader Funding Vertical Awards)
const BLUE_CERTIFICATES: CertificateItem[] = [
  {
    id: "blue-1",
    title: "Apex Trader Funding Certificate of Funding",
    image: "/certificate_blue/apex-trader-p-1.webp",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "blue-2",
    title: "Apex Trader Funding Certificate of Funding",
    image: "/certificate_blue/apex-trader-p-2.webp",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "blue-3",
    title: "ATF Trader Funding Milestone",
    image: "/certificate_blue/ATF-1.webp",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "blue-4",
    title: "ATF Trader Funding Milestone",
    image: "/certificate_blue/ATF-2.webp",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "blue-5",
    title: "ATF Trader Funding Milestone",
    image: "/certificate_blue/ATF-3.webp",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "blue-6",
    title: "ATF Trader Funding Milestone",
    image: "/certificate_blue/ATF-4.webp",
    aspectClass: "aspect-[3/4]",
  },
];

export default function AchievementsSection() {
  return (
    <section className="relative w-full bg-white text-zinc-900 pt-4 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      <div className="max-w-[1340px] mx-auto">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl md:text-[34px] text-[#111827] tracking-tight text-center mb-8 sm:mb-12">
          Achievements
        </h2>

        {/* 1. White Certificates Row (Step 1: White) */}
        <div className="w-full mb-10 sm:mb-14">
          <SwiperSlider
            items={WHITE_CERTIFICATES}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              320: { slidesPerView: 1.25, spaceBetween: 12 },
              640: { slidesPerView: 2.3, spaceBetween: 16 },
              1024: { slidesPerView: 3.8, spaceBetween: 18 },
              1280: { slidesPerView: 4.5, spaceBetween: 20 },
            }}
            renderItem={(item) => (
              <div className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-zinc-200 shadow-sm flex items-center justify-center p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                  className="object-contain p-1 rounded-lg"
                  unoptimized
                />
              </div>
            )}
          />
        </div>

        {/* 2. Black Certificates Row (Step 2: Black) */}
        <div className="w-full mb-10 sm:mb-14 ">
          <SwiperSlider
            items={BLACK_CERTIFICATES}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              320: { slidesPerView: 1.25, spaceBetween: 12 },
              640: { slidesPerView: 2.3, spaceBetween: 16 },
              1024: { slidesPerView: 3.8, spaceBetween: 18 },
              1280: { slidesPerView: 4.5, spaceBetween: 20 },
            }}
            renderItem={(item) => (
              <div className="relative w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-sm flex items-center justify-center p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 25vw"
                  className="object-contain p-1 rounded-lg"
                  unoptimized
                />
              </div>
            )}
          />
        </div>

        {/* 3. Blue Certificates Row (Step 3: Blue) */}
        <div className="w-full">
          <SwiperSlider
            items={BLUE_CERTIFICATES}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              320: { slidesPerView: 1.35, spaceBetween: 12 },
              640: { slidesPerView: 2.6, spaceBetween: 16 },
              1024: { slidesPerView: 4.2, spaceBetween: 18 },
              1280: { slidesPerView: 5.2, spaceBetween: 20 },
            }}
            renderItem={(item) => (
              <div className="relative w-full aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-[#07162c] border border-blue-900/60 shadow-sm flex items-center justify-center p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 70vw, (max-width: 1024px) 35vw, 20vw"
                  className="object-contain p-1 rounded-lg"
                  unoptimized
                />
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
