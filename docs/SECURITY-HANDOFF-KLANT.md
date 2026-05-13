# Beveiliging en migratie — informatie voor de praktijk

## Wat speelt er bij de huidige live-site?

Bij het inventariseren van de bestaande website bleek dat naast normale praktijkteksten ook **veel niet-relevante inhoud** (onder andere gok- en casino-spam) in exports terugkwam. Dat past niet bij een tandartspraktijk en wijst vrijwel altijd op **gecompromitteerde of geïnjecteerde inhoud** in het oude systeem (bijvoorbeeld WordPress), niet op een bewuste keuze van de praktijk.

Het **nieuwe** project (Next.js + Sanity) bevat die spam niet en levert schone, beheerbare content.

## Wat u vóór of parallel aan de go-live moet regelen

1. **Professionele opschoning** van de huidige omgeving (WordPress/hosting): malware-scan, verwijderen van backdoors en SEO-spam, controleren van gebruikersaccounts en **wachtwoorden roteren** (FTP, WordPress-admin, database, hostingpaneel, e-mail).
2. **Geen “besmette” omgeving hergebruiken** zonder grondig onderzoek. Vaak is een **schone herinstallatie** van WordPress (of overstap naar alleen het nieuwe platform) veiliger dan bestanden stuk voor stuk opschonen.
3. **DNS en domein**: wanneer u naar de nieuwe site schakelt, laat de oude geïnfecteerde server niet ongemerkt online als open deur achter de rug.
4. **Back-ups**: bewaar alleen **betrouwbare** back-ups van vóór de infectie, of laat een specialist bepalen wat veilig is om te herstellen.

## Na de go-live

- Houd **Sanity**- en **Vercel**- (of andere hosting-)accounts beperkt tot wie ze nodig heeft, met **sterke wachtwoorden** en waar mogelijk tweestapsverificatie.
- Formulieren op de nieuwe site gaan via **Resend**; de API-sleutel hoort alleen op de server te staan, niet in de browser.

Vragen over dit document kunt u stellen aan uw webbouwer of IT-partner.
