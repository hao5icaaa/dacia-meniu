"use client";

import { useState } from "react";
import { useLocale } from "../contexts/LocaleContext";
import { LOCALES, LOCALE_LABELS, type Locale } from "../lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Language"
        className="flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-panel/40 px-3 py-1.5 text-xs font-medium text-brand-text-secondary hover:border-brand-gold/60 hover:text-brand-gold transition-colors"
      >
        <span className="text-base leading-none">{LOCALE_LABELS[locale].flag}</span>
        <span className="uppercase tracking-wider">{locale}</span>
        <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} aria-hidden="true" />
          <ul
            role="listbox"
            className="absolute right-0 top-full mt-1 z-40 min-w-[140px] rounded-lg border border-brand-border bg-brand-dark shadow-xl py-1 expand-enter"
            dir="ltr"
          >
            {LOCALES.map((l: Locale) => {
              const active = l === locale;
              return (
                <li key={l}>
                  <button
                    onClick={() => {
                      setLocale(l);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left transition-colors ${
                      active
                        ? "text-brand-gold bg-brand-gold/10"
                        : "text-brand-text-secondary hover:bg-brand-panel hover:text-brand-text-primary"
                    }`}
                  >
                    <span className="text-base leading-none">{LOCALE_LABELS[l].flag}</span>
                    <span className="flex-1">{LOCALE_LABELS[l].native}</span>
                    <span className="uppercase tracking-wider text-brand-text-dim">{l}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
