"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  name: string;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
};

export function Select({
  label,
  name,
  options,
  placeholder = "Bitte wählen",
  className,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const selectedLabel =
    options.find((o) => o.value === selected)?.label ?? placeholder;

  return (
    <div className={cn("relative flex flex-col gap-2", className)}>
      <label htmlFor={name} className="text-sm font-medium text-bio-dark">
        {label}
      </label>
      <button
        type="button"
        id={name}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between rounded-xl border border-bio-grey/40 bg-bio-white px-4 py-3 text-left text-sm transition-colors duration-200 cursor-pointer",
          "hover:border-bio-dark/60",
          isOpen && "border-bio-dark",
          !selected && "text-bio-grey/60",
        )}
      >
        <span>{selectedLabel}</span>
        <span className="text-bio-dark">{isOpen ? "∧" : "∨"}</span>
      </button>
      <input type="hidden" name={name} value={selected ?? ""} />
      {isOpen && (
        <ul className="absolute top-full z-10 mt-1 w-full rounded-xl border border-bio-border bg-bio-white py-2 shadow-sm">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 text-left text-sm text-bio-dark transition-colors hover:bg-bio-sand cursor-pointer"
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
