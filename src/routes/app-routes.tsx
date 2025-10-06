import LoginPage from "@/Page/auth/login-page";
import { Route, Routes } from "react-router";
import RegisterPage from "@/Page/auth/register-page";
import RecoveryPage from "@/Page/auth/recovery-page";
import AuthLayout from "@/layouts/auth/auth-layout";
import ProtectedRoutes from "@/layouts/auth/protected-routes";
import { DashboardLayout } from "@/layouts/dashboard/dashboard-layout";
import { DashboardRoutes } from "./sections/dashboard";
import ResetPasswordPage from "@/Page/auth/reset-password-page";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="recovery" element={<RecoveryPage />} />
        <Route path="recovery/reset" element={<ResetPasswordPage />} />
      </Route>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <DashboardLayout />
          </ProtectedRoutes>
        }
      >
        {DashboardRoutes}
      </Route>
    </Routes>
  );
};
