import { useEffect, useRef, useState } from "react";
import { useLang } from "../lib/i18n";
import type { Lang } from "../lib/i18n";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "ru", label: "RU" },
  { value: "kz", label: "KZ" },
];

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = OPTIONS.find((o) => o.value === lang) ?? OPTIONS[0];

  return (
    <>
      {/* Desktop: full segmented control — room for all languages side by side */}
      <div
        className={`hidden items-center rounded-full border border-line bg-white/70 p-0.5 md:inline-flex ${className}`}
        role="group"
        aria-label={t.langToggle.aria}
      >
        {OPTIONS.map(({ value, label }) => {
          const active = lang === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setLang(value)}
              aria-pressed={active}
              className={`rounded-full px-2.5 py-1 font-mono text-[12px] font-semibold tracking-[0.04em] transition ${
                active ? "bg-ink text-white shadow-card" : "text-muted hover:text-ink"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Mobile: compact dropdown — one pill instead of three, so the CTA still fits */}
      <div ref={ref} className="relative md:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={t.langToggle.aria}
          className="inline-flex items-center gap-1 rounded-full border border-line bg-white/70 py-1 pr-1.5 pl-2.5 font-mono text-[12px] font-semibold tracking-[0.04em] text-ink"
        >
          {current.label}
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden="true"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {open && (
          <ul
            role="listbox"
            aria-label={t.langToggle.aria}
            className="absolute top-full right-0 z-50 mt-1.5 min-w-[70px] overflow-hidden rounded-xl border border-line bg-white p-1 shadow-lift"
          >
            {OPTIONS.map(({ value, label }) => {
              const active = lang === value;
              return (
                <li key={value} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => {
                      setLang(value);
                      setOpen(false);
                    }}
                    className={`w-full rounded-lg px-2.5 py-1.5 text-left font-mono text-[12px] font-semibold tracking-[0.04em] transition ${
                      active ? "bg-ink text-white" : "text-muted hover:bg-base2 hover:text-ink"
                    }`}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
