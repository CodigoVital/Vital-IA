

interface ResultadoViewProps {
  onClose?: () => void;
}

const ResultadoView: React.FC<ResultadoViewProps> = ({ onClose }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-0 w-full border border-[#E2E8F0] relative">
      <button
        className="absolute right-6 top-6 text-[#334155] hover:text-[#1e293b] text-2xl focus:outline-none"
        aria-label="Cerrar"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div className="p-6 pb-0">
        <h2 className="text-2xl font-bold text-[#1A2E46] mb-2 text-left">Resultado del Análisis</h2>
        <hr className="border-t border-[#E2E8F0] mb-4" />
        <div className="bg-white border border-[#CBD5E1] rounded-md p-4 mb-6">
          <div className="mb-2">
            <span className="font-bold text-[#1A2E46]">Análisis General:</span>
            <span className="text-[#1A2E46] ml-2">Los síntomas que presentas son generales.</span>
          </div>
          <div className="mb-2">
            <span className="font-bold text-[#1A2E46]">Nivel de urgencia:</span>
            <span className="text-[#CF8A40] ml-2">Moderado - Observación</span>
          </div>
          <div className="font-bold text-[#1A2E46] mb-1">Recomendaciones:</div>
          <ul className="list-disc ml-6 text-[#1A2E46]">
            <li>Monitorea tus síntomas de cerca.</li>
            <li>Evita la automedicación sin conocer la causa.</li>
            <li>Si los síntomas persisten o empeoran, busca atención médica.</li>
          </ul>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="bg-[#FEE2E2] border border-[#FCA5A5] rounded-md p-4 flex items-start gap-3">
          <span className="text-[#DC2626] text-xl mt-1" aria-hidden="true">&#9888;</span>
          <div>
            <span className="font-bold text-[#DC2626] block mb-1">¡Importante!</span>
            <span className="text-[#DC2626] text-base">Este resultado es una simulación basada en un modelo simple y no constituye un diagnóstico médico. Para un diagnóstico preciso, consulta a un profesional de la salud.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultadoView;
