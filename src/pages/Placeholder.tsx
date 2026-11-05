import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

interface Props {
  title: string;
  tagline: string;
  description: string;
  accent: "cyan" | "mars" | "violet";
}

const ACCENT: Record<Props["accent"], { text: string; bg: string; ring: string; glow: string }> = {
  cyan: { text: "text-cosmic", bg: "bg-cosmic/10", ring: "ring-cosmic/30", glow: "bg-cosmic/20" },
  mars: { text: "text-mars", bg: "bg-mars/10", ring: "ring-mars/30", glow: "bg-mars/20" },
  violet: { text: "text-violet-400", bg: "bg-violet-400/10", ring: "ring-violet-400/30", glow: "bg-violet-400/20" },
};

export default function Placeholder({ title, tagline, description, accent }: Props) {
  const a = ACCENT[accent];
  return (
    <section className="relative mx-auto flex min-h-[70dvh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <div className={`pointer-events-none absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full ${a.glow} blur-[100px]`} />

      <span className={`relative grid size-16 place-items-center rounded-2xl ring-1 ${a.bg} ${a.ring}`}>
        <Sparkles className={`size-8 ${a.text}`} />
      </span>

      <h1 className="relative mt-8 font-heading text-4xl font-bold tracking-tight text-bone sm:text-5xl">{title}</h1>
      <p className={`relative mt-2 text-lg font-medium ${a.text}`}>{tagline}</p>
      <p className="relative mt-6 max-w-lg leading-relaxed text-dust">{description}</p>

      <div className="relative mt-10 rounded-2xl border border-white/5 bg-space-soft/40 px-6 py-4 backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-wider text-dust">Status</p>
        <p className="mt-1 font-heading text-lg font-bold text-bone">In development</p>
      </div>

      <Link
        to="/"
        className="relative mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-bone transition-colors hover:border-white/30 hover:bg-white/5"
      >
        <ArrowLeft className="size-4" /> Back to Azza Corp
      </Link>
    </section>
  );
}