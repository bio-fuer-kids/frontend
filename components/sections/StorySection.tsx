import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "../ui/SectionLabel";

// Array an das neue Button-Design im Entwurf angepasst
const suppliers = ["GRELL NATURKOST", "CHEFS CULINAR", "MEKLENBURGER LANDPUTE"];

export function StorySection() {
  return (
    <section id="ueber-uns" className="bg-bio-green-500 py-24 md:py-32">
      <Container className="mx-auto flex w-full flex-col items-center">
        {/* === ZENTRIERTER HEADER === */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <SectionLabel>ÜBER UNS</SectionLabel>
          <h2 className="mt-4 text-h2-section text-[48px]! leading-tight text-bio-dark md:text-5xl">
            Seit 2011 in Hamburgs
            <br />
            Schulküchen
          </h2>
        </div>

        <div className="flex w-full flex-col gap-16 md:gap-24">
          {/* === REIHE 1 === */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            {/* Text-Container 1 */}
            <div className="flex flex-1 flex-col gap-6 text-bio-dark">
              <p className="font-inter text-[16px] leading-relaxed">
                Bio für Kids entstand 2011 aus dem Wunsch von Eltern nach einer
                gesunden und ausgewogenen Schulverpflegung für ihre Kinder.
                Diesen Anspruch haben wir aufgegriffen und uns seitdem auf
                frisches, gesundes und hochwertiges Schulcatering spezialisiert.
              </p>
              <p className="font-inter text-[16px] leading-relaxed">
                Heute versorgen wir täglich mehr als 4000 Kinder mit gesunden
                und ausgewogenen Mahlzeiten - zur Freude von Kindern und Eltern.
                <br />
                Inhabergeführt, mit festen Teams vor Ort – und dem gleichen
                Anspruch wie am ersten Tag.
              </p>
              <a
                href="#"
                className="mt-2 w-fit border-b border-bio-dark font-inter text-[16px] transition-opacity hover:opacity-70"
              >
                Das sagt die Presse über uns
              </a>
            </div>

            {/* Bild 1 */}
            <div className="relative aspect-5/4 w-full flex-1 shrink-0 overflow-hidden rounded-[2rem] border border-bio-dark md:aspect-5/4 md:rounded-[3rem]">
              <Image
                src="/2026_Bio-für-Kids-2.jpg"
                alt="Gemüse waschen in der Schulküche"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* === REIHE 2 === */}
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-16">
            {/* Bild 2 */}
            <div className="relative aspect-4/3 w-full flex-1 shrink-0 overflow-hidden rounded-[2rem] border border-bio-dark md:aspect-[5/4] md:rounded-[3rem]">
              <Image
                src="/2026_Bio-für-Kids-5.jpg"
                alt="Kinder rennen auf einer Wiese"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text & Button-Container 2 */}
            <div className="flex flex-1 flex-col text-bio-dark">
              <p className="mb-8 font-inter text-[16px] leading-relaxed">
                Nachhaltigkeit beginnt beim Einkauf und geht über langjährige
                Partnerschaften. Daher arbeiten wir seit Gründung bevorzugt mit
                Anbietern aus der Region.
              </p>

              {/* Horizontale Liste (Pill-Buttons) für Zulieferer */}
              <div className="flex flex-wrap gap-4">
                {suppliers.map((supplier) => (
                  <button
                    key={supplier}
                    className="group flex items-center gap-2 rounded-full border border-bio-dark px-4 py-2 font-inter text-[13px] transition-colors hover:bg-bio-dark hover:text-bio-green-500"
                  >
                    <span>{supplier}</span>
                    <Image
                      src="/icons/Icon_Arrow_External-Link.svg"
                      alt="Externer Link"
                      width={12}
                      height={12}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
