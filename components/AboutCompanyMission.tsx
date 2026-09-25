import React from "react";
import Image from "next/image";

export default function AboutCompanyMission() {
  return (
    <section className="relative w-full bg-[#004e22] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/perspective-grid.webp"
          alt=""
          fill
          className="object-cover object-bottom opacity-50"
          priority
        />
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
