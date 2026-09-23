"use client";

import { Container } from "@/components/ui/Container";
import { PillFilter } from "@/components/ui/PillFilter";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { useMemo, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

const filterOptions = [
  { id: "all", label: "Alle" },
  { id: "eltern", label: "Für Eltern" },
  { id: "schulen", label: "Für Schulen" },
  { id: "schueler", label: "Für Schüler" },
];

// Die Fragen wurden exakt an den Entwurf angepasst. Die Antworten sind Mockdata,
// bis auf die erste, die aus dem Screenshot übernommen wurde.
const faqItems: AccordionItem[] = [
  {
    id: "1",
    category: "all",
    question: "Wo wird das Essen gekocht?",
    answer:
      "Direkt vor Ort in der Schulküche. Kein Lieferdienst, kein Aufwärmen – jedes Gericht wird täglich frisch in der jeweiligen Schule zubereitet.",
  },
  {
    id: "2",
    category: "eltern",
    question: "Was bekommt mein Kind täglich?",
    answer: "Hier kommt die Antworttext hin.",
  },
  {
    id: "3",
    category: "eltern",
    question: "Woher kommen die Zutaten?",
    answer: "Hier kommt die Antworttext hin.",
  },
  {
    id: "4",
    category: "eltern",
    question: "Mein Kind hat Allergien – Was tun?",
    answer: "Hier kommt die Antworttext hin.",
  },
  {
    id: "5",
    category: "eltern",
    question: "Wie funktioniert die Abrechnung für Eltern?",
    answer: "Hier kommt die Antworttext hin.",
  },
  {
    id: "6",
    category: "schulen",
    question: "Nach welchen Standarts wird der Speiseplan erstellt?",
    answer: "Hier kommt die Antworttext hin.",
  },
  {
    id: "7",
    category: "schulen",
    question: "Was müssen Schulen organisieren?",
    answer: "Hier kommt die Antworttext hin.",
  },
  {
    id: "8",
    category: "schulen",
    question: "Können wir Bio für Kids an unserer Schule einführen?",
    answer: "Hier kommt die Antworttext hin.",
  },
  {
    id: "9",
    category: "schueler",
    question: "Kann ich als Schüler Wünsche einbringen?",
    answer: "Hier kommt die Antworttext hin.",
  },
  {
    id: "10",
    category: "schueler",
    question: "Gibt es immer etwas für Fleisch?",
    answer: "Hier kommt die Antworttext hin.",
  },
];

export function FAQSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return faqItems;
    return faqItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="faq" className="bg-bio-sand-beige py-24 md:py-32">
      <Container className="mx-auto flex w-full max-w-4xl flex-col items-center">
        {/* Angepasster Header aus dem Beispiel */}
        <div className="mb-12 flex flex-col items-center text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-h2-section text-[48px] leading-tight text-bio-dark md:text-5xl lg:text-[56px]">
            Die wichtigsten
            <br />
            Antworten auf einen
            <br />
            Blick
          </h2>
        </div>

        {/* Pill-Filter */}
        <PillFilter
          options={filterOptions}
          activeId={activeFilter}
          onChange={setActiveFilter}
          className="mb-16 justify-center"
        />

        {/* Accordion-Liste */}
        <div className="w-full">
          <Accordion items={filteredItems} className="w-full" />
        </div>
      </Container>
    </section>
  );
}
