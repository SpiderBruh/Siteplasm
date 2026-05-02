
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const SHOWCASES = [
  {
    id: 'saas-landing',
    title: 'SaaS Marketing Page',
    desc: 'Full product landing — hero, features, social proof, CTA. Converts cold traffic into trial signups.',
    tag: 'Marketing',
    tech: ['React', 'Next.js', 'Framer Motion'],
    src: '/showcase/saas-landing.html',
    accent: '#FF3E00',
  },
  {
    id: 'dashboard',
    title: 'Analytics Dashboard',
    desc: 'Sticky sidebar, live KPI cards, inline SVG charts, and a data table. Built for agencies and SaaS products.',
    tag: 'Web App',
    tech: ['Next.js', 'Supabase', 'Recharts'],
    src: '/showcase/dashboard.html',
    accent: '#2D5BFF',
  },
  {
    id: 'mobile-app',
    title: 'Mobile App UI',
    desc: 'Three-screen hi-fi prototype in a real iPhone frame. Cover, menu, and product detail — production-ready.',
    tag: 'Mobile',
    tech: ['React Native', 'Expo', 'Firebase'],
    src: '/showcase/mobile-app.html',
    accent: '#00D26A',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    desc: 'Boutique shopping experience with hero, product grid, and cart. Built for conversion, not just aesthetics.',
    tag: 'E-Commerce',
    tech: ['Next.js', 'Shopify', 'Stripe'],
    src: '/showcase/ecommerce.html',
    accent: '#FF3E00',
  },
  {
    id: 'pricing-demo',
    title: 'Pricing & Conversion Page',
    desc: '3-tier pricing with feature comparison, guarantee section, and conversion-optimized CTAs per tier.',
    tag: 'Landing Page',
    tech: ['React', 'Tailwind', 'Sanity'],
    src: '/showcase/pricing-demo.html',
    accent: '#FFD60A',
  },
  {
    id: 'kanban-board',
    title: 'Project Management Board',
    desc: 'Kanban board with columns, card tags, assignee avatars, and sprint tracking. Jira built for real teams.',
    tag: 'Web App',
    tech: ['Next.js', 'Supabase', 'DnD'],
    src: '/showcase/kanban-board.html',
    accent: '#2D5BFF',
  },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-48 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-8">
        <div>
          <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
            [ LIVE SHOWCASES — NOT MOCKUPS ]
          </p>
          <h2 className="font-headline text-6xl md:text-9xl text-primary leading-none">
            WHAT WE BUILD
          </h2>
        </div>
        <p className="font-body text-secondary text-right max-w-sm leading-relaxed">
          Every card below is a <strong className="text-primary">live, interactive demo</strong> — not a screenshot. Click inside them. This is exactly what your clients get.
        </p>
      </div>

      <div className="w-full h-[1px] bg-border mb-16" />

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {SHOWCASES.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="group"
          >
            {/* Live iframe preview */}
            <div className="relative aspect-[16/10] overflow-hidden bg-surface border border-border group-hover:border-highlight transition-colors duration-500 mb-5">
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
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/60 backdrop-blur-sm"
              >
                <span className="font-subheading text-primary border border-primary py-3 px-6 flex items-center gap-2 hover:bg-primary hover:text-background transition-colors">
                  Open Full Preview <ExternalLink className="w-4 h-4" />
                </span>
              </a>
              {/* Accent corner */}
              <div
                className="absolute top-0 left-0 w-1 h-full"
                style={{ backgroundColor: project.accent }}
              />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="font-code text-xs text-highlight mb-2">
                  {project.tech.map(t => `[ ${t} ]`).join(' ')}
                </p>
                <h3 className="font-subheading text-xl md:text-2xl text-primary font-semibold mb-1">{project.title}</h3>
                <p className="font-body text-sm text-secondary leading-relaxed max-w-xs">{project.desc}</p>
              </div>
              <span className="font-code text-[9px] text-secondary border border-border px-2 py-1 uppercase tracking-wider flex-shrink-0 ml-4">
                {project.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center border border-border p-8 md:p-12">
        <p className="font-code text-xs text-secondary uppercase tracking-widest mb-4">[ YOUR PROJECT GOES HERE ]</p>
        <h3 className="font-headline text-4xl md:text-6xl text-primary mb-4">READY TO BUILD YOURS?</h3>
        <p className="font-body text-secondary max-w-md mx-auto mb-8">These demos were built in days. Yours will be live in 5. Let&apos;s talk.</p>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-highlight text-black font-headline text-xl uppercase tracking-widest px-12 py-5 hover:opacity-90 transition-opacity"
        >
          Start Your Project →
        </button>
      </div>
    </section>
  );
};
