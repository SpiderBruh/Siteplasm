
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const countRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!countRef.current) return;

    gsap.from(countRef.current, {
      textContent: "0",
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 80%",
      }
    });

    gsap.from(containerRef.current?.querySelectorAll('.stagger-item') || [], {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, []);

  return (
    <section id="about" className="py-24 md:py-48 bg-background overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex flex-col">
              <span ref={countRef} className="font-headline text-[120px] md:text-[220px] leading-none text-primary stagger-item">
                47
              </span>
              <span className="font-headline text-[120px] md:text-[220px] leading-none text-primary -mt-10 stagger-item">
                +
              </span>
              <p className="font-subheading text-lg md:text-xl uppercase tracking-widest text-highlight mt-4 stagger-item">
                Projects Delivered
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-border stagger-item">
              {[
                { label: "Delivery", val: "5-Day" },
                { label: "Overhead", val: "₱0" },
                { label: "Industries", val: "12+" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <p className="font-code text-xs text-secondary uppercase tracking-tighter">{stat.label}</p>
                  <p className="font-subheading text-lg text-primary">{stat.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 stagger-item">
            <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm">
              [ THE MISSION ]
            </p>
            <h2 className="font-subheading text-3xl md:text-5xl font-medium leading-tight text-primary">
              Siteplasm* was built on one idea: small businesses deserve enterprise-quality websites without the price tag.
            </h2>
            <p className="font-body text-xl text-secondary leading-relaxed max-w-lg">
              We build fast, we build clean, and we stay until it converts. Our AI-assisted workflow allows us to prototype in 48 hours and polish every detail before launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
