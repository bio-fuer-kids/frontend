import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const galleryImages = [
  "/hero_section/hero_bild_1.jpg",
  "/hero_section/hero_bild_1_2.jpg",
  "/hero_section/hero_bild_3.jpg",
  "/hero_section/hero_bild_2.jpg",
  "/hero_section/hero_bild_4_2.jpg",
  "/hero_section/hero_bild_5.jpg",
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung in Hamburg" },
  { value: "4.000+", label: "Kinder täglich versorgt" },
  { value: "85%", label: "Bio Anteil" },
];

export function HeroSection() {
  return (
    // Dein pt-26 für Desktop / pt-12 Tablet (Original)
    <section className="max-md:pt-23 md:pt-23 lg:pt-26 bg-bio-green-500">
      <Container className="flex flex-col items-center text-center">
        {/* TITEL: Wir nutzen zwei Spans, um die Zeilenumbrüche für Mobile/Tablet strikt voneinander zu trennen, ohne das Tablet-Layout zu gefährden! */}
        <h1 className="max-w-3xl mx-auto text-center font-serif font-light text-[48px] md:text-[60px] lg:text-[80px] leading-[1.1] text-bio-dark">
          {/* Zeigt sich NUR ab Tablet (Dein Original-Code) */}
          <span className="max-md:hidden">
            Täglich gekocht.
            <br />
            Frisch & gesund.
          </span>
          {/* Zeigt sich NUR auf Mobile (Neues Design mit 4 Zeilen) */}
          <span className="hidden max-md:block">
            Täglich
            <br />
            gekocht.
            <br />
            Frisch &<br />
            gesund.
          </span>
        </h1>

        {/* BUTTON: Dein Original + schwarzer Rand auf Mobile */}
        <div className="mt-8 flex gap-3">
          <Button
            variant="solid"
            size="sm"
            className="border text-[16px] bg-transparent text-bio-dark hover:bg-bio-dark hover:text-bio-white py-3 px-8 rounded-[21px]! h-12 w-44 max-md:border-bio-dark"
          >
            Jetzt bestellen
          </Button>
        </div>
      </Container>

      {/* DEIN PFEIL (100% Unangetastet) */}
      <div className="relative hidden lg:block">
        <Image
          src="/icons/Icon_Arrow_Large.png"
          alt="Weitere Bilder anzeigen"
          width={32}
          height={16}
          className="object-contain text-bio-dark absolute right-3 bottom-[-100]"
        />
      </div>

      {/* GALERIE WRAPPER: Dein Original + Mobile Placements */}
      <div className="md:mt-21 max-md:mt-9.75 lg:mt-28 flex w-full snap-x snap-mandatory gap-2 overflow-x-auto px-2 scroll-px-2 max-md:pl-4 max-md:scroll-pl-4 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {galleryImages.map((src, index) => (
          <div
            key={src}
            // DEINE MAßE. max-md:p Tippfehler entfernt!
            className="relative h-70 w-50 md:h-105 md:w-82 lg:h-113 lg:w-88 shrink-0 snap-center overflow-hidden rounded-2xl border max-md:h-105 max-md:w-[85vw] max-md:rounded-[32px] max-md:border-bio-dark max-md:snap-start"
          >
            <Image
              src={src}
              alt={`Galerie ${index + 1}`}
              fill
              className="object-cover"
              sizes="350px"
              priority={index < 3}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 w-full bg-bio-white">
        <Container>
          {/* STATS: Dein Grid ist die Basis. Auf Mobile (max-md) wird es zu einem flex-Slider, um die "2000+" abzurollen */}
          <div className="grid grid-cols-3 gap-2 px-2 md:gap-8 md:px-8 lg:gap-30 lg:px-47 py-12 max-md:flex max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory max-md:scrollbar-none [&::-webkit-scrollbar]:hidden">
            {stats.map((stat) => (
              <div
                key={stat.label}
                // Dein Original + feste Breite für den Mobile-Slider
                className="flex flex-col items-center gap-2 text-center max-md:min-w-[65vw] max-md:snap-center"
              >
                <span className="text_slide_header">{stat.value}</span>
                <span className="text_slide">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
