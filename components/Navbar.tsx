"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMAGES, NAV_LINKS, COLORS } from "@/constants/export";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="flex items-center gap-6 sm:gap-10">
          <ul className="hidden md:flex items-center gap-7 lg:gap-9 font-['Manrope'] font-medium text-sm text-zinc-700">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`relative py-1 transition-colors duration-200 hover:text-[#199250] ${
                      isActive ? "text-[#199250] font-semibold" : "text-zinc-600"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#199250] rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Action CTA: 'Book a Demo' pill button in green #199250 */}
          <Link
            href="/contact"
            className="font-['Manrope'] font-bold text-xs sm:text-sm text-white px-6 sm:px-7 py-2.5 rounded-full bg-[#199250] hover:bg-[#055027] active:scale-95 transition-all duration-200 shadow-md shadow-[#199250]/30 hover:shadow-lg hover:shadow-[#055027]/40 flex items-center justify-center whitespace-nowrap"
          >
            Book a Demo
          </Link>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-sm mx-auto mt-2 bg-white/95 backdrop-blur-lg rounded-3xl p-4 shadow-2xl border border-zinc-200/50 flex flex-col gap-2 font-['Manrope']">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-medium text-zinc-700 hover:bg-emerald-50 hover:text-[#199250] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
