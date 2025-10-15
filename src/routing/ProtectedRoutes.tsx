import { type ReactNode } from "react";
import { useAuth } from "../app/hooks/useAuth";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const { currentUser, isAuthenticated } = useAuth();

  if (!currentUser && !isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
