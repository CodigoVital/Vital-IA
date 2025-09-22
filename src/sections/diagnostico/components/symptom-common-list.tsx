import { Button } from "@/components/ui/button";
import { sintomasComunes } from "../data/symptom.mock";
import { cn } from "@/lib/utils";

interface SymptomCommonListProps {
  sintomasSeleccionados: string[];
  seleccionarSintomaComun: (sintoma: string) => void;
}

export const SymptomCommonList = ({
  sintomasSeleccionados,
  seleccionarSintomaComun,
}: SymptomCommonListProps) => {
  return (
    <section className="flex flex-col gap-2" aria-label="Síntomas comunes">
      <h3 className="text-[#1A2E46] text-base font-bold mb-1">
        Síntomas Comunes
      </h3>
      <div className="flex flex-wrap gap-2">
        {sintomasComunes.map((sintoma) => (
          <Button
            key={sintoma}
            className={cn(
              `px-4 py-2 rounded-xl border border-[#E0E0E0] bg-[#F5F7FA] text-[#1A2E46] text-base font-medium shadow-sm transition-colors duration-150 ${
                sintomasSeleccionados.includes(sintoma)
                  ? "bg-[#2DC6C4] text-white border-[#2DC6C4]"
                  : "hover:bg-[#E6F7F6] hover:text-[#1A2E46] focus:text-[#1A2E46]"
              }`
            )}
            onClick={() => seleccionarSintomaComun(sintoma)}
            type="button"
            aria-label={`Seleccionar síntoma ${sintoma}`}
          >
            {sintoma}
          </Button>
        ))}
      </div>
    </section>
  );
};
