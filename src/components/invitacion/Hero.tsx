"use client";
import { Alex_Brush, Playfair_Display } from "next/font/google";
import Image from "next/image";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { SvgIconProps } from "@mui/material";

const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });
const mainFont = Playfair_Display({ subsets: ["latin"] });

interface DividerWithIconProps {
  Icon: React.ComponentType<SvgIconProps>;
}

const DividerWithIcon = ({ Icon }: DividerWithIconProps) => (
  <div className="flex items-center justify-center space-x-3 w-full my-2">
    <div className="h-px flex-1 max-w-15 bg-linear-to-r from-transparent to-sky-300/60"></div>
    <div className="flex shrink-0 text-sky-300/60">
      <Icon sx={{ fontSize: 20 }} />
    </div>
    <div className="h-px flex-1 max-w-15 bg-linear-to-l from-transparent to-sky-300/60"></div>
  </div>
);

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center p-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/foto1.jpeg"
          alt="David y Deysi"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-sky-950/60 via-sky-900/20 to-sky-950/80 backdrop-blur-[1px]"></div>
      </div>

      <div className="absolute inset-6 md:inset-10 z-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-sky-300/40"></div>
        <div className="absolute -top-2 left-0 w-px h-4 bg-linear-to-b from-transparent to-sky-300/30"></div>
        <div className="absolute top-0 -left-2 h-px w-4 bg-linear-to-r from-transparent to-sky-300/30"></div>

        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-sky-300/40"></div>
        <div className="absolute -top-2 right-0 w-px h-4 bg-linear-to-b from-transparent to-sky-300/30"></div>
        <div className="absolute top-0 -right-2 h-px w-4 bg-linear-to-l from-transparent to-sky-300/30"></div>

        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-sky-300/40"></div>
        <div className="absolute -bottom-2 left-0 w-px h-4 bg-linear-to-t from-transparent to-sky-300/30"></div>
        <div className="absolute bottom-0 -left-2 h-px w-4 bg-linear-to-r from-transparent to-sky-300/30"></div>

        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-sky-300/40"></div>
        <div className="absolute -bottom-2 right-0 w-px h-4 bg-linear-to-t from-transparent to-sky-300/30"></div>
        <div className="absolute bottom-0 -right-2 h-px w-4 bg-linear-to-l from-transparent to-sky-300/30"></div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
        <FavoriteOutlinedIcon className="absolute top-[10%] left-[15%] text-sky-200 text-lg animate-pulse" />
        <FavoriteOutlinedIcon className="absolute bottom-[15%] right-[10%] text-sky-200 text-lg animate-pulse" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center w-full max-w-sm"
        data-aos="fade-up"
      >
        <DividerWithIcon Icon={AutoAwesomeOutlinedIcon} />

        <div className="space-y-4 w-full">
          <span className="flex items-center justify-center gap-3 uppercase tracking-[0.4em] text-[10px] text-sky-200 opacity-90 font-bold">
            Nos casamos
          </span>

          <div className="flex flex-col items-center">
            <h2
              className={`${alexBrush.className} text-7xl md:text-8xl text-white drop-shadow-lg`}
            >
              David
            </h2>

            <div className="flex items-center justify-center w-full gap-20 my-2">
              <div className="h-px flex-1 bg-linear-to-r from-transparent via-sky-300/50 to-sky-300/80"></div>
              <span
                className={`${alexBrush.className} text-5xl md:text-6xl text-sky-300 drop-shadow-md`}
              >
                &
              </span>
              <div className="h-px flex-1 bg-linear-to-l from-transparent via-sky-300/50 to-sky-300/80"></div>
            </div>

            <h2
              className={`${alexBrush.className} text-7xl md:text-8xl text-white drop-shadow-lg`}
            >
              Deysi
            </h2>
          </div>
        </div>

        <DividerWithIcon Icon={AutoAwesomeOutlinedIcon} />

        <div className="mt-8 space-y-4">
          <div className="flex flex-col items-center">
            <p
              className={`${mainFont.className} text-xl md:text-2xl italic font-light text-sky-100`}
            >
              21 de marzo de 2026
            </p>
          </div>

          <p className="max-w-70 md:max-w-md mx-auto text-sm text-sky-50/80 leading-relaxed font-light italic px-4">
            Con la bendición de Dios y de nuestras familias, invitamos a
            compartir el día en que uniremos nuestras vidas.
          </p>
          <FavoriteOutlinedIcon className="text-sky-300/50 mt-2" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center opacity-50">
        <span className="text-[8px] uppercase tracking-[0.3em] text-white mb-2">
          Desliza
        </span>
        <div className="w-px h-10 bg-linear-to-b from-sky-300 to-transparent"></div>
      </div>
    </section>
  );
}
