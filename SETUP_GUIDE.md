# Siteplasm* — Setup & API Guide

This guide will help you gather all the necessary API keys and credentials to make your agency website fully functional on Vercel.

---

## 1. Google Gemini (AI Assistant)
**Purpose:** Powers the interactive AI Project Inquiry Assistant.

1.  Go to [Google AI Studio](https://aistudio.google.com/).
2.  Click **"Get API key"** on the left sidebar.
3.  Create a new API key in a new project.
4.  **Key to save:** `GOOGLE_GENAI_API_KEY`

---

## 2. Sanity CMS (Portfolio Management)
**Purpose:** The backend for your "Selected Work" and "Testimonials".

1.  Create an account at [Sanity.io](https://www.sanity.io/).
2.  Run `npx sanity init` in your terminal OR create a project in the Sanity Dashboard.
3.  Go to your Project Settings -> **API Settings**.
4.  Find your **Project ID**.
5.  Set your dataset to `production`.
6.  (Optional) Create a "Read" token if you want to preview drafts.
7.  **Keys to save:** `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`

---

## 3. Supabase (Database & Leads)
**Purpose:** Stores every lead and AI chat log so you never lose a client.

1.  Sign up at [Supabase.com](https://supabase.com/).
2.  Create a new project named "Siteplasm".
3.  Go to **Project Settings -> API**.
4.  Find your **Project URL**, **Anon Key**, and **Service Role Key**.
5.  **Keys to save:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`

---

## 4. Resend (Email Notifications)
**Purpose:** Sends you an email the second a new lead is captured.

1.  Sign up at [Resend.com](https://resend.com/).
2.  Go to **API Keys** and create a new key.
3.  **Domain Setup**:
    *   To send emails from your own domain (e.g., `hello@siteplasm.com`), go to **Domains** and follow the DNS verification steps.
    *   If you haven't verified a domain yet, use `onboarding@resend.dev` as the "From" address in `src/lib/resend.ts`.
4.  **Recipient Email**: Set `CONTACT_EMAIL` to the email address where you want to receive leads.
5.  **Keys to save:** `RESEND_API_KEY`, `CONTACT_EMAIL`

---

## 5. Vercel Blob (File Storage)
**Purpose:** Fast, edge-optimized storage for any files uploaded via the site.

1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Select your project -> **Storage** tab.
3.  Click **"Connect Database"** -> **Vercel Blob**.
4.  Once connected, Vercel will automatically add the environment variable.
5.  **Key to save:** `BLOB_READ_WRITE_TOKEN`

---

## Deployment to Vercel

1.  Push your code to a GitHub repository.
2.  Import the repository into [Vercel](https://vercel.com/).
3.  In the **Environment Variables** section, paste all the keys you gathered above.
4.  Click **Deploy**.

---

### Pro Tip: Initializing Supabase Tables
Once you have your Supabase project, run the following SQL in the **SQL Editor** to create your leads table:

```sql
create table leads (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text,
  email text,
  project_type text,
  message text,
  status text default 'new'
);
```
