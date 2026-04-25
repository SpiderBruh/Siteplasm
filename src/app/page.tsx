
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navigation />
      
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Services />
      <Process />
      <Contact />
      <Footer />
      
      <Toaster />
    </main>
  );
}
