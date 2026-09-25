"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BookDemoModal from "./BookDemoModal";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 4 Certificates: 2 White, 2 Black
const POPUP_CERTIFICATES = [
  {
    id: "white-1",
    title: "Lifetime Payout Certificate - Bikramjeet Singh",
    src: "/certificate_black/topone-1-e1763958304851.webp",
    category: "Prop Payout",
  },
  {
    id: "white-2",
    title: "ProfitTrade Payout Certificate",
    src: "/certificate_white/profitrade-1-e1763958930228.webp",
    category: "Prop Payout",
  },
  {
    id: "black-1",
    title: "Profit Plus Payout Certificate",
    src: "/certificate_black/profit-certificate-e1763958434875.webp",
    category: "Prop Payout",
  },
];

export default function SuccessStoriesPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  // Check first-time open on home page mount
  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem("hasSeenSuccessStoriesPopup");
      const forceShow =
        typeof window !== "undefined" &&
        window.location.search.includes("popup=true");

      if (!hasSeen || forceShow) {
        // Small delay for smooth entrance after page loads
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if sessionStorage is disabled
      setIsOpen(true);
    }
  }, []);

  // Handle Close
  const handleClose = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem("hasSeenSuccessStoriesPopup", "true");
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  // Keyboard navigation (Escape to close, Left/Right arrows to slide)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") {
        swiperRef.current?.slidePrev();
      }
      if (e.key === "ArrowRight") {
        swiperRef.current?.slideNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  const handleBookDemoClick = () => {
    handleClose();
    setIsDemoModalOpen(true);
  };

  return (
    <>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-stories-title"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={handleClose}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-[560px] bg-zinc-950/95 border border-zinc-800/90 rounded-[28px] p-5 sm:p-7 flex flex-col items-center shadow-2xl shadow-black/80 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button (X) */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer z-30"
              aria-label="Close dialog"
            >
              <svg
                className="w-4 h-4 stroke-current"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Modal Heading: Checkout Our Success Stories */}
            <h2
              id="success-stories-title"
              className="font-['Outfit'] font-bold text-2xl sm:text-3xl text-white tracking-tight text-center mb-4 sm:mb-5 pr-8 pl-8 leading-snug"
            >
              Checkout Our Success Stories
            </h2>

            {/* Infinite Auto-Scroll Swiper Carousel Area */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden group/popup">
              <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 2800,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "custom-popup-bullet",
                  bulletActiveClass: "custom-popup-bullet-active",
                }}
                className="w-full h-full rounded-2xl"
              >
                {POPUP_CERTIFICATES.map((cert) => (
                  <SwiperSlide key={cert.id} className="w-full h-full flex items-center justify-center">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-zinc-200/80 shadow-inner flex items-center justify-center p-2">
                      <Image
                        src={cert.src}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 640px) 90vw, 520px"
                        className="object-contain p-1 rounded-xl select-none"
                        priority
                        unoptimized
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Previous Slide Arrow Button */}
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous Certificate"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-[#199250] text-white flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/popup:opacity-100 cursor-pointer shadow-md backdrop-blur-xs"
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

              {/* Next Slide Arrow Button */}
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next Certificate"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-[#199250] text-white flex items-center justify-center transition-all opacity-80 sm:opacity-0 group-hover/popup:opacity-100 cursor-pointer shadow-md backdrop-blur-xs"
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
            </div>

            {/* Custom Pagination Bullet Styles */}
            <style jsx global>{`
              .swiper-pagination {
                position: relative !important;
                margin-top: 14px !important;
                bottom: 0 !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                gap: 6px !important;
              }
              .custom-popup-bullet {
                display: inline-block !important;
                height: 7px !important;
                width: 7px !important;
                border-radius: 9999px !important;
                background-color: #52525b !important;
                opacity: 0.7 !important;
                cursor: pointer !important;
                transition: all 0.3s ease !important;
              }
              .custom-popup-bullet-active {
                width: 22px !important;
                background-color: #199250 !important;
                opacity: 1 !important;
                border-radius: 6px !important;
              }
            `}</style>

            {/* Bottom Action Pill Buttons: "Book a Demo" & "View More" */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 w-full">
              <button
                type="button"
                onClick={handleBookDemoClick}
                className="flex-1 max-w-[170px] sm:max-w-[190px] py-2.5 sm:py-3 rounded-full bg-[#199250] hover:bg-[#0e743e] active:scale-95 text-white font-['Manrope'] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-[#199250]/25 text-center cursor-pointer"
              >
                Book a Demo
              </button>

              <Link
                href="/success-story"
                onClick={handleClose}
                className="flex-1 max-w-[170px] sm:max-w-[190px] py-2.5 sm:py-3 rounded-full bg-[#199250] hover:bg-[#0e743e] active:scale-95 text-white font-['Manrope'] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md shadow-[#199250]/25 text-center flex items-center justify-center cursor-pointer"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Book Demo Modal triggered via "Book a Demo" button */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
}
