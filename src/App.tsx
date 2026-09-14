import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CandidateBenefits } from './components/CandidateBenefits';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { TeamGapExplorer } from './components/TeamGapExplorer';
import { RoiCalculator } from './components/RoiCalculator';
import { ScienceMethodology } from './components/ScienceMethodology';
import { MoatComparison } from './components/MoatComparison';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ScrollToTop } from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export const App: React.FC = () => {
  const [audience, setAudience] = useState<'employers' | 'candidates'>('employers');
  const [legalModalType, setLegalModalType] = useState<'impressum' | 'datenschutz' | null>(null);

  // Map clean paths to section IDs or modals
  const pathToSection: Record<string, string> = {
    '/praxistest': 'simulator',
    '/simulator': 'simulator',
    '/methode': 'methode',
    '/faq': 'faq',
    '/team-matrix': 'gap-matrix',
    '/kostenmodell': 'kostenmodell',
    '/fuer-talente': 'fuer-talente'
  };

  const handleRoute = (path: string, shouldPush: boolean = true) => {
    // Check if legal modal
    if (path === '/impressum') {
      setLegalModalType('impressum');
      if (shouldPush) window.history.pushState(null, '', '/impressum');
      return;
    }
    if (path === '/datenschutz') {
      setLegalModalType('datenschutz');
      if (shouldPush) window.history.pushState(null, '', '/datenschutz');
      return;
    }

    setLegalModalType(null);

    if (path === '/' || path === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (shouldPush) window.history.pushState(null, '', '/');
      return;
    }

    const sectionId = pathToSection[path];
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      if (shouldPush) window.history.pushState(null, '', path);
    }
  };

  // Listen to popstate (back/forward) & handle direct path on initial load
  useEffect(() => {
    // 1. If any hash is present, eliminate it completely
    if (window.location.hash) {
      const cleanPath = window.location.pathname.replace(/\/$/, '') || '/';
      window.history.replaceState(null, '', cleanPath + window.location.search);
    }

    // 2. Initial route check
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    if (currentPath !== '/') {
      setTimeout(() => {
        handleRoute(currentPath, false);
      }, 100);
    }

    // 3. Popstate listener
    const onPopState = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      handleRoute(path, false);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigateTo = (path: string) => {
    handleRoute(path, true);
  };

  const navigateToSection = (sectionId: string) => {
    // Find matching path
    const entry = Object.entries(pathToSection).find(([, id]) => id === sectionId);
    const targetPath = entry ? entry[0] : `/${sectionId}`;
    handleRoute(targetPath, true);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans flex flex-col selection:bg-zinc-200">
      {/* Navigation Header */}
      <Header
        audience={audience}
        setAudience={setAudience}
        onStartSimulation={() => navigateToSection('simulator')}
        onNavigate={navigateToSection}
        onOpenLegal={(type) => navigateTo(`/${type}`)}
        onHome={() => handleRoute('/')}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero
          audience={audience}
          setAudience={setAudience}
          onStartSimulation={() => navigateToSection('simulator')}
          onExploreGaps={() => navigateToSection('gap-matrix')}
          onShowCandidateDetails={() => navigateToSection('fuer-talente')}
        />

        {/* If candidate perspective, highlight candidate benefits first */}
        {audience === 'candidates' && (
          <CandidateBenefits onStartSimulation={() => navigateToSection('simulator')} />
        )}

        <InteractiveSimulator />

        {/* Employers specific module */}
        <TeamGapExplorer />

        {/* If employer perspective or scrollable, show candidate benefits as secondary module */}
        {audience === 'employers' && (
          <CandidateBenefits onStartSimulation={() => navigateToSection('simulator')} />
        )}

        <RoiCalculator onStartSimulation={() => navigateToSection('simulator')} />

        <ScienceMethodology />

        <MoatComparison />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenLegal={(type) => navigateTo(`/${type}`)} 
        onNavigate={navigateToSection}
        onHome={() => handleRoute('/')}
      />

      {/* Legal Modal (Impressum / DSGVO) */}
      <LegalModal
        type={legalModalType}
        onClose={() => navigateTo('/')}
      />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop onScrollTop={() => handleRoute('/')} />

      {/* Vercel Web Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
