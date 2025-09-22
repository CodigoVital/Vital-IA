import CustomDialog from "@/components/custom/custom-dialog";
import { Button } from "@/components/ui/button";
import ResultadoView from "../view/resultado-view";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface SymptomSelectedListProps {
  sintomasSeleccionados: string[];
  sintomaInput: string;
  setSintomaInput: (input: string) => void;
  agregarSintoma: () => void;
  eliminarSintoma: (sintoma: string) => void;
}

export const SymptomSelectedList = ({
  sintomasSeleccionados,
  sintomaInput,
  setSintomaInput,
  agregarSintoma,
  eliminarSintoma,
}: SymptomSelectedListProps) => {
  return (
    <section
      className="flex flex-col gap-2"
      aria-label="Síntomas personalizados"
    >
      <h3 className="text-[#1A2E46] text-base font-bold mb-1">
        Describe otros síntomas
      </h3>
      <div className="flex flex-wrap gap-2 mb-2">
        {sintomasSeleccionados.map((sintoma) => (
          <div
            key={sintoma}
            className="px-4 py-2 bg-[#73C7E3]/20 rounded-xl flex items-center gap-2 text-[#1A2E46] text-base font-medium border border-[#B2E2E1] shadow-sm"
          >
            {sintoma}
            <Button
              className={cn(
                "bg-transparent p-[10px] hover:bg-transparent border-none shadow-none focus:ring-0 focus:ring-offset-0",
                `ml-2 text-[#2DC6C4] text-lg font-bold hover:text-[#1A2E46]`
              )}
              onClick={() => eliminarSintoma(sintoma)}
              type="button"
              variant={"default"}
              aria-label={`Eliminar ${sintoma}`}
            >
              ×
            </Button>
          </div>
        ))}
      </div>
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

      <CustomDialog
        ariaLabel={"Analizar Síntomas"}
        className="mt-6 mx-auto px-6 py-3 bg-primary-custom rounded-xl text-white  text-base shadow hover:bg-[#1A2E46] hover:text-white w-full"
        title={"Analizar Síntomas"}
        children={<ResultadoView />}
      />
    </section>
  );
};
