import useDiagnostico from "../hooks/use-diagnostico";
import { DiagnosisHeader } from "../components/diagnosis-header";
import { SymptomCommonList } from "../components/symptom-common-list";
import { useIsMobile } from "@/hooks/use-mobile";
import { SymptomSelectedList } from "../components/symptom-selected-list";

export const DiagnosticoView = () => {
  const {
    sintomasSeleccionados,
    sintomaInput,
    mostrarAdvertencia,
    agregarSintoma,
    seleccionarSintomaComun,
    eliminarSintoma,
    setSintomaInput,
  } = useDiagnostico();

  const isMobile = useIsMobile();

  // Si está mostrando el resultado, ocultar la sección principal

  return (
    <>
      <section
        className={`w-full h-full p-8 bg-[#FCF8F3] rounded-2xl flex flex-col gap-6 shadow-sm border border-[#E6E6E6] ${
          isMobile ? "rounded-none" : ""
        }`}
        aria-label="Clasificar enfermedad"
      >
        <DiagnosisHeader />

        <SymptomCommonList
          sintomasSeleccionados={sintomasSeleccionados}
          seleccionarSintomaComun={seleccionarSintomaComun}
        />

        <SymptomSelectedList
          sintomasSeleccionados={sintomasSeleccionados}
          sintomaInput={sintomaInput}
          setSintomaInput={setSintomaInput}
          agregarSintoma={agregarSintoma}
          eliminarSintoma={eliminarSintoma}
        />

        {mostrarAdvertencia && (
          <div
            className="w-full mt-2 px-4 py-3 bg-[#FFF3E3] rounded-xl border border-[#FFB775] text-[#FF8800] text-base font-medium shadow-sm flex items-center gap-2"
            role="alert"
          >
            <span
              className="material-icons text-[#FF8800] text-xl"
              aria-hidden="true"
            >
              warning
            </span>
            <span className="flex-1 text-center">
              Por favor, selecciona al menos un síntoma para analizar.
            </span>
          </div>
        )}
      </section>
    </>
  );
};
