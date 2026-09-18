import React from 'react';


interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
  onNavigate?: (sectionId: string) => void;
  onHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onNavigate, onHome }) => {
  const handleNav = (id: string) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHome = () => {
    if (onHome) {
      onHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
  };

  return (
    <footer className="border-t border-zinc-200 bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Top Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <button
              onClick={handleHome}
              className="flex items-center gap-2 text-left cursor-pointer group bg-transparent border-0 p-0"
              aria-label="KI-Hiring Startseite"
            >
              <span className="w-5 h-5 rounded bg-zinc-950 text-white font-mono text-[10px] font-bold flex items-center justify-center group-hover:scale-105 transition-transform">
                KH
              </span>
              <span className="font-bold text-zinc-950 text-sm">
                KI-Hiring<span className="text-zinc-400 font-normal">.de</span>
              </span>
            </button>
            <p className="text-zinc-500 text-xs max-w-md">
              Kostenlose Praxisszenarien-Demo zur Reflexion und Gesprächsvorbereitung.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600 font-medium">
            <button onClick={() => handleNav('simulator')} className="hover:text-zinc-950 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs">
              Simulation
            </button>
            <button onClick={() => handleNav('gap-matrix')} className="hover:text-zinc-950 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs">
              Team-Matrix
            </button>
            <button onClick={() => handleNav('methode')} className="hover:text-zinc-950 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs">
              Methodik
            </button>
            <button onClick={() => handleNav('kostenmodell')} className="hover:text-zinc-950 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs">
              Kostenmodell
            </button>
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-zinc-950 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs"
            >
              Impressum
            </button>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-zinc-950 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs"
            >
              Datenschutz
            </button>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-zinc-100 pt-6 text-[11px] text-zinc-400 leading-relaxed space-y-2">
          <p>
            * Modellrechnungen und Kennzahlen sind unverbindliche Beispielszenarien auf Basis deiner Eingaben und typischer Recruiting-Kostenfaktoren.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-2 text-zinc-500">
            <div>
              © {new Date().getFullYear()} Jens Kathe • KI-Hiring.de. Alle Rechte vorbehalten.
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Clientseitige Demo • Gehostet auf Vercel</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
