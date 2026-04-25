
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn your business goals and target audience in a quick call."
  },
  {
    num: "02",
    title: "Prototype",
    desc: "We build a working prototype in 48 hours using AI-assisted development."
  },
  {
    num: "03",
    title: "Polish",
    desc: "We refine every pixel, animation, and interaction until it's perfect."
  },
  {
    num: "04",
    title: "Launch",
    desc: "We deploy, set up analytics, and hand off — or stay on retainer."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-48 container mx-auto px-6 overflow-hidden">
      <div className="mb-24 text-center md:text-left">
        <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
          [ THE WORKFLOW ]
        </p>
        <h2 className="font-headline text-6xl md:text-9xl text-primary">
          HOW IT WORKS
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-12 relative">
        <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-border mt-12" />
        {STEPS.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            className="relative pt-12"
          >
            <div className="mb-8 flex flex-col items-start">
              <span className="font-headline text-6xl text-highlight leading-none mb-4">
                {step.num}
              </span>
              <div className="w-8 h-[2px] bg-highlight mb-8" />
            </div>
            <h3 className="font-subheading text-2xl text-primary mb-4 uppercase tracking-wider">
              {step.title}
            </h3>
            <p className="font-body text-secondary text-lg leading-relaxed">
              {step.desc}
            </p>

            {i < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-12 right-0 w-[1px] h-32 bg-border" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
