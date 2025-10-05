import { Formik, Form, Field } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import LucideIcon from "@/components/lucide-icon-name";
import useRecovery from "../hooks/use-recovery";

export const RecoveryForm = () => {
  const { handleSubmit, isLoading, recoverySchema } = useRecovery();

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={toFormikValidationSchema(recoverySchema)}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className="flex flex-col gap-6">
          <div className="grid gap-3">
            <Label
              htmlFor="email"
              className="text-primary-custom-text font-bold font-lato"
            >
              Correo
            </Label>
            <Field
              as={Input}
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              className={cn(
                "rounded border-1 border-border-secondary placeholder:text-border-secondary",
                `bg-white`
              )}
            />
          </div>

          <p className="text-[10px] sm:text-xs font-lato text-center text-primary-custom-text overflow-hidden text-ellipsis">
            Si este correo está registrado, entonces enviaremos un método de
            recuperación
          </p>

          <Button
            type="submit"
            disabled={!isValid || !dirty || isLoading}
            className={cn(
              "bg-primary-custom font-lato hover:bg-primary-custom/80",
              `w-full`
            )}
          >
            {isLoading ? (
              <>
                <LucideIcon name="Loader2" className="animate-spin w-4 h-4" />
                enviando...
              </>
            ) : (
              "Recuperar"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
