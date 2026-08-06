"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useState } from "react";

const testimonials = [
  {
    quote: "Das Curry schmeckt mir am besten. Das esse ich jeden Dienstag!",
    name: "Lena, 8 Jahre",
  },
  {
    quote:
      "Ich mag, dass man immer auswählen kann. Manchmal nehme ich das Gemüse, manchmal das andere.",
    name: "Tim, 10 Jahre",
  },
  {
    quote:
      "Die Köchin kennt meinen Namen und weiß, was ich nicht essen darf. Das finde ich gut.",
    name: "Mia, 9 Jahre",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  const visible = getVisible();

  return (
    <section className="bg-bio-sand-beige py-[150px]">
      {/* 
        Container darf hier für die Pfeile ruhig die volle Breite nutzen, 
        daher overflow-hidden vermeiden und w-full setzen 
      */}
      <div className="mx-auto flex w-full max-w-full flex-col items-center">
        {/* Illustration */}
        <Image
          src="/icons/Illustration.svg"
          alt=""
          width={162}
          height={173}
          className="mb-8"
        />

        {/* Überschrift */}
        <h2 className="text-center font-montagu-light text-5xl font-extralight leading-[1.1] text-bio-dark md:text-[64px]">
          Das sagen die
          <br />
          Kinder
        </h2>

        {/* Carousel Container - Volle Breite, relative Positionierung für die Pfeile */}
        <div className="relative mt-20 flex w-full items-center justify-center px-4 md:px-24">
          {/* Linker Pfeil - Absolut am linken Fensterrand */}
          <button
            type="button"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1,
              )
            }
            aria-label="Vorheriges Zitat"
            className="absolute left-4 top-1/2 -translate-y-1/2 shrink-0 cursor-pointer p-4 transition-opacity hover:opacity-60 md:left-8 lg:left-12"
          >
            <Image
              src="/icons/Icon_Arrow_Small_new.svg"
              alt="Zurück"
              width={34}
              height={25}
            />
          </button>

          {/* Grid für die Zitate - In der Mitte zentriert */}
          <div className="mx-auto grid w-full max-w-375 grid-cols-1 gap-12 px-4 md:grid-cols-3">
            {visible.map((item, index) => (
              <blockquote
                key={`${item.name}-${index}`}
                className="flex flex-col items-center text-center"
              >
                <p className="font-serif text-[24px] font-light text-bio-dark">
                  "{item.quote}"
                </p>
                <footer className="mt-3 text-[11px] font-medium text-bio-dark">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>

          {/* Rechter Pfeil - Absolut am rechten Fensterrand */}
          <button
            type="button"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1,
              )
            }
            aria-label="Nächstes Zitat"
            className="absolute right-4 top-1/2 -translate-y-1/2 shrink-0 cursor-pointer p-4 transition-opacity hover:opacity-60 md:right-8 lg:right-12"
          >
            <Image
              src="/icons/Icon_Arrow_Small_new.svg"
              alt="Zurück"
              width={34}
              height={25}
              className="rotate-180"
            />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-16 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Gehe zu Zitat ${index + 1}`}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all ${
                index === currentIndex
                  ? "bg-bio-dark"
                  : "bg-bio-dark/20 hover:bg-bio-dark/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
