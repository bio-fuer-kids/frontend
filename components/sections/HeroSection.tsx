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
    // Dein pt-26 für Desktop, reduziertes pt-12 für Tablet/Mobile
    <section className="pt-12 lg:pt-26">
      <Container className="flex flex-col items-center text-center">
        {/* Dein text-[80px] für Desktop, leicht reduziert für Tablet/Mobile */}
        <h1 className="max-w-3xl mx-auto text-center font-serif font-light text-[48px] md:text-[60px] lg:text-[80px] leading-[1.1] text-bio-dark">
          Täglich gekocht.
          <br />
          Frisch & gesund.
        </h1>

        {/* DEIN BUTTON (100% Unangetastet) */}
        <div className="mt-8 flex gap-3">
          <Button
            variant="solid"
            size="sm"
            className="border text-[16px] bg-transparent text-bio-dark hover:bg-bio-dark hover:text-bio-white py-3 px-8 rounded-[21px]! h-12 w-44"
          >
            Jetzt bestellen
          </Button>
        </div>
      </Container>

      {/* DEIN PFEIL (100% Unangetastet, nur auf Tablet versteckt, da er dort ohnehin stört) */}
      <div className="relative hidden lg:block">
        <Image
          src="/icons/Icon_Arrow_Large.png"
          alt="Weitere Bilder anzeigen"
          width={32}
          height={16}
          className="object-contain text-bio-dark absolute right-3 bottom-[-100]"
        />
      </div>

      {/* GALERIE WRAPPER: Dein mt-28 für Desktop, mt-12 für Tablet */}
      <div className="mt-12 lg:mt-28 flex w-full snap-x snap-mandatory gap-2 overflow-x-auto px-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {galleryImages.map((src, index) => (
          <div
            key={src}
            // DEINE MAßE: h-105 und w-81.75 gelten strikt für Desktop (lg:). Tablet hat kleinere Fallback-Maße!
            className="relative h-70 w-50 md:h-87.5 md:w-65 lg:h-100 lg:w-81.75 shrink-0 snap-center overflow-hidden rounded-2xl border"
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
          {/* STATS: Deine Desktop-Klassen gap-30 und px-47 sind über lg: unangetastet! Tablet bekommt reduzierte Werte */}
          <div className="grid grid-cols-3 gap-2 px-2 md:gap-8 md:px-8 lg:gap-30 lg:px-47 py-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                {/* DEINE KLASSEN (Unangetastet) */}
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
