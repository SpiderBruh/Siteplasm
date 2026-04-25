
'use client';

import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 md:py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-24 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              <span className="font-headline text-3xl text-primary">SITEPLASM</span>
              <span className="font-headline text-3xl text-highlight">*</span>
            </div>
            <p className="font-body text-secondary text-sm">
              © 2025 Siteplasm. <br />
              Bacolod City, Philippines.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="font-code text-xs text-highlight uppercase">Explore</p>
              <ul className="space-y-2">
                {['Work', 'Services', 'Process'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="font-subheading text-sm text-secondary hover:text-primary transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-code text-xs text-highlight uppercase">Connect</p>
              <ul className="space-y-2">
                <li><a href="mailto:hello@siteplasm.com" className="font-subheading text-sm text-secondary hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="font-subheading text-sm text-secondary hover:text-primary transition-colors">Start Project</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-6 md:text-right">
            <p className="font-code text-xs text-highlight uppercase">Socials</p>
            <div className="flex gap-4 md:justify-end">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 border border-border flex items-center justify-center text-secondary hover:text-highlight hover:border-highlight transition-all">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-full h-[1px] bg-primary/10 absolute top-0 left-0" />
          <p className="font-code text-[10px] text-secondary tracking-widest uppercase">
            Designed & Built by Siteplasm*
          </p>
          <p className="font-code text-[10px] text-secondary/50 tracking-widest uppercase">
            v1.0.2 / 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
