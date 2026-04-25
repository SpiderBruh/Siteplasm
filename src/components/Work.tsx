
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const PROJECTS = [
  { 
    id: "project-restaurant", 
    name: "La Table", 
    tag: "Restaurant", 
    tech: ["React", "Tailwind"],
    image: "https://picsum.photos/seed/8/1200/800"
  },
  { 
    id: "project-clinic", 
    name: "Vitalis Care", 
    tag: "Clinic", 
    tech: ["Next.js", "Firebase"],
    image: "https://picsum.photos/seed/15/1200/800"
  },
  { 
    id: "project-salon", 
    name: "Aura Boutique", 
    tag: "Salon", 
    tech: ["Shopify", "Headless"],
    image: "https://picsum.photos/seed/23/1200/800"
  },
  { 
    id: "project-realestate", 
    name: "Skyline Properties", 
    tag: "Real Estate", 
    tech: ["Go", "React"],
    image: "https://picsum.photos/seed/42/1200/800"
  },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 md:py-48 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <p className="font-code text-highlight uppercase tracking-[0.3em] text-sm mb-4">
            [ PORTFOLIO ]
          </p>
          <h2 className="font-headline text-6xl md:text-9xl text-primary leading-none">
            SELECTED WORK
          </h2>
        </div>
        <p className="font-body text-secondary text-right max-w-xs">
          A collection of digital products we've built to help businesses scale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-surface mb-6 border border-border group-hover:border-highlight transition-colors duration-500">
              <div 
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
                data-ai-hint="modern project"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/0 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-background/40 backdrop-blur-sm">
                <span className="font-subheading text-primary border-b border-primary py-1">View Project →</span>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="font-code text-xs text-highlight mb-2">
                  {project.tech.map(t => `[ ${t} ]`).join(' ')}
                </p>
                <h3 className="font-subheading text-2xl text-primary">{project.name}</h3>
              </div>
              <span className="font-code text-[10px] text-secondary border border-border px-2 py-1 uppercase">
                {project.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <p className="font-body text-secondary italic">More projects coming soon...</p>
      </div>
    </section>
  );
};
