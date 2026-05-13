export type VacatureListing = {
  id: string;
  title: string;
  description: string;
};

/** Waarden voor het formulier (`<select name="vacancy">`) en kaarten op de pagina. */
export const vacatureListings: readonly VacatureListing[] = [
  {
    id: "mondhygienist",
    title: "Mondhygiënist",
    description:
      "Wij zoeken een enthousiaste mondhygiënist die patiënten helpt bij preventie en gezond tandvlees. U werkt in een hecht team met moderne apparatuur en ruimte voor vakinhoudelijke groei.",
  },
  {
    id: "tandartsassistent",
    title: "Tandarts-assistent",
    description:
      "Ondersteun onze tandartsen en mondhygiënisten bij de dagelijkse praktijkvoering. Ervaring is mooi meegenomen; leergierigheid en een warme houding naar patiënten staan centraal.",
  },
  {
    id: "balie-assistent",
    title: "Balie-assistent",
    description:
      "U bent het eerste gezicht van de praktijk: patiënten verwelkomen, afspraken plannen, administratie op orde en vragen vriendelijk beantwoorden. Ervaring in de zorg is prettig; vooral servicegerichtheid en nauwkeurigheid tellen.",
  },
  {
    id: "preventie-assistent",
    title: "Preventie-assistent",
    description:
      "Ondersteun bij preventieve mondzorg en voorlichting, in nauwe samenwerking met mondhygiënisten en tandartsen. Geschikt voor iemand met interesse in gebitsverzorging en graag met patiënten werkt.",
  },
  {
    id: "tandarts",
    title: "Tandarts",
    description:
      "Voor uitbreiding van ons team zijn wij open voor een collega-tandarts die kwaliteit en rust in de behandelkamer belangrijk vindt. Neem gerust contact op voor een kennismaking.",
  },
] as const;

export const vacatureSelectOptions: readonly { value: string; label: string }[] = [
  ...vacatureListings.map((v) => ({ value: v.id, label: v.title })),
  { value: "open", label: "Open sollicitatie / andere functie" },
];
