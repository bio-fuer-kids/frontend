import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-bio-dark">
      <div className="bg-white py-6">
        <Container className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <span className="font-inter text-[13px] text-bio-dark">
            © 2025 Bio für Kids - Hamburg
          </span>
          <div className="flex items-center gap-6 font-inter text-[13px] text-bio-dark">
            <a href="#kontakt" className="transition-opacity hover:opacity-60">
              Kontakt
            </a>
            <a
              href="/impressum"
              className="transition-opacity hover:opacity-60"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="transition-opacity hover:opacity-60"
            >
              Datenschutz
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
