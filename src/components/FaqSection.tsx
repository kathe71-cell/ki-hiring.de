import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Wie unterscheidet sich KI-Hiring von normalen Vorstellungsgesprächen?",
    answer: "Im Vorstellungsgespräch stehen oft auswendig gelernte Antworten im Vordergrund. KI-Hiring versetzt Menschen in 3 typische Alltagssituationen (z. B. Priorisierung unter Zeitdruck, Abstimmung im Team). So entsteht eine verlässliche Grundlage, um bevorzugte Arbeitsweisen sachlich im Kennenlerngespräch zu besprechen."
  },
  {
    question: "Können Bewerber bei dem Test schummeln oder die 'beste' Antwort googeln?",
    answer: "Nein, denn in den Szenarien gibt es kein pauschales 'Richtig' oder 'Falsch'. Alle Handlungsoptionen stellen praxisnahe, valide Arbeitsweisen dar (z. B. pragmatisches Ausprobieren vs. gründliches Absichern). Es geht nicht um Bestehen oder Durchfallen, sondern um Transparenz über bevorzugte Vorgehensweisen."
  },
  {
    question: "Wie viel Zeit müssen Bewerber und Chefs investieren?",
    answer: "Der Praxistest umfasst 3 kurze Szenarien und dauert gerade einmal ca. 90 bis 180 Sekunden. Nach Abschluss steht sofort ein strukturierter Ergebnisbericht bereit, der als Gesprächsaufhänger genutzt werden kann."
  },
  {
    question: "Wie ist der Ablauf bzgl. Datenschutz und Systeminfrastruktur?",
    answer: "Die Demo wird clientseitig direkt im Webbrowser ausgeführt und auf Vercel gehostet. Es werden im Rahmen dieser Demo keine personenbezogenen Bewerberdaten verarbeitet oder dauerhaft auf Servern gespeichert. Die Nutzung erfolgt anonym und ohne Registrierung."
  },
  {
    question: "Funktioniert das mit unserer Software (z. B. Personio, Workday, Greenhouse)?",
    answer: "In der aktuellen Demo könnt ihr das Ergebnis direkt im Browser einsehen und als PDF-Bericht herunterladen. Direkte Schnittstellen (API) und automatische Einbindungen in HR-Systeme sind als zukünftige Erweiterung geplant [Geplant]."
  },
  {
    question: "Was bedeutet eigentlich 'Culture-Add' genau?",
    answer: "Statt nur nach Menschen zu suchen, die exakt so ticken wie das bestehende Team (Culture Fit), bezeichnet Culture-Add das gezielte Ergänzen fehlender Handlungsperspektiven (z. B. strukturierte Prozessstärke in einem sehr dynamischen Team oder mutige Entscheidungsimpulse in einem zögerlichen Umfeld)."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 border-b border-zinc-200/80 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            [ Fragen & Antworten ]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Alles Wichtige einfach erklärt
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Häufige Fragen zu Ablauf, Datenschutz und Nutzen für Bewerber und Unternehmen.
          </p>
        </div>

        {/* List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-lg border border-zinc-200 bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-50/50 transition-colors"
                >
                  <span className="font-bold text-zinc-950 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-zinc-950' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
