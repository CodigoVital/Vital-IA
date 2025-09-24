import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Link,  useNavigate } from "react-router";

export const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-primary-custom-text">
            Correo
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            className={cn("rounded border-custom-border", `bg-white `)}
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-primary-custom-text">
              Contraseña
            </Label>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-primary-custom-text"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            className={cn("rounded border-custom-border", `bg-white `)}
            placeholder="********"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Button
            onClick={() => navigate("/")}
            type="submit"
            className={cn(
              "bg-primary-custom font-light hover:bg-primary-custom/80",
              `w-full`
            )}
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-primary-custom-text ">
        ¿No tienes una cuenta?{" "}
        <Link
          to="#"
          className="underline underline-offset-4 text-primary-custom-text"
        >
          Regístrate
        </Link>
      </div>
    </form>
  );
};
