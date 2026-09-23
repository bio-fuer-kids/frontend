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
        "text_overline",
        light ? "text-bio-white" : "text-bio-green-medium",
        className,
      )}
    >
      {children}
    </p>
  );
}
