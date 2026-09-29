import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "../ui/SectionLabel";

const weekDays = [
  {
    day: "Montag",
    dish: "Gemüse-Bolognese mit Vollkornnudeln",
    sides: "Bunter Blattsalat · Apfelschorle",
    rotation: "-rotate-2 -translate-y-2",
  },
  {
    day: "Dienstag",
    dish: "Hähnchen-Curry mit Basmatireis",
    sides: "Gurken-Raita · frisches Naan",
    rotation: "rotate-1 translate-y-1",
  },
  {
    day: "Mittwoch",
    dish: "Rote Linsensuppe mit Vollkornbrot",
    sides: "Karottensalat · Naturjoghurt",
    rotation: "-rotate-1 -translate-y-1",
  },
  {
    day: "Donnerstag",
    dish: "Seelachsfilet mit Kartoffelpüree",
    sides: "Brokkoli · Zitronensauce",
    rotation: "rotate-2 translate-y-2",
  },
  {
    day: "Freitag",
    dish: "Gemüse-Quiche mit gemischtem Salat",
    sides: "Tomaten · Kräuterdressing · Obstsalat",
    rotation: "-rotate-2",
  },
];

export function WeeklyMenuSection() {
  return (
    <section
      id="speiseplan"
      className="bg-bio-green-500 py-30 md:py-30 overflow-x-hidden max-md:py-20"
    >
      <Container className="flex flex-col items-center">
        {/* Header (Desktop Unangetastet, Mobile angepasst) */}
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center max-md:px-4">
          <SectionLabel> SPEISEPLAN</SectionLabel>

          <h2 className="mt-3 w-90 text-h2-section leading-none text-bio-dark md:text-5xl max-md:text-[44px]">
            <span className="max-md:hidden">Ein Blick in unsere Küche.</span>
            <span className="hidden max-md:block leading-[1.1]">
              Was diese
              <br />
              Woche
              <br />
              auf den Tisch
              <br />
              kommt.
            </span>
          </h2>

          <p className="mt-3 max-w-124 text-[16px] text-bio-dark leading-relaxed max-md:mt-6 max-md:text-[15px]">
            <span className="max-md:hidden">
              Täglich bieten wir eine Hauptspeise mit verschiedenen Komponenten
              zur Auswahl. Zu jedem Fleisch- oder Fischgericht gibt es eine
              vegetarische Alternative. Die genauen Speisepläne sind im
              Bestellportal einsehbar.
            </span>
            <span className="hidden max-md:block max-md:w-89.5 m-auto font-medium">
              Ein Einblick in unsere Küche. Täglich bis zu 2 Gerichte zur
              Auswahl, davon mindestens eines vegetarisch. Die genauen
              Speisepläne sind im Bestellportal einsehbar und werden regelmäßig
              aktualisiert.
            </span>
          </p>
        </div>

        {/* Karten-Container */}
        <div className="mt-20 flex w-full max-w-316 flex-col max-md:mt-12">
          {/* 
            DER FIX: 
            px-6 und scroll-px-6 garantieren 24px Abstand auf Mobile/Tablet (1:1 Deckungsgleich mit Container).
            lg:px-0 und lg:justify-center zentrieren es auf Desktop perfekt, ohne dass das Padding kaputt geht.
          */}
          <div className="flex flex-nowrap justify-start lg:justify-center -space-x-2 md:-space-x-3 w-screen lg:w-full relative left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 px-6 lg:px-0 scroll-px-6 overflow-x-auto snap-x snap-mandatory py-8 -my-8 scrollbar-none [&::-webkit-scrollbar]:hidden">
            {weekDays.map((item, index) => (
              <article
                key={item.day}
                className={`relative flex h-75 w-[256px] shrink-0 snap-start flex-col justify-between rounded-[40px] border border-bio-dark bg-bio-white p-6 shadow-sm transition-all duration-300 hover:z-10 ${item.rotation}`}
                style={{ zIndex: index }}
              >
                <div className="flex justify-end">
                  <span className="rounded-lg border border-bio-dark px-3 py-1 text-[10px] uppercase tracking-wider text-bio-dark">
                    {item.day}
                  </span>
                </div>

                <div className="mt-auto text-left">
                  <h3 className="font-serif text-[22px] font-light leading-tight text-bio-dark">
                    {item.dish}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-bio-dark/70">
                    {item.sides}
                  </p>
                </div>
              </article>
            ))}
            {/* Unsichtbarer Abstandhalter, damit die letzte Karte nicht am rechten Rand klebt */}
            <div className="shrink-0 w-6 lg:hidden" />
          </div>
        </div>

        {/* Zusätzlicher Hinweistext NUR für Mobile */}
        <p className="hidden max-md:block mt-6 text-center text-[14px] leading-relaxed text-bio-dark">
          Beispielhafter Speiseplan. Wird
          <br />
          alle 2–3 Monate aktualisiert.
        </p>

        {/* Buttons ganz unten */}
        <div className="mt-12 flex flex-col items-center gap-6 md:flex-row max-md:mt-10">
          <button
            type="button"
            className="rounded-[20px] border border-bio-dark bg-transparent px-8 py-3 text-[15px] text-bio-dark transition-colors hover:bg-bio-dark hover:text-bio-white w-60.75"
          >
            Zu den Speiseplänen
          </button>

          <button className="hidden max-md:flex items-center gap-2 text-bio-dark text-[18px]">
            <Image
              src="/icons/download.svg"
              alt="Download Speiseplan"
              width={14}
              height={14}
              className="object-contain mb-1 mr-1"
            />
            20-Tage-Speiseplan (PDF)
          </button>
        </div>
      </Container>
    </section>
  );
}
