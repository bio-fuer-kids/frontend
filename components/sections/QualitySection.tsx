import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const features = [
  {
    icon: "/icons/Icon_Decorative_Frisch.svg",
    title: "Bio, regional &\nimmer frisch",
    description:
      "Wir verwenden ausschließlich frische Zutaten – überwiegend in Bio-Qualität, immer regional wenn möglich. Ohne Geschmacksverstärker, Farbstoffe oder Konservierungsstoffe. Zertifiziert durch die Fachgesellschaft Öko-Kontrolle (DE-ÖKO-034).",
    rotation: "-rotate-2", // Leichtes Drehen für den organischen Look
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
  return (
    <section id="qualitaet" className="pt-50 pb-2 bg-bio-sand-beige">
      <Container className="flex flex-col items-center text-center">
        <SectionLabel>Unser Essen</SectionLabel>

        <h2 className="mt-3 max-w-xl font-montagu-light text-5xl font-earthlight leading-none text-bio-dark md:text-6xl">
          Qualität, die man schmeckt
        </h2>

        <p className="mt-4 max-w-94 text-[16px] text-bio-dark leading-relaxed">
          Wir kochen täglich frisch und gesund – mit echten Köchen vor Ort in
          der Schulküche. So bleiben Vitamine und Inhaltsstoffe erhalten, und
          wir wissen genau, was auf den Tisch kommt.
        </p>

        <div className="mt-20 w-full flex justify-center">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`flex flex-col w-100 h-125 justify-between rounded-[64px] border border-bio-dark bg-bio-white p-12 text-left transition-transform md:p-12 ${feature.rotation}`}
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
                <h3 className="whitespace-pre-line font-serif font-light text-3xl  leading-tight text-bio-dark">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[14px]! leading-relaxed text-bio-dark md:text-sm">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
