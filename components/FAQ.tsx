"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is ProfitPlus?",
    answer:
      "ProfitPlus is an advanced automated futures trading platform that helps traders automate, copy, and manage trades across multiple accounts with speed, discipline, and precision.",
  },
  {
    id: "faq-2",
    question: "How does ProfitPlus automate futures trading?",
    answer:
      "ProfitPlus connects with top trading platforms like NinjaTrader® via secure APIs. Once your configured strategy conditions are met, trades are executed automatically without manual screen-time or emotional hesitation.",
  },
  {
    id: "faq-3",
    question: "Can I copy trades to multiple accounts at the same time?",
    answer:
      "Yes. ProfitPlus features powerful multi-account trade replication. You can execute trades on a lead account and have them mirrored across all connected accounts in real time with custom contract sizing.",
  },
  {
    id: "faq-4",
    question: "Is ProfitPlus suitable for both beginners and experienced traders?",
    answer:
      "Yes. Beginners can take advantage of straightforward setup, built-in risk controls, and practice simulation tools, while experienced traders benefit from flexible controls, custom strategy settings, and high-speed execution.",
  },
  {
    id: "faq-5",
    question: "Does ProfitPlus guarantee trading profits?",
    answer:
      "No platform can guarantee profits as futures trading carries market risk. ProfitPlus provides the technological tools to automate execution, reduce human error, and enforce disciplined trading strategies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative bg-white text-zinc-900 py-16 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-black text-2xl sm:text-3xl md:text-[38px] text-[#111827] tracking-tight text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion List matching user screenshot */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className="rounded-[20px] sm:rounded-[24px] border border-zinc-300/80 bg-white transition-colors duration-200 overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Outfit'] font-bold text-sm sm:text-base md:text-[16.5px] text-zinc-900 leading-snug">
                    {item.question}
                  </span>

                  {/* Toggle Plus/Minus Icon */}
                  <span
                    className={`shrink-0 text-zinc-900 font-bold text-2xl leading-none transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-5 pt-1 text-left border-t border-zinc-100">
                    <p className="font-['Manrope'] text-zinc-600 text-xs sm:text-sm md:text-[14.5px] leading-relaxed">
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
