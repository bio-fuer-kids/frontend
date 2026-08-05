import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const galleryImages = [
  "/header_gallerie_1.png",
  "/header_gallerie_2.png",
  "/header_gallerie_3.png",
  "/header_gallerie_4.png",
  "/header_gallerie_5.png",
  "/header_gallerie_6 Kopie.png",
];

const stats = [
  { value: "2.000+", label: "Kinder täglich versorgt" },
  { value: "13+", label: "Jahre Erfahrung in Hamburg" },
  { value: "24", label: "Fachkräfte im Einsatz" },
  { value: "94%", label: "DGE-Audit-Bewertung" },
];

export function HeroSection() {
  return (
    <section className="pt-16">
      <Container className="flex flex-col items-center text-center">
        <h1 className="max-w-3xl mx-auto text-center font-serif text-[80px] leading-[1.1] text-bio-dark">
          Täglich gekocht.
          <br />
          Frisch & gesund.
        </h1>

        <div className="mt-8 flex gap-3">
          <Button
            variant="solid"
            size="sm"
            className="border bg-transparent text-bio-dark hover:bg-bio-dark hover:text-bio-whit py-6 px-8 rounded-[20px]!"
          >
            Zum Bestellportal
          </Button>
          <button className="underline underline-offset-4">
            Mehr erfahren
          </button>
        </div>
      </Container>

      <div className="mt-16 flex w-full snap-x snap-mandatory gap-2 overflow-x-auto px-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
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

      <Container className="">
        <div className="grid grid-cols-4 rounded-2xl bg-bio-white py-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-4"
            >
              <span className="font-serif text-4xl text-bio-dark">
                {stat.value}
              </span>
              <span className="text-sm text-bio-grey">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
