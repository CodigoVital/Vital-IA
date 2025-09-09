import { Button } from "@/components/ui/button";
import { Link, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<div className="text-3xl">Primera Pagina</div>}
        />
        <Route
          path="/home2"
          element={<div className="text-3xl">Segunda pagina</div>}
        />
      </Routes>

      <Button className="bg-blue-500 mt-5 mr-5">
        <Link to="/">Go to Home</Link>
      </Button>
      <Button className="bg-blue-500">
        <Link to="/home2">Go to Home</Link>
      </Button>
    </>
  );
};