-- ==========================================
-- SITEPLASM* SUPABASE SCHEMA
-- Copy and paste this into your Supabase SQL Editor
-- ==========================================

-- 1. Create the 'leads' table for contact form submissions
create table if not exists leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  project_type text,
  message text,
  status text default 'new', -- e.g., 'new', 'contacted', 'qualified', 'closed'
  
  -- Metadata for better lead tracking
  source_url text default 'homepage'
);

-- 2. Create the 'ai_logs' table to track AI assistant interactions
create table if not exists ai_logs (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  query text not null,
  response text not null,
  
  -- Tracking if the AI conversation led to a lead
  session_id uuid default gen_random_uuid()
);

-- ==========================================
-- SECURITY (Row Level Security)
-- ==========================================

-- Enable RLS on both tables
alter table leads enable row level security;
alter table ai_logs enable row level security;

-- Create a policy that allows anyone to INSERT (so the website can save data)
-- but NO ONE can SELECT (so your leads stay private)
create policy "Enable insert for everyone" on leads for insert with check (true);
create policy "Enable insert for everyone" on ai_logs for insert with check (true);

-- Create a policy for you (the admin) to see the leads
-- Replace 'authenticated' with specific roles if needed, 
-- or just use the Service Role Key for your admin dashboard.
create policy "Enable select for authenticated users only" on leads for select using (auth.role() = 'authenticated');
create policy "Enable select for authenticated users only" on ai_logs for select using (auth.role() = 'authenticated');

-- ==========================================
-- HELPER: View your leads
-- ==========================================
-- select * from leads order by created_at desc;
