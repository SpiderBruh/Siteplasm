
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Testimonials } from '@/components/Testimonials';
import { Services } from '@/components/Services';
import { Pricing } from '@/components/Pricing';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { Toaster } from '@/components/ui/toaster';
import SiteplasmsChat from '@/ai/flows/SiteplasmsChat';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navigation />

      {/* Hook */}
      <Hero />

      {/* Trust signals */}
      <Marquee />

      {/* Credibility */}
      <About />

      {/* Proof — live showcases */}
      <Work />

      {/* Social proof */}
      <Testimonials />

      {/* What you get */}
      <Services />

      {/* Commitment reduction */}
      <Pricing />

      {/* Risk reduction */}
      <Process />

      {/* CTA */}
      <Contact />

      <Footer />
      <Toaster />
      <SiteplasmsChat />
    </main>
  );
}
