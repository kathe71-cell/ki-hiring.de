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
      title: "Praktische Selbstreflexion",
      desc: "Durchdenke 3 typische Alltagssituationen und reflektiere deine bevorzugten Entscheidungswege im Berufsalltag.",
      tag: "Live-Demo",
      tagColor: "bg-amber-100 text-amber-950 border-amber-300"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
      code: "02",
      title: "Gesprächsimpuls zum Mitnehmen",
      desc: "Nutze die übersichtliche PDF-Auswertung als konkreten Aufhänger in Vorstellungsgesprächen und Gehaltsverhandlungen.",
      tag: "PDF-Export",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-300"
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      code: "03",
      title: "Arbeitsweisen vergleichen",
      desc: "Erfahre, welche Tendenzen dir im Team wichtig sind – bevor du dich für eine neue Stelle entscheidest.",
      tag: "Orientierung",
      tagColor: "bg-blue-100 text-blue-950 border-blue-300"
    },
    {
      icon: <EyeOff className="w-5 h-5 text-purple-600" />,
      code: "04",
      title: "Direktes Matching & Angebote [Geplant]",
      desc: "Künftig geplantes Feature: Anonymes Talentprofil mit gezielten Anfragen von Firmen, die genau dein Profil suchen.",
      tag: "In Entwicklung",
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
              Arbeitspräferenzen reflektieren & gezielt vorbereiten.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Standard-Lebensläufe verraten wenig über den echten Berufsalltag. Mit unserer Praxisszenarien-Demo entdeckst du deine Handlungspräferenzen und nimmst dein Ergebnis direkt mit ins Gespräch.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={onStartSimulation}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-black bg-amber-450 hover:bg-amber-400 text-slate-950 transition-all cursor-pointer shadow-md hover:shadow-lg border border-amber-500 active:scale-95"
            >
              <span>Praxistest jetzt ausprobieren</span>
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
                <span>✓</span> 100 % kostenlose Demo
              </div>
            </div>
          ))}
        </div>

        {/* 3 Step Flow */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span>Ablauf der Demo:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="font-black text-slate-950 flex items-center gap-2 text-sm">
                <span className="w-6 h-6 rounded-full bg-slate-950 text-white text-xs flex items-center justify-center font-bold">1</span>
                <span>3 Alltagssituationen durchspielen</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Wähle in 3 berufsbezogenen Dilemma-Szenarien deine präferierte Vorgehensweise aus.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="font-black text-slate-950 flex items-center gap-2 text-sm">
                <span className="w-6 h-6 rounded-full bg-amber-450 text-slate-950 text-xs flex items-center justify-center font-bold">2</span>
                <span>Demo-Profil & Vektoren ansehen</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Sieh dir deine Tendenz auf den 6 Vektoren an und verstehe die Herleitung deiner Punktergebnisse.
              </p>
            </div>

            <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="font-black text-slate-950 flex items-center gap-2 text-sm">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">3</span>
                <span>Als PDF für Gespräche nutzen</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Drucke dein Ergebnis aus oder speichere es als PDF zur Vorbereitung auf Vorstellungsgespräche.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
