"use client";
import { useEffect } from "react";
import { Alex_Brush, Playfair_Display } from "next/font/google";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });
const mainFont = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export default function InfoPadres() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  return (
    <section className="py-20 px-4 flex justify-center bg-[#f4f9ff]">
      <div className="w-full max-w-2xl bg-white shadow-2xl p-10 md:p-20 text-center space-y-12 border-2 border-sky-200 rounded-[3rem] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-28 h-28 opacity-40 pointer-events-none">
          <Image
            src="/hojas.png"
            alt="flores"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-0 right-0 w-28 h-28 opacity-40 pointer-events-none">
          <Image
            src="/hojas.png"
            alt="flores"
            fill
            className="object-contain -scale-x-100"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-28 h-28 opacity-40 pointer-events-none">
          <Image
            src="/hojas.png"
            alt="flores"
            fill
            className="object-contain -scale-y-100"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-28 h-28 opacity-40 pointer-events-none">
          <Image
            src="/hojas.png"
            alt="flores"
            fill
            className="object-contain -scale-x-100 -scale-y-100"
          />
        </div>

        <div
          className="space-y-4 relative z-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2
            className={`${mainFont.className} text-sky-900/80 italic text-2xl md:text-3xl`}
          >
            Con la bendición de Dios
          </h2>
          <p
            className={`${mainFont.className} text-slate-400 text-[10px] md:text-xs tracking-[0.3em] uppercase`}
          >
            y en compañía de nuestros padres
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-slate-700 relative z-10">
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="300">
            <h4
              className={`${alexBrush.className} text-4xl md:text-5xl text-sky-600/70`}
            >
              Padres del novio
            </h4>
            <div
              className={`${mainFont.className} text-sm md:text-base text-slate-500 leading-relaxed uppercase tracking-[0.15em]`}
            >
              <p>Eduardo Mariano Feria Peña</p>
              <p>Kiara Montalvo Gomez</p>
            </div>
          </div>

          <div className="space-y-3" data-aos="fade-up" data-aos-delay="500">
            <h4
              className={`${alexBrush.className} text-4xl md:text-5xl text-sky-600/70`}
            >
              Padres de la novia
            </h4>
            <div
              className={`${mainFont.className} text-sm md:text-base text-slate-500 leading-relaxed uppercase tracking-[0.15em]`}
            >
              <p>Javier Vela Ortiz</p>
              <p>Carlota Juiro Mamani</p>
            </div>
          </div>
        </div>

        <div className="pt-6 space-y-10 relative z-10">
          <div className="space-y-3" data-aos="fade-up" data-aos-delay="500">
            <h4
              className={`${alexBrush.className} text-4xl md:text-5xl text-sky-600/70`}
            >
              Padrinos de Boda
            </h4>
            <div
              className={`${mainFont.className} text-sm md:text-lg text-slate-600 uppercase tracking-[0.2em] font-light`}
            >
              <p>Javier Vela Ortiz</p>
              <p>Kiara Montalvo Gomez</p>
            </div>
          </div>

          <div
            className="grid md:grid-cols-2 gap-8 pt-10 border-t border-sky-100/60"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="space-y-2">
              <h4 className={`${alexBrush.className} text-3xl text-sky-600/60`}>
                Testigos
              </h4>
              <p
                className={`${mainFont.className} text-[13px] md:text-sm text-slate-400 italic tracking-wide`}
              >
                Diana Velásquez, Gerardo Rubio
              </p>
            </div>
            <div className="space-y-2">
              <h4 className={`${alexBrush.className} text-3xl text-sky-600/60`}>
                Testigos Civil
              </h4>
              <p
                className={`${mainFont.className} text-[13px] md:text-sm text-slate-400 italic tracking-wide`}
              >
                Carlos Chong, Diana Velásquez
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-4 flex flex-col items-center space-y-4 relative z-10"
          data-aos="fade-up"
          data-aos-delay="1100"
        >
          <FavoriteOutlinedIcon className="text-sky-200 text-xs" />
          <p
            className={`${mainFont.className} text-sky-800/40 text-sm md:text-base italic tracking-wider`}
          >
            Nos complace invitarte a ser parte de este gran día.
          </p>
        </div>
      </div>
    </section>
  );
}
