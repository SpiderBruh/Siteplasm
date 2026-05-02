'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowSquareOut } from '@phosphor-icons/react';

const SHOWCASES = [
  {
    id: 'saas-landing',
    title: 'SaaS Marketing Page',
    desc: 'Full product landing — hero, features, social proof, CTA. Converts cold traffic into trial signups.',
    tag: 'Marketing',
    tech: ['React', 'Next.js', 'Framer Motion'],
    src: '/showcase/saas-landing.html',
    accent: '#CA8A04', // Using the Gold accent for all to keep palette consistent
  },
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    desc: 'Sticky sidebar, live KPI cards, inline SVG charts, and a data table. Built for agencies and SaaS products.',
    tag: 'Web App',
    tech: ['Next.js', 'Supabase', 'Recharts'],
    src: '/showcase/dashboard.html',
    accent: '#CA8A04',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App UI',
    desc: 'Three-screen hi-fi prototype in a real iPhone frame. Cover, menu, and product detail — production-ready.',
    tag: 'Mobile',
    tech: ['React Native', 'Expo', 'Firebase'],
    src: '/showcase/mobile-app.html',
    accent: '#CA8A04',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    desc: 'Boutique shopping experience with hero, product grid, and cart. Built for conversion, not just aesthetics.',
    tag: 'E-Commerce',
    tech: ['Next.js', 'Shopify', 'Stripe'],
    src: '/showcase/ecommerce.html',
    accent: '#CA8A04',
  },
  {
    id: 'pricing-demo',
    title: 'Pricing & Conversion Page',
    desc: '3-tier pricing with feature comparison, guarantee section, and conversion-optimized CTAs per tier.',
    tag: 'Landing Page',
    tech: ['React', 'Tailwind', 'Sanity'],
    src: '/showcase/pricing-demo.html',
    accent: '#CA8A04',
  },
  {
    id: 'kanban-board',
    title: 'Project Management Board',
    desc: 'Kanban board with columns, card tags, assignee avatars, and sprint tracking. Jira built for real teams.',
    tag: 'Web App',
    tech: ['Next.js', 'Supabase', 'DnD'],
    src: '/showcase/kanban-board.html',
    accent: '#CA8A04',
  },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-48 container mx-auto px-6 md:px-[10%] border-b border-border">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <p className="font-code font-bold text-highlight uppercase tracking-widest text-sm mb-6">
            Live Showcases — Not Mockups
          </p>
          <h2 className="font-headline font-bold text-6xl md:text-9xl text-primary leading-none uppercase tracking-tighter">
            WHAT WE BUILD
          </h2>
        </div>
        <p className="font-body text-secondary font-medium text-right max-w-sm leading-relaxed pb-4">
          Every card below is a <strong className="text-primary">live, interactive demo</strong> — not a screenshot. Click inside them. This is exactly what your clients get.
        </p>
      </div>

      <div className="w-full h-[1px] bg-border mb-16" />

      {/* Brutalist Masonry-like Grid */}
      <div className="grid md:grid-cols-2 gap-0 border border-border bg-border">
        {SHOWCASES.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.1 }}
            className="group bg-background border border-border p-6 md:p-10 flex flex-col justify-between hover:bg-surface transition-colors"
          >
            {/* Live iframe preview */}
            <div className="relative aspect-[16/10] overflow-hidden bg-background border border-border mb-8">
              <iframe
                src={project.src}
                className="w-full h-full pointer-events-none"
                style={{ transform: 'scale(1)', transformOrigin: 'top left' }}
                loading="lazy"
                title={project.title}
                sandbox="allow-same-origin allow-scripts"
              />
              {/* Hover overlay */}
              <a
                href={project.src}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 bg-primary/90"
              >
                <span className="font-headline font-bold text-background border border-background py-4 px-8 flex items-center gap-3 hover:bg-background hover:text-primary transition-colors text-lg uppercase tracking-widest">
                  Open Full Preview <ArrowSquareOut weight="bold" className="w-6 h-6" />
                </span>
              </a>
            </div>

            <div className="flex flex-col justify-between items-start flex-grow">
              <div className="w-full">
                <div className="flex justify-between items-center w-full mb-4">
                  <h3 className="font-headline font-bold text-2xl md:text-3xl text-primary uppercase tracking-wide">{project.title}</h3>
                  <span className="font-code font-bold text-[10px] text-primary border border-border bg-surface px-3 py-1.5 uppercase tracking-widest flex-shrink-0 ml-4">
                    {project.tag}
                  </span>
                </div>
                <p className="font-body font-medium text-base text-secondary leading-relaxed mb-6">{project.desc}</p>
              </div>
              <p className="font-code font-bold text-xs text-highlight uppercase tracking-widest border-t border-border pt-4 w-full">
                {project.tech.map(t => `[ ${t} ]`).join(' ')}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center border-2 border-primary bg-highlight p-12 md:p-24 relative overflow-hidden group">
        <p className="font-code font-bold text-primary uppercase tracking-widest mb-6 relative z-10">[ YOUR PROJECT GOES HERE ]</p>
        <h3 className="font-headline font-bold text-5xl md:text-8xl text-primary mb-8 tracking-tighter uppercase relative z-10">READY TO BUILD YOURS?</h3>
        <p className="font-body font-bold text-xl text-primary/80 max-w-lg mx-auto mb-10 relative z-10">These demos were built in days. Yours will be live in 5. Let's talk.</p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary text-background font-headline font-bold text-2xl uppercase tracking-widest px-12 py-6 hover:scale-[0.98] transition-transform relative z-10 active:scale-[0.95]"
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
};
