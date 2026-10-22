"use client";

import { cn } from "@/lib/utils";

type PillFilterProps = {
  options: { id: string; label: string }[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
};

export function PillFilter({
  options,
  activeId,
  onChange,
  className,
}: PillFilterProps) {
  return (
    <div
      className={cn(
        // Desktop & Tablet: Bleibt exakt wie dein Original (flex-wrap)
        "flex flex-wrap gap-0",
        // Mobile: Horizontaler Scroll, bricht dank negativem Margin randlos aus dem Container aus
        "max-md:flex-nowrap max-md:gap-0 max-md:overflow-x-auto max-md:scrollbar-none max-md:-mx-4 max-md:px-4 max-md:w-[calc(100%+2rem)]",
        className,
      )}
    >
      {options.map((option, index) => {
        const isActive = option.id === activeId;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={cn(
              "h-12 w-35.25 rounded-[20px] border px-6 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer text-[16px]",
              isActive
                ? "border-bio-dark bg-bio-dark text-bio-white"
                : "border-bio-border bg-bio-white text-bio-dark hover:border-bio-dark",
              index === 0 ? "md:w-19 " : "",
              // Mobile: Kein Schrumpfen, voller Text, sauberes Scrollen
              "max-md:w-auto max-md:whitespace-nowrap max-md:px-5 max-md:text-[14px] max-md:shrink-0",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
