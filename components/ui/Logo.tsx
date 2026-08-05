import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link href="/" className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
          dark ? "bg-bio-white" : "bg-bio-dark",
        )}
      >
        <span
          className={cn(
            "font-serif text-[13px] font-semibold lowercase leading-none",
            dark ? "text-bio-dark" : "text-bio-white",
          )}
        >
          bio
        </span>
      </span>
      <span className="font-serif text-[22px] font-medium leading-none text-bio-dark">
        für Kids
      </span>
    </Link>
  );
}
