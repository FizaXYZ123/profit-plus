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
          <div className="lg:col-span-5 bg-[#8fdcb7] rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-sm transition-transform duration-200 hover:-translate-y-1">
            <div className="relative z-10">
              <h2 className="font-['Outfit'] font-bold text-xl sm:text-2xl text-[#06331c] leading-tight whitespace-nowrap">
                Innovation Driven by Technology
              </h2>
              <p className="font-['Manrope'] text-[#0a4224] text-[13.5px] sm:text-[14.5px] leading-relaxed mt-3.5 max-w-[290px] sm:max-w-[310px]">
                We combine smart automation with practical trading tools to help
                users simplify their workflows, improve efficiency, and
                navigate futures trading with greater confidence.
              </p>
            </div>

            {/* Glowing Brain Graphic */}
            <div className="relative w-full flex justify-end -mx-5 sm:-mx-7 -mb-5 sm:-mb-7 mt-0 pointer-events-none select-none">
              <div className="relative w-full h-28 sm:h-32 md:h-36">
                <Image
                  src="/brain.webp"
                  alt="Innovation Driven AI Brain"
                  fill
                  className="object-contain object-bottom-right h-full w-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Card 2: Built to Support Modern Traders (Deep Green) */}
          <div className="lg:col-span-7 bg-[#055027] rounded-[28px] sm:rounded-[32px] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-sm transition-transform duration-200 hover:-translate-y-1">
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

            {/* Bottom Row Graphics: Illustration on left & Dashes/Chart on right */}
            <div className="relative w-full flex items-end justify-between mt-1 sm:mt-2 -mb-2 sm:-mb-3">
              {/* Trader Illustration (left) */}
              <div className="relative flex items-end -ml-2 sm:-ml-3">
                <div className="relative w-44 sm:w-56 md:w-64 lg:w-72 h-24 sm:h-28 md:h-32">
                  <Image
                    src="/illustration-company.webp"
                    alt="Trader Illustration"
                    fill
                    className="object-contain object-bottom-left"
                  />
                </div>
              </div>

              {/* Dashes / Candlestick Chart (right) */}
              <div className="relative w-40 sm:w-52 md:w-60 lg:w-68 h-24 sm:h-28 md:h-32 shrink-0 -mr-1 sm:-mr-3">
                <Image
                  src="/dashes-company-page.webp"
                  alt="Trading Chart Dashes"
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
