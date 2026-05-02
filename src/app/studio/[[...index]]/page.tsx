'use client';

import dynamic from 'next/dynamic';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

// Force the studio to only load on the client to avoid "window is not defined" errors
const Studio = dynamic(() => Promise.resolve(NextStudio), { ssr: false });

export default function StudioPage() {
  return <Studio config={config} />;
}
