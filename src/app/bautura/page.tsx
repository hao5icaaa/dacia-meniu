import MenuClient from "../components/MenuClient";
import { bauturiData } from "../../data/bauturi";

export const metadata = {
  title: "Carte de Băuturi — Dacia Romanian Dining",
  description:
    "Cocktailuri DACIA Botanice, Băuturi Interbelice, vinuri românești și internaționale, spirits de colecție. Dacia Romanian Dining.",
};

export default function BauturaPage() {
  return <MenuClient data={bauturiData} serverError={null} />;
}
