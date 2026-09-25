"use client";

import React, { useState, useEffect } from "react";
import CountrySelector from "@/components/CountrySelector";
import { getCountry } from "@/constants/countries";
import { API_ENDPOINTS } from "@/constants/endpoints";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
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

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
      };
    }
  }, [isOpen]);

  // Handle phone change - only digits allowed, capped strictly at current country's max digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    if (digitsOnly.length <= currentCountry.maxLength) {
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
      if (error) setError(null);
    }
  };

  // Prevent letter, symbol, and excess digit keystrokes directly on phone input
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

    if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
      return;
    }

    // Block non-digits
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    // Block typing if already reached country's max length (unless text is selected for overwrite)
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

    // Validation
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
      const res = await fetch(API_ENDPOINTS.BOOK_DEMO, {
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
        setError(data.message || "Failed to submit demo request");
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
        onClose();
      }, 3000);
    } catch (err) {
      console.error("Book demo submission error:", err);
      setError("Network error. Please try again later.");
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 overflow-y-auto"
      aria-modal="true"
      role="dialog"
      aria-label="Request a Demo"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[480px] bg-white rounded-[24px] sm:rounded-[28px] shadow-2xl p-6 sm:p-9 z-10 animate-[fadeInScale_0.2s_ease-out] my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Heading */}
        <h3 className="font-outfit font-bold text-[24px] sm:text-[28px] leading-tight text-[#1E293B] tracking-tight text-center mb-6">
          Request a Demo
        </h3>

        {submitted ? (
          <div className="py-8 text-center animate-[fadeInScale_0.25s_ease-out]">
            <div className="w-14 h-14 rounded-full bg-[#055027]/15 text-[#055027] flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
              ✓
            </div>
            <h3 className="font-['Outfit'] font-bold text-lg text-zinc-900 mb-1">
              Request Sent!
            </h3>
            <p className="font-['Manrope'] text-zinc-600 text-sm">
              Thank you! We&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 sm:gap-4">
            {/* Error Message */}
            {error && (
              <div className="rounded-[12px] bg-red-50 border border-red-200 px-3.5 py-2.5 text-red-600 text-xs sm:text-sm font-['Manrope'] flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Name */}
            <div>
              <label
                htmlFor="demo-name"
                className="font-['Outfit'] font-semibold text-[13px] text-zinc-800 block mb-1"
              >
                Name
              </label>
              <input
                id="demo-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-[12px] bg-[#f2f2f2] border-0 px-4 py-2.5 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#199250]/50 transition"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="demo-email"
                className="font-['Outfit'] font-semibold text-[13px] text-zinc-800 block mb-1"
              >
                Email
              </label>
              <input
                id="demo-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-[12px] bg-[#f2f2f2] border-0 px-4 py-2.5 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#199250]/50 transition"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone Number with Country Code Select */}
            <div>
              <label
                htmlFor="demo-phone"
                className="font-['Outfit'] font-semibold text-[13px] text-zinc-800 block mb-1"
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

                {/* Phone Input: Only allows numbers, letters prevented, capped at country's exact max digits */}
                <div className="relative flex-1 min-w-0 flex items-center">
                  <input
                    id="demo-phone"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={currentCountry.maxLength}
                    required
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onKeyDown={handlePhoneKeyDown}
                    className="w-full rounded-[12px] bg-[#f2f2f2] border-0 pl-3.5 pr-11 py-2.5 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#199250]/50 transition"
                    placeholder="Enter phone number"
                  />
                  {/* Digit Counter Badge or Green Success Tick */}
                  <div className="absolute right-3 flex items-center pointer-events-none select-none">
                    {formData.phone.length === currentCountry.maxLength ? (
                      <div className="w-5 h-5 rounded-full bg-[#199250] text-white flex items-center justify-center shadow-xs animate-[fadeInScale_0.15s_ease-out]">
                        <svg
                          className="w-3 h-3"
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
                      <span className="text-[11px] font-mono text-zinc-400">
                        {formData.phone.length}/{currentCountry.maxLength}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="demo-message"
                className="font-['Outfit'] font-semibold text-[13px] text-zinc-800 block mb-1"
              >
                Message
              </label>
              <textarea
                id="demo-message"
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-[12px] bg-[#f2f2f2] border-0 px-4 py-2.5 text-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#199250]/50 transition resize-none"
                placeholder="Tell us what you're looking for..."
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center mt-2">
              <button
                type="submit"
                disabled={loading}
                className="rounded-full border border-[#055027] bg-[#055027] text-white px-10 py-2.5 font-['Outfit'] font-bold text-sm hover:bg-[#043d1e] hover:shadow-md transition-all shadow-sm cursor-pointer active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading && (
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
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
  );
}
