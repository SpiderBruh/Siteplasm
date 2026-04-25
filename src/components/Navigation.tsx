
'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-1 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-headline text-3xl text-primary">SITEPLASM</span>
          <span className="font-headline text-3xl text-highlight">*</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Work', 'Services', 'Process', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-subheading text-sm uppercase tracking-widest text-secondary hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="font-subheading text-xs uppercase tracking-widest border-primary text-primary hover:bg-primary hover:text-background transition-all px-6 py-5 rounded-none"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </Button>
        </div>

        {/* Mobile menu could be added here if needed */}
      </div>
    </nav>
  );
};
