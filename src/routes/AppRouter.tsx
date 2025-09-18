
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { ChatPage } from "@/Page/chat/chat-page";
import { Route, Routes } from "react-router";
import { DiagnosticoView } from "@/sections/diagnostico/view/diagnostico-main-view";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<ChatPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/diagnostico" element={<DiagnosticoView />} />
        </Route>
      </Routes>
    </>
  );
};