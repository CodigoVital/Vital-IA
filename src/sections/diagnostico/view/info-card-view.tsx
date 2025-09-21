export const InfoCardView = () => {
  return (
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
        <li>Si los síntomas persisten o empeoran, busca atención médica.</li>
      </ul>
    </div>
  );
};
