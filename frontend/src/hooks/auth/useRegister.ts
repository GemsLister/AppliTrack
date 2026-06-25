import { api } from "../../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const useRegister = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const register = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data } = await api.post("/auth/register", {
        username,
        email,
        password,
      });
      navigate("/");
      console.log("Response: ", data);
      //   Save token
      localStorage.setItem("token", data.token);
      Swal.fire({
        icon: "success",
        title: "Account created successfully",
        text: "You are ready to go!",
        confirmButtonColor: "#004aad",
      });
      console.log("success");
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Email already exists",
          text: "Please use another email",
          confirmButtonColor: "#004aad",
        });
        setError(error.message);
        console.error("Error: ", error.message);
      }
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
