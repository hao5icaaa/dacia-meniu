import MenuClient from "./components/MenuClient";

const API_URL = "https://app.daciabot.com/api/public/menu";

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

export const revalidate = 3600; // ISR: revalidate every hour

export default async function Page() {
  let data: MenuResponse | null = null;
  let error: string | null = null;

  try {
    const res = await fetch(API_URL, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`API ${res.status}`);
    data = await res.json();
  } catch (e) {
    error = e instanceof Error ? e.message : "Eroare necunoscută";
  }

  return <MenuClient data={data} serverError={error} />;
}
