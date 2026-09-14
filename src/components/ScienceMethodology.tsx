import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ScienceMethodology: React.FC = () => {
  const dimensions = [
    {
      code: "01",
      name: "Umsetzungs-Tempo",
      desc: "Kommen Dinge schnell auf die Straße oder wird alles in endlosen Abstimmungsrunden zerredet?",
      metric: "Praxis-Fokus: Zügige Ergebnisse"
    },
    {
      code: "02",
      name: "Eigenverantwortung",
      desc: "Geht jemand selbstständig voran oder braucht er für jeden Handschlag die Freigabe vom Chef?",
      metric: "Praxis-Fokus: Selbstständiges Arbeiten"
    },
    {
      code: "03",
      name: "Umgang mit Stress & Pannen",
      desc: "Bewahrt jemand die Ruhe und sucht pragmatisch nach Lösungen, wenn mal etwas schiefgeht?",
      metric: "Praxis-Fokus: Krisenfestigkeit"
    },
    {
      code: "04",
      name: "Ehrliche Kommunikation",
      desc: "Werden Probleme frühzeitig und fair auf den Tisch gebracht – oder brodelt es hinter den Kulissen?",
      metric: "Praxis-Fokus: Direkte Klärung"
    },
    {
      code: "05",
      name: "Aus Fehlern lernen",
      desc: "Wird nach einem Fehler das System verbessert, damit es nicht wieder passiert – oder ein Sündenbock gesucht?",
      metric: "Praxis-Fokus: Gemeinsames Lernen"
    },
    {
      code: "06",
      name: "Mut für Neues",
      desc: "Probiert jemand mutig einen neuen Weg aus oder klammert man sich an alte Gewohnheiten?",
      metric: "Praxis-Fokus: Frische Impulse"
    }
  ];

  return (
    <section id="methode" className="py-20 border-b border-zinc-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            [ Wissenschaftlich geprüft • Fair für alle ]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Die 6 Bereiche: Wie Menschen im Arbeitsalltag wirklich handeln
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Statt langweiliger Theorie-Fragebögen messen wir, wie jemand bei echten beruflichen Herausforderungen entscheidet – 
            fair, nachvollziehbar und ohne Hokuspokus.
          </p>
        </div>

        {/* Vector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {dimensions.map((dim) => (
            <div key={dim.code} className="p-5 rounded-lg border border-zinc-200 bg-[#fbfbfb] space-y-2.5">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="font-bold text-zinc-950">{dim.code}</span>
                <span className="text-[10px] text-zinc-500 uppercase">Verständlich</span>
              </div>
              <h3 className="font-bold text-zinc-950 text-sm">{dim.name}</h3>
              <p className="text-xs text-zinc-600 leading-relaxed">{dim.desc}</p>
              <div className="pt-2 border-t border-zinc-200/80 text-[11px] font-mono text-zinc-700">
                {dim.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Details */}
        <div className="p-6 sm:p-8 rounded-xl border border-zinc-200 bg-zinc-50 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-700 font-bold uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100 % Fair, transparent & rechtssicher</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-1.5">
              <span className="font-bold text-zinc-950 block">Keine undurchsichtige Blackbox</span>
              <p className="text-zinc-600 leading-relaxed">
                Jedes Ergebnis ist logisch erklärt. Keine geheimen Algorithmen, keine Beurteilung nach Aussehen, Alter oder Herkunft.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-zinc-950 block">Server in Deutschland (DSGVO)</span>
              <p className="text-zinc-600 leading-relaxed">
                Alle Daten liegen sicher verschlüsselt in ISO-27001-zertifizierten Rechenzentren in Frankfurt am Main.
              </p>
            </div>
            <div className="space-y-1.5">
              <span className="font-bold text-zinc-950 block">Sicher für Betriebsrat & Team</span>
              <p className="text-zinc-600 leading-relaxed">
                Erfüllt alle europäischen Standards für faire Einstellungsverfahren und schützt verlässlich vor unbewusster Diskriminierung.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
