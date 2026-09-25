"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function WebsiteLoader() {
  const [progress, setProgress] = useState(15);
  const [fading, setFading] = useState(false);
  const [destroyed, setDestroyed] = useState(false);

  useEffect(() => {
    // Ultra-smooth percentage progression
    const t1 = setTimeout(() => setProgress(40), 90);
    const t2 = setTimeout(() => setProgress(72), 200);
    const t3 = setTimeout(() => setProgress(92), 320);
    const t4 = setTimeout(() => setProgress(100), 460);

    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 640);

    const removeTimer = setTimeout(() => {
      setDestroyed(true);
    }, 1050);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (destroyed) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-white/98 backdrop-blur-2xl transition-all duration-400 ease-out select-none ${
        fading
          ? "opacity-0 pointer-events-none scale-[0.98] filter blur-[1px]"
          : "opacity-100 scale-100"
      }`}
      aria-live="polite"
      aria-busy="true"
    >
      {/* Soft Ambient Mint/Green Glow behind the logo */}
      <div className="absolute w-72 h-72 rounded-full bg-[#199250]/10 blur-[80px] pointer-events-none" />

      {/* Main Centered Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Crisp Native Logo with gentle breathing pulse */}
        <div className="relative h-14 sm:h-16 w-48 sm:w-56 mb-5 flex items-center justify-center animate-[pulseSlow_2s_ease-in-out_infinite]">
          <Image
            src="/logo.png"
            alt="Profit Plus"
            width={220}
            height={64}
            className="w-auto h-full object-contain drop-shadow-[0_2px_10px_rgba(25,146,80,0.12)]"
            priority
          />
        </div>

        {/* Minimalist Slim Progress Track */}
        <div className="w-44 sm:w-52 h-[3px] bg-zinc-100 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#199250] to-[#22c55e] rounded-full transition-all duration-300 ease-out shadow-[0_0_8px_rgba(34,197,94,0.4)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Clean Numerical Percentage */}
        <div className="mt-3 flex items-center gap-1 font-['Outfit'] text-[11px] font-semibold text-zinc-400 tracking-wider">
          <span>{progress}%</span>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }
      `}</style>
    </div>
  );
}
