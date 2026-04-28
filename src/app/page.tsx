"use client";

import Link from "next/link";
import { useLocale } from "../contexts/LocaleContext";
import { tx } from "../lib/dictionary";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function LandingPage() {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between max-w-lg mx-auto px-6 py-10">
      <div className="w-full flex justify-end pt-2">
        <LanguageSwitcher />
      </div>

      <header className="flex flex-col items-center gap-2 pt-4">
        <img
          src="/logo.svg"
          alt="Dacia Romanian Dining"
          className="h-20 w-20 mb-3"
        />
        <h1
          className="text-3xl font-bold text-brand-gold text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Dacia Romanian Dining
        </h1>
        <p
          className="text-sm text-brand-text-muted text-center italic"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {tx("tagline", locale)}
        </p>
        <div className="w-16 h-px bg-brand-gold/40 mt-4" />
      </header>

      <section className="text-center max-w-md mt-10 mb-12">
        <p className="text-sm text-brand-text-secondary leading-relaxed mb-3">
          {tx("landing_hero", locale)}
        </p>
        <p
          className="text-xs text-brand-text-dim italic"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {tx("landing_subhero", locale)}
        </p>
      </section>

      <nav className="flex flex-col gap-4 w-full max-w-sm">
        <Link
          href="/mancare"
          className="group block rounded-xl border border-brand-gold/40 bg-brand-panel/40 hover:bg-brand-gold/10 hover:border-brand-gold transition-all px-8 py-7 text-center"
        >
          <p
            className="text-2xl font-bold text-brand-gold group-hover:text-brand-gold-light tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tx("landing_food", locale)}
          </p>
          <p className="text-[11px] text-brand-text-muted mt-1 uppercase tracking-[0.2em]">
            {tx("landing_food_subtitle", locale)}
          </p>
        </Link>

        <Link
          href="/bautura"
          className="group block rounded-xl border border-brand-gold/40 bg-brand-panel/40 hover:bg-brand-gold/10 hover:border-brand-gold transition-all px-8 py-7 text-center"
        >
          <p
            className="text-2xl font-bold text-brand-gold group-hover:text-brand-gold-light tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tx("landing_drinks", locale)}
          </p>
          <p className="text-[11px] text-brand-text-muted mt-1 uppercase tracking-[0.2em]">
            {tx("landing_drinks_subtitle", locale)}
          </p>
        </Link>
      </nav>

      <footer className="mt-auto pt-12 pb-2 text-center">
        <div className="w-12 h-px bg-brand-gold/20 mx-auto mb-3" />
        <a
          href="https://daciadining.ro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-brand-gold-dark hover:text-brand-gold transition-colors"
        >
          daciadining.ro
        </a>
        <p className="text-[10px] text-brand-text-dim mt-2">
          &copy; {new Date().getFullYear()} Dacia Romanian Dining
        </p>
      </footer>
    </div>
  );
}
