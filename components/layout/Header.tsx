"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeroSection } from "../sections/HeroSection";

const navLinks = [
  { href: "#speiseplan", label: "Speiseplan" },
  { href: "#unseressen", label: "Unser Essen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* DEIN ORIGINAL WRAPPER */}
      <header className="w-full h-173px bg-bio-green-500 font-light">
        <Container className="flex items-center justify-between px-2 py-4">
          <Link href="/" className="flex items-center gap-2 z-50">
            <span className="border rounded-[20px] py-2 px-4 gap-2 bg-bio-white">
              Bio für Kids
            </span>
          </Link>

          {/* DESKTOP NAV: Dein 1:1 Code, nur durch "hidden lg:flex" auf Desktop begrenzt */}
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

          {/* TABLET MENU BUTTON: Wird nur auf Mobile/Tablet angezeigt */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden border rounded-[20px] py-2 px-6 bg-bio-white text-bio-dark border-bio-dark z-50"
          >
            Menu
          </button>
        </Container>

        <HeroSection />
      </header>

      {/* TABLET OVERLAY MENÜ (Genau wie in deinem Screenshot) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-100 flex flex-col bg-bio-green-500 overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-4 md:px-6">
            <span className="border rounded-[20px] py-2 px-4 bg-bio-white text-bio-dark">
              Bio für Kids
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="border rounded-[20px] py-2 px-6 bg-bio-white text-bio-dark"
            >
              Close
            </button>
          </div>

          <nav className="mt-8 flex flex-col items-start gap-4 px-4 md:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="border rounded-[20px] bg-bio-white px-6 py-2 text-[18px] text-bio-dark"
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-2 border rounded-[20px] border-bio-dark bg-bio-dark px-6 py-2 text-[18px] text-bio-green-500">
              Zum Bestellportal
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
