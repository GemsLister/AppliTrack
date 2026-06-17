import { api } from "../../api/axios";
import { useState } from "react";

export const useRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.post("/auth/register", {
        username,
        email,
        password,
      });

      //   Save token
      localStorage.setItem("token", data.token);
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
  };
};
