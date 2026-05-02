
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

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
    <section id="pricing" className="py-24 md:py-48 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
            [ TRANSPARENT PRICING — NO SURPRISES ]
          </p>
          <h2 className="font-headline text-6xl md:text-9xl text-primary leading-none mb-6">
            INVEST ONCE.<br />GROW FOREVER.
          </h2>
          <p className="font-body text-secondary text-xl max-w-2xl mx-auto leading-relaxed">
            One payment. One project. You own it forever. Most agencies charge this per month — and deliver less.
          </p>
        </div>

        {/* Guarantee Banner */}
        <div className="border border-highlight/30 bg-highlight/5 p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
          <div className="text-4xl flex-shrink-0">🛡️</div>
          <div>
            <h3 className="font-headline text-2xl text-highlight mb-1">90-DAY ROI GUARANTEE</h3>
            <p className="font-body text-secondary leading-relaxed">
              If your new website doesn&apos;t generate more leads, bookings, or sales within 90 days of going live — we come back in and rebuild it. <strong className="text-primary">Free. No questions. No BS.</strong> That&apos;s how confident we are in what we build.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-border">
          {TIERS.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`p-8 md:p-10 border-r border-border last:border-r-0 relative flex flex-col ${tier.featured ? 'bg-white/[0.02]' : ''}`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-highlight" />
              )}
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-highlight text-black font-code text-[10px] px-4 py-1 uppercase tracking-widest whitespace-nowrap">
                  ⚡ Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className="font-code text-xs text-secondary uppercase tracking-widest mb-2">{tier.name}</p>
                <div className="font-headline text-5xl md:text-6xl text-primary mb-1">{tier.price}</div>
                <p className="font-code text-[10px] text-secondary/50 italic">{tier.anchor}</p>
              </div>

              <p className="font-body text-secondary text-sm leading-relaxed mb-8">{tier.desc}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 font-body text-sm text-primary">
                    <Check className="w-4 h-4 text-highlight flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
                {tier.missing.map((f, j) => (
                  <li key={`m-${j}`} className="flex items-start gap-3 font-body text-sm text-secondary/30">
                    <span className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center font-code text-xs">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCTA(tier.budget)}
                className={`w-full py-4 font-headline text-lg uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${
                  tier.featured
                    ? 'bg-highlight text-black hover:opacity-90'
                    : 'border border-border text-secondary hover:border-white hover:text-white'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="font-code text-[10px] text-secondary/30 uppercase tracking-widest">
            All prices in PHP · Hosting setup included · VAT not included · Prices subject to project scope
          </p>
        </div>
      </div>
    </section>
  );
};
