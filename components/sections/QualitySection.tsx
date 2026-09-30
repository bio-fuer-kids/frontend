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

    ScrollTrigger.config({ ignoreMobileResize: true });

    let mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      gsap.set([cardsRef.current[1], cardsRef.current[2]], {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -34%",
          end: "+=1500",
          pin: true,
          scrub: 0.5,
        },
      });

      tl.to(cardsRef.current[1], {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      }).to(cardsRef.current[2], {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      });
    });

    mm.add("(min-width: 768px) and (max-width: 932px)", () => {
      gsap.set([cardsRef.current[1], cardsRef.current[2]], {
        x: "100vw",
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 5%",
          end: "+=1500",
          pin: true,
          scrub: 0.5,
        },
      });

      tl.to(cardsRef.current[1], {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      }).to(cardsRef.current[2], {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="qualitaet"
      className="lg:pt-30 md:pt-25 pb-2 bg-bio-sand-beige overflow-hidden max-md:pt-20 max-md:pb-20"
    >
      <Container className="flex flex-col items-center text-center px-4 md:px-8">
        <SectionLabel>UNSER ESSEN</SectionLabel>

        <h2 className="mt-3 max-md:mt-3 max-w-xl text-h2-section text-4xl leading-12 text-bio-dark md:text-5xl max-md:text-[40px] max-md:w-full max-md:px-4">
          Qualität, die man schmeckt
        </h2>

        <p className="mt-3 max-md:mt-3 max-w-134 text-[16px] text-bio-dark leading-normal max-md:mb-16 max-md:w-full max-md:px-4">
          Wir kochen täglich frisch und gesund – mit echten Köchen vor Ort in
          der Schulküche. So bleiben Vitamine und Inhaltsstoffe erhalten, und
          wir wissen genau, was auf den Tisch kommt.
        </p>

        <div className="mt-25 w-full flex justify-center items-center md:space-x-[-18vw] lg:-space-x-5 max-md:mt-16 max-md:-space-x-[calc(100vw-32px)]">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="relative shrink-0"
              style={{ zIndex: index + 1 }}
            >
              <article
                className={`flex flex-col h-125 justify-between rounded-[64px] border border-bio-dark bg-bio-white p-12 text-left transition-transform max-md:w-[calc(100vw-32px)] max-md:h-105 max-md:p-8 max-md:rounded-[40px] md:w-[clamp(280px,42vw,412px)] lg:w-[clamp(300px,31vw,412px)] xl:w-103 ${feature.rotation}`}
              >
                <div className="flex justify-end">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={50}
                    height={50}
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <div className="mt-16 max-md:mt-8">
                  <h3 className="whitespace-pre-line font-serif font-light text-3xl leading-tight text-bio-dark max-md:text-[28px]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bio-dark md:text-sm max-md:text-[15px]">
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
