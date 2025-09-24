import LoginPage from "@/Page/auth/login-page";
import { Route, Routes } from "react-router";
import DashboardRoutes from "./sections/dashboard";
import RegisterPage from "@/Page/auth/register-page";
import RecoveryPage from "@/Page/auth/recovery-page";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
};
