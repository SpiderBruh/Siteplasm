# Siteplasm* — Final Setup Walkthrough

We have successfully migrated the Siteplasm* codebase into a high-performance, founder-led agency platform. The site is now powered by a dual-backend of Sanity and Supabase, with a custom AI strategist.

## 1. The "Lead Strategist" AI
The assistant in `src/ai/flows/ai-project-inquiry-assistant.ts` has been fully trained on Cesar's **"Zero BS"** brand.
- **Identity**: It speaks as a partner to Cesar, focusing on speed and ROI.
- **Goal**: Qualify leads and push them toward the 48-hour prototype.
- **Pricing**: Automatically mentions the ₱15,000 baseline to ensure you get quality inquiries.

## 2. Infrastructure (Supabase & Sanity)
- **Supabase**: Connected to the contact form to save leads and log AI interactions. (Use `SUPABASE_SCHEMA.sql` to initialize).
- **Sanity**: Portfolio and Testimonials are now dynamic. Access the editor at `/studio`.
- **Resend**: Automated email notifications are set up with a premium HTML template.

## 3. Brand & Strategy
We've incorporated the **8 Strategic Principles** into the core logic of the site:
- Demo = Close
- Speed = Trust
- Retainer First
- Outcome Language

## How to Go Live
1.  **Vercel**: Import the repo and add the environment variables from `.env.example`.
2.  **Supabase**: Run the SQL schema provided in the root.
3.  **Sanity**: Add your first "Selected Work" in the `/studio`.

---
✦ Built with speed and precision for Cesar.
