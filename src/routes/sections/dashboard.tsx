// DashboardRoutes.tsx
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { ChatPage } from "@/Page/chat/chat-page";
import DiagnosisPage from "@/Page/diagnosis/diagnosisPage";
import { HealthInfoPage } from "@/Page/health-info/health-info-page";
import { Routes, Route } from "react-router";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<ChatPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="diagnostico" element={<DiagnosisPage />} />
        <Route path="health-info" element={<HealthInfoPage />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
