"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ContactSection() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdownOptions = [
    "Elternteil",
    "Schulleitung",
    "Elternrat",
    "Sonstiges",
  ];

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
      {/* FIX: max-md:py-16 verringert das wuchtige Desktop-Padding auf dem Handy */}
      <div className="bg-bio-green-500 lg:py-30 md:py-25 max-md:py-16">
        {/* FIX: max-md:gap-12 verringert den Abstand zwischen linker und rechter Spalte auf Mobile */}
        <Container className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:gap-24 max-md:gap-12">
          {/* LINKE SPALTE: Text & Kontakt-Daten */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="mb-3 block font-inter text-[14px] uppercase tracking-wide text-bio-dark">
                Kontakt
              </span>
              {/* FIX: max-md:text-[40px] für die exakte Größe aus dem Design */}
              <h2 className="font-serif font-light text-4xl leading-tight text-bio-dark md:text-[40px] lg:text-[48px] max-md:text-[40px]">
                Sprechen Sie
                <br />
                uns an!
              </h2>
              {/* FIX: Mobile-Text minimal kompakter (max-md:text-[15px]) */}
              <p className="mt-3 max-w-sm font-inter lg:text-[16px] leading-relaxed text-bio-dark lg:w-76.5 md:w-[306.56px] max-md:text-[15px]">
                Schulleitung, Elternrat oder einfach neugierig – wir antworten
                schnell und beraten gerne auch persönlich vor Ort.
              </p>
            </div>

            {/* FIX: max-md:mt-10 und max-md:gap-6 sorgen dafür, dass Telefon & E-Mail auf schmalen Handys nebeneinander passen */}
            <div className="mt-16 flex gap-12 md:gap-16 max-md:mt-10 max-md:gap-6 max-md:mb-20">
              <div>
                <p className="font-inter text-[14px] uppercase tracking-wide text-bio-dark">
                  Telefon
                </p>
                {/* FIX: w-30.75 auf Mobile zu w-auto geändert, um Quetschungen zu vermeiden */}
                <p className="font-inter text-[16px] text-bio-dark w-30.75 max-md:w-auto">
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

          {/* RECHTE SPALTE: Das Formular (100% Dein Original, passt sich durch das CSS Grid automatisch an Mobile an) */}
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-inter text-[16px] text-bio-dark"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full rounded-[16px] h-12 border border-bio-dark bg-transparent px-6 py-3.5 font-inter text-[16px] text-bio-dark placeholder:text-bio-dark transition-all duration-300 hover:rounded-[12px] focus:outline-none focus:ring-1 focus:ring-bio-dark"
                />
              </div>

              <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
                <label className="font-inter text-[16px] text-bio-dark">
                  Ich bin
                </label>

                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex w-full cursor-pointer items-center justify-between border border-bio-dark bg-transparent px-6 py-3.5 font-inter text-[16px] text-bio-dark transition-all duration-300 hover:rounded-[12px] rounded-[16px] h-12 "
                >
                  <span>{selectedSubject || "Bitte wählen"}</span>
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

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-inter text-[16px] text-bio-dark"
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

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-inter text-[16px] text-bio-dark"
              >
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                placeholder="Ihre Nachricht an uns..."
                className="h-32 w-full resize-none rounded-[16px] border border-bio-dark bg-transparent px-6 py-4 font-inter text-[15px] text-bio-dark placeholder:text-bio-dark transition-all duration-300 hover:rounded-[12px] focus:outline-none focus:ring-1 focus:ring-bio-dark"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-[27px] border border-bio-dark bg-transparent py-4 font-inter text-[16px] text-bio-dark transition-all duration-300 hover:bg-bio-dark hover:text-bio-green-500 md:h-12 max-md:mt-2"
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
