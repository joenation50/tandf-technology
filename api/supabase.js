import { createClient } from '@supabase/supabase-js';

export function getSupabase(env) {
  // Handle both Node-style (process.env) and Cloudflare-style (context.env)
  const e = env || (typeof process !== 'undefined' ? process.env : {});
  const url = e.SUPABASE_URL || e.NEXT_PUBLIC_SUPABASE_URL || e.VITE_SUPABASE_URL;
  const key = e.SUPABASE_SERVICE_ROLE_KEY || e.SUPABASE_KEY;

  if (!url || !key) {
    throw new Error('Missing Supabase env vars: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  }

  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
}

// Simple env accessor that works on all platforms
export function getEnv(env) {
  return env || (typeof process !== 'undefined' ? process.env : {});
}
