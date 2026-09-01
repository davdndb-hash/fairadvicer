import type { SiteCopy } from "./types";

const de: SiteCopy = {
  langTag: "de-DE",
  localeName: "Deutsch",
  meta: {
    siteName: "FairAdvicer",
    tagline: "Wir verbinden Menschen.",
    homeTitle: "FairAdvicer – Internationale Pflegefachkräfte für Deutschland",
    homeDescription:
      "FairAdvicer rekrutiert, qualifiziert und integriert examinierte Pflegefachkräfte aus aller Welt. Von der Auswahl über Visum und Anerkennung bis zur langfristigen Integration – ohne Vorkasse.",
  },
  nav: {
    employers: "Für Arbeitgeber",
    nurses: "Für Fachkräfte",
    about: "Über uns",
    jobs: "Stellenangebote",
    insights: "Wissen",
    contact: "Kontakt",
    cta: "Erstgespräch",
    portal: "Bewerberportal",
    menu: "Menü",
    close: "Schließen",
    langLabel: "Sprache",
  },
  common: {
    more: "Mehr erfahren",
    back: "Zurück",
    callUs: "Anrufen",
    writeUs: "E-Mail schreiben",
    officeHours: "Erreichbarkeit",
    officeHoursValue: "Mo–Fr, 08:00–18:00 Uhr",
    whatsapp: "WhatsApp",
    faqTitle: "Häufige Fragen",
    skip: "Zum Inhalt springen",
  },
  home: {
    eyebrow: "Internationale Pflege­fachkräfte",
    h1: "Pflegekräfte, die bleiben.",
    lead:
      "Wir rekrutieren examinierte Pflegefachkräfte aus aller Welt – und begleiten sie durch Visum, Anerkennung, Wohnungssuche und die ersten zwei Jahre im Team. Sie zahlen nichts im Voraus.",
    ctaPrimary: "Kostenloses Erstgespräch",
    ctaSecondary: "So läuft es ab",
    trust: [
      "AZAV-zertifizierter Vorbereitungskurs",
      "Wir unterstützen die VdPB Bayern",
      "Sitz in Haar bei München",
      "Keine Vertragsstrafen für Fachkräfte",
    ],
    heroBadges: [
      { value: "AZAV", label: "zertifizierte Prüfungsvorbereitung" },
      { value: "1:1", label: "feste Ansprechperson – auch nach dem Start" },
    ],
    mapCaption:
      "Weltkarte: München als Zielort, verbunden mit unseren Rekrutierungsregionen in São Paulo, Lima, Jakarta, Manila und Kochi.",
    statsTitle: "FairAdvicer in Zahlen",
    stats: [
      { value: "0 €", label: "Vorkasse – Sie zahlen erst bei erfolgreicher Vermittlung" },
      { value: "24", label: "Monate Begleitung nach dem ersten Arbeitstag" },
      { value: "B1+", label: "Mindest-Sprachniveau aller Kandidatinnen und Kandidaten" },
      { value: "2015", label: "Seit diesem Jahr sind wir in der Pflegebranche zuhause" },
    ],
    servicesEyebrow: "Unser Service",
    servicesTitle: "Vier Bausteine. Ein Ansprechpartner.",
    servicesLead:
      "Andere vermitteln Lebensläufe. Wir übernehmen den kompletten Weg von der Auswahl im Herkunftsland bis zur Anerkennung der Berufsbezeichnung in Deutschland – und bleiben danach erreichbar.",
    services: [
      {
        title: "Rekrutierung",
        body:
          "Wir prüfen Qualifikation, Sprachniveau und Motivation persönlich – und schlagen nur Profile vor, die zu Ihrem Haus, Ihrer Station und Ihrem Team passen. Matching vor Masse.",
        href: "/arbeitgeber",
        linkLabel: "Zum Ablauf",
      },
      {
        title: "Anerkennung",
        body:
          "Unser Anerkennungsmanagement übernimmt die Antragstellung bei der Regierung, die Dokumentenbeschaffung und die Vorbereitung auf die Kenntnisprüfung – in unserem AZAV-zertifizierten Kurs.",
        href: "/arbeitgeber",
        linkLabel: "Anerkennung im Detail",
      },
      {
        title: "Relocation",
        body:
          "Visum, Anmeldung, Steuer-ID, Sozialversicherung, Bankkonto, Wohnung. Wir erledigen den Behördenmarathon, damit Ihre neuen Kolleginnen und Kollegen pünktlich auf Station stehen.",
        href: "/pflegefachkraefte",
        linkLabel: "Was dazugehört",
      },
      {
        title: "Integration",
        body:
          "Vernetzungswoche zum Ankommen, regelmäßige Check-ins, Integrationsstammtische und ein fester Ansprechpartner – zwei Jahre lang. Genau das macht den Unterschied bei der Bindung.",
        href: "/pflegefachkraefte",
        linkLabel: "Unser FairKonzept",
      },
    ],
    processEyebrow: "Der Weg",
    processTitle: "Von der ersten Frage bis zum ersten Dienst.",
    processLead:
      "Ein klarer, planbarer Prozess – Sie wissen jederzeit, wo Ihre künftigen Mitarbeitenden gerade stehen.",
    steps: [
      {
        step: "01",
        title: "Erstgespräch",
        body:
          "Kostenlos und unverbindlich. Wir klären Bedarf, Fachrichtung, Zeitplan und die Rahmenbedingungen in Ihrem Haus.",
      },
      {
        step: "02",
        title: "Anforderungsprofil & Interviews",
        body:
          "Wir erstellen das Profil, wählen vor und stellen Ihnen passende Kandidatinnen und Kandidaten im Videointerview vor.",
      },
      {
        step: "03",
        title: "Vertrag & Visum",
        body:
          "Arbeitsvertrag, beschleunigtes Fachkräfteverfahren, Anerkennungsantrag, Botschaftstermin – wir steuern jeden Schritt.",
      },
      {
        step: "04",
        title: "Ankunft & Integration",
        body:
          "Abholung, Wohnung, Behörden, Vernetzungswoche, Kenntnisprüfung. Und danach zwei Jahre verlässliche Betreuung.",
      },
    ],
    audienceEyebrow: "Zwei Wege",
    audienceTitle: "Was suchen Sie?",
    audience: [
      {
        title: "Ich suche Pflegekräfte",
        body:
          "Für Krankenhäuser, Alten- und Pflegeeinrichtungen, ambulante Dienste und Reha-Kliniken in ganz Deutschland.",
        bullets: [
          "Vorgeprüfte Fachkräfte ab Sprachniveau B1",
          "Komplettes Anerkennungs- und Visumsmanagement",
          "Keine Kosten im Voraus",
        ],
        cta: "Für Arbeitgeber",
        href: "/arbeitgeber",
      },
      {
        title: "Ich bin Pflegefachkraft",
        body:
          "Du hast eine abgeschlossene Ausbildung oder ein Studium in der Pflege und möchtest in Deutschland arbeiten?",
        bullets: [
          "Für dich zu 100 % kostenlos",
          "Vollzeitstelle, Visum, Wohnung und Anerkennung",
          "Feste Ansprechperson – auch nach dem Start",
        ],
        cta: "Für Fachkräfte",
        href: "/pflegefachkraefte",
      },
    ],
    proofEyebrow: "Das erhalten Sie bei uns",
    proofTitle: "Sechs Gründe, warum Häuser mit uns arbeiten.",
    proofLead:
      "Vermittlung ist der einfache Teil. Dass die Fachkraft nach zwei Jahren noch da ist, entscheidet sich in den Monaten danach.",
    proof: [
      {
        title: "Betreuung",
        body: "Wir bleiben für unsere Fachkräfte erreichbar – auch lange nach dem ersten Arbeitstag.",
      },
      {
        title: "Fester Ansprechpartner",
        body: "Eine Person, die Ihr Haus und Ihre Fachkraft kennt. Kein Ticketsystem, keine Warteschleife.",
      },
      {
        title: "Keine Vorkasse",
        body: "Sie treten nicht in Vorleistung. Die Provision fällt bei erfolgreicher Vermittlung an.",
      },
      {
        title: "Matching-Prinzip",
        body: "Wir schlagen nur Profile vor, die fachlich und menschlich zu Ihrem Team passen.",
      },
      {
        title: "Internationaler Talentpool",
        body: "Wir rekrutieren in Regionen mit ausreichend Fachkräften – ohne die Versorgung dort zu gefährden.",
      },
      {
        title: "Geprüfte Qualität",
        body: "Abgeschlossene Ausbildung oder Studium, Deutsch ab B1, persönlich geführte Interviews.",
      },
    ],
    missionEyebrow: "Unsere Mission",
    missionTitle: "Fairness ist bei uns keine Marketingfloskel.",
    missionBody:
      "Unsere Mission ist es, Unternehmen und Arbeitssuchende weltweit miteinander zu verbinden – im Einklang mit unseren Werten von Fairness und Transparenz. Wir bieten maßgeschneiderte Dienstleistungen für die Identifizierung, Bewertung und Vermittlung hochqualifizierter Fachkräfte auf Basis eines echten Matchings. Und wir engagieren uns für eine schnelle, effektive Anerkennung durch unseren zertifizierten Vorbereitungskurs zur Kenntnisprüfung.",
    missionQuote:
      "Wir kommen selbst aus der Pflege. Deshalb wissen wir, was eine neue Kollegin in der dritten Woche wirklich braucht – und es ist selten ein weiteres Merkblatt.",
    missionAuthor: "Die Geschäftsführung, FairAdvicer GmbH",
    faq: [
      {
        q: "Wer steht hinter FairAdvicer?",
        a: "Ein vielfältiges Team mit eigenem Hintergrund in der Pflegebranche. Genau dieser Hintergrund gibt uns den Einblick, um die Bedürfnisse von Einrichtungen und Fachkräften wirklich zu verstehen.",
      },
      {
        q: "Welchen Service bietet FairAdvicer an?",
        a: "Wir sind Ihr Partner für Rekrutierung, Einstellung, Anerkennung und langfristige Integration von Pflegefachkräften aus verschiedenen Teilen der Welt – von der ersten Auswahl bis weit in die Beschäftigung hinein.",
      },
      {
        q: "Was kostet mich der Service von FairAdvicer?",
        a: "Für die Vermittlung fällt eine Provision an. Die Höhe hängt von der Anzahl der rekrutierten Pflegekräfte und den Anforderungen Ihres Hauses ab. Für Fachkräfte ist der Service kostenlos. Sprechen Sie uns für ein konkretes Angebot direkt an.",
      },
      {
        q: "Mit welchen Kosten muss ich für die Anerkennung rechnen?",
        a: "Unser Vorbereitungskurs ist förderfähig durch die Bundesagentur für Arbeit. In vielen Fällen werden die Qualifizierungskosten übernommen, etwa über Bildungsgutscheine nach § 81 SGB III oder spezielle Förderprogramme.",
      },
      {
        q: "Woher rekrutiert FairAdvicer?",
        a: "Innerhalb und außerhalb der EU – gezielt in Regionen mit ausreichend qualifiziertem Personal, damit die Versorgung in den Herkunftsländern nicht beeinträchtigt wird. Eigene Deutschkurse vor Ort sichern die Vorbereitung.",
      },
      {
        q: "Gibt es Mindestanforderungen an die Pflegefachkräfte?",
        a: "Ja. Unsere Kandidatinnen und Kandidaten verfügen über eine abgeschlossene Ausbildung oder ein Studium im Heimatland sowie Deutschkenntnisse auf mindestens B1-Niveau.",
      },
    ],
    ctaTitle: "Wir gehen einen Schritt weiter.",
    ctaBody:
      "Steht Ihre nächste Herausforderung schon vor der Tür? Schreiben Sie uns – wir melden uns in der Regel innerhalb eines Werktages.",
  },
  employers: {
    eyebrow: "Für Arbeitgeber",
    h1: "Besetzen Sie Ihre Stellen – nicht Ihre Aktenordner.",
    lead:
      "Sie brauchen Pflegefachkräfte, keine Verwaltungsprojekte. Wir übernehmen Rekrutierung, Anerkennung, Visum und Ankunft und liefern einsatzbereite Kolleginnen und Kollegen – ohne Vorkasse.",
    ctaPrimary: "Bedarf besprechen",
    ctaSecondary: "Ablauf ansehen",
    painEyebrow: "Die Ausgangslage",
    painTitle: "Warum internationale Rekrutierung so oft scheitert.",
    painLead:
      "Nicht am Willen – an der Umsetzung. Diese drei Punkte kosten Häuser regelmäßig Monate und Geld.",
    pains: [
      {
        title: "Der Prozess zieht sich",
        body:
          "Anerkennungsantrag, Botschaftstermin, Dokumentenbeschaffung: Ohne Routine dauert jeder Schritt doppelt so lang. Wir kennen die Wege und die Ansprechpartner.",
      },
      {
        title: "Die Fachkraft kommt – und geht wieder",
        body:
          "Ohne Wohnung, ohne Ansprechperson, ohne Anschluss steigt die Abbruchquote. Unsere Integrationsarbeit beginnt vor der Landung und endet nicht nach der Probezeit.",
      },
      {
        title: "Die Kenntnisprüfung wird unterschätzt",
        body:
          "Ohne strukturierte Vorbereitung verzögert sich die Anerkennung – und damit die volle Einsatzfähigkeit. Unser AZAV-zertifizierter Kurs setzt genau hier an.",
      },
    ],
    stepsEyebrow: "Der Ablauf",
    stepsTitle: "Vier Schritte bis zur neuen Kollegin.",
    stepsLead: "Transparent, planbar und mit einer festen Ansprechperson auf unserer Seite.",
    steps: [
      {
        step: "01",
        title: "Kostenloses Erstgespräch",
        body:
          "Wir klären Bedarf, Fachbereiche, Zeitplan, Unterbringung und Rahmenbedingungen. Unverbindlich und ohne Kosten.",
      },
      {
        step: "02",
        title: "Anforderungsprofil & Vorauswahl",
        body:
          "Wir schärfen das Profil, sichten unseren Talentpool und führen die Interviews. Sie sehen nur Kandidatinnen und Kandidaten, die wirklich passen.",
      },
      {
        step: "03",
        title: "Einstellung & Verfahren",
        body:
          "Arbeitsvertrag, beschleunigtes Fachkräfteverfahren, Anerkennungsantrag, Visum, Krankenversicherung – wir steuern und dokumentieren jeden Schritt.",
      },
      {
        step: "04",
        title: "Ankunft, Anerkennung, Bindung",
        body:
          "Relocation, Vernetzungswoche, Vorbereitungskurs zur Kenntnisprüfung und laufende Betreuung über rund zwei Jahre.",
      },
    ],
    includedEyebrow: "Leistungsumfang",
    includedTitle: "Das ist bei uns inklusive.",
    included: [
      {
        title: "Vorgeprüfte Fachkräfte",
        body: "Abgeschlossene Ausbildung oder Studium, Deutsch ab B1, persönlich geführte Interviews, dokumentierte Unterlagen.",
      },
      {
        title: "Entlastung Ihrer Verwaltung",
        body: "Anträge, Fristen, Behördenkommunikation und Dokumentenlogistik laufen über uns – nicht über Ihre Personalabteilung.",
      },
      {
        title: "Anerkennungsmanagement",
        body: "Von der Einreichung der Unterlagen bis zur bestandenen Kenntnisprüfung. Einer der häufigsten Stolpersteine – bei uns Standard.",
      },
      {
        title: "AZAV-zertifizierter Kurs",
        body: "Unser Vorbereitungskurs zur Kenntnisprüfung ist eine AZAV-zertifizierte Maßnahme und damit über die Bundesagentur förderfähig.",
      },
      {
        title: "Premium-Relocation",
        body: "Abholung, Wohnung, Anmeldung, Steuer-ID, Sozialversicherung, Bankkonto, Orientierung vor Ort und unsere FairMap.",
      },
      {
        title: "Employer Branding",
        body: "Ein Haus, das internationale Kolleginnen und Kollegen sichtbar gut behandelt, gewinnt auch lokal an Anziehungskraft.",
      },
    ],
    recognitionEyebrow: "Anerkennung",
    recognitionTitle: "Vorbereitungskurs zur Kenntnisprüfung.",
    recognitionBody:
      "Wir übernehmen die gesamte Organisation und Begleitung des Anerkennungsprozesses – von der Einreichung der Unterlagen bis zur Vorbereitung auf die Kenntnisprüfung. Der Kurs ist eine AZAV-zertifizierte Maßnahme; in vielen Fällen übernimmt die Bundesagentur für Arbeit die Qualifizierungskosten, etwa über Bildungsgutscheine nach § 81 SGB III.",
    recognitionBullets: [
      "Antragstellung und Fristenmanagement bei der zuständigen Regierung",
      "Beschaffung, Übersetzung und Beglaubigung der Nachweise",
      "Fachsprachliche und pflegefachliche Prüfungsvorbereitung",
      "Begleitung bis zur erteilten Berufsurkunde",
    ],
    costTitle: "Was kostet das?",
    costBody:
      "Für die Vermittlung fällt eine Provision an, deren Höhe von der Anzahl der Fachkräfte und den Anforderungen Ihres Hauses abhängt. Sie treten dabei nicht in Vorkasse. Für ein konkretes Angebot sprechen Sie uns direkt an – im Erstgespräch nennen wir Ihnen eine belastbare Größenordnung.",
    faq: [
      {
        q: "Wie lange dauert es bis zum ersten Arbeitstag?",
        a: "Das hängt vom Herkunftsland, dem Visumsverfahren und der zuständigen Anerkennungsbehörde ab. Realistisch sind mehrere Monate zwischen Vertragsunterzeichnung und Ankunft. Im Erstgespräch geben wir Ihnen für Ihren Fall eine belastbare Einschätzung.",
      },
      {
        q: "Aus welchen Ländern rekrutieren Sie?",
        a: "Innerhalb und außerhalb der EU, gezielt in Regionen mit ausreichend qualifiziertem Personal, damit die pflegerische Versorgung dort nicht beeinträchtigt wird.",
      },
      {
        q: "Welches Sprachniveau bringen die Fachkräfte mit?",
        a: "Mindestens B1. Über unsere eigenen Deutschkurse vor Ort bereiten wir Kandidatinnen und Kandidaten gezielt auf den Berufsalltag in Deutschland vor.",
      },
      {
        q: "Was passiert, wenn es nicht passt?",
        a: "Wir arbeiten nach dem Matching-Prinzip und bleiben nach der Vermittlung Ansprechpartner für beide Seiten. Treten Probleme auf, suchen wir gemeinsam eine Lösung – das ist Teil unseres Selbstverständnisses.",
      },
    ],
    ctaTitle: "Lassen Sie uns über Ihren Bedarf sprechen.",
    ctaBody:
      "Ein Erstgespräch dauert etwa 20 Minuten, kostet nichts und verpflichtet zu nichts. Danach wissen Sie, ob und wie schnell wir Ihre Stellen besetzen können.",
  },
  nurses: {
    eyebrow: "Für Pflegefachkräfte",
    h1: "Deine Karriere startet hier.",
    lead:
      "Du bist examinierte Pflegefachkraft und möchtest in Deutschland arbeiten? Wir finden deinen Arbeitgeber, organisieren Visum, Wohnung und Anerkennung – und begleiten dich auch danach. Für dich ist das zu 100 % kostenlos.",
    ctaPrimary: "Jetzt bewerben",
    ctaSecondary: "Offene Stellen ansehen",
    promiseEyebrow: "Dein Schritt nach Deutschland",
    promiseTitle: "Was wir für dich übernehmen.",
    promiseLead:
      "Von der Auswahl des Arbeitgebers bis zur Anerkennung deines Titels – und das Beste daran: Für dich ist unser Service komplett kostenlos.",
    promises: [
      {
        title: "Dein Transfer",
        body: "Wir organisieren deinen Weg von deinem Heimatland nach Deutschland – inklusive Abholung bei der Ankunft.",
      },
      {
        title: "Deine Vollzeitstelle",
        body: "Eine feste Vollzeitbeschäftigung in einem Krankenhaus oder einer Pflegeeinrichtung in Deutschland.",
      },
      {
        title: "Deine Anerkennung",
        body: "Wir bereiten dich in unserer Akademie auf die Anerkennung deines Titels vor – strukturiert und mit klarem Plan.",
      },
      {
        title: "Der Papierkram",
        body: "Arbeitsvisum, Zertifikate, Krankenversicherung, Anmeldung, Steuer-ID: Wir stehen persönlich neben dir.",
      },
      {
        title: "Dein Ankommen",
        body: "Unterkunft, Bankkonto, Orientierung vor Ort – und unsere Integrationsstammtische, damit du Menschen kennenlernst.",
      },
      {
        title: "Deine Erfahrung",
        body: "Du arbeitest in einem der ältesten und stabilsten Gesundheitssysteme der Welt und wächst fachlich wie persönlich.",
      },
    ],
    stepsEyebrow: "Dein Weg",
    stepsTitle: "In fünf Schritten nach Deutschland.",
    steps: [
      { step: "01", title: "Bewerbung", body: "Du schickst uns Lebenslauf und Zeugnisse. Wir prüfen deine Unterlagen und melden uns zurück." },
      { step: "02", title: "Kennenlernen", body: "Wir sprechen über deine Ziele, deine Fachrichtung und deine Wunschregion in Deutschland." },
      { step: "03", title: "Dein Arbeitgeber", body: "Wir stellen dich passenden Einrichtungen vor. Du entscheidest, wo du arbeiten möchtest." },
      { step: "04", title: "Visum & Vorbereitung", body: "Vertrag, Visum, Deutschkurs und Anerkennungsberatung – wir begleiten jeden Schritt." },
      { step: "05", title: "Ankommen & Anerkennung", body: "Vernetzungswoche, Wohnung, Behörden, Vorbereitungskurs zur Kenntnisprüfung. Und danach bleiben wir für dich erreichbar." },
    ],
    requirementsTitle: "Was du mitbringen solltest",
    requirementsLead:
      "Wir suchen hochmotivierte Pflegefachkräfte – besonders Absolventinnen und Absolventen, die ihren Weg in deutschen Kliniken und Pflegeeinrichtungen starten möchten.",
    requirements: [
      "Abgeschlossene Ausbildung oder abgeschlossenes Studium in der Pflege",
      "Deutschkenntnisse auf mindestens B1-Niveau",
      "Bereitschaft, dauerhaft in Deutschland zu leben und zu arbeiten",
      "Motivation, dich fachlich und sprachlich weiterzuentwickeln",
    ],
    documentsTitle: "Diese Unterlagen brauchen wir",
    documents: [
      "Lebenslauf",
      "Bachelor- bzw. Abschlusszertifikat",
      "Sprachzertifikat (falls vorhanden)",
    ],
    guaranteeTitle: "Dafür garantieren wir",
    guarantees: [
      { title: "Fairness", body: "Keine Vertragsstrafen, keine versteckten Kosten – und wir kooperieren ausschließlich mit fairen Arbeitgebern." },
      { title: "Eigener Ansprechpartner", body: "Eine feste Person, die deinen Namen kennt und dir zuhört – nicht ein wechselndes Team." },
      { title: "Betreuung", body: "Wir bleiben erreichbar. Auch im zweiten Jahr, auch wenn es mal schwierig wird." },
      { title: "Kostenlos", body: "Unser gesamter Service ist für dich als Kandidatin oder Kandidat vollständig kostenfrei." },
    ],
    faq: [
      {
        q: "Gibt es eine vertragliche Bindung?",
        a: "Zwischen uns besteht keine vertragliche Bindung. Und uns ist wichtig, dass das auch beim zukünftigen Arbeitgeber so ist – wir kooperieren ausschließlich mit fairen Arbeitgebern.",
      },
      {
        q: "Was kostet mich der Service?",
        a: "Für dich als Kandidatin oder Kandidat ist unser Service vollständig kostenfrei. Wir begleiten dich, bis wir einen passenden Arbeitgeber gefunden haben und deine Anerkennung geschafft ist.",
      },
      {
        q: "Was brauche ich für die Bewerbung?",
        a: "Für die Vorabprüfung benötigen wir deinen Lebenslauf, dein Bachelor- bzw. Abschlusszertifikat und – falls vorhanden – dein Sprachzertifikat.",
      },
      {
        q: "Wie kann ich mich bewerben?",
        a: "Ganz einfach über unser Bewerberportal oder über das Kontaktformular auf dieser Seite. Reiche bitte alle Dokumente wie angefordert ein, dann geht die Prüfung schneller.",
      },
      {
        q: "Was passiert, wenn ich mit meinem Arbeitgeber unzufrieden bin?",
        a: "Wir führen gemeinsam mit dir unser Standardprogramm durch und finden über unser Netzwerk schnell Lösungen für deine Anliegen. Du stehst damit nie allein da.",
      },
      {
        q: "Wie lange dauert der Prozess?",
        a: "Der Integrationsprozess startet mit der Vertragsunterzeichnung in deinem Heimatland und erstreckt sich über etwa zwei Jahre nach Arbeitsbeginn: erst Anerkennungsberatung und Deutschkurse, dann eine Vernetzungswoche in Deutschland, danach regelmäßige Kontakte und permanente Erreichbarkeit.",
      },
    ],
    ctaTitle: "Dein Karrierestart wartet.",
    ctaBody:
      "Du hast Fragen oder möchtest dich bewerben? Hinterlasse uns eine Nachricht – wir melden uns umgehend bei dir.",
  },
  about: {
    eyebrow: "Über uns",
    h1: "Wir kommen selbst aus der Pflege.",
    lead:
      "FairAdvicer wurde von Menschen gegründet, die den Stationsalltag kennen – und die wissen, was internationale Kolleginnen und Kollegen wirklich brauchen, um zu bleiben.",
    storyTitle: "Wie wir arbeiten",
    story: [
      "Unser Ziel ist es, die Pflegebranche durch die Vermittlung hochqualifizierter internationaler Fachkräfte zu stärken. Dank unserer Expertise im Einwanderungsbereich und unserem eigenen Hintergrund in der Pflege helfen wir deutschen Einrichtungen, qualifiziertes Personal zu gewinnen – gerade in Zeiten des Fachkräftemangels.",
      "Mit unserem FairKonzept bieten wir internationalen Fachkräften eine umfassende Begleitung, Betreuung und Beratung, die auf eigenen Erfahrungen basiert. Wir schaffen die Voraussetzungen für einen reibungslosen Einstieg in ein neues berufliches und soziales Umfeld.",
      "Bei uns ist niemand nur ein Kandidat. Als aktive Mitglieder der Pflegebranche nennen wir unsere Fachkräfte Kolleginnen und Kollegen – und behandeln sie auch so.",
    ],
    valuesEyebrow: "Unsere Werte",
    valuesTitle: "Fair vermittelt, erfolgreich gepflegt.",
    values: [
      { title: "Transparenz", body: "Klare Prozesse, klare Kosten, keine Kleingedruckten-Überraschungen – für Häuser wie für Fachkräfte." },
      { title: "Verantwortung", body: "Wir rekrutieren nur dort, wo genügend Fachkräfte vorhanden sind, damit die Versorgung im Herkunftsland nicht leidet." },
      { title: "Nähe", body: "Feste Ansprechpartner, echte Erreichbarkeit und Stammtische statt anonymer Hotlines." },
      { title: "Qualität", body: "Geprüfte Qualifikationen, strukturierte Anerkennung und eine AZAV-zertifizierte Prüfungsvorbereitung." },
    ],
    teamEyebrow: "Das Team",
    teamTitle: "Wir stehen hinter FairAdvicer.",
    teamLead:
      "Ein vielfältiges Team aus Pflege, Verwaltung und Marketing – mit einem gemeinsamen Anspruch: Menschen gut ankommen zu lassen.",
    team: [
      {
        name: "Agostino Drago",
        role: "Geschäftsführung",
        body: "Kam 2015 aus der kaufmännischen Welt in die Pflegebranche und setzt sich seither für faire Bedingungen für Pflegekräfte ein.",
        initials: "AD",
      },
      {
        name: "Franz Altendorfer",
        role: "Geschäftsführung",
        body: "Examinierter Gesundheits- und Krankenpfleger mit Weiterbildung im Bereich der psychiatrischen Pflege.",
        initials: "FA",
      },
      {
        name: "Latisha Jundt",
        role: "Marketing",
        body: "Begegnet dem Fachkräftemangel im Gesundheitswesen mit innovativen Ideen und klarer Kommunikation.",
        initials: "LJ",
      },
      {
        name: "Aaliyah Jundt",
        role: "Marketing & Integration",
        body: "Allrounderin im Marketingteam und Organisatorin unserer Integrationsveranstaltungen für internationale Fachkräfte.",
        initials: "AJ",
      },
    ],
    partnersTitle: "Auch interessant",
    partnersLead: "Organisationen und Angebote, die wir Fachkräften und Einrichtungen ans Herz legen.",
    partners: [
      {
        name: "VdPB – Vereinigung der Pflegenden in Bayern",
        body: "Uns als Pflegekräften ist es wichtig, organisiert zu sein. Deshalb unterstützen wir die VdPB – Bayerns Stimme für die Pflege.",
        href: "https://www.vdpb-bayern.de/",
      },
      {
        name: "kda – Erwerbsmigration in die Pflege",
        body: "Die Broschüre des Kuratoriums Deutsche Altershilfe erklärt den Weg nach Deutschland verständlich – in mehreren Sprachen.",
        href: "https://kda.de/",
      },
    ],
    ctaTitle: "Lernen wir uns kennen.",
    ctaBody: "Ob Einrichtung oder Pflegefachkraft – schreiben Sie uns, wir melden uns zeitnah zurück.",
  },
  contact: {
    eyebrow: "Kontakt",
    h1: "Machen Sie den ersten Schritt.",
    lead:
      "Ob Personalbedarf, Bewerbung oder eine Frage zur Anerkennung – wir antworten in der Regel innerhalb eines Werktages.",
    addressTitle: "Büro",
    address: ["FairAdvicer GmbH", "Blumenstraße 3", "85540 Haar", "Deutschland"],
    directTitle: "Direkter Draht",
    formTitle: "Schreiben Sie uns",
    formLead: "Je konkreter Ihre Nachricht, desto präziser unsere Antwort.",
  },
  jobs: {
    eyebrow: "Stellenangebote",
    h1: "Offene Stellen in der Pflege.",
    lead:
      "Vollzeitstellen in Kliniken und Pflegeeinrichtungen in ganz Deutschland – mit Anerkennungsbegleitung, Relocation und fester Ansprechperson.",
    filterAll: "Alle",
    filterCategory: "Fachbereich",
    filterRegion: "Region",
    filterType: "Anstellung",
    resultsOne: "Stelle gefunden",
    resultsMany: "Stellen gefunden",
    empty: "Für diese Auswahl haben wir gerade keine Stelle ausgeschrieben.",
    emptyCta: "Initiativ bewerben",
    cardCta: "Details ansehen",
    detailAbout: "Über die Stelle",
    detailTasks: "Deine Aufgaben",
    detailProfile: "Dein Profil",
    detailBenefits: "Das erwartet dich",
    detailApply: "Auf diese Stelle bewerben",
    detailApplyLead:
      "Schick uns deine Daten – wir melden uns innerhalb weniger Tage und begleiten dich durch den gesamten Prozess.",
    facts: {
      location: "Einsatzort",
      type: "Anstellung",
      german: "Sprachniveau",
      salary: "Gehalt",
      start: "Start",
      category: "Fachbereich",
    },
    similar: "Weitere Stellen",
    noSalary: "Nach Vereinbarung",
  },
  insights: {
    eyebrow: "Wissen",
    h1: "Anerkennung, Visum, Ankommen – erklärt.",
    lead:
      "Praxisnahe Antworten auf die Fragen, die uns Einrichtungen und Fachkräfte am häufigsten stellen.",
    readingTime: "Min. Lesezeit",
    empty: "Hier entstehen gerade neue Beiträge.",
    related: "Weitere Beiträge",
    audience: { employer: "Für Arbeitgeber", candidate: "Für Fachkräfte", both: "Für alle" },
  },
  form: {
    name: "Name",
    email: "E-Mail",
    phone: "Telefon",
    company: "Einrichtung",
    facilityType: "Art der Einrichtung",
    headcount: "Gesuchte Fachkräfte",
    timeframe: "Zeitrahmen",
    message: "Nachricht",
    messagePlaceholder: "Worum geht es? Je konkreter, desto besser.",
    country: "Land",
    profession: "Beruf",
    germanLevel: "Deutschniveau",
    experience: "Berufserfahrung",
    privacy: "Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.",
    privacyLink: "Datenschutzerklärung",
    submit: "Nachricht senden",
    submitting: "Wird gesendet …",
    successTitle: "Vielen Dank!",
    successBody: "Ihre Nachricht ist bei uns angekommen. Wir melden uns in der Regel innerhalb eines Werktages.",
    error: "Das hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie an info@fairadvicer.de.",
    required: "Pflichtfeld",
    optional: "optional",
    headcountOptions: ["1–2", "3–5", "6–10", "mehr als 10"],
    timeframeOptions: ["So früh wie möglich", "In 3–6 Monaten", "In 6–12 Monaten", "Wir sondieren zunächst"],
    facilityOptions: ["Krankenhaus", "Altenpflegeeinrichtung", "Ambulanter Dienst", "Reha-Klinik", "Sonstige"],
    germanLevelOptions: ["A2", "B1", "B2", "C1"],
    experienceOptions: ["Berufseinsteiger", "1–3 Jahre", "3–5 Jahre", "mehr als 5 Jahre"],
  },
  footer: {
    blurb:
      "FairAdvicer GmbH begleitet Pflegefachkräfte aus aller Welt nach Deutschland – von der Rekrutierung über die Anerkennung bis zur langfristigen Integration.",
    pages: "Seiten",
    legal: "Rechtliches",
    more: "Weiteres",
    portal: "Bewerberportal",
    social: "Folgen Sie uns",
    rights: "Alle Rechte vorbehalten.",
    langNote: "Sprache wählen",
  },
  legal: {
    impressumTitle: "Impressum",
    privacyTitle: "Datenschutzerklärung",
    termsTitle: "Allgemeine Geschäftsbedingungen",
    germanNotice: "",
  },
};

export default de;
