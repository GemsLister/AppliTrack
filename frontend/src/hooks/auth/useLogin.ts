import { api } from "../../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("Sending: ", { email, password });

      const { data } = await api.post("/auth/login", { email, password });
      console.log("Successful");
      // Save token
      console.log("Response: ", data);
      localStorage.setItem("token", data.token);
      navigate("/home");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Invalid account",
        text: "Account does not exist. Please try again!",
        confirmButtonColor: "#004aad",
      });
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
