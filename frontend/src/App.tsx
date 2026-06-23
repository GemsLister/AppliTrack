import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as AuthPages from "./pages/auth/index";

function App() {
  // <AuthPages.LoginPage />
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AuthPages.LoginPage />} />
        <Route path="register" element={<AuthPages.RegisterPage />} />
        <Route
          path="forgot-password"
          element={<AuthPages.ForgotPasswordPage />}
        />
        <Route
          path="reset-password"
          element={<AuthPages.ResetPasswordPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
