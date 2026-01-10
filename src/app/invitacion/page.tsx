"use client";
import Hero from "@/src/components/invitacion/Hero";
import InfoPadres from "@/src/components/invitacion/InfoPadres";
import Ubicaciones from "@/src/components/invitacion/Ubicaciones";
import Countdown from "@/src/components/invitacion/Coutdown";
import Itinerario from "@/src/components/invitacion/Itinerario";
import DressCode from "@/src/components/invitacion/DressCode";
import PhotoCarousel from "@/src/components/invitacion/PhotoCarousel";
import Contact from "@/src/components/invitacion/Contact";
import Footer from "@/src/components/Footer";

export default function InvitacionPage() {
  return (
    <main className="min-h-screen bg-[#f4f9ff]">
      <Hero />
      <InfoPadres />
      <PhotoCarousel />
      <Ubicaciones />
      <Countdown targetDate="2026-01-24T11:45:00" />
      <Itinerario />
      <DressCode />
      <Contact />
      <Footer/>
    </main>
  );
}
