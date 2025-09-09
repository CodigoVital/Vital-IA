import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes/AppRouter";


function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
