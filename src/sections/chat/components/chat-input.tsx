import { LucideIcon } from "@/components/lucide-icon-name";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


export const ChatInput = () => {
  return (
    <>
      <div className="flex items-center gap-5 p-5 rounded-b-lg ">
        <Input
          placeholder={"Escribe tu consulta aqui..."}
          className="rounded  border-1  bg-white border-[#CBD5E1]"
        />

        <Button className="bg-[var(--customBackground)] text-white">
          <LucideIcon name='SendHorizontal'/>
        </Button>
      </div>
    </>
  );
};

export default ChatInput;
