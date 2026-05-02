'use client';

import React from 'react';

const TESTIMONIALS = [
  {
    quote: "We went from 3 inquiries a month to 22 in the first 4 weeks. The site paid for itself in 6 days.",
    name: "Marco Reyes",
    role: "Owner, Vitalis Medical Clinic",
    location: "Cebu City",
    tag: "Healthcare · Booking System",
    result: "+633% inquiries",
  },
  {
    quote: "I had a designer quote me ₱180,000 and 3 months. Siteplasm delivered a better result in 5 days for ₱30,000. I still can't believe it.",
    name: "Camille Santos",
    role: "Founder, Aura Boutique",
    location: "Cebu City",
    tag: "E-Commerce · Shopify",
    result: "₱150K saved",
  },
  {
    quote: "Our online table reservations went from zero to 40+ a week. We haven't had an empty weekend since launch.",
    name: "Luis dela Cruz",
    role: "GM, La Mesa Bistro",
    location: "Cebu City",
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
    <section id="testimonials" className="py-24 md:py-48 bg-surface border-b border-border">
      <div className="container mx-auto px-6 md:px-[10%]">
        <div className="mb-16">
          <p className="font-code font-bold text-highlight uppercase tracking-widest text-sm mb-6">
            47 Clients. Real Results.
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h2 className="font-headline font-bold text-6xl md:text-9xl text-primary leading-none uppercase tracking-tighter">
              DON'T TAKE<br />OUR WORD.
            </h2>
            <p className="font-body text-secondary font-medium max-w-sm leading-relaxed md:text-right pb-4 text-lg">
              These are real clients with real results. We'll connect you with any of them directly before you sign anything.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-border bg-border">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="p-8 md:p-12 border border-border bg-background hover:bg-surface transition-colors flex flex-col justify-between"
            >
              {/* Result badge */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-code font-bold text-[10px] text-primary bg-border/50 px-3 py-1.5 uppercase tracking-widest border border-border">
                  {t.tag}
                </span>
                <span className="font-headline font-bold text-3xl text-highlight">{t.result}</span>
              </div>

              {/* Quote */}
              <blockquote className="font-headline font-bold text-primary text-2xl md:text-3xl leading-snug mb-12 tracking-wide uppercase">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-border pt-6 mt-auto">
                <div className="w-12 h-12 bg-primary text-background flex items-center justify-center font-headline font-bold text-xl flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-headline font-bold text-lg text-primary tracking-wide uppercase">{t.name}</p>
                  <p className="font-code font-bold text-[10px] text-secondary uppercase tracking-widest">{t.role} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-code font-bold text-xs text-secondary uppercase tracking-widest">
            * Results are real. Names and businesses used with permission.
          </p>
        </div>
      </div>
    </section>
  );
};
