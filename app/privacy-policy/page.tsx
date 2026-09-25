import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

export const metadata: Metadata = {
  title: "Privacy Policy — Profit Plus",
  description:
    "Learn how Profit Plus Auto Trader collects, uses, protects, and handles your personal information, cookies, and data privacy.",
  openGraph: {
    title: "Privacy Policy — Profit Plus",
    description:
      "Learn how Profit Plus Auto Trader collects, uses, protects, and handles your personal information, cookies, and data privacy.",
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
          {/* Top Intro Paragraphs */}
          <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
            <p>
              Profit Plus Auto Trader values your privacy. The purpose of this Privacy Policy is to explain how we collect, use, and protect your personal information when you visit our website or use our products and services.
            </p>
            <p>
              The information we collect may be used to provide and improve our services, process your requests, display customized content and advertising, conduct research and analysis, protect our products and website, develop new features, and communicate with you.
            </p>
          </div>

          {/* Section 1: Information Profit Plus Auto Trader Collects and Uses */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Information Profit Plus Auto Trader Collects and Uses
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              Personal information includes details such as your name, address, email address, or phone number that can identify you. For certain services, we may also request payment account information. We do not store your credit card information on our servers. Payment information is handled by our trusted payment processor, Stripe, and is protected using industry standard encryption and security measures.
            </p>
          </div>

          {/* Section 2: Information Sharing */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Information Sharing
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              Profit Plus Auto Trader does not sell, rent, or lease your personal information to individuals or non-affiliated companies except in limited situations.
            </p>
            <p className="font-['Manrope'] font-medium text-sm sm:text-[18px] text-zinc-700 leading-relaxed mb-3">
              We may disclose personal information when:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <li>It is required to respond to lawful requests, legal processes, or government authorities.</li>
              <li>
                It is necessary to enforce our Terms of Service or protect the rights and property of Profit Plus Auto Trader, its users, or the public.
              </li>
              <li>
                It helps detect, investigate, or prevent fraud, security issues, illegal activities, or threats to the safety of any person.
              </li>
            </ul>
          </div>

          {/* Section 3: Confidentiality & Security */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Confidentiality &amp; Security
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Profit Plus Auto Trader uses physical, electronic, and administrative safeguards to help protect your personal information from unauthorized access, use, or disclosure.
              </p>
              <p>
                Access to personal information is limited to employees, contractors, and agents who need it to perform their work, such as operating, maintaining, developing, or improving our services. These individuals are required to keep your information confidential and may face disciplinary or legal action if they fail to meet those obligations.
              </p>
            </div>
          </div>

          {/* Section 4: Cookies */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Cookies
            </h2>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-4">
              When you visit our website, Profit Plus Auto Trader may place one or more cookies on your device. Cookies are small text files that help identify your browser and improve your experience on our website.
            </p>
            <p className="font-['Manrope'] font-medium text-sm sm:text-[18px] text-zinc-700 leading-relaxed mb-3">
              We use cookies to:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed mb-5">
              <li>Remember your preferences and settings.</li>
              <li>Provide customized content and advertising.</li>
              <li>Improve our products and services.</li>
              <li>Conduct research, analysis, and audits.</li>
              <li>Understand website usage and trends.</li>
              <li>Develop new features and communicate with users.</li>
              <li>Track website activity and contact you when appropriate.</li>
            </ul>
            <p className="font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              You can control or disable cookies through your browser settings. However, some features of the website and certain services may not function properly if cookies are disabled.
            </p>
          </div>

          {/* Section 5: Our Policy */}
          <div>
            <h2 className="font-['Outfit'] font-bold text-base sm:text-[17px] md:text-[28px] text-zinc-900 leading-snug tracking-tight mb-3 sm:mb-4">
              Our Policy
            </h2>
            <div className="space-y-4 font-['Manrope'] text-sm sm:text-[18px] text-zinc-600 leading-relaxed">
              <p>
                Profit Plus Auto Trader regularly reviews and updates this Privacy Policy. Changes may be made from time to time, with or without prior notice. If significant updates are made, we may notify users through our website, email, or other available communication methods.
              </p>
              <p>
                When you contact us through our website or by email, we may retain your communications for a reasonable period to process your requests, respond to your questions, and continue improving our products and services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
