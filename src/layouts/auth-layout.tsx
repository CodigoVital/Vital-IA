import AuthHeader from "@/components/custom/auth-header";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <AuthHeader />
      <main className="flex-1 flex items-center justify-center w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
