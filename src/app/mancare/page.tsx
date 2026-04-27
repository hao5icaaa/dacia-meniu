import MenuClient from "../components/MenuClient";
import { mancareData } from "../../data/mancare";

export const metadata = {
  title: "Meniu Mâncare — Dacia Romanian Dining",
  description:
    "Bistro Gourmet — preparate românești reinterpretate, inspirate din Geoparcul UNESCO Ținutul Buzăului. Babic de Buzău, cârnați de Pleșcoi, brânzeturi locale.",
};

export default function MancarePage() {
  return <MenuClient data={mancareData} serverError={null} />;
}
