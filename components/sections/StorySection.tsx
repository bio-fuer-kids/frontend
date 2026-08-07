import Image from "next/image";
import { Container } from "@/components/ui/Container";

// Array als Objekte umstrukturiert, um den Subtitle (Nabuko) sauber trennen zu können
const suppliers = [
  { name: "Grell Naturkost" },
  { name: "Nabuko", subtitle: "Bio-Großverbraucher-Service" },
  { name: "Chefs Culinar Nord" },
  { name: "Friki Döbeln GmbH" },
];

export function StorySection() {
  return (
    <section id="ueber-uns" className="bg-bio-green-500 py-30 px-30">
      {/* Max-width auf 1280px begrenzt und 150px Abstand zwischen den Reihen */}
      <Container className="mx-auto flex max-w-7xl flex-col gap-y-40 px-8">
        {/* === REIHE 1 === */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Text-Container 1 */}
          <div className="flex w-full flex-col text-bio-dark md:w-139">
            <span className="mb-4 font-inter text-sm uppercase tracking-wide">
              ÜBER UNS
            </span>
            <h2 className="mb-6 font-serif text-[48px] leading-[1.1]">
              Seit 2011 in
              <br />
              Hamburger
              <br />
              Schulküchen
            </h2>
            <div className="flex flex-col gap-4 font-inter text-[16px] leading-relaxed">
              <p>
                Bio für Kids entstand 2011 – auf Initiative von Stammgästen
                unseres Restaurants, die mit der Schulverpflegung ihrer Kinder
                unzufrieden waren. Wir haben diesen Auftrag ernst genommen und
                uns seitdem auf frisches Schulcatering spezialisiert.
              </p>
              <p>
                Heute versorgen wir täglich über 2.000 Kinder an Hamburger
                Schulen. Inhabergeführt, mit festen Teams vor Ort – und dem
                gleichen Anspruch wie am ersten Tag.
              </p>
            </div>
          </div>

          {/* Bild 1 */}
          <div className="relative h-105 w-full shrink-0 overflow-hidden rounded-[32px] border-bio-dark md:w-144.5">
            <Image
              src="/section_bild1.png"
              alt="Kind in der Schulküche"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 578px"
            />
          </div>
        </div>

        {/* === REIHE 2 === */}
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
          {/* Bild 2 */}
          <div className="relative h-105 w-full shrink-0 overflow-hidden rounded-[32px] border-bio-dark md:w-144.5">
            <Image
              src="/section_bild2.png"
              alt="Frische Bio-Zutaten"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 578px"
            />
          </div>

          {/* Text & Listen-Container 2 */}
          <div className="flex w-full flex-col text-bio-dark md:w-[566px]">
            <h3 className="mb-4 font-serif text-[40px] leading-[1.2]">
              Unsere Zulieferer
            </h3>
            <p className="mb-8 font-inter text-[16px] leading-relaxed">
              Nachhaltigkeit beginnt beim Einkauf. Daher arbeiten wir bevorzugt
              mit Anbietern aus der Region zusammen, die ebenfalls auf Qualität
              setzen:
            </p>

            <ul className="flex flex-col">
              {suppliers.map((item) => (
                <li
                  key={item.name}
                  className="group flex cursor-pointer items-center justify-between border-b border-bio-dark py-4 last:border-b-0"
                >
                  <div className="flex flex-col">
                    <span className="font-serif text-[24px]">{item.name}</span>
                    {item.subtitle && (
                      <span className="mt-1 font-inter text-[14px]">
                        {item.subtitle}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-inter text-[14px]">Zur Website</span>
                    <Image
                      src="/icons/Icon_Arrow_External-Link.svg"
                      alt="Externer Link"
                      width={16}
                      height={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
