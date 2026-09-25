import React from "react";
import Image from "next/image";

export default function AboutCompanyHero() {
  return (
    <section className="relative w-full bg-white pt-28 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Page Title */}
        <h1 className="font-['Outfit'] font-black text-3xl sm:text-4xl md:text-5xl text-[#111827] tracking-tight text-center">
          About Company
        </h1>

        {/* Subtitle */}
        <p className="font-['Manrope'] text-zinc-600 text-sm sm:text-base leading-relaxed text-center max-w-2xl sm:max-w-3xl mx-auto mt-4 px-2">
          ProfitPlus simplifies futures trading with smart automation, helping
          traders execute trades efficiently, manage multiple accounts, and
          reduce manual work through an easy-to-use platform.
        </p>

        {/* 2-Column Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 mt-10 sm:mt-14 items-stretch">
          {/* Card 1: Innovation Driven by Technology (Mint green) */}
          <div className="lg:col-span-5 bg-[#8fdcb7] rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <div className="relative z-10">
              <h2 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-[#06331c] leading-tight max-w-[270px]">
                Innovation Driven by Technology
              </h2>
              <p className="font-['Manrope'] text-[#0a4224] text-[13.5px] sm:text-[14.5px] leading-relaxed mt-3.5 max-w-[290px] sm:max-w-[310px]">
                We combine smart automation with practical trading tools to help
                users simplify their workflows, improve efficiency, and
                navigate futures trading with greater confidence.
              </p>
            </div>

            {/* Glowing Brain Graphic */}
            <div className="relative w-full flex justify-end mt-4 sm:mt-6 -mr-4 -mb-4 pointer-events-none select-none">
              <div className="relative w-40 sm:w-48 md:w-56 h-32 sm:h-36 md:h-40">
                <Image
                  src="/Ai.png"
                  alt="Innovation Driven AI Brain"
                  fill
                  className="object-contain object-bottom-right"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Card 2: Built to Support Modern Traders (Deep Green) */}
          <div className="lg:col-span-7 bg-[#055027] rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <div className="relative z-10">
              <h2 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-white leading-tight">
                Built to Support Modern Traders
              </h2>
              <p className="font-['Manrope'] text-emerald-100/90 text-[13.5px] sm:text-[14.5px] leading-relaxed mt-3.5 max-w-xl">
                ProfitPlus helps traders automate trade execution, manage
                multiple accounts, and simplify futures trading with fast,
                reliable, and easy-to-use tools.
              </p>
            </div>

            {/* Bottom Row Graphics: Line-art Trader on left & Candlestick chart on right */}
            <div className="relative w-full flex items-end justify-between mt-6 sm:mt-8 pt-2 -mb-4 sm:-mb-6">
              {/* Line-Art Trader Climbing Ascending Profit Line */}
              <div className="relative flex items-end -ml-2 sm:-ml-3">
                <svg
                  viewBox="0 0 170 85"
                  className="w-48 sm:w-60 md:w-72 lg:w-80 h-auto text-[#4ade80] stroke-current"
                  fill="none"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Upward Profit Trend Line */}
                  <path d="M 6 74 L 38 58 L 56 64 L 92 28 L 138 12" />
                  {/* Arrowhead on top right */}
                  <path d="M 126 12 L 138 12 L 138 24" />

                  {/* Trader Figure Standing on Chart & Raising Hand */}
                  {/* Head */}
                  <circle cx="88" cy="20" r="5" strokeWidth="2.2" />
                  {/* Body torso */}
                  <path d="M 88 25 L 88 44" />
                  {/* Left Arm holding line */}
                  <path d="M 88 30 L 76 34 L 68 40" />
                  {/* Right Arm raised celebrating */}
                  <path d="M 88 30 L 98 22 L 105 16" />
                  {/* Legs positioned on trend slope */}
                  <path d="M 88 44 L 79 58" />
                  <path d="M 88 44 L 95 56" />

                  {/* Secondary trader figure pushing the trend */}
                  <circle cx="50" cy="38" r="4.5" strokeWidth="2" />
                  <path d="M 50 43 L 50 56" />
                  <path d="M 50 47 L 42 49 L 36 54" />
                  <path d="M 50 47 L 58 45 L 65 42" />
                  <path d="M 50 56 L 44 67" />
                  <path d="M 50 56 L 54 65" />
                </svg>
              </div>

              {/* Candlestick Chart on Right */}
              <div className="relative w-48 sm:w-60 md:w-72 lg:w-80 h-28 sm:h-36 md:h-44 lg:h-48 shrink-0 -mr-2 sm:-mr-4">
                <Image
                  src="/candlestick-chart.png"
                  alt="Futures Candlestick Chart"
                  fill
                  className="object-contain object-bottom-right"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
