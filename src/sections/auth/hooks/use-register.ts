import { useAppDispatch } from "@/hooks/use-selector";
import { useRegisterMutation } from "@/store/services/auth/authApi";
import { useState } from "react";
import type { registerSchema } from "../schemas/register";
import type z from "zod";
import { setUser } from "@/store/slices/auth/auth-slice";
import getAuthErrorMessage from "../helper/get-auth-error-message";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { SerializedError } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { useNavigate } from "react-router";

type RegisterFormValues = z.infer<typeof registerSchema>;

const useRegister = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [register, { isLoading: isRegistering }] = useRegisterMutation();
  const dispatch = useAppDispatch();
  const initialValues: RegisterFormValues = {
    displayName: "",
    email: "",
    password: "",
  };
  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      const data = await register(values);
      if (data?.data?.user) {
        dispatch(setUser(data.data.user));
        toast.success("Registro exitoso", {
          description:
            "se ha enviado un correo de verificación una vez que verifiques tu correo podrás iniciar sesión",
          position: "top-right",
          duration: 5000,
        });
        navigate("/auth");
      }
    } catch (err) {
      const msg = getAuthErrorMessage(
        err as FetchBaseQueryError | SerializedError
      );
      setErrorMessage(msg);
    }
  };

  return {
    initialValues,
    handleSubmit,
    isRegistering,
    errorMessage,
  };
};

export default useRegister;
