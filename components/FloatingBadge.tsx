"use client";

import React from "react";

export type BadgeType = "ai" | "globe" | "pie" | "candlestick";

interface FloatingBadgeProps {
  type: BadgeType;
  className?: string;
  delay?: string;
}

export default function FloatingBadge({
  type,
  className = "",
  delay = "0s",
}: FloatingBadgeProps) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`relative group cursor-pointer transition-transform duration-300 hover:scale-110 animate-float ${className}`}
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#199250]/40 to-[#055027]/40 rounded-2xl blur-xs opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* Glass card container: Slightly bigger, well-proportioned size */}
      <div className="relative w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-[#042614]/90 backdrop-blur-md border border-[#199250]/60 shadow-xl flex items-center justify-center p-2 overflow-hidden">
        {/* Specular glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent pointer-events-none" />

        {/* 1. Badge: AI Chip (Original Green Microchip with Pins & Bold AI) */}
        {type === "ai" && (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Top/Bottom Outer Pins */}
            <div className="absolute top-0.5 left-2 right-2 flex justify-between">
              <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full" />
            </div>
            <div className="absolute bottom-0.5 left-2 right-2 flex justify-between">
              <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full" />
            </div>
            <div className="absolute left-0.5 top-2 bottom-2 flex flex-col justify-between">
              <span className="w-1.5 h-0.5 bg-emerald-400 rounded-full" />
              <span className="w-1.5 h-0.5 bg-emerald-400 rounded-full" />
            </div>
            <div className="absolute right-0.5 top-2 bottom-2 flex flex-col justify-between">
              <span className="w-1.5 h-0.5 bg-emerald-400 rounded-full" />
              <span className="w-1.5 h-0.5 bg-emerald-400 rounded-full" />
            </div>

            {/* Chip core */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#199250] to-[#055027] border border-emerald-400/80 flex items-center justify-center shadow-inner">
              <span className="font-['Outfit'] font-black text-white text-sm sm:text-base tracking-tight drop-shadow-xs">
                AI
              </span>
            </div>
          </div>
        )}

        {/* 2. Badge: Wireframe Globe (Glowing Emerald Lines) */}
        {type === "globe" && (
          <div className="relative w-full h-full flex items-center justify-center text-emerald-300">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-[0_0_6px_rgba(52,211,153,0.6)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <path d="M12 3a14 14 0 0 1 3.5 9 14 14 0 0 1-3.5 9 14 14 0 0 1-3.5-9 14 14 0 0 1 3.5-9z" />
            </svg>
          </div>
        )}

        {/* 3. Badge: Multi-colored Segmented Pie Chart */}
        {type === "pie" && (
          <div className="relative w-full h-full flex items-center justify-center">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-sm"
              viewBox="0 0 36 36"
            >
              <circle
                cx="18"
                cy="18"
                r="13"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="6"
                strokeDasharray="40 100"
                strokeDashoffset="25"
              />
              <circle
                cx="18"
                cy="18"
                r="13"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="6"
                strokeDasharray="30 100"
                strokeDashoffset="65"
              />
              <circle
                cx="18"
                cy="18"
                r="13"
                fill="none"
                stroke="#199250"
                strokeWidth="6"
                strokeDasharray="30 100"
                strokeDashoffset="95"
              />
            </svg>
          </div>
        )}

        {/* 4. Badge: Candlestick Stock Chart (Upward Line + Red & Green Candles) */}
        {type === "candlestick" && (
          <div className="relative w-full h-full flex flex-col justify-end p-0.5">
            {/* White upward arrow line */}
            <svg
              className="absolute inset-0 w-full h-full text-white/90 drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 28 16 18 24 22 34 10" />
              <polyline points="28 10 34 10 34 16" />
            </svg>

            {/* Candlestick bars */}
            <div className="flex items-end justify-between px-1 h-6 z-10">
              <div className="flex flex-col items-center">
                <span className="w-0.5 h-0.5 bg-[#ef4444]" />
                <span className="w-1.5 h-3 bg-[#ef4444] rounded-xs shadow-xs" />
                <span className="w-0.5 h-0.5 bg-[#ef4444]" />
              </div>
              <div className="flex flex-col items-center">
                <span className="w-0.5 h-0.5 bg-[#ef4444]" />
                <span className="w-1.5 h-3.5 bg-[#ef4444] rounded-xs shadow-xs" />
                <span className="w-0.5 h-0.5 bg-[#ef4444]" />
              </div>
              <div className="flex flex-col items-center">
                <span className="w-0.5 h-0.5 bg-[#22c55e]" />
                <span className="w-1.5 h-4 bg-[#22c55e] rounded-xs shadow-xs" />
                <span className="w-0.5 h-0.5 bg-[#22c55e]" />
              </div>
              <div className="flex flex-col items-center">
                <span className="w-0.5 h-1 bg-[#22c55e]" />
                <span className="w-1.5 h-5 bg-[#22c55e] rounded-xs shadow-sm shadow-[#22c55e]/50" />
                <span className="w-0.5 h-0.5 bg-[#22c55e]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
