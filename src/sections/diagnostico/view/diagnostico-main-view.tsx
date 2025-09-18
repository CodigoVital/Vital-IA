
import useDiagnostico from "../hooks/use-diagnostico";
import ResultadoView from "./resultado-view";
import { Button } from "@/components/ui/button";
const sintomasComunes = [
  "Fiebre",
  "Tos",
  "Dolor de cabeza",
  "Dolor de garganta",
  "Resfriado",
  "Congestión Nasal",
  "Fatiga",
  "Dolor muscular",
  "Náuseas",
];

export const DiagnosticoView = () => {
  const {
    sintomasSeleccionados,
    sintomaInput,
    mostrarAdvertencia,
    mostrarResultado,
    agregarSintoma,
    seleccionarSintomaComun,
    eliminarSintoma,
    setSintomaInput,
    analizarSintomas,
    setMostrarResultado,
  } = useDiagnostico();

  // Si está mostrando el resultado, ocultar la sección principal
  if (mostrarResultado) {
    return <ResultadoView onClose={() => setMostrarResultado(false)} />;
  }

  return (
    <section className="w-full h-full p-8 bg-[#FCF8F3] rounded-2xl flex flex-col gap-6 shadow-sm border border-[#E6E6E6]" aria-label="Clasificar enfermedad">
      <header className="flex flex-col gap-2">
        <h2 className="text-[28px] font-bold text-[#1A2E46] leading-tight">Clasificar Enfermedad</h2>
        <hr className="w-full h-[2px] bg-[#E0E0E0] rounded mt-2 mb-2" />
        <p className="text-[#1A2E46] text-base font-normal leading-snug mt-1">
          Seleccioná los síntomas de la lista o escribilos.<br />
          Esto dará una orientación de la enfermedad que puedes estar presentando.
        </p>
        <p className="text-[#1A2E46] text-base font-bold leading-snug mt-1">
          Esta herramienta es solo ayuda, no reemplaza el diagnóstico del médico profesional
        </p>
      </header>
      <section className="flex flex-col gap-2" aria-label="Síntomas comunes">
        <h3 className="text-[#1A2E46] text-base font-bold mb-1">Síntomas Comunes</h3>
        <div className="flex flex-wrap gap-2">
          {sintomasComunes.map(sintoma => (
            <button
              key={sintoma}
              className={`px-4 py-2 rounded-xl border border-[#E0E0E0] bg-[#F5F7FA] text-[#1A2E46] text-base font-medium shadow-sm transition-colors duration-150 ${sintomasSeleccionados.includes(sintoma) ? "bg-[#2DC6C4] text-white border-[#2DC6C4]" : "hover:bg-[#E6F7F6] hover:text-[#1A2E46] focus:text-[#1A2E46]"}`}
              onClick={() => seleccionarSintomaComun(sintoma)}
              type="button"
              aria-label={`Seleccionar síntoma ${sintoma}`}
            >
              {sintoma}
            </button>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2" aria-label="Síntomas personalizados">
        <h3 className="text-[#1A2E46] text-base font-bold mb-1">Describe otros síntomas</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {sintomasSeleccionados.map(sintoma => (
            <div key={sintoma} className="px-4 py-2 bg-[#E6F7F6] rounded-xl flex items-center gap-2 text-[#1A2E46] text-base font-medium border border-[#B2E2E1] shadow-sm">
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
            onChange={e => setSintomaInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") agregarSintoma(); }}
            aria-label="Agregar síntoma personalizado"
          />
          <Button
            className="px-5 py-3 bg-[#2DC6C4] rounded-xl text-white font-bold flex items-center gap-2 text-base shadow hover:bg-[#1A2E46] hover:text-white w-auto"
            onClick={agregarSintoma}
            type="button"
            aria-label="Agregar síntoma"
          >
            <span className="material-icons text-lg" aria-hidden="true">add</span>
            Agregar
          </Button>
        </div>
        <Button
          className="mt-6 mx-auto px-6 py-3 bg-[#2DC6C4] rounded-xl text-white font-bold text-base shadow hover:bg-[#1A2E46] hover:text-white w-full"
          onClick={analizarSintomas}
          type="button"
          aria-label="Analizar síntomas"
        >
          Analizar Síntomas
        </Button>
      </section>
      {mostrarAdvertencia && (
        <div className="w-full mt-2 px-4 py-3 bg-[#FFE3C3] rounded-xl border border-[#FFB775] text-[#FFB775] text-base font-medium shadow-sm" role="alert">
          Por favor, selecciona al menos un síntoma para analizar.
        </div>
      )}
    </section>
  );
}