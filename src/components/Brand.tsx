import { cn } from "@/lib/utils";

interface BrandProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Brand({ className, size = "md" }: BrandProps) {
  const box = size === "lg" ? "size-12 text-2xl" : size === "sm" ? "size-8 text-sm" : "size-10 text-lg";
  const text = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-xl";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative grid place-items-center rounded-full bg-space-soft ring-1 ring-cosmic/30",
          box,
        )}
      >
        <span className="absolute inset-0 rounded-full bg-cosmic/20 blur-md" />
        <span className="relative font-heading font-black text-cosmic">A</span>
      </span>
      <span className={cn("font-heading font-bold tracking-tight text-bone", text)}>
        Azza<span className="text-cosmic">Corp</span>
      </span>
    </div>
  );
}