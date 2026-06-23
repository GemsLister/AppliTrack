import { api } from "../../api/axios";
import { useState } from "react";

export const useResetPassword = () => {
  const [resetToken, setResetToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  const resetPassword = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.post("/auth/reset-password", {
        resetToken,
        password,
      });
      console.log("Success", data);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    resetPassword,
    setPassword,
    setResetToken,
    loading,
    error,
  };
};
