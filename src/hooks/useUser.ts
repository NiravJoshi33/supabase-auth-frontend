import { BACKEND_URL } from "@/utils/env-vars";
import { useState } from "react";

export type User = {
  email: string;
  id: string;
};
export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/auth/current-user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { user, error, loading, fetchUser };
};
