import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes/app-routes";
import { SidebarProvider } from "./components/ui/sidebar";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <SidebarProvider>
          <AppRouter />
           <Toaster />
        </SidebarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
