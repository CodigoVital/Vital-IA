
import { Formik, Form } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
import LucideIcon from "@/components/lucide-icon-name";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { loginSchema } from "../schemas/login";
import useLoginForm from "../hooks/use-login";

export const LoginForm = () => {
  const { initialValues, handleSubmit, isLoading, errorMessage } =
    useLoginForm();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(loginSchema)}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ getFieldProps }) => (
        <Form className="flex flex-col gap-4">
          <div className="grid gap-3">
            <Label
              htmlFor="email"
              className="text-primary-custom-text font-lato font-bold"
            >
              Correo
            </Label>
            <Input {...getFieldProps("email")} placeholder="m@example.com" />
          </div>

          <div className="grid gap-3">
            <div className="flex items-center">
              <Label
                htmlFor="password"
                className="text-primary-custom-text font-lato font-bold"
              >
                Contraseña
              </Label>
              <Link
                to="recovery"
                className="ml-auto font-lato inline-block text-sm underline-offset-4 hover:underline text-primary-custom-text"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <Input
              {...getFieldProps("password")}
              type="password"
              placeholder="********"
            />
          </div>
          {errorMessage && (
            <p className="text-xs text-center font-lato text-[#991B1B] ">
              {errorMessage}
            </p>
          )}
          <div className="flex flex-col gap-3">
            <Button
              type="submit"
              className={cn(
                "bg-primary-custom font-lato font-light hover:bg-primary-custom/80 w-full flex items-center justify-center gap-2"
              )}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <LucideIcon name="Loader2" className="animate-spin w-4 h-4" />
                  Cargando...
                </>
              ) : (
                "Iniciar sesión"
              )}
            </Button>
          </div>

          <div className="mt-4 text-center font-lato text-sm text-primary-custom-text">
            ¿No tienes una cuenta?{" "}
            <Link
              to="register"
              className="underline underline-offset-4 font-lato text-primary-custom-text"
            >
              Regístrate
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
