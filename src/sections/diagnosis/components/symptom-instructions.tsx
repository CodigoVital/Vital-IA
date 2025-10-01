import { useIsMobile } from "@/hooks/use-mobile";

export const SymptomInstructions = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <div className="flex flex-col gap-2">
        <p
          className={`text-primary-custom-text font-lato ${
            isMobile ? "text-sm" : "text-base"
          } font-normal leading-snug mt-1`}
        >
          Seleccioná los síntomas de la lista o escribilos.
        </p>
        <p className={isMobile ? "text-sm text-primary-custom-text font-lato" : "text-base text-primary-custom-text font-lato"}>
          Esto dará una orientación de la enfermedad que puedes estar
          presentando.
        </p>
        <strong
          className={`text-primary-custom-text font-lato ${
            isMobile ? "text-sm" : "text-base"
          } font-bold leading-snug mt-1`}
        >
          Esta herramienta es solo ayuda, no reemplaza el diagnóstico del médico
          profesional
        </strong>
      </div>
    </>
  );
};
