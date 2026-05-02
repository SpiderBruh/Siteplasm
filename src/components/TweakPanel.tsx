'use client';

import { useState, useEffect } from 'react';
import { Settings, X, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ACCENT_PRESETS = [
  { id: 'electric-orange', val: '#FF3E00', label: 'Electric' },
  { id: 'matrix-green', val: '#00FF41', label: 'Matrix' },
  { id: 'cobalt', val: '#2D5BFF', label: 'Cobalt' },
  { id: 'hot-pink', val: '#FF0055', label: 'Hyper' },
  { id: 'white', val: '#FFFFFF', label: 'Stark' },
];

const DENSITY_PRESETS = [
  { id: 'tight', val: '0.75', label: 'Tight' },
  { id: 'normal', val: '1.0', label: 'Normal' },
  { id: 'roomy', val: '1.4', label: 'Roomy' },
];

export default function TweakPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [accent, setAccent] = useState('#FF3E00');
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
    updateAccent('#FF3E00');
    updateDensity('1.0');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-[100] p-3 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-transform"
        aria-label="Open Design Tweaks"
      >
        <Settings size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-80 bg-black/90 backdrop-blur-xl border-r border-white/10 z-[101] p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-headline text-2xl tracking-tight">DESIGN TWEAKS</h2>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-10">
              {/* Accent Color */}
              <div>
                <label className="font-code text-xs text-white/40 uppercase mb-4 block tracking-widest">
                  Accent Color
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {ACCENT_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => updateAccent(p.val)}
                      className={`w-full aspect-square rounded-sm transition-all ${
                        accent === p.val ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-110' : 'opacity-60 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: p.val }}
                      title={p.label}
                    />
                  ))}
                </div>
              </div>

              {/* Density */}
              <div>
                <label className="font-code text-xs text-white/40 uppercase mb-4 block tracking-widest">
                  Layout Density
                </label>
                <div className="flex bg-white/5 p-1 rounded-sm">
                  {DENSITY_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => updateDensity(p.val)}
                      className={`flex-1 py-2 text-xs font-code transition-all ${
                        density === p.val ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reset */}
              <button
                onClick={reset}
                className="flex items-center gap-2 text-xs font-code text-white/40 hover:text-white transition-colors mt-auto"
              >
                <RotateCcw size={12} />
                RESET TO BRAND DEFAULT
              </button>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[10px] font-code text-white/20 leading-relaxed">
                Siteplasm* Design Engine v1.0<br />
                Powered by Open Design Skills
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
