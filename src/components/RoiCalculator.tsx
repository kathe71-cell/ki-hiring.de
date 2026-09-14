import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info, ArrowRight, Calculator } from 'lucide-react';

interface RoiCalculatorProps {
  onStartSimulation?: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onStartSimulation }) => {
  const [hiresPerYear, setHiresPerYear] = useState<number>(12);
  const [avgSalary, setAvgSalary] = useState<number>(68000);
  const [currentFailureRate, setCurrentFailureRate] = useState<number>(16); // % Bundesdurchschnitt
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);

  // Plausible cost breakdown per probation departure:
  // 1. Direct recruiting replacement (20% of salary): Inserate, screening, interviews
  const directRecruitingCost = Math.round(avgSalary * 0.20);
  
  // 2. Unproductive salary during average 3 months ramp-up before departure:
  const sunkSalaryCost = Math.round((avgSalary / 12) * 3);
  
  // 3. Team onboarding drag (senior capacity drain):
  const teamCapacityCost = Math.round(((avgSalary * 1.15) / 12) * 3 * 0.25);
  
  // Total realistic cost per mis-hire
  const totalCostPerMisHire = directRecruitingCost + sunkSalaryCost + teamCapacityCost;

  // Expected bad hires per year currently
  const currentBadHires = (hiresPerYear * (currentFailureRate / 100));
  const currentTotalLoss = currentBadHires * totalCostPerMisHire;

  // With situational assessment, failure rate drops by ~65%
  const newFailureRate = currentFailureRate * 0.35;
  const newBadHires = (hiresPerYear * (newFailureRate / 100));
  const newTotalLoss = newBadHires * totalCostPerMisHire;

  const annualSavings = Math.round(currentTotalLoss - newTotalLoss);
  const avoidedMisHires = (currentBadHires - newBadHires).toFixed(1);

  return (
    <section id="kostenmodell" className="py-20 border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-bold uppercase tracking-wider border border-emerald-300">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span>Kosten-Rechner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
            Was euch eine Fehlbesetzung in der Probezeit wirklich kostet
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Wenn ein neuer Kollege nach 3 Monaten wieder geht, verbrennt das nicht nur Inseratskosten, 
            sondern wirft das ganze Team zurück. Rechnet hier euer echtes Einsparpotenzial aus:
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Hires */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                  <span>Geplante Neueinstellungen / Jahr:</span>
                  <span className="font-mono text-base font-black text-amber-600">{hiresPerYear} Personen</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  step="1"
                  value={hiresPerYear}
                  onChange={(e) => setHiresPerYear(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                  <span>2 Personen</span>
                  <span>25 Mittelstand</span>
                  <span>50 Scale-up</span>
                </div>
              </div>

              {/* Slider 2: Salary */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                  <span>Durchschnittliches Jahresgehalt (brutto):</span>
                  <span className="font-mono text-base font-black text-amber-600">{avgSalary.toLocaleString('de-DE')} €</span>
                </div>
                <input
                  type="range"
                  min="35000"
                  max="130000"
                  step="2500"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                  <span>35.000 € (Einsteiger)</span>
                  <span>70.000 € (Fachkraft)</span>
                  <span>130.000 € (Senior / Lead)</span>
                </div>
              </div>

              {/* Slider 3: Failure Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold text-slate-900">
                  <span>Bisherige Abbrecher in der Probezeit:</span>
                  <span className="font-mono text-base font-black text-amber-600">{currentFailureRate} %</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={currentFailureRate}
                  onChange={(e) => setCurrentFailureRate(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-500">
                  <span>5 % (Sehr selten)</span>
                  <span>16 % (Bundesdurchschnitt)</span>
                  <span>30 % (Häufige Abbrüche)</span>
                </div>
              </div>

              {/* Breakdown Toggle */}
              <div className="pt-2">
                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="text-xs font-bold text-slate-700 hover:text-amber-600 flex items-center gap-1.5 cursor-pointer transition-colors bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200"
                >
                  <Info className="w-3.5 h-3.5 text-amber-600" />
                  <span>Wie setzen sich die Kosten zusammen?</span>
                  {showBreakdown ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {showBreakdown && (
                  <div className="mt-3 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs text-slate-700">
                    <div className="flex justify-between">
                      <span>• Neue Suche & Inserate (ca. 20% Gehalt):</span>
                      <span className="font-bold text-slate-950 font-mono">{directRecruitingCost.toLocaleString('de-DE')} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Gehalt 3 Monate bis zum Abbruch:</span>
                      <span className="font-bold text-slate-950 font-mono">{sunkSalaryCost.toLocaleString('de-DE')} €</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• Zeitaufwand der Kollegen für Einarbeitung:</span>
                      <span className="font-bold text-slate-950 font-mono">{teamCapacityCost.toLocaleString('de-DE')} €</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-1.5 font-bold text-slate-950 text-xs">
                      <span>Reale Gesamtkosten pro Fehlbesetzung:</span>
                      <span className="text-amber-700 font-mono text-sm">{totalCostPerMisHire.toLocaleString('de-DE')} €</span>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Results Display */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6 shadow-xl">
              
              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400 block">
                  Eure jährliche Ersparnis durch treffsichere Einstellungen *
                </span>
                <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
                  {annualSavings.toLocaleString('de-DE')} €
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Weil im Schnitt <strong className="text-emerald-400">{avoidedMisHires} teure Fehlgriffe pro Jahr</strong> zuverlässig verhindert werden.
                </p>
              </div>

              <div className="space-y-2.5 border-t border-slate-800 pt-4 text-xs font-mono">
                <div className="flex justify-between text-slate-400">
                  <span>Bisherige Kündigungen in Probezeit:</span>
                  <span className="text-rose-300 font-bold">ca. {currentBadHires.toFixed(1)} Personen</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Mit Praxistest von KI-Hiring:</span>
                  <span className="text-emerald-400 font-bold">nur noch ca. {newBadHires.toFixed(1)} Personen</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Kosten pro einzelnem Fehlgriff:</span>
                  <span className="text-amber-300 font-bold">{totalCostPerMisHire.toLocaleString('de-DE')} €</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    if (onStartSimulation) {
                      onStartSimulation();
                    } else {
                      const el = document.getElementById('simulator');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-amber-450 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-md active:scale-95 cursor-pointer border border-amber-500"
                >
                  <span>Praxistest jetzt selbst ausprobieren *</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>

            </div>

          </div>

          {/* Legal Note */}
          <div className="mt-8 pt-4 border-t border-slate-200 text-center">
            <p className="text-[11px] text-slate-500 leading-normal">
              * Modellrechnung. Die tatsächliche Höhe hängt vom individuellen Nutzungsverhalten und den Konditionen des Anbieters ab.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
