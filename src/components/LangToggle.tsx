import { useLang } from "../lib/i18n";
import type { Lang } from "../lib/i18n";

const OPTIONS: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "ru", label: "RU" },
];

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-line bg-white/70 p-0.5 ${className}`}
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
  );
}
