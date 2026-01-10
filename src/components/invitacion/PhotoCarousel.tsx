"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display, Great_Vibes } from "next/font/google";

const mainFont = Playfair_Display({ subsets: ["latin"], style: ["italic"] });
const scriptFont = Great_Vibes({ weight: "400", subsets: ["latin"] });

interface Photo {
  src: string;
  id: number;
  caption: string;
  size: "small" | "large";
}

const PHOTOS: Photo[] = [
  { src: "/foto1.jpeg", id: 1, caption: "Nuestro primer viaje", size: "large" },
  { src: "/foto1.jpeg", id: 2, caption: "Momentos mágicos", size: "small" },
  { src: "/foto1.jpeg", id: 3, caption: "Caminando juntos", size: "small" },
  { src: "/foto1.jpeg", id: 4, caption: "Para siempre", size: "large" },
];

export default function PhotoGallery() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto bg-transparent">
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className={`${scriptFont.className} text-6xl text-sky-800 mb-4`}>
          Nuestros Momentos
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-sky-200"></div>
          <p
            className={`${mainFont.className} text-sky-900/50 uppercase tracking-[0.3em] text-[10px]`}
          >
            Una historia de amor
          </p>
          <div className="h-px w-12 bg-sky-200"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {PHOTOS.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-2xl overflow-hidden shadow-sm group ${
              photo.size === "large"
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-sky-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <p className="text-white text-sm italic font-light tracking-wide">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
