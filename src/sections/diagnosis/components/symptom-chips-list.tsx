import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-mobile";

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
      <ScrollArea className="w-full min-h-18 p-3 rounded-lg custom-dashed-border">
        {sintomasSeleccionados.length === 0 ? (
          <div
            className={`text-gray-400 text-sm font-normal w-full text-center py-2 ${
              isMobile ? "text-xs" : ""
            }`}
          >
            Toca las sugerencias o escribe tus síntomas para realizar el
            análisis
          </div>
        ) : (
          <div className="flex flex-row gap-2 items-center whitespace-nowrap">
            {sintomasSeleccionados.map((sintoma) => (
              <div
                key={sintoma}
                className="px-4 py-2 bg-[#73C7E3]/20 rounded-xl flex items-center gap-2 
                     text-[#1A2E46] text-base font-medium border border-[#B2E2E1] 
                     shadow-sm flex-shrink-0"
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
        )}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default SymptomChipsList;
