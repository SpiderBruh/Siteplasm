
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, ShoppingBag, Terminal, Search, Zap } from 'lucide-react';

const SERVICES = [
  {
    title: "Landing Pages & Marketing Sites",
    desc: "Built for speed and high conversion. We make your first impression count.",
    icon: Zap,
    size: "col-span-2",
  },
  {
    title: "Web Apps & SaaS",
    desc: "Complex dashboards, portals, and interactive platforms.",
    icon: Code2,
    size: "col-span-1",
  },
  {
    title: "E-Commerce",
    desc: "Seamless shopping experiences on Shopify or custom builds.",
    icon: ShoppingBag,
    size: "col-span-1",
  },
  {
    title: "Backend & Firebase",
    desc: "Real-time data, authentication, and cloud functions that just work.",
    icon: Terminal,
    size: "col-span-1",
  },
  {
    title: "SEO & Performance",
    desc: "We build for humans first, but search engines love our clean code.",
    icon: Search,
    size: "col-span-1",
  },
  {
    title: "Monthly Retainer Packages",
    desc: "We don't just build and disappear. We stay on as your tech partner, optimizing and growing with you.",
    icon: Smartphone,
    size: "col-span-2",
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-48 bg-charcoal/30">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
            [ CAPABILITIES ]
          </p>
          <h2 className="font-headline text-6xl md:text-9xl text-primary">
            WHAT WE BUILD
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className={`${s.size} bg-surface p-8 md:p-12 border border-border relative overflow-hidden group hover:shadow-[0_0_30px_rgba(200,184,154,0.08)] transition-all duration-500`}
            >
              <div className="mb-8">
                <s.icon className="w-10 h-10 text-highlight" />
              </div>
              <h3 className="font-subheading text-2xl md:text-3xl text-primary mb-4 leading-tight">
                {s.title}
              </h3>
              <p className="font-body text-secondary text-lg leading-relaxed">
                {s.desc}
              </p>
              
              <div className="absolute top-0 right-0 p-4 opacity-10 font-headline text-8xl text-primary pointer-events-none group-hover:opacity-20 transition-opacity">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
