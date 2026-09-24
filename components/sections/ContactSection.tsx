import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ContactSection() {
  return (
    <section id="kontakt" className="flex flex-col">
      <div className="bg-bio-green-500 py-24 md:py-30">
        <Container className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <div className="flex flex-col justify-between">
            <div>
              <span className="mb-3 block font-inter text-[12px] uppercase tracking-wide text-bio-dark">
                Kontakt
              </span>
              <h2 className="font-serif text-4xl leading-tight text-bio-dark md:text-5xl lg:text-[56px]">
                Sprechen Sie
                <br />
                uns an!
              </h2>
              <p className="mt-6 max-w-sm font-inter text-[15px] leading-relaxed text-bio-dark">
                Schulleitung, Elternrat oder einfach neugierig – wir antworten
                schnell und beraten gerne auch persönlich vor Ort.
              </p>
            </div>

            {/* Kontakt-Daten bündig am unteren Rand */}
            <div className="mt-16 flex gap-12 md:gap-16">
              <div>
                <p className="font-inter text-[12px] uppercase tracking-wide text-bio-dark">
                  Telefon
                </p>
                <p className="mt-1 font-inter text-[16px] text-bio-dark">
                  040 / 6979 0101
                </p>
              </div>
              <div>
                <p className="font-inter text-[12px] uppercase tracking-wide text-bio-dark">
                  E-Mail
                </p>
                <p className="mt-1 font-inter text-[16px] text-bio-dark">
                  schule@biofuerkids.de
                </p>
              </div>
            </div>
          </div>

          {/* Rechte Spalte: Transparentes Formular */}
          <form className="flex flex-col gap-6">
            {/* Zeile 1: Name & Auswahl */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-inter text-[13px] text-bio-dark"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full rounded-full border border-bio-dark bg-transparent px-6 py-3 font-inter text-[15px] text-bio-dark placeholder:text-bio-dark/70 focus:outline-none focus:ring-1 focus:ring-bio-dark"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="font-inter text-[13px] text-bio-dark"
                >
                  Ich bin
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    defaultValue=""
                    className="w-full appearance-none rounded-full border border-bio-dark bg-transparent px-6 py-3 font-inter text-[15px] text-bio-dark focus:outline-none focus:ring-1 focus:ring-bio-dark"
                  >
                    <option value="" disabled hidden>
                      Bitte wählen
                    </option>
                    <option value="elternteil">Elternteil</option>
                    <option value="schulleitung">Schulleitung</option>
                    <option value="elternrat">Elternrat</option>
                    <option value="sonstiges">Sonstiges</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center">
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Zeile 2: E-Mail */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-inter text-[13px] text-bio-dark"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="E-Mail"
                className="w-full rounded-full border border-bio-dark bg-transparent px-6 py-3 font-inter text-[15px] text-bio-dark placeholder:text-bio-dark/70 focus:outline-none focus:ring-1 focus:ring-bio-dark"
              />
            </div>

            {/* Zeile 3: Nachricht */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-inter text-[13px] text-bio-dark"
              >
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                placeholder="Ihre Nachricht an uns..."
                className="h-32 w-full resize-none rounded-[24px] border border-bio-dark bg-transparent px-6 py-4 font-inter text-[15px] text-bio-dark placeholder:text-bio-dark/70 focus:outline-none focus:ring-1 focus:ring-bio-dark"
              />
            </div>

            {/* Zeile 4: Button */}
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-bio-dark bg-transparent py-4 font-inter text-[15px] text-bio-dark transition-colors hover:bg-bio-dark hover:text-bio-green-200"
            >
              Nachricht absenden
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </Container>
      </div>

      <div className="relative h-75 w-full sm:h-100 md:h-155 lg:h-190">
        <Image
          src="/2026_Bio-für-Kids-6.jpg"
          alt="Kind macht Radschlag auf der Wiese"
          fill
          className="object-[25%_65%] object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
