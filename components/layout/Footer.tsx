import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-bio-dark">
      <Container className="flex h-[72px] items-center justify-between">
        <Logo dark />
        <div className="flex items-center gap-10">
          <Link
            href="#"
            className="text-[13px] text-bio-white/60 transition-colors hover:text-bio-white"
          >
            Impressum
          </Link>
          <Link
            href="#"
            className="text-[13px] text-bio-white/60 transition-colors hover:text-bio-white"
          >
            Datenschutz
          </Link>
        </div>
      </Container>
    </footer>
  );
}
