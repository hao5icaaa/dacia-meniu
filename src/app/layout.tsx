import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meniu Digital — Dacia Romanian Dining",
  description:
    "Meniu digital cu valori nutriționale și informații despre alergeni conform EU 1169/2011. Dacia Romanian Dining — Brașov.",
  openGraph: {
    title: "Meniu Digital — Dacia Romanian Dining",
    description:
      "Descoperă meniul restaurantului Dacia Romanian Dining din Brașov. Valori nutriționale complete și informații despre alergeni.",
    type: "website",
    locale: "ro_RO",
    siteName: "Dacia Romanian Dining",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#103D6F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
