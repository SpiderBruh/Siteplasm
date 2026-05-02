
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Siteplasm* — Fast, Premium Web Development',
  description: 'We build websites that convert. Fast. Clean. Guaranteed. Based in Cebu, Philippines. 5-day delivery, zero overhead, real ROI.',
  keywords: 'web development, Cebu, Philippines, agency, Next.js, React, Sanity, Supabase',
  openGraph: {
    title: 'Siteplasm* — We Build Websites That Print Money',
    description: '47 businesses. 5-day delivery. If you don\'t see ROI in 90 days, we rebuild it free.',
    type: 'website',
    locale: 'en_US',
    url: 'https://siteplasm.vercel.app',
  },
};

import SmoothScroll from '@/components/SmoothScroll';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400..800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Siteplasm",
          "description": "Web development agency based in Cebu City, Philippines",
          "url": "https://siteplasm.vercel.app",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cebu City",
            "addressRegion": "Cebu",
            "addressCountry": "PH"
          }
        })}} />
      </head>
      <body className="font-body antialiased">
        <div className="grain-overlay" />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
