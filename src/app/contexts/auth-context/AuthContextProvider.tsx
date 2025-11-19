import React, { useState } from "react";
import AuthContext from "./authContext";
import type { AuthContextType, AuthProviderProps } from "../../types/authTypes";

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authContextData, setAuthContextData] = useState<AuthContextType>({
    currentUser: undefined,
  });
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    authContextData,
    setAuthContextData,
    isLoading,
    setIsLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
