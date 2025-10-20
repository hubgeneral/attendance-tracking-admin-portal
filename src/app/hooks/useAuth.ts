import { useCallback, useContext, useEffect } from "react";
import {
  useLoginMutation,
  type UserLoginResponse,
} from "../../generated/graphql";
import AuthContext from "../contexts/auth-context/authContext";

interface LoginCredentials {
  username: string;
  password: string;
}

interface UseAuthProps {
  currentUser: UserLoginResponse | undefined;
  isAuthenticated: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  setAuthData: (user: UserLoginResponse, accessToken: string) => void;
  updateUser: (user: UserLoginResponse) => void;
  updateAccessToken: (accessToken: string) => void;
}

// local storage keys
const STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  CURRENT_USER: "currentUser",
};

export const useAuth = (): UseAuthProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { authContextData, setAuthContextData } = context;
  const isAuthenticated = Boolean(authContextData?.currentUser);
  const [loginMutation] = useLoginMutation();

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

        if (storedUser && storedAccessToken && storedRefreshToken) {
          const user: UserLoginResponse = JSON.parse(storedUser);

          if (setAuthContextData) {
            setAuthContextData({
              currentUser: {
                ...user,
                accessToken: storedAccessToken,
                refreshToken: storedRefreshToken,
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
      }
    };

    loadAuthFromStorage();
  }, [setAuthContextData]);

  // Save to localStorage helper

  //

  //

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

  // Clear localStorage helper
  const clearLocalStorage = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    } catch (error) {
      console.error("Failed to clear auth data from localStorage:", error);
    }
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials) => {
      if (!setAuthContextData) {
        throw new Error("setAuthContextData is not defined");
      }

      try {
        const { data: loginData } = await loginMutation({
          variables: {
            username: credentials.username,
            password: credentials.password,
          },
        });

        if (!loginData?.login) {
          throw new Error("Login failed: No data returned");
        }

        const {
          id,
          role,
          userName,
          accessToken,
          refreshToken,
          isPasswordReset,
        } = loginData.login;
        if (!role || !accessToken) {
          throw new Error("Login failed: Incomplete data");
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
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
    [setAuthContextData, loginMutation]
  );

  const logout = useCallback(() => {
    if (!setAuthContextData) {
      throw new Error("setAuthContextData is not defined");
    }
    setAuthContextData({
      currentUser: undefined,
    });

    clearLocalStorage();
  }, [setAuthContextData]);

  const setAuthData = useCallback(
    (user: UserLoginResponse) => {
      if (!setAuthContextData) {
        throw new Error("setAuthContextData is not defined");
      }
      setAuthContextData({
        currentUser: user,
      });

      saveToLocalStorage(user);
    },
    [setAuthContextData, saveToLocalStorage]
  );

  const updateUser = useCallback(
    (user: UserLoginResponse) => {
      if (!setAuthContextData) {
        throw new Error("setAuthContextData is not defined");
      }

      setAuthContextData((prev) => ({
        ...prev,
        currentUser: user,
      }));
    },
    [setAuthContextData]
  );

  const updateAccessToken = useCallback(
    (accessToken: string) => {
      if (!setAuthContextData) {
        throw new Error("setAuthContextData is not defined");
      }

      setAuthContextData((prev) => ({
        ...prev,
        accessToken,
      }));
    },
    [setAuthContextData]
  );

  return {
    currentUser: authContextData?.currentUser,
    isAuthenticated,
    login,
    logout,
    setAuthData,
    updateUser,
    updateAccessToken,
  };
};
