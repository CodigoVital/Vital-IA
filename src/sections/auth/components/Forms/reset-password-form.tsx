import { Formik, Form, Field } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { toFormikValidationSchema } from "zod-formik-adapter";
import useRecovery from "../../hooks/use-recovery";
import { resetSchema } from "../../schemas/recovery";
import { PasswordRequirements } from "../password-requierments";

const ResetPasswordForm = () => {
  const { handleResetPassword, isLoading } = useRecovery();

  return (
    <Formik
      initialValues={{ password: "" , confirmPassword: "" }}
      validationSchema={toFormikValidationSchema(resetSchema)}
      onSubmit={async (values, { setSubmitting }) => {
        await handleResetPassword(values, setSubmitting);
      }}
    >
      {({ isValid, dirty, values }) => (
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
              className={cn(
                "rounded border-1 border-border-secondary placeholder:text-border-secondary",
                `bg-white `
              )}
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
              className={cn(
                "rounded border-1 border-border-secondary placeholder:text-border-secondary",
                `bg-white `
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={!isValid || !dirty || isLoading}
            className="bg-primary-custom  font-lato"
          >
            {isLoading ? "Actualizando..." : "Cambiar contraseña"}
          </Button>
          <PasswordRequirements password={values.password} />
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
