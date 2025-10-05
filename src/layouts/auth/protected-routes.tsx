import { useAppSelector } from "@/hooks/use-selector";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }: PropsWithChildren) => {
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
