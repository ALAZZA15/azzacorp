import { ArrowDownToLine, ArrowLeft, MonitorDown } from "lucide-react";
import { Link } from "react-router-dom";

const EZPRAYER_DOWNLOAD_URL =
  "https://github.com/ALAZZA15/ezprayer/releases/latest/download/EzPrayer-Setup-1.0.0.exe";
const EZPRAYER_ICON_URL =
  "https://raw.githubusercontent.com/ALAZZA15/ezprayer/master/Assets/Images/EzPrayer.ico";

export default function OtherSoftware() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-dust transition-colors hover:text-bone"
      >
        <ArrowLeft className="size-4" />
        Back to Azza Corporation
      </Link>

      <div className="mx-auto mt-12 max-w-xl text-center">
        <a
          href={EZPRAYER_DOWNLOAD_URL}
          aria-label="Download EzPrayer for Windows"
          className="mx-auto grid size-24 place-items-center overflow-hidden rounded-3xl border border-white/10 bg-space-soft/60 p-4 shadow-lg shadow-cosmic/10 transition-transform hover:scale-105"
        >
          <img
            src={EZPRAYER_ICON_URL}
            alt="EzPrayer logo"
            className="size-full object-contain"
          />
        </a>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cosmic">
          Other Software
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-bone sm:text-5xl">
          EzPrayer
        </h1>
        <p className="mt-4 leading-relaxed text-dust">
          A Windows desktop application by Azza Corporation.
        </p>

        <p className="mt-4 text-sm text-dust">
          The download will be available once EzPrayer-Setup-1.0.0.exe is published as a GitHub Release asset.
        </p>

        <a
          href={EZPRAYER_DOWNLOAD_URL}
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-cosmic px-6 text-sm font-semibold text-space transition-colors hover:bg-cosmic-soft"
        >
          <ArrowDownToLine className="size-4" />
          Download EzPrayer for Windows
        </a>
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-dust">
          <MonitorDown className="size-3.5" />
          Windows application (.exe)
        </p>
      </div>
    </section>
  );
}
