import { useEffect, useState, useCallback } from "react";
import { api, type User } from "@/lib/api";
import { getLoginUrl } from "@/const";

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

export function useAuth(options?: UseAuthOptions) {
  const { redirectOnUnauthenticated = false, redirectPath = getLoginUrl() } = options ?? {};
  
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await api.auth.me();
      if (res.success && res.user) {
        setUser(res.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      setError(err as Error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (!redirectOnUnauthenticated) return;
    if (isLoading) return;
    if (user) return;
    if (typeof window === "undefined") return;
    if (window.location.pathname === redirectPath) return;

    window.location.href = redirectPath;
  }, [redirectOnUnauthenticated, redirectPath, isLoading, user]);

  const logout = useCallback(async () => {
    try {
      await api.auth.logout();
      setUser(null);
    } catch (err) {
      setError(err as Error);
    }
  }, []);

  return {
    user,
    loading: isLoading,
    error,
    isAuthenticated: Boolean(user),
    refresh: fetchUser,
    logout,
  };
}
