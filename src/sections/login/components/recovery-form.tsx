import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const RecoveryForm = () => {
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
        <p className="text-sm text-primary-custom-text">
          Si este correo está registrado, entonces enviaremos un método de
          recuperación
        </p>
      </div>
    </form>
  );
};
