import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes/AppRouter";
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
