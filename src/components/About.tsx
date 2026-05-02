
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DIFFERENTIATORS = [
  { icon: '⚡', title: '5-Day Delivery', desc: 'Not 5 weeks. Not 5 months. Five business days from kickoff to a live, tested website.' },
  { icon: '🎯', title: 'Zero Overhead Model', desc: 'No office. No account managers. No unnecessary meetings. You pay for talent, not theater.' },
  { icon: '📈', title: 'Built to Convert', desc: 'Every decision — layout, copy, CTA placement — is made to turn visitors into paying customers.' },
  { icon: '🛡️', title: '90-Day Guarantee', desc: 'No results in 90 days? We come back in and rebuild it until it works. No questions. No fees.' },
];

export const About: React.FC = () => {
  const countRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!countRef.current) return;

    gsap.from(countRef.current, {
      textContent: '0',
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(containerRef.current?.querySelectorAll('.stagger-item') || [], {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section id="about" className="py-24 md:py-48 bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left — Big Stat */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span ref={countRef} className="font-headline text-[100px] md:text-[180px] leading-none text-primary stagger-item">
                47
              </span>
              <span className="font-headline text-[100px] md:text-[180px] leading-none text-primary -mt-6 stagger-item">+</span>
              <p className="font-code text-sm md:text-base uppercase tracking-widest text-highlight mt-2 stagger-item">
                Businesses That Trusted Us First
              </p>
            </div>

            <div className="pt-8 border-t border-border stagger-item">
              <p className="font-body text-secondary text-sm leading-relaxed mb-4">
                Based in Bacolod City, Philippines. Serving clients across Southeast Asia and beyond.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Avg Delivery', val: '5 Days' },
                  { label: 'Industries', val: '12+' },
                  { label: 'Repeat Clients', val: '73%' },
                ].map((stat, i) => (
                  <div key={i} className="border border-border p-4">
                    <p className="font-code text-[9px] text-secondary uppercase tracking-tighter mb-1">{stat.label}</p>
                    <p className="font-headline text-2xl text-primary">{stat.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Mission + Differentiators */}
          <div className="space-y-10 stagger-item">
            <div>
              <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">[ THE MISSION ]</p>
              <h2 className="font-subheading text-3xl md:text-4xl font-medium leading-tight text-primary mb-6">
                Small businesses deserve enterprise-quality websites. We built Siteplasm* to make that happen — without the agency price tag.
              </h2>
              <p className="font-body text-lg text-secondary leading-relaxed">
                Most web agencies take 3 months and charge ₱150K for a site that looks fine but converts terribly. We do it in 5 days, for a fraction of the price, and we guarantee the results.
              </p>
            </div>

            <div className="space-y-0 border border-border">
              {DIFFERENTIATORS.map((item, i) => (
                <div key={i} className="flex gap-4 p-5 border-b border-border last:border-b-0 group hover:bg-white/[0.02] transition-colors">
                  <span className="text-2xl flex-shrink-0 mt-1">{item.icon}</span>
                  <div>
                    <h3 className="font-subheading text-base text-primary font-semibold mb-1">{item.title}</h3>
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
