
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, ShoppingBag, Terminal, Search, Zap, Brain } from 'lucide-react';

const SERVICES = [
  {
    title: 'Conversion Landing Pages',
    desc: 'Your homepage is either making you money or costing you money. We build landing pages engineered to turn strangers into buyers — with proven layouts, scroll-stopping copy frameworks, and CTAs that actually get clicked.',
    icon: Zap,
    size: 'col-span-2',
    proof: '→ Avg. 3.2× more inquiries vs. DIY sites',
  },
  {
    title: 'Web Apps & SaaS',
    desc: 'Complex dashboards, client portals, and full SaaS platforms. Built on Next.js, Supabase, and Sanity — the same stack powering multi-million dollar products.',
    icon: Code2,
    size: 'col-span-1',
    proof: '→ 5 SaaS MVPs launched in 2024',
  },
  {
    title: 'E-Commerce',
    desc: 'Shopify or custom. Either way, your store will load fast, look premium, and sell. We handle the tech so you can focus on the product.',
    icon: ShoppingBag,
    size: 'col-span-1',
    proof: '→ One client: ₱0 → ₱80K/mo in 60 days',
  },
  {
    title: 'Backend & Databases',
    desc: 'Real-time databases, user auth, admin panels, and APIs that don\'t break when traffic spikes. We build the infrastructure that scales.',
    icon: Terminal,
    size: 'col-span-1',
    proof: '→ Supabase + Firebase + Vercel edge',
  },
  {
    title: 'SEO & Performance',
    desc: 'We don\'t just build fast sites — we build sites that rank. Schema markup, Core Web Vitals, and content structure that search engines reward.',
    icon: Search,
    size: 'col-span-1',
    proof: '→ Avg. 95+ Lighthouse score on delivery',
  },
  {
    title: 'AI-Augmented Development',
    desc: 'We don\'t just use AI — we build it into your products. Chatbots, AI assistants, automated workflows, and intelligent forms that qualify leads before you even talk to them.',
    icon: Brain,
    size: 'col-span-2',
    proof: '→ AI inquiry assistant built for Siteplasm itself',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-48 bg-charcoal/30">
      <div className="container mx-auto px-6">
        <div className="mb-6">
          <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
            [ CAPABILITIES ]
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-headline text-6xl md:text-9xl text-primary leading-none">
              WE BUILD<br />FOR RESULTS.
            </h2>
            <p className="font-body text-secondary max-w-xs leading-relaxed md:text-right">
              Every service is sold as an outcome, not an output. We don&apos;t charge for &ldquo;pages.&rdquo; We charge for results.
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-border mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className={`${s.size} bg-surface p-8 md:p-10 border border-border relative overflow-hidden group hover:border-highlight/40 transition-all duration-500`}
            >
              <div className="mb-6">
                <s.icon className="w-8 h-8 text-highlight" />
              </div>
              <h3 className="font-subheading text-xl md:text-2xl text-primary mb-3 leading-tight font-semibold">
                {s.title}
              </h3>
              <p className="font-body text-secondary leading-relaxed mb-6 text-sm">
                {s.desc}
              </p>
              <p className="font-code text-[10px] text-highlight/70 uppercase tracking-wider border-t border-border pt-4">
                {s.proof}
              </p>

              <div className="absolute top-0 right-0 p-4 opacity-5 font-headline text-8xl text-primary pointer-events-none group-hover:opacity-10 transition-opacity">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
