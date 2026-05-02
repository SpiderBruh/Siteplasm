import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const createClient = () => {
  if (!supabaseUrl || !supabaseKey) {
    return {
      from: () => ({
        insert: async () => ({ error: new Error('Supabase not configured') }),
        select: async () => ({ data: [], error: new Error('Supabase not configured') }),
      }),
    } as any;
  }
  return createBrowserClient(
    supabaseUrl,
    supabaseKey,
  );
};
