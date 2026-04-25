
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Siteplasm* — Fast, Premium Web Development',
  description: 'Siteplasm* crafts high-converting websites and web apps for businesses that want results, not just a pretty site.',
};

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
      </head>
      <body className="font-body antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
