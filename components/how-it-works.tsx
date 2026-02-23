import { MousePointerClick, Pencil, Share2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MousePointerClick,
    title: "Capture",
    description:
      "Press Alt + S to activate the snipping tool. Click and drag to select any area on your screen, across any monitor.",
  },
  {
    step: "02",
    icon: Pencil,
    title: "Edit & Annotate",
    description:
      "Use the built-in editor to add arrows, shapes, text, and pixelation. Customize colors and fonts to match your needs.",
  },
  {
    step: "03",
    icon: Share2,
    title: "Save & Share",
    description:
      "Your capture is automatically saved and copied to your clipboard. Paste it anywhere instantly. Access it again from your visual history.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-[var(--border)] bg-[var(--muted)] px-5 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            How It Works
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
            Three steps. Zero friction.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="relative flex flex-col items-start">
              <span className="mb-4 font-mono text-5xl font-black text-[var(--primary)]/15">
                {item.step}
              </span>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)]">
                <item.icon size={26} />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              <p className="leading-relaxed text-[var(--muted-foreground)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
