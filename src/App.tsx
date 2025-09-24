import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes/app-routes";
import { SidebarProvider } from "./components/ui/sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <SidebarProvider>
          <AppRouter />
        </SidebarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
