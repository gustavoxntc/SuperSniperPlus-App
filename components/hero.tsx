import Image from "next/image";
import { Download, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16 lg:px-8">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--secondary)] px-4 py-1.5 text-xs font-medium text-[var(--secondary-foreground)]">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Free & Open Source
        </div>

        <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
          Screen Capture,{" "}
          <span className="text-[var(--primary)]">Redefined</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--muted-foreground)] md:text-xl">
          Capture any area of your screen, annotate with pro tools, blur
          sensitive info, and share instantly. SuperSniperPlus is the
          lightweight Windows tool that stays out of your way.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://github.com/gustavoxntc/SuperSniperPlus-App/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--primary)] px-8 py-4 text-base font-semibold text-[var(--primary-foreground)] transition-all hover:brightness-110"
          >
            <Download size={18} />
            Download for Windows
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--secondary)] px-8 py-4 text-base font-semibold text-[var(--foreground)] transition-all hover:bg-[var(--muted)]"
          >
            See Features
          </a>
        </div>

        <p className="mt-4 text-xs text-[var(--muted-foreground)]">
          Windows 10/11 -- No account required
        </p>
      </div>

      <div className="mt-16 w-full max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-[var(--primary)]/5">
          <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500/60" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/60" />
            <span className="ml-3 text-xs text-[var(--muted-foreground)]">
              SuperSniperPlus Editor
            </span>
          </div>
          <Image
            src="/images/hero-screenshot.jpg"
            alt="SuperSniperPlus application editor interface showing annotation tools and captured screenshot"
            width={1200}
            height={675}
            className="w-full"
            priority
          />
        </div>
      </div>

      <a
        href="#features"
        className="mt-12 flex flex-col items-center gap-2 text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)]"
        aria-label="Scroll to features"
      >
        <span className="text-xs">Discover more</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
