'use client';

import React from 'react';
import { InstagramLogo, LinkedinLogo, GithubLogo, FacebookLogo, Envelope } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-[10%] pt-24 pb-12">

        {/* Big CTA */}
        <div className="mb-16 border-b border-border pb-16">
          <p className="font-code font-bold text-highlight uppercase tracking-[0.3em] text-sm mb-4">
            [ READY? LET'S GO ]
          </p>
          <h2 className="font-headline font-bold text-6xl md:text-[10vw] text-primary leading-[0.85] mb-12 tracking-tighter uppercase">
            YOUR SITE.<br />5 DAYS.
          </h2>
          <a
            href="mailto:cesaresmero2@gmail.com"
            className="inline-flex items-center gap-4 font-headline font-bold text-3xl md:text-5xl text-primary hover:text-highlight transition-colors border-b-4 border-primary hover:border-highlight pb-2"
          >
            <Envelope weight="bold" className="w-8 h-8 md:w-12 md:h-12" />
            cesaresmero2@gmail.com
          </a>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-0.5">
              <span className="font-headline font-bold text-3xl text-primary">SITEPLASM</span>
              <span className="font-headline font-bold text-3xl text-highlight">*</span>
            </div>
            <p className="font-body text-primary font-medium text-lg leading-relaxed max-w-sm">
              Web development agency.<br />
              Cebu City, Philippines.<br />
              Built for founders who want results.
            </p>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="font-code font-bold text-xs text-highlight uppercase tracking-widest">Navigate</p>
              <ul className="space-y-3">
                {['Work', 'Services', 'Pricing', 'Process', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-body font-medium text-base text-secondary hover:text-primary transition-colors hover:underline underline-offset-4"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-code font-bold text-xs text-highlight uppercase tracking-widest">Work With Us</p>
              <ul className="space-y-3">
                <li><a href="#contact" className="font-body font-medium text-base text-secondary hover:text-primary transition-colors hover:underline underline-offset-4">Start a Project</a></li>
                <li><a href="#pricing" className="font-body font-medium text-base text-secondary hover:text-primary transition-colors hover:underline underline-offset-4">View Pricing</a></li>
                <li><a href="mailto:cesaresmero2@gmail.com" className="font-body font-medium text-base text-secondary hover:text-primary transition-colors hover:underline underline-offset-4">Email Us</a></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3 space-y-6 md:text-right flex flex-col md:items-end">
            <p className="font-code font-bold text-xs text-highlight uppercase tracking-widest">Follow Along</p>
            <div className="flex gap-4">
              {[
                { icon: InstagramLogo, href: '#', label: 'Instagram' },
                { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
                { icon: GithubLogo, href: '#', label: 'GitHub' },
                { icon: FacebookLogo, href: '#', label: 'Facebook' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 border border-border flex items-center justify-center text-primary hover:text-background hover:bg-primary transition-colors"
                >
                  <social.icon weight="bold" className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="font-code font-semibold text-[10px] text-secondary uppercase leading-relaxed max-w-[200px] tracking-wide">
              We share behind-the-scenes, client wins, and build logs.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-code font-bold text-[10px] text-primary tracking-widest uppercase">
            © 2025 Siteplasm*
          </p>
          <p className="font-code font-bold text-[10px] text-secondary tracking-widest uppercase text-center">
            Designed &amp; Built by Siteplasm* · v2.0
          </p>
          <p className="font-code font-bold text-[10px] text-secondary tracking-widest uppercase text-right">
            Next.js · Sanity · Supabase · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};
