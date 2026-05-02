'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck, Lightning } from '@phosphor-icons/react';

const TIERS = [
  {
    name: 'Starter',
    price: '₱15,000',
    anchor: 'Under what one month of a freelancer costs',
    desc: 'A fast, professional landing page that captures leads and looks premium. Done in 5 days.',
    featured: false,
    features: [
      '1-page conversion site',
      'Mobile-responsive design',
      'Contact form + email notifications',
      'SEO foundation (meta, schema, sitemap)',
      '5-day delivery',
      'One round of revisions',
    ],
    missing: ['Multi-page site', 'CMS / self-editing', 'Custom web app'],
    cta: 'Start With Starter',
    budget: 'tier1',
  },
  {
    name: 'Growth',
    price: '₱30,000',
    anchor: 'Less than one employee\'s monthly salary',
    desc: 'A full website that books clients, showcases your work, and grows your business on autopilot.',
    featured: true,
    features: [
      'Up to 8 pages',
      'Custom design system (yours forever)',
      'CMS — update content yourself in 2 min',
      'Booking or inquiry system',
      'SEO + Google Analytics setup',
      'Performance-optimized (95+ Lighthouse)',
      'Two rounds of revisions',
      '90-day ROI guarantee',
    ],
    missing: [],
    cta: 'This Is The One',
    budget: 'tier2',
  },
  {
    name: 'Scale',
    price: '₱60,000+',
    anchor: 'A fraction of hiring an in-house team',
    desc: 'Full web apps, SaaS platforms, and custom systems. If it\'s complex, this is where we go.',
    featured: false,
    features: [
      'Custom web application',
      'User auth + role management',
      'Database + backend (Supabase)',
      'Payment integration (Stripe/PayMongo)',
      'Admin dashboard',
      'API integrations',
      'Dedicated launch support',
      '90-day ROI guarantee',
    ],
    missing: [],
    cta: 'Let\'s Talk Scope',
    budget: 'tier4',
  },
];

export const Pricing: React.FC = () => {
  const handleCTA = (budget: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-48 bg-background border-b border-border">
      <div className="container mx-auto px-6 md:px-[10%]">
        <div className="text-center mb-16">
          <p className="font-code font-bold text-highlight uppercase tracking-widest text-sm mb-6">
            Transparent Pricing — No Surprises
          </p>
          <h2 className="font-headline font-bold text-6xl md:text-9xl text-primary leading-none mb-8 uppercase tracking-tighter">
            INVEST ONCE.<br />GROW FOREVER.
          </h2>
          <p className="font-body font-medium text-secondary text-xl max-w-2xl mx-auto leading-relaxed">
            One payment. One project. You own it forever. Most agencies charge this per month — and deliver less.
          </p>
        </div>

        {/* Guarantee Banner */}
        <div className="border border-border bg-surface p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left hover:border-highlight transition-colors">
          <div className="flex-shrink-0">
            <ShieldCheck weight="fill" className="w-16 h-16 text-highlight" />
          </div>
          <div>
            <h3 className="font-headline font-bold text-3xl md:text-4xl text-primary mb-3 uppercase tracking-wide">90-DAY ROI GUARANTEE</h3>
            <p className="font-body font-medium text-secondary text-lg leading-relaxed">
              If your new website doesn't generate more leads, bookings, or sales within 90 days of going live — we come back in and rebuild it. <strong className="text-primary font-bold">Free. No questions. No BS.</strong> That's how confident we are in what we build.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-border bg-border">
          {TIERS.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`p-8 md:p-12 border border-border flex flex-col transition-colors ${tier.featured ? 'bg-primary text-background' : 'bg-background hover:bg-surface'}`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 h-2 bg-highlight" />
              )}

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <p className={`font-code font-bold text-xs uppercase tracking-widest ${tier.featured ? 'text-highlight' : 'text-primary'}`}>{tier.name}</p>
                  {tier.featured && (
                    <span className="flex items-center gap-1 font-code font-bold text-[10px] bg-highlight text-primary px-2 py-1 uppercase tracking-widest">
                      <Lightning weight="fill" className="w-3 h-3" /> Most Popular
                    </span>
                  )}
                </div>
                <div className={`font-headline font-bold text-5xl md:text-6xl mb-2 tracking-tighter ${tier.featured ? 'text-background' : 'text-primary'}`}>{tier.price}</div>
                <p className={`font-code font-bold text-[10px] uppercase tracking-widest ${tier.featured ? 'text-background/60' : 'text-secondary'}`}>{tier.anchor}</p>
              </div>

              <p className={`font-body font-medium text-base leading-relaxed mb-10 pb-10 border-b ${tier.featured ? 'text-background/90 border-background/20' : 'text-secondary border-border'}`}>
                {tier.desc}
              </p>

              <ul className="space-y-4 mb-12 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 font-body font-medium text-sm">
                    <Check weight="bold" className={`w-5 h-5 flex-shrink-0 mt-0 ${tier.featured ? 'text-highlight' : 'text-primary'}`} />
                    <span className={tier.featured ? 'text-background' : 'text-primary'}>{f}</span>
                  </li>
                ))}
                {tier.missing.map((f, j) => (
                  <li key={`m-${j}`} className="flex items-start gap-3 font-body font-medium text-sm opacity-40">
                    <span className={`w-5 h-5 flex-shrink-0 mt-0 flex items-center justify-center font-code font-bold text-xs ${tier.featured ? 'text-background' : 'text-secondary'}`}>—</span>
                    <span className={tier.featured ? 'text-background' : 'text-secondary'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCTA(tier.budget)}
                className={`w-full py-6 font-headline font-bold text-xl uppercase tracking-widest transition-transform flex items-center justify-center gap-3 active:scale-[0.98] ${
                  tier.featured
                    ? 'bg-highlight text-primary hover:bg-white'
                    : 'bg-primary text-background hover:bg-highlight hover:text-primary'
                }`}
              >
                {tier.cta}
                <ArrowRight weight="bold" className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-code font-bold text-xs text-secondary uppercase tracking-widest">
            All prices in PHP · Hosting setup included · VAT not included · Prices subject to project scope
          </p>
        </div>
      </div>
    </section>
  );
};
