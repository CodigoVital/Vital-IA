import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";

export const ChatInput = () => {
  return (
    <>
      <div className="flex items-center gap-5 p-5 rounded-b-lg ">
        <Input
          placeholder={"Escribe tu consulta aqui..."}
          className="rounded  border-1  bg-white border-[#CBD5E1]"
        />

        <Button className="bg-[var(--customBackground)] text-white">
          <SendHorizonal />
        </Button>
      </div>
    </>
  );
};

export default ChatInput;
