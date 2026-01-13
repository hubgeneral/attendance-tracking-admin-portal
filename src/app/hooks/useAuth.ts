import { useCallback, useContext, useEffect } from "react";
import {
  useLoginMutation,
  type UserLoginResponse,
} from "../../generated/graphql";
import AuthContext from "../contexts/auth-context/authContext";
import Cookies from "js-cookie";

interface LoginCredentials {
  username: string;
  password: string;
}

interface UseAuthProps {
  currentUser: UserLoginResponse | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  setAuthData: (user: UserLoginResponse, accessToken: string) => void;
  updateUser: (user: UserLoginResponse) => void;
  updateAccessToken: (accessToken: string) => void;
}

const STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  CURRENT_USER: "currentUser",
};

const COOKIE_EXPIRATION_DAYS = 1;
const COOKIE_BASE_OPTIONS = {
  path: "/",
  sameSite: "strict" as const,
  secure:
    typeof window !== "undefined" && window.location.protocol === "https:",
};

const setCookie = (key: string, value: string) => {
  Cookies.set(key, value, {
    ...COOKIE_BASE_OPTIONS,
    expires: COOKIE_EXPIRATION_DAYS,
  });
};

const removeCookie = (key: string) => {
  Cookies.remove(key, { path: COOKIE_BASE_OPTIONS.path });
};

export const useAuth = (): UseAuthProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const { authContextData, setAuthContextData, isLoading, setIsLoading } =
    context;
  const isAuthenticated = Boolean(authContextData?.currentUser);
  const [loginMutation] = useLoginMutation();

  useEffect(() => {
    const loadAuthFromStorage = () => {
      try {
        const storedUser = Cookies.get(STORAGE_KEYS.CURRENT_USER);
        const storedAccessToken = Cookies.get(STORAGE_KEYS.ACCESS_TOKEN);
        const storedRefreshToken = Cookies.get(STORAGE_KEYS.REFRESH_TOKEN);

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
        console.error("Failed to load auth data from cookies:", error);
        removeCookie(STORAGE_KEYS.CURRENT_USER);
        removeCookie(STORAGE_KEYS.ACCESS_TOKEN);
        removeCookie(STORAGE_KEYS.REFRESH_TOKEN);
      } finally {
        if (setIsLoading) {
          setIsLoading(false);
        }
      }
    };

    loadAuthFromStorage();
  }, [setAuthContextData, setIsLoading]);

  const saveToCookies = useCallback((user: UserLoginResponse) => {
    try {
      if (user.accessToken) {
        setCookie(STORAGE_KEYS.ACCESS_TOKEN, user.accessToken);
      }
      if (user.refreshToken) {
        setCookie(STORAGE_KEYS.REFRESH_TOKEN, user.refreshToken);
      }

      const userWithoutTokens: Partial<UserLoginResponse> = { ...user };
      delete userWithoutTokens.accessToken;
      delete userWithoutTokens.refreshToken;
      setCookie(STORAGE_KEYS.CURRENT_USER, JSON.stringify(userWithoutTokens));
    } catch (error) {
      console.error("Failed to save auth data to cookies:", error);
    }
  }, []);

  const clearAuthCookies = useCallback(() => {
    try {
      removeCookie(STORAGE_KEYS.ACCESS_TOKEN);
      removeCookie(STORAGE_KEYS.REFRESH_TOKEN);
      removeCookie(STORAGE_KEYS.CURRENT_USER);
    } catch (error) {
      console.error("Failed to clear auth data from cookies:", error);
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
        if (!role || !accessToken || !refreshToken) {
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

        saveToCookies(userData);
      } catch (error) {
        console.error("Login error:", error);
        throw error;
      }
    },
    [setAuthContextData, loginMutation, saveToCookies]
  );

  const logout = useCallback(() => {
    if (!setAuthContextData) {
      throw new Error("setAuthContextData is not defined");
    }
    setAuthContextData({
      currentUser: undefined,
    });

    clearAuthCookies();
  }, [setAuthContextData, clearAuthCookies]);

  const setAuthData = useCallback(
    (user: UserLoginResponse) => {
      if (!setAuthContextData) {
        throw new Error("setAuthContextData is not defined");
      }
      setAuthContextData({
        currentUser: user,
      });

      saveToCookies(user);
    },
    [setAuthContextData, saveToCookies]
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

      saveToCookies(user);
    },
    [setAuthContextData, saveToCookies]
  );

  const updateAccessToken = useCallback(
    (accessToken: string) => {
      if (!setAuthContextData) {
        throw new Error("setAuthContextData is not defined");
      }

      setAuthContextData((prev) => {
        if (!prev?.currentUser) {
          return prev ?? { currentUser: undefined };
        }
        return {
          ...prev,
          currentUser: {
            ...prev.currentUser,
            accessToken,
          },
        };
      });

      if (accessToken) {
        setCookie(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
      } else {
        removeCookie(STORAGE_KEYS.ACCESS_TOKEN);
      }
    },
    [setAuthContextData]
  );

  return {
    currentUser: authContextData?.currentUser,
    isAuthenticated,
    isLoading: isLoading ?? true,
    login,
    logout,
    setAuthData,
    updateUser,
    updateAccessToken,
  };
};
