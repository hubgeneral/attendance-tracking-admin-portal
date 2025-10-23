import { useCallback, useContext, useEffect } from "react";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
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
  confirmPassword?: string;
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
  RESET_TOKEN: "resetToken",
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
  const [resetPasswordMutation] = useResetPasswordMutation();

  useEffect(() => {
    const loadAuthFromStorage = () => {
      try {
        const storedUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
        const storedAccessToken = localStorage.getItem(
          STORAGE_KEYS.ACCESS_TOKEN
        );
        const storedRefreshToken = localStorage.getItem(
          STORAGE_KEYS.REFRESH_TOKEN
        );
        const storedResetToken = localStorage.getItem(STORAGE_KEYS.RESET_TOKEN);

        if (
          storedUser &&
          storedAccessToken &&
          storedRefreshToken &&
          storedResetToken
        ) {
          const user: UserLoginResponse = JSON.parse(storedUser);

          if (setAuthContextData) {
            setAuthContextData({
              currentUser: {
                ...user,
                accessToken: storedAccessToken,
                refreshToken: storedRefreshToken,
                resetToken: storedResetToken,
              },
            });
          }
        }
      } catch (error) {
        console.error("Failed to load auth data from localStorage:", error);
        // Clear corrupted data
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
        localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        localStorage.removeItem(STORAGE_KEYS.RESET_TOKEN);
      }
    };

    loadAuthFromStorage();
  }, [setAuthContextData]);

  const saveToLocalStorage = useCallback((user: UserLoginResponse) => {
    try {
      if (user.accessToken && user.refreshToken && user.resetToken) {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, user.accessToken);
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, user.refreshToken);
        localStorage.setItem(STORAGE_KEYS.RESET_TOKEN, user.resetToken);

        // Store user data without tokens (tokens stored separately)
        const { accessToken, refreshToken, resetToken, ...userWithoutTokens } =
          user;
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

        const {
          id,
          role,
          userName,
          accessToken,
          refreshToken,
          resetToken,
          isPasswordReset,
        } = forgotPasswordData.loginForForgottenPassword;

        if (!userName || !accessToken || !refreshToken || !resetToken) {
          throw new Error("Incomplete data returned");
        }

        const userData: UserLoginResponse = {
          id,
          role,
          userName,
          accessToken,
          refreshToken,
          resetToken,
          isPasswordReset,
        };

        setAuthContextData({
          currentUser: userData,
        });

        saveToLocalStorage(userData);
      } catch (error) {
        console.error("Error occurred while requesting password reset:", error);
        throw error;
      }
    },
    [forgotPasswordMutation, setAuthContextData, saveToLocalStorage]
  );

  const resetPassword = useCallback(
    async (credentials: ResetPasswordCredentials) => {
      try {
        // Validate password match if confirmPassword is provided
        if (
          credentials.confirmPassword &&
          credentials.newPassword !== credentials.confirmPassword
        ) {
          throw new Error("Passwords do not match");
        }

        // Validate password length
        // if (credentials.newPassword.length < 8) {
        //   throw new Error("Password must be at least 8 characters");
        // }

        const storedUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
        const storedToken = localStorage.getItem(STORAGE_KEYS.RESET_TOKEN);

        if (!storedUser || !storedToken) {
          throw new Error(
            "Session expired. Please request password reset again."
          );
        }

        let username: string;
        try {
          const parsed = JSON.parse(
            storedUser
          ) as Partial<UserLoginResponse> & {
            userName?: string;
          };
          username = parsed.userName ?? "";
        } catch (err) {
          throw new Error("Failed to parse stored user data");
        }

        if (!username) {
          throw new Error(
            "Username missing. Please request password reset again."
          );
        }

        console.log("Attempting password reset for:", username);

        const { data: resetPasswordData } = await resetPasswordMutation({
          variables: {
            token: storedToken,
            username: username,
            password: credentials.newPassword,
          },
        });

        // Log the full response for debugging
        console.log("Reset password response:", resetPasswordData);

        // Check if the mutation returned data
        if (!resetPasswordData) {
          throw new Error("No response from server");
        }

        // Check if resetPassword field exists and is truthy
        if (!resetPasswordData.resetPassword) {
          throw new Error(
            "Password reset failed - invalid response from server"
          );
        }

        console.log("Password reset successful");

        // Optional: Clear auth data after successful reset
        // localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
        // localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
        // localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);

        if (setAuthContextData) {
          setAuthContextData({ currentUser: undefined });
        }
      } catch (error) {
        console.error("Error occurred while resetting password:", error);
        // Provide more context about the error
        if (error instanceof Error) {
          throw new Error(`Password reset failed: ${error.message}`);
        }
        throw error;
      }
    },
    [resetPasswordMutation, setAuthContextData]
  );

  return {
    currentUser: authContextData?.currentUser,
    isAuthenticated,
    forgotPassword,
    resetPassword,
  };
};
