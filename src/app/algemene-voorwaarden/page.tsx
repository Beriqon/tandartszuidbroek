import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: `Algemene voorwaarden van ${siteConfig.name} — behandelingsovereenkomst, betaling, klachten en aansprakelijkheid.`,
  alternates: { canonical: "/algemene-voorwaarden" },
};

const sections = [
  {
    title: "De overeenkomst",
    paragraphs: [
      `De algemene voorwaarden maken een onlosmakelijk onderdeel uit van de behandelingsovereenkomst(en) tussen de mondzorg verlenende zorgaanbieder  (hierna: de “zorgverlener”), daaronder begrepen diens werknemers, en de patiënt.  Zij worden voor of bij het sluiten van overeenkomst(en) aan de patiënt of zijn wettelijk vertegenwoordiger(s) beschikbaar gesteld, zijn aanwezig in de wachtkamer en worden op verzoek toegezonden.`,
    ],
  },
  {
    title: "Derden",
    paragraphs: [
      `De zorgverlener is bij de uitvoering van de overeenkomst gerechtigd derden in te schakelen. Hij zal bij de keuze van deze derden zorgvuldigheid betrachten en, indien dat redelijkerwijs mogelijk is, tevoren overleg met de patiënt plegen, zulks met uitzondering van waarnemers en tandtechnici. De zorgverlener is voor gedragingen van deze derden niet aansprakelijk. De artikelen 7:404, 7: 409 en 7: 422 lid 1 BW zijn niet van toepassing.`,
    ],
  },
  {
    title: "Kosten en betaling",
    paragraphs: [
      `De kosten van behandeling, inclusief de kosten van techniek en materialen, worden in rekening gebracht bij en zijn verschuldigd door de patiënt, ongeacht of deze de kosten geheel dan wel gedeeltelijk kan declareren bij, en aan de patiënt worden vergoed, door een zorgverzekeraar. De kosten van behandeling van minderjarigen worden in rekening gebracht bij en zijn verschuldigd door de wettelijk vertegenwoordiger(s).`,
      `De tandarts berekent, tenzij anders door hem aangegeven, de kosten van behandeling ingevolge de Tarievenlijst Tandheelkunde en Algemene Bepalingen zoals deze door de Nederlandse Zorgautoriteit (NZa) zijn goedgekeurd c.q. vastgesteld. Wijzigingen van de Tarievenlijst Tandheelkunde en Algemene Bepalingen worden voorbehouden.`,
      `Afspraken dienen uiterlijk 48 uur voor de behandeling te worden geannuleerd. Bij niet of niet tijdige annulering van de afspraak is de zorgverlener gerechtigd de gereserveerde tijd en/of de afgesproken behandeling in rekening te brengen wanneer er geen andere patiënten konden worden behandeld of andere gehonoreerde werkzaamheden konden worden verricht.`,
      `Betalingen dienen binnen 14 dagen na dagtekening van de declaratie door de patiënt te geschieden. De door de patiënt gedane betalingen strekken steeds eerst tot voldoening van verschuldigde rente, schade en kosten en vervolgens van opeisbare declaraties die het langst open staan, zelfs ingeval de patiënt vermeldt dat de voldoening betrekking heeft op een latere factuur. Indien sprake is van een voorschot wordt dit verrekend met de laatste declaratie uit hoofde van de overeenkomst. Niettegenstaande het voorgaande is de zorgverlener te allen tijde gerechtigd onmiddellijke en/of contante betaling te verlangen.`,
    ],
  },
  {
    title: "Behandeling en informatie",
    paragraphs: [
      `De zorgverlener informeert de patiënt over het behandelplan, eventuele risico’s en eventuele andere mogelijkheden van behandeling die in aanmerking kunnen komen, opdat de patiënt een weloverwogen keuze kan maken. De informatie wordt verschaft op een voor de patiënt geschikt niveau en de zorgverlener gaat na of patiënt de informatie heeft begrepen.`,
      `Voorafgaand aan iedere uitgebreide en/of ingrijpende tandheelkundige behandeling die een bedrag ter grootte van € 250,- (zegge: tweehonderdvijftig euro) of meer aan kosten met zich brengt, wordt de patiënt c.q. diens wettelijke vertegenwoordiger schriftelijk en/of digitaal een prijsopgave verstrekt. Deze prijsopgave geeft een overzicht van de door de zorgverlener voorgenomen prestaties, het per prestatie in rekening te brengen tarief, alsmede de materiaal- en techniekkosten.`,
      `Indien voorafgaande verstrekking van een schriftelijke prijsopgave redelijkerwijs niet mogelijk is dan is de zorgverlener hiertoe niet gehouden. De zorgverlener zal in dat geval de kosten van de behandeling voorafgaand aan de behandeling met de patiënt bespreken, tenzij ook dat redelijkerwijs niet mogelijk is.`,
      `De zorgverlener kan afwijken van het vooraf afgesproken behandelplan en de bovenbedoelde prijsopgave indien tijdens het onderzoek of de behandeling blijkt dat afwijking, bijvoorbeeld door onvoorzienbare complicaties, noodzakelijk is.  De zorgverlener zal de patiënt informeren over de afwijking en prijsoverschrijding, tenzij dit redelijkerwijs niet mogelijk is.`,
      `De patiënt is gehouden alle gegevens en bescheiden die de zorgverlener naar zijn oordeel nodig heeft voor het uitvoeren van de behandelingsovereenkomst, tijdig en in de gewenste vorm en op de gewenste wijze ter beschikking te stellen. Extra kosten die voortvloeien uit het niet, niet tijdig, niet behoorlijk, of onvolledig ter beschikking stellen van de verlangde gegevens, komen voor rekening van de patiënt.`,
      `De patiënt staat in voor de juistheid, volledigheid en betrouwbaarheid van de aan de zorgverlener ter beschikking gestelde gegevens en bescheiden.`,
      `De zorgverlener legt op verzoek van de patiënt schriftelijk vast voor welke ingrepen van al dan niet ingrijpende aard deze toestemming heeft gegeven.`,
    ],
  },
  {
    title: "Klachten",
    paragraphs: [
      `Klachten omtrent declaraties dienen binnen 8 dagen na declaratiedatum bij de zorgverlener schriftelijk te worden ingediend, bij gebreke waarvan de patiënt geacht wordt de factuur als juist te hebben geaccepteerd. Het indienen van een klacht omtrent een declaratie schort de betalingstermijn en -verplichting niet op. Hetzelfde geldt voor klachten ingediend bij de Klachtencommissie Tandheelkunde of enige andere instantie.`,
    ],
  },
  {
    title: "Overschrijding betalingstermijn",
    paragraphs: [
      `Indien de patiënt niet, niet tijdig, niet deugdelijk, of slechts gedeeltelijk aan zijn betalingsverplichtingen heeft voldaan, is de patiënt steeds onmiddellijk in verzuim, zonder dat daartoe enige nadere ingebrekestelling is vereist en zijn de verschuldigde bedragen terstond opeisbaar. In dat geval is de patiënt aan de zorgverlener de wettelijke rente verschuldigd over de periode van het verzuim, alsmede alle kosten die de zorgverlener moet maken om zijn vordering te incasseren, waarbij de buitengerechtelijke kosten worden vastgesteld op 15% van het verschuldigde bedrag, met een minimum van Euro 40 (zegge : 40 euro), onverminderd het recht van de zorgverlener om de volledige schade te vorderen.`,
      `Bij betalingsachterstand is de zorgverlener gerechtigd verdere behandeling op te schorten of de te verlangen behandeling slechts te verrichten tegen contante betaling.`,
    ],
  },
  {
    title: "Aansprakelijkheid",
    paragraphs: [
      `De aansprakelijkheid van de zorgverlener is beperkt tot het bedrag waarop de door de zorgverlener afgesloten beroepsaansprakelijkheidsverzekering in het voorkomend geval aanspraak geeft, vermeerderd met het bedrag van het eigen risico van de zorgverlener onder de verzekering. De patiënt kan deze polis desgewenst inzien op de praktijk van de zorgverlener.`,
    ],
  },
] as const;

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="flex flex-1 flex-col py-section">
      <div className="mx-auto w-full max-w-5xl px-gutter">
        <header className="border-b border-border pb-8">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Algemene voorwaarden
          </h1>
          <p className="mt-2 font-heading text-lg font-semibold text-foreground sm:text-xl">
            {siteConfig.name}
          </p>
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
