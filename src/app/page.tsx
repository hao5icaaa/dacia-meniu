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

interface MenuCategory {
  id: string;
  name: string;
  subtitle: string | null;
  items: MenuItem[];
}

interface ToppingItem {
  name: string;
  portion: string;
  price: number;
}

interface MenuResponse {
  restaurant: string;
  categories: MenuCategory[];
  toppings: Record<string, ToppingItem[]>;
  allergen_legend: Record<string, string>;
  total_items: number;
  disclaimer: string;
  footer_note: string;
}

export const revalidate = 3600;

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
