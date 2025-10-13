import React from "react";
import { AuthContext } from "./authContext";
import type { AuthContextType, AuthProviderProps } from "../../types/authTypes";

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const value: AuthContextType = {
    user: null,
    login: async () => {},
    logout: () => {},
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
