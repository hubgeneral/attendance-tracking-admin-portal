import { useCallback, useContext } from "react";
import {
  useForgotPasswordMutation,
  type UserLoginResponse,
} from "../../generated/graphql";
import AuthContext from "../contexts/auth-context/authContext";

interface ForgotPasswordCredentials {
  email: string;
  staffId: string;
  phoneNumber: string;
}

interface ResetPasswordCredentials {
  newPassword: string;
  confirmNewPassword: string;
}

interface ResetPasswordProps {
  currentUser: UserLoginResponse | undefined;
  isAuthenticated: boolean;
  forgotPassword: (credentials: ForgotPasswordCredentials) => Promise<void>;
  resetPassword: (credentials: ResetPasswordCredentials) => Promise<void>;
}

// local storage keys
const STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  CURRENT_USER: "currentUser",
};

export const useResetPassword = (): ResetPasswordProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("usePassword must be used within an AuthProvider");
  }

  const { authContextData, setAuthContextData } = context;
  const isAuthenticated = Boolean(authContextData?.currentUser);
  const [forgotPasswordMutation] = useForgotPasswordMutation();

  const saveToLocalStorage = useCallback((user: UserLoginResponse) => {
    try {
      if (user.accessToken && user.refreshToken) {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, user.accessToken);
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, user.refreshToken);

        // Store user data without tokens (tokens stored separately)
        const { accessToken, refreshToken, ...userWithoutTokens } = user;
        localStorage.setItem(
          STORAGE_KEYS.CURRENT_USER,
          JSON.stringify(userWithoutTokens)
        );
      }
    } catch (error) {
      console.error("Failed to save auth data to localStorage:", error);
    }
  }, []);

  const forgotPassword = useCallback(
    async (credentials: ForgotPasswordCredentials) => {
      if (!setAuthContextData) {
        throw new Error("setAuthContextData is not defined");
      }

      try {
        const { data: forgotPasswordData } = await forgotPasswordMutation({
          variables: {
            email: credentials.email,
            staffid: credentials.staffId,
            phoneNumber: credentials.phoneNumber,
          },
        });

        // checking graphql errors
        if (!forgotPasswordData?.loginForForgottenPassword) {
          throw new Error("Failed to initiate password reset");
        }

        // check if mutation was successful
        if (!forgotPasswordData?.loginForForgottenPassword) {
          throw new Error("Password reset r request failed");
        }

        const {
          id,
          role,
          userName,
          accessToken,
          refreshToken,
          isPasswordReset,
        } = forgotPasswordData?.loginForForgottenPassword;
        if (!userName || !accessToken || !refreshToken) {
          throw new Error("Incomplete data returned");
        }

        const userData: UserLoginResponse = {
          id,
          role,
          userName,
          accessToken,
          refreshToken,
          isPasswordReset,
        };

        setAuthContextData({
          currentUser: userData,
        });

        saveToLocalStorage(userData);

        // console.log("Forgot password response:", forgotPasswordData);
      } catch (error) {
        console.error("Error occurred while requesting password reset:", error);
        throw error;
      }
    },
    [forgotPasswordMutation, setAuthContextData]
  );

  const resetPassword = useCallback(
    async (credentials: ResetPasswordCredentials) => {
      try {
        const { data: resetPasswordData } = await {};
      } catch (error) {}
    },
    []
  );

  return {
    currentUser: authContextData?.currentUser,
    isAuthenticated,
    forgotPassword,
    resetPassword,
  };
};
