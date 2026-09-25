import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

export const metadata: Metadata = {
  title: "Terms & Conditions — Profit Plus",
  description:
    "Read the terms and conditions for using Profit Plus automated trading software, licenses, payment policies, risks, and user responsibilities.",
  openGraph: {
    title: "Terms & Conditions — Profit Plus",
    description:
      "Read the terms and conditions for using Profit Plus automated trading software, licenses, payment policies, risks, and user responsibilities.",
  },
};

export default function TermsConditionsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section: Dark Forest Green with Upward Trend Arrow */}
      <section className="relative w-full bg-[#012615] pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden lg:h-[466px]">
        {/* Centered Main Title with display-p3 gradient */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1
            className="font-['Outfit'] font-extrabold text-3xl sm:text-5xl md:text-[54px] lg:text-[80px] tracking-tight leading-tight bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] inline-block"
            style={{
              backgroundImage:
                "linear-gradient(90deg, color(display-p3 1 1 1) 0.16%, color(display-p3 0.6 0.6 0.6) 108.15%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Terms & Conditions
          </h1>
        </div>

        {/* Decorative Green Upward Trend Arrow from public/arrow.webp */}
        <div className="absolute bottom-0 left-0 pointer-events-none select-none z-10">
          <Image
            src={IMAGES.arrow}
            alt="Upward Trend Arrow"
            width={340}
            height={160}
            className="w-40 sm:w-56 md:w-72 lg:w-84 h-auto object-contain object-bottom-left"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* Main Content Section on Pure White Background */}
      <section className="relative w-full bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-12">
          {/* Section 1: Important */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Important:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              Please read these Terms & Conditions carefully before using Profit Plus or purchasing our software:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-5">
              <li>All sales are final.</li>
              <li>The initial payment is non-refundable.</li>
              <li>
                If you select a product or service with a recurring fee or monthly plan, you may cancel at any time before your next billing cycle begins.
              </li>
              <li>
                By purchasing or using our products and services, you agree to these Terms & Conditions.
              </li>
            </ul>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              This agreement creates a legally binding contract between Profit Plus Inc. (&quot;Profit Plus&quot;) and the user or purchaser regarding the use of our software, products, and related services.
            </p>
          </div>

          {/* Section 2: Use of license */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Use of license:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              Profit Plus grants you a personal, non-exclusive, non-transferable license to install and use the software. Purchasing the software does not transfer ownership of the software or its intellectual property.
            </p>
            <p className="font-['Manrope'] font-medium text-sm sm:text-[18px] text-zinc-700 leading-relaxed mb-3">
              Under this license:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-5">
              <li>You may install and use one copy of the software on a single computer.</li>
              <li>The software is licensed for your personal use only.</li>
              <li>
                You may not share, rent, lease, sublicense, distribute, or transfer the software without written permission from Profit Plus.
              </li>
              <li>
                You may not use the software to provide trading services or investment advice on behalf of others.
              </li>
              <li>
                You may not copy, modify, reverse engineer, decompile, or create derivative works from the software.
              </li>
              <li>
                You may not remove copyright notices or proprietary markings from the software.
              </li>
            </ul>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              All intellectual property rights, including software, documentation, and related materials, remain the property of Profit Plus Inc.
            </p>
          </div>

          {/* Section 3: Trading Risk Notice */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Trading Risk Notice:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              Profit Plus does not provide trading or investment advice and does not recommend buying or selling any financial instrument.
            </p>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              Our software is designed to assist with trade execution and management. Every trading decision remains the responsibility of the customer. If needed, you should consult a licensed financial advisor before making investment decisions.
            </p>
          </div>

          {/* Section 4: Payment & Refund Policy */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Payment & Refund Policy:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              Software licenses and services are delivered electronically upon completed payment.
            </p>
            <p className="font-['Manrope'] font-medium text-sm sm:text-[18px] text-zinc-700 leading-relaxed mb-3">
              Under this license:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <li>Initial payments are non-refundable.</li>
              <li>Monthly subscriptions may be cancelled according to the cancellation policy.</li>
              <li>
                Unauthorised payment disputes or chargebacks may result in suspension or termination of your software license.
              </li>
            </ul>
          </div>

          {/* Section 5: Earnings Disclaimer */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Earnings Disclaimer:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              From time to time, Profit Plus may showcase customer experiences or trade screenshots. These examples are provided for informational purposes only.
            </p>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              Individual trading results vary based on many factors, including experience, knowledge, market conditions, strategy, and risk management. We do not guarantee profits, earnings, or any specific level of trading success.
            </p>
          </div>

          {/* Section 6: Termination */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Termination:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              This agreement remains in effect until terminated.
            </p>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              Profit Plus reserves the right to suspend or terminate access if a customer violates these Terms & Conditions or fails to comply with payment obligations and software licensing requirements.
            </p>
          </div>

          {/* Section 7: Limitation of Liability */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Limitation of Liability:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              Profit Plus provides software tools designed to support trading activities but cannot guarantee uninterrupted operation or specific outcomes.
            </p>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              We are not responsible for losses, damages, trading decisions, market events, internet outages, technical failures, communication delays, third-party service interruptions, or other circumstances beyond our reasonable control.
            </p>
            <p className="font-['Manrope'] font-medium text-sm sm:text-[18px] text-zinc-700 leading-relaxed mb-3">
              Customers understand that:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <li>Trading involves substantial financial risk.</li>
              <li>Software performance depends on many external factors.</li>
              <li>Profit Plus does not guarantee profits or eliminate trading losses.</li>
              <li>All trading decisions are made at the customer&apos;s own discretion and risk.</li>
            </ul>
          </div>

          {/* Section 8: Customer Responsibilities */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Customer Responsibilities:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              Customers are responsible for using the software legally and ethically.
            </p>
            <p className="font-['Manrope'] font-medium text-sm sm:text-[18px] text-zinc-700 leading-relaxed mb-3">
              You agree not to:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <li>Misrepresent Profit Plus or its products.</li>
              <li>Publish false or misleading reviews.</li>
              <li>Use the platform to promote unauthorized products or services.</li>
              <li>Violate applicable laws or these Terms & Conditions.</li>
            </ul>
          </div>

          {/* Section 9: GDPR & CCPA Information */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              GDPR & CCPA Information:
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              During checkout or account registration, we may collect information such as your name, email address, username, billing details, phone number, and other information necessary to create your account and process payments.
            </p>
            <p className="font-['Manrope'] font-medium text-sm sm:text-[18px] text-zinc-700 leading-relaxed mb-3">
              This information is used to:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-5">
              <li>Create and manage your account.</li>
              <li>Process purchases and subscriptions.</li>
              <li>Provide customer support.</li>
              <li>Improve our services.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              We handle personal information in accordance with our Privacy Policy and applicable data protection laws.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
