'use client';

import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We get on a 30-minute call. You tell us what you need. We tell you exactly what we\'ll build, what it\'ll cost, and when it\'ll be done. No proposals, no "we\'ll get back to you." You get a clear answer the same day.',
  },
  {
    num: '02',
    title: 'Prototype in 48h',
    desc: 'Within 48 hours of kickoff, you have a working prototype. Real pages. Real interactions. Not a Figma file — an actual website you can click through and show to people. This is where most agencies would still be writing a brief.',
  },
  {
    num: '03',
    title: 'Refine & Polish',
    desc: 'We take your feedback and make it perfect. Copy, layout, animations, mobile — everything gets reviewed until it\'s exactly right. You get two full rounds of revisions included. The details matter. We don\'t rush this part.',
  },
  {
    num: '04',
    title: 'Launch & Hand Off',
    desc: 'We deploy to your domain, set up analytics, and walk you through the CMS. You leave owning everything — code, domain, accounts. No monthly fees to access your own website. Then the 90-day clock starts.',
  },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-48 container mx-auto px-6 md:px-[10%] border-b border-border">
      <div className="mb-20">
        <p className="font-code font-bold text-highlight uppercase tracking-widest text-sm mb-6">
          The Workflow
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h2 className="font-headline font-bold text-6xl md:text-9xl text-primary leading-none uppercase tracking-tighter">
            HOW IT<br />WORKS.
          </h2>
          <p className="font-body text-secondary font-medium max-w-sm leading-relaxed md:text-right pb-4 text-lg">
            From first call to live website. No fluff, no unnecessary meetings, no "agency process."
          </p>
        </div>
      </div>

      <div className="space-y-0 border-t border-border">
        {STEPS.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="grid md:grid-cols-[150px_1fr] border-b border-border last:border-b-0 hover:bg-surface transition-colors"
          >
            {/* Step number */}
            <div className="p-8 md:p-12 border-r border-border flex items-start justify-center md:justify-start">
              <span className="font-headline font-bold text-5xl md:text-6xl text-primary leading-none">{step.num}</span>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-headline font-bold text-2xl md:text-4xl text-primary uppercase tracking-wide mb-4">
                {step.title}
              </h3>
              <p className="font-body font-medium text-secondary text-lg leading-relaxed max-w-3xl">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-12 md:p-20 border border-border bg-highlight text-primary text-center">
        <p className="font-code font-bold text-primary uppercase tracking-widest mb-6">[ THE MATH ]</p>
        <h3 className="font-headline font-bold text-4xl md:text-6xl mb-6 tracking-tighter uppercase">
          48 HOURS TO PROTOTYPE.<br />5 DAYS TO LAUNCH.
        </h3>
        <p className="font-body font-bold text-xl max-w-2xl mx-auto">
          While your competitors are still in their first agency meeting, your website is already live and converting.
        </p>
      </div>
    </section>
  );
};
