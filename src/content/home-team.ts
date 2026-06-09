export type HomeTeamMember = {
  id: string;
  name: string;
  role: string;
  /** Alleen bij tandartsen met BIG-registratie. */
  bigNumber?: string;
  /** Pad onder `public/`, bijv. `/team/voornaam.png`. */
  imageSrc?: string;
};

/** Standaardbeeld in `public/team/` voor teamleden zonder eigen portretbestand. */
export const homeTeamPlaceholderImageSrc = "/team/medewerkerfotokomt1.png";

/**
 * Team op de homepage (statisch tot CMS-team uitbreiding).
 * Volgorde sluit aan op sanadens.nl/wie-zijn-wij.
 */
export const homeTeamMembers = [
  {
    id: "ka-dijkman",
    name: "K.A. Dijkman",
    role: "Tandarts",
    bigNumber: "19049446202",
    imageSrc: "/team/k.a.dijkman.png",
  },
  {
    id: "mf-bonthond",
    name: "M.F. Bonthond",
    role: "Tandarts",
    bigNumber: "79048631402",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "sm-rademakers",
    name: "S.M. Rademakers",
    role: "Zelfstandig werkend tandarts",
    bigNumber: "19050541302",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "c-ruano-acevedo",
    name: "C. Ruano Acevedo",
    role: "Tandarts",
    bigNumber: "69921612202",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "r-van-der-linden",
    name: "R. van der Linden",
    role: "Zelfstandig werkend tandarts",
    bigNumber: "39933616602",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "ac-lendrum",
    name: "A.C. Lendrum",
    role: "Zelfstandig werkend tandarts",
    bigNumber: "09926487802",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "gw-janssen",
    name: "G.W. Janssen",
    role: "Zelfstandig werkend tandprotheticus",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "eva-lin-wolven",
    name: "Eva-Lin Wolven",
    role: "Praktijkmanager",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "marinka-heijnen",
    name: "Marinka Heijnen",
    role: "Zelfstandig werkend mondhygiënist",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "dorien-buijs",
    name: "Dorien Buijs",
    role: "Zelfstandig werkend mondhygiënist",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "mohammed-kasrioui",
    name: "Mohammed Kasrioui",
    role: "Zelfstandig werkend mondhygiënist",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "marjolijn",
    name: "Marjolijn",
    role: "Balie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "karin",
    name: "Karin",
    role: "Balie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "kim",
    name: "Kim",
    role: "Balie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "ilonka",
    name: "Ilonka",
    role: "Balie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "martine",
    name: "Martine",
    role: "Balie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "milouk",
    name: "Milouk",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "jacqueline",
    name: "Jacqueline",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "renata",
    name: "Renata",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "maaike",
    name: "Maaike",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "lotte",
    name: "Lotte",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "emma",
    name: "Emma",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "patricia",
    name: "Patricia",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "mariska",
    name: "Mariska",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "sharona",
    name: "Sharona",
    role: "Tandarts-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "marianne",
    name: "Marianne",
    role: "Tandarts-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "aylin",
    name: "Aylin",
    role: "Tandarts-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "allisha",
    name: "Allisha",
    role: "Tandarts-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "henriette",
    name: "Henriette",
    role: "Omloop-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "tamara",
    name: "Tamara",
    role: "Omloop-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
] as const satisfies readonly HomeTeamMember[];
