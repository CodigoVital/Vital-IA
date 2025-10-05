import { Formik, Form, Field } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { useResetPasswordMutation } from "@/store/services/auth/authApi";

const resetSchema = z
  .object({
    password: z.string().min(6, "Mínimo 6 caracteres"),
    confirmPassword: z.string().min(6, "Mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
  });

const ResetPasswordForm = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  return (
    <Formik
      initialValues={{ password: "" }}
      validationSchema={toFormikValidationSchema(resetSchema)}
      onSubmit={async (values, { setSubmitting }) => {
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
      }}
    >
      {({ isValid, dirty }) => (
        <Form className="flex flex-col gap-6 max-w-sm ">
          <div className="grid gap-3">
            <Label
              htmlFor="password"
              className="text-primary-custom-text font-lato"
            >
              Nueva contraseña
            </Label>
            <Field
              as={Input}
              id="password"
              name="password"
              type="password"
              placeholder="********"
              className={cn("rounded border-1 border-border-secondary")}
            />
          </div>
          <div className="grid gap-3">
            <Label
              htmlFor="confirmPassword"
              className="text-primary-custom-text font-lato"
            >
              Confirmar nueva contraseña
            </Label>
            <Field
              as={Input}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="********"
              className={cn("rounded border-1 border-border-secondary")}
            />
          </div>

          <Button
            type="submit"
            disabled={!isValid || !dirty || isLoading}
            className="bg-primary-custom  font-lato"
          >
            {isLoading ? "Actualizando..." : "Cambiar contraseña"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
