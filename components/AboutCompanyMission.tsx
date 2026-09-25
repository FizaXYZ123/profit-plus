import React from "react";
import Image from "next/image";

export default function AboutCompanyMission() {
  return (
    <section className="relative w-full bg-[#004e22] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D Perspective Glowing Green Grid Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30 sm:opacity-40">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#15803d" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Perspective Horizon Rays */}
          <line x1="600" y1="0" x2="-200" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="0" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="200" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="400" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="520" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="680" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="800" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="1000" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="1200" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />
          <line x1="600" y1="0" x2="1400" y2="600" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.45" />

          {/* Horizontal lines with perspective exponential spacing */}
          <line x1="0" y1="40" x2="1200" y2="40" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.25" />
          <line x1="0" y1="90" x2="1200" y2="90" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="0" y1="150" x2="1200" y2="150" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.35" />
          <line x1="0" y1="230" x2="1200" y2="230" stroke="#4ade80" strokeWidth="1.2" strokeOpacity="0.4" />
          <line x1="0" y1="330" x2="1200" y2="330" stroke="#4ade80" strokeWidth="1.3" strokeOpacity="0.45" />
          <line x1="0" y1="450" x2="1200" y2="450" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.5" />
          <line x1="0" y1="590" x2="1200" y2="590" stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.55" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight text-center">
          Our Mission
        </h2>

        {/* 2-Column Content */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-12 sm:mt-16">
          {/* Left Column: Mission Description */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="font-['Outfit'] font-bold text-2xl sm:text-3xl md:text-[34px] text-white tracking-tight leading-snug">
              Empowering Smarter Trading
            </h3>
            <p className="font-['Manrope'] text-emerald-100/90 text-sm sm:text-base leading-relaxed mt-4 sm:mt-5 max-w-xl">
              At ProfitPlus, our mission is to make futures trading simpler
              through intelligent automation and reliable technology. We build
              tools that help traders streamline trade execution, manage
              multiple accounts, and reduce manual tasks with confidence. By
              combining innovation with ease of use, we aim to support traders in
              creating more efficient and organized trading workflows.
            </p>
          </div>

          {/* Right Column: High-Tech Monitor Screen */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px] aspect-[16/10] sm:aspect-[16/9.5] rounded-[22px] sm:rounded-[26px] bg-[#02180b] p-2.5 sm:p-3 shadow-[0_12px_45px_rgba(0,0,0,0.5),0_0_35px_rgba(34,197,94,0.2)] border border-emerald-500/30 overflow-hidden group">
              {/* Inner Screen Display */}
              <div className="relative w-full h-full rounded-[16px] sm:rounded-[20px] overflow-hidden">
                <Image
                  src="/about-mission-robot.jpg"
                  alt="ProfitPlus AI Robot Trader Mission Display"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Subtle cyber shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
