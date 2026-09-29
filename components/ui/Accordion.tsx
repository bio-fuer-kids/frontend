"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type AccordionItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("divide-y divide-bio-dark border-b", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              // FIX: Leicht verringerte vertikale Abstände (py-3) für Mobile
              className="flex w-full items-center justify-between gap-8 py-4 max-md:py-3 text-left cursor-pointer"
            >
              {/* FIX: Schriftgröße auf Mobile (18px) angepasst, damit die Fragen in eine Zeile passen */}
              <span className="font-serif text-2xl text-bio-dark max-md:text-[20px]">
                {item.question}
              </span>
              <Image
                src={isOpen ? "/icons/Icon_Minus.svg" : "/icons/Icon_Plus.svg"}
                alt={isOpen ? "Schließen" : "Öffnen"}
                width={16}
                height={16}
                className="shrink-0"
              />
            </button>
            {isOpen && (
              // FIX: Abstand nach rechts (pr) für Mobile verringert
              <div className="pb-6 pr-12 max-md:pb-5 max-md:pr-8">
                {/* FIX: Die Textfarbe der Antwort ist auf Mobile dunkel (wie im Design), nicht grau */}
                <p className="text-sm leading-relaxed text-bio-grey max-md:text-bio-dark max-md:text-[14px]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export type { AccordionItem };
