import CustomDialog from "@/components/custom/custom-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Shield } from "lucide-react";
import LucideIcon from "@/components/lucide-icon-name";
import SymptomInput from "./symptom-input";
import SymptomChipsList from "./symptom-chips-list";
import ResultView from "../view/result-view";
import { useIsMobile } from "@/hooks/use-mobile";

interface SymptomSelectedListProps {
  sintomasSeleccionados: string[];
  sintomaInput: string;
  setSintomaInput: (input: string) => void;
  agregarSintoma: () => void;
  eliminarSintoma: (sintoma: string) => void;
  analizarSintomas: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  resetSymptoms: () => void;
}

export const SymptomSelectedList = ({
  sintomasSeleccionados,
  sintomaInput,
  setSintomaInput,
  agregarSintoma,
  eliminarSintoma,
  analizarSintomas,
  open,
  setOpen,
  resetSymptoms,
}: SymptomSelectedListProps) => {
  const isMobile = useIsMobile();
  return (
    <section
      id="description-symptom"
      className="flex flex-col gap-2 "
      aria-label="Síntomas personalizados"
    >
      <div className={`flex justify-between items-center`}>
        <h3 className="text-primary-custom-text font-lato font-bold mb-1">
          Describe otros síntomas
        </h3>
        <Button
          onClick={resetSymptoms}
          className={cn(
            "text-primary-custom-text font-lato",
            "hover:bg-[#F0F0F0] active:bg-[#E0E0E0] ",
            "bg-transparent border-none text-primary-custom-text"
          )}
        >
          {isMobile ? (
            <LucideIcon name={`Trash`} />
          ) : (
            <>
              Limpiar selección <LucideIcon name={`RotateCw`} />
            </>
          )}
        </Button>
      </div>
      <SymptomChipsList
        sintomasSeleccionados={sintomasSeleccionados}
        eliminarSintoma={eliminarSintoma}
      />
      <SymptomInput
        sintomaInput={sintomaInput}
        setSintomaInput={setSintomaInput}
        agregarSintoma={agregarSintoma}
      />
      <Button
        disabled={sintomasSeleccionados.length === 0}
        id="diagnosis-submit-button"
        onClick={analizarSintomas}
        className="mt-6 mx-auto font-lato p-5.5 bg-primary-custom rounded-md text-white   text-base shadow hover:bg-[#1A2E46] hover:text-white w-full"
      >
        <Shield className="w-5 h-5" /> Analizar Síntomas
      </Button>
      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        children={<ResultView />}
      />
    </section>
  );
};
