"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    icon: "/icons/Icon_Decorative_Frisch.svg",
    title: "Bio, regional &\nimmer frisch",
    description:
      "Wir verwenden ausschließlich frische Zutaten – überwiegend in Bio-Qualität, immer regional wenn möglich. Ohne Geschmacksverstärker, Farbstoffe oder Konservierungsstoffe. Zertifiziert durch die Fachgesellschaft Öko-Kontrolle (DE-ÖKO-034).",
    rotation: "-rotate-2",
  },
  {
    icon: "/icons/Icon_Decorative_Vielseitig.svg",
    title: "Echte Köche &\nfestes Team",
    description:
      "Kein Aufwärmen, kein Lieferdienst. Jede Schule hat ihr eigenes, festes Küchenteam. Die Köchinnen und Köche kennen die Kinder, wissen wer was nicht verträgt, und sind verlässliche Bezugspersonen im Schulalltag.",
    rotation: "rotate-1",
  },
  {
    icon: "/icons/Icon_Decorative_Köche.svg",
    title: "Vielseitig &\nausgewogen",
    description:
      "Unsere Speisepläne folgen den DGE-Qualitätsstandards und entstehen gemeinsam mit Schülerinnen und Schülern. Traditionell, mediterran, vegetarisch – täglich abwechselnd mit frischer Rohkost oder Dessert.",
    rotation: "-rotate-2",
  },
];

export function QualitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    // GSAP-Animation greift AUSSCHLIESSLICH bei Tablet (768px bis 1023px).
    // Dein Desktop (ab 1024px) bleibt davon zu 100 % unberührt!
    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      // Bereite Karte 2 und 3 vor: Versteckt und weit rechts außerhalb des Bildschirms
      gsap.set([cardsRef.current[1], cardsRef.current[2]], {
        x: "100vw",
        opacity: 0,
      });

      // Der echte Awwwards-Effekt: Eine Timeline, die die Sektion festpinnt!
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%", // Pinnt die Sektion, wenn sie fast ganz oben ist
          end: "+=1500", // Du musst 1500px scrollen, um die ganze Animation zu erleben (wirkt super flüssig)
          pin: true, // HIER IST DIE MAGIE: Die Seite friert beim Scrollen ein!
          scrub: 0.5, // 0.5s Nachzieh-Effekt beim Scrollen (Buttery Smooth!)
        },
      });

      // Zuerst fährt Karte 2 butterweich über Karte 1
      tl.to(cardsRef.current[1], {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      })
        // Danach fährt Karte 3 butterweich über Karte 2
        .to(cardsRef.current[2], {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power1.out",
        });
    });

    return () => mm.revert(); // Räumt GSAP bei Unmount sauber auf
  }, []);

  return (
    <section
      ref={sectionRef}
      id="qualitaet"
      className="lg:pt-30 md:pt-25 pb-2 bg-bio-sand-beige overflow-hidden"
    >
      <Container className="flex flex-col items-center text-center">
        <SectionLabel>UNSER ESSEN</SectionLabel>

        <h2 className="mt-3 max-w-xl text-h2-section text-4xl leading-none text-bio-dark md:text-5xl">
          Qualität, die man schmeckt
        </h2>

        <p className="mt-3 max-w-134 text-[16px] text-bio-dark leading-normal">
          Wir kochen täglich frisch und gesund – mit echten Köchen vor Ort in
          der Schulküche. So bleiben Vitamine und Inhaltsstoffe erhalten, und
          wir wissen genau, was auf den Tisch kommt.
        </p>

        {/* 
          WRAPPER:
          - max-md:flex-col: Auf dem Handy einfach untereinander
          - md:-space-x-[220px]: Erzeugt auf dem Tablet den exakten Überlappungs-Look
          - lg:space-x-0: DEAKTIVIERT die Überlappung für Desktop komplett (alles liegt normal nebeneinander wie in deinem Code)
        */}
        <div className="mt-25 w-full flex max-md:flex-col justify-center items-center max-md:gap-8 md:-space-x-55 lg:space-x-0">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              // Wir weisen GSAP diesen Wrapper zu, damit GSAP nur den Wrapper bewegt...
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative shrink-0"
              style={{ zIndex: index + 1 }} // Sichert die natürliche Stapel-Reihenfolge ab
            >
              {/* ...und dein <article> behält exakt DEINEN Code inklusive ${feature.rotation} ohne überschrieben zu werden! */}
              <article
                className={`flex flex-col w-103 h-125 justify-between rounded-[64px] border border-bio-dark bg-bio-white p-12 text-left transition-transform md:p-12 ${feature.rotation}`}
              >
                {/* Icon oben rechts */}
                <div className="flex justify-end">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={50}
                    height={50}
                    className="h-12 w-12 object-contain"
                  />
                </div>

                {/* Textbereich unten linksbündig */}
                <div className="mt-16">
                  <h3 className="whitespace-pre-line font-serif font-light text-3xl leading-tight text-bio-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bio-dark md:text-sm">
                    {feature.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
