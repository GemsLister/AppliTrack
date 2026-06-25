import { api } from "../../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const forgotPassword = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!email) return setError("Please fill in");

      const { data } = await api.post("/auth/forgot-password", { email });
      navigate(`/reset-password?token=${data.resetToken}`);
      console.log("Success", data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        Swal.fire({
          icon: "error",
          title: "Oops! Email not found",
          text: "Please try again!",
          confirmButtonColor: "#004aad",
        });
      }
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
