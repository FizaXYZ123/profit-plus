import React from "react";

const ABOUT_WHY_CHOOSE_CARDS = [
  {
    id: "smart-trading",
    title: "Smart Trading Technology",
    description:
      "We build automation tools that simplify futures trading and help users manage trade execution with greater speed, accuracy, and consistency.",
    iconType: "technology",
  },
  {
    id: "reliable-automation",
    title: "Reliable Automation",
    description:
      "ProfitPlus is designed to reduce manual tasks through intelligent trade automation and flexible multi-account management, making daily trading more efficient.",
    iconType: "automation",
  },
  {
    id: "built-for-performance",
    title: "Built for Performance",
    description:
      "Our platform is optimized for stability, fast execution, and a seamless user experience, helping traders stay focused on their strategies.",
    iconType: "performance",
  },
  {
    id: "customer-support",
    title: "Dedicated Customer Support",
    description:
      "From onboarding to ongoing assistance, our support team is here to answer questions and help you get the most out of the ProfitPlus platform.",
    iconType: "support",
  },
];

export default function AboutCompanyWhyChooseUs() {
  return (
    <section className="relative w-full bg-white text-zinc-900 pt-16 sm:pt-20 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      {/* Left Candlestick Watermark */}
      <div
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-25 sm:opacity-35 hidden md:block"
        aria-hidden="true"
      >
        <svg width="60" height="260" viewBox="0 0 60 260" fill="none">
          {/* Faint pastel green and red candlesticks */}
          <line x1="12" y1="20" x2="12" y2="80" stroke="#f43f5e" strokeWidth="1.5" />
          <rect x="7" y="35" width="10" height="30" rx="1.5" fill="#fda4af" />

          <line x1="26" y1="50" x2="26" y2="120" stroke="#10b981" strokeWidth="1.5" />
          <rect x="21" y="65" width="10" height="40" rx="1.5" fill="#a7f3d0" />

          <line x1="40" y1="100" x2="40" y2="180" stroke="#10b981" strokeWidth="1.5" />
          <rect x="35" y="115" width="10" height="50" rx="1.5" fill="#a7f3d0" />

          <line x1="54" y1="150" x2="54" y2="230" stroke="#f43f5e" strokeWidth="1.5" />
          <rect x="49" y="170" width="10" height="35" rx="1.5" fill="#fda4af" />
        </svg>
      </div>

      {/* Right Candlestick Watermark */}
      <div
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-25 sm:opacity-35 hidden md:block"
        aria-hidden="true"
      >
        <svg width="60" height="260" viewBox="0 0 60 260" fill="none">
          {/* Faint pastel green and red candlesticks */}
          <line x1="10" y1="160" x2="10" y2="240" stroke="#10b981" strokeWidth="1.5" />
          <rect x="5" y="175" width="10" height="45" rx="1.5" fill="#a7f3d0" />

          <line x1="24" y1="110" x2="24" y2="190" stroke="#f43f5e" strokeWidth="1.5" />
          <rect x="19" y="130" width="10" height="35" rx="1.5" fill="#fda4af" />

          <line x1="38" y1="60" x2="38" y2="140" stroke="#10b981" strokeWidth="1.5" />
          <rect x="33" y="75" width="10" height="45" rx="1.5" fill="#a7f3d0" />

          <line x1="52" y1="20" x2="52" y2="90" stroke="#10b981" strokeWidth="1.5" />
          <rect x="47" y="35" width="10" height="30" rx="1.5" fill="#a7f3d0" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl md:text-[42px] text-[#111827] tracking-tight text-center">
          Why Choose ProfitPlus
        </h2>

        {/* 2x2 Responsive Card Grid with Notches */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 sm:gap-y-14 gap-x-6 sm:gap-x-8 w-full mt-12 sm:mt-16">
          {ABOUT_WHY_CHOOSE_CARDS.map((card) => (
            <div
              key={card.id}
              className="relative bg-[#055027] rounded-[26px] sm:rounded-[30px] pt-12 sm:pt-14 pb-8 sm:pb-9 px-6 sm:px-10 text-center flex flex-col items-center justify-start transition-transform duration-200 hover:-translate-y-1 shadow-sm"
            >
              {/* SVG Top Cutout Notch: Smooth concave cradle */}
              <svg
                className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[98px] sm:w-[104px] h-[34px] sm:h-[36px] pointer-events-none z-10"
                viewBox="0 0 100 32"
                fill="none"
              >
                <path
                  d="M 0 0 C 14 0 18 28 32 28 L 68 28 C 82 28 86 0 100 0 L 100 -6 L 0 -6 Z"
                  fill="#ffffff"
                />
              </svg>

              {/* White Top Badge with Green Vector Icon */}
              <div className="absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2 w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] rounded-[16px] sm:rounded-[18px] bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-zinc-100 z-20">
                {/* 1. Smart Trading Technology */}
                {card.iconType === "technology" && (
                  <svg
                    className="w-7 h-7 text-[#055027]"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="26" height="17" rx="2.5" />
                    <line x1="3" y1="9" x2="29" y2="9" strokeWidth="1.5" />
                    <circle cx="6" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                    <circle cx="8.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
                    <polyline points="7 16 12 12 17 15 24 10" strokeWidth="2" />
                    <circle cx="7" cy="16" r="1.2" fill="currentColor" stroke="none" />
                    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
                    <circle cx="17" cy="15" r="1.2" fill="currentColor" stroke="none" />
                    <circle cx="24" cy="10" r="1.2" fill="currentColor" stroke="none" />
                    <circle cx="8" cy="21.5" r="4.5" fill="white" stroke="currentColor" strokeWidth="2" />
                    <polyline points="8 19 8 21.5 10 21.5" strokeWidth="1.8" />
                  </svg>
                )}

                {/* 2. Reliable Automation */}
                {card.iconType === "automation" && (
                  <svg
                    className="w-7 h-7 text-[#055027]"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="16" cy="16" r="5" />
                    <path d="M16 8v2.5M16 21.5v2.5M8 16h2.5M21.5 16h2.5M10.3 10.3l1.8 1.8M19.9 19.9l1.8 1.8M10.3 21.7l1.8-1.8M19.9 12.1l1.8-1.8" />
                    <text
                      x="13.2"
                      y="19"
                      fontSize="9"
                      fontWeight="bold"
                      fill="currentColor"
                      stroke="none"
                      fontFamily="sans-serif"
                    >
                      $
                    </text>
                    <path d="M8 11A10.5 10.5 0 0 1 24 9" strokeWidth="1.8" />
                    <polyline points="20 6.5 24.5 9 21.5 12" strokeWidth="1.8" />
                    <path d="M24 21A10.5 10.5 0 0 1 8 23" strokeWidth="1.8" />
                    <polyline points="12 25.5 7.5 23 10.5 20" strokeWidth="1.8" />
                  </svg>
                )}

                {/* 3. Built for Performance */}
                {card.iconType === "performance" && (
                  <svg
                    className="w-7 h-7 text-[#055027]"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="2" y1="12" x2="6.5" y2="12" strokeWidth="2.2" />
                    <line x1="1" y1="16.5" x2="7.5" y2="16.5" strokeWidth="2.2" />
                    <line x1="3" y1="21" x2="7" y2="21" strokeWidth="2.2" />
                    <circle cx="18" cy="16.5" r="9" />
                    <polyline
                      points="13.5 16.5 16.5 19.5 22.5 13"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                {/* 4. Dedicated Customer Support */}
                {card.iconType === "support" && (
                  <svg
                    className="w-7 h-7 text-[#055027]"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 16 A9 9 0 0 1 25 16" strokeWidth="2.2" />
                    <rect x="4.5" y="15" width="4" height="7" rx="2" fill="currentColor" />
                    <rect x="23.5" y="15" width="4" height="7" rx="2" fill="currentColor" />
                    <path d="M25 21v2a3.5 3.5 0 0 1-3.5 3.5h-3.5" strokeWidth="2" />
                    <path
                      d="M11 11h9a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-2l-3 2.5V19h-4a2.5 2.5 0 0 1-2.5-2.5v-3A2.5 2.5 0 0 1 11 11z"
                      fill="currentColor"
                      stroke="none"
                    />
                    <circle cx="13.5" cy="15" r="1" fill="white" stroke="none" />
                    <circle cx="17.5" cy="15" r="1" fill="white" stroke="none" />
                  </svg>
                )}
              </div>

              {/* Card Title */}
              <h3 className="font-['Outfit'] font-bold text-[20px] sm:text-[22px] text-white tracking-tight leading-snug">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="font-['Manrope'] font-normal text-[13.5px] sm:text-[14.5px] leading-relaxed text-white/95 mt-3 sm:mt-3.5 max-w-[460px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
