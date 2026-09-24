// components/ui/Container.tsx
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        // px-4 (16px) für Mobile/Tablet, lg:px-8 (32px) für Desktop
        // py-2 entfernt für pixelgenaue Section-Paddings
        "mx-auto w-full max-w-[1600px] px-6 lg:px-8 min-[1600px]:max-w-none min-[1600px]:px-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
