import { useRecoveryMutation } from "@/store/services/auth/authApi";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
const recoverySchema = z.object({
  email: z.string().email("Correo inválido"),
});

const useRecovery = () => {
  const [recovery, { isLoading }] = useRecoveryMutation();

  const handleSubmit = async (values: { email: string }) => {
    try {
      await recovery(values.email).unwrap();
      alert(
        "Si el correo está registrado, se enviará un enlace de recuperación."
      );
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error. Intenta nuevamente.");
    }
  };

  return {
    handleSubmit,
    isLoading,
    validationSchema: toFormikValidationSchema(recoverySchema),
    recoverySchema,
  };
};

export default useRecovery;
