import React, { useState } from 'react';
import { ChevronRight, Menu, X, Building2, UserCheck } from 'lucide-react';

interface HeaderProps {
  audience: 'employers' | 'candidates';
  setAudience: (val: 'employers' | 'candidates') => void;
  onStartSimulation: () => void;
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  onNavigate: (sectionId: string) => void;
  onHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  audience, 
  setAudience, 
  onStartSimulation,
  onNavigate,
  onHome
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    if (onHome) {
      onHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
        
        {/* Brand (Left) */}
        <div className="shrink-0">
          <button 
            onClick={scrollToTop} 
            className="flex items-center gap-2.5 group cursor-pointer text-left bg-transparent border-0 p-0"
            aria-label="KI-Hiring Startseite"
          >
            <div className="w-8 h-8 rounded-xl bg-slate-950 flex items-center justify-center text-white text-xs font-black transition-transform group-hover:scale-105 shadow-xs border border-slate-800">
              <span className="text-amber-450">K</span>H
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg font-black tracking-tight text-slate-950">
                KI-Hiring<span className="text-amber-600 font-bold">.de</span>
              </span>
            </div>
          </button>
        </div>

        {/* Clean Centered Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-semibold text-slate-600 flex-1">
          <button
            onClick={() => onNavigate('simulator')}
            className="hover:text-amber-600 transition-colors cursor-pointer bg-transparent border-0 p-0 text-sm font-semibold text-slate-600"
          >
            Praxistest
          </button>
          <button
            onClick={() => onNavigate('methode')}
            className="hover:text-amber-600 transition-colors cursor-pointer bg-transparent border-0 p-0 text-sm font-semibold text-slate-600"
          >
            Methode
          </button>
          <button
            onClick={() => onNavigate('faq')}
            className="hover:text-amber-600 transition-colors cursor-pointer bg-transparent border-0 p-0 text-sm font-semibold text-slate-600"
          >
            FAQ
          </button>
        </nav>

        {/* Primary CTA (Right) */}
        <div className="hidden sm:flex items-center shrink-0">
          <button
            onClick={onStartSimulation}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black bg-amber-450 hover:bg-amber-400 text-slate-950 transition-all cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-95 border border-amber-500"
          >
            <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse"></span>
            <span>Praxistest ausprobieren</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-950" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-5 space-y-4 text-xs font-medium shadow-xl">
          <div className="p-1.5 bg-slate-100 rounded-xl border border-slate-200 space-y-1.5">
            <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500 px-1">
              Perspektive wählen:
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setAudience('employers')}
                className={`flex-1 py-2 rounded-lg text-xs font-black flex items-center justify-center gap-1.5 ${
                  audience === 'employers'
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Arbeitgeber</span>
              </button>
              <button
                onClick={() => setAudience('candidates')}
                className={`flex-1 py-2 rounded-lg text-xs font-black flex items-center justify-center gap-1.5 ${
                  audience === 'candidates'
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-200'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bewerber</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('simulator');
            }}
            className="block w-full text-left py-2 text-slate-900 font-bold bg-transparent border-0 cursor-pointer"
          >
            Praxistest
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('methode');
            }}
            className="block w-full text-left py-2 text-slate-900 font-bold bg-transparent border-0 cursor-pointer"
          >
            Methode
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('faq');
            }}
            className="block w-full text-left py-2 text-slate-900 font-bold bg-transparent border-0 cursor-pointer"
          >
            FAQ
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartSimulation();
              }}
              className="w-full py-3 rounded-xl bg-amber-450 hover:bg-amber-400 text-slate-950 text-xs font-black text-center shadow-sm"
            >
              Praxistest ausprobieren
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
