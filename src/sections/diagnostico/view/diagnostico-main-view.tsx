import { useState } from "react";

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
  const [sintomasSeleccionados, setSintomasSeleccionados] = useState<string[]>([]);
  const [sintomaInput, setSintomaInput] = useState("");
  const [mostrarAdvertencia, setMostrarAdvertencia] = useState(false);

  const agregarSintoma = () => {
    const sintoma = sintomaInput.trim();
    if (sintoma && !sintomasSeleccionados.includes(sintoma)) {
      setSintomasSeleccionados([...sintomasSeleccionados, sintoma]);
      setSintomaInput("");
      setMostrarAdvertencia(false);
    }
  };

  const seleccionarSintomaComun = (sintoma: string) => {
    if (!sintomasSeleccionados.includes(sintoma)) {
      setSintomasSeleccionados([...sintomasSeleccionados, sintoma]);
      setMostrarAdvertencia(false);
    }
  };

  const eliminarSintoma = (sintoma: string) => {
    setSintomasSeleccionados(sintomasSeleccionados.filter(s => s !== sintoma));
  };

  const analizarSintomas = () => {
    if (sintomasSeleccionados.length === 0) {
      setMostrarAdvertencia(true);
      return;
    }
    // Aquí iría la lógica de análisis real
    alert(`Analizando síntomas: ${sintomasSeleccionados.join(", ")}`);
  };

  return (
    <div className="w-full h-full p-8 bg-[#FCF8F3] rounded-2xl flex flex-col gap-6 shadow-sm border border-[#E6E6E6]">
      <div className="flex flex-col gap-2">
        <h2 className="text-[28px] font-bold text-[#1A2E46] leading-tight">Clasificar Enfermedad</h2>
  <div className="w-full h-[2px] bg-[#E0E0E0] rounded mt-2 mb-2"></div>
        <div className="text-[#1A2E46] text-base font-normal leading-snug mt-1">
          Seleccioná los síntomas de la lista o escribilos.<br />
          Esto dara una orientación de la enfermedad que puedes estar presentando.
        </div>
        <div className="text-[#1A2E46] text-base font-bold leading-snug mt-1">
          Esta herramienta es solo ayuda, no reemplaza el diagnóstico del médico profesional
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[#1A2E46] text-base font-bold mb-1">Síntomas Comunes</div>
        <div className="flex flex-wrap gap-2">
          {sintomasComunes.map(sintoma => (
            <button
              key={sintoma}
              className={`px-4 py-2 rounded-xl border border-[#E0E0E0] bg-[#F5F7FA] text-[#1A2E46] text-base font-medium shadow-sm transition-colors duration-150 ${sintomasSeleccionados.includes(sintoma) ? "bg-[#2DC6C4] text-white border-[#2DC6C4]" : "hover:bg-[#E6F7F6]"}`}
              onClick={() => seleccionarSintomaComun(sintoma)}
              type="button"
            >
              {sintoma}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-[#1A2E46] text-base font-bold mb-1">Describe otros síntomas</div>
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
          />
          <button
            className="px-5 py-3 bg-[#2DC6C4] rounded-xl text-white font-bold flex items-center gap-2 text-base shadow hover:bg-[#1A2E46] transition-colors duration-150"
            onClick={agregarSintoma}
            type="button"
          >
            <span className="material-icons text-lg">add</span>
            Agregar
          </button>
        </div>
        <button
          className="w-full mt-4 px-4 py-3 bg-[#2DC6C4] rounded-xl text-white font-bold flex items-center justify-center gap-2 text-lg shadow hover:bg-[#1A2E46] transition-colors duration-150"
          onClick={analizarSintomas}
          type="button"
        >
          <span className="material-icons mr-2">shield</span>
          Analizar Síntomas
        </button>
      </div>
      {mostrarAdvertencia && (
        <div className="w-full mt-2 px-4 py-3 bg-[#FFE3C3] rounded-xl border border-[#FFB775] text-[#FFB775] text-base font-medium shadow-sm">
          Por favor, selecciona al menos un síntoma para analizar.
        </div>
      )}
    </div>
  );
};