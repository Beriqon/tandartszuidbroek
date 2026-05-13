import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Privacy en gegevensverwerking bij ${siteConfig.name}. Placeholder — definitieve tekst volgt vanuit de praktijk of jurist.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-1 flex-col py-section">
      <div className="mx-auto w-full max-w-3xl px-gutter">
        <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Privacyverklaring
        </h1>
        <p className="mt-4 text-muted-foreground">
          Deze pagina is een <strong>placeholder</strong>. Vervang de inhoud door een volledige
          privacyverklaring die past bij uw verwerkingen (AVG), hosting en eventuele
          afspraaksystemen.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-foreground/85">
          <li>Welke persoonsgegevens u verzamelt (o.a. via dit formulier en de praktijk).</li>
          <li>Grondslag en bewaartermijnen.</li>
          <li>Rechten van patiënten (inzage, verwijdering, bezwaar).</li>
          <li>Contact voor privacyvragen:{" "}
            <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </li>
        </ul>
        <p className="mt-8 text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline-offset-4 hover:underline">
            ← Terug naar home
          </Link>
        </p>
      </div>
    </main>
  );
}
