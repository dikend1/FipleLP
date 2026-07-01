import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { messages, type Messages } from "./translations";

export type Lang = "en" | "ru" | "kz";

const STORAGE_KEY = "fiple-lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "ru" || saved === "kz") return saved;
  const nav = navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("kk") || nav.startsWith("kz")) return "kz";
  if (nav.startsWith("ru")) return "ru";
  return "en";
}

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Messages;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang: (next) => {
        setLangState(next);
        try {
          window.localStorage.setItem(STORAGE_KEY, next);
        } catch {
          // ignore storage failures (private mode, etc.)
        }
      },
      t: messages[lang],
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}

/** Convenience hook for components that only need the translated strings. */
export function useT(): Messages {
  return useLang().t;
}
