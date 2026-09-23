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
  return (
    <header className="w-full h-173px bg-bio-green-500 font-light">
      <Container className="flex items-center justify-between px-2 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="border rounded-[20px] py-2 px-4 gap-2 bg-bio-white">
            Bio für Kids
          </span>
        </Link>

        <nav className="flex items-center gap-0">
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
      </Container>

      <HeroSection />
    </header>
  );
}
