import { trpc } from "@/lib/trpc";

export function useCustomAuth() {
  const { data: user, isLoading, error } = trpc.auth.me.useQuery();
  const isAuthenticated = !!user;

  return {
    user: user ?? null,
    loading: isLoading,
    error,
    isAuthenticated,
  };
}
