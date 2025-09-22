import { CustomHeader } from "@/components/custom/custom-header";

import CustomAlert from "@/components/custom/custom-alert";
import { InfoCard } from "../components/info-card";
import { recommendations } from "../data/recommendations.mock";
import { useIsMobile } from "@/hooks/use-mobile";

const ResultadoView = () => {
  const isMobile = useIsMobile();
  return (
    <section
      className={`
      w-full max-w-[930px] ${isMobile ? "aspect-auto px-2" : "aspect-[930/679]"}
      flex flex-col gap-5
      `}
    >
      <CustomHeader
        className={`text-2xl font-bold text-[#1A2E46] mb-2 text-left `}
        title="Resultado del Análisis"
      />
      <div className="flex-1 min-h-0 overflow-hidden">
        <InfoCard
          analysis="los síntomas que presentas son generales"
          urgencyColor="#CF8A40"
          urgencyLevel="Moderado - Observación"
          recommendations={recommendations}
        />
      </div>
      <CustomAlert
        title="¡Importante!"
        className={`bg-[#FEE2E2] border-1 border-[#991B1B] ${
          isMobile ? "text-sm" : ""
        }`}
        variant="warning"
        iconName="TriangleAlert"
        description="Este resultado es una simulación basada en un modelo simple y no constituye un diagnóstico médico. Para un diagnóstico preciso, consulta a un profesional de la salud."
      />
    </section>
  );
};

export default ResultadoView;
