import { BACKEND_URL } from "@/utils/env-vars";
import { useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<any>(null);
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
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { user, error, loading, fetchUser };
};
