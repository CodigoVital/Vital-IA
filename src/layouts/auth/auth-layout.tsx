import AuthHeader from "@/components/custom/auth-header";
import { useIsMobile } from "@/hooks/use-mobile";
import { Outlet } from "react-router";

const AuthLayout = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`flex flex-col w-full min-h-screen ${
        isMobile ? "h-screen overflow-hidden" : ""
      }`}
    >
      <AuthHeader />
      <main className="flex-1 flex items-center justify-center w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
