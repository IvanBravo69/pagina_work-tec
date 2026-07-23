"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    alt: "Trabajadores en obra con equipo de seguridad",
  },
  {
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1600&q=80",
    alt: "Planta industrial",
  },
  {
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    alt: "Construcción y seguridad",
  },
  {
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1600&q=80",
    alt: "Laboratorio de análisis",
  },
];

interface HeroSliderProps {
  logo: string;
}

export default function HeroSlider({ logo }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white overflow-hidden min-h-[580px] flex items-center">
      {/* Slides de fondo */}
      {slides.map((slide, i) => (
        <div
          key={slide.img}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.img}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1d3461]/85" />

      {/* Indicadores */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#4db6a9]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative w-full max-w-6xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center gap-12 z-10">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-[#4db6a9]/20 text-[#4db6a9] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Seguridad · Salud · Medio Ambiente
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Tu empresa más segura,<br />
            <span className="text-[#4db6a9]">tu equipo más protegido</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
            Asesoría y consultoría integral en seguridad e higiene laboral. Cumplimiento normativo,
            mediciones, capacitaciones y mucho más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#servicios"
              className="bg-[#4db6a9] hover:bg-[#3a9c90] text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Ver servicios
            </a>
            <a
              href="#contacto"
              className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-md transition-colors"
            >
              Contactar ahora
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="Work-tec"
            width={280}
            height={100}
            className="object-contain"
            style={{ mixBlendMode: "screen" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
