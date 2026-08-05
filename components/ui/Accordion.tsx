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
    <div className={cn("divide-y divide-bio-dark/10", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between gap-8 py-6 text-left cursor-pointer"
            >
              <span className="font-serif text-xl text-bio-dark">
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
              <div className="pb-6 pr-12">
                <p className="text-sm leading-relaxed text-bio-grey">
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
