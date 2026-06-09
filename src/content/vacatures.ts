import { praktijkNieuws } from "@/content/praktijk-nieuws";

export type VacatureListing = {
  id: string;
  title: string;
  description: string;
};

export type VacatureDutyGroup = {
  title?: string;
  intro?: string;
  items: readonly string[];
};

export type VacatureApplyContact = {
  name: string;
  role: string;
  email: string;
  note: string;
};

export type VacatureDetail = VacatureListing & {
  summary: string;
  duties?: readonly string[];
  requirements?: readonly string[];
  employmentType?: string;
  hours?: string;
  salary?: string;
  benefits?: readonly string[];
  /** Optionele kopregel boven de intro (actuele vacaturetekst). */
  tagline?: string;
  dutiesIntro?: string;
  dutyGroups?: readonly VacatureDutyGroup[];
  culture?: readonly string[];
  applyContact?: VacatureApplyContact;
  requirementsTitle?: string;
  benefitsTitle?: string;
  dutiesTitle?: string;
  profileTitle?: string;
  profile?: readonly string[];
};

/** Label op kaarten met een openstaande vacature. */
export const openVacatureBadgeLabel = "Actuele vacature";

/** Label op detailpagina’s zonder actuele vacature. */
export const openSollicitatieBadgeLabel = "Open sollicitatie welkom";

/** Gedeelde teksten voor functies zonder actuele vacature. */
export const openSollicitatieCulture: readonly string[] = [
  "Sanadens is een grote praktijk met een warme, persoonlijke sfeer. We werken professioneel en houden het menselijk — werkplezier en een goede balans tussen werk en privé staan bij ons voorop.",
  "Past deze functie bij u, ook al staat er op dit moment geen vacature open? Stuur gerust een open sollicitatie. We bewaren interessante profielen en nemen contact op zodra er ruimte ontstaat.",
] as const;

const openVacatureIdSet = new Set<string>(praktijkNieuws.openVacatureIds);

export function isVacatureOpen(id: string): boolean {
  return openVacatureIdSet.has(id);
}

export function vacatureDetailHref(id: string): string {
  return `/onze-praktijk/vacatures/${id}`;
}

export function getVacatureById(id: string): VacatureDetail | undefined {
  return vacatureDetails.find((v) => v.id === id);
}

export function getVacatureDetailIds(): string[] {
  return vacatureDetails.map((v) => v.id);
}

/** Vacatures die momenteel open staan (bron: `praktijk-nieuws.ts`). */
export function getOpenVacatures(): VacatureListing[] {
  return vacatureListings.filter((v) => openVacatureIdSet.has(v.id));
}

/** Alle profielen, met open vacatures eerst. */
export function getVacatureListingsSorted(): VacatureListing[] {
  return [...vacatureListings].sort((a, b) => {
    const aOpen = isVacatureOpen(a.id);
    const bOpen = isVacatureOpen(b.id);
    if (aOpen === bOpen) return 0;
    return aOpen ? -1 : 1;
  });
}

/** Waarden voor het formulier (`<select name="vacancy">`) en kaarten op de pagina. */
export const vacatureListings: readonly VacatureListing[] = [
  {
    id: "mondhygienist",
    title: "Mondhygiënist",
    description:
      "Verantwoordelijk voor gebitsreiniging, parodontale behandelingen en preventieve voorlichting. Werkt zelfstandig in de behandelkamer en stemt vervolgbehandeling en nazorg af met tandartsen.",
  },
  {
    id: "tandartsassistent",
    title: "Tandarts-assistent",
    description:
      "Aan de stoel én af en toe aan de balie: afwisseling, verantwoordelijkheid en werkplezier in één functie. Voor onze praktijk in Apeldoorn zoeken wij een tandartsassistent met affiniteit voor beide.",
  },
  {
    id: "balie-assistent",
    title: "Balie-assistent",
    description:
      "Allround balie-assistent met administratieve en financiële taken. Overzicht, scherpte en een warm welkom aan balie en telefoon — meerdere dagen per week.",
  },
  {
    id: "preventie-assistent",
    title: "Preventie-assistent",
    description:
      "Ondersteunt bij preventieve mondzorg, fluoridebehandelingen en voorlichting aan patiënten. Werkt samen met mondhygiënisten en tandartsen in de dagelijkse praktijkvoering.",
  },
  {
    id: "tandarts",
    title: "Tandarts",
    description:
      "Voert controles, restauratieve behandelingen en algemene mondzorg uit. Werkt in een team met toegang tot specialisaties zoals implantologie en endodontologie.",
  },
] as const;

export const vacatureDetails: readonly VacatureDetail[] = [
  {
    id: "mondhygienist",
    title: "Mondhygiënist",
    description:
      "Verantwoordelijk voor gebitsreiniging, parodontale behandelingen en preventieve voorlichting. Werkt zelfstandig in de behandelkamer en stemt vervolgbehandeling en nazorg af met tandartsen.",
    summary:
      "Mondhygiënisten in onze praktijk werken zelfstandig aan preventieve mondzorg en parodontale behandelingen, in nauw overleg met onze tandartsen. Op dit moment zoeken we niet specifiek voor deze functie — een open sollicitatie is wel van harte welkom.",
    duties: [
      "Preventieve mondzorg en professionele gebitsreiniging",
      "Parodontale behandelingen in de behandelkamer",
      "Voorlichting en nazorg in samenwerking met het team",
    ],
    dutiesTitle: "De functie in het kort",
    culture: [...openSollicitatieCulture],
  },
  {
    id: "tandartsassistent",
    title: "Tandarts-assistent",
    description:
      "Aan de stoel én af en toe aan de balie: afwisseling, verantwoordelijkheid en werkplezier in één functie. Voor onze praktijk in Apeldoorn zoeken wij een tandartsassistent met affiniteit voor beide.",
    tagline:
      "Tandartsassistent met affiniteit voor baliewerk, afwisseling, verantwoordelijkheid en werkplezier in één functie",
    summary:
      "Werk jij het liefst aan de stoel, maar vind je het ook leuk om het overzicht te pakken aan de balie? Dan zit je bij ons goed. Voor onze praktijk in Apeldoorn zoeken wij een tandartsassistent die houdt van afwisseling, verantwoordelijkheid en een fijne werksfeer.",
    duties: [],
    dutiesIntro:
      "Je zwaartepunt ligt aan de stoel, waar je onze behandelaars ondersteunt en zorgt dat alles rondom de behandeling soepel verloopt. Daarnaast spring je bij aan de balie, zodat je werk lekker afwisselend blijft.",
    dutyGroups: [
      {
        title: "Aan de stoel",
        items: [
          "Je bereidt de behandelkamer en materialen voor",
          "Je assisteert tijdens behandelingen en zorgt dat alles efficiënt en prettig verloopt",
          "Je begeleidt en stelt waar nodig patiënten gerust",
          "Je zorgt voor een schone en veilige werkomgeving volgens de geldende protocollen",
          "Je registreert patiënt- en behandelgegevens in het systeem (ervaring met Exquise Next Generation is een pré)",
        ],
      },
      {
        title: "Aan de balie (max. 1 dag of dagdeel per week)",
        items: [
          "Je ontvangt patiënten aan de balie en staat hen telefonisch te woord",
          "Je plant en beheert afspraken en houdt de agenda strak",
          "Je beoordeelt pijnklachten (ook telefonisch), schat de urgentie in en schakelt waar nodig met de behandelaar",
          "Je beantwoordt vragen en ondersteunt bij lichte administratieve taken",
        ],
      },
    ],
    requirements: [
      "MBO 4 werk- en denkniveau, bij voorkeur een diploma tandartsassistent",
      "Ervaring in een tandartspraktijk is fijn, maar ook zonder ervaring kijken we graag met je mee",
      "Kennis van protocollen, hygiënerichtlijnen en kwaliteitssystemen",
      "Je bent patiëntgericht, communicatief sterk en weet mensen op hun gemak te stellen",
      "Je schakelt makkelijk, blijft rustig onder druk en houdt overzicht",
    ],
    employmentType: "Vast dienstverband",
    hours:
      "Minimaal 24 tot 38 uur per week, waarvan in ieder geval op woensdag, donderdag en vrijdag",
    salary: "€2.600 tot €3.600 bruto per maand op basis van 38 uur",
    benefits: [
      "€15 bruto per maand voor sport of fiets",
      "Dagelijks vers fruit en 2 betaalde koffiepauzes",
      "Teamuitjes en een cadeaubon voor je verjaardag t.w.v. €50",
      "Volledige reiskostenvergoeding buiten Apeldoorn",
    ],
    culture: [
      "Wij zijn een grote praktijk met een warme, persoonlijke sfeer. Werkplezier staat bij ons voorop, net als een goede balans tussen werk en privé. We houden van humor op de werkvloer en zorgen ervoor dat je je snel thuis voelt.",
      "Je krijgt bij ons de ruimte om jezelf te ontwikkelen, mee te denken en door te groeien. Heb je ideeën of zie je verbeterkansen? Dan horen we dat graag. Jouw inbreng telt.",
    ],
    dutiesTitle: "Wat ga je doen?",
    requirementsTitle: "Wat neem jij mee?",
    benefitsTitle: "Wat bieden wij jou?",
    applyContact: {
      name: "Eva-Lin Wolven",
      role: "Praktijkmanager",
      email: "e.wolven@sanadens.nl",
      note: "Stuur je CV en motivatie. Sollicitaties zonder CV en motivatie nemen we niet in behandeling.",
    },
  },
  {
    id: "balie-assistent",
    title: "Balie-assistent",
    description:
      "Allround balie-assistent met administratieve en financiële taken. Overzicht, scherpte en een warm welkom aan balie en telefoon — meerdere dagen per week.",
    tagline:
      "Balie-assistent met (financiële) administratieve taken — overzicht, scherpte en een glimlach!",
    summary:
      "Ben jij degene die rust brengt in de drukte, snel schakelt en tegelijkertijd patiënten een warm welkom geeft? Voor onze praktijk zoeken wij een allround balie-assistent die meerdere dagen per week beschikbaar is en energie krijgt van afwisseling, verantwoordelijkheid en structuur.",
    duties: [],
    dutiesIntro:
      "Je bent het eerste aanspreekpunt van de praktijk, zowel aan de balie als telefonisch. Je zorgt dat alles op rolletjes loopt, van een strakke planning tot een kloppende administratie.",
    dutyGroups: [
      {
        items: [
          "Je ontvangt patiënten, staat hen te woord en beantwoordt vragen over behandelingen, pijnklachten en verzekeringen",
          "Je beheert de agenda, plant afspraken in en houdt overzicht, ook op drukke dagen",
          "Je verwerkt en controleert patiëntgegevens en zorgt dat alles actueel en correct in het systeem staat",
          "Je beoordeelt pijnklachten, ook telefonisch, bepaalt hoe urgent het is en schakelt waar nodig met de behandelaar",
          "Je verwerkt recepten, verwijsbrieven en correspondentie",
        ],
      },
      {
        intro: "Daarnaast pak je de financiële administratie op:",
        items: [
          "Je verwerkt betalingen en bewaakt openstaande posten via Payt",
          "Je verstuurt herinneringen en hebt contact met patiënten over facturen",
          "Je verzorgt declaraties richting zorgverzekeraars",
        ],
      },
    ],
    requirements: [
      "MBO 3/4 werk- en denkniveau, door opleiding of ervaring",
      "Ervaring met of affiniteit voor de tandheelkunde; een opleiding tot tandartsassistent is een pré",
      "Inzicht in administratieve en financiële processen",
    ],
    profileTitle: "Wie ben jij?",
    profile: [
      "Je houdt van overzicht en werkt nauwkeurig. Je ziet snel waar iets niet klopt en pakt dat op. Je schakelt makkelijk tussen verschillende taken en blijft rustig onder druk. Je bent servicegericht, communicatief sterk en weet hoe je met vertrouwelijke informatie omgaat.",
    ],
    employmentType: "Vast dienstverband",
    hours:
      "Minimaal 24 tot 38 uur per week, waarvan in ieder geval 1 avond (maandag of dinsdag)",
    salary: "€2.600 tot €3.600 bruto per maand op basis van 38 uur",
    benefits: [
      "€15 bruto per maand voor sport of fiets",
      "Dagelijks vers fruit en 2 betaalde koffiepauzes",
      "Leuke teamuitjes",
      "Volledige reiskostenvergoeding buiten Apeldoorn",
    ],
    culture: [
      "Wij zijn een grote praktijk met een warme, persoonlijke sfeer. We werken professioneel, maar houden het menselijk. Werkplezier staat bij ons voorop, net als een goede balans tussen werk en privé. Humor hoort er gewoon bij en we vinden het belangrijk dat je jezelf kunt zijn.",
      "Daarnaast krijg je bij ons de ruimte om je te ontwikkelen, mee te denken en echt invloed te hebben op hoe we werken. Zie je iets wat beter kan? Dan horen we dat graag. Er zijn volop mogelijkheden om door te groeien en stappen te maken binnen de praktijk.",
      "Samen zorgen we niet alleen voor goede zorg, maar ook voor een fijne werkplek waar je met plezier naartoe gaat.",
    ],
    dutiesTitle: "Wat ga je doen?",
    requirementsTitle: "Wat neem jij mee?",
    benefitsTitle: "Wat bieden wij jou?",
    applyContact: {
      name: "Eva-Lin Wolven",
      role: "Praktijkmanager",
      email: "e.wolven@sanadens.nl",
      note: "Stuur je CV en motivatie. Sollicitaties zonder CV en motivatie nemen we niet in behandeling.",
    },
  },
  {
    id: "preventie-assistent",
    title: "Preventie-assistent",
    description:
      "Ondersteunt bij preventieve mondzorg, fluoridebehandelingen en voorlichting aan patiënten. Werkt samen met mondhygiënisten en tandartsen in de dagelijkse praktijkvoering.",
    summary:
      "Preventie-assistenten ondersteunen bij preventieve mondzorg en voorlichting, samen met onze mondhygiënisten en tandartsen. Er staat op dit moment geen vacature open voor deze functie — een open sollicitatie nemen we graag in ontvangst.",
    duties: [
      "Ondersteuning bij preventieve zorg en fluoridebehandelingen",
      "Voorlichting aan patiënten over mondverzorging",
      "Samenwerking met mondhygiënisten en tandartsen in de praktijk",
    ],
    dutiesTitle: "De functie in het kort",
    culture: [...openSollicitatieCulture],
  },
  {
    id: "tandarts",
    title: "Tandarts",
    description:
      "Voert controles, restauratieve behandelingen en algemene mondzorg uit. Werkt in een team met toegang tot specialisaties zoals implantologie en endodontologie.",
    summary:
      "Onze tandartsen voeren algemene mondzorg en restauratieve behandelingen uit, in een team met toegang tot specialisaties zoals implantologie en endodontologie. We zoeken op dit moment niet actief voor deze functie, maar een open sollicitatie is welkom.",
    duties: [
      "Controles, diagnose en algemene mondzorg",
      "Restauratieve behandelingen in teamverband",
      "Samenwerking met mondhygiënisten, assistenten en specialisten",
    ],
    dutiesTitle: "De functie in het kort",
    culture: [...openSollicitatieCulture],
  },
] as const;

export const vacatureSelectOptions: readonly { value: string; label: string }[] = [
  ...getOpenVacatures().map((v) => ({ value: v.id, label: v.title })),
  { value: "open", label: "Open sollicitatie / andere functie" },
];
