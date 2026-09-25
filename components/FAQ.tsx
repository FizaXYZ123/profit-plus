"use client";

import React from "react";
import Accordion, { AccordionItemData } from "./Accordion";

const FAQ_DATA: AccordionItemData[] = [
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
  return (
    <section
      id="faq"
      className="relative bg-white text-zinc-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-black text-2xl sm:text-3xl md:text-[38px] text-[#111827] tracking-tight text-center mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>

        {/* Reusable Accordion Component */}
        <Accordion items={FAQ_DATA} />
      </div>
    </section>
  );
}
