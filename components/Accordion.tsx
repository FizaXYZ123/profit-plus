"use client";

import React, { useState } from "react";

export interface AccordionItemData {
  id: string | number;
  question: React.ReactNode;
  answer: React.ReactNode;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenId?: string | number | null;
  className?: string;
  itemClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  contentClassName?: string;
  iconClassName?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  defaultOpenId = null,
  className = "space-y-4",
  itemClassName = "rounded-[14px] sm:rounded-[16px] border border-neutral-300 bg-white transition-all duration-200 overflow-hidden shadow-xs hover:border-neutral-400",
  headerClassName = "w-full text-left px-5 sm:px-7 py-4.5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#199250] transition-colors",
  titleClassName = "font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[18px] text-zinc-900 leading-snug tracking-tight",
  contentClassName = "px-5 sm:px-7 pb-5 pt-1 text-zinc-600 font-['Manrope'] text-sm sm:text-[15px] leading-relaxed",
  iconClassName = "shrink-0 w-6 h-6 flex items-center justify-center text-zinc-900 transition-transform duration-300",
}: AccordionProps) {
  // Support both single open id and multiple open ids
  const [openIds, setOpenIds] = useState<(string | number)[]>(() => {
    if (defaultOpenId !== null && defaultOpenId !== undefined) {
      return [defaultOpenId];
    }
    const preOpened = items.filter((i) => i.defaultOpen).map((i) => i.id);
    return preOpened.length > 0 ? (allowMultiple ? preOpened : [preOpened[0]]) : [];
  });

  const toggleItem = (id: string | number) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className={itemClassName}>
            {/* Accordion Trigger Header */}
            <button
              id={headerId}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={headerClassName}
            >
              <span className={titleClassName}>{item.question}</span>

              {/* Plus / Minus Indicator Icon */}
              <span
                className={`${iconClassName} ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>

            {/* Smooth CSS Grid Expanding Content Panel */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className={contentClassName}>{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
