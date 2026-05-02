
'use client';

import React from 'react';

const ITEMS = [
  { text: "Web Apps", glyph: "✦" },
  { text: "5-Day Delivery", glyph: "→" },
  { text: "Landing Pages", glyph: "✦" },
  { text: "E-Commerce", glyph: "→" },
  { text: "SEO & Performance", glyph: "✦" },
  { text: "SaaS Platforms", glyph: "→" },
  { text: "Mobile-First Design", glyph: "✦" },
  { text: "Real ROI", glyph: "*" },
  { text: "Firebase & Supabase", glyph: "→" },
  { text: "90-Day Guarantee", glyph: "✦" },
];

export const Marquee: React.FC = () => {
  return (
    <div className="w-full border-y border-border overflow-hidden select-none relative">
      {/* Top row — left to right */}
      <div className="flex whitespace-nowrap animate-marquee-infinite py-3 border-b border-border">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {ITEMS.map((item, idx) => (
              <span
                key={idx}
                className="font-code text-xs uppercase tracking-[0.2em] text-secondary flex items-center gap-6 px-6"
              >
                {item.text}
                <span className="text-highlight opacity-60">{item.glyph}</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom row — right to left, larger */}
      <div
        className="flex whitespace-nowrap py-4"
        style={{ animation: 'marquee 25s linear infinite reverse' }}
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center">
            {ITEMS.map((item, idx) => (
              <span
                key={idx}
                className="font-subheading text-lg md:text-2xl uppercase text-primary/20 flex items-center gap-8 px-8"
              >
                {item.text}
                <span className="text-highlight/40">{item.glyph}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
