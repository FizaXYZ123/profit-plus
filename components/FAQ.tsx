"use client";

import React, { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItem[];
  className?: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is ProfitPlus and how does it work?",
    answer:
      "ProfitPlus is an advanced automated futures trading platform designed to streamline strategy execution, multi-account trade replication, and risk management. It connects directly with leading trading platforms (like NinjaTrader®) via secure APIs to execute trades automatically based on your customized rules, eliminating emotional bias and manual delay.",
  },
  {
    id: "faq-2",
    question: "How does ProfitPlus automate futures trading?",
    answer:
      "ProfitPlus monitors market conditions in real time using your configured technical strategies and rules. Once your predetermined entry, target, or stop-loss criteria are fulfilled, orders are triggered and placed instantly without needing constant manual screen monitoring.",
  },
  {
    id: "faq-3",
    question: "Can ProfitPlus manage and copy trades across multiple accounts?",
    answer:
      "Yes. ProfitPlus features ultra-fast multi-account trade replication. You can execute orders on a primary lead account and have them mirrored across all connected follower accounts in real time with custom contract sizing and risk ratios.",
  },
  {
    id: "faq-4",
    question: "Is ProfitPlus suitable for beginners as well as professional traders?",
    answer:
      "Yes. Beginners can take advantage of our straightforward guided onboarding, pre-configured safety rules, and paper/simulation mode. Professional traders benefit from granular order routing, multi-account scalability, and high-frequency execution precision.",
  },
  {
    id: "faq-5",
    question: "Why should traders choose ProfitPlus for futures trading automation?",
    answer:
      "Traders choose ProfitPlus for its rock-solid reliability, sub-millisecond execution speed, comprehensive multi-account management, and responsive technical support—giving you the edge to trade with discipline, consistency, and confidence.",
  },
];

export default function FAQ({
  title = "Frequently Asked Questions",
  items = FAQ_DATA,
  className = "",
}: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className={`w-full bg-white text-zinc-900 pt-8 sm:pt-18 pb-22 md:pb-22 lg:pb-8 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl md:text-[34px] text-[#111827] tracking-tight text-center mb-8 sm:mb-10">
          {title}
        </h2>

        {/* FAQ Accordion List matching Figma inspect */}
        <div className="space-y-3 sm:space-y-3.5">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="rounded-[14px] sm:rounded-[16px] border border-zinc-300 bg-white transition-all duration-200 overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                {/* Accordion Header Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none transition-colors hover:bg-zinc-50/60"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Outfit'] font-bold text-sm sm:text-[15.5px] text-[#111827] leading-snug">
                    {item.question}
                  </span>

                  {/* Plus / Minus Icon */}
                  <span
                    className={`shrink-0 text-[#111827] font-semibold text-2xl leading-none transition-transform duration-200 flex items-center justify-center w-6 h-6 ${isOpen ? "rotate-45" : "rotate-0"
                      }`}
                  >
                    +
                  </span>
                </button>

                {/* Accordion Answer Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-4 pt-1.5 text-left border-t border-zinc-100 animate-fadeIn">
                    <p className="font-['Manrope'] text-zinc-600 text-[13.5px] sm:text-[14.5px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
