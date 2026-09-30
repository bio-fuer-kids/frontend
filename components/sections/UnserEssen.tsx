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
    <section
      id="qualitaet"
      className="pb-2 md:pb-25 lg:pb-2 pt-20 md:pt-25 lg:pt-30 bg-bio-sand-beige overflow-hidden max-md:py-20"
    >
      <Container className="flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto max-lg:px-4">
          <SectionLabel>WARUM BIO?</SectionLabel>

          {/* FIX: Schrift minimal auf 38px reduziert, damit "Bewusst essen." sicher in eine Zeile auf dem Handy passt */}
          <h2 className="mt-3 text-h2-section leading-tight text-bio-dark md:text-5xl max-md:text-[38px] max-md:w-full">
            <span className="max-md:hidden">
              Bewusst essen.
              <br />
              Gesund wachsen.
            </span>
            <span className="hidden max-md:block">
              Bewusst essen.
              <br />
              Gesund
              <br />
              wachsen.
            </span>
          </h2>

          {/* FIX: Feste Breite w-84.5 entfernt und durch w-full ersetzt, um Quetschungen zu vermeiden */}
          <p className="mt-3 text-[16px] text-bio-dark leading-normal w-full max-lg:max-w-xl lg:w-134 max-md:mt-6 max-md:w-full max-md:mb-16">
            Gute Ernährung beginnt im Kindesalter: Hochwertige, nachhaltig
            erzeugte Lebensmittel fördern Gesundheit, Wertschätzung und einen
            bewussten Umgang mit unseren Ressourcen.
          </p>
        </div>

        <div className="mt-16 md:mt-20 lg:mt-25 w-full flex flex-col items-center gap-16 lg:grid lg:grid-5 lg:items-stretch lg:gap-8 max-md:gap-24">
          {artikel_arr.map((artikel, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col max-md:flex-col-reverse md:items-center gap-8 md:gap-12 w-full md:w-188 lg:w-full ${
                  isEven
                    ? "md:flex-row-reverse lg:flex-row lg:pl-5 max-lg:pl-0"
                    : "md:flex-row lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 flex flex-col justify-center w-full md:w-96 lg:w-166">
                  {/* Container auf Mobile strikt auf w-full gesetzt */}
                  <div className="w-full lg:w-[90%] xl:w-[110%] mx-auto max-md:text-center max-md:w-full">
                    <h3 className="text-essen max-lg:text-[26px]! whitespace-pre-line max-md:text-[28px]! max-md:leading-[1.15]">
                      {artikel.title}
                    </h3>
                    {/* FIX: Auch hier die feste Breite w-82.5 durch w-full ersetzt und ein sicheres Padding (px-4) ergänzt */}
                    <p className="mt-2 max-md:mt-4 leading-normal text-bio-dark md:text-[16px] w-full lg:w-xl max-md:text-[15px] max-md:w-full max-md:px-4 max-md:m-auto">
                      {artikel.description}
                    </p>
                  </div>
                </div>

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
