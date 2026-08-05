import Image from "next/image";
import { Container } from "@/components/ui/Container";

const benefits = [
  "100% kontrolliert biologische Landwirtschaft",
  "Strenge Auflagen für Tierhaltung und Anbau",
  "Keine chemisch-synthetischen Pestizide",
  "Transparente Lieferkette von Feld bis Teller",
];

export function BioCertificationSection() {
  return (
    <section className="section-py bg-bio-sand">
      <Container className="grid grid-cols-[340px_1fr] items-center gap-[80px]">
        <div className="flex justify-center">
          <Image
            src="/Bio-Siegel-EG-Öko-VO-Deutschland.png"
            alt="Bio-Siegel EG-Öko-VO Deutschland"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>

        <div>
          <h2 className="text-h2 text-bio-dark">Wir sind zertifiziert</h2>
          <p className="text-body mt-6 max-w-[560px] text-bio-grey">
            Unser Bio-Zertifikat nach EG-Öko-VO garantiert höchste Standards in
            Anbau, Verarbeitung und Qualität. Vertrauen Sie auf geprüfte
            Bio-Qualität für Ihre Kinder.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-[15px] text-bio-dark"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bio-green/15 text-[11px] text-bio-green">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-bio-dark underline underline-offset-[6px] transition-colors hover:text-bio-green"
          >
            Mehr über unser Bio-Zertifikat erfahren
            <Image
              src="/icons/Icon_Arrow_Small.svg"
              alt=""
              width={15}
              height={15}
            />
          </a>
        </div>
      </Container>
    </section>
  );
}
