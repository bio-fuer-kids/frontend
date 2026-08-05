"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Das Essen schmeckt richtig gut! Besonders der Gemüseeintopf ist mein Lieblingsgericht.",
    name: "Emma, 9 Jahre",
  },
  {
    quote:
      "Ich esse jetzt viel mehr Gemüse als früher. Die Köche kochen richtig lecker!",
    name: "Lukas, 11 Jahre",
    highlight: true,
  },
  {
    quote:
      "Meine Freunde und ich freuen uns jeden Tag auf das Mittagessen in der Schule.",
    name: "Sophie, 8 Jahre",
  },
  {
    quote:
      "Die Nudeln mit Tomatensoße sind super! Und der Obstsalat danach auch.",
    name: "Max, 10 Jahre",
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
    <section className="section-py bg-bio-sand-muted">
      <Container className="flex flex-col items-center">
        <Image
          src="/icons/Illustration.svg"
          alt=""
          width={160}
          height={160}
          className="mb-6"
        />
        <h2 className="text-h2 text-bio-dark">Das sagen die Kinder</h2>

        <div className="relative mt-[72px] w-full">
          <button
            type="button"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1,
              )
            }
            aria-label="Vorheriges Zitat"
            className="absolute -left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bio-border bg-bio-white text-xl text-bio-dark transition-colors hover:bg-bio-dark hover:text-bio-white cursor-pointer"
          >
            ‹
          </button>

          <div className="grid grid-cols-3 gap-12 px-16">
            {visible.map((item, index) => (
              <blockquote
                key={`${item.name}-${index}`}
                className="text-center"
              >
                <p
                  className={`font-serif text-[22px] leading-[1.5] text-bio-dark ${
                    "highlight" in item && item.highlight ? "font-semibold" : ""
                  }`}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="text-body-sm mt-8 text-bio-grey">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1,
              )
            }
            aria-label="Nächstes Zitat"
            className="absolute -right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-bio-border bg-bio-white text-xl text-bio-dark transition-colors hover:bg-bio-dark hover:text-bio-white cursor-pointer"
          >
            ›
          </button>
        </div>

        <div className="mt-12 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Gehe zu Zitat ${index + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentIndex
                  ? "w-8 bg-bio-dark"
                  : "w-2 bg-bio-dark/20 hover:bg-bio-dark/40"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
