"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

// DEIN ORIGINAL-ARRAY: Wird NUR auf dem Desktop genutzt und bleibt zu 100% unangetastet!
const navLinks = [
  { href: "#speiseplan", label: "Speiseplan" },
  { href: "#unseressen", label: "Unser Essen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

// NEUES ARRAY: Wird NUR im Mobile/Tablet Overlay-Menü genutzt (Reihenfolge nach Design)
const overlayNavLinks = [
  { href: "#unseressen", label: "Unser Essen" },
  { href: "#speiseplan", label: "Speiseplan" },
  { href: "#ueber-uns", label: "Über Uns" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FIX: Verhindert das Scrollen der Seite im Hintergrund, solange das Overlay-Menü offen ist
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Dein Original Header-Wrapper */}
      <header className="w-full h-173px max-md:h-auto max-md:fixed max-md:top-0 max-md:left-0 max-md:z-[999] bg-bio-green-500 font-light">
        <Container className="flex items-center justify-between px-2 py-4 max-md:p-4">
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="border rounded-[20px] py-2 px-4 gap-2 bg-bio-white max-md:border-bio-dark max-md:text-bio-dark">
              Bio für Kids
            </span>
          </Link>

          {/* DESKTOP NAV: Nutzt DEIN ORIGINAL navLinks Array! Unangetastet. */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border bg-bio-white px-4 py-2 hover:bg-bio-dark hover:text-bio-white hover:border-bio-dark rounded-[16px]"
              >
                {link.label}
              </Link>
            ))}
            <button className="border rounded-[20px] py-2 px-4 gap-2 bg-bio-dark text-bio-white border-bio-dark hover:bg-bio-white hover:text-bio-dark hover:border-bio-white ">
              Zum Bestellportal
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden border rounded-[20px] py-2 px-6 bg-bio-white text-bio-dark border-bio-dark z-50"
          >
            Menu
          </button>
        </Container>
      </header>

      {/* OVERLAY MENÜ (Für Tablet und Mobile) */}
      {isMenuOpen && (
        // overflow-y-auto bleibt für Tablets erhalten, max-md:overflow-hidden sperrt das vertikale Scrollen auf Handys ab
        <div className="fixed inset-0 z-[1000] flex flex-col bg-bio-green-500 overflow-y-auto max-md:overflow-hidden">
          <div className="flex items-center justify-between px-4 py-4 md:px-6">
            <span className="border rounded-[20px] py-2 px-4 bg-bio-white text-bio-dark max-md:border-bio-dark">
              Bio für Kids
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="border rounded-[20px] py-2 px-6 bg-bio-white text-bio-dark max-md:border-bio-dark"
            >
              Close
            </button>
          </div>

          {/* 
            Dein originales mt-8 für Tablet bleibt hier erhalten!
            max-md:mt-auto und max-md:mb-16 drücken das Menü auf dem Handy exakt nach unten (wie im Design), ohne Scroll-Bug.
          */}
          <nav className="mt-8 flex flex-col items-start gap-3 px-4 md:px-6 max-md:mt-auto max-md:mb-16 max-md:pb-0 scrollbar-none overflow-y-hidden">
            {overlayNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="border rounded-[20px] bg-bio-white px-6 py-2 text-[18px] text-bio-dark max-md:border-bio-dark max-md:w-max max-md:py-2"
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-2 border rounded-[20px] border-bio-dark bg-bio-dark px-6 py-2 text-[18px] text-bio-green-500 max-md:w-max max-md:py-3 max-md:mt-0">
              Zum Bestellportal
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
