import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const galleryImages = [
  "/gallerie_1.png",
  "/gallerie_2.png",
  "/gallerie_3.png",
  "/gallerie_4.png",
  "/gallerie_5.png",
  "/gallerie_6.png",
  "/gallerie_7.png",
];

const stats = [
  { value: "15+", label: "Jahre Erfahrung in Hamburg" },
  { value: "4.000+", label: "Kinder täglich versorgt" },
  { value: "85%", label: "Bio Anteil" },
];

export function HeroSection() {
  return (
    <section className="pt-26">
      <Container className="flex flex-col items-center text-center">
        <h1 className="max-w-3xl mx-auto text-center font-serif font-light text-[80px] leading-[1.1] text-bio-dark">
          Täglich gekocht.
          <br />
          Frisch & gesund.
        </h1>

        <div className="mt-8 flex gap-3">
          <Button
            variant="solid"
            size="sm"
            className="border text-[16px] bg-transparent text-bio-dark hover:bg-bio-dark hover:text-bio-white py-3 px-8 rounded-[21px]! h-12 w-[176px]"
          >
            Jetzt bestellen
          </Button>
        </div>
      </Container>

      <div className="relative">
        <Image
          src="/icons/Icon_Arrow_Large.png"
          alt="Weitere Bilder anzeigen"
          width={32}
          height={16}
          className="object-contain text-bio-dark absolute right-3 bottom-[-100]"
        />
      </div>

      <div className="mt-28 flex w-full snap-x snap-mandatory gap-2 overflow-x-auto px-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {galleryImages.map((src, index) => (
          <div
            key={src}
            className="relative h-105 w-81.75 shrink-0 snap-center overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`Galerie ${index + 1}`}
              fill
              className="object-cover"
              sizes="327px"
              priority={index < 3}
            />
          </div>
        ))}
      </div>

      <div className="mt-2 w-full bg-bio-white">
        <Container>
          <div className="grid grid-cols-3 py-12 px-47">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 text-center"
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
