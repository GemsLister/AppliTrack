import { api } from "../../api/axios";
import { useState } from "react";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  const forgotPassword = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.post("/auth/forgot-password", { email });
      console.log("Success", data);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    loading,
    error,
    forgotPassword,
  };
};
