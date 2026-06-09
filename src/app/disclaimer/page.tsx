import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer en aansprakelijkheidsuitsluiting voor de website van ${siteConfig.name}.`,
  alternates: { canonical: "/disclaimer" },
};

const practiceName = siteConfig.name;

const sections = [
  {
    title: "Informatie",
    paragraphs: [
      `${practiceName} besteedt de uiterste zorg aan de betrouwbaarheid en actualiteit van de gegevens op haar website. Onjuistheden en onvolledigheden kunnen echter voorkomen. De gebruiker draagt zelf verantwoording voor het controleren van de juistheid, volledigheid of bruikbaarheid van de informatie of voor overige inhoud die op deze site beschikbaar is.`,
    ],
  },
  {
    title: "Aansprakelijkheid",
    paragraphs: [
      `Hoewel ${practiceName} zich inspant om nauwkeurige en actuele informatie in deze website op te nemen, kunnen fouten of omissies zich voordoen. ${practiceName} wijst uitdrukkelijk iedere aansprakelijkheid uit hoofde van niet-nakoming van een overeenkomst, onrechtmatige daad, risicoaansprakelijkheid of enige andere rechtsgrond af, voor alle directe, indirecte, incidentele, gevolg-, aanvullende en bijzondere schade, alsmede voor schade waaronder bedrijfs- en gevolgschade, die op enigerlei wijze voortvloeit uit of samenhangt met de toegang tot en het gebruik van deze, ongeacht of ${practiceName} zich bewust was van de mogelijkheid (tot het zich voordoen) van dergelijke schade.`,
      `Zo aanvaardt ${practiceName} derhalve onder andere geen aansprakelijkheid voor: het ononderbroken functioneren van deze website; sites die niet door ${practiceName} worden onderhouden, ook al wordt daar door ${practiceName} naar verwezen; (rechts)handelingen verricht louter op basis van informatie verstrekt op of via deze site; gevolgen van het niet of te laat ontvangen of verwerken naar ${practiceName} gestuurde e-mail of andere elektronische berichten; gevolgen van het niet of te laat ontvangen of verwerken van aan ${practiceName} gezonden e-mails.`,
    ],
  },
  {
    title: "Hyperlinks",
    paragraphs: [
      `Verwijzingen naar sites die niet door ${practiceName} worden onderhouden zijn louter ter informatie van de bezoeker opgenomen. Hoewel ${practiceName} uiterst selectief is ten aanzien van de sites waarnaar verwezen wordt, kan zij niet instaan voor de inhoud en het functioneren daarvan, noch voor de kwaliteit van eventuele producten en/of diensten die daarop worden aangeboden. Sites van derden die links bevatten naar onze website(s) worden en kunnen niet door ons worden gecontroleerd.`,
    ],
  },
  {
    title: "E-mail",
    paragraphs: [
      `${practiceName} garandeert niet dat naar haar gestuurde e-mails of andere elektronische berichten (tijdig) worden ontvangen en verwerkt.`,
    ],
  },
  {
    title: "Intellectueel eigendom",
    paragraphs: [
      `De op deze website afgebeelde gegevens, waaronder begrepen afbeeldingen, knoppen, opmaak en teksten, grafisch materiaal, (handels)namen, logo's, waren- en dienstmerken, zijn eigendom van of in licentie bij ${practiceName} en worden beschermd door auteursrecht, merkenrecht en/of enig ander intellectueel eigendomsrecht. Deze kunnen uitsluitend gebruikt worden na voorafgaande toestemming door ${practiceName}. De hiervoor genoemde rechten gaan op geen enkele wijze over op (rechts)personen die toegang krijgen tot deze site.`,
    ],
  },
  {
    title: "Softwarekwaliteit",
    paragraphs: [
      `${practiceName} garandeert niet dat de informatie, software of ander materiaal dat via haar webpagina's toegankelijk is, vrij zal zijn van virussen, wormen, paarden van Troje of andere schadelijke componenten.`,
    ],
  },
] as const;

export default function DisclaimerPage() {
  return (
    <main className="flex flex-1 flex-col py-section">
      <div className="mx-auto w-full max-w-5xl px-gutter">
        <header className="border-b border-border pb-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Disclaimer
          </h1>
        </header>

        <article className="mt-10 rounded-2xl border border-border bg-card/40 p-6 shadow-sm backdrop-blur-sm sm:p-8 md:p-10">
          <div className="space-y-10 sm:space-y-12">
            {sections.map((section) => (
              <section key={section.title} className="scroll-mt-24">
                <h2 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-4 border-s-2 border-primary/25 ps-4 sm:ps-5">
                  {section.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-pretty text-sm leading-[1.7] text-foreground/90 sm:text-[0.9375rem] sm:leading-[1.75]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <p className="mt-10 text-sm text-muted-foreground">
          <Link href="/" className="text-primary underline-offset-4 hover:underline">
            ← Terug naar home
          </Link>
        </p>
      </div>
    </main>
  );
}
