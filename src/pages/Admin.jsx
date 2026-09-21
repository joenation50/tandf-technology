import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import supabase from '../lib/supabase';
import { Link } from 'react-router-dom';

export default function Admin() {
  const { session } = useAuth();
  const [consultations, setConsultations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        const token = session?.access_token;
        const res = await fetch('/api/consultations', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!res.ok) throw new Error('Failed to fetch consultations');
        const data = await res.json();
        setConsultations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (session) {
      fetchConsultations();
    }
  }, [session]);

  const handleSignOut = () => supabase.auth.signOut();

  return (
    <div className="min-h-screen bg-[#1A1D21] text-[#F5F3EF] font-sans">
      <header className="bg-[#2E3338] border-b border-white/10 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-[#F2A900] hover:text-white transition-colors">
            &larr; Back to Site
          </Link>
          <h1 className="text-xl font-bold font-space">TANDF Admin Panel</h1>
        </div>
        <button onClick={handleSignOut} className="text-sm font-mono text-[#8B9096] hover:text-white transition-colors">
          Sign Out
        </button>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold font-space mb-2">Consultations</h2>
            <p className="text-[#8B9096]">Manage leads and inquiries from the website.</p>
          </div>
          <div className="text-sm font-mono bg-[#2E3338] px-3 py-1 rounded border border-white/10">
            Total: {consultations.length}
          </div>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded mb-6">{error}</div>}

        {loading ? (
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-[#2E3338] h-24 rounded border border-white/5"></div>
            ))}
          </div>
        ) : consultations.length === 0 ? (
          <div className="bg-[#2E3338] rounded border border-white/10 p-12 text-center text-[#8B9096]">
            No consultations found yet.
          </div>
        ) : (
          <div className="grid gap-4">
            {consultations.map(c => (
              <div key={c.id} className="bg-[#2E3338] rounded border border-white/10 p-5 hover:border-[#F2A900]/50 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold font-space text-white">{c.name}</h3>
                    <div className="text-sm text-[#8B9096] flex items-center gap-3 mt-1">
                      <a href={`mailto:${c.email}`} className="hover:text-[#F2A900]">{c.email}</a>
                      {c.company && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-[#8B9096]"></span>
                          <span>{c.company}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-mono bg-[#1A1D21] px-2 py-1 rounded border border-white/5 text-[#F2A900]">
                      {c.service || 'General'}
                    </span>
                    <span className="text-xs text-[#8B9096]">
                      {new Date(c.created_at).toLocaleString('en-NG')}
                    </span>
                  </div>
                </div>
                <div className="bg-[#1A1D21] p-4 rounded text-sm text-gray-300 whitespace-pre-wrap border border-white/5">
                  {c.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}