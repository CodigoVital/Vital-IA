import { useAppSelector } from "@/hooks/use-selector";
import type { PropsWithChildren } from "react";

const ProtectedRoutes = ({ children }: PropsWithChildren) => {
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated
  );

  return <>{children}</>;
};

export default ProtectedRoutes;
