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
    <div className={cn("flex flex-wrap gap-0", className)}>
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
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
