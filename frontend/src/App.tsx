import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as AuthPages from "./pages/auth/index";
import * as DashboardPages from "./pages/dashboard/HomePage";

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
        {/* Dashboard Routes */}
        <Route path="home" element={<DashboardPages.HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
