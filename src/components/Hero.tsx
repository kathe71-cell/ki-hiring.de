import React, { useState } from 'react';
import { ArrowRight, Activity, UserCheck, Sparkles, Building2 } from 'lucide-react';
import { RadarChart } from './RadarChart';

interface HeroProps {
  audience: 'employers' | 'candidates';
  setAudience: (val: 'employers' | 'candidates') => void;
  onStartSimulation: () => void;
  onExploreGaps: () => void;
  onShowCandidateDetails?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  audience, 
  setAudience, 
  onStartSimulation, 
  onExploreGaps,
  onShowCandidateDetails
}) => {
  // Interactive preview scores for the hero radar
  const [previewScores] = useState({
    execution_velocity: 88,
    autonomy_locus: 82,
    risk_resilience: 75,
    conflict_catalyst: 90,
    feedback_velocity: 84,
    innovation_drift: 78
  });

  return (
    <section className="relative pt-10 pb-20 border-b border-slate-200 overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-slate-100/50">
      
      {/* Warm Ambient Glow Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-br from-amber-200/35 via-emerald-100/25 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Ultra-Clean, Symmetrical Segmented Perspective Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1.5 bg-slate-100/90 backdrop-blur-sm rounded-2xl border border-slate-200/90 shadow-inner">
            <span className="hidden sm:inline-flex items-center gap-1.5 pl-3 pr-2 text-xs font-bold text-slate-500 uppercase tracking-wider select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Ansicht</span>
            </span>

            {/* Employer Button */}
            <button
              type="button"
              onClick={() => setAudience('employers')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                audience === 'employers'
                  ? 'bg-slate-950 text-white shadow-sm ring-1 ring-slate-800'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
              }`}
            >
              <Building2 className={`w-4 h-4 shrink-0 transition-colors ${audience === 'employers' ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>Für Arbeitgeber & Chefs</span>
            </button>

            {/* Candidate Button */}
            <button
              type="button"
              onClick={() => setAudience('candidates')}
              className={`flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                audience === 'candidates'
                  ? 'bg-slate-950 text-white shadow-sm ring-1 ring-slate-800'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-white/80'
              }`}
            >
              <UserCheck className={`w-4 h-4 shrink-0 transition-colors ${audience === 'candidates' ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span>Für Bewerber & Talente</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Dynamic Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold shadow-xs border transition-colors bg-white">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-950">Explorative Demo • Kostenfrei & ohne Registrierung</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-slate-950 tracking-[-0.03em] leading-[1.1]">
              Arbeitsweisen besprechen – <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-emerald-600">
                mit drei kurzen Praxisszenarien.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-xl">
              Entdecke bevorzugte Vorgehensweisen und nutze das Ergebnis als Einstieg ins Bewerbungsgespräch. Kostenlose Demo, ohne Registrierung.
            </p>

            {/* Cohesive, Engaging CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onStartSimulation}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-sm font-black bg-gradient-to-r from-amber-450 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-450 text-slate-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all cursor-pointer active:scale-95 border border-amber-500 group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-slate-950 animate-ping group-hover:animate-none"></span>
                <span>Praxistest ausprobieren</span>
                <ArrowRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-1" />
              </button>

              {audience === 'employers' ? (
                <button
                  type="button"
                  onClick={onExploreGaps}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-xs font-bold bg-white text-slate-800 hover:bg-slate-50 border border-slate-300 shadow-xs hover:shadow transition-all cursor-pointer hover:border-slate-400"
                >
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span>Team-Muster erkunden</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (onShowCandidateDetails) {
                      onShowCandidateDetails();
                    } else {
                      const el = document.getElementById('fuer-talente');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-xs font-bold bg-white text-slate-800 hover:bg-slate-50 border border-slate-300 shadow-xs hover:shadow transition-all cursor-pointer hover:border-slate-400"
                >
                  <UserCheck className="w-4 h-4 text-amber-600" />
                  <span>Nutzen für Bewerber</span>
                </button>
              )}
            </div>

            {/* Trust line */}
            <div className="text-xs text-slate-600 font-medium flex flex-wrap items-center gap-4 pt-1">
              <span className="flex items-center gap-1">
                <span className="text-emerald-600 font-bold">✓</span> 100 % kostenfrei & ohne Registrierung
              </span>
              <span className="flex items-center gap-1">
                <span className="text-emerald-600 font-bold">✓</span> Als Gesprächsimpuls im Bewerbungsprozess
              </span>
            </div>

          </div>

          {/* Right Column: Visual Interactive Live Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl relative group hover:border-amber-300 transition-all">
              
              {/* Floating Highlight Badge */}
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-slate-950 text-white text-[11px] font-bold shadow-md flex items-center gap-1.5 border border-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Demo-Vorschau</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                  <div>
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      <span>Beispiel-Ergebnis</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-amber-700">Explorative Vorschau</span>
                    </div>
                    <h4 className="text-lg font-black text-slate-950 mt-0.5">Der Konstruktive Challenger</h4>
                    <p className="text-[11px] text-slate-500">Schwerpunkt: Direkte Klärung & Eigenverantwortung</p>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs inline-block">
                      Demo-Profil
                    </span>
                  </div>
                </div>

                {/* The Visual Radar with direct subtitle */}
                <div className="bg-slate-50/70 rounded-xl border border-slate-100 p-2 text-center">
                  <div className="text-[11px] font-semibold text-slate-600 mb-1">
                    Visualisierung: <strong className="text-amber-700">Ausgewählte Handlungsoptionen</strong>
                  </div>
                  <RadarChart scores={previewScores} />
                </div>

                {/* Micro Strengths preview */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/80">
                    <span className="font-bold text-amber-950 block">Ausgeprägte Tendenz</span>
                    <span className="text-slate-700 leading-tight">Direkte, lösungsorientierte Klärung</span>
                  </div>
                  <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200/80">
                    <span className="font-bold text-emerald-950 block">Möglicher Impuls</span>
                    <span className="text-slate-700 leading-tight">Bringt Klärung in zögerliche Runden</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={onStartSimulation}
                    className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
                  >
                    Eigenen Test in 3 Szenarien starten →
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Dynamic Metric Cards Strip */}
        <div className="mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
            <div className="text-2xl lg:text-3xl font-black font-mono text-slate-950 tracking-tight">3</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Praxisszenarien</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Typische Berufsentscheidungen</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
            <div className="text-2xl lg:text-3xl font-black font-mono text-emerald-600 tracking-tight">0 €</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Kostenlose Demo</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Sofort im Browser ausprobieren</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
            <div className="text-2xl lg:text-3xl font-black font-mono text-amber-600 tracking-tight">PDF</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Gesprächsimpuls</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Ergebnis für Vorstellungsgespräche drucken</div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-amber-300 transition-colors">
            <div className="text-2xl lg:text-3xl font-black font-mono text-slate-950 tracking-tight">100 %</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Ohne Registrierung</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Keine Account-Erstellung nötig</div>
          </div>
        </div>

      </div>
    </section>
  );
};
