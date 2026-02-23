export function Shortcuts() {
  const shortcuts = [
    {
      keys: ["Alt", "S"],
      action: "Trigger new screen capture",
      scope: "Global",
    },
    {
      keys: ["Esc"],
      action: "Cancel snip or close editor",
      scope: "App",
    },
    {
      keys: ["Ctrl", "Z"],
      action: "Undo last action",
      scope: "Editor",
    },
    {
      keys: ["Delete"],
      action: "Remove selected object",
      scope: "Editor",
    },
  ];

  return (
    <section id="shortcuts" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Keyboard Shortcuts
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[var(--foreground)] md:text-4xl">
            Built for speed
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[var(--muted-foreground)]">
            Keep your hands on the keyboard. SuperSniperPlus is designed for
            power users who value efficiency.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          <div className="grid grid-cols-[1fr_auto] items-center border-b border-[var(--border)] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] md:grid-cols-[1fr_1fr_auto]">
            <span>Shortcut</span>
            <span className="hidden md:block">Scope</span>
            <span>Action</span>
          </div>
          {shortcuts.map((shortcut, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-[var(--border)] px-6 py-5 last:border-b-0 md:grid-cols-[1fr_1fr_auto]"
            >
              <div className="flex items-center gap-2">
                {shortcut.keys.map((key, j) => (
                  <span key={j}>
                    {j > 0 && (
                      <span className="mx-1 text-[var(--muted-foreground)]">
                        +
                      </span>
                    )}
                    <kbd className="inline-flex min-w-[2.5rem] items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--secondary)] px-3 py-1.5 font-mono text-sm font-medium text-[var(--foreground)]">
                      {key}
                    </kbd>
                  </span>
                ))}
              </div>
              <span className="hidden text-sm text-[var(--muted-foreground)] md:block">
                {shortcut.scope}
              </span>
              <span className="text-right text-sm text-[var(--foreground)]">
                {shortcut.action}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
