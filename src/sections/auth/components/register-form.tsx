import { Formik, Form } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { PasswordRequirements } from "./password-requierments";
import { registerSchema } from "../schemas/register";

type RegisterFormValues = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const navigate = useNavigate();
  const initialValues: RegisterFormValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values: RegisterFormValues) => {
    console.log(values);
    navigate("/");
  };

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
            <Input {...getFieldProps("username")} placeholder="Alex Talavera" />
            {errors.username && touched.username && (
              <p className="text-red-600 text-sm">{errors.username}</p>
            )}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="email">Correo</Label>
            <Input {...getFieldProps("email")} placeholder="m@example.com" />
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
            Registrarse
          </Button>
        </Form>
      )}
    </Formik>
  );
};
