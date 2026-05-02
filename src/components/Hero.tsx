'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CaretDown, ArrowRight } from '@phosphor-icons/react';
import { HeroScene } from './HeroScene';

const PROOF_STATS = [
  { num: '47+', label: 'Businesses Scaled' },
  { num: '5-Day', label: 'Delivery Guaranteed' },
  { num: '90-Day', label: 'ROI Guarantee' },
];

const WORDS = ["PRINT MONEY", "SCALE FAST", "WIN MARKETS", "DOMINATE"];

const Typewriter = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500); // Change word every 2.5s for that mechanical, decisive feel
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-flex items-end overflow-hidden h-[15vw] md:h-[8vw] min-w-[300px]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute left-0 text-highlight whitespace-nowrap"
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
      <span className="opacity-0 whitespace-nowrap pointer-events-none">PRINT MONEY</span>
      {/* Blinking Cursor */}
      <motion.div 
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="w-[0.8vw] h-[12vw] md:h-[7vw] bg-primary ml-4 mb-[2vw] md:mb-[1vw]" 
      />
    </div>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-start overflow-hidden pt-24 pb-0 border-b border-border bg-background">
      <HeroScene />

      {/* Vertical architectural grid lines */}
      <div className="absolute left-6 md:left-[10%] top-0 bottom-0 w-[1px] bg-border hidden md:block z-0" />
      <div className="absolute right-6 md:right-[10%] top-0 bottom-0 w-[1px] bg-border hidden md:block z-0" />

      <div className="container mx-auto px-6 md:px-[10%] relative z-10 w-full flex-grow flex flex-col justify-center">

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          {/* Left Column: Massive Typography */}
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[2px] bg-highlight" />
              <span className="font-code font-bold text-highlight uppercase tracking-widest text-xs">
                Web Development Agency
              </span>
            </motion.div>

            <div className="flex flex-col gap-0 mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-headline font-bold text-[15vw] md:text-[8vw] leading-[0.85] text-primary tracking-tighter uppercase"
              >
                WE BUILD
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-headline font-bold text-[15vw] md:text-[8vw] leading-[0.85] text-primary tracking-tighter uppercase"
              >
                SITES THAT
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-headline font-bold text-[15vw] md:text-[8vw] leading-[0.85] text-highlight tracking-tighter uppercase flex flex-wrap items-end gap-2 md:gap-4"
              >
                <Typewriter />
                <span className="text-primary text-[10vw] md:text-[5vw] mb-2 leading-none">*</span>
              </motion.h1>
            </div>
          </div>

          {/* Right Column: Copy and CTA */}
          <div className="md:col-span-4 flex flex-col justify-end pb-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="border-l-2 border-primary pl-6 mb-8"
            >
              <p className="font-body text-primary font-medium text-lg leading-relaxed mb-4">
                Not brochures. Not pretty pictures. 
                <br/><strong>Revenue machines.</strong>
              </p>
              <p className="font-code font-semibold text-secondary text-xs leading-relaxed uppercase tracking-wide">
                If your new site doesn't generate more leads in 90 days — we rebuild it free.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col gap-4"
            >
              <Button
                className="w-full bg-primary text-background hover:bg-highlight hover:text-primary font-headline font-bold text-lg uppercase tracking-widest py-8 rounded-none transition-colors duration-300 group border border-primary hover:border-highlight"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Our Work <ArrowRight weight="bold" className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Ticker */}
      <div className="w-full border-t border-b border-border bg-highlight overflow-hidden relative z-10 py-3">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {/* Repeating content for seamless marquee */}
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center gap-8 mx-4">
              <span className="font-code font-bold text-primary uppercase tracking-widest text-sm">NO BS</span>
              <span className="text-primary/50 text-xs">/</span>
              <span className="font-code font-bold text-primary uppercase tracking-widest text-sm">100% ROI</span>
              <span className="text-primary/50 text-xs">/</span>
              <span className="font-code font-bold text-primary uppercase tracking-widest text-sm">5-DAY DELIVERY</span>
              <span className="text-primary/50 text-xs">/</span>
              <span className="font-code font-bold text-primary uppercase tracking-widest text-sm">ARCHITECTURAL QUALITY</span>
              <span className="text-primary/50 text-xs">/</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Brutalist Data Bar Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="w-full border-b border-border bg-surface relative z-10"
      >
        <div className="container mx-auto px-6 md:px-[10%] flex flex-col md:flex-row items-stretch">
          <div className="flex-grow flex flex-wrap">
            {PROOF_STATS.map((stat, i) => (
              <div
                key={i}
                className="flex-1 min-w-[140px] py-6 px-6 border-r border-border border-b md:border-b-0 last:border-r-0 md:last:border-r flex flex-col justify-center bg-background"
              >
                <div className="font-headline font-bold text-3xl md:text-4xl text-primary leading-none mb-2">{stat.num}</div>
                <div className="font-code font-bold text-[10px] text-secondary uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
          <div 
            className="hidden md:flex items-center justify-center px-12 border-border cursor-pointer hover:bg-border/50 transition-colors bg-surface"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <CaretDown weight="bold" className="w-8 h-8 text-primary animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
