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
    <section id="speiseplan" className="bg-bio-green-500 py-30 md:py-30">
      <Container className="flex flex-col items-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionLabel> SPEISEPLAN</SectionLabel>

          <h2 className="mt-3 max-w-lg text-h2-section leading-none text-bio-dark md:text-5xl">
            Ein Blick in unsere Küche.
          </h2>
          <p className="mt-3 max-w-124 text-[16px] text-bio-dark leading-relaxed">
            Täglich bieten wir eine Hauptspeise mit verschiedenen Komponenten
            zur Auswahl. Zu jedem Fleisch- oder Fischgericht gibt es eine
            vegetarische Alternative. Die genauen Speisepläne sind im
            Bestellportal einsehbar.
          </p>
        </div>

        {/* Karten-Container */}
        <div className="mt-20 flex w-full max-w-316 flex-col">
          <div className="flex flex-wrap justify-center -space-x-2 md:flex-nowrap md:-space-x-3">
            {weekDays.map((item, index) => (
              <article
                key={item.day}
                className={`relative flex h-75 w-[256px] shrink-0 flex-col justify-between rounded-[40px] border border-bio-dark bg-bio-white p-6 shadow-sm transition-all duration-300 hover:z-10 ${item.rotation}`}
                style={{ zIndex: index }}
              >
                <div className="flex justify-end">
                  <span className="rounded-lg border border-bio-dark px-3 py-1 text-[10px] uppercase tracking-wider text-bio-dark">
                    {item.day}
                  </span>
                </div>

                <div className="mt-auto text-left">
                  <h3 className="font-serif text-[22px] font-extralight leading-tight text-bio-dark">
                    {item.dish}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-bio-dark/70">
                    {item.sides}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Buttons ganz unten */}
        <div className="mt-12 flex flex-col items-center gap-6 md:flex-row">
          <button
            type="button"
            className="rounded-[20px] border border-bio-dark bg-transparent px-8 py-3 text-[15px] text-bio-dark transition-colors hover:bg-bio-dark hover:text-bio-white w-60.75"
          >
            Zu den Speiseplänen
          </button>
        </div>
      </Container>
    </section>
  );
}
