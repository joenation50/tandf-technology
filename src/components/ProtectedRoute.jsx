import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="flex items-center justify-center min-h-screen bg-[#1A1D21] text-[#F5F3EF]">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}