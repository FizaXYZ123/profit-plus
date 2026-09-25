"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/constants/export";
import CountrySelector from "@/components/CountrySelector";
import { getCountry } from "@/constants/countries";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    countryIso: "US",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Get active country rules (minLength, maxLength, format)
  const currentCountry = getCountry(formData.countryIso);

  // Handle phone change - only digits allowed, capped strictly at current country's max digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    if (digitsOnly.length <= currentCountry.maxLength) {
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
      if (error) setError(null);
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
      "Enter",
      "Home",
      "End",
    ];
    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) return;
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    const target = e.target as HTMLInputElement;
    const hasSelection =
      target.selectionStart !== null &&
      target.selectionEnd !== null &&
      target.selectionEnd - target.selectionStart > 0;

    if (formData.phone.length >= currentCountry.maxLength && !hasSelection) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setError("Please enter your name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please provide a valid email address");
      return;
    }

    if (!trimmedPhone) {
      setError("Please enter your phone number");
      return;
    }

    if (trimmedPhone.length < currentCountry.minLength) {
      setError(
        currentCountry.minLength === currentCountry.maxLength
          ? `Please enter a valid ${currentCountry.maxLength}-digit phone number for ${currentCountry.name}`
          : `Please enter a valid phone number (${currentCountry.minLength}-${currentCountry.maxLength} digits) for ${currentCountry.name}`
      );
      return;
    }

    if (!trimmedMessage) {
      setError("Please enter a message");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          countryCode: formData.countryCode,
          phone: trimmedPhone,
          message: trimmedMessage,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to submit contact form");
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          countryCode: "+1",
          countryIso: "US",
          phone: "",
          message: "",
        });
      }, 4000);
    } catch (err) {
      console.error("Contact submission error:", err);
      setError("Network error. Please try again later.");
      setLoading(false);
    }
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
              {/* Error Message */}
              {error && (
                <div className="mb-3 rounded-[12px] bg-red-50 border border-red-200 px-3.5 py-2 text-red-600 text-xs font-['Manrope'] flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

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

              {/* Phone Number with Country Code */}
              <div className="mt-3 sm:mt-3.5">
                <label
                  htmlFor="contact-phone"
                  className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                >
                  Phone Number
                </label>
                <div className="flex gap-2">
                  {/* Custom Country Code Dropdown with Real Flags */}
                  <CountrySelector
                    value={formData.countryCode}
                    selectedCode={formData.countryIso}
                    onChange={(country) => {
                      setFormData((prev) => ({
                        ...prev,
                        countryCode: country.dialCode,
                        countryIso: country.code,
                        phone: prev.phone.slice(0, country.maxLength),
                      }));
                      if (error) setError(null);
                    }}
                  />

                  {/* Phone Input: Only allows numbers, capped strictly at country's exact max digits */}
                  <div className="relative flex-1 min-w-0 flex items-center">
                    <input
                      id="contact-phone"
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={currentCountry.maxLength}
                      required
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onKeyDown={handlePhoneKeyDown}
                      className="w-full rounded-[12px] bg-[#f0f0f0] border-0 pl-3.5 pr-11 py-2 sm:py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#055027]/40"
                      placeholder="Enter phone number"
                    />
                    {/* Digit Counter Badge or Green Success Tick */}
                    <div className="absolute right-3 flex items-center pointer-events-none select-none">
                      {formData.phone.length === currentCountry.maxLength ? (
                        <div className="w-4.5 h-4.5 rounded-full bg-[#199250] text-white flex items-center justify-center shadow-xs animate-[fadeInScale_0.15s_ease-out]">
                          <svg
                            className="w-2.5 h-2.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      ) : (
                        <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400">
                          {formData.phone.length}/{currentCountry.maxLength}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
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
                  disabled={loading}
                  className="rounded-full border border-[#055027] bg-[#055027] text-white px-8 sm:px-10 py-1.5 sm:py-2 font-['Outfit'] font-bold text-xs sm:text-sm hover:bg-[#043d1e] transition-all shadow-xs cursor-pointer active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {loading && (
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  )}
                  <span>{loading ? "Submitting..." : "Submit"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
