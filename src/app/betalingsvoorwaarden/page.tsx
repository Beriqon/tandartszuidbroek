import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  MailCheck,
  MessageCircleQuestion,
  QrCode,
  Send,
  ShieldCheck,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";

const PAYT_MONDZORG = "https://paytsoftware.nl/branches/mondzorg/";
const PAYT_PATIENT = "https://getit.paytsoftware.com/nl/voor-de-patient";

export const metadata: Metadata = {
  title: "Betalingsvoorwaarden",
  description: `Hoe u onze rekeningen ontvangt en betaalt via Payt bij ${siteConfig.name}.`,
  alternates: { canonical: "/betalingsvoorwaarden" },
};

const paytHighlights = [
  {
    icon: MailCheck,
    title: "Onze rekening voor u",
    text: "U ontvangt onze rekeningen digitaal via e-mail of per post, rechtstreeks vanuit onze eigen praktijk.",
  },
  {
    icon: LayoutDashboard,
    title: "Uw online omgeving",
    text: "Al uw rekeningen zijn eenvoudig terug te vinden in uw persoonlijke digitale omgeving — zonder apart account.",
  },
  {
    icon: QrCode,
    title: "Betaal met iDEAL",
    text: "U kunt uw rekening snel en eenvoudig voldoen via de iDEAL-betaalknop of QR-code op de nota.",
  },
  {
    icon: Send,
    title: "Van papier naar digitaal",
    text: "Hebben wij nog geen of een oud e-mailadres van u? Geef uw e-mailadres door bij de receptie.",
  },
  {
    icon: ShieldCheck,
    title: "Veilig digitaal",
    text: "Uw gegevens worden in een streng beveiligde omgeving verwerkt; Payt is o.a. NEN7510-gecertificeerd.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Vragen?",
    text: "Vragen over de rekening stelt u bij voorkeur via e-mail of uw online omgeving. Vragen over uw verzekering richt u rechtstreeks aan uw verzekeraar.",
  },
] as const;

function PaytMondzorgLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={PAYT_MONDZORG}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function BetalingsvoorwaardenPage() {
  return (
    <main className="flex flex-1 flex-col py-section">
      <div className="mx-auto w-full max-w-5xl px-gutter">
        <header className="border-b border-border pb-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Betalingsvoorwaarden
          </h1>
          <p className="mt-4 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            De rekening van {siteConfig.name} gaat via Payt
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <article className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-10">
            <p className="text-pretty text-sm leading-[1.7] text-foreground/90 sm:text-[0.9375rem] sm:leading-[1.75]">
              Wij begrijpen dat patiënten hun zorgverlener kiezen op basis van vertrouwen. Persoonlijk contact is
              hierin onmisbaar. Daarom versturen wij onze rekeningen voor behandelingen direct vanuit onze eigen
              praktijk. Hier gebruiken we de{" "}
              <PaytMondzorgLink className="font-medium text-primary underline-offset-4 hover:underline">
                software van Payt
              </PaytMondzorgLink>{" "}
              voor. De software maakt het voor u mogelijk om uw rekeningen terug te vinden in een persoonlijke
              online omgeving (hier heeft u geen account voor nodig), eenvoudig uw rekeningen met iDEAL te betalen
              en te communiceren met de praktijk wanneer u vragen heeft over uw rekening of een betalingsregeling
              wilt treffen.
            </p>

            <section className="mt-10 border-s-2 border-primary/25 ps-4 sm:ps-5">
              <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                Vergoeding van uw zorgverzekeraar
              </h2>
              <p className="mt-3 text-pretty text-sm leading-[1.7] text-foreground/90 sm:text-[0.9375rem] sm:leading-[1.75]">
                Op de rekening die u van ons ontvangt staat duidelijk aangegeven welk bedrag vergoed wordt door de
                zorgverzekeraar. Dit is afhankelijk van uw leeftijd, type behandeling en de voorwaarden van uw
                verzekeraar. Heeft u een vraag over de vergoeding van uw zorgverzekeraar? Neem dan direct contact op
                met uw eigen verzekeraar.
              </p>
            </section>

            <section className="mt-10 border-s-2 border-primary/25 ps-4 sm:ps-5">
              <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                De werkwijze van onze praktijk
              </h2>
              <p className="mt-3 text-pretty text-sm leading-[1.7] text-foreground/90 sm:text-[0.9375rem] sm:leading-[1.75]">
                De standaard werkwijze van onze praktijk is dat wij uw behandeling eerst indienen bij uw
                verzekeraar. Het deel dat niet door uw verzekeraar wordt vergoed brengen we vervolgens bij u in
                rekening. U heeft vervolgens 14 dagen om de rekening te voldoen. Dat kan u doen door gebruik te
                maken van de digitale betalingsmogelijkheden, zoals iDEAL. Hebben wij nog geen of een oud
                e-mailadres van u, geef uw e-mailadres dan z.s.m. aan ons door.
              </p>
            </section>

            <section className="mt-10 border-s-2 border-primary/25 ps-4 sm:ps-5">
              <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                Veilig digitaal
              </h2>
              <p className="mt-3 text-pretty text-sm leading-[1.7] text-foreground/90 sm:text-[0.9375rem] sm:leading-[1.75]">
                Al uw persoonlijke gegevens staan in een streng beveiligde omgeving. De software van Payt is
                gecertificeerd (NEN7510), waardoor u er op kunt vertrouwen dat Payt adequaat en veilig omgaat met
                uw gegevens.
              </p>
            </section>

            <p className="mt-10 text-pretty text-sm leading-[1.7] text-foreground/90 sm:text-[0.9375rem] sm:leading-[1.75]">
              Meer informatie over uw rekening, uw online omgeving of over{" "}
              <PaytMondzorgLink className="font-medium text-primary underline-offset-4 hover:underline">Payt</PaytMondzorgLink>
              ? Bekijk dan de{" "}
              <a
                href={PAYT_PATIENT}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                pagina speciaal voor patiënten
              </a>{" "}
              of neem rechtstreeks{" "}
              <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
                contact met ons op
              </Link>
              .
            </p>
          </article>

          <section aria-labelledby="payt-info-heading">
            <h2
              id="payt-info-heading"
              className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl"
            >
              Kort over uw rekening en Payt
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              Onderstaande punten vullen de uitleg hierboven aan; voor uitgebreide informatie verwijzen wij naar{" "}
              <PaytMondzorgLink className="text-primary underline-offset-4 hover:underline">Payt voor de mondzorg</PaytMondzorgLink>{" "}
              en de{" "}
              <a
                href={PAYT_PATIENT}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                pagina voor patiënten
              </a>
              .
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {paytHighlights.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="font-heading text-sm font-semibold text-foreground">{title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline-offset-4 hover:underline">
            ← Terug naar home
          </Link>
        </p>
      </div>
    </main>
  );
}
