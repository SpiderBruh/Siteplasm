
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['Work', 'Services', 'Pricing', 'Process', 'Contact'];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
          scrolled ? 'bg-background/90 backdrop-blur-md border-border py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div
            className="flex items-center gap-0.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-headline text-3xl text-primary tracking-tight">SITEPLASM</span>
            <span className="font-headline text-3xl text-highlight">*</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="font-code text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            <Button
              className="bg-highlight text-black hover:opacity-90 font-headline text-base uppercase tracking-widest px-6 py-5 rounded-none transition-all"
              onClick={() => scrollTo('contact')}
            >
              Start a Project →
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-background z-40 flex flex-col pt-24 px-8 md:hidden">
          {NAV_LINKS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="font-headline text-5xl text-primary py-4 border-b border-border text-left hover:text-highlight transition-colors"
            >
              {item}
            </button>
          ))}
          <div className="mt-8">
            <Button
              className="w-full bg-highlight text-black hover:opacity-90 font-headline text-xl uppercase tracking-widest py-6 rounded-none"
              onClick={() => scrollTo('contact')}
            >
              Start a Project →
            </Button>
          </div>
          <p className="font-code text-[10px] text-secondary/30 uppercase tracking-widest mt-8 text-center">
            Siteplasm* · Cebu City, Philippines
          </p>
        </div>
      )}
    </>
  );
};
