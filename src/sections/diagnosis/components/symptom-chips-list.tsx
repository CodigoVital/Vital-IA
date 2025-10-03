import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface SymptomChipsListProps {
  sintomasSeleccionados: string[];
  eliminarSintoma: (sintoma: string) => void;
}

const SymptomChipsList = ({
  sintomasSeleccionados,
  eliminarSintoma,
}: SymptomChipsListProps) => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full">
      <ScrollArea className="w-full min-h-18 p-3 rounded-lg  custom-dashed-border">
        {sintomasSeleccionados.length === 0 ? (
          <div
            className={`flex items-center justify-center w-full h-full font-lato py-2 pt-3 text-gray-400 font-normal text-center ${
              isMobile ? "text-xs" : "text-sm"
            }`}
          >
            Toca las sugerencias o escribe tus síntomas para realizar el
            análisis
          </div>
        ) : (
          <div className="flex flex-row gap-2 items-center whitespace-nowrap">
            {sintomasSeleccionados.map((sintoma) => (
              <div
                id="diagnosis-symptom-chips"
                key={sintoma}
                className="px-4 py-2 bg-[#73C7E3]/20 rounded-xl  flex items-center gap-2 
                     text-primary-custom-text font-medium border font-lato
                      flex-shrink-0"
              >
                {sintoma}
                <Button
                  size="sm"
                  variant="ghost"
                  className={cn(
                    `h-6 w-6 p-0 text-[#2DC6C4] hover:cursor-pointer hover:text-[#1A2E46] hover:bg-transparent`
                  )}
                  onClick={() => eliminarSintoma(sintoma)}
                  type="button"
                  aria-label={`Eliminar ${sintoma}`}
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        )}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default SymptomChipsList;
