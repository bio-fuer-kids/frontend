import Image from "next/image";
import { Container } from "@/components/ui/Container";

const ingredients = [
  "Gemüse & Salate",
  "Obst & Beeren",
  "Getreide & Nudeln",
  "Milchprodukte",
  "Fleisch & Fisch",
  "Öle & Gewürze",
];

export function StorySection() {
  return (
    <section id="ueber-uns" className="section-py bg-bio-sand">
      <Container className="flex flex-col gap-8">
        {/* Row 1: Green box + Image */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col justify-center rounded-[32px] bg-bio-green p-12">
            <h2 className="text-h2 text-bio-dark">
              Seit 2011 in Hamburger Schulküchen
            </h2>
            <p className="text-body mt-6 text-bio-dark/80">
              Was 2011 als kleine Initiative begann, ist heute eine der
              führenden Bio-Schulküchen in Hamburg. Täglich bereiten unsere
              erfahrenen Köche über 2.000 Mahlzeiten frisch zu – mit
              Leidenschaft, Sorgfalt und dem Anspruch, Kindern gesundes Essen
              zu ermöglichen.
            </p>
            <p className="text-body mt-4 text-bio-dark/80">
              Unser Team aus 45 Mitarbeitern arbeitet Hand in Hand mit
              regionalen Bio-Bauern zusammen, um die besten Zutaten direkt auf
              den Teller der Kinder zu bringen.
            </p>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-[32px]">
            <Image
              src="/section_bild1.png"
              alt="Kind in der Schulküche"
              fill
              className="object-cover"
              sizes="700px"
            />
          </div>
        </div>

        {/* Row 2: Image + Green box */}
        <div className="grid grid-cols-2 gap-8">
          <div className="relative h-[420px] overflow-hidden rounded-[32px]">
            <Image
              src="/section_bild2.png"
              alt="Frische Bio-Zutaten"
              fill
              className="object-cover"
              sizes="700px"
            />
          </div>

          <div className="flex flex-col justify-center rounded-[32px] bg-bio-green p-12">
            <h3 className="text-h2 text-bio-dark">Unsere Zutaten</h3>
            <p className="text-body mt-4 text-bio-dark/80">
              Qualität beginnt bei den Zutaten. Deshalb setzen wir auf
              regionale Bio-Produkte und kurze Lieferwege.
            </p>
            <ul className="mt-8 flex flex-col">
              {ingredients.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b border-bio-dark/10 py-4 last:border-b-0"
                >
                  <span className="text-[15px] font-medium text-bio-dark">
                    {item}
                  </span>
                  <Image
                    src="/icons/Icon_Arrow_Small.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
