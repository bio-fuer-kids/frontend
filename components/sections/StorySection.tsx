import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "../ui/SectionLabel";

// Array an das neue Button-Design im Entwurf angepasst
const suppliers = ["GRELL NATURKOST", "CHEFS CULINAR", "MEKLENBURGER LANDPUTE"];

export function StorySection() {
  return (
    <section
      id="ueber-uns"
      className="bg-bio-green-500 pt-24 md:pt-30 lg:pb-8 md:pb-25"
    >
      <Container className="mx-auto flex w-full flex-col items-center">
        {/* === ZENTRIERTER HEADER === */}
        <div className="lg:mb-16 md:mb-10 flex flex-col items-center text-center">
          <SectionLabel>ÜBER UNS</SectionLabel>
          <h2 className="mt-3 text-h2-section text-[48px]! leading-tight text-bio-dark md:text-5xl">
            Seit 2011 in Hamburgs
            <br />
            Schulküchen
          </h2>
        </div>

        <div className="flex w-full flex-col gap-12  max-md:gap-20">
          {/* === REIHE 1 === */}
          {/* FIX: md:items-start richtet Text und Bild auf dem Tablet obenbündig aus. lg:items-center schützt deinen Desktop! */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start lg:items-center md:gap-10 lg:gap-16">
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
                className="w-fit lg:border-b border-bio-dark font-inter text-[16px] transition-opacity hover:opacity-70 md:text-[14px]!"
              >
                Das sagt die Presse über uns
              </a>
            </div>

            {/* Bild 1 */}
            <div className="relative aspect-5/4 w-full flex-1 shrink-0 overflow-hidden rounded-[2rem] border border-bio-dark md:aspect-6/4 md:rounded-[3rem]">
              <Image
                src="/hero_section/hero_bild_2.jpg"
                alt="Gemüse waschen in der Schulküche"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* === REIHE 2 === */}
          {/* FIX: md:items-start für die perfekte Tablet-Ausrichtung, lg:items-center für deinen Original-Desktop */}
          <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:items-start lg:items-center md:gap-8 lg:gap-6">
            {/* Bild 2 */}
            <div className="relative aspect-4/3 w-full flex-1 shrink-0 overflow-hidden rounded-[2rem] border border-bio-dark md:aspect-6/4 md:rounded-[3rem]">
              <Image
                src="/ueber-uns-section-bild-1.jpg"
                alt="Kinder rennen auf einer Wiese"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text & Button-Container 2 */}
            <div className="flex flex-1 flex-col self-center text-bio-dark">
              {/* FIX: max-lg:w-full rettet das Tablet-Layout vor der Quetschung. lg:w-137.5 garantiert exakt dein Desktop-Design! */}
              <p className="mb-4 font-inter text-[16px] leading-relaxed max-lg:w-full lg:w-137.5">
                Nachhaltigkeit beginnt beim Einkauf und geht über langjährige
                Partnerschaften. Daher arbeiten wir seit Gründung bevorzugt mit
                Anbietern aus der Region.
              </p>

              {/* Horizontale Liste für Zulieferer */}
              <div className="flex flex-wrap gap-4 lg:w-113.75">
                {suppliers.map((supplier) => (
                  <button
                    key={supplier}
                    // Die leicht abgerundeten 8px-Ränder bleiben unangetastet
                    className="group flex items-center gap-2 rounded-lg border border-bio-dark px-2 py-0 font-inter text-[13px] transition-colors hover:bg-bio-dark hover:text-bio-green-500"
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
