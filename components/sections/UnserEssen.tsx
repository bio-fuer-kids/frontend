import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const artikel_arr = [
  {
    image: "/essen_section/image_1.jpg",
    title: "Weil uns die Gesundheit unserer\nKinder am Herzen liegt.",
    description:
      "Bio-Produkte werden besonders schonend erzeugt und kommen mit weniger Pestiziden und Zusatzstoffen aus.",
  },
  {
    image: "/essen_section/image_2_new.png",
    title: "Weil gutes Essen bei Qualität\nund Geschmack beginnt.",
    description:
      "Natürliche Reifung und nachhaltiger Anbau sorgen für Lebensmittel mit vollem Geschmack.",
  },
  {
    image: "/essen_section/image_3_new.png",
    title: "Weil wir Verantwortung\nübernehmen.",
    description:
      "Ökologische Landwirtschaft schützt Böden, Wasser und Artenvielfalt, unterstützt artgerechte Tierhaltung und trägt zu mehr Nachhaltigkeit bei.",
  },
];

export function UnserEssen() {
  return (
    <section id="qualitaet" className="pt-30 bg-bio-sand-beige">
      <Container className="flex flex-col items-center">
        {/* Zentrierter Header-Bereich */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <SectionLabel>WARUM BIO?</SectionLabel>

          <h2 className="mt-3 text-h2-section leading-tight text-bio-dark md:text-5xl">
            Bewusst essen.
            <br />
            Gesund wachsen.
          </h2>

          <p className="mt-3 text-[16px] text-bio-dark leading-normal w-134">
            Gute Ernährung beginnt im Kindesalter: Hochwertige, nachhaltig
            erzeugte Lebensmittel fördern Gesundheit, Wertschätzung und einen
            bewussten Umgang mit unseren Ressourcen.
          </p>
        </div>

        {/* Artikel-Liste */}
        <div className="mt-25 w-full grid grid-5 gap-8">
          {artikel_arr.map((artikel, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col md:items-center gap-8 md:gap-12 ${
                  isEven ? "md:flex-row pl-5" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Container */}
                <div className="flex-1 flex flex-col justify-center w-166">
                  <div className="w-[90%] xl:w-[110%] mx-auto">
                    <h3 className="text-essen">{artikel.title}</h3>
                    <p className="mt-2 leading-normal text-bio-dark md:text-[16px] md:w-xl">
                      {artikel.description}
                    </p>
                  </div>
                </div>

                {/* Bild Container */}
                <div className="flex-1 w-full shrink-0 relative aspect-4/3 md:aspect-3/2">
                  <Image
                    src={artikel.image}
                    alt={artikel.title.replace("\n", " ")}
                    fill
                    className={`rounded-[2rem] border border-bio-dark ${
                      index === 2
                        ? "object-cover object-[25%_65%]"
                        : "object-cover"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
