import type { ReactNode } from "react";

interface AuthContextType {
  user?: { id: string; name: string } | null;
  login?: (username: string, password: string) => Promise<void>;
  logout?: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export type { AuthContextType, AuthProviderProps};
