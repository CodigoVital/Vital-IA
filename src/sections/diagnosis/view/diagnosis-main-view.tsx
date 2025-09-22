import useDiagnostico from "../hooks/use-diagnostico";
import { SymptomCommonList } from "../components/symptom-common-list";
import { SymptomSelectedList } from "../components/symptom-selected-list";
import CustomAlert from "@/components/custom/custom-alert";
import { CustomHeader } from "@/components/custom/custom-header";
import { useIsMobile } from "@/hooks/use-mobile";
import { SymptomInstructions } from "../components/symptom-instructions";

export const DiagnosisMainView = () => {
  const {
    sintomasSeleccionados,
    sintomaInput,
    mostrarAdvertencia,
    agregarSintoma,
    seleccionarSintomaComun,
    eliminarSintoma,
    analizarSintomas,
    setSintomaInput,
    open,
    setOpen,
    resetSymptoms,
  } = useDiagnostico();
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <CustomHeader title="Clasificar Enfermedad" />}

      <div
        className={`w-full h-full p-5 border-none shadow-none bg-[#FCF8F3] flex flex-col gap-3  `}
        aria-label="Clasificar enfermedad"
      >
        <SymptomInstructions />
        <SymptomCommonList
          sintomasSeleccionados={sintomasSeleccionados}
          seleccionarSintomaComun={seleccionarSintomaComun}
        />

        <SymptomSelectedList
          open={open}
          resetSymptoms={resetSymptoms}
          setOpen={setOpen}
          analizarSintomas={analizarSintomas}
          sintomasSeleccionados={sintomasSeleccionados}
          sintomaInput={sintomaInput}
          setSintomaInput={setSintomaInput}
          agregarSintoma={agregarSintoma}
          eliminarSintoma={eliminarSintoma}
        />

        {mostrarAdvertencia && (
          <CustomAlert
            variant="alert"
            description="Por favor, selecciona al menos un síntoma para analizar."
            className="w-full mt-2 px-4 py-3 bg-[#FFF3E3] rounded-xl border border-[#FFB775] text-[#FF8800] text-base font-medium shadow-sm flex items-center gap-2"
          />
        )}
      </div>
    </>
  );
};
