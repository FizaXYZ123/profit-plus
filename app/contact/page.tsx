"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referralCode: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        referralCode: "",
        phone: "",
        message: "",
      });
    }, 4500);
  };

  return (
    <div className="w-full flex-1 flex flex-col bg-[#032010] selection:bg-[#199250] selection:text-white overflow-x-hidden">
      {/* Main Hero & Card Section */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center">
        {/* Wireframe Network Globe (public/contact-bg.png) behind content */}
        <div className="absolute top-28 sm:top-32 left-1/2 -translate-x-1/2 w-[620px] sm:w-[820px] md:w-[980px] h-[340px] sm:h-[440px] pointer-events-none select-none z-0 opacity-80">
          <Image
            src="/contact-bg.png"
            alt="Global Network Wireframe"
            fill
            className="object-contain object-top"
            priority
            unoptimized
          />
        </div>

        {/* Section Heading & Subtitle */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h1 className="font-['Outfit'] font-black text-3xl sm:text-5xl md:text-[54px] text-white tracking-tight">
            Contact <span className="text-zinc-300">Us</span>
          </h1>
          <p className="font-['Manrope'] text-zinc-300 text-xs sm:text-sm md:text-[15px] font-normal mt-2.5 sm:mt-3 leading-relaxed">
            Whether you have questions, feedback, or need support we&apos;re here to help.
          </p>
        </div>

        {/* The Mint Green Container Card matching user reference image */}
        <div
          className="relative z-10 w-full max-w-5xl rounded-[32px] sm:rounded-[42px] p-6 sm:p-10 md:p-12 lg:p-14 shadow-2xl"
          style={{ backgroundColor: "#8fdcb7" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Info & Socials (5.5 cols on lg) */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full pt-1">
              <div>
                <h2 className="font-['Outfit'] font-black text-3xl sm:text-4xl md:text-[42px] tracking-tight text-[#084824] leading-tight">
                  We&apos;re Here <span className="text-[#3c7855]">to Help</span>
                </h2>

                <p className="font-['Manrope'] text-xs sm:text-[13.5px] leading-relaxed text-[#094723]/90 mt-4 mb-7 max-w-md font-medium">
                  Have questions about ProfitPlus or need assistance with our
                  software? Our team is ready to help you with product
                  information, technical support, or general inquiries. Reach out
                  anytime, and we&apos;ll get back to you as soon as possible.
                </p>

                {/* Our Location */}
                <div className="mb-5 sm:mb-6">
                  <h3 className="font-['Outfit'] font-bold text-base sm:text-[18px] text-[#084824] mb-1">
                    Our Location
                  </h3>
                  <p className="font-['Manrope'] text-xs sm:text-[13px] text-[#094723]/85 font-normal">
                    1337 Wood Thrush Ct, Greenwood, IN 46143, USA
                  </p>
                </div>

                {/* Email Us */}
                <div className="mb-5 sm:mb-6">
                  <h3 className="font-['Outfit'] font-bold text-base sm:text-[18px] text-[#084824] mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:Sales@profitplus.us"
                    className="font-['Manrope'] text-xs sm:text-[13px] text-[#094723]/90 hover:underline font-medium"
                  >
                    Sales@profitplus.us
                  </a>
                </div>

                {/* Follow Us */}
                <div>
                  <h3 className="font-['Outfit'] font-bold text-base sm:text-[18px] text-[#084824] mb-1">
                    Follow Us
                  </h3>
                  <p className="font-['Manrope'] text-xs sm:text-[12.5px] text-[#094723]/80 mb-3 max-w-sm">
                    Stay connected with ProfitPlus on our social media channels for
                    updates, news, and helpful resources.
                  </p>

                  {/* Social Icons matching user image: Facebook, TikTok, Instagram, YouTube */}
                  <div className="flex items-center gap-4 text-zinc-950">
                    {/* Facebook */}
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-7 h-7 flex items-center justify-center hover:text-[#084824] hover:scale-110 transition-transform"
                    >
                      <svg
                        className="w-4.5 h-4.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    {/* TikTok */}
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="w-7 h-7 flex items-center justify-center hover:text-[#084824] hover:scale-110 transition-transform"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.32a6.34 6.34 0 0 0-.85-.06A6.34 6.34 0 0 0 3 15.6a6.34 6.34 0 0 0 10.82 4.48c1.37-1.37 2.07-3.1 2.07-5.18V8.71a8.28 8.28 0 0 0 4.7 1.48v-3.5z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-7 h-7 flex items-center justify-center hover:text-[#084824] hover:scale-110 transition-transform"
                    >
                      <svg
                        className="w-4.5 h-4.5 fill-none stroke-current"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-7 h-7 flex items-center justify-center hover:text-[#084824] hover:scale-110 transition-transform"
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: White Contact Form Card (6 cols on lg) */}
            <div className="lg:col-span-6 bg-white rounded-[26px] sm:rounded-[32px] p-6 sm:p-8 md:p-9 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#084824]/15 text-[#084824] flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="font-['Outfit'] font-bold text-lg text-zinc-900 mb-1">
                    Thank You!
                  </h3>
                  <p className="font-['Manrope'] text-zinc-600 text-xs sm:text-sm">
                    Your message has been sent. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-[12px] bg-[#eeeeee] border-0 px-3.5 py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#084824]/40 transition-all"
                      placeholder=""
                    />
                  </div>

                  {/* Email */}
                  <div className="mt-3.5">
                    <label
                      htmlFor="form-email"
                      className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-[12px] bg-[#eeeeee] border-0 px-3.5 py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#084824]/40 transition-all"
                      placeholder=""
                    />
                  </div>

                  {/* Referral code (optional) */}
                  <div className="mt-3.5">
                    <label
                      htmlFor="form-referral"
                      className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                    >
                      Referral code (optional)
                    </label>
                    <input
                      id="form-referral"
                      type="text"
                      value={formData.referralCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          referralCode: e.target.value,
                        })
                      }
                      className="w-full rounded-[12px] bg-[#eeeeee] border-0 px-3.5 py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#084824]/40 transition-all"
                      placeholder=""
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="mt-3.5">
                    <label
                      htmlFor="form-phone"
                      className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-[12px] bg-[#eeeeee] border-0 px-3.5 py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#084824]/40 transition-all"
                      placeholder=""
                    />
                  </div>

                  {/* Message */}
                  <div className="mt-3.5">
                    <label
                      htmlFor="form-message"
                      className="font-['Outfit'] font-bold text-xs sm:text-[13px] text-zinc-900 block mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full rounded-[12px] bg-[#eeeeee] border-0 px-3.5 py-2.5 text-zinc-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#084824]/40 transition-all resize-y min-h-[90px]"
                      placeholder=""
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-5 flex justify-center">
                    <button
                      type="submit"
                      className="rounded-full border border-[#084824] bg-white px-9 py-2 text-[#084824] font-['Outfit'] font-bold text-xs sm:text-sm hover:bg-[#084824] hover:text-white transition-all shadow-xs cursor-pointer active:scale-95"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
