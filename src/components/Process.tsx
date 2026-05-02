
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
    <section id="process" className="py-24 md:py-48 container mx-auto px-6 overflow-hidden">
      <div className="mb-20">
        <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
          [ THE WORKFLOW ]
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-headline text-6xl md:text-9xl text-primary leading-none">
            HOW IT<br />WORKS.
          </h2>
          <p className="font-body text-secondary max-w-xs leading-relaxed md:text-right">
            From first call to live website. No fluff, no unnecessary meetings, no "agency process."
          </p>
        </div>
      </div>

      <div className="space-y-0 border border-border">
        {STEPS.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="grid md:grid-cols-[120px_1fr] border-b border-border last:border-b-0 group hover:bg-white/[0.02] transition-colors"
          >
            {/* Step number */}
            <div className="p-8 md:p-10 border-r border-border flex items-start">
              <span className="font-headline text-5xl text-highlight leading-none">{step.num}</span>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <h3 className="font-subheading text-xl md:text-2xl text-primary font-semibold mb-4">
                {step.title}
              </h3>
              <p className="font-body text-secondary text-base leading-relaxed max-w-2xl">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-8 md:p-12 border border-border bg-highlight/5 text-center">
        <p className="font-code text-xs text-highlight uppercase tracking-widest mb-3">[ THE MATH ]</p>
        <h3 className="font-headline text-3xl md:text-5xl text-primary mb-4">
          48 HOURS TO PROTOTYPE. 5 DAYS TO LAUNCH.
        </h3>
        <p className="font-body text-secondary max-w-xl mx-auto">
          While your competitors are still in their first agency meeting, your website is already live and converting.
        </p>
      </div>
    </section>
  );
};
