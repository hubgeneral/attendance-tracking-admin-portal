import type { ReactNode } from "react";
import type { AppUser, UserLoginResponse } from "../../generated/graphql";

interface AuthContextType {
  currentUser?: UserLoginResponse | undefined;
}

interface AuthProviderProps {
  children: ReactNode;
}

export type { AuthContextType, AuthProviderProps };
