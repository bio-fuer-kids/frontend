import { cn } from "@/lib/utils";
import Image from "next/image";

type ButtonVariant = "outline" | "solid" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  showArrow?: boolean;
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-5 text-sm rounded-full",
  md: "h-11 px-6 text-sm rounded-xl",
  lg: "h-14 px-8 text-base rounded-full",
};

export function Button({
  children,
  variant = "outline",
  size = "md",
  className,
  href,
  type = "button",
  onClick,
  showArrow = false,
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-3 font-sans transition-colors duration-200 cursor-pointer",
    variant === "outline" &&
      "border border-bio-border bg-bio-white hover:bg-bio-dark hover:text-bio-green-bright active:bg-bio-dark active:text-bio-green-bright",
    variant === "solid" &&
      !showArrow &&
      "border border-bio-dark bg-bio-dark hover:bg-bio-dark/90",
    variant === "solid" &&
      showArrow &&
      "border border-bio-border bg-bio-white hover:bg-bio-dark hover:text-bio-green-bright active:bg-bio-dark active:text-bio-green-bright",
    variant === "ghost" &&
      "border border-bio-border bg-transparent hover:bg-bio-dark hover:text-bio-white",
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <Image
          src="/icons/Icon_Arrow_Large.svg"
          alt=""
          width={33}
          height={17}
          className="transition-[filter] duration-200 group-hover:filter-[brightness(0)_saturate(100%)_invert(67%)_sepia(47%)_saturate(638%)_hue-rotate(88deg)_brightness(95%)_contrast(89%)]"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
