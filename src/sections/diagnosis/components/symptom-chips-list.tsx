import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface SymptomChipsListProps {
  sintomasSeleccionados: string[];
  eliminarSintoma: (sintoma: string) => void;
}

const SymptomChipsList = ({
  sintomasSeleccionados,
  eliminarSintoma,
}: SymptomChipsListProps) => {
  return (
    <div className="w-full">
      <ScrollArea className="w-full whitespace-nowrap rounded-md  ">
        <div className="flex items-center gap-2 min-w-max pb-3 ">
          {sintomasSeleccionados.map((sintoma) => (
            <div
              key={sintoma}
              className="px-4 py-2 bg-[#73C7E3]/20 rounded-xl flex items-center gap-2 
                     text-[#1A2E46] text-base font-medium border border-[#B2E2E1] 
                     shadow-sm whitespace-nowrap flex-shrink-0"
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
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default SymptomChipsList;
