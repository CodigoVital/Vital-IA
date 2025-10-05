import { ChatPage } from "@/Page/chat/chat-page";
import DiagnosisPage from "@/Page/diagnosis/diagnosisPage";
import { HealthInfoPage } from "@/Page/health-info/health-info-page";
import { Route } from "react-router";

export const DashboardRoutes = [
  <Route index element={<ChatPage />} key="chat-index" />,
  <Route path="chat" element={<ChatPage />} key="chat" />,
  <Route path="diagnostico" element={<DiagnosisPage />} key="diagnostico" />,
  <Route path="health-info" element={<HealthInfoPage />} key="health-info" />,
];
