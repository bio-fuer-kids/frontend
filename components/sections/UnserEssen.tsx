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
      // lg:pb-2 stellt sicher, dass der Desktop wieder seinen alten 8px-Abstand unten hat!
      className="pb-2 md:pb-25 lg:pb-2 pt-20 md:pt-25 lg:pt-30 bg-bio-sand-beige overflow-hidden"
    >
      <Container className="flex flex-col items-center">
        {/* Zentrierter Header-Bereich */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto max-lg:px-4">
          <SectionLabel>WARUM BIO?</SectionLabel>

          <h2 className="mt-3 text-h2-section leading-tight text-bio-dark md:text-5xl">
            Bewusst essen.
            <br />
            Gesund wachsen.
          </h2>

          <p className="mt-3 text-[16px] text-bio-dark leading-normal w-full max-lg:max-w-xl lg:w-134">
            Gute Ernährung beginnt im Kindesalter: Hochwertige, nachhaltig
            erzeugte Lebensmittel fördern Gesundheit, Wertschätzung und einen
            bewussten Umgang mit unseren Ressourcen.
          </p>
        </div>

        {/* Artikel-Liste */}
        {/* max-lg:flex und grid vertragen sich nicht gut. Wir lösen es sauber: 
            flex für alles bis 1023px, ab 1024px (lg) übernimmt das Grid wieder 100% das Kommando! */}
        <div className="mt-16 md:mt-20 lg:mt-25 w-full flex flex-col items-center gap-16 lg:grid lg:grid-5 lg:items-stretch lg:gap-8">
          {artikel_arr.map((artikel, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                // HIER LAG DER FEHLER: md:w-188 hat den Desktop verkleinert.
                // Lösung: lg:w-full setzt den Desktop wieder auf die volle Grid-Breite zurück!
                className={`flex flex-col md:items-center gap-8 md:gap-12 w-full md:w-188 lg:w-full ${
                  isEven
                    ? "md:flex-row-reverse lg:flex-row lg:pl-5 max-lg:pl-0"
                    : "md:flex-row lg:flex-row-reverse"
                }`}
              >
                {/* Text Container */}
                {/* HIER LAG DER FEHLER: md:w-96 hat lg:w-166 zerstört. 
                    Lösung: Wir ordnen streng nach Breakpoint -> w-full (Mobile) -> w-96 (Tablet) -> w-166 (Desktop). */}
                <div className="flex-1 flex flex-col justify-center w-full md:w-96 lg:w-166">
                  <div className="w-full lg:w-[90%] xl:w-[110%] mx-auto">
                    {/* HIER LAG DER FEHLER: md:text-[26px]! hat die Desktop-Schrift überschrieben. 
                        Lösung: max-lg:text-[26px]! wendet die Größe NUR auf dem Tablet an. */}
                    <h3 className="text-essen max-lg:text-[26px]! whitespace-pre-line">
                      {artikel.title}
                    </h3>
                    <p className="mt-2 leading-normal text-bio-dark md:text-[16px] w-full lg:w-xl">
                      {artikel.description}
                    </p>
                  </div>
                </div>

                {/* Bild Container (Perfekt wie du ihn gemacht hast) */}
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
