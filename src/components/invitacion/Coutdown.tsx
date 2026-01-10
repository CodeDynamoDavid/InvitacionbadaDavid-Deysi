"use client";
import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";

const mainFont = Playfair_Display({ subsets: ["latin"], style: ["italic"] });

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ días: 0, hrs: 0, min: 0, seg: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          días: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
          min: Math.floor((difference / 1000 / 60) % 60),
          seg: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-16 bg-sky-50/50 text-center" data-aos="fade-up">
      <h2 className={`${mainFont.className} text-2xl text-sky-900/70 mb-8 italic`}>Faltan</h2>
      <div className="flex justify-center gap-4 md:gap-8">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-sky-100 mb-2">
              <span className="text-2xl md:text-3xl font-light text-sky-700">{value.toString().padStart(2, '0')}</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-sky-900/40 font-bold">{label}</span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sky-800/50 italic">para nuestra boda</p>
    </section>
  );
}