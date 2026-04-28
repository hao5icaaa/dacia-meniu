// i18n types + locale config

export type Locale = "ro" | "en" | "es" | "ru" | "ar" | "it" | "fr";

export const LOCALES: Locale[] = ["ro", "en", "es", "ru", "ar", "it", "fr"];

export const LOCALE_LABELS: Record<Locale, { native: string; flag: string }> = {
  ro: { native: "Română", flag: "🇷🇴" },
  en: { native: "English", flag: "🇬🇧" },
  es: { native: "Español", flag: "🇪🇸" },
  ru: { native: "Русский", flag: "🇷🇺" },
  ar: { native: "العربية", flag: "🇸🇦" },
  it: { native: "Italiano", flag: "🇮🇹" },
  fr: { native: "Français", flag: "🇫🇷" },
};

export const RTL_LOCALES: Set<Locale> = new Set(["ar"]);

export const DEFAULT_LOCALE: Locale = "ro";

export function isLocale(s: string | null | undefined): s is Locale {
  return !!s && (LOCALES as string[]).includes(s);
}
