import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <form>
      <div className="flex flex-col gap-4">
        <div className="grid gap-3">
          <Label htmlFor="username" className="text-primary-custom-text">
            Nombre de usuario
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="Alex Talavera"
            className={cn("rounded border-custom-border", `bg-white `)}
          />
        </div>
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
          </div>
          <Input
            id="password"
            type="password"
            className={cn("rounded border-custom-border", `bg-white `)}
            placeholder="********"
          />
        </div>
        <div className="flex flex-col items-start">
          <ul className="list-disc pl-5">
            <li className="text-xs text-[#16A34A]">Más de 8 caracteres.</li>
            <li className="text-xs text-[#991B1B]">
              Al menos una letra mayúscula.
            </li>
            <li className="text-xs text-[#991B1B]">Al menos una minúscula.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={() => navigate("/")}
            type="submit"
            disabled
            className={cn(
              "bg-primary-custom font-light hover:bg-primary-custom/80",
              `w-full`
            )}
          >
            Registrarse
          </Button>
        </div>
      </div>

      {/* <div className="mt-4 text-center text-sm text-primary-custom-text ">
        ¿No tienes una cuenta?{" "}
        <Link
          to="#"
          className="underline underline-offset-4 text-primary-custom-text"
        >
          Regístrate
        </Link>
      </div> */}
    </form>
  );
};
