import Image from "next/image";
import { Container } from "@/components/ui/Container";

const benefits = [
  "Bio aus der Region",
  "Energieeffiziente Zubereitung",
  "Geringer Ressourcenverbrauch",
  "Wenig Müll",
  "Faire Arbeitsbedingungen",
];

export function BioCertificationSection() {
  return (
    <section className="bg-bio-white py-16">
      <Container className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
        <div className="shrink-0">
          <Image
            src="/Bio-Siegel-EG-Öko-VO-Deutschland.png"
            alt="Bio-Siegel EG-Öko-VO Deutschland"
            width={143}
            height={120}
            className="object-contain"
          />
        </div>

        <div className="flex w-full max-w-181.75 flex-col gap-8 px-8">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <p className="text-[14px] leading-relaxed text-bio-dark md:w-1/2">
              Bio für Kids ist als Bio-Betrieb zertifiziert und DGE-geprüft. Die
              Clara-Grunwald-Schule war die erste Hamburger Schule mit einem
              DGE- zertifizierten Speiseplan – beim letzten Audit mit 94 %
              bewertet. Nachhaltigkeit endet für uns nicht beim Zertifikat.
            </p>

            <ul className="flex flex-col justify-start gap-2.5 md:w-1/2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-[14px] text-bio-dark"
                >
                  <span className="text-[14px] font-bold text-bio-green-500">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              className="flex items-center gap-2 rounded-[24px] border border-bio-dark bg-transparent px-6 py-2.5 text-[14px] text-bio-dark transition-colors hover:bg-bio-dark hover:text-bio-white"
            >
              <Image
                src="/icons/download.svg"
                alt="download"
                width={18}
                height={18}
              />
              Bio-Produktliste (PDF)
            </button>
            <a
              href="#"
              className="text-[14px] text-bio-dark underline underline-offset-4 hover:text-bio-green-500"
            >
              Zertifikat ansehen
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
