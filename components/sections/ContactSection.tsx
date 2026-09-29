"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ContactSection() {
  // State für das Custom Dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdownOptions = [
    "Elternteil",
    "Schulleitung",
    "Elternrat",
    "Sonstiges",
  ];

  // Schließt das Dropdown, wenn man irgendwo anders hinklickt
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section id="kontakt" className="flex flex-col">
      <div className="bg-bio-green-500 lg:py-30 md:py-25">
        {/* KORREKTUR: md:grid-cols-2 sorgt dafür, dass Text und Formular auch auf dem Tablet nebeneinander stehen[cite: 7] */}
        <Container className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          {/* LINKE SPALTE: Text & Kontakt-Daten */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="mb-3 block font-inter text-[14px] uppercase tracking-wide text-bio-dark">
                Kontakt
              </span>
              <h2 className="font-serif font-light text-4xl leading-tight text-bio-dark md:text-[40px] lg:text-[48px]">
                Sprechen Sie
                <br />
                uns an!
              </h2>
              <p className="mt-3 max-w-sm font-inter lg:text-[16px] leading-relaxed text-bio-dark lg:w-76.5 md:w-[306.56px]">
                Schulleitung, Elternrat oder einfach neugierig – wir antworten
                schnell und beraten gerne auch persönlich vor Ort.
              </p>
            </div>

            {/* Kontakt-Daten bündig am unteren Rand[cite: 7, 9] */}
            <div className="mt-16 flex gap-12 md:gap-16">
              <div>
                <p className="font-inter text-[14px] uppercase tracking-wide text-bio-dark">
                  Telefon
                </p>
                <p className="font-inter text-[16px] text-bio-dark w-30.75">
                  040 / 6979 0101
                </p>
              </div>
              <div>
                <p className="font-inter text-[14px] uppercase tracking-wide text-bio-dark">
                  E-Mail
                </p>
                <p className="font-inter text-[16px] text-bio-dark">
                  schule@biofuerkids.de
                </p>
              </div>
            </div>
          </div>

          {/* RECHTE SPALTE: Das Formular */}
          <form className="flex flex-col gap-4">
            {/* Zeile 1: Name & Auswahl */}
            {/* KORREKTUR: lg:grid-cols-2 zwingt diese beiden Felder auf dem Tablet UNTEREINANDER[cite: 7], auf Desktop NEBENEINANDER[cite: 9] */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Feld: Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-inter text-[13px] text-bio-dark"
                >
                  Name
                </label>
                {/* 16px Radius, 12px bei Hover[cite: 8] */}
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full rounded-[16px] h-12 border border-bio-dark bg-transparent px-6 py-3.5 font-inter text-[16px] text-bio-dark placeholder:text-bio-dark transition-all duration-300 hover:rounded-[12px] focus:outline-none focus:ring-1 focus:ring-bio-dark"
                />
              </div>

              {/* Feld: Ich bin (Custom Dropdown)[cite: 8] */}
              <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
                <label className="font-inter text-[13px] text-bio-dark">
                  Ich bin
                </label>

                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex w-full cursor-pointer items-center justify-between border border-bio-dark bg-transparent px-6 py-3.5 font-inter text-[15px] text-bio-dark transition-all duration-300 hover:rounded-[12px] rounded-[16px] h-12 "
                >
                  <span>{selectedSubject || "Bitte wählen"}</span>
                  {/* Pfeil nach unten/oben[cite: 8] */}
                  <div
                    className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  >
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

                {/* Ausklappbares Menü (Weißer Hintergrund, 16px Ecken)[cite: 8] */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 z-50 w-full overflow-hidden rounded-[16px] border border-bio-dark bg-bio-white shadow-lg">
                    {dropdownOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setSelectedSubject(option);
                          setIsDropdownOpen(false);
                        }}
                        className="cursor-pointer px-6 py-3 font-inter text-[15px] text-bio-dark transition-colors hover:bg-bio-green-500"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
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
                className="w-full rounded-[16px] border border-bio-dark bg-transparent px-6 py-3.5 font-inter text-[15px] text-bio-dark placeholder:text-bio-dark transition-all duration-300 hover:rounded-[12px] focus:outline-none focus:ring-1 focus:ring-bio-dark h-12"
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
                className="h-32 w-full resize-none rounded-[16px] border border-bio-dark bg-transparent px-6 py-4 font-inter text-[15px] text-bio-dark placeholder:text-bio-dark transition-all duration-300 hover:rounded-[12px] focus:outline-none focus:ring-1 focus:ring-bio-dark"
              />
            </div>

            {/* Zeile 4: Button */}
            {/* KORREKTUR: Dieser Button ist Pillen-förmig (rounded-full) in den Mockups[cite: 7, 9] */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-[27px] border border-bio-dark bg-transparent py-4 font-inter text-[16px] text-bio-dark transition-all duration-300 hover:bg-bio-dark hover:text-bio-green-500 md:h-12"
            >
              Nachricht absenden
              <Image
                src="/icons/Icon_Arrow_Small_new.svg"
                aria-hidden="true"
                alt=""
                width={33}
                height={17}
                className="transition-[filter] duration-300 group-hover:filter-[brightness(0)_saturate(100%)_invert(67%)_sepia(47%)_saturate(638%)_hue-rotate(88deg)_brightness(95%)_contrast(89%)] rotate-180"
              ></Image>
            </button>
          </form>
        </Container>
      </div>

      <div className="relative h-75 w-full sm:h-100 md:h-86 lg:h-190">
        <Image
          src="/2026_Bio-für-Kids-6.jpg"
          alt="Kind macht Radschlag auf der Wiese"
          fill
          className="object-[25%_75%] object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
