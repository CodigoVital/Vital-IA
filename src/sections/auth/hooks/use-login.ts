import { useAppDispatch } from "@/hooks/use-selector";
import { useLoginMutation } from "@/store/services/auth/authApi";
import { setUser } from "@/store/slices/auth/auth-slice";
import { useNavigate } from "react-router";
import getAuthErrorMessage from "../helper/get-auth-error-message";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";
import type { LoginFormValues } from "../schemas/login";
import { useState } from "react";
import { toast } from "sonner";

const useLoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const initialValues: LoginFormValues = { email: "", password: "" };
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const data = await login(values).unwrap();
      if (data?.user) {
        dispatch(setUser(data.user));
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
        toast.success("Inicio de sesión exitoso", {
          position: "top-right",
          description: "Bienvenido de nuevo",
        });
      }
    } catch (err) {
      const msg = getAuthErrorMessage(
        err as FetchBaseQueryError | SerializedError
      );
      setErrorMessage(msg);
    }
  };

  return { initialValues, handleSubmit, isLoading, errorMessage };
};

export default useLoginForm;
