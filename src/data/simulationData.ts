import { SimulationStep, CandidateArchetype } from '../types';

export const SIMULATION_STEPS: SimulationStep[] = [
  {
    id: 1,
    scenarioTitle: "Szenario 1: Kritischer Release-Konflikt 2 Stunden vor Kunden-Rollout",
    urgency: "Operatives Priorisierungs-Dilemma",
    context: "Freitag, 16:30 Uhr. Der wichtigste Enterprise-Kunde erwartet am Montag den Rollout eines Kernfeatures. In den End-to-End-Tests entdeckst du eine seltene Race-Condition unter Last. Das Produkt-Management drängt: 'Wir müssen live gehen, das Risiko betrifft weniger als 1 % der Fälle.'",
    options: [
      {
        id: "opt_1a",
        actionText: "Release stoppen & transparenter Stakeholder-Sync",
        subtext: "Kein Rollout mit bekannten Integritätsrisiken. Sofortige Einberufung der Kernentwickler, um den Patch am Samstagmorgen sauber bereitzustellen.",
        dimensionDeltas: {
          execution_velocity: 65,
          autonomy_locus: 90,
          risk_resilience: 45,
          conflict_catalyst: 95,
          feedback_velocity: 85,
          innovation_drift: 70
        },
        archetypeInfluence: "Pragmatic Truth-Teller"
      },
      {
        id: "opt_1b",
        actionText: "Canary-Deployment mit Feature-Flag & Live-Tracing",
        subtext: "Rollout nur für 5 % unkritische Pilot-Accounts freischalten, kombiniert mit automatisiertem Rollback-Trigger und Echtzeit-Monitoring.",
        dimensionDeltas: {
          execution_velocity: 92,
          autonomy_locus: 88,
          risk_resilience: 85,
          conflict_catalyst: 75,
          feedback_velocity: 90,
          innovation_drift: 88
        },
        archetypeInfluence: "High-Velocity Systems Thinker"
      },
      {
        id: "opt_1c",
        actionText: "Dem Go-Live-Entscheid folgen, Incident-Runbook vorbereiten",
        subtext: "Entscheidung beim Produktverantwortlichen belassen, jedoch Bereitschaftsdienst für das Wochenende aufsetzen und Hotfix-Pipeline scharfschalten.",
        dimensionDeltas: {
          execution_velocity: 75,
          autonomy_locus: 55,
          risk_resilience: 60,
          conflict_catalyst: 50,
          feedback_velocity: 65,
          innovation_drift: 50
        },
        archetypeInfluence: "Stability & Process Custodian"
      }
    ]
  },
  {
    id: 2,
    scenarioTitle: "Szenario 2: Unvorhergesehener Strategiewechsel im All-Hands Meeting",
    urgency: "Strategisches Ausrichtungs-Dilemma",
    context: "Der CEO kündigt überraschend an, die aktuellen Quartalsziele auszusetzen und die Kapazitäten auf ein neues, unvalidiertes Software-Feature zu konzentrieren. Im Team machen sich Skepsis und Unruhe breit, da laufende Kundenprojekte gefährdet sind.",
    options: [
      {
        id: "opt_2a",
        actionText: "Offene, datengestützte Validierung im Meeting anstoßen",
        subtext: "Direkte Frage nach Kundenfeedback und Evidenz für die neue Priorität. Den Fokus konstruktiv auf geschäftliche Risiken und Opportunitätskosten lenken.",
        dimensionDeltas: {
          execution_velocity: 70,
          autonomy_locus: 95,
          risk_resilience: 70,
          conflict_catalyst: 92,
          feedback_velocity: 88,
          innovation_drift: 80
        },
        archetypeInfluence: "Intellectual Challenger"
      },
      {
        id: "opt_2b",
        actionText: "48-Stunden-Prototyp als Entscheidungsbasis vorschlagen",
        subtext: "Ein schlankes 2-Personen-Team baut binnen 48 Stunden einen interaktiven Klickdummy für 10 schnelle Kundeninterviews, während die Core-Roadmap weiterläuft.",
        dimensionDeltas: {
          execution_velocity: 95,
          autonomy_locus: 88,
          risk_resilience: 90,
          conflict_catalyst: 80,
          feedback_velocity: 92,
          innovation_drift: 94
        },
        archetypeInfluence: "Agile Catalyst"
      },
      {
        id: "opt_2c",
        actionText: "1:1 Gespräch mit der Führungskraft suchen & Team auffangen",
        subtext: "Die Bedenken diskret im bilateralen Austausch adressieren, während im Team gezielt Orientierung und Verlässlichkeit vermittelt werden.",
        dimensionDeltas: {
          execution_velocity: 65,
          autonomy_locus: 65,
          risk_resilience: 55,
          conflict_catalyst: 65,
          feedback_velocity: 80,
          innovation_drift: 60
        },
        archetypeInfluence: "Culture & Empathy Anchor"
      }
    ]
  },
  {
    id: 3,
    scenarioTitle: "Szenario 3: Fehlerkultur nach kritischem Produktionsausfall",
    urgency: "Kollaboratives Krisen- & Lern-Dilemma",
    context: "Eine fehlerhafte Konfiguration eines neuen Teammitglieds hat einen 30-minütigen Ausfall der zentralen Schnittstelle verursacht. In der anschließenden Retrospektive deutet sich eine defensive Atmosphäre mit gegenseitigen Schuldzuweisungen an.",
    options: [
      {
        id: "opt_3a",
        actionText: "Fokus auf Systemschutz: Blameless Post-Mortem leiten",
        subtext: "'Wenn ein einzelner Befehl das System lahmlegen kann, hat unsere Infrastruktur versagt, nicht der Mensch.' Sofortige Implementierung automatisierter Prüfschranken.",
        dimensionDeltas: {
          execution_velocity: 82,
          autonomy_locus: 90,
          risk_resilience: 80,
          conflict_catalyst: 88,
          feedback_velocity: 95,
          innovation_drift: 85
        },
        archetypeInfluence: "Systemic Leader"
      },
      {
        id: "opt_3b",
        actionText: "Live-Root-Cause-Analyse als Team-Lerneinheit nutzen",
        subtext: "Aus dem Vorfall eine strukturierte Architektur-Session machen, in der das Team gemeinsam Schwachstellen aufdeckt und dokumentiert.",
        dimensionDeltas: {
          execution_velocity: 88,
          autonomy_locus: 85,
          risk_resilience: 88,
          conflict_catalyst: 85,
          feedback_velocity: 92,
          innovation_drift: 90
        },
        archetypeInfluence: "Growth Multiplier"
      },
      {
        id: "opt_3c",
        actionText: "Mehrstufige Freigabe- und Kontrollprozesse etablieren",
        subtext: "Einführung verbindlicher Vier-Augen-Freigaben für alle Produktionsänderungen, um künftige Vorfälle prozessual auszuschließen.",
        dimensionDeltas: {
          execution_velocity: 55,
          autonomy_locus: 50,
          risk_resilience: 40,
          conflict_catalyst: 60,
          feedback_velocity: 65,
          innovation_drift: 48
        },
        archetypeInfluence: "Stability Guardian"
      }
    ]
  }
];

export const ARCHETYPES: Record<string, CandidateArchetype> = {
  catalyst: {
    title: "Der Strategische Impulsgeber",
    badge: "Agile Catalyst",
    tagline: "Hohe Umsetzungsfrequenz kombiniert mit konstruktiver, lösungsorientierter Direktheit.",
    primaryStrength: "Löst Stagnation in zögerlichen Prozessen durch schnelle, messbare Pilot-Iterationen auf.",
    blindspotCounterweight: "Verhindert überlange Diskussionsschleifen in stark konsensorientierten Teams.",
    teamCompatibilityScore: 94,
    cultureAddDelta: "+35 % schnellere Entscheidungszyklen",
    radarDescription: "Besonders wirksam in Organisationen, die an langen Abstimmungswegen leiden."
  },
  systems: {
    title: "Der Systemische Architekt",
    badge: "Systems Thinker",
    tagline: "Verbindet hohe Eigenständigkeit mit strukturellen Sicherheitsnetzen.",
    primaryStrength: "Etabliert fehlertolerante Leitplanken, ohne die operative Geschwindigkeit zu drosseln.",
    blindspotCounterweight: "Schützt wachstumsstarke Teams vor chaotischer Fragmentierung und technischer Schuld.",
    teamCompatibilityScore: 91,
    cultureAddDelta: "+40 % operative Prozessstabilität",
    radarDescription: "Ideal für dynamische Teams in der Skalierungsphase."
  },
  truthTeller: {
    title: "Der Konstruktive Challenger",
    badge: "Radical Candor",
    tagline: "Steht für inhaltliche Aufrichtigkeit gepaart mit hoher Teamloyalität.",
    primaryStrength: "Spricht ungelöste Widersprüche offen an, bevor sie zu kostenintensiven Fehlentwicklungen führen.",
    blindspotCounterweight: "Bricht Konformitäts-Tendenzen auf und stärkt die Diskussionskultur im Team.",
    teamCompatibilityScore: 89,
    cultureAddDelta: "+48 % frühere Fehlererkennung",
    radarDescription: "Bringt wertvolle Reibung in Teams, die offene Kontroversen bisher gemieden haben."
  }
};

export const COMPARISON_DATA = [
  {
    criterion: "Erhebungsmethode",
    legacy: "Statische Selbstauskunft (Fragebögen, CV-Schlagworte). Anfällig für geschönte Antworten.",
    ki_hiring: "Interaktive Situational Judgement Simulationen. Misst konkretes Verhalten in realistischen Dilemma-Szenarien.",
    impact: "Objektive Verhaltensdaten"
  },
  {
    criterion: "Matching-Ansatz",
    legacy: "Reiner Gleichheitsabgleich. Sucht nach Profilen, die dem bestehenden Team gleichen (Gefahr von Einseitigkeit).",
    ki_hiring: "Komplementäre Ergänzung (Culture-Add). Identifiziert gezielt Fähigkeiten und Denkweisen, die dem Team fehlen.",
    impact: "Ausgleich blinder Flecken"
  },
  {
    criterion: "Zeitaufwand für Talente",
    legacy: "25–40 Minuten ausfüllen von Fragebögen. Hohe Drop-off-Raten.",
    ki_hiring: "Kompakte 3-Minuten-Interaktion mit sofortigem qualitativem Mehrwert für die Bewerber.",
    impact: "< 4 % Abbruchquote"
  },
  {
    criterion: "Unternehmens-Audit",
    legacy: "Subjektive Fragebögen der HR-Abteilung, die oft Wunschbilder statt Realität abbilden.",
    ki_hiring: "Empirische Team-Triangulation: Echte Verhaltensmuster statt Marketing-Selbstdarstellung.",
    impact: "Realistisches Team-Profil"
  },
  {
    criterion: "Regulatorik & Ethik",
    legacy: "Oft unklare Kriterien und schwer nachvollziehbare Punktevergaben.",
    ki_hiring: "Vollständig nachvollziehbare Verhaltensprofile ohne Vorurteile, Diskriminierung oder undurchsichtige Algorithmen.",
    impact: "100 % nachvollziehbar"
  }
];
