"use client";

import { Container } from "@/components/ui/Container";
import { PillFilter } from "@/components/ui/PillFilter";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { useMemo, useState } from "react";

const filterOptions = [
  { id: "all", label: "Alle" },
  { id: "qualitaet", label: "Qualität" },
  { id: "bestellung", label: "Bestellung" },
  { id: "lieferung", label: "Lieferung" },
];

const faqItems: AccordionItem[] = [
  {
    id: "1",
    category: "qualitaet",
    question: "Woher kommen eure Zutaten?",
    answer:
      "Unsere Zutaten stammen überwiegend aus regionalem Bio-Anbau in Hamburg und Schleswig-Holstein. Wir arbeiten eng mit lokalen Bio-Betrieben zusammen und legen Wert auf kurze Transportwege.",
  },
  {
    id: "2",
    category: "qualitaet",
    question: "Sind alle Gerichte bio-zertifiziert?",
    answer:
      "84% unserer verwendeten Zutaten sind bio-zertifiziert nach EG-Öko-VO. Wo Bio-Zutaten nicht verfügbar sind, setzen wir auf regionale Alternativen höchster Qualität.",
  },
  {
    id: "3",
    category: "bestellung",
    question: "Wie kann meine Schule teilnehmen?",
    answer:
      "Schulen können sich direkt über unser Kontaktformular oder telefonisch bei uns melden. Wir beraten Sie gerne zu den Möglichkeiten und erstellen ein individuelles Angebot.",
  },
  {
    id: "4",
    category: "bestellung",
    question: "Gibt es allergikerfreundliche Optionen?",
    answer:
      "Ja, wir bieten für alle gängigen Allergene alternative Gerichte an. Bitte teilen Sie uns Allergien bei der Anmeldung mit – unsere Köche passen die Menüs entsprechend an.",
  },
  {
    id: "5",
    category: "lieferung",
    question: "Wann wird das Essen geliefert?",
    answer:
      "Die frisch zubereiteten Mahlzeiten werden täglich morgens zwischen 10:00 und 11:30 Uhr direkt in die jeweilige Schule geliefert und dort warm gehalten.",
  },
  {
    id: "6",
    category: "lieferung",
    question: "In welchem Gebiet seid ihr tätig?",
    answer:
      "Wir beliefern derzeit über 45 Schulen im Großraum Hamburg. Für Anfragen außerhalb unseres Liefergebiets kontaktieren Sie uns gerne – wir prüfen individuelle Lösungen.",
  },
  {
    id: "7",
    category: "qualitaet",
    question: "Wie wird die Qualität kontrolliert?",
    answer:
      "Regelmäßige Kontrollen durch unabhängige Prüfer, HACCP-konforme Prozesse und eigene Qualitätsstandards sichern höchste Standards in unserer Küche.",
  },
  {
    id: "8",
    category: "bestellung",
    question: "Kann ich als Elternteil Einfluss nehmen?",
    answer:
      "Ja, über Elternräte und regelmäßige Feedback-Runden können Eltern Wünsche und Anregungen einbringen. Wir nehmen das Feedback ernst und passen unser Angebot an.",
  },
];

export function FAQSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return faqItems;
    return faqItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="faq" className="section-py bg-bio-sand-muted">
      <Container>
        <h2 className="text-h2 text-center text-bio-dark">
          Die wichtigsten Antworten auf einen Blick
        </h2>

        <PillFilter
          options={filterOptions}
          activeId={activeFilter}
          onChange={setActiveFilter}
          className="mt-10 justify-center"
        />

        <Accordion items={filteredItems} className="mt-6" />
      </Container>
    </section>
  );
}
