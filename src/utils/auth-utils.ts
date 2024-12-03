import { BACKEND_URL } from "./env-vars";

export const signUp = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error signing up:", error);
    return null;
  }
};

export const login = async (email: string, password: string) => {
  let error = null;
  let user = null;
  try {
    const response = await fetch(`${BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    user = data.user;
  } catch (error) {
    console.error("Error logging in:", error);
    error = error;
  } finally {
    return { user, error };
  }
};
