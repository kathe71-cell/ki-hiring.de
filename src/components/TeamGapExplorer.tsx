import React, { useState } from 'react';
import { AlertCircle, Sparkles } from 'lucide-react';

interface TeamProfile {
  id: string;
  name: string;
  bottleneck: string;
  diagnosis: string;
  traditionalError: string;
  cultureAddSolution: {
    title: string;
    profile: string;
    mechanism: string;
    impact: string;
  };
  keyMetrics: {
    decisionCycle: string;
    conflictLatency: string;
    alignmentStability: string;
  };
}

const PROFILES: TeamProfile[] = [
  {
    id: 'consensus_heavy',
    name: 'Viel Harmonie, aber zögerlich',
    bottleneck: 'Entscheidungen dauern ewig',
    diagnosis: 'Alle verstehen sich super, Meetings sind freundlich, aber niemand will anecken. Wichtige Entscheidungen werden wochenlang vor sich hergeschoben.',
    traditionalError: 'Wer hier noch mehr harmoniebedürftige Ja-Sager einstellt, lähmt das Team endgültig.',
    cultureAddSolution: {
      title: 'Der mutige Antreiber (Konstruktiver Challenger)',
      profile: 'Sagt ehrlich die Meinung + Handelt eigenständig',
      mechanism: 'Spricht den Elefanten im Raum freundlich, aber direkt an und sorgt dafür, dass endlich Nägel mit Köpfen gemacht werden.',
      impact: 'Entscheidungen in 4 Tagen statt 3 Wochen'
    },
    keyMetrics: {
      decisionCycle: '4 Tage statt 3 Wochen',
      conflictLatency: 'Sofortige Klärung',
      alignmentStability: 'Sehr hoch'
    }
  },
  {
    id: 'hyper_velocity',
    name: 'Viel Tempo, aber chaotisch',
    bottleneck: 'Ständige Brände & Hektik',
    diagnosis: 'Enorm schneller Drive, aber null Struktur. Alles wird auf den letzten Drücker gemacht, Entwickler brennen aus und Fehler häufen sich.',
    traditionalError: 'Noch mehr hektische Macher einzustellen führt geradewegs ins Burnout-Chaos.',
    cultureAddSolution: {
      title: 'Der Fels in der Brandung (Systemischer Architekt)',
      profile: 'Behält den Überblick + Schafft Ruhe',
      mechanism: 'Baut klare, einfache Abläufe, die das Tempo erhalten, aber das Team vor sinnlosen Nachtschichten schützen.',
      impact: '-48 % Fehler & Nacharbeiten'
    },
    keyMetrics: {
      decisionCycle: 'Schnell & strukturiert',
      conflictLatency: 'Gemeinsame Fehleranalyse',
      alignmentStability: '65 % weniger Stress'
    }
  },
  {
    id: 'established_silo',
    name: 'Eingespielt, aber festgefahren',
    bottleneck: 'Dienst nach Vorschrift & Routine',
    diagnosis: 'Jeder macht seinen Job, aber neue Ideen werden mit „Das haben wir schon immer so gemacht“ im Keim erstickt.',
    traditionalError: 'Bewerber einzustellen, die genau in dieselbe Schublade passen, erstickt jede Erneuerung.',
    cultureAddSolution: {
      title: 'Der Pragmatische Macher (Innovations-Impulsgeber)',
      profile: 'Probierfreudig + Hands-on',
      mechanism: 'Baut einfach mal einen kleinen Prototyp und beweist den Kollegen vor Ort, dass Veränderung Spaß macht.',
      impact: '3x schnellere Umsetzung neuer Ideen'
    },
    keyMetrics: {
      decisionCycle: 'Einfach ausprobieren',
      conflictLatency: 'Lösungsorientiert',
      alignmentStability: 'Hohe Motivation'
    }
  }
];

export const TeamGapExplorer: React.FC = () => {
  const [selectedId, setSelectedId] = useState('consensus_heavy');
  const active = PROFILES.find(p => p.id === selectedId) || PROFILES[0];

  return (
    <section id="gap-matrix" className="py-20 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Team-Zusammenstellung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
            Welcher Typ fehlt eurem Team wirklich?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Gute Teams bestehen nicht aus lauter Klonen, die alle gleich ticken. 
            Wähle das Muster, das am besten zu eurem Team passt, um zu sehen, welche Verstärkung euch nach vorne bringt:
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {PROFILES.map((p) => {
            const isSelected = p.id === selectedId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-950 text-white border-slate-950 shadow-lg ring-2 ring-amber-450/40'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-amber-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className={`uppercase font-bold ${isSelected ? 'text-amber-400' : 'text-slate-500'}`}>
                    TEAM-MUSTER
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>}
                </div>
                <div className="font-black text-base mb-1">{p.name}</div>
                <div className={`text-xs leading-snug ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                  Engpass: {p.bottleneck}
                </div>
              </button>
            );
          })}
        </div>

        {/* Matrix Detail Grid */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-sm">
          
          {/* Left: Defizit */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-100 text-rose-800 text-xs font-bold uppercase">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                <span>Aktueller Engpass im Team</span>
              </span>
              <h3 className="text-2xl font-black text-slate-950">{active.bottleneck}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {active.diagnosis}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 text-xs shadow-xs">
              <div className="font-bold text-rose-700 uppercase flex items-center gap-1">
                <span>✕ Typischer Fehler bei der Einstellung</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                {active.traditionalError}
              </p>
            </div>
          </div>

          {/* Right: The Solution */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-amber-300 shadow-md space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                  Wer euch jetzt wirklich hilft:
                </span>
                <h4 className="text-xl font-black text-slate-950 mt-0.5">{active.cultureAddSolution.title}</h4>
              </div>
              <span className="text-xs font-black text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                {active.cultureAddSolution.impact}
              </span>
            </div>

            <div className="space-y-1.5 bg-amber-50/50 p-4 rounded-xl border border-amber-200/80">
              <span className="font-bold text-slate-900 text-xs uppercase block">Wie diese Person das Team voranbringt:</span>
              <p className="text-slate-800 text-sm leading-relaxed font-medium">
                {active.cultureAddSolution.mechanism}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="text-sm font-black text-slate-950">{active.keyMetrics.decisionCycle}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Tempo</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="text-sm font-black text-slate-950">{active.keyMetrics.conflictLatency}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Klärung</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="text-sm font-black text-emerald-600">{active.keyMetrics.alignmentStability}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5">Wirkung</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
