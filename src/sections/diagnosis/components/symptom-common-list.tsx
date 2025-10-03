import { Button } from "@/components/ui/button";
import { sintomasComunes } from "../data/symptom.mock";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface SymptomCommonListProps {
  sintomasSeleccionados: string[];
  seleccionarSintomaComun: (sintoma: string) => void;
}

export const SymptomCommonList = ({
  sintomasSeleccionados,
  seleccionarSintomaComun,
}: SymptomCommonListProps) => {
  return (
    <section
      id="diagnosis-common-symptoms"
      className="flex   flex-col gap-2"
      aria-label="Síntomas comunes"
    >
      <h3 className="text-primary-custom-text font-latotext-base font-bold mb-1">
        Síntomas Comunes
      </h3>
      <ScrollArea className="w-full overflow-x-auto rounded-md ">
        <div className="flex gap-2 flex-nowrap p-2">
          {sintomasComunes.map((sintoma) => (
            <Button
              id="add-custom-symptom"
              key={sintoma}
              className={cn(
                `px-4 py-2 rounded-xl border-2 hover:cursor-pointer border-[#E0E0E0] bg-[#F5F7FA] text-primary-custom-text font-lato  font-medium transition-colors duration-150 ${
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
