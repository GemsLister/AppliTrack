import { api } from "../../api/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useResetPassword = () => {
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) setResetToken(token);
  }, []);

  const resetPassword = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!resetToken) return setError("Invalid or Missing reset token");

      if (newPassword !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Wrong confirm password",
          text: "Passwords do not match. Please try again!",
          confirmButtonColor: "#004aad",
        });
        return setError("Password do not match");
      } else {
        Swal.fire({
          icon: "success",
          title: "Password changed!",
          text: "New password set. You're all to go!",
          confirmButtonColor: "#004aad",
        });
      }

      const { data } = await api.post("/auth/reset-password", {
        resetToken,
        password: newPassword,
      });

      navigate("/");
      console.log("Success", data);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    resetPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
  };
};
