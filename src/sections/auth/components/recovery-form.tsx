import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const RecoveryForm = () => {
  return (
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-3">
          <Label
            htmlFor="email"
            className="text-primary-custom-text font-bold font-lato"
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
        <p className="text-[10px] sm:text-xs font-lato text-center text-primary-custom-text  overflow-hidden text-ellipsis">
          Si este correo está registrado, entonces enviaremos un método de
          recuperación
        </p>

        <Button
          type="submit"
          disabled
          className={cn(
            "bg-primary-custom  font-lato  hover:bg-primary-custom/80",
            `w-full`
          )}
        >
          Continuar
        </Button>
      </div>
    </form>
  );
};
