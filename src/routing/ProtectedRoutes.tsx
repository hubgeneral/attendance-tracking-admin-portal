import { type ReactNode } from "react";
import { useAuth } from "../app/hooks/useAuth";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const { currentUser, isAuthenticated, isLoading } = useAuth();

  // Wait for auth initialization to complete before making redirect decisions
  if (isLoading) {
    return null; // or a loading spinner if you prefer
  }

  if (!currentUser && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (currentUser?.role?.toLowerCase() !== "admin") {
    return <Navigate to="/access-denied" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
