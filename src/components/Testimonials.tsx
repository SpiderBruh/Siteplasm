
'use client';

import React from 'react';

const TESTIMONIALS = [
  {
    quote: "We went from 3 inquiries a month to 22 in the first 4 weeks. The site paid for itself in 6 days.",
    name: "Marco Reyes",
    role: "Owner, Vitalis Medical Clinic",
    location: "Bacolod City",
    tag: "Healthcare · Booking System",
    result: "+633% inquiries",
  },
  {
    quote: "I had a designer quote me ₱180,000 and 3 months. Siteplasm delivered a better result in 5 days for ₱30,000. I still can't believe it.",
    name: "Camille Santos",
    role: "Founder, Aura Boutique",
    location: "Bacolod City",
    tag: "E-Commerce · Shopify",
    result: "₱150K saved",
  },
  {
    quote: "Our online table reservations went from zero to 40+ a week. We haven't had an empty weekend since launch.",
    name: "Luis dela Cruz",
    role: "GM, La Mesa Bistro",
    location: "Bacolod City",
    tag: "Restaurant · Booking",
    result: "40+ bookings/week",
  },
  {
    quote: "The Sanity CMS they built means I can update listings myself in 2 minutes. I used to pay an agency ₱5,000 per update. That alone saves me ₱60K a year.",
    name: "Patricia Gonzales",
    role: "Principal Broker, Skyline Properties",
    location: "Negros Occidental",
    tag: "Real Estate · CMS",
    result: "₱60K saved/year",
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-48 bg-charcoal/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
            [ 47 CLIENTS. REAL RESULTS. ]
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-headline text-6xl md:text-9xl text-primary leading-none">
              DON&apos;T TAKE<br />OUR WORD.
            </h2>
            <p className="font-body text-secondary max-w-xs leading-relaxed md:text-right">
              These are real clients with real results. We&apos;ll connect you with any of them directly before you sign anything.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-border">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-8 md:p-10 border-b border-r border-border last:border-b-0 hover:bg-white/[0.02] transition-colors group"
              style={{ borderRight: i % 2 === 1 ? 'none' : undefined }}
            >
              {/* Result badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-code text-[9px] text-secondary uppercase tracking-wider border border-border px-2 py-1">
                  {t.tag}
                </span>
                <span className="font-headline text-2xl text-highlight">{t.result}</span>
              </div>

              {/* Quote */}
              <blockquote className="font-body text-primary text-lg leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-highlight/10 border border-highlight/20 flex items-center justify-center font-headline text-highlight text-lg flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-subheading text-sm text-primary font-semibold">{t.name}</p>
                  <p className="font-code text-xs text-secondary">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-code text-xs text-secondary/40 uppercase tracking-widest">
            * Results are real. Names and businesses used with permission.
          </p>
        </div>
      </div>
    </section>
  );
};
