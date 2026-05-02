
'use client';

import React from 'react';
import { Instagram, Linkedin, Github, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6">

        {/* Big CTA */}
        <div className="mb-16 border-b border-border pb-16">
          <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
            [ READY? LET&apos;S GO ]
          </p>
          <h2 className="font-headline text-6xl md:text-[120px] text-primary leading-[0.85] mb-8">
            YOUR SITE.<br />5 DAYS.
          </h2>
          <a
            href="mailto:cesaresmero2@gmail.com"
            className="inline-flex items-center gap-3 font-subheading text-2xl text-primary underline underline-offset-8 hover:text-highlight transition-colors"
          >
            <Mail className="w-5 h-5" />
            cesaresmero2@gmail.com
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-24 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-0.5">
              <span className="font-headline text-2xl text-primary">SITEPLASM</span>
              <span className="font-headline text-2xl text-highlight">*</span>
            </div>
            <p className="font-body text-secondary text-sm leading-relaxed">
              Web development agency.<br />
              Cebu City, Philippines.<br />
              Built for founders who want results.
            </p>
            <p className="font-code text-[10px] text-secondary/40 uppercase tracking-widest">
              © 2025 Siteplasm
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="font-code text-xs text-highlight uppercase tracking-wider">Navigate</p>
              <ul className="space-y-2">
                {['Work', 'Services', 'Pricing', 'Process', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-body text-sm text-secondary hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-code text-xs text-highlight uppercase tracking-wider">Work With Us</p>
              <ul className="space-y-2">
                <li><a href="#contact" className="font-body text-sm text-secondary hover:text-primary transition-colors">Start a Project</a></li>
                <li><a href="#pricing" className="font-body text-sm text-secondary hover:text-primary transition-colors">View Pricing</a></li>
                <li><a href="mailto:cesaresmero2@gmail.com" className="font-body text-sm text-secondary hover:text-primary transition-colors">Email Us</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <p className="font-code text-xs text-highlight uppercase tracking-wider">Follow Along</p>
            <div className="flex gap-3 md:justify-end">
              {[
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Facebook, href: '#', label: 'Facebook' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:text-highlight hover:border-highlight transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="font-code text-[10px] text-secondary/30 leading-relaxed md:max-w-[200px]">
              We share behind-the-scenes, client wins, and build logs.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-code text-[10px] text-secondary/40 tracking-widest uppercase">
            Designed &amp; Built by Siteplasm* · v2.0 · 2025
          </p>
          <p className="font-code text-[10px] text-secondary/30 tracking-widest uppercase">
            Next.js · Sanity · Supabase · Vercel
          </p>
        </div>
      </div>
    </footer>
  );
};
