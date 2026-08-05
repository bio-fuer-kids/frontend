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
    <div className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const isActive = option.id === activeId;
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={cn(
              "h-9 rounded-full border px-5 text-sm font-medium transition-colors duration-200 cursor-pointer",
              isActive
                ? "border-bio-dark bg-bio-dark text-bio-white"
                : "border-bio-border bg-bio-white text-bio-dark hover:border-bio-dark",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
