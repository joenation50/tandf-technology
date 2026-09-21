import { handleConsultations } from '../api/handler.js';

export async function onRequest(context) {
  const { request, env } = context;

  let body = null;
  if (request.method === 'POST') {
    try { body = await request.json(); } catch { body = {}; }
  }

  const result = await handleConsultations({
    method: request.method,
    body,
    headers: Object.fromEntries(request.headers),
    env
  });

  return new Response(
    result.body ? JSON.stringify(result.body) : null,
    { status: result.status, headers: result.headers }
  );
}
