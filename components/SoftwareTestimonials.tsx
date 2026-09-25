"use client";

import React, { useRef, useEffect } from "react";

const TESTIMONIALS = [
  {
    initial: "J",
    name: "Charanpreet Kaur",
    rating: 5,
    quote:
      "My brother offered me this opportunity and i am still learning, its great, useful and helping me in making money while at home along with kids, great opportunity for youger babie's mothers.",
  },
  {
    initial: "J",
    name: "Ladwinder Singh Batth",
    rating: 5,
    quote:
      "I started trading 5 years ago in forex and always loosing money due to greed and indiscipline. Since I joined PROFITPLUS team, my account is growing every day wirh the help of BOT and manual Trade given by Team.",
  },
  {
    initial: "J",
    name: "Sukhjinder Aujla",
    rating: 5,
    quote:
      "I bought 2 months ago, I would like to say I am very happy with bot performance. Your recent update made this bot one of the tops in market. very very happy, thank you",
  },
  {
    initial: "J",
    name: "RO",
    rating: 5,
    quote:
      "Team is good and Helpfull; have been working with them since last 1 year and have been trading them. Bot has become better with time but manual traders are good with 80% plus positive trades",
  },
];

export default function SoftwareTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  // Auto-scroll loop using requestAnimationFrame (continuous, smooth)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const step = () => {
      if (container && !isDragging.current && !isHovered.current) {
        container.scrollLeft += 1;
        // Seamless wrap-around when reaching midpoint of duplicated list
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Manual Drag-to-Scroll Handlers (User khud bhi drag/scroll kar sake)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;

    // Loop wrap during manual scroll
    if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
      scrollRef.current.scrollLeft -= scrollRef.current.scrollWidth / 2;
      scrollLeftPos.current = scrollRef.current.scrollLeft;
      startX.current = x;
    } else if (scrollRef.current.scrollLeft <= 0) {
      scrollRef.current.scrollLeft += scrollRef.current.scrollWidth / 2;
      scrollLeftPos.current = scrollRef.current.scrollLeft;
      startX.current = x;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    isHovered.current = false;
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  // Duplicated list for seamless infinite loop
  const duplicatedList = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
  ];

  return (
    <section
      className="testimonials-section w-full text-white pt-6 sm:pt-10 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{ backgroundColor: "#005222" }}
    >
      {/* Subtle radial emerald background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] pointer-events-none select-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(25, 146, 80, 0.18) 0%, rgba(0, 82, 34, 0) 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-['Outfit'] font-bold text-3xl sm:text-5xl md:text-[52px] text-white tracking-tight">
            Testimonials
          </h2>
        </div>

        {/* Outer Rounded Container Card with exact Figma specs */}
        <div
          className="testimonials-container-card w-full p-4 sm:p-6 md:p-8 overflow-hidden"
          style={{
            borderRadius: "40px",
            border: "1px solid #969696",
            backgroundColor: "rgba(212, 212, 212, 0.10)",
            backdropFilter: "blur(17.5px)",
            WebkitBackdropFilter: "blur(17.5px)",
          }}
        >
          {/* Draggable & Auto-scrolling Carousel: auto scrolls from right, user can drag left/right */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-6 overflow-x-auto py-2 select-none cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {duplicatedList.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 bg-white text-zinc-900 rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-shadow duration-200"
              >
                <div>
                  {/* Author Header: Avatar circle + Name & Rating */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#054020] text-white font-['Outfit'] font-bold text-sm flex items-center justify-center shrink-0">
                      {item.initial}
                    </div>
                    <div>
                      <h4 className="font-['Outfit'] font-bold text-sm sm:text-base text-zinc-900 leading-tight">
                        {item.name}
                      </h4>
                      {/* 5 Yellow Stars */}
                      <div className="flex items-center gap-0.5 text-[#fbbf24] text-xs sm:text-sm mt-0.5">
                        {"★".repeat(item.rating)}
                      </div>
                    </div>
                  </div>

                  {/* Review Quote */}
                  <p className="font-['Manrope'] text-xs sm:text-[13px] text-[#374151] leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
