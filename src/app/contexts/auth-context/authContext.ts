import { createContext, type Dispatch } from "react";
import type { AuthContextType } from "../../types/authTypes";

const authContextData: AuthContextType = {
  currentUser: undefined,
};

const AuthContext = createContext<{
  authContextData: AuthContextType | undefined;
  setAuthContextData?:
    | Dispatch<React.SetStateAction<AuthContextType>>
    | undefined;
  getLoggedInUser?: (email: string) => void;
  resetAuthContext?: (email: string) => void;
}>({ authContextData });

export default AuthContext;
