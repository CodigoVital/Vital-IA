import { useAppDispatch, useAppSelector } from "@/hooks/use-selector";
import { useLoginMutation } from "@/store/services/auth/authApi";
import { setUser } from "@/store/slices/auth/auth-slice";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import getAuthErrorMessage from "../helper/get-auth-error-message";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";

const useLogin = () => {
  const [email, setEmail] = useState("eddytalavera073@gmail.com");
  const [password, setPassword] = useState("plumx34045");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const isAuthenticated = useAppSelector(
    (state) => state.authSlice.isAuthenticated
  );
  const user = useAppSelector((state) => state.authSlice.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user && isAuthenticated) {
      if (location.pathname === "/auth") {
        navigate("/");
      }
    }
  }, [user, navigate, location.pathname, isAuthenticated]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login({ email, password }).unwrap();
      if (data?.user) {
        dispatch(setUser(data.user));
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      }
    } catch (err) {
      const msg = getAuthErrorMessage(
        err as FetchBaseQueryError | SerializedError
      );
      setErrorMessage(msg);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    navigate,
    isLoading,
    errorMessage,
  };
};

export default useLogin;
