"use client";
import Image from "next/image";
import { Playfair_Display, Great_Vibes } from "next/font/google";

const mainFont = Playfair_Display({ subsets: ["latin"], style: ["italic", "normal"] });
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function DressCode() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`${scriptFont.className} text-5xl text-sky-800 mb-2`}>
            Código de Vestimenta
          </h2>
          <p className={`${mainFont.className} uppercase tracking-[0.4em] text-sky-600/60 text-[10px] font-bold`}>
            Formal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          <div className="flex flex-col items-center" data-aos="fade-right">
            <div className="relative w-full aspect-4/5 overflow-hidden rounded-t-full shadow-sm mb-6 grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/foto1.jpeg" 
                alt="Ellos" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-sky-900/5 hover:bg-transparent transition-colors" />
            </div>
            <h3 className={`${mainFont.className} text-2xl text-sky-900 mb-2`}>Ellos</h3>
            <p className="text-slate-500 font-light tracking-widest uppercase text-[10px] mb-1">Traje Formal</p>
            <p className="text-slate-400 text-xs italic font-serif italic">Corbata o Michi</p>
          </div>

          <div className="flex flex-col items-center" data-aos="fade-left">
            <div className="relative w-full aspect-4/5 overflow-hidden rounded-t-full shadow-sm mb-6 grayscale hover:grayscale-0 transition-all duration-700">
              <Image 
                src="/foto1.jpeg" 
                alt="Ellas" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-sky-900/5 hover:bg-transparent transition-colors" />
            </div>
            <h3 className={`${mainFont.className} text-2xl text-sky-900 mb-2`}>Ellas</h3>
            <p className="text-slate-500 font-light tracking-widest uppercase text-[10px] mb-1">Vestido Largo</p>
            <p className="text-slate-400 text-xs italic font-serif italic">Tonos sugeridos: Pastel</p>
          </div>
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className={`${mainFont.className} text-sky-800/40 text-sm italic`}>
            ¡Esperamos verte con tu mejor atuendo!
          </p>
        </div>
      </div>
    </section>
  );
}