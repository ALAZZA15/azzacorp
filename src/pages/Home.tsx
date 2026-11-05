import { ArrowRight, Atom, Bot, Building2, KeyRound, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import DivisionCard from "@/components/DivisionCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-cosmic/10 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cosmic/30 bg-cosmic/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cosmic">
              <Sparkles className="size-3.5" />
              A holding company
            </span>
            <h1 className="mt-6 font-heading text-5xl font-bold leading-[1.05] tracking-tight text-bone sm:text-6xl md:text-7xl">
              One sky,
              <br />
              <span className="bg-gradient-to-r from-cosmic to-cosmic-soft bg-clip-text text-transparent">many stars.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-dust sm:text-lg">
              Azza Corporation builds and nurtures independent digital products — from boarding house management to Linux distributions, smart keys, and AI agents.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#divisions"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-cosmic px-6 text-sm font-semibold text-space transition-all hover:bg-cosmic-soft"
              >
                Explore divisions <ArrowRight className="size-4" />
              </a>
              <a
                href="https://github.com/ALAZZA15"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 px-6 text-sm font-semibold text-bone transition-colors hover:border-white/30 hover:bg-white/5"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-bone sm:text-4xl">Our divisions</h2>
          <p className="mt-3 text-dust">
            Each product lives under its own sky — independent, but connected by shared craft and care.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <DivisionCard
            name="EzIndustrion"
            tagline="Boarding house management"
            description="Rooms, tenants, dashboard, and tenant portal — calm property management for Indonesian kos."
            status="Live"
            to="http://localhost:5173"
            external
            icon={Building2}
            accent="lime"
          />
          <DivisionCard
            name="EzOrb"
            tagline="A Linux distribution"
            description="A distro built from the ground up — custom kernel, package manager, and a clear user experience."
            status="In Development"
            to="/ezorb"
            icon={Atom}
            accent="cyan"
          />
          <DivisionCard
            name="Smart Key"
            tagline="A smart access system"
            description="An Android application that turns your phone into a key — secure, simple, and fast."
            status="In Development"
            to="/smartkey"
            icon={KeyRound}
            accent="mars"
          />
          <DivisionCard
            name="Azza AI"
            tagline="AI agents"
            description="Purpose-built AI agents that work quietly in the background, helping without interrupting."
            status="Planned"
            to="/ai"
            icon={Bot}
            accent="violet"
          />
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 rounded-3xl border border-white/5 bg-space-soft/40 p-8 backdrop-blur sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-bone sm:text-4xl">About Azza</h2>
            <p className="mt-6 leading-relaxed text-dust">
              Azza Corporation was born from a simple habit: writing ideas down, then building them one by one. Each division is its own story — an industry, a tool, or a small experiment — but they all share the same belief: technology should make life calmer, not busier.
            </p>
            <p className="mt-4 leading-relaxed text-dust">
              We are not big. We are not famous yet. But we believe that good companies are built not by size, but by consistency. Azza Corp is the place where those ideas are given room to grow.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="rounded-2xl border border-white/5 bg-space/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-dust">Founded</p>
              <p className="mt-1 font-heading text-2xl font-bold text-bone">2026</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-space/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-dust">Divisions</p>
              <p className="mt-1 font-heading text-2xl font-bold text-bone">4 active horizons</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-space/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-dust">Philosophy</p>
              <p className="mt-1 font-heading text-2xl font-bold text-bone">Clarity over scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-cosmic/20 bg-gradient-to-br from-space-soft to-space p-10 text-center sm:p-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-bone sm:text-4xl">
            Looking for the stars?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-dust">
            Each division has its own story. Pick one to explore — or reach out and say hello.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/ezorb"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-cosmic px-6 text-sm font-semibold text-space transition-colors hover:bg-cosmic-soft"
            >
              Explore EzOrb
            </Link>
            <a
              href="mailto:hello@azzacorp.com"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-6 text-sm font-semibold text-bone transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Say hello
            </a>
          </div>
        </div>
      </section>
    </>
  );
}