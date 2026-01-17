"use client";
import { Playfair_Display, Great_Vibes } from "next/font/google";
import ChurchOutlinedIcon from "@mui/icons-material/ChurchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import { SvgIconProps } from "@mui/material";

const mainFont = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
});
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

interface Evento {
  hora: string;
  titulo: string;
  Icono: React.ComponentType<SvgIconProps>;
}

const eventos: Evento[] = [
  {
    hora: "09:00 AM",
    titulo: "Ceremonia Civil",
    Icono: ChurchOutlinedIcon,
  },
  { hora: "11:00 AM", titulo: "Ceremonia Cristiana", Icono: FavoriteBorderOutlinedIcon },
  { hora: "01:30 PM", titulo: "recepcion", Icono: CelebrationOutlinedIcon },
  { hora: "02:00 PM", titulo: "Almuerzo", Icono: RestaurantOutlinedIcon },
  { hora: "04:30 PM", titulo: "Fiesta", Icono: CelebrationOutlinedIcon },
];

export default function Itinerario() {
  return (
    <section className="py-24 px-6 max-w-2xl mx-auto bg-white/30 backdrop-blur-sm rounded-3xl my-10">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className={`${scriptFont.className} text-6xl text-sky-700/80 mb-2`}>
          Nuestro Día
        </h2>
        <p
          className={`${mainFont.className} uppercase tracking-[0.3em] text-[10px] text-sky-900/40 font-bold`}
        >
          Itinerario de la Boda
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-linear-to-b from-transparent via-sky-200 to-transparent"></div>

        <div className="space-y-16">
          {eventos.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <div
                className={`w-[42%] ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <span
                  className={`${mainFont.className} text-sky-600/60 font-bold text-xs tracking-widest`}
                >
                  {item.hora}
                </span>
                <h3
                  className={`${mainFont.className} text-slate-700 text-lg md:text-xl leading-tight mt-1`}
                >
                  {item.titulo}
                </h3>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#f4f9ff] border border-sky-100 flex items-center justify-center z-10 shadow-sm group hover:scale-110 transition-transform duration-500">
                  <item.Icono
                    sx={{ fontSize: 18 }}
                    className="text-sky-400/70"
                  />
                </div>
              </div>

              <div className="w-[42%]"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20" data-aos="fade-up">
        <p className={`${mainFont.className} text-sky-800/50 italic text-sm`}>
          ¡Cada momento es más especial a tu lado!
        </p>
      </div>
    </section>
  );
}
