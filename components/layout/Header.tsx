import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeroSection } from "../sections/HeroSection";

const navLinks = [
  { href: "#unseressen", label: "Unser Essen" },
  { href: "#speiseplan", label: "Speiseplan" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#faq", label: "FAQ" },
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
              className="border bg-bio-white px-4 py-2 rounded-[16px]"
            >
              {link.label}
            </Link>
          ))}
          <button className="border bg-bio-dark text-bio-white border-bio-dark px-4 py-2">
            Zum Bestellportal
          </button>
        </nav>
      </Container>

      <HeroSection />
    </header>
  );
}
