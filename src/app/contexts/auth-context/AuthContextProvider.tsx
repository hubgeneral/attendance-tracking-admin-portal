import React, { useState } from "react";
import AuthContext from "./authContext";
import type { AuthContextType, AuthProviderProps } from "../../types/authTypes";

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authContextData, setAuthContextData] = useState<AuthContextType>({
    currentUser: undefined,
  });

  const value = {
    authContextData,
    setAuthContextData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
