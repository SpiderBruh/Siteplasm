
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
    <section className="relative w-full min-h-svh flex flex-col justify-center items-center overflow-hidden pt-20">
      <HeroScene />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-code text-highlight uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          [ WEB DEVELOPMENT AGENCY · BACOLOD, PHILIPPINES ]
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: 'circOut' }}
            className="font-headline text-7xl md:text-[148px] leading-[0.85] text-primary mb-8"
          >
            WE BUILD SITES<br className="hidden md:block" />
            THAT <span className="text-highlight italic">PRINT</span><br className="hidden md:block" />
            MONEY.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-body text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Not brochures. Not pretty pictures. Revenue machines.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="font-body text-secondary/60 text-base max-w-xl mx-auto mb-12 leading-relaxed"
        >
          If your new website doesn&apos;t generate more leads in 90 days, we rebuild it. Free. That&apos;s the deal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
        >
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
            Start a Project →
          </Button>
        </motion.div>

        {/* Proof Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-border max-w-3xl mx-auto"
        >
          {PROOF_STATS.map((stat, i) => (
            <div
              key={i}
              className="py-6 px-4 text-center border-r border-border last:border-r-0 md:border-r"
            >
              <div className="font-headline text-3xl md:text-4xl text-highlight leading-none mb-1">{stat.num}</div>
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
