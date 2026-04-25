
'use client';

import React from 'react';

const SERVICES = [
  "Web Design", "Web Apps", "E-Commerce", "Firebase", "React", "SEO", "Retainer Packages", "Fast Delivery"
];

export const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-charcoal border-y border-border py-4 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee-infinite">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            {SERVICES.map((service, idx) => (
              <React.Fragment key={idx}>
                <span className="font-subheading text-lg md:text-2xl uppercase text-primary tracking-widest flex items-center gap-8">
                  {service}
                  <span className="text-highlight">✦</span>
                </span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
