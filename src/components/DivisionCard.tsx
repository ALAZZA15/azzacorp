import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  tagline: string;
  description: string;
  status: "Live" | "In Development" | "Planned";
  to: string;
  icon: LucideIcon;
  accent: "lime" | "cyan" | "mars" | "violet";
  external?: boolean;
}

const ACCENT: Record<Props["accent"], { glow: string; ring: string; text: string; bg: string }> = {
  lime: { glow: "from-lime-400/20", ring: "ring-lime-400/30", text: "text-lime-400", bg: "bg-lime-400/10" },
  cyan: { glow: "from-cosmic/20", ring: "ring-cosmic/30", text: "text-cosmic", bg: "bg-cosmic/10" },
  mars: { glow: "from-mars/20", ring: "ring-mars/30", text: "text-mars", bg: "bg-mars/10" },
  violet: { glow: "from-violet-400/20", ring: "ring-violet-400/30", text: "text-violet-400", bg: "bg-violet-400/10" },
};

const STATUS_STYLE: Record<Props["status"], string> = {
  Live: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30",
  "In Development": "bg-amber-400/10 text-amber-300 ring-amber-400/30",
  Planned: "bg-dust/10 text-dust ring-dust/20",
};

export default function DivisionCard({ name, tagline, description, status, to, icon: Icon, accent, external }: Props) {
  const a = ACCENT[accent];

  const Inner = (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-space-soft/40 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/10",
      )}
    >
      <div className={cn("pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gradient-to-br to-transparent blur-3xl", a.glow)} />

      <div className="relative flex items-start justify-between">
        <span className={cn("grid size-12 place-items-center rounded-xl ring-1", a.bg, a.ring)}>
          <Icon className={cn("size-6", a.text)} />
        </span>
        <span className={cn("rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ring-1", STATUS_STYLE[status])}>
          {status}
        </span>
      </div>

      <h3 className="relative mt-6 font-heading text-2xl font-bold text-bone">{name}</h3>
      <p className={cn("relative mt-1 text-sm font-medium", a.text)}>{tagline}</p>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-dust">{description}</p>

      <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-bone">
        Learn more
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className="block h-full">
        {Inner}
      </a>
    );
  }
  return (
    <Link to={to} className="block h-full">
      {Inner}
    </Link>
  );
}