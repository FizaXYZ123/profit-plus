"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

// Import core and module Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface SwiperSliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean; pauseOnMouseEnter?: boolean };
  showNavigation?: boolean;
  showPagination?: boolean;
  centeredSlides?: boolean;
  breakpoints?: {
    [width: number]: {
      slidesPerView: number | "auto";
      spaceBetween?: number;
    };
  };
  className?: string;
  slideClassName?: string;
}

export default function SwiperSlider<T>({
  items,
  renderItem,
  slidesPerView = 1,
  spaceBetween = 20,
  loop = true,
  autoplay = { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true },
  showNavigation = true,
  showPagination = true,
  centeredSlides = false,
  breakpoints,
  className = "",
  slideClassName = "",
}: SwiperSliderProps<T>) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const modules = [A11y];
  if (autoplay) modules.push(Autoplay);
  if (showPagination) modules.push(Pagination);
  if (showNavigation) modules.push(Navigation);

  return (
    <div className={`relative w-full group pb-4 ${className}`}>
      {/* Swiper Carousel Instance */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        modules={modules}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        loop={loop && items.length > 2}
        centeredSlides={centeredSlides}
        autoplay={
          autoplay
            ? typeof autoplay === "object"
              ? autoplay
              : { delay: 3500, disableOnInteraction: false }
            : false
        }
        pagination={
          showPagination
            ? {
                clickable: true,
                dynamicBullets: false,
              }
            : false
        }
        breakpoints={
          breakpoints || {
            320: { slidesPerView: 1.25, spaceBetween: 14 },
            640: { slidesPerView: 2.25, spaceBetween: 18 },
            1024: { slidesPerView: 3.5, spaceBetween: 20 },
            1280: { slidesPerView: 4.5, spaceBetween: 24 },
          }
        }
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className={`h-auto ${slideClassName}`}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Brand Navigation Controls */}
      {showNavigation && items.length > 1 && (
        <>
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className={`absolute left-1 sm:-left-3 top-[42%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-zinc-900 border border-zinc-200 shadow-md flex items-center justify-center transition-all duration-200 hover:bg-[#199250] hover:text-white hover:border-[#199250] hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm ${
              !loop && isBeginning ? "opacity-30 pointer-events-none" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <svg
              className="w-4 h-4 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className={`absolute right-1 sm:-right-3 top-[42%] -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 text-zinc-900 border border-zinc-200 shadow-md flex items-center justify-center transition-all duration-200 hover:bg-[#199250] hover:text-white hover:border-[#199250] hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm ${
              !loop && isEnd ? "opacity-30 pointer-events-none" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            <svg
              className="w-4 h-4 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Styled Swiper Pagination Dots */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 3px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 6px !important;
        }
        .swiper-pagination-bullet {
          width: 6px !important;
          height: 6px !important;
          margin: 0 !important;
          border-radius: 9999px !important;
          background: #9ca3af !important;
          opacity: 0.5 !important;
          transition: all 0.25s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #199250 !important;
          opacity: 1 !important;
          transform: scale(1.3) !important;
        }
      `}</style>
    </div>
  );
}
