import Image from "next/image";
import { Container } from "@/components/ui/Container";

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
    <section id="speiseplan" className="bg-bio-green-500 py-24 md:py-55">
      <Container className="flex flex-col items-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="mb-4 text-[14px] font-light tracking-widest text-bio-dark">
            SPEISEPLAN
          </span>
          <h2 className="font-montagu-light text-5xl font-extralight leading-[1.1] text-bio-dark md:text-[64px]">
            Was diese Woche
            <br />
            auf den Tisch kommt.
          </h2>
          <p className="mt-6 max-w-135 text-[16px] font-light leading-relaxed text-bio-dark/90">
            Ein Einblick in unsere Küche. Täglich bis zu 2 Gerichte zur Auswahl,
            davon mindestens eines vegetarisch. Die genauen Speisepläne sind im
            Bestellportal einsehbar und werden regelmäßig aktualisiert.
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

          <p className="mt-6 w-full pr-4 text-right text-[13px] text-bio-dark md:pr-0">
            Beispielhafter Speiseplan – wird alle 2–3 Monate aktualisiert.
          </p>
        </div>

        {/* Buttons ganz unten */}
        <div className="mt-12 flex flex-col items-center gap-6 md:flex-row">
          <button
            type="button"
            className="rounded-[20px] border border-bio-dark bg-transparent px-8 py-3 text-[15px] text-bio-dark transition-colors hover:bg-bio-dark hover:text-bio-white w-60.75"
          >
            Zu den Speiseplänen
          </button>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-inter text-[15px] font-light text-bio-dark underline-offset-4 hover:underline"
          >
            <Image
              src="/icons/download.svg"
              alt="download"
              width={18}
              height={18}
            />
            20-Tage-Speiseplan (PDF)
          </a>
        </div>
      </Container>
    </section>
  );
}
