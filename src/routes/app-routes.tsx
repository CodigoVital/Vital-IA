import LoginPage from "@/Page/auth/login-page";
import { Route, Routes } from "react-router";
import DashboardRoutes from "./sections/dashboard";
import RegisterPage from "@/Page/auth/register-page";
import RecoveryPage from "@/Page/auth/recovery-page";
import AuthLayout from "@/layouts/auth/auth-layout";
import ProtectedRoutes from "@/layouts/auth/protected-routes";
import { DashboardLayout } from "@/layouts/dashboard/dashboard-layout";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="recovery" element={<RecoveryPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <DashboardLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="/*" element={<DashboardRoutes />} />
        </Route>
      </Routes>
    </>
  );
};
