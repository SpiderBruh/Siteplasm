
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { HeroScene } from './HeroScene';

const PROOF_STATS = [
  { num: '47+', label: 'Businesses Scaled' },
  { num: '5-Day', label: 'Delivery Guaranteed' },
  { num: '₱0', label: 'Overhead. Ever.' },
  { num: '90-Day', label: 'ROI Guarantee' },
];

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-svh flex flex-col justify-center items-start overflow-hidden pt-24 pb-16">
      <HeroScene />

      {/* Giant floating asterisk — decorative */}
      <motion.div
        initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 2, ease: 'circOut', delay: 0.3 }}
        className="absolute right-[-2%] top-[5%] font-headline text-[30vw] md:text-[22vw] text-primary/[0.03] leading-none select-none pointer-events-none z-0"
        style={{ lineHeight: 1 }}
      >
        *
      </motion.div>

      {/* Vertical rule — editorial accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: 'circOut' }}
        className="absolute left-6 md:left-12 top-28 bottom-28 w-[1px] bg-gradient-to-b from-transparent via-highlight/30 to-transparent hidden md:block origin-top"
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-8 h-[1px] bg-highlight" />
          <span className="font-code text-highlight uppercase tracking-[0.4em] text-xs">
            Web Development Agency · Cebu, Philippines
          </span>
        </motion.div>

        {/* Main headline — split lines for drama */}
        <div className="overflow-hidden mb-3">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: 'circOut', delay: 0.1 }}
          >
            <h1 className="font-headline text-[15vw] md:text-[11vw] leading-[0.82] text-primary tracking-tight">
              WE BUILD
            </h1>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-3">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: 'circOut', delay: 0.2 }}
          >
            <h1 className="font-headline text-[15vw] md:text-[11vw] leading-[0.82] text-primary tracking-tight flex items-baseline gap-4 flex-wrap">
              SITES THAT{' '}
              <span className="italic text-highlight" style={{ fontStyle: 'italic' }}>
                PRINT
              </span>
            </h1>
          </motion.div>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.div
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: 'circOut', delay: 0.3 }}
            className="flex items-baseline gap-4 flex-wrap"
          >
            <h1 className="font-headline text-[15vw] md:text-[11vw] leading-[0.82] text-primary tracking-tight">
              MONEY
            </h1>
            <span className="font-headline text-[15vw] md:text-[11vw] leading-[0.82] text-highlight">.</span>
          </motion.div>
        </div>

        {/* Sub + CTA — side-by-side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16 mb-16"
        >
          <div className="max-w-md">
            <p className="font-body text-secondary text-lg leading-relaxed mb-2">
              Not brochures. Not pretty pictures.{' '}
              <span className="text-primary font-medium">Revenue machines.</span>
            </p>
            <p className="font-code text-secondary/50 text-xs leading-relaxed">
              If your new site doesn&apos;t generate more leads in 90 days — we rebuild it free.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button
              className="bg-highlight text-black hover:opacity-90 font-headline text-xl uppercase tracking-widest px-10 py-7 rounded-none transition-all group"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See What We Build <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-black font-subheading uppercase tracking-widest px-10 py-7 rounded-none transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </Button>
          </div>
        </motion.div>

        {/* Proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap gap-0 border-t border-border pt-8"
        >
          {PROOF_STATS.map((stat, i) => (
            <div
              key={i}
              className="pr-8 mr-8 border-r border-border last:border-r-0 last:mr-0 mb-4"
            >
              <div className="font-headline text-2xl md:text-3xl text-highlight leading-none mb-1">{stat.num}</div>
              <div className="font-code text-[9px] text-secondary uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-code text-[9px] text-secondary uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-highlight animate-bounce" />
      </motion.div>
    </section>
  );
};
