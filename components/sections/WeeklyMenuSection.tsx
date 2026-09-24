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
    // overflow-x-hidden hier auf der Section hinzugefügt, um horizontales Wackeln durch w-screen zu vermeiden
    <section
      id="speiseplan"
      className="bg-bio-green-500 py-30 md:py-30 overflow-x-hidden"
    >
      <Container className="flex flex-col items-center">
        {/* Header (100% Unangetastet) */}
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
          {/*
            DER TRICK:
            max-lg:w-screen max-lg:relative max-lg:left-1/2 max-lg:-translate-x-1/2
            Das ignoriert die grünen Ränder des Containers komplett. Die Scroll-Leiste geht jetzt von Bildschirmkante zu Bildschirmkante!
            Der Desktop ignoriert das alles und nutzt weiterhin dein flex-wrap.
          */}
          <div className="flex flex-wrap justify-center -space-x-2 md:flex-nowrap md:-space-x-3 max-lg:justify-start max-lg:w-screen max-lg:relative max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:px-4 max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:py-8 max-lg:-my-8 scrollbar-none [&::-webkit-scrollbar]:hidden">
            {weekDays.map((item, index) => (
              <article
                key={item.day}
                // Dein Original-Styling (Ich habe dein border-red-500 und z-40 wieder auf den Original-Zustand zurückgesetzt, da es nicht mehr gebraucht wird)
                className={`relative flex h-75 w-[256px] shrink-0 max-lg:snap-center flex-col justify-between rounded-[40px] border border-bio-dark bg-bio-white p-6 shadow-sm transition-all duration-300 hover:z-10 ${item.rotation}`}
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
            {/* Dieser unsichtbare Spacer sorgt dafür, dass die "Freitag"-Karte ganz am Ende nicht an der rechten Handykante klebt */}
            <div className="shrink-0 w-4 lg:hidden" />
          </div>
        </div>

        {/* Buttons ganz unten (100% Unangetastet) */}
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
