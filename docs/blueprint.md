# **App Name**: Siteplasm*

## Core Features:

- Dynamic 3D Hero Scene: An interactive, full-viewport 3D scene (icosahedron/torus knot with wireframe, lights, particle field) using R3F, featuring mouse parallax and bloom effects, creating a futuristic visual intro for the agency.
- Project Portfolio Display: A responsive grid showcasing client projects with placeholder images, descriptive tags, project names, and interactive hover effects (lift, border, 'View Project' CTA) for detailed viewing.
- Bento Grid Services Showcase: A visually engaging bento grid layout to present the agency's diverse web development services, each with an icon and brief description, featuring hover glow effects for interactivity.
- Agency Process Walkthrough: A numbered, multi-step section detailing the agency's workflow from discovery to launch, featuring large numbers, clear titles, descriptions, and staggered scroll animations.
- Automated Lead Capture Form: A contact form with fields for name, business type, budget range, and project description, enabling potential clients to submit inquiries, styled for a dark interface with focus glow effects.
- Infinite Marquee Scroller: A full-width, continuously looping marquee showcasing key services and tech stack elements, with distinct borders and uppercase typography, to highlight agency offerings.
- AI Project Inquiry Assistant: An interactive AI chatbot tool embedded within the site to provide immediate answers to common project-related questions, offer initial guidance, and assist with basic lead qualification, enhancing user engagement.

## Style Guidelines:

- Color Scheme: Dark. Background color: `#0F0F0F` (Near black base), establishing a premium dark aesthetic across the site.
- Primary foreground color: `#F5F0E8` (Cream), used prominently for main text, headings, and key information, ensuring strong contrast and readability.
- Accent color: `#C8B89A` (Warm gold-cream), reserved for call-to-action (CTA) elements, active states, and specific highlights to draw user attention.
- Headline and Display Font: 'Bebas Neue' (sans-serif, ultra-bold, wide tracking) for massive headlines like the hero title, conveying a bold and futuristic presence. Note: currently only Google Fonts are supported.
- Subheading and Navigation Font: 'Syne' (geometric sans-serif, modern) for navigation links and section subheadings, adding a contemporary and precise feel. Note: currently only Google Fonts are supported.
- Body Text Font: 'DM Sans' (sans-serif, clean, readable, neutral) for all paragraph text and general copy, prioritizing clarity and ease of reading. Note: currently only Google Fonts are supported.
- Mono and Label Font: 'JetBrains Mono' (monospace) for technical details, tags, badges, and subtle labels, reinforcing the techy and futuristic style. Note: currently only Google Fonts are supported.
- Utilize modern and crisp 'Lucide React' icons throughout the interface, rendered in the primary cream color (`#F5F0E8`), to maintain a clean and sophisticated visual consistency.
- The layout features distinct sections for Hero, Marquee, About, Work, Services, Process, CTA, and Footer. It incorporates varied responsive grid patterns, such as a 2-column portfolio grid and an asymmetric bento grid for services, with full-width sections like the marquee and CTA to create a dynamic and organized visual experience across all device sizes.
- The site implements global GSAP ScrollTrigger animations, including fade-up and subtle Y-translate effects on section entry, enhancing engagement. The interactive 3D hero scene includes mouse parallax and a subtle bloom post-processing effect. Buttons feature magnetic hover interactions, while portfolio cards respond with lift, border reveals, and CTA fades. Number counters animate upon scroll for statistics, and page load includes staggered text reveals.