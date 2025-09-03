import { DashboardLayout } from "./layout/dashboard-layout";
import { ChatPage } from "./Page/chat/chat-page";

function App() {
  return (
    <>
      <DashboardLayout>
        <ChatPage />
      </DashboardLayout>
    </>
  );
}

export default App;
