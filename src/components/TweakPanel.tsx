'use client';

import { useState, useEffect } from 'react';
import { Gear, X, ArrowsCounterClockwise } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

const ACCENT_PRESETS = [
  { id: 'gold', val: '#CA8A04', label: 'Auth Gold' },
  { id: 'matrix-green', val: '#00FF41', label: 'Matrix' },
  { id: 'carbon', val: '#1C1917', label: 'Carbon' },
  { id: 'stark', val: '#FAFAF9', label: 'Stark' },
];

const DENSITY_PRESETS = [
  { id: 'tight', val: '0.75', label: 'Tight' },
  { id: 'normal', val: '1.0', label: 'Normal' },
  { id: 'roomy', val: '1.4', label: 'Roomy' },
];

export default function TweakPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [accent, setAccent] = useState('#CA8A04');
  const [density, setDensity] = useState('1.0');

  useEffect(() => {
    const savedAccent = localStorage.getItem('siteplasm-accent');
    const savedDensity = localStorage.getItem('siteplasm-density');
    if (savedAccent) updateAccent(savedAccent);
    if (savedDensity) updateDensity(savedDensity);
  }, []);

  const updateAccent = (val: string) => {
    setAccent(val);
    document.documentElement.style.setProperty('--accent-color', val);
    localStorage.setItem('siteplasm-accent', val);
  };

  const updateDensity = (val: string) => {
    setDensity(val);
    document.documentElement.style.setProperty('--density-mult', val);
    localStorage.setItem('siteplasm-density', val);
  };

  const reset = () => {
    updateAccent('#CA8A04');
    updateDensity('1.0');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[100] p-3 bg-primary text-background border border-primary hover:bg-highlight hover:text-primary transition-colors rounded-none"
        aria-label="Open Mechanical Tweaks"
      >
        <Gear weight="bold" size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 bottom-0 w-80 bg-background border-r border-border z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-border bg-surface">
              <h2 className="font-headline font-bold text-xl tracking-wide uppercase text-primary">SYS_CTRL</h2>
              <button onClick={() => setIsOpen(false)} className="text-secondary hover:text-primary transition-colors">
                <X weight="bold" size={20} />
              </button>
            </div>

            <div className="flex-1 p-6 space-y-10 overflow-y-auto">
              {/* Accent Color */}
              <div>
                <label className="font-code font-bold text-[10px] text-primary uppercase mb-4 block tracking-widest border-b border-border pb-2">
                  Accent Config
                </label>
                <div className="grid grid-cols-2 gap-0 border border-border">
                  {ACCENT_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => updateAccent(p.val)}
                      className={`flex flex-col items-start justify-center p-3 border-r border-b border-border last:border-b-0 even:border-r-0 hover:bg-surface transition-colors ${
                        accent === p.val ? 'bg-primary text-background' : 'text-primary'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 border border-border" style={{ backgroundColor: p.val }} />
                        <span className="font-code font-bold text-[10px] uppercase tracking-widest">{p.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Density */}
              <div>
                <label className="font-code font-bold text-[10px] text-primary uppercase mb-4 block tracking-widest border-b border-border pb-2">
                  Grid Density
                </label>
                <div className="flex flex-col border border-border">
                  {DENSITY_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => updateDensity(p.val)}
                      className={`py-3 px-4 text-xs font-code font-bold uppercase tracking-widest text-left border-b border-border last:border-b-0 hover:bg-surface transition-colors ${
                        density === p.val ? 'bg-primary text-background' : 'text-primary'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer / Reset */}
            <div className="p-6 border-t border-border bg-surface">
              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-2 py-4 font-code font-bold text-[10px] text-background bg-primary hover:bg-highlight hover:text-primary transition-colors uppercase tracking-widest"
              >
                <ArrowsCounterClockwise weight="bold" size={14} />
                Restore Default
              </button>
              <div className="mt-6 text-center">
                <p className="text-[9px] font-code text-secondary leading-relaxed uppercase tracking-widest">
                  Siteplasm* Ctrl v2.0<br />
                  Strict Auth Protocol
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
