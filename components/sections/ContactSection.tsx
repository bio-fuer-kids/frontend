import { Container } from "@/components/ui/Container";
import { TextInput } from "@/components/ui/TextInput";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const subjectOptions = [
  { value: "elternteil", label: "Elternteil" },
  { value: "schulleitung", label: "Schulleitung" },
  { value: "elternrat", label: "Elternrat" },
  { value: "sonstiges", label: "Sonstiges" },
];

export function ContactSection() {
  return (
    <section id="kontakt" className="section-py bg-bio-green">
      <Container className="grid grid-cols-2 gap-[80px]">
        <div>
          <h2 className="text-h2 text-bio-dark">Sprechen Sie uns an!</h2>
          <div className="mt-10 flex flex-col gap-8">
            <div>
              <p className="text-label text-bio-dark/60">Adresse</p>
              <p className="text-body mt-2 text-bio-dark/80">
                Bio für Kids GmbH
                <br />
                Musterstraße 12
                <br />
                20095 Hamburg
              </p>
            </div>
            <div>
              <p className="text-label text-bio-dark/60">Telefon</p>
              <p className="text-body mt-2 text-bio-dark/80">
                +49 (0) 40 123 456 78
              </p>
            </div>
            <div>
              <p className="text-label text-bio-dark/60">E-Mail</p>
              <p className="text-body mt-2 text-bio-dark/80">
                info@bio-fuer-kids.de
              </p>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-5">
          <TextInput label="Name" name="name" placeholder="Name" />
          <TextInput
            label="E-Mail"
            name="email"
            type="email"
            placeholder="E-Mail"
          />
          <Select
            label="Betreff"
            name="subject"
            options={subjectOptions}
            placeholder="Bitte wählen"
          />
          <TextInput
            label="Ihre Nachricht"
            name="message"
            placeholder="Ihre Nachricht"
            multiline
          />
          <div className="mt-4">
            <Button
              type="submit"
              variant="solid"
              size="lg"
              showArrow
              className="w-full"
            >
              Nachricht absenden
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
