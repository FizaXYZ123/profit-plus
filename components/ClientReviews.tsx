"use client";

import React from "react";

export interface ReviewItem {
  id: string;
  name: string;
  avatarLetter: string;
  rating: number;
  review: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "review-1",
    name: "Ladwinder Singh Batth",
    avatarLetter: "J",
    rating: 5,
    review:
      '"I started trading 5 years ago in forex and always loosing money due to greed and indiscipline. Since I joined PROFITPLUS team, my account is growing every day wirh the help of BOT and manual Trade given by Team."',
  },
  {
    id: "review-2",
    name: "Sukhjinder Aujla",
    avatarLetter: "J",
    rating: 5,
    review:
      '"I bought 2 months ago, I would like to say I am very happy with bot performance. Your recent update made this bot one of the tops in market. very very happy, thank you"',
  },
  {
    id: "review-3",
    name: "RO",
    avatarLetter: "J",
    rating: 5,
    review:
      '"Team is good and Helpfull; have been working with them since last 1 year and have been trading them.Bot has become better with time but manual traders are good with 80% plus positive trades"',
  },
  {
    id: "review-4",
    name: "Amanpreet Singh",
    avatarLetter: "A",
    rating: 5,
    review:
      '"Best decision for my futures trading. The multi-account copy trading feature executes flawlessly with zero latency. Support team is always active to help whenever needed."',
  },
  {
    id: "review-5",
    name: "Gurjit Dhillon",
    avatarLetter: "G",
    rating: 5,
    review:
      '"ProfitPlus transformed my trading routine. Strict risk management and automated execution keeps emotional FOMO completely out of the equation. Highly recommended!"',
  },
];

export default function ClientReviews() {
  // Duplicate for seamless infinite marquee loop
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="testimonials"
      className="relative text-white py-16 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
      style={{
        backgroundColor: "#005222",
        // @ts-expect-error CSS display-p3 color definition
        backgroundColor: "color(display-p3 0.0196 0.3137 0.1529)",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-black text-2xl sm:text-3xl md:text-[38px] text-white tracking-tight text-center mb-8 sm:mb-12">
          What Our Clients Say
        </h2>

        {/* Outer Rounded Container with border matching screenshot - clean without shadows */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#063f1f] border border-[#199250]/40 pt-7 pb-6 shadow-none backdrop-blur-sm overflow-hidden">
          {/* Continuous Auto-Scrolling Marquee Row - Edge to edge */}
          <div className="overflow-hidden w-full py-1">
            <div className="animate-marquee flex items-stretch">
              {duplicatedReviews.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[290px] sm:w-[350px] md:w-[370px] bg-white text-zinc-900 rounded-[22px] sm:rounded-[26px] p-5 sm:p-7 shadow-none border-0 flex flex-col justify-between shrink-0 mx-2.5 sm:mx-3 transition-transform duration-200 hover:-translate-y-1 cursor-default select-none"
                >
                  {/* Top user profile header */}
                  <div className="flex items-center gap-3">
                    {/* Dark Green Avatar */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#055027] text-white flex items-center justify-center font-['Outfit'] font-bold text-sm sm:text-base shrink-0">
                      {item.avatarLetter}
                    </div>

                    {/* Name & Gold Rating Stars */}
                    <div>
                      <h4 className="font-['Outfit'] font-bold text-zinc-900 text-sm sm:text-[15px] leading-tight">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-0.5 mt-1 text-[#f59e0b] text-xs sm:text-sm">
                        {"★".repeat(item.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Review Text Body */}
                  <p className="font-['Manrope'] text-zinc-700 text-xs sm:text-[13px] leading-relaxed mt-4 font-normal">
                    {item.review}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Pagination Dots matching screenshot */}
          <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
            <span className="w-2 h-2 rounded-full bg-[#199250]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
