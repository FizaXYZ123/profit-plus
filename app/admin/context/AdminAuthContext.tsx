"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useRouter, usePathname } from "next/navigation";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "ADMIN" | "USER";
  createdAt?: string;
  updatedAt?: string;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  token: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  authFetch: (url: string, options?: RequestInit) => Promise<Response>;
  refreshUser: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

const TOKEN_KEY = "profit_plus_admin_token";
const USER_KEY = "profit_plus_admin_user";

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem(TOKEN_KEY);
      const storedUser = localStorage.getItem(USER_KEY);

      if (storedToken && storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.role === "ADMIN") {
          setToken(storedToken);
          setUser(parsedUser);
          // Set cookie for middleware/server if needed
          document.cookie = `profit_admin_token=${storedToken}; path=/; max-age=${90 * 24 * 60 * 60}; SameSite=Lax`;
        } else {
          // Non-admin user stored, clear it
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem(USER_KEY);
        }
      }
    } catch (e) {
      console.error("Failed to load auth data from storage", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    try {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(USER_KEY);
      document.cookie = "profit_admin_token=; path=/; max-age=0; SameSite=Lax";
    } catch (e) {
      console.error("Error clearing storage on logout", e);
    }
    router.push("/admin/login");
  }, [router]);

  const login = useCallback(
    async (email: string, password: string) => {
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          return {
            success: false,
            message: data.message || "Invalid credentials",
          };
        }

        if (data.data?.role !== "ADMIN") {
          return {
            success: false,
            message: "Access denied. Admin privileges required.",
          };
        }

        const receivedToken = data.jwt;
        const loggedInUser: AdminUser = data.data;

        setToken(receivedToken);
        setUser(loggedInUser);

        localStorage.setItem(TOKEN_KEY, receivedToken);
        localStorage.setItem(USER_KEY, JSON.stringify(loggedInUser));
        document.cookie = `profit_admin_token=${receivedToken}; path=/; max-age=${90 * 24 * 60 * 60}; SameSite=Lax`;

        return { success: true };
      } catch (err) {
        console.error("Login request failed", err);
        return {
          success: false,
          message: "Network error occurred. Please try again.",
        };
      }
    },
    []
  );

  const authFetch = useCallback(
    async (url: string, options: RequestInit = {}) => {
      const activeToken = token || localStorage.getItem(TOKEN_KEY);

      const headers = new Headers(options.headers || {});
      if (activeToken) {
        headers.set("Authorization", `Bearer ${activeToken}`);
      }

      const response = await fetch(url, {
        ...options,
        headers,
      });

      // If token expired or unauthorized
      if (response.status === 401 && !url.includes("/api/auth/login")) {
        logout();
      }

      return response;
    },
    [token, logout]
  );

  const refreshUser = useCallback(async () => {
    // Optionally fetch fresh user info
  }, []);

  return (
    <AdminAuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated: !!token && !!user && user.role === "ADMIN",
        login,
        logout,
        authFetch,
        refreshUser,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
}
