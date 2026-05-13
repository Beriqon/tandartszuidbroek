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
 * Volgorde: tandartsen (met BIG), mondhygiënisten, overige rollen.
 */
export const homeTeamMembers = [
  {
    id: "george-haghpannah",
    name: "George Haghpannah",
    role: "Tandarts",
    bigNumber: "89915311402",
    imageSrc: "/team/georgehaghpannah.png",
  },
  {
    id: "carolina-ballarin-geertman",
    name: "Carolina Ballarin Geertman",
    role: "Tandarts",
    bigNumber: "29064903102",
    imageSrc: "/team/carolinageertman.png",
  },
  {
    id: "diba-murtaza",
    name: "Diba Murtaza",
    role: "Tandarts",
    bigNumber: "39926696202",
    imageSrc: "/team/dibamurtaza.png",
  },
  {
    id: "seron-wartanian",
    name: "Seron Wartanian",
    role: "Tandarts",
    bigNumber: "79917586202",
    imageSrc: "/team/seronwartanian.png",
  },
  {
    id: "melanie-de-haan",
    name: "Melanie de Haan",
    role: "Tandarts",
    bigNumber: "29931110902",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "nona-dasmah",
    name: "Nona Dasmah",
    role: "Tandarts",
    bigNumber: "49916408902",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "ilse-kruitbosch",
    name: "Ilse Kruitbosch",
    role: "Mondhygiëniste",
    imageSrc: "/team/ilsekruitbosch.png",
  },
  {
    id: "rick-schaddelee",
    name: "Rick Schaddelee",
    role: "Mondhygiënist",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "samar",
    name: "Samar",
    role: "Tandarts-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "sylvana",
    name: "Sylvana",
    role: "Preventie-assistente",
    imageSrc: "/team/sylvana1.png",
  },
  {
    id: "michelle",
    name: "Michelle",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "martina",
    name: "Martina",
    role: "Preventie-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "esra",
    name: "Esra",
    role: "Tandarts-assistente i.o.",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "sahar",
    name: "Sahar",
    role: "Tandarts-assistente i.o.",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "claudia",
    name: "Claudia",
    role: "Tandarts-assistente",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
  {
    id: "julia",
    name: "Julia",
    role: "Tandarts-assistente i.o.",
    imageSrc: homeTeamPlaceholderImageSrc,
  },
] as const satisfies readonly HomeTeamMember[];
