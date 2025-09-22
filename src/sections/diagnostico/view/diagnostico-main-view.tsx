import useDiagnostico from "../hooks/use-diagnostico";
import ResultadoView from "./resultado-view";
import { Button } from "@/components/ui/button";
import CustomDialog from "@/components/custom/custom-dialog";
import { DiagnosisHeader } from "../components/diagnosis-header";
import { SymptomCommonList } from "../components/symptom-common-list";
import { useIsMobile } from "@/hooks/use-mobile";

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
                className="px-4 py-2 bg-[#E6F7F6] rounded-xl flex items-center gap-2 text-[#1A2E46] text-base font-medium border border-[#B2E2E1] shadow-sm"
              >
                {sintoma}
                <button
                  className="ml-2 text-[#2DC6C4] text-lg font-bold hover:text-[#1A2E46]"
                  onClick={() => eliminarSintoma(sintoma)}
                  type="button"
                  aria-label={`Eliminar ${sintoma}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <input
              className="flex-1 h-12 px-4 py-2 bg-[#F5F7FA] rounded-xl border border-[#E0E0E0] text-[#1A2E46] text-base font-normal focus:outline-none focus:border-[#2DC6C4]"
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
              className="px-5 py-3 bg-[#2DC6C4] rounded-xl text-white font-bold flex items-center gap-2 text-base shadow hover:bg-[#1A2E46] hover:text-white w-auto"
              onClick={agregarSintoma}
              type="button"
              aria-label="Agregar síntoma"
            >
              <span className="material-icons text-lg" aria-hidden="true">
                add
              </span>
              Agregar
            </Button>
          </div>

          <CustomDialog
            ariaLabel={"Analizar Síntomas"}
            className="mt-6 mx-auto px-6 py-3 bg-[#2DC6C4] rounded-xl text-white font-bold text-base shadow hover:bg-[#1A2E46] hover:text-white w-full"
            title={"Analizar Síntomas"}
            children={<ResultadoView />}
          />
        </section>
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
