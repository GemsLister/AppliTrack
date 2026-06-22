import { api } from "../../api/axios";
import { useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.post("/auth/login", { email, password });
      console.log("Successful");
      // Save token
      localStorage.setItem("token", data.token);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
  };
};
