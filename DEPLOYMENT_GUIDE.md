# Siteplasm* — The Zero BS Deployment Guide

Follow this guide to take your high-performance agency site live. No fluff, just the steps.

---

## Phase 1: The Accounts
You'll need free-tier accounts for these 4 services:
1.  [Supabase](https://supabase.com/) (Database)
2.  [Sanity](https://www.sanity.io/) (Content)
3.  [Resend](https://resend.com/) (Email)
4.  [Google AI Studio](https://aistudio.google.com/) (Gemini AI)
5.  [Vercel](https://vercel.com/) (Hosting)

---

## Phase 2: Supabase Setup (The Brain)
1.  **Create Project**: Name it "Siteplasm".
2.  **Run SQL**:
    *   Go to **SQL Editor** in the left sidebar.
    *   Open the `SUPABASE_SCHEMA.sql` file from your project root.
    *   Paste and click **Run**. This creates your `leads` and `ai_logs` tables.
3.  **Get Keys**:
    *   Go to **Project Settings -> API**.
    *   Copy `Project URL`, `anon public` key, and `service_role` key.

---

## Phase 3: Sanity Setup (The Portfolio)
1.  **Create Project**: Log in to Sanity and create a new project.
2.  **Get Project ID**: Copy the **Project ID** from the dashboard.
3.  **Dataset**: Ensure it's set to `production`.
4.  **CORS Settings**:
    *   Go to **Settings -> API**.
    *   Add `http://localhost:9002` and your future Vercel URL (e.g., `https://siteplasm.vercel.app`) to the allowed CORS origins.

---

## Phase 4: Resend & AI (The Engine)
1.  **Resend API**:
    *   Go to Resend -> **API Keys**. Create one.
    *   (Optional) Verify your domain under **Domains** so emails come from `hello@siteplasm.com`.
2.  **Gemini API**:
    *   Go to Google AI Studio -> **Get API Key**.
    *   Create a key and save it.

---

## Phase 5: Vercel Deployment (The Launch)
1.  **GitHub**: Push your code to a new GitHub repository.
2.  **Import**: In Vercel, click **"Add New" -> "Project"** and select your repo.
3.  **Environment Variables**:
    *   Open your `.env.example` in your editor.
    *   Copy-paste each variable name into Vercel's "Environment Variables" section and add your keys:
        *   `GOOGLE_GENAI_API_KEY`
        *   `NEXT_PUBLIC_SANITY_PROJECT_ID`
        *   `NEXT_PUBLIC_SUPABASE_URL`
        *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`
        *   `SUPABASE_SERVICE_ROLE_KEY`
        *   `RESEND_API_KEY`
        *   `CONTACT_EMAIL` (Your personal email)
4.  **Deploy**: Hit the deploy button.

---

## Phase 6: Post-Launch Checklist
1.  **Test the AI**: Visit your site, ask the AI "Can you build a site in 5 days?" and check if it responds as Cesar's Strategist.
2.  **Test the Form**: Fill out the contact form.
    *   Check your **Supabase Dashboard** -> Table Editor -> `leads` to see the entry.
    *   Check your **Email** to see the Premium Lead Report.
3.  **Add Content**: Go to `your-site.com/studio` to add your first real portfolio project.

---
✦ Built for Speed. Shipped by Cesar.
