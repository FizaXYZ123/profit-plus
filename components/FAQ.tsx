"use client";

import React from "react";
import Accordion, { AccordionItemData } from "./Accordion";

const FAQ_DATA: AccordionItemData[] = [
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

export type FAQItem = AccordionItemData;

export interface FAQProps {
  items?: FAQItem[];
  className?: string;
  title?: string;
}

export default function FAQ({
  items = FAQ_DATA,
  className = "",
  title = "Frequently Asked Questions",
}: FAQProps = {}) {
  return (
    <section
      id="faq"
      className={`relative bg-white text-zinc-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-bold text-2xl sm:text-3xl md:text-[34px] text-[#111827] tracking-tight text-center mb-8 sm:mb-10">
          {title}
        </h2>

        {/* Reusable Accordion Component */}
        <Accordion items={items} />
      </div>
    </section>
  );
}
