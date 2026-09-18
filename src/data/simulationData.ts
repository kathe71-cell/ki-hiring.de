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
    primaryStrength: "Löst Stagnation in zögerlichen Prozessen durch schnelle, pragmatische Pilot-Iterationen auf.",
    blindspotCounterweight: "Fokussiert das Gespräch auf zügige Entscheidungswege in stark konsensorientierten Teams.",
    focusArea: "Umsetzung & Entscheidungsfreude",
    potentialImpulse: "Fokus auf zügige Entscheidungszyklen",
    radarDescription: "Hilfreicher Impuls für Organisationen, die an langen Abstimmungswegen arbeiten möchten."
  },
  systems: {
    title: "Der Systemische Architekt",
    badge: "Systems Thinker",
    tagline: "Verbindet hohe Eigenständigkeit mit strukturellen Sicherheitsnetzen.",
    primaryStrength: "Etabliert verlässliche Leitplanken, ohne die operative Flexibilität zu drosseln.",
    blindspotCounterweight: "Schützt dynamische Teams vor unübersichtlicher Fragmentierung.",
    focusArea: "Struktur & Prozessqualität",
    potentialImpulse: "Verstärkt die operative Prozessstabilität",
    radarDescription: "Geeignet als Diskussionsansatz für Teams in Wachstums- und Strukturierungsphasen."
  },
  truthTeller: {
    title: "Der Konstruktive Challenger",
    badge: "Radical Candor",
    tagline: "Steht für inhaltliche Aufrichtigkeit gepaart mit hoher Lösungsorientierung.",
    primaryStrength: "Spricht ungelöste Widersprüche frühzeitig und sachlich an.",
    blindspotCounterweight: "Bringt wertvolle Perspektiven in den Austausch und stärkt die offene Gesprächskultur.",
    focusArea: "Offene Kommunikation & Reflexion",
    potentialImpulse: "Fördert frühzeitige Problemklärung",
    radarDescription: "Bietet einen Anstoß für Teams, die ihren inhaltlichen Austausch vertiefen möchten."
  }
};

export const COMPARISON_DATA = [
  {
    criterion: "Erhebungsmethode",
    legacy: "Statische Selbstauskunft (Fragebögen, CV-Schlagworte). Anfällig für geschönte Antworten.",
    ki_hiring: "Interaktive Praxisszenarien. Ermöglicht die Selbstreflexion in 3 typischen Berufsfall-Entscheidungen.",
    impact: "Konkreter Gesprächseinstieg"
  },
  {
    criterion: "Ansatz zur Vorbereitung",
    legacy: "Reines Abfragen vorgefertigter Lebenslauf-Stationen im Erstgespräch.",
    ki_hiring: "Strukturierter Austausch über bevorzugte Handlungsoptionen im Alltag.",
    impact: "Reflexion im Bewerbungsprozess"
  },
  {
    criterion: "Zeitaufwand für die Demo",
    legacy: "Aufwendige Fragebögen mit 20–40 Minuten Bearbeitungszeit.",
    ki_hiring: "Kompakte 3 Szenarien mit sofort sichtbarer Übersicht für das Gespräch.",
    impact: "Kurze Bearbeitungsdauer"
  },
  {
    criterion: "Transparenz der Auswertung",
    legacy: "Oft unklare Punktergebnisse ohne Erklärung der dahinterliegenden Kriterien.",
    ki_hiring: "Regelbasierte Herleitung der Vektor-Punkte anhand der ausgewählten Handlungsoptionen.",
    impact: "Nachvollziehbarer Demo-Check"
  },
  {
    criterion: "Einsatz im Bewerbungsprozess",
    legacy: "Oft als starre Filterhürde ohne gemeinsamen Dialog genutzt.",
    ki_hiring: "Als kostenlose Demo und Impulsgeber für das Bewerbungsgespräch konzipiert.",
    impact: "Kein starrer Eignungstest"
  }
];
