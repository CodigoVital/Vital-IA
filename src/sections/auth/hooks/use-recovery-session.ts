import { useEffect } from "react";
import { useLocation } from "react-router";
import { supabase } from "@/constants";

export const useRecoverySession = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const params = new URLSearchParams(location.hash.replace("#", ""));
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      const type = params.get("type");

      if (type === "recovery" && accessToken && refreshToken) {
        supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
      }
    }
  }, [location]);
};
