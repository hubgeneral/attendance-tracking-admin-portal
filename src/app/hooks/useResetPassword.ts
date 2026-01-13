import { useCallback, useContext, useEffect } from "react";
import {
  useForgotPasswordMutation,
  useResetPasswordMutation,
  type UserLoginResponse,
} from "../../generated/graphql";
import AuthContext from "../contexts/auth-context/authContext";
import Cookies from "js-cookie";

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

const STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  RESET_TOKEN: "resetToken",
  CURRENT_USER: "currentUser",
};

const COOKIE_EXPIRATION_DAYS = 1;
const COOKIE_BASE_OPTIONS = {
  path: "/",
  sameSite: "strict" as const,
  secure: typeof window !== "undefined" && window.location.protocol === "https:",
};

const setCookie = (key: string, value: string) => {
  Cookies.set(key, value, { ...COOKIE_BASE_OPTIONS, expires: COOKIE_EXPIRATION_DAYS });
};

const removeCookie = (key: string) => {
  Cookies.remove(key, { path: COOKIE_BASE_OPTIONS.path });
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
        const storedUser = Cookies.get(STORAGE_KEYS.CURRENT_USER);
        const storedAccessToken = Cookies.get(STORAGE_KEYS.ACCESS_TOKEN);
        const storedRefreshToken = Cookies.get(STORAGE_KEYS.REFRESH_TOKEN);
        const storedResetToken = Cookies.get(STORAGE_KEYS.RESET_TOKEN);

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
        console.error("Failed to load auth data from cookies:", error);
        removeCookie(STORAGE_KEYS.CURRENT_USER);
        removeCookie(STORAGE_KEYS.ACCESS_TOKEN);
        removeCookie(STORAGE_KEYS.REFRESH_TOKEN);
        removeCookie(STORAGE_KEYS.RESET_TOKEN);
      }
    };

    loadAuthFromStorage();
  }, [setAuthContextData]);

  const saveToCookies = useCallback((user: UserLoginResponse) => {
    try {
      if (user.accessToken) {
        setCookie(STORAGE_KEYS.ACCESS_TOKEN, user.accessToken);
      }
      if (user.refreshToken) {
        setCookie(STORAGE_KEYS.REFRESH_TOKEN, user.refreshToken);
      }
      if (user.resetToken) {
        setCookie(STORAGE_KEYS.RESET_TOKEN, user.resetToken);
      }

      const userWithoutTokens: Partial<UserLoginResponse> = { ...user };
      delete userWithoutTokens.accessToken;
      delete userWithoutTokens.refreshToken;
      delete userWithoutTokens.resetToken;
      setCookie(STORAGE_KEYS.CURRENT_USER, JSON.stringify(userWithoutTokens));
    } catch (error) {
      console.error("Failed to save auth data to cookies:", error);
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

        saveToCookies(userData);
      } catch (error) {
        console.error("Error occurred while requesting password reset:", error);
        throw error;
      }
    },
    [forgotPasswordMutation, setAuthContextData, saveToCookies]
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

        const storedUser = Cookies.get(STORAGE_KEYS.CURRENT_USER);
        const storedToken = Cookies.get(STORAGE_KEYS.RESET_TOKEN);

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
        // removeCookie(STORAGE_KEYS.ACCESS_TOKEN);
        // removeCookie(STORAGE_KEYS.REFRESH_TOKEN);
        // removeCookie(STORAGE_KEYS.CURRENT_USER);

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
