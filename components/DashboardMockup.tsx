"use client";

import React from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[614px] px-2">
      {/* Tablet Hardware Bezel: Exact matte slate grey frame matching user screenshot */}
      <div className="relative rounded-[26px] sm:rounded-[32px] bg-[#3e444c] p-3 sm:p-4 shadow-2xl border border-[#4e555e]">
        {/* Top Tablet Camera Dot */}
        <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#272b31] flex items-center justify-center">
          <div className="w-0.5 h-0.5 rounded-full bg-emerald-400/80" />
        </div>

        {/* Screen Container: Exact 570px wide image display (no color filters, raw unoptimized) */}
        <div className="relative w-full rounded-[14px] sm:rounded-[18px] overflow-hidden bg-[#0c1015]">
          <Image
            src={IMAGES.dashboardScreen}
            alt="home-hero-graph"
            width={570}
            height={270}
            className="w-full h-auto sm:h-[270px] object-cover block select-none"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
