"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface DatePickerProps {
  value: string; // Format: "YYYY-MM-DD"
  onChange: (date: string) => void;
  label?: string;
  required?: boolean;
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function DatePicker({
  value,
  onChange,
  label = "Publish Date",
  required = false,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [placement, setPlacement] = useState<"up" | "down">("down");
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse YYYY-MM-DD safely into a local Date
  const parseYMD = (ymdStr: string) => {
    if (!ymdStr) return new Date();
    const parts = ymdStr.split("-").map((p) => parseInt(p, 10));
    if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
      return new Date(parts[0], parts[1] - 1, parts[2]);
    }
    return new Date();
  };

  const selectedDate = parseYMD(value);
  const [viewYear, setViewYear] = useState(() => selectedDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(() => selectedDate.getMonth());

  // Keep viewing month/year synced with external changes
  useEffect(() => {
    if (value) {
      const d = parseYMD(value);
      setViewYear(d.getFullYear());
      setViewMonth(d.getMonth());
    }
  }, [value]);

  // Determine smart placement: if space on top >= 290px open upwards, otherwise downwards
  const calculatePlacement = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      // If there is enough room on top, open upwards, otherwise downwards
      if (spaceAbove >= 290) {
        setPlacement("up");
      } else {
        setPlacement("down");
      }
    }
  }, []);

  const handleToggle = () => {
    if (!isOpen) {
      calculatePlacement();
    }
    setIsOpen((prev) => !prev);
  };

  // Close when clicking outside or scrolling window
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Format date display
  const formatDisplay = (ymdStr: string) => {
    if (!ymdStr) return "Select date";
    const d = parseYMD(ymdStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const toYMD = (year: number, month: number, day: number) => {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
  };

  const isToday = (year: number, month: number, day: number) => {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };

  const isSelected = (year: number, month: number, day: number) => {
    if (!value) return false;
    const parts = value.split("-").map((p) => parseInt(p, 10));
    return parts[0] === year && parts[1] - 1 === month && parts[2] === day;
  };

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const handleSelectDay = (year: number, month: number, day: number) => {
    const ymd = toYMD(year, month, day);
    onChange(ymd);
    setIsOpen(false);
  };

  const handleSetToday = (e: React.MouseEvent) => {
    e.stopPropagation();
    const today = new Date();
    const ymd = toYMD(today.getFullYear(), today.getMonth(), today.getDate());
    onChange(ymd);
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
    setIsOpen(false);
  };

  // Generate calendar grid
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayIndex = new Date(viewYear, viewMonth, 1).getDay();
  const prevMonthDays = new Date(viewYear, viewMonth, 0).getDate();

  const days = [];

  // Previous month trailing days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const dayNum = prevMonthDays - i;
    const prevMonth = viewMonth === 0 ? 11 : viewMonth - 1;
    const prevYear = viewMonth === 0 ? viewYear - 1 : viewYear;
    days.push({
      day: dayNum,
      month: prevMonth,
      year: prevYear,
      isCurrentMonth: false,
    });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      month: viewMonth,
      year: viewYear,
      isCurrentMonth: true,
    });
  }

  // Next month leading days (fill up grid to 35 or 42)
  const remaining = (7 - (days.length % 7)) % 7;
  for (let i = 1; i <= remaining; i++) {
    const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1;
    const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;
    days.push({
      day: i,
      month: nextMonth,
      year: nextYear,
      isCurrentMonth: false,
    });
  }

  return (
    <div className="relative font-['Manrope']" ref={containerRef}>
      {/* Label and Quick Action */}
      <div className="flex items-center justify-between mb-2">
        <label className="block font-['Outfit'] font-semibold text-xs uppercase tracking-wider text-zinc-700">
          {label} {required && <span className="text-emerald-600">*</span>}
        </label>
        <button
          type="button"
          onClick={handleSetToday}
          className="text-[11px] text-[#199250] hover:text-[#147a42] hover:underline font-semibold transition-colors"
        >
          Set Today
        </button>
      </div>

      {/* Input Trigger Button (Matches height and appearance of surrounding inputs) */}
      <button
        type="button"
        onClick={handleToggle}
        className={`w-full h-[42px] flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-zinc-50 border text-left transition-all duration-200 cursor-pointer ${
          isOpen
            ? "border-[#199250] bg-white ring-2 ring-emerald-500/20"
            : "border-zinc-300 hover:border-emerald-500/60 focus:bg-white"
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <svg className="w-4 h-4 text-[#199250] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs sm:text-sm font-medium text-zinc-900 truncate">
            {formatDisplay(value)}
          </span>
        </div>

        <svg
          className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#199250]" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Calendar Popup */}
      {isOpen && (
        <div
          className={`absolute right-0 z-50 w-64 sm:w-[268px] rounded-2xl bg-white border border-zinc-200 p-3 shadow-xl shadow-emerald-950/10 animate-in fade-in zoom-in-95 duration-150 select-none ${
            placement === "up" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          {/* Calendar Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-100">
            <button
              type="button"
              onClick={handlePrevMonth}
              className="p-1 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              title="Previous Month"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-center">
              <span className="font-['Outfit'] font-bold text-xs sm:text-sm text-zinc-900">
                {MONTH_NAMES[viewMonth]} {viewYear}
              </span>
            </div>

            <button
              type="button"
              onClick={handleNextMonth}
              className="p-1 rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              title="Next Month"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
            {DAYS_SHORT.map((day) => (
              <span
                key={day}
                className="text-[10px] font-bold text-zinc-400 font-['Outfit'] uppercase tracking-wider py-0.5"
              >
                {day}
              </span>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-0.5 text-center">
            {days.map((item, index) => {
              const selected = isSelected(item.year, item.month, item.day);
              const today = isToday(item.year, item.month, item.day);

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleSelectDay(item.year, item.month, item.day)}
                  className={`h-7.5 w-full rounded-lg text-[11px] font-medium font-['Manrope'] transition-all flex items-center justify-center relative ${
                    selected
                      ? "bg-[#199250] text-white shadow-xs scale-105 z-10 font-bold"
                      : item.isCurrentMonth
                      ? "text-zinc-800 hover:bg-emerald-50 hover:text-emerald-800"
                      : "text-zinc-300 hover:bg-zinc-50 hover:text-zinc-500"
                  } ${
                    today && !selected
                      ? "border border-[#199250] text-[#199250] font-bold bg-emerald-50/40"
                      : ""
                  }`}
                >
                  {item.day}
                  {today && !selected && (
                    <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-[#199250]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Actions */}
          <div className="mt-2.5 pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px]">
            <button
              type="button"
              onClick={handleSetToday}
              className="px-2.5 py-1 rounded-md bg-emerald-50 hover:bg-emerald-100 text-[#199250] font-semibold transition-colors"
            >
              Today
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-2.5 py-1 rounded-md text-zinc-500 hover:text-zinc-800 hover:bg-zinc-100 font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
