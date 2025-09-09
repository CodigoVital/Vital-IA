
import { DashboardLayout } from "@/layouts/dashboard-layout";
import { ChatPage } from "@/Page/chat/chat-page";
import { Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<ChatPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/diagnostico" element={<div>Diagnostico Page</div>} />
        </Route>
      </Routes>
    </>
  );
};