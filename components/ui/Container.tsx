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
        "mx-auto w-full max-w-[1600px] min-[1600px]:max-w-none px-4 min-[1600px]:px-6 py-2",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
