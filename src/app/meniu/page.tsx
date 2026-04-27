import { redirect } from "next/navigation";

// Backward-compat: any QR code already printed pointing to /meniu lands on Mâncare.
export default function MeniuRedirect() {
  redirect("/mancare");
}
