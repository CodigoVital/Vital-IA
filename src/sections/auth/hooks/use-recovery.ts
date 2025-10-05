import {
  useRecoveryMutation,
  useResetPasswordMutation,
} from "@/store/services/auth/authApi";
import { useNavigate } from "react-router";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { toast } from "sonner";
import { recoverySchema } from "../schemas/recovery";


const useRecovery = () => {
  const [recovery, { isLoading }] = useRecoveryMutation();
  const [resetPassword, { isLoading: isLoadingReset }] =
    useResetPasswordMutation();
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string }) => {
    try {
      await recovery(values.email).unwrap();
      toast.success("Correo de recuperación enviado", {
        description: "Revisa tu bandeja de entrada",
        position: "top-right",
      });
      navigate("/auth/login");
    } catch (error) {
      console.error(error);
      toast.error("Error al enviar el correo de recuperación", {
        description: "Por favor, intenta de nuevo.",
        position: "top-right",
      });
    }
  };

  const handleResetPassword = async (
    values: { password: string },
    setSubmitting: (isSubmitting: boolean) => void
  ) => {
    try {
      await resetPassword(values.password).unwrap();
      alert(" Contraseña actualizada con éxito");
    } catch (e: unknown) {
      if (e instanceof Error) {
        alert(" Error: " + e.message);
      } else {
        alert(" Error inesperado");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
    validationSchema: toFormikValidationSchema(recoverySchema),
    navigate,
    handleResetPassword,
    isLoadingReset,
  };
};

export default useRecovery;
