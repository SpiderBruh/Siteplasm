
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DIFFERENTIATORS = [
  { icon: '⚡', title: '5-Day Delivery', desc: 'Not 5 weeks. Not 5 months. Five business days from kickoff to a live, tested website.' },
  { icon: '🎯', title: 'Zero Overhead Model', desc: 'No office. No account managers. No unnecessary meetings. You pay for talent, not theater.' },
  { icon: '📈', title: 'Built to Convert', desc: 'Every layout decision, every CTA, every line of copy — engineered to turn visitors into buyers.' },
  { icon: '🛡️', title: '90-Day Guarantee', desc: 'No results in 90 days? We come back and rebuild it until it works. No questions. No fees.' },
];

export const About: React.FC = () => {
  const countRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!countRef.current) return;

    gsap.from(countRef.current, {
      textContent: '0',
      duration: 2.5,
      ease: 'power3.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(containerRef.current?.querySelectorAll('.stagger-item') || [], {
      y: 50,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });
  }, []);

  return (
    <section id="about" className="py-24 md:py-48 bg-background overflow-hidden relative" ref={containerRef}>

      {/* Decorative background text */}
      <div
        className="absolute right-0 top-0 font-headline text-[35vw] leading-none text-primary/[0.015] select-none pointer-events-none overflow-hidden"
        style={{ lineHeight: 0.85 }}
      >
        47
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 stagger-item">
          <div className="w-8 h-[1px] bg-highlight" />
          <p className="font-code text-highlight uppercase tracking-[0.3em] text-xs">[ The Mission ]</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-start">

          {/* Left — Massive counter */}
          <div>
            <div className="flex items-end leading-none mb-6 stagger-item">
              <span ref={countRef} className="font-headline text-[160px] md:text-[220px] leading-none text-primary" style={{ lineHeight: 0.85 }}>
                47
              </span>
              <span className="font-headline text-[80px] md:text-[110px] leading-none text-highlight mb-2" style={{ lineHeight: 0.85 }}>+</span>
            </div>
            <p className="font-subheading text-lg md:text-xl uppercase tracking-[0.2em] text-highlight mb-8 stagger-item">
              Businesses Trusted Us First
            </p>

            <div className="grid grid-cols-3 gap-0 border border-border stagger-item">
              {[
                { label: 'Avg Delivery', val: '5 Days' },
                { label: 'Industries', val: '12+' },
                { label: 'Repeat Clients', val: '73%' },
              ].map((stat, i) => (
                <div key={i} className="p-5 border-r border-border last:border-r-0 text-center">
                  <p className="font-headline text-2xl text-primary mb-1">{stat.val}</p>
                  <p className="font-code text-[9px] text-secondary uppercase tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="font-body text-secondary/50 text-sm mt-6 stagger-item">
              Based in Cebu City, Philippines. Serving clients across Southeast Asia and beyond.
            </p>
          </div>

          {/* Right — Mission + differentiators */}
          <div className="space-y-10 stagger-item">
            <div>
              <h2 className="font-subheading text-3xl md:text-4xl font-medium leading-tight text-primary mb-6">
                Small businesses deserve enterprise-quality websites.{' '}
                <em className="text-highlight not-italic">We built Siteplasm* to make that happen</em>{' '}
                — without the agency price tag.
              </h2>
              <p className="font-body text-lg text-secondary leading-relaxed">
                Most agencies take 3 months and charge ₱150K for a site that looks fine but converts terribly. We do it in 5 days, for a fraction of the cost, and we guarantee the results.
              </p>
            </div>

            <div className="space-y-0">
              {DIFFERENTIATORS.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 py-5 border-b border-border last:border-b-0 group hover:bg-white/[0.015] transition-colors -mx-4 px-4"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">{item.icon}</span>
                  <div>
                    <h3 className="font-subheading text-sm text-primary font-semibold mb-1 uppercase tracking-wider">{item.title}</h3>
                    <p className="font-body text-sm text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
