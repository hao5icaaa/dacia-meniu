"use client";

import { useState, useMemo } from "react";

// ── Types (inline — small set) ──────────────────────────────────
interface MenuNutrition {
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

interface MenuItem {
  id: number;
  name: string;
  portion_grams: number | null;
  nutrition_label: string;
  nutrition: MenuNutrition;
  allergens: string[];
  nutrition_completeness: number;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface MenuResponse {
  restaurant: string;
  categories: MenuCategory[];
  allergen_legend: Record<string, string>;
  total_items: number;
  disclaimer: string;
}

// ── Allergen emoji map ──────────────────────────────────────────
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
  "Gluten",
  "Crustacee",
  "Ou\u0103",
  "Pe\u0219te",
  "Arahide",
  "Soia",
  "Lapte",
  "Fructe cu coaj\u0103",
  "\u021Aelin\u0103",
  "Mu\u0219tar",
  "Susan",
  "Sulfi\u021Bi",
  "Lupin",
  "Molu\u0219te",
];

// ── Helpers ─────────────────────────────────────────────────────
function n(val: number | undefined | null): string {
  return Number(val ?? 0).toFixed(1);
}

// ── Sub-components ──────────────────────────────────────────────

function MenuHeader() {
  return (
    <header className="flex flex-col items-center gap-2 py-6 px-4">
      <img src="/logo.svg" alt="Dacia Romanian Dining" className="h-14 w-14" />
      <h1 className="text-xl font-bold text-brand-gold text-center">
        Dacia Romanian Dining
      </h1>
      <p className="text-sm text-brand-text-secondary text-center">
        Valori Nutri&#539;ionale &middot; EU 1169/2011
      </p>
    </header>
  );
}

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="sticky top-0 z-10 bg-brand-black/95 backdrop-blur-sm px-4 py-3">
      <input
        type="text"
        placeholder="Caut&#259; preparat..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-brand-border bg-brand-dark px-4 py-3 text-sm text-brand-text-primary placeholder:text-brand-text-muted focus:border-brand-gold focus:outline-none"
      />
    </div>
  );
}

function AllergenFilterBar({
  excluded,
  onToggle,
  legend,
}: {
  excluded: Set<string>;
  onToggle: (a: string) => void;
  legend: Record<string, string>;
}) {
  return (
    <div className="px-4 pb-3">
      <p className="text-xs text-brand-text-muted mb-2">
        Filtreaz&#259; alergeni (apas&#259; pentru a exclude):
      </p>
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {ALL_ALLERGENS.map((a) => {
          const active = excluded.has(a);
          const emoji = legend[a] || ALLERGEN_EMOJI[a] || "";
          return (
            <button
              key={a}
              onClick={() => onToggle(a)}
              className={`flex-shrink-0 flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                active
                  ? "bg-red-900/60 text-red-300 border border-red-700"
                  : "bg-brand-panel border border-brand-border text-brand-text-secondary hover:bg-brand-dark"
              }`}
            >
              <span>{emoji}</span>
              <span>{a}</span>
              {active && <span className="ml-0.5">&#10005;</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function NutritionTable({ item }: { item: MenuItem }) {
  const nut = item.nutrition;
  const label =
    item.nutrition_label === "per_portie"
      ? `Per por\u021Bie${item.portion_grams ? ` (${item.portion_grams}g)` : ""}`
      : "Per 100g";

  return (
    <div className="mt-3">
      <p className="text-xs font-semibold text-brand-gold-dark mb-1.5">
        {label}
      </p>
      <table className="w-full text-xs">
        <tbody className="divide-y divide-brand-border/50">
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
            <td className="py-1 pl-4 text-brand-text-muted">
              din care saturate
            </td>
            <td className="py-1 text-right text-brand-text-muted">
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
            <td className="py-1 pl-4 text-brand-text-muted">
              din care zaharuri
            </td>
            <td className="py-1 text-right text-brand-text-muted">
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
      {item.allergens.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {item.allergens.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-0.5 rounded-full bg-brand-burgundy-muted px-2 py-0.5 text-[10px] font-medium text-brand-burgundy-light"
            >
              {ALLERGEN_EMOJI[a] || ""} {a}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function MenuItemCard({
  item,
  legend,
}: {
  item: MenuItem;
  legend: Record<string, string>;
}) {
  const [expanded, setExpanded] = useState(false);
  const kcal = Number(item.nutrition?.energy_kcal ?? 0);

  return (
    <div className="rounded-lg border border-brand-border bg-brand-panel/50 overflow-hidden transition-colors">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left min-h-[44px]"
      >
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-brand-text-primary truncate">
            {item.name}
          </p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-brand-gold font-medium">
              {kcal.toFixed(0)} kcal
            </span>
            {item.portion_grams && (
              <span className="text-xs text-brand-text-muted">
                {item.portion_grams}g
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          {item.allergens.slice(0, 4).map((a) => (
            <span key={a} className="text-sm" title={a}>
              {legend[a] || ALLERGEN_EMOJI[a] || ""}
            </span>
          ))}
          {item.allergens.length > 4 && (
            <span className="text-xs text-brand-text-muted">
              +{item.allergens.length - 4}
            </span>
          )}
          <svg
            className={`ml-1 h-4 w-4 text-brand-text-muted transition-transform ${
              expanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      {expanded && (
        <div className="px-4 pb-4 border-t border-brand-border/50">
          <NutritionTable item={item} />
        </div>
      )}
    </div>
  );
}

function CategorySection({
  category,
  legend,
}: {
  category: MenuCategory;
  legend: Record<string, string>;
}) {
  return (
    <section className="px-4 mb-6">
      <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 flex items-center gap-2">
        <span className="flex-1 h-px bg-brand-border" />
        <span>{category.name}</span>
        <span className="flex-1 h-px bg-brand-border" />
      </h2>
      <div className="space-y-2">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} legend={legend} />
        ))}
      </div>
    </section>
  );
}

function DisclaimerFooter({ text }: { text: string }) {
  return (
    <footer className="px-4 py-6 text-center border-t border-brand-border mt-4">
      <p className="text-[11px] text-brand-text-muted leading-relaxed mb-2">
        {text}
      </p>
      <p className="text-[10px] text-brand-text-muted">
        &copy; {new Date().getFullYear()} Dacia Romanian Dining
      </p>
    </footer>
  );
}

// ── Main Client Component ───────────────────────────────────────

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

  const toggleAllergen = (a: string) => {
    setExcludedAllergens((prev) => {
      const next = new Set(prev);
      if (next.has(a)) next.delete(a);
      else next.add(a);
      return next;
    });
  };

  const filteredCategories = useMemo(() => {
    if (!data) return [];
    const q = search.toLowerCase().trim();

    return data.categories
      .map((cat) => {
        let items = cat.items;

        if (q) {
          items = items.filter((it) => it.name.toLowerCase().includes(q));
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

  const legend = data?.allergen_legend || ALLERGEN_EMOJI;

  return (
    <div className="min-h-screen bg-brand-black max-w-lg mx-auto">
      <MenuHeader />

      <SearchBar value={search} onChange={setSearch} />

      <AllergenFilterBar
        excluded={excludedAllergens}
        onToggle={toggleAllergen}
        legend={legend}
      />

      {serverError && (
        <div className="px-4 py-8 text-center">
          <p className="text-sm text-red-400 mb-3">
            Nu am putut &icirc;nc&#259;rca meniul.
          </p>
          <p className="text-xs text-brand-text-muted">{serverError}</p>
        </div>
      )}

      {!serverError && filteredCategories.length === 0 && (
        <div className="px-4 py-8 text-center">
          <p className="text-sm text-brand-text-muted">
            {search || excludedAllergens.size > 0
              ? "Niciun preparat g\u0103sit cu filtrele selectate."
              : "Meniul nu con\u021Bine preparate."}
          </p>
        </div>
      )}

      {!serverError &&
        filteredCategories.map((cat) => (
          <CategorySection key={cat.name} category={cat} legend={legend} />
        ))}

      {data && <DisclaimerFooter text={data.disclaimer} />}
    </div>
  );
}
