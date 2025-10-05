import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ username, email, password });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="grid gap-3">
          <Label
            htmlFor="username"
            className="text-primary-custom-text font-lato font-bold"
          >
            Nombre de usuario
          </Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Alex Talavera"
            className={cn("rounded border-custom-border", `bg-white `)}
          />
        </div>
        <div className="grid gap-3">
          <Label
            htmlFor="email"
            className="text-primary-custom-text font-lato font-bold"
          >
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
            <Label
              htmlFor="password"
              className="text-primary-custom-text font-lato font-bold"
            >
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
        {/* <div className="flex flex-col items-start">
          <ul className="list-disc pl-5">
            <li className="text-xs text-[#16A34A]">Más de 8 caracteres.</li>
            <li className="text-xs text-[#991B1B]">
              Al menos una letra mayúscula.
            </li>
            <li className="text-xs text-[#991B1B]">Al menos una minúscula.</li>
          </ul>
        </div> */}

        <div className="flex flex-col gap-3">
          <Button
            onClick={() => navigate("/")}
            type="submit"
            disabled
            className={cn(
              "bg-primary-custom  font-lato hover:bg-primary-custom/80",
              `w-full`
            )}
          >
            Registrarse
          </Button>
        </div>
      </div>
    </form>
  );
};
