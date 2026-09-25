"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMAGES, NAV_LINKS } from "@/constants/export";
import BookDemoModal from "@/components/BookDemoModal";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  // Sliding pill state
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navListRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Get the active index from NAV_LINKS
  const activeIdx = NAV_LINKS.findIndex((item) =>
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href ||
        pathname.startsWith(`${item.href}/`) ||
        (item.label === "Success Story" &&
          (pathname === "/success-story" || pathname === "/portfolio"))
  );

  // Update pill to a specific item
  const movePillTo = useCallback((el: HTMLAnchorElement | null) => {
    if (!el || !navListRef.current) return;
    const listRect = navListRef.current.getBoundingClientRect();
    const itemRect = el.getBoundingClientRect();
    setPillStyle({
      left: itemRect.left - listRect.left,
      width: itemRect.width,
      opacity: 1,
    });
  }, []);

  // On pathname change, move pill to active item (no hover override)
  useEffect(() => {
    if (activeIdx >= 0 && itemRefs.current[activeIdx]) {
      movePillTo(itemRefs.current[activeIdx]);
    } else {
      setPillStyle((s) => ({ ...s, opacity: 0 }));
    }
  }, [pathname, activeIdx, movePillTo]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-3 sm:px-6">
      {/* Floating White Pill Container matching user's design */}
      <nav className="max-w-7xl mx-auto bg-white/95 backdrop-blur-md text-zinc-900 rounded-full px-5 sm:px-8 py-2.5 sm:py-3 shadow-2xl border border-white/60 flex items-center justify-between transition-all duration-300 hover:shadow-emerald-950/20">
        {/* Brand Logo with exact exported asset */}
        <Link href="/" className="flex items-center gap-2 select-none group">
          <div className="relative h-9 sm:h-11 w-32 sm:w-40 flex items-center">
            <Image
              src={IMAGES.logo}
              alt="Profit Plus Logo"
              width={200}
              height={55}
              className="object-contain max-h-9 sm:max-h-11 w-auto"
              priority
              unoptimized
            />
          </div>
        </Link>

        {/* Center/Right Nav Links with Proper Routing */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          {/* Desktop sliding pill nav */}
          <ul
            ref={navListRef}
            className="hidden lg:flex items-center gap-1 xl:gap-2 font-['Manrope'] text-[13.5px] xl:text-sm relative"
          >
            {/* Sliding background pill */}
            <span
              aria-hidden="true"
              className="absolute top-0 h-full rounded-xl bg-[#199250]/10 pointer-events-none"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
                transition: "left 0.28s cubic-bezier(0.4, 0, 0.2, 1), width 0.28s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.18s ease",
              }}
            />

            {NAV_LINKS.map((item, idx) => {
              const isActive = idx === activeIdx;
              return (
                <li key={idx}>
                  <Link
                    href={item.href}
                    ref={(el) => { itemRefs.current[idx] = el; }}
                    className={`relative z-10 block px-3.5 py-1.5 rounded-full whitespace-nowrap transition-colors duration-150 ${
                      isActive
                        ? "text-[#199250] font-bold"
                        : "text-zinc-600 font-medium hover:text-[#199250]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action CTA: 'Book a Demo' pill button */}
          <button
            onClick={() => setDemoModalOpen(true)}
            className="hidden sm:flex font-['Manrope'] font-bold text-xs sm:text-sm text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full bg-[#199250] hover:bg-[#055027] active:scale-95 transition-all duration-200 shadow-md shadow-[#199250]/30 hover:shadow-lg hover:shadow-[#055027]/40 items-center justify-center whitespace-nowrap cursor-pointer"
          >
            Book a Demo
          </button>

          {/* Mobile & Tablet Hamburger Button (visible on screens < 1024px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-zinc-800 hover:bg-zinc-100 active:scale-90 transition-all cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Dimmed backdrop when mobile menu is open (click anywhere to close) */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[3px] -z-10 lg:hidden transition-opacity duration-200"
          aria-hidden="true"
        />
      )}

      {/* Mobile & Tablet Modern Glass Menu Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full max-w-sm sm:max-w-md mx-auto mt-2.5 bg-white/95 backdrop-blur-2xl rounded-[28px] p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.22)] border border-white/80 flex flex-col gap-1.5 font-['Manrope'] animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`) ||
                    (item.label === "Success Story" &&
                      (pathname === "/success-story" || pathname === "/portfolio"));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`group flex items-center justify-between px-3.5 py-2.5 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? "bg-[#199250]/10 text-[#199250]"
                      : "text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-950 active:scale-[0.99]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Tailored Icon for each item */}
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#199250] text-white shadow-sm shadow-[#199250]/40 scale-105"
                          : "bg-zinc-100 text-zinc-500 group-hover:bg-[#199250]/10 group-hover:text-[#199250]"
                      }`}
                    >
                      {item.label === "Home" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      {item.label === "About Software" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {item.label === "About Company" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                      {item.label === "Success Story" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      )}
                      {item.label === "Contact Us" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`font-['Outfit'] text-[15.5px] tracking-tight ${
                        isActive ? "font-bold text-[#199250]" : "font-semibold text-zinc-800"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-100 my-1" />

          {/* Prominent 'Book a Demo' CTA in Mobile Menu */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setDemoModalOpen(true);
            }}
            className="w-full font-['Manrope'] font-bold text-sm text-white py-3 rounded-2xl bg-gradient-to-r from-[#199250] to-[#055027] hover:from-[#15803d] hover:to-[#04401f] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#199250]/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book a Demo</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}

      {/* Book a Demo Modal */}
      <BookDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </header>
  );
}
