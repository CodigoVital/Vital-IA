import { useRecoveryMutation } from "@/store/services/auth/authApi";
import { useNavigate } from "react-router";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { toast } from "sonner";

const recoverySchema = z.object({
  email: z.string().email("Correo inválido"),
});

const useRecovery = () => {
  const [recovery, { isLoading }] = useRecoveryMutation();
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

  return {
    handleSubmit,
    isLoading,
    validationSchema: toFormikValidationSchema(recoverySchema),
    recoverySchema,
    navigate,
  };
};

export default useRecovery;
