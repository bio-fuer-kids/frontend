import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const weekDays = [
  {
    day: "Montag",
    date: "18.08.",
    dish: "Gemüse-Couscous",
    sides: ["Obstsalat", "Vollkornbrötchen"],
  },
  {
    day: "Dienstag",
    date: "19.08.",
    dish: "Linseneintopf",
    sides: ["Apfelkompott", "Roggenbrot"],
  },
  {
    day: "Mittwoch",
    date: "20.08.",
    dish: "Nudelauflauf",
    sides: ["Karottensalat", "Joghurt"],
  },
  {
    day: "Donnerstag",
    date: "21.08.",
    dish: "Kartoffelsuppe",
    sides: ["Vollkornbaguette", "Banane"],
  },
  {
    day: "Freitag",
    date: "22.08.",
    dish: "Gemüse-Pfannkuchen",
    sides: ["Kräuterquark", "Beeren"],
  },
];

export function WeeklyMenuSection() {
  return (
    <section id="speiseplan" className="section-py bg-bio-green">
      <Container>
        <div className="text-center">
          <SectionLabel light>Die aktuelle Woche</SectionLabel>
          <h2 className="text-h2 mt-3 text-bio-white">
            Was diese Woche auf den Tisch kommt.
          </h2>
        </div>

        <div className="mt-[64px] grid grid-cols-5 gap-4">
          {weekDays.map((item) => (
            <article
              key={item.day}
              className="flex min-h-[300px] flex-col rounded-[24px] bg-bio-white p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-body-sm text-bio-grey">{item.date}</p>
                  <h3 className="text-h3 mt-1 text-bio-dark">{item.day}</h3>
                </div>
                <Image
                  src="/Bio-Siegel-EG-Öko-VO-Deutschland.png"
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full object-contain"
                />
              </div>

              <p className="font-serif mt-8 text-[20px] leading-snug text-bio-dark">
                {item.dish}
              </p>

              <ul className="mt-4 flex flex-col gap-1.5">
                {item.sides.map((side) => (
                  <li key={side} className="text-body-sm text-bio-grey">
                    {side}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <p className="text-body-sm text-bio-white/80">
            Wöchentlich wechselnd — 100% Bio-Qualität
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="h-10 rounded-full border border-bio-border bg-bio-white px-6 text-[14px] font-medium text-bio-dark transition-colors hover:bg-bio-dark hover:text-bio-white"
            >
              Wochenkarte
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-bio-white underline-offset-4 transition-opacity hover:underline"
            >
              KW 34 Speiseplan (PDF)
              <Image
                src="/icons/Icon_Arrow_External-Link.svg"
                alt=""
                width={11}
                height={11}
                className="brightness-0 invert"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
