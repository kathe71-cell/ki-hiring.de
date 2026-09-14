import { SimulationStep } from '../types';

export interface IndustryTrack {
  id: string;
  name: string;
  icon: string;
  badge: string;
  description: string;
  scenarios: SimulationStep[];
}

export const INDUSTRY_TRACKS: IndustryTrack[] = [
  {
    id: "general",
    name: "Allgemein & Management",
    icon: "Briefcase",
    badge: "Cross-Industry",
    description: "Operative Priorisierung, Stakeholder-Führung & Teamkultur in modernen Unternehmen",
    scenarios: [
      {
        id: 1,
        scenarioTitle: "Szenario 1: Kritischer Projektkonflikt 2 Stunden vor Kunden-Freigabe",
        urgency: "Operatives Priorisierungs-Dilemma",
        context: "Freitag, 16:30 Uhr. Der wichtigste Großkunde erwartet am Montag die feierliche Freigabe des Projekts. In der finalen Prüfung entdeckst du eine Abweichung im Datenabgleich. Die Leitung drängt: 'Wir müssen live gehen, das Risiko betrifft weniger als 1 % der Fälle.'",
        options: [
          {
            id: "gen_1a",
            actionText: "Freigabe stoppen & transparenter Stakeholder-Sync",
            subtext: "Keine Übergabe mit bekannten Qualitätsrisiken. Sofortige Einberufung der Kernverantwortlichen, um die Bereinigung am Samstagmorgen sauber durchzuführen.",
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
            id: "gen_1b",
            actionText: "Schrittweiser Rollout mit Sicherheitskontrollen & Live-Monitoring",
            subtext: "Freigabe zunächst nur für unkritische Pilotbereiche freischalten, kombiniert mit klarem Notfallplan und sofortigem Abgleich.",
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
            id: "gen_1c",
            actionText: "Pragmatischer Feature-Bypass: Fehlerhafte Funktion vorübergehend ausblenden",
            subtext: "Das Gesamtprojekt pünktlich übergeben, jedoch das unsichere Modul für das Wochenende deaktivieren und am Dienstag nachreichen.",
            dimensionDeltas: {
              execution_velocity: 88,
              autonomy_locus: 92,
              risk_resilience: 80,
              conflict_catalyst: 82,
              feedback_velocity: 86,
              innovation_drift: 90
            },
            archetypeInfluence: "Agile Catalyst"
          },
          {
            id: "gen_1d",
            actionText: "Direktes Krisentelefonat mit dem Großkunden führen",
            subtext: "Den Kunden proaktiv anrufen, die Situation sachlich erklären und eine gemeinsame Risikoeinschätzung vereinbaren.",
            dimensionDeltas: {
              execution_velocity: 78,
              autonomy_locus: 94,
              risk_resilience: 88,
              conflict_catalyst: 92,
              feedback_velocity: 92,
              innovation_drift: 75
            },
            archetypeInfluence: "Intellectual Challenger"
          },
          {
            id: "gen_1e",
            actionText: "Dem Leitungsentscheid folgen, Notfall-Bereitschaft aufsetzen",
            subtext: "Entscheidung bei der Gesamtleitung belassen, jedoch Rufbereitschaft fürs Wochenende organisieren, um bei Unstimmigkeiten sofort einzugreifen.",
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
        context: "Die Geschäftsführung kündigt überraschend an, die aktuellen Quartalsziele auszusetzen und alle Kapazitäten auf ein neues, unvalidiertes Marktprojekt zu konzentrieren. Im Team machen sich Skepsis und Unruhe breit, da laufende Kundenprojekte gefährdet sind.",
        options: [
          {
            id: "gen_2a",
            actionText: "Offene, datengestützte Validierung im Meeting anstoßen",
            subtext: "Direkte Frage nach Marktfedback und Evidenz für die neue Priorität. Den Fokus konstruktiv auf geschäftliche Risiken und Opportunitätskosten lenken.",
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
            id: "gen_2b",
            actionText: "48-Stunden-Pilotphase als Entscheidungsbasis vorschlagen",
            subtext: "Ein schlankes 2-Personen-Team testet binnen 48 Stunden das Konzept an ersten Kunden ab, während das Kerngeschäft ungestört weiterläuft.",
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
            id: "gen_2c",
            actionText: "Hybrider Kompromiss: 70 % Kerngeschäft, 30 % Innovationsprojekt",
            subtext: "Klare Kapazitätsgrenzen definieren, sodass das Bestandsteam nicht überlastet wird und das Neugeschäft trotzdem anläuft.",
            dimensionDeltas: {
              execution_velocity: 85,
              autonomy_locus: 85,
              risk_resilience: 82,
              conflict_catalyst: 84,
              feedback_velocity: 88,
              innovation_drift: 85
            },
            archetypeInfluence: "High-Velocity Systems Thinker"
          },
          {
            id: "gen_2d",
            actionText: "1:1 Gespräch mit der Führungskraft suchen & Team auffangen",
            subtext: "Die Bedenken diskret im bilateralen Austausch adressieren, während im Team gezielt Orientierung, Ruhe und Verlässlichkeit vermittelt werden.",
            dimensionDeltas: {
              execution_velocity: 65,
              autonomy_locus: 65,
              risk_resilience: 55,
              conflict_catalyst: 65,
              feedback_velocity: 80,
              innovation_drift: 60
            },
            archetypeInfluence: "Culture & Empathy Anchor"
          },
          {
            id: "gen_2e",
            actionText: "Die neue Priorität sofort voll adaptieren und Roadmap umbauen",
            subtext: "Keine Reibungsverluste erzeugen, sondern die Management-Entscheidung unverzüglich in klare Wochenaufgaben fürs Team übersetzen.",
            dimensionDeltas: {
              execution_velocity: 88,
              autonomy_locus: 60,
              risk_resilience: 70,
              conflict_catalyst: 50,
              feedback_velocity: 75,
              innovation_drift: 78
            },
            archetypeInfluence: "Stability & Process Custodian"
          }
        ]
      },
      {
        id: 3,
        scenarioTitle: "Szenario 3: Fehlerkultur nach kritischem Zwischenfall",
        urgency: "Kollaboratives Krisen- & Lern-Dilemma",
        context: "Ein falscher Parameter eines neuen Teammitglieds hat einen einstündigen Stillstand des Kundenservices verursacht. In der anschließenden Retrospektive deutet sich eine defensive Atmosphäre mit gegenseitigen Schuldzuweisungen an.",
        options: [
          {
            id: "gen_3a",
            actionText: "Fokus auf Systemschutz: Sachliche Aufarbeitung ohne Schuldzuweisung",
            subtext: "'Wenn ein einzelner Klick den Service lahmlegen kann, hat unser Prozess versagt, nicht der Kollege.' Sofortige Implementierung automatisierter Prüfschranken.",
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
            id: "gen_3b",
            actionText: "Live-Ursachenanalyse als Team-Lerneinheit nutzen",
            subtext: "Aus dem Vorfall einen strukturierten Workshop machen, in dem das Team gemeinsam Schwachstellen aufdeckt und dokumentiert.",
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
            id: "gen_3c",
            actionText: "Mentoring & Buddy-Prinzip für neue Kollegen etablieren",
            subtext: "Einen erfahrenen Senior-Mitarbeiter zur Seite stellen, um Sicherheit aufzubauen und das Teamklima sofort zu entspannen.",
            dimensionDeltas: {
              execution_velocity: 70,
              autonomy_locus: 75,
              risk_resilience: 78,
              conflict_catalyst: 72,
              feedback_velocity: 88,
              innovation_drift: 68
            },
            archetypeInfluence: "Culture & Empathy Anchor"
          },
          {
            id: "gen_3d",
            actionText: "Radikale Transparenz: Den Vorfall und die Lösung intern publizieren",
            subtext: "Einen offenen 'Fehler des Monats'-Report teilen, damit andere Abteilungen aus demselben Szenario vorbeugend lernen.",
            dimensionDeltas: {
              execution_velocity: 84,
              autonomy_locus: 94,
              risk_resilience: 86,
              conflict_catalyst: 95,
              feedback_velocity: 96,
              innovation_drift: 88
            },
            archetypeInfluence: "Pragmatic Truth-Teller"
          },
          {
            id: "gen_3e",
            actionText: "Mehrstufige Freigabe- und Kontrollprozesse etablieren",
            subtext: "Einführung verbindlicher Vier-Augen-Freigaben für alle Kernentscheidungen, um künftige Vorfälle prozessual auszuschließen.",
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
    ]
  },
  {
    id: "tech",
    name: "Tech, Software & IT",
    icon: "Code",
    badge: "Engineering",
    description: "Architektur-Dilemmata, Refactoring vs. Feature-Druck, Störfall-Management & Code-Qualität",
    scenarios: [
      {
        id: 1,
        scenarioTitle: "Szenario 1: Kritischer Bug in Produktions-Pipeline kurz vor Release",
        urgency: "Engineering-Qualitäts-Dilemma",
        context: "Freitag 17:00 Uhr: Das neue Core-Billing-Update soll montags live gehen. Ein Junior-Dev findet im Lasttest einen Memory Leak unter extremem Traffic (ca. 0.5% der Nutzer). Der Head of Product pocht auf Einhaltung der Marketing-Deadline.",
        options: [
          {
            id: "tech_1a",
            actionText: "Striktes Veto gegen Rollout einlegen & Hotfix-Session planen",
            subtext: "Kein Code mit bekannten Memory Leaks im Hauptsystem. Eindeutiger Vorrang für Systemstabilität und Datenintegrität.",
            dimensionDeltas: {
              execution_velocity: 65,
              autonomy_locus: 92,
              risk_resilience: 50,
              conflict_catalyst: 95,
              feedback_velocity: 85,
              innovation_drift: 72
            },
            archetypeInfluence: "Pragmatic Truth-Teller"
          },
          {
            id: "tech_1b",
            actionText: "Feature-Flag & automatisierter Rollback-Grenzwert",
            subtext: "Aktivierung nur für 2 % unkritische Tenants mit Auto-Trigger bei Speicherauslastung > 75 %.",
            dimensionDeltas: {
              execution_velocity: 94,
              autonomy_locus: 88,
              risk_resilience: 88,
              conflict_catalyst: 78,
              feedback_velocity: 90,
              innovation_drift: 92
            },
            archetypeInfluence: "High-Velocity Systems Thinker"
          },
          {
            id: "tech_1c",
            actionText: "Pragmatischer Circuit-Breaker & periodischer Container-Restart",
            subtext: "Erhöhung der Instanzenanzahl und automatischer Neustart bei Schwellenwert, um den Go-Live terminlich zu retten und den Patch am Montag bereitzustellen.",
            dimensionDeltas: {
              execution_velocity: 92,
              autonomy_locus: 90,
              risk_resilience: 85,
              conflict_catalyst: 75,
              feedback_velocity: 86,
              innovation_drift: 90
            },
            archetypeInfluence: "Agile Catalyst"
          },
          {
            id: "tech_1d",
            actionText: "Gemeinsamer Ad-hoc Pair-Programming-Sprint bis Mitternacht",
            subtext: "Senior- und Junior-Devs setzen sich sofort gemeinsam an den Debugger, um den Leak noch heute Nacht sauber zu patchen.",
            dimensionDeltas: {
              execution_velocity: 86,
              autonomy_locus: 82,
              risk_resilience: 88,
              conflict_catalyst: 82,
              feedback_velocity: 94,
              innovation_drift: 82
            },
            archetypeInfluence: "Growth Multiplier"
          },
          {
            id: "tech_1e",
            actionText: "Release unter verstärktem Weekend-On-Call absegnen",
            subtext: "Dem Product-Entscheid folgen, aber Monitoring-Alarme hochsetzen und Bereitschaftsplan aufstellen.",
            dimensionDeltas: {
              execution_velocity: 78,
              autonomy_locus: 58,
              risk_resilience: 62,
              conflict_catalyst: 52,
              feedback_velocity: 68,
              innovation_drift: 55
            },
            archetypeInfluence: "Stability & Process Custodian"
          }
        ]
      },
      {
        id: 2,
        scenarioTitle: "Szenario 2: Radikales Architektur-Refactoring vs. neue Kundenfeatures",
        urgency: "Technische Schuld vs. Time-to-Market",
        context: "Die Entwicklungsgeschwindigkeit sinkt durch gewachsene Legacy-Codebasen spürbar. Der Vertrieb drängt jedoch auf drei neue Sonderfunktionen für anstehende Vertragsabschlüsse.",
        options: [
          {
            id: "tech_2a",
            actionText: "Strikter 20 % Refactoring-Sprint je Iteration vereinbaren",
            subtext: "Jedes neue Feature muss 20 % Bereinigung der betroffenen Module beinhalten, um die Code-Gesundheit schrittweise zu sichern.",
            dimensionDeltas: {
              execution_velocity: 82,
              autonomy_locus: 88,
              risk_resilience: 80,
              conflict_catalyst: 85,
              feedback_velocity: 90,
              innovation_drift: 82
            },
            archetypeInfluence: "Systems Thinker"
          },
          {
            id: "tech_2b",
            actionText: "Pragmatische Micro-Services für Neukunden isolieren",
            subtext: "Neue Features unabhängig auf moderner Infrastruktur aufbauen, um Abschlüsse nicht zu gefährden und Altsysteme zu kapseln.",
            dimensionDeltas: {
              execution_velocity: 92,
              autonomy_locus: 90,
              risk_resilience: 86,
              conflict_catalyst: 82,
              feedback_velocity: 88,
              innovation_drift: 95
            },
            archetypeInfluence: "Agile Catalyst"
          },
          {
            id: "tech_2c",
            actionText: "Event-getriebene Strangler-Fig-Migration aufsetzen",
            subtext: "Schrittweises Umleiten des Datenverkehrs auf neue Schnittstellen ohne Downtime und ohne den Vertrieb zu blockieren.",
            dimensionDeltas: {
              execution_velocity: 88,
              autonomy_locus: 94,
              risk_resilience: 90,
              conflict_catalyst: 80,
              feedback_velocity: 92,
              innovation_drift: 92
            },
            archetypeInfluence: "High-Velocity Systems Thinker"
          },
          {
            id: "tech_2d",
            actionText: "Wirtschaftliche ROI-Gegenüberstellung im Führungskreis präsentieren",
            subtext: "Veranschaulichen, wie viel Entwicklungsbudget durch Bugs in Legacy-Modulen monatlich verbrannt wird, um ein Refactoring-Quartal freizugeben.",
            dimensionDeltas: {
              execution_velocity: 74,
              autonomy_locus: 92,
              risk_resilience: 76,
              conflict_catalyst: 94,
              feedback_velocity: 86,
              innovation_drift: 78
            },
            archetypeInfluence: "Intellectual Challenger"
          },
          {
            id: "tech_2e",
            actionText: "Vertriebs-Features priorisieren, Refactoring auf Quartalspause schieben",
            subtext: "Kundenwünsche haben absoluten Vorrang, die technische Schuld wird in einem dedizierten Wartungsfenster angegangen.",
            dimensionDeltas: {
              execution_velocity: 75,
              autonomy_locus: 60,
              risk_resilience: 55,
              conflict_catalyst: 58,
              feedback_velocity: 70,
              innovation_drift: 60
            },
            archetypeInfluence: "Stability Guardian"
          }
        ]
      },
      {
        id: 3,
        scenarioTitle: "Szenario 3: Ausfall der Hauptdatenbank nach Fehl-Migration",
        urgency: "Incident-Management & Post-Mortem",
        context: "Ein Schema-Update hat die Produktionsdatenbank für 45 Minuten blockiert. Entwickler und Operations beschuldigen sich gegenseitig im Slack-Kanal.",
        options: [
          {
            id: "tech_3a",
            actionText: "Blameless Post-Mortem moderieren & CI/CD Migrations-Checks erzwingen",
            subtext: "Schuldfrage sofort abmoderieren. Automatisierte Dry-Run-Validierung in der Pipeline verankern, damit Fehler technisch unmöglich werden.",
            dimensionDeltas: {
              execution_velocity: 85,
              autonomy_locus: 92,
              risk_resilience: 82,
              conflict_catalyst: 90,
              feedback_velocity: 96,
              innovation_drift: 86
            },
            archetypeInfluence: "Systemic Leader"
          },
          {
            id: "tech_3b",
            actionText: "Sofortigen Chaos-Engineering Testlauf zur Resilienz-Prüfung ansetzen",
            subtext: "Gemeinsam gezielt Ausfallszenarien im Staging nachstellen, um den Zusammenhalt und die Krisenreaktion zu trainieren.",
            dimensionDeltas: {
              execution_velocity: 90,
              autonomy_locus: 86,
              risk_resilience: 90,
              conflict_catalyst: 86,
              feedback_velocity: 92,
              innovation_drift: 94
            },
            archetypeInfluence: "Growth Multiplier"
          },
          {
            id: "tech_3c",
            actionText: "Automatisches Shadowing & Zero-Downtime Migrationen implementieren",
            subtext: "Zukünftige Datenbank-Updates nur noch über Blue-Green-Klon mit Replikationsabgleich laufen lassen.",
            dimensionDeltas: {
              execution_velocity: 92,
              autonomy_locus: 90,
              risk_resilience: 92,
              conflict_catalyst: 80,
              feedback_velocity: 90,
              innovation_drift: 92
            },
            archetypeInfluence: "High-Velocity Systems Thinker"
          },
          {
            id: "tech_3d",
            actionText: "Offene Team-Retrospektive mit externem Agile Coach durchführen",
            subtext: "Die Spannungen zwischen Dev und Ops auf persönlicher Ebene klären und gemeinsame Team-Rollen neu definieren.",
            dimensionDeltas: {
              execution_velocity: 70,
              autonomy_locus: 75,
              risk_resilience: 75,
              conflict_catalyst: 85,
              feedback_velocity: 92,
              innovation_drift: 72
            },
            archetypeInfluence: "Culture & Empathy Anchor"
          },
          {
            id: "tech_3e",
            actionText: "DBA-Sonderfreigaben und striktes Change-Advisory-Board einführen",
            subtext: "Keine Datenbank-Änderung mehr ohne zweistufige manuelle Abnahme durch leitende Administratoren.",
            dimensionDeltas: {
              execution_velocity: 52,
              autonomy_locus: 48,
              risk_resilience: 42,
              conflict_catalyst: 62,
              feedback_velocity: 64,
              innovation_drift: 45
            },
            archetypeInfluence: "Stability Guardian"
          }
        ]
      }
    ]
  },
  {
    id: "sales",
    name: "Vertrieb, Sales & Kunden",
    icon: "Target",
    badge: "Revenue & Growth",
    description: "Rabattverhandlungen, Pipeline-Druck, Kundenunruhe & ethischer Abschluss vs. Churn",
    scenarios: [
      {
        id: 1,
        scenarioTitle: "Szenario 1: Enterprise-Abschluss kurz vor Quartalsende wackelt",
        urgency: "Quartalsziel vs. Margen-Integrität",
        context: "Es fehlen 50.000 € zum Quartalsziel. Ein Schlüsselkunde fordert 35 % Sonder-Rabatt und individuelle Anpassungen, um noch heute zu unterschreiben. Das gefährdet spätere Deckungsbeiträge.",
        options: [
          {
            id: "sales_1a",
            actionText: "Rabatt ablehnen, stattdessen Mehrwert-Paket und längere Laufzeit verhandeln",
            subtext: "Preisdisziplin wahren. Keine ruinösen Rabatte, sondern gezielte Onboarding-Leistungen oder Mehrjahres-Vorteile bieten.",
            dimensionDeltas: {
              execution_velocity: 78,
              autonomy_locus: 92,
              risk_resilience: 80,
              conflict_catalyst: 88,
              feedback_velocity: 86,
              innovation_drift: 75
            },
            archetypeInfluence: "Pragmatic Truth-Teller"
          },
          {
            id: "sales_1b",
            actionText: "Abschluss sichern mit bedingtem Rabatt auf sofortige Case-Study & Referenz",
            subtext: "Den Preisnachlass an eine vertragliche Referenz-Story und 3 Neukunden-Empfehlungen koppeln.",
            dimensionDeltas: {
              execution_velocity: 94,
              autonomy_locus: 88,
              risk_resilience: 85,
              conflict_catalyst: 82,
              feedback_velocity: 88,
              innovation_drift: 92
            },
            archetypeInfluence: "Agile Catalyst"
          },
          {
            id: "sales_1c",
            actionText: "Staffelmodell nach Nutzungsvolumen anbieten (Pay-as-you-grow)",
            subtext: "Günstiger Einstieg für die ersten 3 Monate, der sich bei voller Nutzung automatisch auf den Normalpreis anhebt.",
            dimensionDeltas: {
              execution_velocity: 90,
              autonomy_locus: 90,
              risk_resilience: 88,
              conflict_catalyst: 80,
              feedback_velocity: 88,
              innovation_drift: 90
            },
            archetypeInfluence: "High-Velocity Systems Thinker"
          },
          {
            id: "sales_1d",
            actionText: "Verhandlungsführung an den Sales Director eskalieren",
            subtext: "Auf Top-Management-Ebene verhandeln lassen, um persönliche Abschlussbeziehungen nicht zu belasten.",
            dimensionDeltas: {
              execution_velocity: 70,
              autonomy_locus: 62,
              risk_resilience: 60,
              conflict_catalyst: 65,
              feedback_velocity: 72,
              innovation_drift: 60
            },
            archetypeInfluence: "Culture & Empathy Anchor"
          },
          {
            id: "sales_1e",
            actionText: "Rabatt gewähren, um das Quartalsziel der Abteilung sicher zu treffen",
            subtext: "Die Zielerreichung hat Priorität. Die Sonderkonditionen intern über die Geschäftsführung freizeichnen lassen.",
            dimensionDeltas: {
              execution_velocity: 72,
              autonomy_locus: 60,
              risk_resilience: 50,
              conflict_catalyst: 55,
              feedback_velocity: 68,
              innovation_drift: 50
            },
            archetypeInfluence: "Stability & Process Custodian"
          }
        ]
      },
      {
        id: 2,
        scenarioTitle: "Szenario 2: Wütender Schlüsselkunde nach Service-Verzögerung",
        urgency: "Krisenkommunikation & Churn-Prävention",
        context: "Ein langjähriger Top-Kunde droht mit sofortiger Kündigung, weil eine versprochene Produkteigenschaft 3 Wochen Verspätung hat.",
        options: [
          {
            id: "sales_2a",
            actionText: "Persönlicher Vor-Ort-Termin mit schonungsloser Offenheit und verbindlichem Plan",
            subtext: "Keine Ausflüchte suchen. Den Kunden persönlich treffen, Ursachen transparent machen und wöchentliche Meilensteine garantieren.",
            dimensionDeltas: {
              execution_velocity: 82,
              autonomy_locus: 94,
              risk_resilience: 86,
              conflict_catalyst: 94,
              feedback_velocity: 92,
              innovation_drift: 78
            },
            archetypeInfluence: "Intellectual Challenger"
          },
          {
            id: "sales_2b",
            actionText: "Sofortige Übergangslösung mit manuellem VIP-Support bereitstellen",
            subtext: "Ein internes Taskforce-Team übernimmt die manuelle Bearbeitung der Kundenfälle, bis das System fertig ist.",
            dimensionDeltas: {
              execution_velocity: 95,
              autonomy_locus: 86,
              risk_resilience: 88,
              conflict_catalyst: 80,
              feedback_velocity: 88,
              innovation_drift: 90
            },
            archetypeInfluence: "Growth Multiplier"
          },
          {
            id: "sales_2c",
            actionText: "Direkter Zugang zu den Chef-Entwicklern als Co-Creation-Partner",
            subtext: "Den Kunden in die Beta-Gruppe einladen und seine Sonderwünsche direkt in der Endphase einfließen lassen.",
            dimensionDeltas: {
              execution_velocity: 88,
              autonomy_locus: 90,
              risk_resilience: 85,
              conflict_catalyst: 86,
              feedback_velocity: 94,
              innovation_drift: 92
            },
            archetypeInfluence: "High-Velocity Systems Thinker"
          },
          {
            id: "sales_2d",
            actionText: "Kundenbeirat einberufen & Service-Level-Agreements neu verhandeln",
            subtext: "Vertragliche Strafzahlungen und Ausfallgutschriften vereinbaren, um das Vertrauen juristisch abzusichern.",
            dimensionDeltas: {
              execution_velocity: 68,
              autonomy_locus: 70,
              risk_resilience: 65,
              conflict_catalyst: 70,
              feedback_velocity: 80,
              innovation_drift: 62
            },
            archetypeInfluence: "Systemic Leader"
          },
          {
            id: "sales_2e",
            actionText: "Finanzielle Gutschrift anbieten und auf Standard-Ticketprozess verweisen",
            subtext: "Einen Monatsbeitrag erstatten und den Vorfall formal über das Beschwerdemanagement abwickeln.",
            dimensionDeltas: {
              execution_velocity: 60,
              autonomy_locus: 52,
              risk_resilience: 45,
              conflict_catalyst: 58,
              feedback_velocity: 65,
              innovation_drift: 48
            },
            archetypeInfluence: "Stability Guardian"
          }
        ]
      },
      {
        id: 3,
        scenarioTitle: "Szenario 3: Unfaire Vertriebsabsprachen im Kollegenkreis",
        urgency: "Vertriebsethik & Teamintegrität",
        context: "Ein Kollege markiert regelmäßig fremde Leads als seine eigenen, um seine monatliche Bonusquote zu frisieren. Die Stimmung im Team kippt.",
        options: [
          {
            id: "sales_3a",
            actionText: "Direktes 4-Augen-Gespräch mit dem Kollegen und klare Ansage",
            subtext: "Das unfaire Verhalten unverzüglich offen ansprechen und eine eigenständige Korrektur im CRM bis Feierabend fordern.",
            dimensionDeltas: {
              execution_velocity: 84,
              autonomy_locus: 92,
              risk_resilience: 82,
              conflict_catalyst: 96,
              feedback_velocity: 90,
              innovation_drift: 80
            },
            archetypeInfluence: "Radical Candor"
          },
          {
            id: "sales_3b",
            actionText: "Transparentes Regelwerk für Lead-Routing im Teammeeting vereinbaren",
            subtext: "Automatische, unmanipulierbare Zuteilung im CRM anregen, sodass individuelle Einflussnahmen technisch entfallen.",
            dimensionDeltas: {
              execution_velocity: 88,
              autonomy_locus: 86,
              risk_resilience: 86,
              conflict_catalyst: 84,
              feedback_velocity: 94,
              innovation_drift: 88
            },
            archetypeInfluence: "Systemic Leader"
          },
          {
            id: "sales_3c",
            actionText: "Lead-Splitting & Team-Provision anstelle reiner Einzel-Boni vorschlagen",
            subtext: "Die Anreizstruktur grundlegend reformieren, sodass Zusammenarbeit finanziell belohnt wird und Neid entfällt.",
            dimensionDeltas: {
              execution_velocity: 86,
              autonomy_locus: 90,
              risk_resilience: 88,
              conflict_catalyst: 88,
              feedback_velocity: 92,
              innovation_drift: 92
            },
            archetypeInfluence: "Agile Catalyst"
          },
          {
            id: "sales_3d",
            actionText: "Moderation durch neutralen Team-Coach oder Mediator anfordern",
            subtext: "Den Konflikt in einem moderierten Workshop lösen, um verhärtete Fronten nachhaltig aufzubrechen.",
            dimensionDeltas: {
              execution_velocity: 70,
              autonomy_locus: 68,
              risk_resilience: 70,
              conflict_catalyst: 76,
              feedback_velocity: 86,
              innovation_drift: 68
            },
            archetypeInfluence: "Culture & Empathy Anchor"
          },
          {
            id: "sales_3e",
            actionText: "Die Abweichung vertraulich an die Vertriebsleitung melden",
            subtext: "Konflikte vermeiden und die Aufklärung der Führungsebene überlassen.",
            dimensionDeltas: {
              execution_velocity: 62,
              autonomy_locus: 54,
              risk_resilience: 50,
              conflict_catalyst: 60,
              feedback_velocity: 70,
              innovation_drift: 50
            },
            archetypeInfluence: "Stability Guardian"
          }
        ]
      }
    ]
  },
  {
    id: "ops_finance",
    name: "Finanzen, Operations & HR",
    icon: "ShieldCheck",
    badge: "Governance & People",
    description: "Budgetkürzungen, Gehaltsgefüge, Compliance-Audits & interne Transformation",
    scenarios: [
      {
        id: 1,
        scenarioTitle: "Szenario 1: Überraschende 15 % Budgetkürzung mitten im Geschäftsjahr",
        urgency: "Ressourcen- & Priorisierungs-Dilemma",
        context: "Aufgrund veränderter Marktbedingungen verlangt der CFO binnen 48 Stunden eine Einsparung von 15 % im laufenden Abteilungsbudget, ohne dass Kernleistungen einbrechen.",
        options: [
          {
            id: "ops_1a",
            actionText: "Gemeinsamer ROI-Audit aller externen Tool- und Dienstleister-Verträge",
            subtext: "Unnötige Software-Lizenzen und Beraterverträge radikal kündigen, um Mitarbeiter und Gehälter vollständig zu schützen.",
            dimensionDeltas: {
              execution_velocity: 90,
              autonomy_locus: 92,
              risk_resilience: 85,
              conflict_catalyst: 88,
              feedback_velocity: 90,
              innovation_drift: 86
            },
            archetypeInfluence: "Systems Thinker"
          },
          {
            id: "ops_1b",
            actionText: "Prozessverschlankung und interne Automatisierung starten",
            subtext: "Zeitintensive manuelle Abstimmungen digitalisieren, um Ressourcen effizienter einzusetzen.",
            dimensionDeltas: {
              execution_velocity: 94,
              autonomy_locus: 88,
              risk_resilience: 88,
              conflict_catalyst: 80,
              feedback_velocity: 92,
              innovation_drift: 94
            },
            archetypeInfluence: "Agile Catalyst"
          },
          {
            id: "ops_1c",
            actionText: "Priorisierung nach Wertbeitrag: Low-Impact-Projekte temporär stoppen",
            subtext: "Die 20 % der Aufgaben einstellen, die 80 % der Kosten verursachen, aber kaum Kundenwert liefern.",
            dimensionDeltas: {
              execution_velocity: 92,
              autonomy_locus: 94,
              risk_resilience: 86,
              conflict_catalyst: 90,
              feedback_velocity: 92,
              innovation_drift: 90
            },
            archetypeInfluence: "Pragmatic Truth-Teller"
          },
          {
            id: "ops_1d",
            actionText: "Gegenentwurf mit gezielten Einnahme-Potenzialen vorlegen",
            subtext: "Dem CFO aufzeigen, wie durch eine gezielte Reallokation Umsatz generiert statt Substanz abgebaut wird.",
            dimensionDeltas: {
              execution_velocity: 82,
              autonomy_locus: 90,
              risk_resilience: 84,
              conflict_catalyst: 86,
              feedback_velocity: 88,
              innovation_drift: 88
            },
            archetypeInfluence: "Intellectual Challenger"
          },
          {
            id: "ops_1e",
            actionText: "Pauschal gekürzte Budgets linear auf alle Teams verteilen (Rasenmäher-Methode)",
            subtext: "Jedes Team kürzt gleichmäßig 15 %, um Diskussionen und Verteilungskämpfe im Keim zu ersticken.",
            dimensionDeltas: {
              execution_velocity: 65,
              autonomy_locus: 50,
              risk_resilience: 45,
              conflict_catalyst: 55,
              feedback_velocity: 62,
              innovation_drift: 48
            },
            archetypeInfluence: "Stability Guardian"
          }
        ]
      },
      {
        id: 2,
        scenarioTitle: "Szenario 2: Vertrauliche Gehaltsliste gelangt versehentlich ins Intranet",
        urgency: "Vertraulichkeit & Teamklima",
        context: "Durch ein falsches Rechte-Setting war für 20 Minuten eine unvollständige Gehaltsübersicht sichtbar. Erste Gerüchte über ungerechte Unterschiede kursieren in der Kaffeeküche.",
        options: [
          {
            id: "ops_2a",
            actionText: "Transparenz-Offensive mit transparentem Gehaltsband-Modell ankündigen",
            subtext: "Die Gunst der Stunde nutzen: Offenlegung nachvollziehbarer Gehaltsbänder und Kriterien statt Vertuschung.",
            dimensionDeltas: {
              execution_velocity: 86,
              autonomy_locus: 94,
              risk_resilience: 88,
              conflict_catalyst: 95,
              feedback_velocity: 94,
              innovation_drift: 88
            },
            archetypeInfluence: "Pragmatic Truth-Teller"
          },
          {
            id: "ops_2b",
            actionText: "Sofortige 1:1 Gespräche mit besorgten Mitarbeitern und Beruhigung",
            subtext: "Gerüchte im direkten Dialog entkräften und den Fokus wieder auf die tägliche Arbeit lenken.",
            dimensionDeltas: {
              execution_velocity: 78,
              autonomy_locus: 75,
              risk_resilience: 70,
              conflict_catalyst: 75,
              feedback_velocity: 85,
              innovation_drift: 70
            },
            archetypeInfluence: "Culture & Empathy Anchor"
          },
          {
            id: "ops_2c",
            actionText: "Unabhängigen Equal-Pay-Audit beauftragen und transparent teilen",
            subtext: "Eine neutrale Stelle prüfen lassen, ob geschlechtsspezifische oder ungerechtfertigte Lücken existieren.",
            dimensionDeltas: {
              execution_velocity: 84,
              autonomy_locus: 88,
              risk_resilience: 86,
              conflict_catalyst: 88,
              feedback_velocity: 95,
              innovation_drift: 85
            },
            archetypeInfluence: "Systemic Leader"
          },
          {
            id: "ops_2d",
            actionText: "Gemeinsames Townhall-Meeting für offene Mitarbeiterfragen anberaumen",
            subtext: "Der Geschäftsführung die Bühne geben, um den Kontext der Gehälter und Entwicklungschancen offen zu beantworten.",
            dimensionDeltas: {
              execution_velocity: 80,
              autonomy_locus: 84,
              risk_resilience: 80,
              conflict_catalyst: 90,
              feedback_velocity: 90,
              innovation_drift: 78
            },
            archetypeInfluence: "Intellectual Challenger"
          },
          {
            id: "ops_2e",
            actionText: "Striktes Rundschreiben mit Verschwiegenheits-Hinweis versenden",
            subtext: "Auf arbeitsvertragliche Schweigepflicht pochen und das Thema offiziell für beendet erklären.",
            dimensionDeltas: {
              execution_velocity: 55,
              autonomy_locus: 45,
              risk_resilience: 40,
              conflict_catalyst: 50,
              feedback_velocity: 58,
              innovation_drift: 42
            },
            archetypeInfluence: "Stability Guardian"
          }
        ]
      },
      {
        id: 3,
        scenarioTitle: "Szenario 3: Schlüsselmitarbeiter droht mit Kündigung bei Home-Office-Pflicht",
        urgency: "Arbeitsplatzkultur & Mitarbeiterbindung",
        context: "Die Geschäftsführung ordnet 4 Tage Präsenzpflicht an. Ein unverzichtbarer Leistungsträger kündigt an, sofort zu gehen, wenn er nicht weiter remote arbeiten darf.",
        options: [
          {
            id: "ops_3a",
            actionText: "Ergebnis-basierte Zielvereinbarung statt Präsenzkontrolle vereinbaren",
            subtext: "Entscheidend ist der Output, nicht der Bürostuhl. Eine Ausnahmevereinbarung mit klaren KPIs aushandeln.",
            dimensionDeltas: {
              execution_velocity: 92,
              autonomy_locus: 96,
              risk_resilience: 86,
              conflict_catalyst: 88,
              feedback_velocity: 92,
              innovation_drift: 90
            },
            archetypeInfluence: "Agile Catalyst"
          },
          {
            id: "ops_3b",
            actionText: "Kompromiss mit flexibler Kernzeit und Team-Fokus-Tagen vorschlagen",
            subtext: "2 feste Team-Tage im Büro für Kultur & Austausch, der Rest bleibt frei wählbar.",
            dimensionDeltas: {
              execution_velocity: 80,
              autonomy_locus: 80,
              risk_resilience: 75,
              conflict_catalyst: 78,
              feedback_velocity: 86,
              innovation_drift: 76
            },
            archetypeInfluence: "Culture & Empathy Anchor"
          },
          {
            id: "ops_3c",
            actionText: "Pilotversuch für die gesamte Abteilung initiieren",
            subtext: "Ein 3-monatiges Experiment vereinbaren: Hohe Remote-Freiheit kombiniert mit messbaren Meilensteinen.",
            dimensionDeltas: {
              execution_velocity: 90,
              autonomy_locus: 90,
              risk_resilience: 85,
              conflict_catalyst: 84,
              feedback_velocity: 92,
              innovation_drift: 92
            },
            archetypeInfluence: "Growth Multiplier"
          },
          {
            id: "ops_3d",
            actionText: "Mitarbeiterumfrage zu Arbeitsmodellen im Betriebsrat einbringen",
            subtext: "Die Entscheidung auf ein breites, demokratisches Fundament stellen statt Einzelfallentscheidungen zu treffen.",
            dimensionDeltas: {
              execution_velocity: 72,
              autonomy_locus: 70,
              risk_resilience: 68,
              conflict_catalyst: 75,
              feedback_velocity: 85,
              innovation_drift: 70
            },
            archetypeInfluence: "Systemic Leader"
          },
          {
            id: "ops_3e",
            actionText: "Die Firmenlinie konsequent ohne Ausnahmen durchsetzen",
            subtext: "Gleiches Recht für alle. Keine Sonderbehandlung für Einzelne, selbst wenn Kündigungen drohen.",
            dimensionDeltas: {
              execution_velocity: 60,
              autonomy_locus: 45,
              risk_resilience: 42,
              conflict_catalyst: 55,
              feedback_velocity: 60,
              innovation_drift: 40
            },
            archetypeInfluence: "Stability Guardian"
          }
        ]
      }
    ]
  }
];
