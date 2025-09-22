import { CustomHeader } from "@/components/custom/custom-header";

export const DiagnosisHeader = () => {
  return (
    <>
      <CustomHeader title="Clasificar Enfermedad" />
      <div className="flex flex-col gap-2">
        <p className="text-[#1A2E46] text-base font-normal leading-snug mt-1">
          Seleccioná los síntomas de la lista o escribilos.
          <br />
          Esto dará una orientación de la enfermedad que puedes estar
          presentando.
        </p>
        <p className="text-[#1A2E46] text-base font-bold leading-snug mt-1">
          Esta herramienta es solo ayuda, no reemplaza el diagnóstico del médico
          profesional
        </p>
      </div>
    </>
  );
};
