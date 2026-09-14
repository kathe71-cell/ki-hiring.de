import React from 'react';
import { EyeOff, Zap, Shield, TrendingUp, ArrowRight } from 'lucide-react';

interface CandidateBenefitsProps {
  onStartSimulation: () => void;
}

export const CandidateBenefits: React.FC<CandidateBenefitsProps> = ({ onStartSimulation }) => {
  const candidatePillars = [
    {
      icon: <Zap className="w-5 h-5 text-amber-600" />,
      code: "01",
      title: "Firmen bewerben sich bei dir",
      desc: "Keine zeitraubenden Anschreiben, kein Lebenslauf-Upload. Du machst den 90-Sekunden-Test und interessierte Teams machen dir konkrete Angebote.",
      tag: "Kein Stress",
      tagColor: "bg-amber-100 text-amber-950 border-amber-300"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      code: "02",
      title: "Dein Eignungs- & Stärkenprofil zum Mitnehmen",
      desc: "Kein Anschreiben, kein Lebenslauf-Polieren. Du erhältst ein objektives Stärkenprofil, das genau zeigt, wie du Herausforderungen meisterst. Als fundiertes Argument in Gehaltsverhandlungen.",
      tag: "Gehalts-Plus",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-300"
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      code: "03",
      title: "Schutz vor bösen Überraschungen",
      desc: "Jede Firma verspricht 'flache Hierarchien und tolles Team'. Bei uns siehst du vorher, wie die Kollegen wirklich arbeiten – bevor du kündigst.",
      tag: "Echte Kultur",
      tagColor: "bg-blue-100 text-blue-950 border-blue-300"
    },
    {
      icon: <EyeOff className="w-5 h-5 text-purple-600" />,
      code: "04",
      title: "100 % Anonym & Sicher",
      desc: "Kein Foto, kein Alter, kein Name für Außenstehende. Dein aktueller Arbeitgeber erfährt nichts. Erst wenn dir ein Angebot gefällt, gibst du deine Daten frei.",
      tag: "Voller Schutz",
      tagColor: "bg-purple-100 text-purple-950 border-purple-300"
    }
  ];

  return (
    <section id="fuer-talente" className="py-20 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider border border-emerald-300">
              <span>Für Bewerber & Berufstätige</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              Schluss mit dem Bewerbungs-Marathon.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Normale Bewerbungen kosten Nerven und Zeit. Bei KI-Hiring drehen wir den Spieß um: 
              In 90 Sekunden zeigst du spielerisch, wie du Probleme löst, und Teams melden sich direkt mit passenden Angeboten bei dir.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onStartSimulation}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-black bg-amber-450 hover:bg-amber-400 text-slate-950 transition-all cursor-pointer shadow-md hover:shadow-lg border border-amber-500 active:scale-95"
            >
              <span>Profil jetzt erstellen (90 Sek.)</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {candidatePillars.map((p) => (
            <div key={p.code} className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-amber-300 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full border ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-bold text-slate-950 text-base">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <span>✓</span> 100 % kostenlos für Talente
              </div>
            </div>
          ))}
        </div>

        {/* 3 Step Flow */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>So einfach funktioniert es für dich:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="font-black text-slate-950 flex items-center gap-2 text-sm">
                <span className="w-6 h-6 rounded-full bg-slate-950 text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>3 Alltagssituationen lösen</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Klicke dich durch 3 kurze Praxisfälle. Es gibt kein falsches Ergebnis, sondern zeigt deinen persönlichen Stil.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="font-black text-slate-950 flex items-center gap-2 text-sm">
                <span className="w-6 h-6 rounded-full bg-amber-450 text-slate-950 text-xs flex items-center justify-center font-bold">2</span>
                <span>Dein Stärken-Profil erhalten</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Du siehst sofort, was für ein Arbeits-Typ du bist und welche Teams dich mit Kusshand nehmen würden.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="font-black text-slate-950 flex items-center gap-2 text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>Passende Angebote erhalten</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Firmen, die genau deine Stärken suchen, schreiben dir direkt. Du entscheidest ganz entspannt.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
