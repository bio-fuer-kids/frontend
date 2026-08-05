import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function SectionLabel({
  children,
  className,
  light = false,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-[0.2em]",
        light ? "text-bio-white/80" : "text-bio-green-medium",
        className,
      )}
    >
      {children}
    </p>
  );
}
