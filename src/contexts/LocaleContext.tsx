"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, isLocale, RTL_LOCALES, type Locale } from "../lib/i18n";

interface Ctx {
  locale: Locale;
  setLocale: (l: Locale) => void;
}

const LocaleCtx = createContext<Ctx>({ locale: DEFAULT_LOCALE, setLocale: () => {} });

const COOKIE_NAME = "dacia_locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function readCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]+)`));
  if (m && isLocale(m[1])) return m[1];
  return null;
}

function writeCookie(l: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=${l}; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = readCookie();
    if (stored) {
      setLocaleState(stored);
      return;
    }
    // First visit: try browser language
    const nav = navigator.language?.slice(0, 2).toLowerCase();
    if (isLocale(nav)) setLocaleState(nav);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    writeCookie(l);
  }, []);

  return <LocaleCtx.Provider value={{ locale, setLocale }}>{children}</LocaleCtx.Provider>;
}

export function useLocale() {
  return useContext(LocaleCtx);
}
