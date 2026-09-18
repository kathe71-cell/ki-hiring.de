import React, { useState } from 'react';
import { ARCHETYPES } from '../data/simulationData';
import { INDUSTRY_TRACKS } from '../data/trackScenarios';
import { CandidateArchetype } from '../types';
import { RotateCcw, CheckCircle2, Sparkles, Flame, Printer, Briefcase, Code, Target, ShieldCheck } from 'lucide-react';
import { RadarChart } from './RadarChart';

export const InteractiveSimulator: React.FC = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<string>('general');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [, setUserChoices] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Active track
  const currentTrack = INDUSTRY_TRACKS.find(t => t.id === selectedTrackId) || INDUSTRY_TRACKS[0];
  const simulationSteps = currentTrack.scenarios;
  const currentScenario = simulationSteps[currentStepIndex] || simulationSteps[0];

  // Dynamic vector state
  const [calculatedVectors, setCalculatedVectors] = useState({
    execution_velocity: 84,
    autonomy_locus: 88,
    risk_resilience: 76,
    conflict_catalyst: 90,
    feedback_velocity: 86,
    innovation_drift: 82
  });

  const handleSelectTrack = (trackId: string) => {
    setSelectedTrackId(trackId);
    setCurrentStepIndex(0);
    setUserChoices([]);
    setIsCompleted(false);
  };

  const handleSelectOption = (optionId: string, deltas: Record<string, number>) => {
    setUserChoices(prev => [...prev, optionId]);

    setCalculatedVectors(prev => ({
      execution_velocity: Math.round((prev.execution_velocity + deltas.execution_velocity) / 2),
      autonomy_locus: Math.round((prev.autonomy_locus + deltas.autonomy_locus) / 2),
      risk_resilience: Math.round((prev.risk_resilience + deltas.risk_resilience) / 2),
      conflict_catalyst: Math.round((prev.conflict_catalyst + deltas.conflict_catalyst) / 2),
      feedback_velocity: Math.round((prev.feedback_velocity + deltas.feedback_velocity) / 2),
      innovation_drift: Math.round((prev.innovation_drift + deltas.innovation_drift) / 2)
    }));

    if (currentStepIndex + 1 < simulationSteps.length) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setUserChoices([]);
    setIsCompleted(false);
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const getArchetype = (): CandidateArchetype => {
    if (calculatedVectors.conflict_catalyst > 85 && calculatedVectors.autonomy_locus > 85) {
      return ARCHETYPES.truthTeller;
    }
    if (calculatedVectors.execution_velocity > 85) {
      return ARCHETYPES.catalyst;
    }
    return ARCHETYPES.systems;
  };

  const archetype = getArchetype();

  const vectorMetrics = [
    { key: 'execution_velocity', label: '1. Umsetzungs-Tempo', desc: 'Zügig fertigstellen oder Dinge in Meetings zerreden' },
    { key: 'autonomy_locus', label: '2. Eigenverantwortung', desc: 'Selbstständig anpacken statt ständiger Absicherung' },
    { key: 'risk_resilience', label: '3. Stress & Fehlerkultur', desc: 'Kühlen Kopf bewahren, wenn mal etwas schiefgeht' },
    { key: 'conflict_catalyst', label: '4. Ehrliches Feedback', desc: 'Probleme direkt und fair ansprechen, bevor es kracht' },
    { key: 'feedback_velocity', label: '5. Lernfähigkeit', desc: 'Aus Fehlern lernen statt nach Schuldigen zu suchen' },
    { key: 'innovation_drift', label: '6. Mut für Neues', desc: 'Einfach mal einen Prototyp testen statt Dienst nach Vorschrift' }
  ];

  const renderTrackIcon = (iconName: string, isSelected: boolean) => {
    const className = `w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`;
    switch (iconName) {
      case 'Code':
        return <Code className={className} />;
      case 'Target':
        return <Target className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      default:
        return <Briefcase className={className} />;
    }
  };

  return (
    <section id="simulator" className="py-20 border-b border-slate-200 bg-white relative">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10 no-print" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10 no-print" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 no-print">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Interaktiver Praxis-Check</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
              Interaktiver Praxis-Check: 3 kurze Praxisszenarien
            </h2>
            <p className="text-base text-slate-600 mt-1 max-w-xl">
              Wähle dein Berufsfeld und entscheide dich in 3 realistischen Praxissituationen für deine bevorzugte Vorgehensweise.
            </p>
          </div>
          <div className="text-xs font-semibold text-slate-600 flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Kostenlose Demo • 4 Fachbereiche</span>
          </div>
        </div>

        {/* Granular Industry / Role Selector */}
        {!isCompleted && (
          <div className="mb-6 no-print bg-slate-50/80 p-4 rounded-3xl border border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Schritt 1: Dein Berufsfeld wählen</span>
              </div>
              <span className="text-[11px] font-normal text-slate-500 hidden sm:inline-block">
                Klicke auf einen Bereich, um die passenden Praxisfälle zu laden
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {INDUSTRY_TRACKS.map((track) => {
                const isSelected = track.id === selectedTrackId;
                return (
                  <button
                    key={track.id}
                    onClick={() => handleSelectTrack(track.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? 'bg-slate-950 text-white border-slate-950 shadow-lg ring-2 ring-amber-450 scale-[1.02]'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-slate-800' : 'bg-slate-100 group-hover:bg-amber-100'} transition-colors`}>
                          {renderTrackIcon(track.icon, isSelected)}
                        </div>
                        <span className="text-xs font-black tracking-tight">{track.name}</span>
                      </div>
                      {isSelected ? (
                        <span className="px-1.5 py-0.5 rounded-full bg-amber-450 text-slate-950 font-black text-[9px] uppercase tracking-wider">
                          AKTIV
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400 group-hover:text-amber-600 font-bold transition-colors">
                          Wählen →
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] line-clamp-2 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {track.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Workstation Frame */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50/50 shadow-xl overflow-hidden backdrop-blur-xs print-area">
          
          {/* Top Status Bar */}
          <div className="px-6 py-4 border-b border-slate-200 bg-white flex items-center justify-between text-xs no-print">
            <div className="flex items-center gap-3 text-slate-900 font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              <span>Explorativer Praxistest</span>
              <span className="text-slate-300 font-normal">|</span>
              <span className="text-slate-600 font-semibold bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200 text-[11px]">
                {currentTrack.name}
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 font-medium">
              <span>Fortschritt: {isCompleted ? '100%' : `${Math.round(((currentStepIndex) / simulationSteps.length) * 100)}%`}</span>
              <div className="w-24 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-450 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${isCompleted ? 100 : ((currentStepIndex + 1) / simulationSteps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {!isCompleted ? (
            /* Active Scenario Dilemma */
            <div className="p-6 sm:p-10 space-y-8">
              
              {/* Scenario Context */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Situation {currentStepIndex + 1} von {simulationSteps.length} • {currentTrack.name}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-rose-50 text-rose-800 border border-rose-200 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-rose-600" />
                    <span>{currentScenario.urgency}</span>
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                  {currentScenario.scenarioTitle}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pt-1">
                  {currentScenario.context}
                </p>
              </div>

              {/* Action Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>Wie entscheidest du in diesem Moment?</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500">
                    5 Handlungsoptionen (A – E)
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {currentScenario.options.map((opt, idx) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id, opt.dimensionDeltas)}
                      className="w-full text-left p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white hover:border-amber-400 hover:bg-amber-50/40 transition-all cursor-pointer group shadow-2xs hover:shadow-md active:scale-[0.99] flex items-start gap-3.5"
                    >
                      <div className="w-7 h-7 rounded-xl bg-slate-100 group-hover:bg-amber-450 text-slate-700 group-hover:text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5 transition-colors border border-slate-200 group-hover:border-amber-500">
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div className="space-y-1 flex-1">
                        <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-slate-950 transition-colors flex items-center justify-between gap-2">
                          <span>{opt.actionText}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-[11px] font-bold text-amber-700 transition-opacity hidden sm:inline-block shrink-0">
                            Wählen →
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed font-normal">
                          {opt.subtext}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* Results & Vector Dashboard */
            <div className="p-6 sm:p-10 space-y-8 bg-white">
              
              {/* Header for print & display */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div>
                  <div className="text-xs font-black text-emerald-700 uppercase tracking-wider flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-flex">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Exploratives Ergebnis deiner ausgewählten Antworten</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mt-2">
                    Dein Auswertungs-Profil (Demo)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Erstellt am {new Date().toLocaleDateString('de-DE')} • Auswertungsübersicht im Bereich: <strong className="text-slate-700">{currentTrack.name}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-2 no-print">
                  <button
                    onClick={handlePrintPdf}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-slate-950 bg-amber-450 hover:bg-amber-400 transition-all cursor-pointer shadow-sm border border-amber-500"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-950" />
                    <span>Als PDF speichern / Drucken</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors cursor-pointer shadow-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                    <span>Anderes Berufsfeld / Neustart</span>
                  </button>
                </div>
              </div>

              {/* Mandatory Disclaimer Box */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs leading-relaxed space-y-1">
                <span className="font-bold block uppercase tracking-wider text-[10px] text-amber-900">
                  Wichtiger Transparenzhinweis:
                </span>
                <p className="font-medium">
                  Diese Demo ist kein validierter Eignungstest und darf nicht als alleinige Grundlage für Einstellungsentscheidungen verwendet werden.
                </p>
              </div>

              {/* Grid: Archetype on Left, Radar Chart on Right */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Archetype Card */}
                <div className="lg:col-span-7 bg-gradient-to-br from-slate-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-black uppercase tracking-wider text-slate-950 bg-amber-450 px-3 py-1 rounded-full">
                        {archetype.badge}
                      </span>
                      <span className="text-xs font-medium text-slate-300">
                        Schwerpunkt: <strong className="text-emerald-400 font-bold">{archetype.focusArea}</strong>
                      </span>
                    </div>

                    <div>
                      <h4 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                        {archetype.title}
                      </h4>
                      <p className="text-amber-200 text-sm mt-1.5 font-medium">
                        „{archetype.tagline}“
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
                      <div className="space-y-1 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                        <span className="text-slate-400 uppercase font-bold text-[10px]">
                          Bevorzugte Handlungsweise
                        </span>
                        <p className="text-slate-200 leading-relaxed font-medium">{archetype.primaryStrength}</p>
                      </div>
                      <div className="space-y-1 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                        <span className="text-slate-400 uppercase font-bold text-[10px]">
                          Möglicher Impuls fürs Team
                        </span>
                        <p className="text-slate-200 leading-relaxed font-medium">{archetype.blindspotCounterweight}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Möglicher Gesprächsimpuls:</span>
                    <span className="font-bold text-emerald-400">{archetype.potentialImpulse}</span>
                  </div>
                </div>

                {/* Radar Chart Card */}
                <div className="lg:col-span-5 bg-slate-50/70 p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Visualisierung deiner 6 Arbeitsweisen
                  </div>
                  <RadarChart scores={calculatedVectors} />
                  <div className="text-[11px] text-slate-500 mt-2 text-center">
                    Basiert auf den 3 ausgewählten Szenarien
                  </div>
                </div>

              </div>

              {/* Vector Details Grid & Scoring Explanation */}
              <div className="space-y-4 pt-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-950">
                    Demo-Punktwerte mit nachvollziehbarer Herleitung
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Relativer Score (0 - 100) basierend auf deinen 3 Wahlentscheidungen
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {vectorMetrics.map((metric) => {
                    const score = calculatedVectors[metric.key as keyof typeof calculatedVectors];
                    return (
                      <div key={metric.key} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 shadow-2xs">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-slate-900">{metric.label}</span>
                          <span className="font-mono font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            {score} / 100
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${score}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-slate-500 leading-normal">
                          {metric.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs leading-relaxed space-y-1">
                  <span className="font-bold text-slate-900 block">Auswertungsregel & Grenzen der Demo:</span>
                  <p>
                    Die Punktwerte ergeben sich schrittweise aus den relativen Auswertungs-Deltas der Handlungsoptionen A–E deiner 3 gewählten Szenarien. Es werden keine echten Teamdaten erhoben und keine psychometrischen Eignungsdiagnosen gestellt.
                  </p>
                </div>
              </div>

              {/* Instant Next Steps */}
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print">
                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900">
                    Nächster Schritt mit deinem Ergebnis:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed max-w-xl">
                    Speichere dir dein Ergebnis als PDF oder erstelle einen Ausdruck für deine Unterlagen. Nutze die Übersicht als gezielten Gesprächsimpuls im Vorstellungsgespräch, um bevorzugte Vorgehensweisen konkret zu besprechen.
                  </p>
                </div>
                <button
                  onClick={handlePrintPdf}
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-amber-450 hover:bg-amber-400 transition-all cursor-pointer shadow-sm border border-amber-500"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-950" />
                  <span>PDF jetzt herunterladen</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
