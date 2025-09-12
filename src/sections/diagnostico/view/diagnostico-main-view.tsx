
export const DiagnosticoView = () => {
  return (
    <div className="self-stretch self-stretch p-5 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
    <div className="flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Seleccioná los sintomas de la lista o escribilos.Esto dara una orientacion de la enfermedad que puedes estar presentando.</div>
        <div className="justify-start text-color-text-primary text-sm font-bold font-['Inter']">Esta herramienta es solo una ayuda, no reemplaza el diagnostico del medico profesional</div>
    </div>
    <div className="flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="justify-start text-color-text-primary text-sm font-bold font-['Inter']">Síntomas Comunes</div>
        <div className="inline-flex justify-start items-start gap-2.5 overflow-hidden">
            <div className="p-2.5 bg-color-background-input rounded-xl outline outline-1 outline-offset-[-1px] outline-color-border flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Fiebre</div>
            </div>
            <div className="p-2.5 bg-color-background-input rounded-xl outline outline-1 outline-offset-[-1px] outline-color-border flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Tos</div>
            </div>
            <div className="p-2.5 bg-color-background-input rounded-xl outline outline-1 outline-offset-[-1px] outline-color-border flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Dolor de cabeza</div>
            </div>
            <div className="p-2.5 bg-color-background-input rounded-xl outline outline-1 outline-offset-[-1px] outline-color-border flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Dolor de garganta</div>
            </div>
            <div className="p-2.5 bg-color-background-input rounded-xl outline outline-1 outline-offset-[-1px] outline-color-border flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Resfriado</div>
            </div>
            <div className="p-2.5 bg-color-background-input rounded-xl outline outline-1 outline-offset-[-1px] outline-color-border flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Congestión Nasal</div>
            </div>
            <div className="p-2.5 bg-color-background-input rounded-xl outline outline-1 outline-offset-[-1px] outline-color-border flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Fatiga</div>
            </div>
            <div className="p-2.5 bg-color-background-input rounded-xl outline outline-1 outline-offset-[-1px] outline-color-border flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Dolor muscular</div>
            </div>
            <div className="p-2.5 bg-color-background-input rounded-xl outline outline-1 outline-offset-[-1px] outline-color-border flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-sm font-medium font-['Inter']">Náuseas</div>
            </div>
        </div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-2.5 overflow-hidden">
        <div className="justify-start text-color-text-primary text-sm font-bold font-['Inter']">Describe otros síntomas</div>
        <div className="self-stretch inline-flex justify-start items-start gap-2.5 flex-wrap content-start">
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Otro ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">sintoma con nombre largo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">si, otro mas</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">pobre tipo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">lorem</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">ipsum</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
            <div className="p-2.5 bg-color-background-highlight-20/20 rounded-xl flex justify-start items-start gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">Ejemplo</div>
                <div className="justify-start text-color-text-primary text-[10px] font-medium font-['Inter']">×</div>
            </div>
        </div>
        <div className="self-stretch py-2.5 inline-flex justify-start items-center gap-2.5 overflow-hidden">
            <div data-state="default" className="flex-1 h-10 p-2.5 bg-color-background-input rounded outline outline-1 outline-offset-[-1px] outline-color-border flex justify-start items-center gap-2.5 overflow-hidden">
                <div className="justify-start text-color-text-muted text-sm font-medium font-['Inter']">Escribe un síntoma...</div>
            </div>
            <div data-order="normal" data-show-icon="true" data-show-text="true" data-type="primary" className="p-2.5 bg-color-primary rounded-lg flex justify-start items-center gap-2.5 overflow-hidden">
                <div className="relative inline-flex flex-col justify-start items-start overflow-hidden">
                    <div className="w-5 h-5 left-[2.11px] top-[2px] absolute">
                        <div className="w-5 h-5 left-0 top-0 absolute bg-color-text-on-primary" />
                    </div>
                </div>
                <div className="justify-start text-color-text-on-primary text-sm font-medium font-['Inter']">Agregar</div>
            </div>
        </div>
        <div data-order="normal" data-show-icon="true" data-show-text="true" data-type="primary" className="self-stretch p-2.5 bg-color-primary rounded-lg inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="relative inline-flex flex-col justify-start items-start overflow-hidden">
                <div className="w-4 h-5 left-[4px] top-[2px] absolute">
                    <div className="w-4 h-5 left-0 top-0 absolute bg-color-text-on-primary" />
                </div>
            </div>
            <div className="justify-start text-color-text-on-primary text-sm font-medium font-['Inter']">Analizar Síntomas</div>
        </div>
    </div>
    <div data-show-icon="false" data-title="false" data-type="warning" className="self-stretch p-2.5 bg-color-background-warning/20 rounded-lg outline outline-1 outline-offset-[-1px] outline-color-warning inline-flex justify-start items-start gap-2.5 overflow-hidden">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
            <div className="self-stretch justify-start text-color-warning text-sm font-medium font-['Inter']">Por favor, selecciona al menos un síntoma para analizar.</div>
        </div>
    </div>
</div>
  );
};