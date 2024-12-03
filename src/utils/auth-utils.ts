import { BACKEND_URL } from "./env-vars";

export const signUp = async (email: string, password: string) => {
  let data: any = null;
  let error = null;
  try {
    const response = await fetch(`${BACKEND_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    data = await response.json();
  } catch (error) {
    console.error("Error signing up:", error);
    error = error;
  } finally {
    return { data, error };
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
