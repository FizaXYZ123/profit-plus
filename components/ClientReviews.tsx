"use client";

import React, { useRef, useState, useEffect } from "react";

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
  // Triple the reviews so user can scroll indefinitely in either direction
  const duplicatedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth continuous auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.75; // subtle smooth pixels per frame

    const step = () => {
      if (!isPaused && !isDragging && el) {
        el.scrollLeft += speed;
        // Infinite wrap check
        const halfWidth = el.scrollWidth / 2;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth / 2;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Brief pause before resuming auto-scroll
    setTimeout(() => setIsPaused(false), 800);
  };

  // Button arrow navigation
  const scrollByAmount = (offset: number) => {
    if (!scrollRef.current) return;
    setIsPaused(true);
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    setTimeout(() => setIsPaused(false), 2000);
  };

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
        <h2 className="font-outfit font-black text-2xl sm:text-3xl md:text-[38px] text-white tracking-tight text-center mb-8 sm:mb-12">
          What Our Clients Say
        </h2>

        {/* Outer Rounded Container with border matching screenshot - clean without shadows */}
        <div className="relative group rounded-[28px] sm:rounded-[36px] bg-[#063f1f] border border-[#199250]/40 pt-7 pb-6 shadow-none backdrop-blur-sm overflow-hidden">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scrollByAmount(-380)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-lg border border-white/10"
            aria-label="Scroll reviews left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scrollByAmount(380)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer shadow-lg border border-white/10"
            aria-label="Scroll reviews right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* User Scrollable & Auto-scrolling Row */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseEnter={() => setIsPaused(true)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 1500)}
            className={`w-full py-1 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden select-none ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            <div className="flex items-stretch w-max">
              {duplicatedReviews.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[290px] sm:w-[350px] md:w-[370px] bg-white text-zinc-900 rounded-[22px] sm:rounded-[26px] p-5 sm:p-7 shadow-none border-0 flex flex-col justify-between shrink-0 mx-2.5 sm:mx-3 transition-transform duration-200 hover:-translate-y-1 cursor-grab active:cursor-grabbing select-none"
                >
                  {/* Top user profile header */}
                  <div className="flex items-center gap-3">
                    {/* Dark Green Avatar */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#055027] text-white flex items-center justify-center font-outfit font-bold text-sm sm:text-base shrink-0">
                      {item.avatarLetter}
                    </div>

                    {/* Name & Gold Rating Stars */}
                    <div>
                      <h4 className="font-outfit font-bold text-zinc-900 text-sm sm:text-[15px] leading-tight">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-0.5 mt-1 text-[#f59e0b] text-xs sm:text-sm">
                        {"★".repeat(item.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Review Text Body */}
                  <p className="font-manrope text-zinc-700 text-xs sm:text-[13px] leading-relaxed mt-4 font-normal">
                    {item.review}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Pagination Dots */}
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
