import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const features = [
  {
    icon: "/icons/Icon_Decorative_Frisch.svg",
    title: "Bio, regional & immer frisch",
    description:
      "Wir kochen täglich frisch mit regionalen Bio-Zutaten aus Hamburg und Schleswig-Holstein – direkt vom Feld auf den Teller.",
  },
  {
    icon: "/icons/Icon_Decorative_Köche.svg",
    title: "Keine Zusatz- & Füllmittel",
    description:
      "Bei uns kommen nur natürliche Zutaten auf den Teller – ohne künstliche Aromen, Farbstoffe oder Konservierungsmittel.",
  },
  {
    icon: "/icons/Icon_Decorative_Vielseitig.svg",
    title: "Vielfältig & abwechslungsreich",
    description:
      "120 verschiedene Gerichte im Jahreskreislauf sorgen für Abwechslung und begeistern auch wählerische Esser.",
  },
];

export function QualitySection() {
  return (
    <section id="qualitaet" className="section-py bg-bio-sand">
      <Container className="flex flex-col items-center text-center">
        <SectionLabel>Was uns auszeichnet</SectionLabel>
        <h2 className="text-h2 mt-3 max-w-[640px] text-bio-dark">
          Qualität, die man schmeckt
        </h2>
        <p className="text-body mt-4 max-w-[560px] text-bio-grey">
          Seit über 24 Jahren versorgen wir Hamburger Schulküchen mit frischem,
          biologischem Essen – zubereitet mit Leidenschaft und Sorgfalt.
        </p>

        <div className="mt-[64px] grid w-full grid-cols-3 gap-6">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="relative flex min-h-[280px] flex-col rounded-[24px] border border-bio-dark/10 bg-bio-white p-10 text-left"
            >
              <Image
                src={feature.icon}
                alt=""
                width={55}
                height={55}
                className="absolute right-8 top-8"
              />
              <h3 className="text-h3 mt-auto max-w-[220px] text-bio-dark">
                {feature.title}
              </h3>
              <p className="text-body-sm mt-4 text-bio-grey">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
