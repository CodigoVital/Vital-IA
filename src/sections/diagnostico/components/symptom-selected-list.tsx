import CustomDialog from "@/components/custom/custom-dialog";
import { Button } from "@/components/ui/button";
import ResultadoView from "../view/resultado-view";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Plus, Shield } from "lucide-react";
import LucideIcon from "@/components/lucide-icon-name";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  return (
    <section
      className="flex flex-col gap-2 "
      aria-label="Síntomas personalizados"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-[#1A2E46] text-base font-bold mb-1">
          Describe otros síntomas
        </h3>
        <Button
          onClick={resetSymptoms}
          className={cn(
            "hover:bg-[]",
            "shadow-none border border-[#CBD5E1]",
            "bg-transparent text-primary-custom-text"
          )}
        >
          Limpiar selección <LucideIcon name={`RotateCw`} />
        </Button>
      </div>

      <ScrollArea className="w-full">
        <div className="flex gap-2 pb-2 min-w-max">
          {sintomasSeleccionados.map((sintoma) => (
            <div
              key={sintoma}
              className="px-4 py-2 bg-[#73C7E3]/20 rounded-xl flex items-center gap-2 text-[#1A2E46] text-base font-medium border border-[#B2E2E1] shadow-sm whitespace-nowrap flex-shrink-0"
            >
              {sintoma}
              <Button
                size="sm"
                variant="ghost"
                className="h-6 w-6 p-0 text-[#2DC6C4] hover:text-[#1A2E46] hover:bg-transparent"
                onClick={() => eliminarSintoma(sintoma)}
                type="button"
                aria-label={`Eliminar ${sintoma}`}
              >
                ×
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="flex gap-2 items-center">
        <Input
          className="flex-1 h-12 px-4 py-2 bg-[white] rounded border border-[#E0E0E0] text-[#1A2E46] text-base font-normal focus:outline-none focus:border-[#2DC6C4]"
          type="text"
          placeholder="Escribe un síntoma..."
          value={sintomaInput}
          onChange={(e) => setSintomaInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") agregarSintoma();
          }}
          aria-label="Agregar síntoma personalizado"
        />
        <Button
          className=" bg-primary-custom rounded-xl p-6 text-white font-thin flex items-center gap-2 text-base shadow hover:bg-[#1A2E46] hover:text-white w-auto"
          onClick={agregarSintoma}
          type="button"
          aria-label="Agregar síntoma"
        >
          <Plus className="w-6 h-6 " />
          Agregar
        </Button>
      </div>
      <Button
        onClick={analizarSintomas}
        className="mt-6 mx-auto p-5.5 bg-primary-custom rounded-md text-white font-thin  text-base shadow hover:bg-[#1A2E46] hover:text-white w-full"
      >
        <Shield className="w-5 h-5" /> Analizar Síntomas
      </Button>

      <CustomDialog
        open={open}
        onClose={() => setOpen(false)}
        children={<ResultadoView />}
      />
    </section>
  );
};
