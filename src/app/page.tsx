"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Alex_Brush, Playfair_Display, Great_Vibes } from "next/font/google";

import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PentagonOutlinedIcon from "@mui/icons-material/PentagonOutlined";
import { SvgIconProps } from "@mui/material";

import AOS from "aos";
import "aos/dist/aos.css";

const alexBrush = Alex_Brush({ weight: "400", subsets: ["latin"] });
const mainFont = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

interface DividerWithIconProps {
  Icon: React.ComponentType<SvgIconProps>;
}

export const DividerWithIcon = ({ Icon }: DividerWithIconProps) => (
  <div className="flex items-center justify-center space-x-3 w-full">
    <div className="h-px flex-1 max-w-15 bg-linear-to-r from-transparent to-sky-300/60"></div>
    <div className="flex shrink-0 text-sky-400/60">
      <Icon sx={{ fontSize: 20 }} />
    </div>
    <div className="h-px flex-1 max-w-15 bg-linear-to-l from-transparent to-sky-300/60"></div>
  </div>
);

interface CornerFlowersProps {
  isOpen: boolean;
}

const CornerFlowers = ({ isOpen }: CornerFlowersProps) => {
  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 -scale-y-100"
        data-aos="fade-down-right"
      >
        <Image
          src="/arreglo.png"
          alt="decoración floral"
          fill
          className="object-contain opacity-30"
        />
      </div>
      <div
        className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 -scale-x-100 -scale-y-100"
        data-aos="fade-down-left"
      >
        <Image
          src="/arreglo.png"
          alt="decoración floral"
          fill
          className="object-contain opacity-30"
        />
      </div>
      <div
        className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48"
        data-aos="fade-up-right"
      >
        <Image
          src="/arreglo.png"
          alt="decoración floral"
          fill
          className="object-contain opacity-30"
        />
      </div>
      <div
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 -scale-x-100"
        data-aos="fade-up-left"
      >
        <Image
          src="/arreglo.png"
          alt="decoración floral"
          fill
          className="object-contain opacity-30"
        />
      </div>
    </div>
  );
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    setTimeout(() => {
      router.push("/invitacion");
    }, 1100);
  };

  return (
    <main className="min-h-screen bg-[#f4f9ff] flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <CornerFlowers isOpen={isOpen} />

      <div
        className={`w-full max-w-md transition-all duration-1000 text-center z-10 ${
          isOpen ? "opacity-0 -translate-y-10 scale-95" : "opacity-100"
        }`}
      >
        <div className="mb-4" data-aos="fade-down">
          <DividerWithIcon Icon={AutoAwesomeOutlinedIcon} />
        </div>

        <div className="mb-1">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className={`${mainFont.className} text-sky-900/70 text-sm font-bold tracking-[0.5em] uppercase whitespace-nowrap`}
          >
            Te invitamos a
          </h1>
          <h2
            data-aos="zoom-in"
            data-aos-delay="300"
            className={`${alexBrush.className} text-[14vw] sm:text-7xl md:text-8xl text-sky-700/80 leading-none py-2 whitespace-nowrap`}
          >
            Nuestra Boda
          </h2>
        </div>

        <div className="space-y-1 px-4">
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className={`${mainFont.className} italic text-sky-800/60 text-base md:text-lg whitespace-nowrap`}
          >
            Con amor hemos reservado para ti
          </p>

          <div
            className="flex flex-col items-center pt-2"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <h2
              className={`${scriptFont.className} text-sky-900/70 text-4xl md:text-5xl leading-tight`}
            >
              2 pases
            </h2>
            <div className="mt-1 w-full">
              <DividerWithIcon Icon={PentagonOutlinedIcon} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative w-[85%] max-w-sm md:max-w-md cursor-pointer px-4 mt-6 z-10"
        onClick={handleOpenEnvelope}
        data-aos="flip-up"
        data-aos-delay="900"
      >
        <div
          className={`relative w-full aspect-4/3 transition-all duration-1000 ${
            isOpen
              ? "scale-125 opacity-0 -translate-y-20 rotate-3"
              : "hover:scale-[1.02]"
          }`}
        >
          <div className="absolute inset-0 z-10 drop-shadow-[0_20px_50px_rgba(186,230,253,0.3)]">
            <Image
              src="/sobre.png"
              alt="Sobre"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleOpenEnvelope}
        className={`${
          mainFont.className
        } mt-8 text-sky-800/50 tracking-[0.4em] uppercase text-[10px] md:text-sm font-bold transition-opacity duration-500 z-10 ${
          isOpen ? "opacity-0" : "opacity-100 animate-pulse"
        }`}
      >
        Click para abrir
      </button>
    </main>
  );
}
