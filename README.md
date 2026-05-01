# Siteplasm* — Premium Web Development Agency

Siteplasm* is a high-performance web development agency based in the Philippines, specializing in fast, high-converting websites and web applications for SMBs and international clients.

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **AI Engine**: [Genkit](https://github.com/firebase/genkit)
- **Backend/Platform**: [Firebase](https://firebase.google.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **3D Elements**: [Three.js](https://threejs.org/)

## Getting Started

### Prerequisites

- Node.js 20+
- A Google Cloud Project (for Genkit/Gemini)
- Firebase Account

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables in a `.env` file:
   ```env
   GOOGLE_GENAI_API_KEY=your_api_key
   ```

### Development

Run the development server:
```bash
npm run dev
```

### AI Integration

The project uses Genkit flows for its AI features (e.g., the Project Inquiry Assistant). You can explore and test these using the Genkit UI:
```bash
npm run genkit:dev
```

## Project Structure

- `src/app`: Next.js routes, layouts, and global styles.
- `src/components`: Reusable UI components (Shadcn and custom agency sections).
- `src/ai`: Genkit configurations, prompt definitions, and logic flows.
- `src/lib`: Utility functions, helper classes, and placeholder data.

## Deployment

This project is configured for seamless deployment via [Firebase App Hosting](https://firebase.google.com/docs/app-hosting).

---
✦ Built with speed and precision by Siteplasm*
