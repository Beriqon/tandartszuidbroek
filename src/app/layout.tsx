import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Playfair_Display, Source_Sans_3 } from "next/font/google";

import { LenisProvider } from "@/components/site/LenisProvider";
import { SiteFooter } from "@/components/site/SiteFooter";
import { AppHeader } from "@/components/site/AppHeader";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Tandartspraktijk in Apeldoorn-Zuidbroek: preventie, kindertandheelkunde en zorg op maat voor het hele gezin. Distelvlinderlaan 44.",
  metadataBase: new URL("https://tandartszuidbroek.nl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${sourceSans.variable} ${jetbrainsMono.variable} ${playfair.variable}`}
    >
      <body>
        <SiteJsonLd />
        <LenisProvider>
          {/*
            Flex op <body> kan in combinatie met Lenis / mobiele weergave de
            document-scrollhoogte verkeerd laten uitvallen. Alles in één kolom-wrapper.
          */}
          <div className="flex min-h-dvh flex-col max-lg:pb-[env(safe-area-inset-bottom,0px)]">
            <AppHeader />
            <div className="flex min-h-min grow flex-col lg:pt-[var(--site-header-desktop-stack)] [&:has(main[data-bleed-hero])]:lg:pt-0">
              {children}
            </div>
            <SiteFooter />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
