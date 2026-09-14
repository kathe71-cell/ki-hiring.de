import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollToTopProps {
  onScrollTop?: () => void;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ onScrollTop }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (onScrollTop) {
      onScrollTop();
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-slate-950 text-amber-450 hover:bg-slate-900 shadow-xl border border-slate-800 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer no-print group"
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 text-amber-450" />
    </button>
  );
};
