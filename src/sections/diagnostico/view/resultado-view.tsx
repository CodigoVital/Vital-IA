import { CustomHeader } from "@/components/custom/custom-header";

import CustomAlert from "@/components/custom/custom-alert";
import { InfoCard } from "../components/info-card";
import { recommendations } from "../data/recommendations.mock";

const ResultadoView = () => {
  return (
    <section
      className="w-[930px] h-[679px] flex flex-col
     max-w-full gap-5"
    >
      <div className=" min-w-0 flex-1  border-none ">
        <CustomHeader
          className="text-2xl font-bold text-[#1A2E46] mb-2 text-left"
          title="Resultado del Análisis"
        />
        <InfoCard
          analysis="los síntomas que presentas son generales"
          urgencyColor="#CF8A40"
          urgencyLevel="Moderado - Observación"
          recommendations={recommendations}
        />
      </div>
      <CustomAlert
        title="¡Importante!"
        className="bg-[#FEE2E2] border-1 border-[#991B1B] "
        variant="warning"
        iconName="TriangleAlert"
        description="Este resultado es una simulación basada en un modelo simple y no constituye un diagnóstico médico. Para un diagnóstico preciso, consulta a un profesional de la salud."
      />
    </section>
  );
};

export default ResultadoView;
