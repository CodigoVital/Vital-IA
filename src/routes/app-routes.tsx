import LoginPage from "@/Page/login/login-page";
import { Route, Routes } from "react-router";
import DashboardRoutes from "./sections/dashboard";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route index path="/login" element={<LoginPage />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
};
