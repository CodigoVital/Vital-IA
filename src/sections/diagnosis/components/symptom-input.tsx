import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface SymptomInputProps {
  sintomaInput: string;
  setSintomaInput: (input: string) => void;
  agregarSintoma: () => void;
}

const SymptomInput = ({
  sintomaInput,
  setSintomaInput,
  agregarSintoma,
}: SymptomInputProps) => {
  return (
    <div className="flex gap-2 items-center">
      <Input
        id="diagnosis-symptom-input"
        className="flex-1 h-12 px-4 py-2 bg-[white] rounded border border-[#E0E0E0] text-[#1A2E46] text-base font-normal focus:outline-none focus:border-[#2DC6C4]"
        type="text"
        placeholder="Escribe un síntoma..."
        value={sintomaInput}
        onChange={(e) => setSintomaInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") agregarSintoma();
        }}
        aria-label="Agregar síntoma personalizado"
      />
      <Button
        className=" bg-primary-custom font-lato rounded-xl p-6 hover:cursor-pointer text-white  flex items-center gap-2 text-base shadow hover:bg-[#1A2E46] hover:text-white w-auto"
        onClick={agregarSintoma}
        type="button"
        aria-label="Agregar síntoma"
      >
        <Plus className="w-6 h-6 " />
        Agregar
      </Button>
    </div>
  );
};

export default SymptomInput;
