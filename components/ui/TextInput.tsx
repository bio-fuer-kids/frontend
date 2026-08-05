import { cn } from "@/lib/utils";

type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  multiline?: boolean;
};

export function TextInput({
  label,
  name,
  type = "text",
  placeholder,
  className,
  multiline = false,
}: TextInputProps) {
  const sharedClasses = cn(
    "w-full rounded-xl border border-bio-grey/40 bg-bio-white px-4 py-3 text-sm text-bio-dark placeholder:text-bio-grey/60 outline-none transition-colors duration-200",
    "hover:border-bio-dark/60 focus:border-bio-dark",
    className,
  );

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-bio-dark">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder ?? label}
          rows={5}
          className={cn(sharedClasses, "resize-none")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder ?? label}
          className={sharedClasses}
        />
      )}
    </div>
  );
}
