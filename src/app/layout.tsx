import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LocaleProvider } from "../contexts/LocaleContext";

export const metadata: Metadata = {
  title: "Meniu — Dacia Romanian Dining",
  description:
    "Meniu digital complet cu prețuri, descrieri și valori nutriționale conform EU 1169/2011. Dacia Romanian Dining — Brașov.",
  openGraph: {
    title: "Meniu — Dacia Romanian Dining",
    description:
      "Descoperă meniul restaurantului Dacia Romanian Dining din Brașov. Preparate gourmet cu ingrediente locale din Ținutul Buzăului.",
    type: "website",
    locale: "ro_RO",
    siteName: "Dacia Romanian Dining",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#132462",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&family=Noto+Sans+Arabic:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
