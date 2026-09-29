import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "../ui/SectionLabel";

// Original-Array (Desktop/Tablet)
const suppliers = ["GRELL NATURKOST", "CHEFS CULINAR", "MEKLENBURGER LANDPUTE"];

// Neues Array für die Mobile-Ansicht, da im Entwurf Groß-/Kleinschreibung verwendet wird
const suppliersMobile = [
  "Grell Naturkost",
  "Chefs Culinar",
  "Meklenburger Landpute",
];

export function StorySection() {
  return (
    <section
      id="ueber-uns"
      className="bg-bio-green-500 pt-24 md:pt-30 lg:pb-8 md:pb-25 max-md:py-20"
    >
      <Container className="mx-auto flex w-full flex-col items-center">
        {/* === ZENTRIERTER HEADER === */}
        <div className="lg:mb-16 md:mb-10 flex flex-col items-center text-center max-md:mb-12">
          <SectionLabel>ÜBER UNS</SectionLabel>
          <h2 className="mt-3 text-h2-section text-[48px]! leading-tight text-bio-dark md:text-5xl max-md:text-[40px]!">
            {/* Zeigt sich NUR ab Tablet (Dein Original-Code) */}
            <span className="max-md:hidden">
              Seit 2011 in Hamburger
              <br />
              Schulküchen
            </span>
            {/* Zeigt sich NUR auf Mobile (Neues Design mit 3 Zeilen) */}
            <span className="hidden max-md:block leading-[1.1]">
              Seit 2011 in
              <br />
              Hamburger
              <br />
              Schulküchen
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col gap-12 max-md:gap-16">
          {/* === REIHE 1 === */}
          {/* FIX: max-md:flex-col-reverse dreht die Reihenfolge auf dem Handy um (Bild oben, Text unten) */}
          <div className="flex flex-col max-md:flex-col-reverse items-center gap-8 md:flex-row md:items-start lg:items-center md:gap-10 lg:gap-16">
            {/* Text-Container 1 */}
            <div className="flex flex-1 flex-col gap-6 text-bio-dark">
              <p className="font-inter text-[16px] leading-relaxed max-md:text-[15px]">
                Bio für Kids entstand 2011 aus dem Wunsch von Eltern nach einer
                gesunden und ausgewogenen Schulverpflegung für ihre Kinder.
                Diesen Anspruch haben wir aufgegriffen und uns seitdem auf
                frisches, gesundes und hochwertiges Schulcatering spezialisiert.
              </p>
              <p className="font-inter text-[16px] leading-relaxed max-md:text-[15px]">
                Heute versorgen wir täglich mehr als 4000 Kinder mit gesunden
                und ausgewogenen Mahlzeiten - zur Freude von Kindern und Eltern.
                <br />
                Inhabergeführt, mit festen Teams vor Ort – und dem gleichen
                Anspruch wie am ersten Tag.
              </p>
              <a
                href="#"
                // max-md:border-b hinzugefügt, damit es auf Mobile sichtbar unterstrichen ist
                className="w-fit lg:border-b border-bio-dark font-inter text-[16px] transition-opacity hover:opacity-70 md:text-[14px]! max-md:border-b max-md:pb-0.5"
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
          {/* FIX: max-md:flex-col stellt sicher, dass das Bild auf Mobile IMMER über dem Text steht (überschreibt dein flex-col-reverse) */}
          <div className="flex flex-col-reverse max-md:flex-col items-center gap-6 md:flex-row md:items-start lg:items-center md:gap-8 lg:gap-6">
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
            <div className="flex flex-1 flex-col self-center text-bio-dark max-md:w-full">
              {/* NEU FÜR MOBILE: Überschrift "Unsere Zulieferer" aus dem Design */}
              <h3 className="hidden max-md:block font-serif font-light text-[32px] leading-tight text-bio-dark mb-3 mt-4">
                Unsere Zulieferer
              </h3>

              <p className="mb-4 font-inter text-[16px] leading-relaxed max-lg:w-full lg:w-137.5 max-md:text-[16px] max-md:mb-8  max-md:w-90">
                Nachhaltigkeit beginnt beim Einkauf und geht über langjährige
                Partnerschaften. Daher arbeiten wir seit Gründung bevorzugt mit
                Anbietern aus der Region.
              </p>

              {/* Desktop / Tablet Liste (100% Dein Original, wird auf Mobile versteckt) */}
              <div className="flex flex-wrap gap-4 lg:w-113.75 max-md:hidden">
                {suppliers.map((supplier) => (
                  <button
                    key={supplier}
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

              {/* Mobile Liste (Exakt nach Screenshot Design, mit Rahmen und großer Serifenschrift) */}
              <div className="hidden max-md:flex flex-col w-full border-t border-bio-dark">
                {suppliersMobile.map((supplier) => (
                  <a
                    key={supplier}
                    href="#"
                    className="flex items-center justify-between py-4 border-b border-bio-dark text-bio-dark"
                  >
                    <span className="font-serif text-[22px] tracking-wide">
                      {supplier}
                    </span>
                    <Image
                      src="/icons/Icon_Arrow_External-Link.svg"
                      alt="Externer Link"
                      width={16}
                      height={16}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
