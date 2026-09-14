import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xl text-zinc-900 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-zinc-700" />
            <h3 className="text-base font-bold text-zinc-950">
              {type === 'impressum' ? 'Impressum & Rechtliche Angaben' : 'Datenschutzerklärung (DSGVO)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {type === 'impressum' ? (
          <div className="text-xs text-zinc-600 space-y-4 leading-relaxed font-sans">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-950">Angaben gemäß § 5 DDG:</p>
              <p className="font-medium text-slate-900">Jens Kathe</p>
              <p>Hansastraße 6</p>
              <p>34119 Kassel</p>
              <p>Deutschland</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-950">Kontakt:</p>
              <p>E-Mail: <a href="mailto:jens@kathe.org" className="text-amber-600 hover:underline font-medium">jens@kathe.org</a></p>
              <p>Telefon: <a href="tel:+491786652623" className="text-slate-900 font-medium">+49 178 6652623</a></p>
              <p>Web: <a href="https://www.ki-hiring.de" className="text-slate-900 font-medium">https://www.ki-hiring.de</a></p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-950">Umsatzsteuer-Status:</p>
              <p>Kleinunternehmer nach § 19 UStG. Es wird keine Umsatzsteuer berechnet und ausgewiesen.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-950">Inhaltlich Verantwortlicher gemäß § 18 Abs. 2 MStV:</p>
              <p>
                Jens Kathe<br />
                Hansastraße 6<br />
                34119 Kassel<br />
                Deutschland
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-950">EU-Streitschlichtung & Verbraucherstreitbeilegung:</p>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>.
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-xs text-zinc-600 space-y-4 leading-relaxed font-sans">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-950">Datenschutzerklärung gemäß Art. 13 DSGVO:</p>
              <p>
                <strong>1. Verantwortlicher:</strong><br />
                Jens Kathe, Hansastraße 6, 34119 Kassel, E-Mail: jens@kathe.org
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-950">2. Keine externen CDN-Schriftarten (100 % DSGVO-konform):</p>
              <p>
                Diese Webseite bindet keinerlei Schriften externer US-Dienste (wie Google Fonts CDNs) ein. Es werden ausschließlich systemeigene Schriften Ihres Geräts verwendet. Es erfolgt keine Weitergabe Ihrer IP-Adresse an Drittanbieter beim Laden der Website.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-950">3. Clientseitige Simulation & Lokale Verarbeitung:</p>
              <p>
                Die interaktive Praxistest-Simulation wird rein lokal in Ihrem Webbrowser berechnet. Es werden während des Tests keine persönlichen Profile auf Servern gespeichert.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-950">4. Ihre Rechte:</p>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung und ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
            </div>
          </div>
        )}

        <div className="pt-3 border-t border-zinc-100 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-zinc-950 text-white font-semibold text-xs hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
