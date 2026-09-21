import { createClient } from '@supabase/supabase-js';

function getSupabase(env) {
  const url = env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || env.VITE_SUPABASE_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error('Missing Supabase env vars: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  }

  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false }
  });
}

export async function handleConsultations({ method, body, headers, env }) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json'
  };

  if (method === 'OPTIONS') {
    return { status: 204, body: null, headers: corsHeaders };
  }

  try {
    const client = getSupabase(env);

    if (method === 'POST') {
      const { name, email, company, service, message } = body || {};

      if (!name || !email || !message) {
        return {
          status: 400,
          body: { error: 'Name, email, and message are required.' },
          headers: corsHeaders
        };
      }

      const { data, error } = await client
        .from('consultations')
        .insert({ name, email, company, service, message })
        .select()
        .single();

      if (error) throw error;
      return { status: 201, body: data, headers: corsHeaders };
    }

    if (method === 'GET') {
      const authHeader = (headers && (headers.authorization || headers.Authorization)) || '';
      const token = authHeader.replace('Bearer ', '');

      if (!token) {
        return { status: 401, body: { error: 'Unauthorized' }, headers: corsHeaders };
      }

      const { data: { user }, error: authError } = await client.auth.getUser(token);
      if (authError || !user) {
        return { status: 401, body: { error: 'Invalid token' }, headers: corsHeaders };
      }

      const { data, error } = await client
        .from('consultations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { status: 200, body: data, headers: corsHeaders };
    }

    return { status: 405, body: { error: 'Method not allowed' }, headers: corsHeaders };
  } catch (err) {
    console.error('API error:', err);
    return {
      status: 500,
      body: { error: err.message || 'Server error' },
      headers: corsHeaders
    };
  }
}
