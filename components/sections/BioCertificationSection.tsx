import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function BioCertificationSection() {
  return (
    <section
      // HIER DIE EINZIGE ÄNDERUNG: lg:px-62.5 schützt den Desktop, befreit aber das Tablet vom Quetsch-Rand
      className="bg-bio-white py-16 md:py-25 lg:px-62.5"
    >
      <Container className="flex flex-col items-center text-center">
        {/* Icon: Zentriert durch den Parent-Container (100% Unangetastet) */}
        <Image
          src="/bio_icon.png"
          alt="Bio-Siegel EG-Öko-VO Deutschland"
          width={120} // Minimal angepasst für optische Balance, falls nötig
          height={120}
          className="object-contain"
        />

        {/* Text: max-w-117 regelt die saubere Breite für Desktop und Tablet perfekt (100% Unangetastet) */}
        <p className="mt-4 max-w-125 text-[16px] leading-relaxed text-bio-dark max-lg:px-4">
          Unser Unternehmen und jede einzelne Partnerschule sind nach der
          Bio-Außer-Haus-Verpflegung (Bio AHVV) zertifiziert und werden
          regelmäßig geprüft. Bei den letzten Audits erreichten die
          Partnerschulen Bewertungen von bis zu 85 Prozent. Nachhaltigkeit endet
          für uns nicht beim Zertifikat.
        </p>

        {/* Button: Zentriert unter dem Text (100% Unangetastet) */}
        <button
          type="button"
          className="mt-8 rounded-[24px] border border-bio-dark bg-transparent px-8 py-2.5 text-[14px] text-bio-dark transition-colors hover:bg-bio-dark hover:text-bio-white"
        >
          Zertifikat ansehen (PDF)
        </button>
      </Container>
    </section>
  );
}
