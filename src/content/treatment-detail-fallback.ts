import type { PortableTextBlock } from "@portabletext/types";

import { ptBlockquote, ptBulletList, ptH2, ptParagraphs } from "@/content/portable-text-helpers";

export type TreatmentFallback = {
  excerpt: string;
  body: PortableTextBlock[];
};

const periodiekeControle: TreatmentFallback = {
  excerpt:
    "Minimaal twee keer per jaar controleren we uw gebit en tandvlees, zodat we problemen vroeg kunnen signaleren — vaak eenvoudiger en comfortabeler dan wanneer klachten zich al hebben gemanifesteerd.",
  body: [
    ptH2("pc-h2-1", "Waarom periodiek controleren?"),
    ...ptParagraphs("pc-p1", [
      "Wij adviseren om minstens twee keer per jaar een afspraak te maken voor een tandartscontrole. Op die manier kunnen cariës, slijtage, afwijkingen aan het tandvlees en andere aandachtspunten in een vroeg stadium worden gesignaleerd.",
      "Het exacte interval stemmen we af op uw risico, uw wensen en de stand van uw gebit — sommige mensen profiteren van vaker contact, anderen van een rustiger schema.",
    ]),
    ptH2("pc-h2-2", "Wat gebeurt er tijdens de controle?"),
    ...ptBulletList("pc-bl", [
      "Beoordeling van tanden en kiezen, inclusief bestaande vullingen en andere restauraties",
      "Controle van het tandvlees en, waar nodig, metingen om ontsteking of pocketvorming te beoordelen",
      "Aanvullende diagnostiek (zoals röntgenfoto’s) alleen als daar een duidelijke indicatie voor is",
      "Voorlichting en advies: poetsen, interdentale reiniging, voeding en risico’s die voor u relevant zijn",
    ]),
    ...ptParagraphs("pc-p2", [
      "Tandsteen verwijderen en polijsten hoort bij een gezonde mond. Vaak gebeurt dat in het kader van de controle of tijdens een aparte afspraak voor mondhygiëne — afhankelijk van wat voor uw situatie het beste past.",
    ]),
    ptH2("pc-h2-3", "Wat kunt u zelf doen?"),
    ...ptParagraphs("pc-p3", [
      "Thuiszorg blijft de basis: consequent poetsen met fluoride tandpasta, reinigen tussen de tanden en beperken van suikerrijke momenten. Tijdens de controle krijgt u concrete tips die bij uw gebit passen.",
    ]),
  ],
};

const mondhygiene: TreatmentFallback = {
  excerpt:
    "Onze mondhygiënisten richten zich op het voorkomen van cariës en parodontale problemen, met professionele reiniging en duidelijke preventieve voorlichting.",
  body: [
    ptH2("mh-h2-1", "Preventie als fundament"),
    ...ptParagraphs("mh-p1", [
      "Mondhygiëne en preventie gaan over het behouden van een gezonde mond: minder ontsteking, minder cariës en een gebit dat voorspelbaar blijft.",
      "Onze mondhygiënisten zijn gericht op het voorkomen van cariës en geven daarom uitgebreide preventieve informatie — afgestemd op uw routines, uw risico’s en uw vragen.",
    ]),
    ptH2("mh-h2-2", "Wat valt er onder professionele mondhygiëne?"),
    ...ptBulletList("mh-bl", [
      "Verwijderen van tandsteen, plaque en aanslag op plaatsen die thuis lastig bereikbaar zijn",
      "Polijsten waar dat nodig is om oppervlakken glad te houden en belagenvorming te beperken",
      "Instructie over poetsen, flossen, ragers of andere hulpmiddelen",
      "Advies over voeding, rookgedrag en factoren die uw mondgezondheid beïnvloeden",
    ]),
    ...ptParagraphs("mh-p2", [
      "Hoe vaak u bij de mondhygiënist komt, hangt af van uw individuele situatie. Samen maken we een onderhoudsritme dat bij u past.",
    ]),
  ],
};

const restauratief: TreatmentFallback = {
  excerpt:
    "Herstel van beschadigde tanden en kiezen — van kleine vullingen tot het vervangen of vernieuwen van bestaande restauraties — met oog voor functie, comfort en esthetiek.",
  body: [
    ptH2("rt-h2-1", "Wat is restauratieve tandheelkunde?"),
    ...ptParagraphs("rt-p1", [
      "Restauratieve tandheelkunde omvat het herstellen van beschadigde tanden en kiezen. Dat kan onder meer het vullen van gaatjes (cariës) zijn, maar ook het herstellen of vervangen van bestaande vullingen die lossen, lekken of scheuren.",
      "Soms kiest men voor grotere restauraties, bijvoorbeeld wanneer er veel tandweefsel ontbreekt of wanneer kracht en steun belangrijk zijn.",
    ]),
    ptH2("rt-h2-2", "Esthetische elementen binnen restauratie"),
    ...ptParagraphs("rt-p2", [
      "Waar het kan, werken we tandkleurig zodat restauraties netjes aansluiten bij uw gebit. In overleg kunnen ook porseleinen of composiet facings onderdeel zijn van een breder plan — altijd met realistische verwachtingen over levensduur en onderhoud.",
    ]),
    ptH2("rt-h2-3", "Hoe verloopt het in grote lijnen?"),
    ...ptBulletList("rt-bl", [
      "Diagnose en uitleg: wat is er aan de hand en welke opties zijn er?",
      "Voorbereiding en uitvoering van de restauratie met aandacht voor anesthesie en comfort",
      "Nazorg: wat mag u eten, wanneer belt u bij klachten, en hoe onderhoudt u het resultaat?",
    ]),
  ],
};

const esthetisch: TreatmentFallback = {
  excerpt:
    "Esthetische tandheelkunde richt zich op een harmonisch gebit: vorm, kleur en symmetrie — in overleg en met heldere verwachtingen over wat haalbaar is.",
  body: [
    ptH2("et-h2-1", "Wat verstaan we onder esthetische tandheelkunde?"),
    ...ptParagraphs("et-p1", [
      "Esthetische of cosmetische behandelingen zorgen ervoor dat u kunt rekenen op het fraaist mogelijke gebit binnen de grenzen van gezondheid en biologie.",
      "Dat kan onder andere met tandkleurige vullingen, facings, kronen en soms met bruggen. Niet elke wens is in één keer realiseerbaar; we bespreken daarom vooraf doelen, stappen en onderhoud.",
    ]),
    ptH2("et-h2-2", "Belangrijke aandachtspunten"),
    ...ptBulletList("et-bl", [
      "Bestaande restauraties en de kleur van eigen tanden bepalen mee wat esthetisch haalbaar is",
      "Gezond tandvlees en een stabiele beet zijn vaak de basis voordat cosmetische stappen zinvol zijn",
      "Goede mondhygiëne verlengt de levensduur van esthetische behandelingen",
    ]),
    ...ptParagraphs("et-p2", [
      "Wilt u weten welke route bij uw gebit past? Tijdens een consult bespreken we opties, alternatieven en wat u op lange termijn kunt verwachten.",
    ]),
  ],
};

const bleken: TreatmentFallback = {
  excerpt:
    "Door kleuring van voeding, dranken of veroudering kunnen tanden geliger ogen. Met een professioneel bleektraject onder begeleiding zoeken we veilig naar een lichtere tint — voor zover dat voor uw gebit verantwoord is.",
  body: [
    ptH2("tb-h2-1", "Waarom professioneel bleken?"),
    ...ptParagraphs("tb-p1", [
      "Door het eten van sterk gekleurde voedingsmiddelen, door koffie, thee, rode wijn of door de loop der jaren kan het gebeuren dat tanden geliger worden.",
      "Met een tandenbleekbehandeling kunnen we, als dat medisch verantwoord is, uw tanden weer lichter maken. Niet elke verkleuring reageert hetzelfde; we beoordelen daarom eerst oorzaak, gezond tandvlees en bestaande vullingen of kronen.",
    ]),
    ptH2("tb-h2-2", "Wat bespreken we vooraf?"),
    ...ptBulletList("tb-bl", [
      "Of bleken voor u geschikt is en welke methode past (bijvoorbeeld thuisbleken of combinaties, afhankelijk van protocol en indicatie)",
      "Verwacht resultaat: eigen tandglazuur versus kunststof of porselein kleurt anders mee",
      "Gevoeligheid en tijdelijke overgevoeligheid: hoe daarmee om te gaan",
      "Hoe u het resultaat zo lang mogelijk behoudt (voeding, rook, onderhoud)",
    ]),
  ],
};

const parodontologie: TreatmentFallback = {
  excerpt:
    "Parodontologie richt zich op gezond weefsel rondom tanden en implantaten: van ontstoken tandvlees tot stabilisatie van het parodontium.",
  body: [
    ptH2("par-h2-1", "Wanneer is parodontale zorg nodig?"),
    ...ptParagraphs("par-p1", [
      "Parodontologie is gericht op het behandelen van ontstoken tandvlees en andere weefsels rond de tand. Dat kan zich uiten in bloeden bij poetsen, roodheid, zwelling, terugtrekkend tandvlees of pocketvorming.",
      "Ook wanneer er problemen ontstaan aan het tandvlees bij implantaten, hoort specialistische begeleiding en onderhoud thuis in dit domein.",
    ]),
    ptH2("par-h2-2", "Wat kan onderdeel zijn van een traject?"),
    ...ptBulletList("par-bl", [
      "Diagnose: meten, registreren en uitleg van de bevindingen",
      "Professionele reiniging van worteloppervlakken en ontstoken zones",
      "Instrueren van thuiszorg en onderhoudsinterval op maat",
      "Waar nodig verwijzing of samenwerking bij complexe situaties",
    ]),
    ...ptParagraphs("par-p2", [
      "Parodontale problemen zijn vaak chronisch van aard; langdurig succes hangt daarom sterk samen met uw eigen mondhygiëne en de afspraken voor nazorg.",
    ]),
  ],
};

const implantologie: TreatmentFallback = {
  excerpt:
    "Implantologie heeft tot doel één of meerdere tanden te vervangen door tandimplantaten — kunstwortels in het bot die dienen als basis voor een kroon, brug of gebitsprothese.",
  body: [
    ptH2("im-h2-1", "Wat is implantologie?"),
    ...ptParagraphs("im-p1", [
      "Implantologie heeft tot doel één of meerdere tanden te vervangen door tandimplantaten. Dit zijn kunstmatige wortels die in het bot geplaatst worden en die dienen als basis voor een kroon of als steun voor een gebitsprothese.",
      "De meeste implantaten zien eruit als een soort schroefje en zijn gemaakt van titanium, een lichaamsvriendelijk materiaal waar bot makkelijk aan hecht.",
    ]),
    ptH2("im-h2-2", "Onze eigen implantologen"),
    ...ptParagraphs("im-p2", [
      "Behalve algemeen practicus zijn tandarts Bonthond en tandarts Dijkman ook erkend en geregistreerd als implantoloog bij de Nederlandse beroepsvereniging van orale implantologen (NVOI).",
      "Om goed op de hoogte te blijven van alle ontwikkelingen, volgen zij bij- en nascholing en wordt veel tijd besteed aan extra trainingen op het gebied van implantologie. Daardoor kunnen wij onze patiënten de meest moderne en beproefde technieken aanbieden.",
    ]),
    ptH2("im-h2-3", "Wat is een implantaat?"),
    ...ptParagraphs("im-p3", [
      "Een implantaat is een kunstwortel die in de kaak geplaatst wordt en na verloop van tijd in het bot vastgroeit. Het lijkt nog het meest op een schroef of holle cilinder. Met een doorsnede van 3,3 tot 4,8 millimeter en een lengte van 6 tot 14 millimeter zijn ze ongeveer net zo groot als een natuurlijke tandwortel.",
      "Implantaten zijn meestal gemaakt van titanium dat zeer goed door het omringende bot en het lichaam wordt verdragen. Wanneer het bot voldoende aan de kunstwortel is vastgegroeid, kan het implantaat dienen als basis voor een kroon, een brug of als steun voor een gebitsprothese. Het plaatsen van één of meerdere implantaten heet implantatie.",
    ]),
    ptH2("im-h2-4", "Afspraak implantologisch consult"),
    ...ptParagraphs("im-p4", [
      "Wilt u meer informatie over implantaten? Maak dan een afspraak voor een implantologisch consult. Onze tandarts-implantoloog zoekt samen met u wat voor u de beste oplossing is en of er misschien alternatieven zijn.",
      "Wanneer u geen patiënt bij ons bent, heeft u voor het maken van deze afspraak een verwijzing van uw eigen tandarts nodig.",
    ]),
    ptBlockquote("im-bq", "Wij adviseren u graag!"),
    ...ptParagraphs("im-p5", [
      "Voordat we één of meerdere implantaten bij u gaan plaatsen, doen we eerst een onderzoek. Op basis van het onderzoek ontvangt u van ons een begroting of plaatsen we een aanvraag bij uw zorgverzekeraar. Het klikgebit wordt overigens in veel gevallen voor een groot deel vergoed uit de basisverzekering.",
      "Neem voor een implantologisch consult contact met ons op.",
    ]),
    ptH2("im-h2-5", "Informatie voor verwijzers"),
    ...ptParagraphs("im-p6", [
      "Wilt u uw patiënt verwijzen? Neem contact met ons op — wij helpen u graag met het verwijsformulier en de verdere afhandeling.",
    ]),
    ptH2("im-h2-6", "Wat komt aan bod in het traject?"),
    ...ptBulletList("im-bl", [
      "Medische en mondkundige geschiktheid, botvolume en alternatieven (zoals een brug of prothese)",
      "Planning, plaatsing, genezingsfase en belasting in stappen",
      "Nazorg: reiniging rond implantaten, controles en signalen om op te letten",
    ]),
    ...ptParagraphs("im-p7", [
      "Implantologie is maatwerk. We nemen de tijd om risico’s, kosten en verwachtingen helder te bespreken voordat er wordt gestart.",
    ]),
  ],
};

const endodontologie: TreatmentFallback = {
  excerpt:
    "Wortelkanaalbehandeling (endodontologie) kan een ontstoken of geïrriteerde zenuwholte behandelen om een tand of kies te behouden — met grondige reiniging en afsluiting van de wortelkanalen.",
  body: [
    ptH2("en-h2-1", "Wat is een wortelkanaalbehandeling?"),
    ...ptParagraphs("en-p1", [
      "Endodontologie is ook wel bekend als wortelkanaalbehandeling. Hierbij wordt de kies of tand voorzichtig geopend en de zenuwholte en wortelkanalen zeer grondig gereinigd.",
      "Het doel is desinfecteren en daarna hermetisch afsluiten van de wortelkanalen, zodat bacteriën minder kans krijgen en de tand vaak behouden kan blijven.",
    ]),
    ptH2("en-h2-2", "Wanneer kan dit nodig zijn?"),
    ...ptBulletList("en-bl", [
      "Diepe cariës die de zenuw hebben bereikt, of een tand die pijnlijk of warm aanvoelt",
      "Een ontsteking of afwijking rond de wortelpunt die op een foto zichtbaar is",
      "Soms voorafgaand aan andere restauraties als de zenuwholte risico loopt",
    ]),
    ...ptParagraphs("en-p2", [
      "Na afloop is de tand vaak brozer; een opbouwende vulling of kroon kan nodig zijn om het resultaat langdurig te beschermen. Dat bespreken we in uw persoonlijke plan.",
    ]),
  ],
};

const framesProtheses: TreatmentFallback = {
  excerpt:
    "Van een frame (gedeeltelijke prothese) tot een volledige prothese of een klikprothese op implantaten: oplossingen wanneer meerdere of alle tanden ontbreken.",
  body: [
    ptH2("fp-h2-1", "Frames en protheses in het kort"),
    ...ptParagraphs("fp-p1", [
      "Een frame is een gedeeltelijke gebitsprothese: een plaat of constructie die ontbrekende tanden en kiezen aanvult en steun vindt op het resterende gebit.",
      "Gebitsprotheses zijn er in verschillende varianten, zoals het traditionele kunstgebit, maar ook een klikgebit (prothese op implantaten) is een veelgekozen oplossing wanneer meer steun en comfort gewenst zijn.",
    ]),
    ptH2("fp-h2-2", "Waar letten we op?"),
    ...ptBulletList("fp-bl", [
      "Draagcomfort, spraak en esthetiek",
      "Onderhoud en hygiëne rond resttanden of implantaten",
      "Controle-afspraken om pasvorm en functie op peil te houden",
    ]),
  ],
};

const kronenBruggen: TreatmentFallback = {
  excerpt:
    "Kronen versterken of vervangen een aangetaste tand; bruggen verbinden meerdere elementen om ontbrekende tanden op te vangen — met aandacht voor beet en uitstraling.",
  body: [
    ptH2("kb-h2-1", "Kronen"),
    ...ptParagraphs("kb-p1", [
      "Wanneer een tand of kies sterk is beschadigd en een reguliere vulling onvoldoende steun biedt, kan een kroon worden geplaatst. Een kroon omhult het element en herstelt vorm en functie.",
    ]),
    ptH2("kb-h2-2", "Bruggen"),
    ...ptParagraphs("kb-p2", [
      "Als er één of meer tanden ontbreken, kan een brug — bestaande uit meerdere aan elkaar gekoppelde kronen — de ruimte opvullen. Of dit mogelijk is, hangt af van de steunpunten en de conditie van het resterende gebit.",
    ]),
    ptH2("kb-h2-3", "Traject en nazorg"),
    ...ptBulletList("kb-bl", [
      "Voorbereiding, afdrukken of digitale registratie, en vaak een tijdelijke voorziening",
      "Plaatsing van het definitieve werk en controle op beet en esthetiek",
      "Instructies voor reiniging onder bruggen (stokers, flossdraden) om het werk gezond te houden",
    ]),
  ],
};

const gewoonGaaf: TreatmentFallback = {
  excerpt:
    "Gewoon Gaaf is een preventieprogramma voor kinderen van 0 tot 18 jaar: samen houden we het gebit vrij van tandbederf, vanaf het eerste tandje tot en met het 17e levensjaar.",
  body: [
    ptH2("gg-h2-1", "Preventie staat centraal"),
    ...ptParagraphs("gg-p1", [
      "Tandartspraktijk Sanadens heeft preventieve tandheelkunde hoog in het vaandel. Voorkomen is beter dan genezen — wij zijn ervan overtuigd dat met de juiste poets- en voedingsgewoonten het gebit een leven lang gezond kan blijven.",
      "Gewoon Gaaf is een methode om de mond van kinderen tussen 0 en 18 jaar vrij te houden van tandbederf. Onze preventiemedewerkers werken hier dagelijks mee in de praktijk.",
    ]),
    ptH2("gg-h2-2", "Vanaf het eerste tandje"),
    ...ptParagraphs("gg-p2", [
      "Vanaf dat het eerste tandje doorbreekt, vragen wij u om uw kind mee te nemen naar onze praktijk. Wij leggen u als ouder of verzorger graag uit hoe u het kindergebit het beste kunt verzorgen — afgestemd op de poets- en voedingsgewoonten die bij uw kind passen.",
      "Een bijkomend voordeel: uw kind raakt direct vertrouwd met poetsen en het bezoeken van de tandarts.",
    ]),
    ptH2("gg-h2-3", "Het eerste bezoek en het traject"),
    ...ptBulletList("gg-bl", [
      "Bij het eerste bezoek maken we een inschatting van de persoonlijke situatie aan de hand van een risicoscorelijst",
      "Op basis daarvan bepalen we hoe vaak uw kind terugkomt voor preventieve zorg",
      "Het Gewoon Gaaf-traject loopt tot en met het 17e levensjaar; veel behandelingen worden tot 18 jaar vergoed vanuit de basisverzekering",
      "Naast het traject verwachten wij uw kind in principe twee keer per jaar voor een controle bij de tandarts",
    ]),
    ...ptParagraphs("gg-p3", [
      "Zorgverzekeraars stellen voorwaarden aan vergoeding en hanteren soms maximale aantallen per jaar. In sommige gevallen is vooraf toestemming nodig — wij informeren u daarover. Heeft u vragen over Gewoon Gaaf? Neem gerust contact met ons op.",
    ]),
  ],
};

const clearCorrect: TreatmentFallback = {
  excerpt:
    "ClearCorrect aligners zijn bijna onzichtbare beugels op maat: stap voor stap naar een rechter gebit — uitneembaar, comfortabel en passend bij uw dagelijks leven.",
  body: [
    ptH2("cc-h2-1", "Onzichtbare aligners"),
    ...ptParagraphs("cc-p1", [
      "Wist u dat wij aligners — bijna onzichtbare beugels — aanbieden in onze praktijk? Met ClearCorrect kunnen wij uw tanden weer rechtzetten, waardoor u tegelijk een gezonder gebit krijgt.",
      "Een aligner is een op maat gemaakt transparant hoesje dat op uw tanden en kiezen past. U draagt de aligner dag en nacht, behalve tijdens eten en tandenpoetsen.",
    ]),
    ptH2("cc-h2-2", "Hoe verloopt de behandeling?"),
    ...ptBulletList("cc-bl", [
      "Consult in de praktijk: foto’s, eventueel röntgenfoto’s en een 3D-scan of afdruk van uw gebit",
      "Uw behandelplan wordt gemaakt in samenspraak met uw behandelaar en besproken tijdens een vervolgafspraak",
      "Na goedkeuring worden de aligners gemaakt en bij u geplaatst",
      "Na ongeveer twee weken wisselt u voor de volgende set; zo verplaatsen uw tanden stap voor stap",
    ]),
    ptH2("cc-h2-3", "Voordelen van ClearCorrect"),
    ...ptParagraphs("cc-p2", [
      "Het grootste voordeel is dat de aligner vrijwel onzichtbaar is. Daarnaast zijn aligners uitneembaar: u kunt uw gebit gewoon reinigen zoals u gewend bent en alles blijven eten. Orthodontie hoeft geen belemmering meer te zijn in uw dagelijks leven.",
      "Wilt u weten wat een ClearCorrect-behandeling voor uw glimlach kan betekenen? Neem contact met ons op — wij plannen graag een consult.",
    ]),
  ],
};

const chirurgie: TreatmentFallback = {
  excerpt:
    "Kleine chirurgische ingrepen in en rond de mond wanneer dat nodig is voor gezondheid of als voorbereiding op verdere behandeling — met duidelijke voorlichting over verloop en herstel.",
  body: [
    ptH2("ch-h2-1", "Wat valt onder mondzorg-chirurgie?"),
    ...ptParagraphs("ch-p1", [
      "Chirurgie wordt toegepast wanneer heelkundige ingrepen op het kaakbeen en de omliggende weefsels nodig zijn. Voorbeelden kunnen zijn: het verwijderen van elementen die niet meer te behouden zijn, ingrepen aan het slijmvlies of ingrepen in het kader van orthodontie of implantologie.",
    ]),
    ptH2("ch-h2-2", "Voorlichting en nazorg"),
    ...ptBulletList("ch-bl", [
      "Uitleg over de ingreep, anesthesie-opties en wat u na afloop kunt verwachten",
      "Advies over zwelling, pijnstilling, eten en mondhygiëne in de genezingsfase",
      "Controleafspraken en signalen waarbij contact gewenst is",
    ]),
    ...ptParagraphs("ch-p2", [
      "Bij complexe situaties kan samenwerking met een kaakchirurg onderdeel zijn van de zorg. U hoort vooraf welke route wordt gekozen en waarom.",
    ]),
  ],
};

export const treatmentFallbackBySlug: Record<string, TreatmentFallback> = {
  "periodieke-controle": periodiekeControle,
  "mondhygiene-en-preventie": mondhygiene,
  "restauratieve-tandheelkunde": restauratief,
  "esthetische-tandheelkunde": esthetisch,
  "tanden-bleken": bleken,
  parodontologie,
  implantologie,
  endodontologie,
  "frames-en-protheses": framesProtheses,
  "kronen-en-bruggen": kronenBruggen,
  chirurgie,
  "gewoon-gaaf": gewoonGaaf,
  "clear-correct": clearCorrect,
};

export function getTreatmentFallback(slug: string): TreatmentFallback | undefined {
  return treatmentFallbackBySlug[slug];
}
