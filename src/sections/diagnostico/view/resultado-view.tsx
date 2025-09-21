import { CustomHeader } from "@/components/custom/custom-header";
import { InfoCardView } from "./info-card-view";

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
