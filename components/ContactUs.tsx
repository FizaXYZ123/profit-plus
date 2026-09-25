"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/export";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative text-white pt-10 sm:pt-14 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10 bg-[#054522]"
      style={{ backgroundColor: "#054522" }}
    >
      {/* 1. Concentric Green Arches at the Bottom Center */}
      <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[280px] sm:h-[360px] pointer-events-none select-none z-0 opacity-75">
        <Image
          src={IMAGES.contactBgArches}
          alt=""
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      {/* 2. Curved PC Monitor at Bottom Left (Behind Candlesticks - z-5) */}
      <div className="absolute bottom-2 sm:bottom-3 left-0 sm:left-2 w-44 sm:w-56 md:w-72 h-auto pointer-events-none select-none z-5">
        <Image
          src={IMAGES.curvedMonitor}
          alt="Trading Monitor Display"
          width={320}
          height={200}
          className="w-full h-auto object-contain block drop-shadow-sm"
          priority
          unoptimized
        />
      </div>

      {/* 3. Candlestick Chart Trend Line (IN FRONT OF PC Monitor - z-15) */}
      <div className="absolute inset-0 pointer-events-none select-none z-15 overflow-hidden">
        {/* Candlesticks starting on top of/in front of the PC monitor screen */}
        <div className="absolute bottom-1 sm:bottom-2 left-0 w-[420px] sm:w-[580px] md:w-[680px] h-[360px] sm:h-[460px] md:h-[520px] opacity-95">
          <Image
            src={IMAGES.candlestickChart}
            alt=""
            fill
            className="object-contain object-bottom-left"
            priority
          />
        </div>
        {/* Rising Candlesticks on the right */}
        <div className="absolute top-0 -right-6 w-[360px] sm:w-[480px] md:w-[540px] h-[360px] sm:h-[460px] md:h-[520px] opacity-95">
          <Image
            src={IMAGES.candlestickChart}
            alt=""
            fill
            className="object-contain object-top-right"
            priority
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto relative z-20 flex flex-col items-center">
        {/* Section Heading: Compact */}
        <h2 className="font-['Outfit'] font-black text-2xl sm:text-3xl md:text-[36px] text-white tracking-tight text-center mb-6 sm:mb-8">
          Contact Us
        </h2>

        {/* Contact Form Card: Compact and Proportionate */}
        <div className="w-full max-w-[460px] rounded-[28px] sm:rounded-[32px] bg-white p-6 sm:p-8 shadow-xl relative z-20">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-[#055027]/15 text-[#055027] flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                ✓
              </div>
              <h3 className="font-['Outfit'] font-bold text-lg text-zinc-900 mb-1">
                Message Sent Successfully!
              </h3>
              <p className="font-['Manrope'] text-zinc-600 text-xs sm:text-sm">
                Thank you for reaching out. We will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-[12px] bg-[#f0f0f0] border-0 px-3.5 py-2 sm:py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#055027]/40"
                  placeholder=""
                />
              </div>

              {/* Email */}
              <div className="mt-3 sm:mt-3.5">
                <label
                  htmlFor="contact-email"
                  className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-[12px] bg-[#f0f0f0] border-0 px-3.5 py-2 sm:py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#055027]/40"
                  placeholder=""
                />
              </div>

              {/* Phone Number */}
              <div className="mt-3 sm:mt-3.5">
                <label
                  htmlFor="contact-phone"
                  className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                >
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full rounded-[12px] bg-[#f0f0f0] border-0 px-3.5 py-2 sm:py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#055027]/40"
                  placeholder=""
                />
              </div>

              {/* Message */}
              <div className="mt-3 sm:mt-3.5">
                <label
                  htmlFor="contact-message"
                  className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-[12px] bg-[#f0f0f0] border-0 px-3.5 py-2 sm:py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#055027]/40 resize-none min-h-[85px] sm:min-h-[95px]"
                  placeholder=""
                />
              </div>

              {/* Submit Button */}
              <div className="mt-5 sm:mt-6 flex justify-center">
                <button
                  type="submit"
                  className="rounded-full border border-[#055027] bg-white px-8 sm:px-10 py-1.5 sm:py-2 text-[#055027] font-['Outfit'] font-bold text-xs sm:text-sm hover:bg-[#055027] hover:text-white transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
