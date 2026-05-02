'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, DeviceMobile, Tote, Terminal, MagnifyingGlass, Lightning, Brain } from '@phosphor-icons/react';

const SERVICES = [
  {
    title: 'Conversion Landing Pages',
    desc: 'Your homepage is either making you money or costing you money. We build landing pages engineered to turn strangers into buyers — with proven layouts, scroll-stopping copy frameworks, and CTAs that actually get clicked.',
    icon: Lightning,
    size: 'md:col-span-2',
    proof: 'Avg. 3.2× more inquiries vs. DIY sites',
  },
  {
    title: 'Web Apps & SaaS',
    desc: 'Complex dashboards, client portals, and full SaaS platforms. Built on Next.js, Supabase, and Sanity — the same stack powering multi-million dollar products.',
    icon: Code,
    size: 'md:col-span-1',
    proof: '5 SaaS MVPs launched in 2024',
  },
  {
    title: 'E-Commerce',
    desc: 'Shopify or custom. Either way, your store will load fast, look premium, and sell. We handle the tech so you can focus on the product.',
    icon: Tote,
    size: 'md:col-span-1',
    proof: 'One client: ₱0 → ₱80K/mo in 60 days',
  },
  {
    title: 'Backend & Databases',
    desc: 'Real-time databases, user auth, admin panels, and APIs that don\'t break when traffic spikes. We build the infrastructure that scales.',
    icon: Terminal,
    size: 'md:col-span-1',
    proof: 'Supabase + Firebase + Vercel edge',
  },
  {
    title: 'SEO & Performance',
    desc: 'We don\'t just build fast sites — we build sites that rank. Schema markup, Core Web Vitals, and content structure that search engines reward.',
    icon: MagnifyingGlass,
    size: 'md:col-span-1',
    proof: 'Avg. 95+ Lighthouse score on delivery',
  },
  {
    title: 'AI-Augmented Development',
    desc: 'We don\'t just use AI — we build it into your products. Chatbots, AI assistants, automated workflows, and intelligent forms that qualify leads before you even talk to them.',
    icon: Brain,
    size: 'md:col-span-2',
    proof: 'AI inquiry assistant built for Siteplasm itself',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-48 bg-surface border-b border-border">
      <div className="container mx-auto px-6 md:px-[10%]">
        <div className="mb-16">
          <p className="font-code font-bold text-highlight uppercase tracking-widest text-sm mb-6">
            Capabilities
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-headline font-bold text-6xl md:text-9xl text-primary leading-none uppercase tracking-tighter">
              WE BUILD<br />FOR RESULTS.
            </h2>
            <p className="font-body text-secondary font-medium max-w-sm leading-relaxed md:text-right pb-4 text-lg">
              Every service is sold as an outcome, not an output. We don't charge for "pages." We charge for results.
            </p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-border mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border bg-border">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`${s.size} bg-background p-8 md:p-12 relative overflow-hidden group hover:bg-highlight/5 transition-colors duration-200 border border-border`}
            >
              <div className="mb-8">
                <s.icon weight="duotone" className="w-12 h-12 text-highlight" />
              </div>
              <h3 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-4 leading-tight uppercase tracking-wide">
                {s.title}
              </h3>
              <p className="font-body font-medium text-secondary leading-relaxed mb-8 text-base md:text-lg">
                {s.desc}
              </p>
              <div className="border-t border-border pt-6 mt-auto">
                <p className="font-code font-bold text-xs text-primary uppercase tracking-widest flex items-center gap-2">
                  <span className="text-highlight">→</span> {s.proof}
                </p>
              </div>

              <div className="absolute top-6 right-6 opacity-[0.03] font-headline font-bold text-8xl text-primary pointer-events-none">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
