import React from "react";
import AboutCompanyHero from "@/components/AboutCompanyHero";
import AboutCompanyMission from "@/components/AboutCompanyMission";
import AboutCompanyWhyChooseUs from "@/components/AboutCompanyWhyChooseUs";
import FAQ, { FAQItem } from "@/components/FAQ";

export const metadata = {
  title: "About Company — Profit Plus",
  description:
    "ProfitPlus simplifies futures trading with smart automation, helping traders execute trades efficiently, manage multiple accounts, and reduce manual work through an easy-to-use platform.",
};

const ABOUT_FAQS: FAQItem[] = [
  {
    id: "about-faq-1",
    question: "What is ProfitPlus and how does it help traders?",
    answer:
      "ProfitPlus is an intelligent trading automation platform engineered to simplify futures trading. It allows traders to automate trade execution, eliminate emotion-driven decisions, manage risk, and replicate trades across multiple accounts seamlessly with ultra-low latency.",
  },
  {
    id: "about-faq-2",
    question: "Why should I choose ProfitPlus for futures trading automation?",
    answer:
      "Traders choose ProfitPlus because it combines enterprise-grade execution speed, high reliability, and intuitive multi-account management. Our platform automates repetitive manual execution while providing full transparency, custom risk parameters, and continuous system monitoring.",
  },
  {
    id: "about-faq-3",
    question: "How does ProfitPlus simplify multi-account trade management?",
    answer:
      "ProfitPlus allows you to link multiple accounts and mirror trades from a master lead account to all follower accounts simultaneously. You can set individual account sizing, risk parameters, and multipliers without having to manually execute on each account separately.",
  },
  {
    id: "about-faq-4",
    question: "Is ProfitPlus suitable for both beginners and experienced traders?",
    answer:
      "Yes, absolutely. Beginners benefit from simplified setup guides, pre-tested automation parameters, and simulated paper-trading modes. Experienced and institutional traders enjoy microsecond execution, advanced order routing, and customizable multi-broker API integrations.",
  },
  {
    id: "about-faq-5",
    question: "What makes ProfitPlus different from other futures trading platforms?",
    answer:
      "ProfitPlus is built specifically for modern futures traders who demand speed, reliability, and ease of use. Unlike bloated legacy software, ProfitPlus offers a streamlined interface, seamless multi-account execution, dedicated one-on-one customer support, and robust uptime.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full flex-1 flex flex-col bg-white selection:bg-[#199250] selection:text-white overflow-x-hidden">
      {/* 1. Hero Section: "About Company" Title + 2 Cards */}
      <AboutCompanyHero />

      {/* 2. Our Mission Section: 3D Grid + Screen */}
      <AboutCompanyMission />

      {/* 3. Why Choose ProfitPlus Section: 4 Notched Cards */}
      <AboutCompanyWhyChooseUs />

      {/* 4. Frequently Asked Questions */}
      <FAQ items={ABOUT_FAQS} className="pt-4 sm:pt-8 pb-16 sm:pb-24" />
    </div>
  );
}
