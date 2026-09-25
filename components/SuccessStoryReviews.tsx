"use client";

import React from "react";

interface SuccessReview {
  id: string;
  avatar: string;
  name: string;
  rating: number;
  review: string;
}

const SUCCESS_REVIEWS: SuccessReview[] = [
  {
    id: "review-1",
    avatar: "D",
    name: "Davinder Singh Rathaur",
    rating: 5,
    review:
      "“I've tried many services and algorithms, but Profit Plus is the one that truly delivers. Their system is not only profitable but also effective. The team is incredibly supportive, guiding you every step of the way to help you pass EV and handle PA with confidence. Thank you, Profit Plus, for making a real difference.”",
  },
  {
    id: "review-2",
    avatar: "CK",
    name: "Charanpreet Kaur",
    rating: 5,
    review:
      "“My brother offered me this opportunity and i am still learning, its great, useful and helping me in making money while at home along with kids, great opportunity for youger babie's mothers.”",
  },
  {
    id: "review-3",
    avatar: "LS",
    name: "Ladwinder Singh Batth",
    rating: 5,
    review:
      "“I started trading 5 years ago in forex and always loosing money due to greed and indiscipline. Since I joined PROFITPLUS team, my account is growing every day wirh the help of BOT and manual Trade given by Team.”",
  },
  {
    id: "review-4",
    avatar: "S",
    name: "Sukhjinder Aujla",
    rating: 5,
    review:
      "“I bought 2 months ago, I would like to say I am very happy with bot performance. Your recent update made this bot one of the tops in market. very very happy, thank you”",
  },
  {
    id: "review-5",
    avatar: "RO",
    name: "RO",
    rating: 5,
    review:
      "“Team is good and Helpfull; have been working with them since last 1 year and have been trading them. Bot has become better with time but manual traders are good with 80% plus positive trades”",
  },
  {
    id: "review-6",
    avatar: "S",
    name: "Sarabpreet",
    rating: 5,
    review:
      "“I was struggling financially after my wife's road accident, as we were both unable to continue our normal work. With the guidance and support from Profit Plus, I've now nearly replaced my work income through trading. The team is incredibly supportive — guiding you every step of the way, from passing the evaluation to managing the funded account with confidence. Their training, patience, and encouragement have made a huge difference in my journey. Highly recommend Profit Plus to anyone serious about achieving consistent trading success.”",
  },
  {
    id: "review-7",
    avatar: "G",
    name: "Gurmeet Singh",
    rating: 5,
    review: "“Very helpful app”",
  },
];

export default function SuccessStoryReviews() {
  return (
    <section className="w-full bg-white text-zinc-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* 2-Column Review Cards Grid matching user screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-14">
          {SUCCESS_REVIEWS.map((item) => (
            <div key={item.id} className="flex flex-col justify-between">
              {/* Top-Left Double Quote */}
              <div className="text-zinc-900 text-3xl sm:text-4xl font-serif font-black leading-none mb-3 select-none">
                “
              </div>

              {/* Profile Avatar + Name + Stars */}
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#055027] text-white font-['Outfit'] font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm">
                  {item.avatar}
                </div>

                <div>
                  <h3 className="font-['Outfit'] font-bold text-[15px] sm:text-[16.5px] text-zinc-900 leading-snug">
                    {item.name}
                  </h3>
                  <div className="flex items-center text-amber-400 text-xs sm:text-sm tracking-widest mt-0.5 select-none">
                    {"★".repeat(item.rating)}
                  </div>
                </div>
              </div>

              {/* Review Text Body */}
              <p className="font-['Manrope'] text-zinc-700 text-xs sm:text-[13.5px] md:text-[14px] leading-relaxed font-normal flex-1">
                {item.review}
              </p>

              {/* Bottom-Right Double Quote */}
              <div className="flex justify-end mt-2 select-none">
                <span className="text-zinc-900 text-3xl sm:text-4xl font-serif font-black leading-none">
                  ”
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
