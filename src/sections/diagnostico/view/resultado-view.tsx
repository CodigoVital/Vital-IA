
const ResultadoView = () => {
  return (
    <section>
      <div className="flex justify-end items-center w-full"></div>
      <div className="p-6 pb-0 min-w-0">
        <h2 className="text-2xl font-bold text-[#1A2E46] mb-2 text-left">
          Resultado del Análisis
        </h2>
        <hr className="border-t border-[#E2E8F0] mb-4" />
        <div className="bg-white border border-[#CBD5E1] rounded-md p-4 mb-6 overflow-auto">
          <div className="mb-2">
            <span className="font-bold text-[#1A2E46]">Análisis General:</span>
            <span className="text-[#1A2E46] ml-2">
              Los síntomas que presentas son generales.
            </span>
          </div>
          <div className="mb-2">
            <span className="font-bold text-[#1A2E46]">Nivel de urgencia:</span>
            <span className="text-[#CF8A40] ml-2">Moderado - Observación</span>
          </div>
          <div className="font-bold text-[#1A2E46] mb-1">Recomendaciones:</div>
          <ul className="list-disc ml-6 text-[#1A2E46]">
            <li>Monitorea tus síntomas de cerca.</li>
            <li>Evita la automedicación sin conocer la causa.</li>
            <li>
              Si los síntomas persisten o empeoran, busca atención médica.
            </li>
          </ul>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="bg-[#FEE2E2] border border-[#FCA5A5] rounded-md p-4 flex flex-col sm:flex-row items-start gap-3 overflow-auto">
          <span className="text-[#DC2626] text-xl mt-1" aria-hidden="true">
            &#9888;
          </span>
          <div>
            <span className="font-bold text-[#DC2626] block mb-1">
              ¡Importante!
            </span>
            <span className="text-[#DC2626] text-base">
              Este resultado es una simulación basada en un modelo simple y no
              constituye un diagnóstico médico. Para un diagnóstico preciso,
              consulta a un profesional de la salud.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultadoView;
