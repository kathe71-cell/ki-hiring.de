import React from 'react';
import { COMPARISON_DATA } from '../data/simulationData';
import { Check } from 'lucide-react';

export const MoatComparison: React.FC = () => {
  return (
    <section id="vergleich" className="py-20 border-b border-zinc-200/80 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">
            [ Der Unterschied ]
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
            Klassische Bewerbungen vs. 90-Sekunden Praxistest
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Warum Lebensläufe und Standard-Fragen im Vorstellungsgespräch oft täuschen – und wie ihr sofort seht, ob es menschlich und fachlich passt.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-xl border border-zinc-200 bg-white overflow-hidden shadow-xs">
          
          <div className="grid grid-cols-1 md:grid-cols-12 bg-zinc-100 border-b border-zinc-200 p-4 text-xs font-mono text-zinc-600 font-semibold">
            <div className="md:col-span-3 uppercase">Bereich</div>
            <div className="md:col-span-4 uppercase text-zinc-600">Alte Methode (Lebenslauf & Fragebogen)</div>
            <div className="md:col-span-5 uppercase text-zinc-950 font-bold">KI-Hiring (Praxis-Simulation)</div>
          </div>

          <div className="divide-y divide-zinc-200">
            {COMPARISON_DATA.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 hover:bg-zinc-50/60 transition-colors items-start gap-3 text-xs">
                
                <div className="md:col-span-3">
                  <span className="font-bold text-zinc-950 block">{item.criterion}</span>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 font-mono text-[10px] border border-zinc-200">
                    {item.impact}
                  </span>
                </div>

                <div className="md:col-span-4 text-zinc-600 leading-relaxed flex items-start gap-2">
                  <span className="text-zinc-400 font-mono font-bold mt-0.5">✕</span>
                  <span>{item.legacy}</span>
                </div>

                <div className="md:col-span-5 text-zinc-950 font-medium leading-relaxed flex items-start gap-2 bg-zinc-50/50 p-2.5 rounded border border-zinc-200/60">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item.ki_hiring}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
