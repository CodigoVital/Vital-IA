import AuthHeader from "@/components/custom/auth-header";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <AuthHeader />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
