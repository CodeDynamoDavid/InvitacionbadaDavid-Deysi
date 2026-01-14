"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
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
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      
      {/* Fondo */}
      <Image
        src="/pais.png"
        alt="David y Deysi"
        fill
        className="object-cover"
        priority
      />

      {/* Oscurecer fondo */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6">

        <h2 className={`${mainFont.className} text-4xl md:text-6xl mb-10`}>
          Faltan
        </h2>

        {/* Contador */}
        <div className="flex justify-center gap-4 md:gap-8 mb-10">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="text-center">
              
              <div className="w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-md border border-white/30 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-3xl md:text-5xl font-light">
                  {value.toString().padStart(2, "0")}
                </span>
              </div>

              <span className="block mt-3 text-xs tracking-widest uppercase opacity-80">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl italic opacity-90">
          para nuestra boda
        </p>

      </div>
    </section>
  );
}
