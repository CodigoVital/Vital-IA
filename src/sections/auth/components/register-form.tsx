import { Formik, Form } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { PasswordRequirements } from "./password-requierments";
import { registerSchema } from "../schemas/register";
import useRegister from "../hooks/use-register";

export const RegisterForm = () => {
  const { initialValues, handleSubmit, isRegistering } = useRegister();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(registerSchema)}
      onSubmit={handleSubmit}
    >
      {({ getFieldProps, errors, touched, values }) => (
        <Form className="flex flex-col gap-4">
          <div className="grid gap-3">
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input
              {...getFieldProps("username")}
              placeholder="Alex Talavera"
              className={cn(
                "rounded border-1 border-border-secondary placeholder:text-border-secondary",
                `bg-white `
              )}
            />
            {errors.username && touched.username && (
              <p className="text-red-600 text-sm">{errors.username}</p>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="email">Correo</Label>
            <Input
              {...getFieldProps("email")}
              placeholder="m@example.com"
              className={cn(
                "rounded border-1 border-border-secondary placeholder:text-border-secondary",
                `bg-white `
              )}
            />
            {errors.email && touched.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              {...getFieldProps("password")}
              type="password"
              placeholder="********"
              className={cn(
                "rounded border-1 border-border-secondary placeholder:text-border-secondary",
                `bg-white `
              )}
            />
            <PasswordRequirements password={values.password} />
            {errors.password && touched.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
          </div>

          <Button
            type="submit"
            className={cn(
              "bg-primary-custom hover:bg-primary-custom/80 w-full"
            )}
          >
            {isRegistering ? "Cargando..." : "Registrarse"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
