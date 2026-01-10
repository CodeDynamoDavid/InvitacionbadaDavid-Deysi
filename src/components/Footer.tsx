"use client";
import { Playfair_Display, Great_Vibes } from "next/font/google";
import FavoriteIcon from "@mui/icons-material/Favorite";

const mainFont = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 bg-transparent flex flex-col items-center text-center">
      <div className="w-24 h-px bg-linear-to-r from-transparent via-sky-200 to-transparent mb-12"></div>

      <div className="space-y-6" data-aos="fade-up">
        <h2
          className={`${scriptFont.className} text-5xl md:text-6xl text-sky-800/80`}
        >
          ¡Gracias por ser parte de nuestra historia!
        </h2>

        <p
          className={`${mainFont.className} max-w-md mx-auto text-sky-900/60 leading-relaxed italic text-sm md:text-base`}
        >
          Su presencia es nuestro mejor regalo. Esperamos compartir con ustedes
          este inicio de un nuevo capítulo en nuestras vidas.
        </p>
      </div>

      <div
        className="mt-16 flex flex-col items-center gap-4"
        data-aos="zoom-in"
      >
        <div className="flex items-center gap-4 text-sky-300">
          <div className="h-px w-8 bg-sky-100"></div>
          <FavoriteIcon sx={{ fontSize: 16 }} className="animate-pulse" />
          <div className="h-px w-8 bg-sky-100"></div>
        </div>

        <span
          className={`${mainFont.className} uppercase tracking-[0.5em] text-[10px] text-sky-900/40 font-bold`}
        >
          David & Deysi • 2026
        </span>
      </div>

      <div className="mt-20 opacity-20 hover:opacity-50 transition-opacity duration-700">
        <p className="text-[9px] uppercase tracking-widest text-sky-900 font-sans">
          Hecho con amor • {currentYear}
        </p>
      </div>
    </footer>
  );
}
