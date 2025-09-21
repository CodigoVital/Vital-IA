import { CustomHeader } from "@/components/custom/custom-header";
import { InfoCardView } from "./info-card-view";
import CustomAlert from "@/components/custom/custom-alert";

const ResultadoView = () => {
  return (
    <section className="w-[930px]  max-w-full">
      <div className="p-6 pb-0 min-w-0 h-[458px] max-h-[458px] overflow-y-auto">
        <CustomHeader
          className="text-2xl font-bold text-[#1A2E46] mb-2 text-left"
          title="Resultado del Análisis"
        />
        <InfoCardView />
      </div>
      <CustomAlert
        title="¡Importante!"
        className="bg-[#FEE2E2] "
        variant="destructive"
        description="Este resultado es una simulación basada en un modelo simple y no constituye un diagnóstico médico. Para un diagnóstico preciso, consulta a un profesional de la salud."
      />
    </section>
  );
};

export default ResultadoView;
