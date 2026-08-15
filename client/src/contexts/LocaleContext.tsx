/* BLUEPRINT OBSIDIAN — Internacionalização PT/EN.
   Persiste a escolha em localStorage; detecta o idioma do navegador;
   expõe t() de lookup com fallback para "pt". */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionary } from "@/lib/i18n";

export type Locale = "pt" | "en";
const STORAGE_KEY = "locale";

type Dict = typeof dictionary.pt;

function deepMerge(
  active: Record<string, unknown>,
  fallback: Record<string, unknown>,
): Record<string, unknown> {
  const result: Record<string, unknown> = { ...active };
  for (const key of Object.keys(fallback)) {
    if (!(key in result)) {
      result[key] = fallback[key];
      continue;
    }
    const a = result[key];
    const b = fallback[key];
    if (a && b && typeof a === "object" && typeof b === "object" && !Array.isArray(a) && !Array.isArray(b)) {
      result[key] = deepMerge(a as Record<string, unknown>, b as Record<string, unknown>);
    }
  }
  return result;
}

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
} | null>(null);

function detectInitial(): Locale {
  if (typeof window === "undefined") return "pt";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "pt" || stored === "en") return stored;
  const nav = (navigator.language || "pt-BR").toLowerCase();
  return nav.startsWith("en") ? "en" : "pt";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectInitial);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    // SEO dinâmico: title, description e og:locale seguem o idioma ativo
    document.title =
      locale === "pt"
        ? "Anderson Santos | Desenvolvedor Android — Portfólio"
        : "Anderson Santos | Android Developer — Portfolio";
    document
      .querySelectorAll('meta[name="description"]')
      .forEach((m) =>
        m.setAttribute(
          "content",
          locale === "pt"
            ? "Portfólio de Anderson Santos — Desenvolvedor Android com apps publicados na Google Play (ScanGO, Task Engine, Parkly) e foco em Clean Architecture e Kotlin Multiplatform."
            : "Portfolio of Anderson Santos — Android Developer with apps published on Google Play (ScanGO, Task Engine, Parkly), focused on Clean Architecture and Kotlin Multiplatform.",
        ),
      );
    document
      .querySelectorAll('meta[property="og:locale"]')
      .forEach((m) => m.setAttribute("content", locale === "pt" ? "pt_BR" : "en_US"));
  }, [locale]);

  // t = dict ativo com fallback profundo no PT (mantém estrutura aninhada)
  const t = useMemo(() => {
    const merged = deepMerge(
      dictionary[locale] as unknown as Record<string, unknown>,
      dictionary.pt as unknown as Record<string, unknown>,
    );
    return merged as unknown as Dict;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return { locale: ctx.locale, setLocale: ctx.setLocale, t: ctx.t as unknown as Dict };
}
