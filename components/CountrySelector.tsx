"use client";

import React, { useState, useRef, useEffect } from "react";
import { COUNTRIES, Country } from "@/constants/countries";

interface CountrySelectorProps {
  value: string; // dialCode, e.g. "+91"
  selectedCode?: string; // ISO code, e.g. "IN"
  onChange: (country: Country) => void;
  className?: string;
  theme?: "light" | "white";
}

export default function CountrySelector({
  value,
  selectedCode = "US",
  onChange,
  className = "",
  theme = "light",
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Find currently selected country
  const selectedCountry =
    COUNTRIES.find((c) => c.code === selectedCode) ||
    COUNTRIES.find((c) => c.dialCode === value) ||
    COUNTRIES[0];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Auto-focus search input when opened
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Filter countries by search query
  const filteredCountries = COUNTRIES.filter((c) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.dialCode.toLowerCase().includes(q)
    );
  });

  const handleSelect = (country: Country) => {
    onChange(country);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`h-full min-h-[42px] px-3 py-2 rounded-[12px] flex items-center gap-2 transition cursor-pointer select-none border border-transparent focus:outline-none focus:ring-2 focus:ring-[#199250]/40 ${
          theme === "white"
            ? "bg-white hover:bg-zinc-50 border-zinc-200"
            : "bg-[#f2f2f2] hover:bg-[#e8e8e8]"
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {/* Real Flag Image */}
        <span className="w-5 h-3.5 flex items-center justify-center shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.4)] bg-zinc-200">
          <img
            src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
            alt={selectedCountry.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </span>

        {/* Dial Code */}
        <span className="font-['Outfit'] font-semibold text-xs sm:text-sm text-zinc-900 tracking-tight">
          {selectedCountry.dialCode}
        </span>

        {/* Chevron Icon */}
        <svg
          className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] left-0 w-[290px] sm:w-[320px] bg-white rounded-[16px] shadow-2xl border border-zinc-200/90 z-[999] overflow-hidden flex flex-col animate-[fadeInScale_0.15s_ease-out]">
          {/* Search Header */}
          <div className="p-2.5 border-b border-zinc-100 bg-zinc-50/70">
            <div className="relative flex items-center">
              <svg
                className="w-4 h-4 text-zinc-400 absolute left-3 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-2.85z"
                />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or code..."
                className="w-full bg-white rounded-[10px] pl-9 pr-3 py-1.5 text-xs sm:text-sm text-zinc-800 placeholder-zinc-400 border border-zinc-200 focus:outline-none focus:border-[#055027] focus:ring-1 focus:ring-[#055027]"
              />
            </div>
          </div>

          {/* Countries List */}
          <div className="max-h-[230px] overflow-y-auto p-1 divide-y divide-zinc-50">
            {filteredCountries.length === 0 ? (
              <div className="py-6 text-center text-xs text-zinc-400">
                No countries found
              </div>
            ) : (
              filteredCountries.map((c) => {
                const isSelected =
                  c.code === selectedCountry.code &&
                  c.dialCode === selectedCountry.dialCode;

                return (
                  <button
                    key={`${c.code}-${c.dialCode}`}
                    type="button"
                    onClick={() => handleSelect(c)}
                    className={`w-full px-3 py-2 rounded-[10px] flex items-center justify-between text-left transition cursor-pointer text-xs sm:text-sm ${
                      isSelected
                        ? "bg-[#055027]/10 text-[#055027] font-semibold"
                        : "hover:bg-zinc-100 text-zinc-800"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {/* Flag Image */}
                      <span className="w-5 h-3.5 flex items-center justify-center shrink-0 overflow-hidden rounded-[2px] shadow-[0_0_1px_rgba(0,0,0,0.3)] bg-zinc-100">
                        <img
                          src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                          alt={c.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </span>

                      {/* Country Name */}
                      <span className="truncate">{c.name}</span>
                    </div>

                    {/* Dial Code Badge */}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-[6px] font-mono shrink-0 ml-2 ${
                        isSelected
                          ? "bg-[#055027]/20 text-[#055027] font-bold"
                          : "bg-zinc-100 text-zinc-500 font-medium"
                      }`}
                    >
                      {c.dialCode}
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
