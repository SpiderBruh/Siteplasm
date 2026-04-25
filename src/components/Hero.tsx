
'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HeroScene } from './HeroScene';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-svh flex flex-col justify-center items-center overflow-hidden pt-20">
      <HeroScene />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-code text-highlight uppercase tracking-[0.4em] text-xs md:text-sm mb-6"
        >
          [ WEB DEVELOPMENT AGENCY ]
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="font-headline text-7xl md:text-[160px] leading-[0.85] text-primary mb-8 text-balance"
          >
            WE BUILD SITES <br className="hidden md:block" /> THAT SELL
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-body text-secondary text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed text-balance"
        >
          Siteplasm* crafts fast, premium websites and web apps for businesses that want to grow — not just look good.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Button 
            className="bg-primary text-background hover:bg-highlight font-subheading uppercase tracking-widest px-10 py-7 rounded-none transition-all group"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work
          </Button>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-background font-subheading uppercase tracking-widest px-10 py-7 rounded-none transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="font-code text-[10px] text-secondary uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-highlight animate-bounce" />
      </motion.div>
    </section>
  );
};
