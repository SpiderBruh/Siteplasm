'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { List, X } from '@phosphor-icons/react';

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
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
          scrolled ? 'bg-background border-border py-4' : 'bg-transparent border-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div
            className="flex items-center gap-0.5 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-headline font-bold text-2xl text-primary tracking-tight">SITEPLASM</span>
            <span className="font-headline font-bold text-2xl text-highlight">*</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="font-code text-xs uppercase tracking-widest text-secondary hover:text-highlight transition-colors font-semibold"
              >
                {item}
              </button>
            ))}
            <Button
              className="bg-primary text-background hover:bg-highlight hover:text-background font-headline font-bold text-sm uppercase tracking-widest px-6 py-6 rounded-none transition-all border-none"
              onClick={() => scrollTo('contact')}
            >
              Start a Project
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
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
              className="font-headline font-bold text-4xl text-primary py-4 border-b border-border text-left hover:text-highlight transition-colors"
            >
              {item}
            </button>
          ))}
          <div className="mt-8">
            <Button
              className="w-full bg-primary text-background hover:bg-highlight font-headline font-bold text-xl uppercase tracking-widest py-8 rounded-none border-none"
              onClick={() => scrollTo('contact')}
            >
              Start a Project
            </Button>
          </div>
          <p className="font-code text-[10px] text-secondary uppercase tracking-widest mt-8 text-center font-bold">
            Siteplasm* · Cebu City, Philippines
          </p>
        </div>
      )}
    </>
  );
};
