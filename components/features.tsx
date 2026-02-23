import Image from "next/image";
import {
  Crosshair,
  Paintbrush,
  ShieldCheck,
  ClipboardCopy,
  History,
  Layout,
} from "lucide-react";

const features = [
  {
    icon: Crosshair,
    title: "Smart Selection",
    description:
      "Capture any area of your screen with precision. Full multi-monitor support built in.",
  },
  {
    icon: Layout,
    title: "Contextual UI",
    description:
      "A clean interface that shows editing tools only when you need them. No clutter.",
  },
  {
    icon: Paintbrush,
    title: "Pro Annotations",
    description:
      "Add arrows, rectangles, circles, lines, and text with custom fonts and colors.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "Built-in pixelate tool to hide sensitive information from your screenshots instantly.",
  },
  {
    icon: ClipboardCopy,
    title: "Auto-Save & Copy",
    description:
      "One-click saving while automatically copying the image to your clipboard. Instant sharing.",
  },
  {
    icon: History,
    title: "Visual History",
    description:
      "Quickly browse and re-edit your previous captures. Never lose a screenshot again.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Features
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
            Everything you need, nothing you don't
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[var(--muted-foreground)]">
            SuperSniperPlus is packed with powerful features while remaining
            lightweight and fast.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)]/20">
                <feature.icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-[var(--muted-foreground)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature showcase images */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
            <Image
              src="/images/feature-selection.jpg"
              alt="Smart multi-monitor screen selection feature"
              width={600}
              height={400}
              className="w-full"
            />
            <div className="p-5">
              <h4 className="font-semibold text-[var(--foreground)]">
                Multi-Monitor Capture
              </h4>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                Select any region across your monitors.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
            <Image
              src="/images/feature-annotate.jpg"
              alt="Professional annotation tools with arrows, shapes, and text"
              width={600}
              height={400}
              className="w-full"
            />
            <div className="p-5">
              <h4 className="font-semibold text-[var(--foreground)]">
                Rich Annotations
              </h4>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                Arrows, shapes, text with full customization.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
            <Image
              src="/images/feature-privacy.jpg"
              alt="Pixelate tool to blur sensitive information"
              width={600}
              height={400}
              className="w-full"
            />
            <div className="p-5">
              <h4 className="font-semibold text-[var(--foreground)]">
                Privacy Pixelation
              </h4>
              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                Instantly blur sensitive data in screenshots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
