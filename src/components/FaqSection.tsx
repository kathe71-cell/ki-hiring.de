import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Wie unterscheidet sich KI-Hiring von normalen Vorstellungsgesprächen?",
    answer: "Im Vorstellungsgespräch erzählt jeder Bewerber das, was die Chefs hören wollen. Man kann sich leicht verstellen. Bei KI-Hiring versetzen wir Menschen in 3 typische Alltagssituationen (z. B. Termindruck kurz vor Feierabend, Meinungsverschiedenheiten im Team). So sieht man sofort, wie jemand tatsächlich anpackt, kommuniziert und Probleme löst – ganz ohne langes Bauchgefühl-Raten."
  },
  {
    question: "Können Bewerber bei dem Test schummeln oder die 'beste' Antwort googeln?",
    answer: "Nein, denn es gibt kein 'Richtig' oder 'Falsch'. Jede Option ist eine vollkommen seriöse und erfolgreiche Art zu handeln (z. B. sofort pragmatisch loslegen vs. erst alle Fakten genau analysieren). Weil keine Antwort 'besser' ist, sondern nur einen anderen Arbeitsstil beschreibt, gibt es nichts zu schummeln. Das Ergebnis zeigt einfach die reale Arbeitsweise."
  },
  {
    question: "Wie viel Zeit müssen Bewerber und Chefs investieren?",
    answer: "Für Bewerber dauert der Test auf dem Smartphone gerade einmal 90 bis 180 Sekunden. Niemand muss lange Texte schreiben oder einen Lebenslauf formatieren. Teamleiter und Chefs bekommen sofort eine übersichtliche 1-Seiten-Zusammenfassung mit passenden Fragen fürs Kennenlerngespräch."
  },
  {
    question: "Was sagen Betriebsrat und Datenschutz dazu?",
    answer: "Das Verfahren ist absolut sicher, objektiv und fair. Wir bewerten niemanden nach Aussehen, Alter, Geschlecht oder Herkunft. Jedes Testergebnis beruht rein auf sachlichen Handlungsmustern und ist 100 % nachvollziehbar. Alle Daten liegen auf deutschen Servern in Frankfurt am Main und werden niemals an Dritte weitergegeben."
  },
  {
    question: "Funktioniert das mit unserer Software (z. B. Personio, Workday, Greenhouse)?",
    answer: "Ja, problemlos. Ihr könnt den Link zum 90-Sekunden-Test einfach automatisch in eure Eingangsbestätigung an Bewerber einbinden oder unser System direkt per Schnittstelle an eure bestehende HR-Software anbinden."
  },
  {
    question: "Was bedeutet eigentlich 'Culture-Add' genau?",
    answer: "Viele Firmen suchen nach Leuten, die 'genauso sind wie wir'. Das führt dazu, dass Teams aus lauter Klonen bestehen, die alle die gleichen blinden Flecken haben. 'Culture-Add' bedeutet: Wir suchen gezielt die Stärken, die eurem Team heute noch fehlen (z. B. jemand, der mutig den Mund aufmacht, wenn das Team zu zögerlich ist – oder jemand, der Struktur reinbringt, wenn es zu chaotisch zugeht)."
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
