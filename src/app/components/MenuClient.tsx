"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";

// ── Types ──────────────────────────────────────────────────────
export interface MenuNutrition {
  energy_kj: number;
  energy_kcal: number;
  fat_g: number;
  saturated_fat_g: number;
  carbohydrate_g: number;
  sugars_g: number;
  protein_g: number;
  salt_g: number;
  fiber_g: number;
}

export interface MenuItem {
  name: string;
  house_creation: boolean;
  price: number | null;
  portion: string | null;
  description: string;
  ingredients: string;
  nutrition: MenuNutrition | null;
  allergens: string[];
  nutrition_label: string;
  nutrition_completeness: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle: string | null;
  items: MenuItem[];
}

export interface ToppingItem {
  name: string;
  portion: string;
  price: number;
}

export interface MenuResponse {
  restaurant: string;
  categories: MenuCategory[];
  toppings: Record<string, ToppingItem[]>;
  allergen_legend: Record<string, string>;
  total_items: number;
  disclaimer: string;
  footer_note: string;
}

// ── Allergen emoji map ─────────────────────────────────────────
const ALLERGEN_EMOJI: Record<string, string> = {
  Gluten: "\u{1F33E}",
  Crustacee: "\u{1F990}",
  "Ou\u0103": "\u{1F95A}",
  "Pe\u0219te": "\u{1F41F}",
  Arahide: "\u{1F95C}",
  Soia: "\u{1F331}",
  Lapte: "\u{1F95B}",
  "Fructe cu coaj\u0103": "\u{1F330}",
  "\u021Aelin\u0103": "\u{1F96C}",
  "Mu\u0219tar": "\u26AB",
  Susan: "\u26AB",
  "Sulfi\u021Bi": "\u{1F377}",
  Lupin: "\u{1F33B}",
  "Molu\u0219te": "\u{1F419}",
};

const ALL_ALLERGENS = [
  "Gluten", "Crustacee", "Ou\u0103", "Pe\u0219te", "Arahide",
  "Soia", "Lapte", "Fructe cu coaj\u0103", "\u021Aelin\u0103",
  "Mu\u0219tar", "Susan", "Sulfi\u021Bi", "Lupin", "Molu\u0219te",
];

// Topping category mapping to menu category IDs
const TOPPING_MAP: Record<string, string> = {
  salate: "salate",
  pizza: "pizza",
};

// ── Helpers ────────────────────────────────────────────────────
function n(val: number | undefined | null): string {
  return Number(val ?? 0).toFixed(1);
}

function formatPrice(price: number | null): string {
  if (price === null) return "";
  return `${price} lei`;
}

// ── Sub-components ─────────────────────────────────────────────

function MenuHeader() {
  return (
    <header className="flex flex-col items-center gap-1 pt-8 pb-4 px-4">
      <img src="/logo.svg" alt="Dacia Romanian Dining" className="h-16 w-16 mb-2" />
      <h1
        className="text-2xl font-bold text-brand-gold text-center"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Dacia Romanian Dining
      </h1>
      <p
        className="text-sm text-brand-text-muted text-center italic"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Gourmet experience &amp; Life Style
      </p>
      <div className="w-16 h-px bg-brand-gold/40 mt-3" />
    </header>
  );
}

function CategoryNav({
  categories,
  activeId,
  onSelect,
}: {
  categories: { id: string; name: string }[];
  activeId: string | null;
  onSelect: (id: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!activeId || !scrollRef.current) return;
    const btn = scrollRef.current.querySelector(`[data-cat="${activeId}"]`);
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeId]);

  return (
    <div className="sticky top-0 z-20 bg-brand-black/95 backdrop-blur-sm border-b border-brand-border/50">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide px-4 py-2 gap-1"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            data-cat={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
              activeId === cat.id
                ? "bg-brand-gold/20 text-brand-gold border border-brand-gold/40"
                : "text-brand-text-muted hover:text-brand-text-secondary border border-transparent"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function SearchAndFilter({
  search,
  onSearchChange,
  excluded,
  onToggleAllergen,
  showFilters,
  onToggleFilters,
}: {
  search: string;
  onSearchChange: (v: string) => void;
  excluded: Set<string>;
  onToggleAllergen: (a: string) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
}) {
  return (
    <div className="px-4 py-3">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Caut&#259; preparat..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-brand-border bg-brand-dark pl-9 pr-4 py-2.5 text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:border-brand-gold focus:outline-none"
          />
        </div>
        <button
          onClick={onToggleFilters}
          className={`flex-shrink-0 rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors ${
            excluded.size > 0
              ? "bg-red-900/30 border-red-700/50 text-red-300"
              : showFilters
              ? "bg-brand-dark border-brand-gold/40 text-brand-gold"
              : "bg-brand-dark border-brand-border text-brand-text-muted hover:text-brand-text-secondary"
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>
      {showFilters && (
        <div className="mt-3 expand-enter">
          <p className="text-xs text-brand-text-muted mb-2">
            Exclude alergeni (apas&#259; pentru a filtra):
          </p>
          <div className="flex flex-wrap gap-1.5">
            {ALL_ALLERGENS.map((a) => {
              const active = excluded.has(a);
              return (
                <button
                  key={a}
                  onClick={() => onToggleAllergen(a)}
                  className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors ${
                    active
                      ? "bg-red-900/50 text-red-300 border border-red-700/60"
                      : "bg-brand-panel border border-brand-border text-brand-text-secondary hover:bg-brand-dark"
                  }`}
                >
                  <span>{ALLERGEN_EMOJI[a] || ""}</span>
                  <span>{a}</span>
                  {active && <span className="ml-0.5 text-red-400">&times;</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function NutritionPanel({
  item,
}: {
  item: MenuItem;
}) {
  const nut = item.nutrition;

  if (!nut) {
    return (
      <p className="text-xs text-brand-text-dim italic mt-3">
        Valori nutri&#539;ionale indisponibile pentru acest preparat.
      </p>
    );
  }

  const labelText =
    item.nutrition_label === "per_portie" && item.portion
      ? `Per por\u021Bie (${item.portion})`
      : item.nutrition_label === "per_portie"
      ? "Per por\u021Bie"
      : "Per 100g";

  return (
    <div className="mt-3">
      <p className="text-xs font-semibold text-brand-gold-dark mb-1.5">
        Valori Nutri&#539;ionale &mdash; {labelText}
      </p>
      <table className="w-full text-xs">
        <tbody className="divide-y divide-brand-border/40">
          <tr>
            <td className="py-1 text-brand-text-secondary">Energie</td>
            <td className="py-1 text-right text-brand-text-primary font-medium">
              {n(nut.energy_kj)} kJ / {n(nut.energy_kcal)} kcal
            </td>
          </tr>
          <tr>
            <td className="py-1 text-brand-text-secondary">Gr&#259;simi</td>
            <td className="py-1 text-right text-brand-text-primary">
              {n(nut.fat_g)} g
            </td>
          </tr>
          <tr>
            <td className="py-1 pl-4 text-brand-text-dim text-[11px]">
              din care saturate
            </td>
            <td className="py-1 text-right text-brand-text-dim text-[11px]">
              {n(nut.saturated_fat_g)} g
            </td>
          </tr>
          <tr>
            <td className="py-1 text-brand-text-secondary">Glucide</td>
            <td className="py-1 text-right text-brand-text-primary">
              {n(nut.carbohydrate_g)} g
            </td>
          </tr>
          <tr>
            <td className="py-1 pl-4 text-brand-text-dim text-[11px]">
              din care zaharuri
            </td>
            <td className="py-1 text-right text-brand-text-dim text-[11px]">
              {n(nut.sugars_g)} g
            </td>
          </tr>
          <tr>
            <td className="py-1 text-brand-text-secondary">Proteine</td>
            <td className="py-1 text-right text-brand-text-primary">
              {n(nut.protein_g)} g
            </td>
          </tr>
          <tr>
            <td className="py-1 text-brand-text-secondary">Sare</td>
            <td className="py-1 text-right text-brand-text-primary">
              {n(nut.salt_g)} g
            </td>
          </tr>
          <tr>
            <td className="py-1 text-brand-text-secondary">Fibre</td>
            <td className="py-1 text-right text-brand-text-primary">
              {n(nut.fiber_g)} g
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function AllergenBadges({
  allergens,
  compact = false,
}: {
  allergens: string[];
  compact?: boolean;
}) {
  if (allergens.length === 0) return null;

  if (compact) {
    return (
      <div className="flex items-center gap-0.5">
        {allergens.slice(0, 4).map((a) => (
          <span key={a} className="text-sm" title={a}>
            {ALLERGEN_EMOJI[a] || ""}
          </span>
        ))}
        {allergens.length > 4 && (
          <span className="text-[10px] text-brand-text-muted ml-0.5">
            +{allergens.length - 4}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="mt-2">
      <p className="text-[10px] text-brand-text-dim mb-1 uppercase tracking-wider">
        Alergeni
      </p>
      <div className="flex flex-wrap gap-1">
        {allergens.map((a) => (
          <span
            key={a}
            className="inline-flex items-center gap-0.5 rounded-full bg-brand-burgundy-muted px-2 py-0.5 text-[10px] font-medium text-brand-burgundy-light"
          >
            {ALLERGEN_EMOJI[a] || ""} {a}
          </span>
        ))}
      </div>
    </div>
  );
}

function MenuItemCard({ item }: { item: MenuItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-brand-border/30 last:border-b-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start justify-between gap-3 px-0 py-3 text-left"
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5">
            {item.house_creation && (
              <span className="text-brand-star text-sm flex-shrink-0">&#9733;</span>
            )}
            <p className="text-sm font-medium text-brand-text-primary leading-snug">
              {item.name}
            </p>
          </div>
          {item.description && (
            <p className="text-xs text-brand-text-muted mt-0.5 leading-relaxed line-clamp-2">
              {item.description}
            </p>
          )}
          <div className="flex items-center gap-2 mt-1">
            <AllergenBadges allergens={item.allergens} compact />
          </div>
        </div>
        <div className="flex flex-col items-end flex-shrink-0 pt-0.5">
          {item.price !== null && (
            <span className="text-sm font-semibold text-brand-gold whitespace-nowrap">
              {formatPrice(item.price)}
            </span>
          )}
          {item.portion && (
            <span className="text-[11px] text-brand-text-dim mt-0.5">
              {item.portion}
            </span>
          )}
          <svg
            className={`mt-1 h-3.5 w-3.5 text-brand-text-dim transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {expanded && (
        <div className="pb-4 expand-enter">
          <div className="border-t border-brand-border/20 pt-3">
            {item.ingredients && (
              <div className="mb-2">
                <p className="text-[10px] text-brand-text-dim uppercase tracking-wider mb-0.5">
                  Ingrediente
                </p>
                <p className="text-xs text-brand-text-secondary leading-relaxed">
                  {item.ingredients}
                </p>
              </div>
            )}
            <NutritionPanel item={item} />
            <AllergenBadges allergens={item.allergens} />
          </div>
        </div>
      )}
    </div>
  );
}

function ToppingSection({
  title,
  items,
}: {
  title: string;
  items: ToppingItem[];
}) {
  return (
    <div className="mt-2 mb-4 px-4">
      <p className="text-[10px] uppercase tracking-widest text-brand-gold-dark mb-2 font-semibold">
        Topping {title}
      </p>
      <div className="space-y-1">
        {items.map((t) => (
          <div key={t.name} className="flex justify-between items-center py-1">
            <div className="flex items-center gap-2">
              <span className="text-xs text-brand-text-secondary">{t.name}</span>
              <span className="text-[11px] text-brand-text-dim">{t.portion}</span>
            </div>
            <span className="text-xs font-medium text-brand-gold">
              +{t.price} lei
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategorySection({
  category,
  toppings,
}: {
  category: MenuCategory;
  toppings?: ToppingItem[];
}) {
  return (
    <section id={`cat-${category.id}`} className="px-4 mb-2">
      <div className="flex items-center gap-3 mb-1 pt-6">
        <span className="flex-1 h-px bg-brand-gold/20" />
        <h2
          className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {category.name}
        </h2>
        <span className="flex-1 h-px bg-brand-gold/20" />
      </div>
      {category.subtitle && (
        <p
          className="text-xs text-brand-text-dim text-center italic mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {category.subtitle}
        </p>
      )}
      <div>
        {category.items.map((item, idx) => (
          <MenuItemCard key={`${category.id}-${idx}`} item={item} />
        ))}
      </div>
      {toppings && toppings.length > 0 && (
        <ToppingSection title={category.name.toLowerCase()} items={toppings} />
      )}
    </section>
  );
}

function DisclaimerFooter({
  disclaimer,
  footerNote,
}: {
  disclaimer: string;
  footerNote: string;
}) {
  return (
    <footer className="px-4 py-8 text-center border-t border-brand-border/30 mt-6">
      {footerNote && (
        <p
          className="text-xs text-brand-gold-dark italic mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {footerNote}
        </p>
      )}
      <p className="text-[10px] text-brand-text-dim leading-relaxed mb-3">
        &#9733; = Crea&#539;ia casei
      </p>
      <p className="text-[10px] text-brand-text-dim leading-relaxed mb-3">
        {disclaimer}
      </p>
      <div className="w-12 h-px bg-brand-gold/20 mx-auto mb-3" />
      <p className="text-[10px] text-brand-text-dim">
        &copy; {new Date().getFullYear()} Dacia Romanian Dining
      </p>
      <a
        href="https://daciadining.ro"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] text-brand-gold-dark hover:text-brand-gold transition-colors"
      >
        daciadining.ro
      </a>
    </footer>
  );
}

// ── Main Client Component ──────────────────────────────────────

export default function MenuClient({
  data,
  serverError,
}: {
  data: MenuResponse | null;
  serverError: string | null;
}) {
  const [search, setSearch] = useState("");
  const [excludedAllergens, setExcludedAllergens] = useState<Set<string>>(
    new Set()
  );
  const [showFilters, setShowFilters] = useState(false);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleAllergen = useCallback((a: string) => {
    setExcludedAllergens((prev) => {
      const next = new Set(prev);
      if (next.has(a)) next.delete(a);
      else next.add(a);
      return next;
    });
  }, []);

  const filteredCategories = useMemo(() => {
    if (!data) return [];
    const q = search.toLowerCase().trim();

    return data.categories
      .map((cat) => {
        let items = cat.items;

        if (q) {
          items = items.filter(
            (it) =>
              it.name.toLowerCase().includes(q) ||
              it.description.toLowerCase().includes(q) ||
              it.ingredients.toLowerCase().includes(q)
          );
        }

        if (excludedAllergens.size > 0) {
          items = items.filter(
            (it) => !it.allergens.some((a) => excludedAllergens.has(a))
          );
        }

        return { ...cat, items };
      })
      .filter((cat) => cat.items.length > 0);
  }, [data, search, excludedAllergens]);

  // Intersection observer for category nav highlighting
  useEffect(() => {
    if (!data || filteredCategories.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("cat-", "");
            setActiveCat(id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    const sections = document.querySelectorAll("[id^='cat-']");
    sections.forEach((s) => observerRef.current?.observe(s));

    return () => observerRef.current?.disconnect();
  }, [data, filteredCategories]);

  const scrollToCategory = useCallback((id: string) => {
    const el = document.getElementById(`cat-${id}`);
    if (el) {
      const offset = 56; // sticky nav height
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveCat(id);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black max-w-lg mx-auto">
      <MenuHeader />

      {data && filteredCategories.length > 0 && (
        <CategoryNav
          categories={filteredCategories.map((c) => ({ id: c.id, name: c.name }))}
          activeId={activeCat}
          onSelect={scrollToCategory}
        />
      )}

      <SearchAndFilter
        search={search}
        onSearchChange={setSearch}
        excluded={excludedAllergens}
        onToggleAllergen={toggleAllergen}
        showFilters={showFilters}
        onToggleFilters={() => setShowFilters(!showFilters)}
      />

      {serverError && (
        <div className="px-4 py-12 text-center">
          <p className="text-sm text-red-400 mb-3">
            Nu am putut &icirc;nc&#259;rca meniul.
          </p>
          <p className="text-xs text-brand-text-muted">{serverError}</p>
        </div>
      )}

      {!serverError && filteredCategories.length === 0 && (
        <div className="px-4 py-12 text-center">
          <p className="text-sm text-brand-text-muted">
            {search || excludedAllergens.size > 0
              ? "Niciun preparat g\u0103sit cu filtrele selectate."
              : "Meniul nu con\u021Bine preparate."}
          </p>
        </div>
      )}

      {!serverError &&
        filteredCategories.map((cat) => {
          // Check if this category has matching toppings
          const toppingKey = Object.keys(TOPPING_MAP).find(
            (k) => TOPPING_MAP[k] === cat.id
          );
          const toppings = toppingKey && data?.toppings?.[toppingKey]
            ? data.toppings[toppingKey]
            : undefined;

          return (
            <CategorySection
              key={cat.id}
              category={cat}
              toppings={toppings}
            />
          );
        })}

      {data && (
        <DisclaimerFooter
          disclaimer={data.disclaimer}
          footerNote={data.footer_note}
        />
      )}
    </div>
  );
}
